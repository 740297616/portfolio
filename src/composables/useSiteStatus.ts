import type { SiteStatus } from '@/types/content'
import {
  monitorSlugs,
  STATUS_ENDPOINT_DEFAULT,
  STATUS_FETCH_TIMEOUT,
  STATUS_REFRESH_INTERVAL,
} from '@/config/monitors'

/** slug → 状态 */
export type SiteStatusMap = Record<string, SiteStatus>

interface StatusEntry {
  slug: string
  status: SiteStatus
}

const VALID_STATUS: readonly SiteStatus[] = ['online', 'offline', 'unknown', 'checking']

const endpoint = import.meta.env.VITE_STATUS_ENDPOINT ?? STATUS_ENDPOINT_DEFAULT

/** 所有 slug 填充为同一状态 */
function fill(status: SiteStatus): SiteStatusMap {
  return Object.fromEntries(monitorSlugs.map((slug) => [slug, status]))
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

/** 只接受白名单内的 slug 和合法状态值，其余忽略 */
function parseEntries(payload: unknown): StatusEntry[] | null {
  if (!isRecord(payload) || !Array.isArray(payload.sites)) return null

  const entries: StatusEntry[] = []
  for (const item of payload.sites) {
    if (!isRecord(item)) continue
    const { slug, status } = item
    if (typeof slug !== 'string' || !monitorSlugs.includes(slug)) continue
    if (typeof status !== 'string' || !VALID_STATUS.includes(status as SiteStatus)) continue
    entries.push({ slug, status: status as SiteStatus })
  }
  return entries.length ? entries : null
}

// 模块级共享状态：多处调用只维护一份数据
const statusMap = ref<SiteStatusMap>(fill('checking'))
const updatedAt = ref<Date | null>(null)
let inFlight: Promise<void> | null = null

async function refresh(): Promise<void> {
  // 同一时刻只发一个请求
  if (inFlight) return inFlight

  inFlight = (async () => {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), STATUS_FETCH_TIMEOUT)
    try {
      const res = await fetch(endpoint, {
        headers: { accept: 'application/json' },
        signal: controller.signal,
      })
      if (!res.ok) throw new Error(`status endpoint responded ${res.status}`)

      const entries = parseEntries(await res.json())
      if (!entries) throw new Error('malformed status payload')

      // 未返回的 slug 保持 unknown，不沿用旧值
      const next = fill('unknown')
      for (const entry of entries) next[entry.slug] = entry.status
      statusMap.value = next
      updatedAt.value = new Date()
    } catch {
      // 探测失败不抛给页面，统一降级为 unknown
      statusMap.value = fill('unknown')
    } finally {
      clearTimeout(timer)
      inFlight = null
    }
  })()

  return inFlight
}

/**
 * 站点在线状态：首屏为 `checking`，拉到结果后自动更新，
 * 每 60s 轮询一次，页面切到后台时暂停、回到前台立即补一次。
 */
export function useSiteStatus() {
  const visibility = useDocumentVisibility()

  const { pause, resume } = useIntervalFn(refresh, STATUS_REFRESH_INTERVAL, {
    immediate: false,
    immediateCallback: false,
  })

  watch(visibility, (state) => {
    if (state === 'visible') {
      resume()
      void refresh()
    } else {
      pause()
    }
  })

  // useIntervalFn 会随组件 scope 自动清理，无需手动 onUnmounted
  onMounted(() => {
    if (visibility.value !== 'hidden') {
      resume()
      void refresh()
    }
  })

  /** 取某个站点的状态，未知 slug 一律 unknown */
  const statusOf = (slug: string): SiteStatus => statusMap.value[slug] ?? 'unknown'

  return { statusMap: readonly(statusMap), statusOf, updatedAt: readonly(updatedAt), refresh }
}
