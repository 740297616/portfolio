import type { HeroConfig, SiteConfig } from '@/types/content'

/**
 * Global site identity — edit here, never in components.
 */
export const site: SiteConfig = {
  name: 'Lydia Studio',
  title: 'Lydia Studio — 全栈开发者',
  description: '专注于 AI 与现代 Web 技术的独立开发者工作室,构建快速、优雅、可靠的产品。',
  url: 'https://lydia0.cn',
  slogan: '基于 Vue 设计与构建，用心打造。',
  nav: [
    { label: '关于', href: '#about' },
    { label: '技术栈', href: '#stack' },
    { label: '项目', href: '#projects' },
    { label: '历程', href: '#timeline' },
    { label: '当下', href: '#now' },
    { label: '联系', href: '#contact' },
  ],
}

/**
 * Hero copy variants — one is picked at random on each page load.
 * Add / edit variants here; components never hardcode this content.
 */
export const heroVariants: HeroConfig[] = [
  {
    headline: ['全栈开发者。', '构建现代 Web 体验。', '打造 AI 驱动的应用。'],
    intro:
      '我设计并交付端到端的产品——从像素级打磨的界面到稳定可靠的后端系统,并持续深耕AI原生体验。',
    primaryCta: { label: '查看项目', href: '#projects' },
    secondaryCta: { label: '联系我', href: '#contact' },
  },
  {
    headline: ['产品工程师。', '把想法变成可用的产品。', '让体验快而优雅。'],
    intro:
      '从概念到上线,我关注每一个细节——干净的代码、流畅的交互,以及经得起推敲的架构。',
    primaryCta: { label: '看看作品', href: '#projects' },
    secondaryCta: { label: '聊聊合作', href: '#contact' },
  },
  {
    headline: ['独立开发者。', '专注 AI 与现代 Web。', '用心打磨每个产品。'],
    intro:
      '我喜欢用技术解决真实问题——构建快速、可靠、令人愉悦的应用,并在 AI 原生方向持续探索。',
    primaryCta: { label: '浏览项目', href: '#projects' },
    secondaryCta: { label: '与我联系', href: '#contact' },
  },
  {
    headline: ['界面与系统。', '兼顾美感与稳健。', '交付完整的体验。'],
    intro:
      '我在设计与工程之间架起桥梁——既打磨像素级的界面,也构建稳定可扩展的后端系统。',
    primaryCta: { label: '查看案例', href: '#projects' },
    secondaryCta: { label: '开始对话', href: '#contact' },
  },
]

/** Pick a random hero variant — different on each refresh. */
export function getRandomHero(): HeroConfig {
  return heroVariants[Math.floor(Math.random() * heroVariants.length)]
}

/** Default variant, kept for static references. */
export const hero: HeroConfig = heroVariants[0]

