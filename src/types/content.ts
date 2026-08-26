/**
 * Content model for the whole site.
 * All copy, projects, timeline entries etc. are described by these types
 * and provided from `src/config/` — components never hardcode content.
 */

export interface CtaLink {
  label: string
  href: string
}

export interface NavItem {
  label: string
  /** In-page anchor (e.g. `#projects`) or route path */
  href: string
}

export interface HeroConfig {
  /** Rendered as stacked display lines */
  headline: string[]
  intro: string
  primaryCta: CtaLink
  secondaryCta: CtaLink
}

export interface FocusArea {
  /** Iconify icon name, e.g. `ph:code-duotone` */
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
  /** Iconify icon name */
  icon: string
  level: TechLevel
  /** Years of use — optional, shown when provided */
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
  /** Tech stack labels shown on the card */
  tech: string[]
  /** Freeform tags, e.g. `AI` / `Open Source` */
  tags: string[]
  github?: string
  demo?: string
  /** Screenshot path under /public — placeholder rendered when absent */
  image?: string
  /** Pinned projects sort first */
  pinned?: boolean
}

export type TimelineKind = 'education' | 'experience' | 'project' | 'milestone'

export interface TimelineItem {
  /** Display date, e.g. `2024` or `2024 — Now` */
  date: string
  title: string
  description: string
  kind: TimelineKind
}

export interface NowItem {
  /** Iconify icon name */
  icon: string
  /** Verb, e.g. `Building` */
  label: string
  detail: string
}

export interface StatItem {
  label: string
  value: number
  /** Appended after the animated number, e.g. `+` */
  suffix?: string
  /** Iconify icon name */
  icon: string
}

export interface FriendLink {
  /** Site / person name shown as the link label */
  name: string
  href: string
  /** Optional one-line note shown on hover (title attr) */
  description?: string
}

export interface SocialLink {
  name: string
  /** Iconify icon name */
  icon: string
  href: string
  /** Shown next to the name, e.g. `@handle` */
  handle?: string
}

// 游戏服务器
export type ServerStatus = 'online' | 'offline'
export interface GameServer {
  /** Unique identifier */
  slug: string
  /** Game name, e.g. `Minecraft` */
  game: string
  /** Iconify icon name for the game */
  icon: string
  /** Current server status */
  status: ServerStatus
  /** Current / max player count — omit when unknown */
  players?: { current: number; max: number }
  /** Server version string, e.g. `1.21.4` */
  version?: string
  /** Direct-connect address, e.g. `mc.example.com:25565` */
  address: string
}


export interface SiteConfig {
  /** Brand name shown in the nav wordmark */
  name: string
  /** <title> shown in the browser tab */
  title: string
  description: string
  /** Canonical origin, no trailing slash */
  url: string
  /** Footer slogan */
  slogan: string
  nav: NavItem[]
}
