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

export const hero: HeroConfig = {
  headline: ['全栈开发者。', '构建现代 Web 体验。', '打造 AI 驱动的应用。'],
  intro:
    '我设计并交付端到端的产品——从像素级打磨的界面到稳定可靠的后端系统,并持续深耕AI原生体验。',
  primaryCta: { label: '查看项目', href: '#projects' },
  secondaryCta: { label: '联系我', href: '#contact' },
}
