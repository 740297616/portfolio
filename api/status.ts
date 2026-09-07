/**
 * 站点在线状态探活接口（Web 标准 Request/Response，可跑在 Vercel / Netlify / Cloudflare Workers）。
 *
 * 数据源按优先级：
 *   1. Uptime Kuma 状态页（UPTIME_KUMA_STATUS_PAGE_URL）
 *   2. UptimeRobot API（UPTIMEROBOT_READONLY_API_KEY）
 *   3. 服务端直接探活（兜底）
 *
 * 安全：目标地址只来自 monitors.ts 白名单，请求方不能传入任何 URL，因此不存在 SSRF。
 * 浏览器只请求本接口，不直连目标站点，因此不存在 CORS 问题。
 */
import {
  monitorTargets,
  STATUS_CACHE_TTL_SECONDS,
  STATUS_PROBE_TIMEOUT,
  type MonitorTarget,
} from '../src/config/monitors.ts'
import type { SiteStatus } from '../src/types/content.ts'

interface StatusEntry {
  slug: string
  status: SiteStatus
}

interface StatusPayload {
  /** 生成时间，ISO 字符串 */
  updatedAt: string
  /** 实际使用的数据源 */
  source: 'uptime-kuma' | 'uptimerobot' | 'probe'
  sites: StatusEntry[]
}

/** 实例内存缓存，命中期内不再触发真实探测 */
let cache: { payload: StatusPayload; expiresAt: number } | null = null

/** 全部标记为同一状态，用于降级 */
function fallbackEntries(status: SiteStatus): StatusEntry[] {
  return monitorTargets.map((target) => ({ slug: target.slug, status }))
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

/** 按 monitorName（优先）或 slug 不区分大小写匹配监控项 */
function matchTarget(name: string): MonitorTarget | undefined {
  const key = name.trim().toLowerCase()
  return monitorTargets.find(
    (target) => (target.monitorName ?? target.slug).toLowerCase() === key || target.slug === key,
  )
}

async function fetchWithTimeout(
  url: string,
  init: RequestInit,
  timeout: number,
): Promise<Response> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeout)
  try {
    return await fetch(url, { ...init, signal: controller.signal })
  } finally {
    clearTimeout(timer)
  }
}

/**
 * Uptime Kuma 公开状态页。`UPTIME_KUMA_STATUS_PAGE_URL` 形如
 * `https://status.example.com/status/default`，接口取同源的 heartbeat JSON。
 */
async function fromUptimeKuma(statusPageUrl: string): Promise<StatusEntry[] | null> {
  const trimmed = statusPageUrl.replace(/\/+$/, '')
  const slug = trimmed.split('/').pop()
  if (!slug) return null
  const origin = new URL(trimmed).origin

  const [heartbeatRes, monitorRes] = await Promise.all([
    fetchWithTimeout(
      `${origin}/api/status-page/heartbeat/${slug}`,
      { headers: { accept: 'application/json' } },
      STATUS_PROBE_TIMEOUT,
    ),
    fetchWithTimeout(
      `${origin}/api/status-page/${slug}`,
      { headers: { accept: 'application/json' } },
      STATUS_PROBE_TIMEOUT,
    ),
  ])
  if (!heartbeatRes.ok || !monitorRes.ok) return null

  const heartbeat: unknown = await heartbeatRes.json()
  const page: unknown = await monitorRes.json()
  if (!isRecord(heartbeat) || !isRecord(page)) return null

  const heartbeatList = heartbeat.heartbeatList
  if (!isRecord(heartbeatList)) return null

  // 从状态页配置里取 monitor id → name 的映射
  const idToName = new Map<string, string>()
  const groups = page.publicGroupList
  if (Array.isArray(groups)) {
    for (const group of groups) {
      if (!isRecord(group) || !Array.isArray(group.monitorList)) continue
      for (const monitor of group.monitorList) {
        if (!isRecord(monitor)) continue
        const { id, name } = monitor
        if (typeof id === 'number' && typeof name === 'string') idToName.set(String(id), name)
      }
    }
  }
  if (idToName.size === 0) return null

  const result = new Map<string, SiteStatus>(
    monitorTargets.map((target) => [target.slug, 'unknown' as SiteStatus]),
  )

  for (const [monitorId, beats] of Object.entries(heartbeatList)) {
    const name = idToName.get(monitorId)
    if (!name || !Array.isArray(beats)) continue
    const target = matchTarget(name)
    if (!target) continue
    const latest = beats.at(-1)
    if (!isRecord(latest)) continue
    // Kuma status: 0=down 1=up 2=pending 3=maintenance
    const beat = latest.status
    if (beat === 1 || beat === 3) result.set(target.slug, 'online')
    else if (beat === 0) result.set(target.slug, 'offline')
  }

  return [...result].map(([slug, status]) => ({ slug, status }))
}

/** UptimeRobot v2 getMonitors */
async function fromUptimeRobot(apiKey: string): Promise<StatusEntry[] | null> {
  const res = await fetchWithTimeout(
    'https://api.uptimerobot.com/v2/getMonitors',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
      },
      body: new URLSearchParams({ api_key: apiKey, format: 'json' }).toString(),
    },
    STATUS_PROBE_TIMEOUT,
  )
  if (!res.ok) return null

  const body: unknown = await res.json()
  if (!isRecord(body) || body.stat !== 'ok' || !Array.isArray(body.monitors)) return null

  const result = new Map<string, SiteStatus>(
    monitorTargets.map((target) => [target.slug, 'unknown' as SiteStatus]),
  )

  for (const monitor of body.monitors) {
    if (!isRecord(monitor)) continue
    const name = typeof monitor.friendly_name === 'string' ? monitor.friendly_name : ''
    const target =
      matchTarget(name) ??
      (typeof monitor.url === 'string'
        ? monitorTargets.find((candidate) => {
            try {
              return new URL(candidate.url).host === new URL(String(monitor.url)).host
            } catch {
              return false
            }
          })
        : undefined)
    if (!target) continue
    // UptimeRobot status: 2=up, 8/9=down, 0/1=paused|not checked
    const status = monitor.status
    if (status === 2) result.set(target.slug, 'online')
    else if (status === 8 || status === 9) result.set(target.slug, 'offline')
  }

  return [...result].map(([slug, status]) => ({ slug, status }))
}

/** 兜底：服务端直接请求白名单地址 */
async function fromDirectProbe(): Promise<StatusEntry[]> {
  const entries = await Promise.all(
    monitorTargets.map(async (target): Promise<StatusEntry> => {
      const request = (method: 'HEAD' | 'GET') =>
        fetchWithTimeout(
          target.url,
          {
            method,
            redirect: 'follow',
            headers: { 'user-agent': 'lydia-homepage-status-probe' },
          },
          STATUS_PROBE_TIMEOUT,
        )
      try {
        let res = await request('HEAD')
        // 部分服务不支持 HEAD，用 GET 复核
        if (res.status === 405 || res.status === 501) res = await request('GET')
        // 只要拿到 HTTP 响应就说明服务在线；5xx 视为离线
        return { slug: target.slug, status: res.status >= 500 ? 'offline' : 'online' }
      } catch {
        // 超时 / DNS / TLS / 连接被拒 —— 无法区分“确实离线”与“探测本身失败”，取 offline 更贴近用户感知
        return { slug: target.slug, status: 'offline' }
      }
    }),
  )
  return entries
}

async function buildPayload(): Promise<StatusPayload> {
  const env = process.env
  const kumaUrl = env.UPTIME_KUMA_STATUS_PAGE_URL
  const robotKey = env.UPTIMEROBOT_READONLY_API_KEY

  if (kumaUrl) {
    try {
      const sites = await fromUptimeKuma(kumaUrl)
      if (sites) return { updatedAt: new Date().toISOString(), source: 'uptime-kuma', sites }
    } catch {
      // 状态页不可用则继续往下降级
    }
  }

  if (robotKey) {
    try {
      const sites = await fromUptimeRobot(robotKey)
      if (sites) return { updatedAt: new Date().toISOString(), source: 'uptimerobot', sites }
    } catch {
      // 同上
    }
  }

  return {
    updatedAt: new Date().toISOString(),
    source: 'probe',
    sites: await fromDirectProbe(),
  }
}

export default async function handler(request: Request): Promise<Response> {
  const headers: Record<string, string> = {
    'content-type': 'application/json; charset=utf-8',
    // 让 CDN 承担缓存，避免每个访客都触发真实探测
    'cache-control': `public, max-age=0, s-maxage=${STATUS_CACHE_TTL_SECONDS}, stale-while-revalidate=${STATUS_CACHE_TTL_SECONDS * 5}`,
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response(JSON.stringify({ error: 'method not allowed' }), {
      status: 405,
      headers: { ...headers, 'cache-control': 'no-store', allow: 'GET, HEAD' },
    })
  }

  const now = Date.now()
  if (cache && cache.expiresAt > now) {
    return new Response(JSON.stringify(cache.payload), { status: 200, headers })
  }

  try {
    const payload = await buildPayload()
    cache = { payload, expiresAt: now + STATUS_CACHE_TTL_SECONDS * 1000 }
    return new Response(JSON.stringify(payload), { status: 200, headers })
  } catch {
    // 任何意外都返回 unknown，前端不应因此报错
    const payload: StatusPayload = {
      updatedAt: new Date().toISOString(),
      source: 'probe',
      sites: fallbackEntries('unknown'),
    }
    return new Response(JSON.stringify(payload), { status: 200, headers })
  }
}
