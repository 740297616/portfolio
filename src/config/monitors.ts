/**
 * 站点探活白名单。
 *
 * 这是唯一的目标来源：serverless 函数（api/status.ts）和前端 UI 都读取它。
 * 前端只会把 slug 发给后端，绝不传 URL，因此外部无法让服务端请求任意地址（避免 SSRF）。
 *
 * 本文件被 Node 环境直接 import，所以不要使用 `@/` 别名或任何浏览器 API。
 */

export interface MonitorTarget {
  /** 与 sites.ts 中 PersonalSite.slug 保持一致 */
  slug: string
  /** 服务端探活地址，仅在服务端使用 */
  url: string
  /** 在 Uptime Kuma / UptimeRobot 中的监控项名称，缺省时按 slug 匹配 */
  monitorName?: string
}

/** 需要探活的站点，新增站点时与 sites.ts 一起加 */
export const monitorTargets: readonly MonitorTarget[] = [
  { slug: 'blog', url: 'https://blog.lydia0.cn', monitorName: 'Blog' },
  { slug: 'home', url: 'https://lydia0.cn', monitorName: 'Homepage' },
  { slug: 'nezha', url: 'https://nz.lydia0.cn', monitorName: 'Nezha' },
  { slug: 'ghproxy', url: 'https://ghproxy.lydia0.cn', monitorName: 'GHProxy' },
  { slug: 'api', url: 'https://api.lydia0.cn', monitorName: 'API' },
]

/** 允许查询的 slug 集合 */
export const monitorSlugs: readonly string[] = monitorTargets.map((target) => target.slug)

/** 前端轮询间隔（毫秒） */
export const STATUS_REFRESH_INTERVAL = 60_000

/** 服务端缓存有效期（秒），避免每个访客都触发一轮真实探测 */
export const STATUS_CACHE_TTL_SECONDS = 60

/** 单个站点的探活超时（毫秒） */
export const STATUS_PROBE_TIMEOUT = 8_000

/** 前端请求状态接口的超时（毫秒） */
export const STATUS_FETCH_TIMEOUT = 10_000

/** 状态接口路径，可用 VITE_STATUS_ENDPOINT 覆盖 */
export const STATUS_ENDPOINT_DEFAULT = '/api/status'
