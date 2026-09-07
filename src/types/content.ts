/**
 * 站点内容模型。所有文案、项目、时间线等数据都定义在 src/config/ 下，
 * 组件不直接写死内容。icon 字段统一用 Iconify 图标名（`prefix:name`）。
 */

export interface CtaLink {
  label: string
  href: string
}

export interface NavItem {
  label: string
  /** 页内锚点（如 `#projects`）或路由路径 */
  href: string
}

export interface HeroConfig {
  /** 按行堆叠展示的标题 */
  headline: string[]
  intro: string
  primaryCta: CtaLink
  secondaryCta: CtaLink
}

export interface FocusArea {
  icon: string
  title: string
  description: string
}

export interface AboutConfig {
  paragraphs: string[]
  focuses: FocusArea[]
}

export type TechLevel = 'expert' | 'proficient' | 'familiar'

export interface TechItem {
  name: string
  icon: string
  level: TechLevel
  /** 使用年限，提供时才展示 */
  years?: number
}

export interface TechCategory {
  name: string
  items: TechItem[]
}

export interface Project {
  slug: string
  title: string
  description: string
  /** 卡片上展示的技术标签 */
  tech: string[]
  /** 自由标签，如 AI / Open Source */
  tags: string[]
  github?: string
  demo?: string
  /** /public 下的截图路径，缺省时渲染占位图 */
  image?: string
  /** 置顶项目排在最前 */
  pinned?: boolean
}

export type TimelineKind = 'education' | 'experience' | 'project' | 'milestone'

export interface TimelineItem {
  /** 展示日期，如 `2024` 或 `2024 — Now` */
  date: string
  title: string
  description: string
  kind: TimelineKind
}

export interface NowItem {
  icon: string
  label: string
  detail: string
}

export interface StatItem {
  label: string
  value: number
  /** 数字后的后缀，如 `+` */
  suffix?: string
  icon: string
}

export interface FriendLink {
  name: string
  href: string
  /** 名称下方的单行备注 */
  description?: string
  /** 未提供 avatar 时显示的兜底图标 */
  icon?: string
  /** 头像 URL，提供时以圆形图片展示 */
  avatar?: string
}

export interface SocialLink {
  name: string
  icon: string
  href: string
  /** 名称旁展示的 handle，如 `@Lydia` */
  handle?: string
}

// 游戏服务器
export type ServerStatus = 'online' | 'offline'
export interface GameServer {
  slug: string
  game: string
  icon: string
  status: ServerStatus
  /** 当前 / 最大在线人数，未知时省略 */
  players?: { current: number; max: number }
  version?: string
  address: string
}

// 个人站点
export interface PersonalSite {
  slug: string
  name: string
  description: string
  url: string
  /** 展示用域名，如 `blog.example.com` */
  domain: string
  icon: string
  status: ServerStatus
}

export interface SiteConfig {
  name: string
  title: string
  description: string
  /** 站点根地址，不带结尾斜杠 */
  url: string
  slogan: string
  nav: NavItem[]
}
