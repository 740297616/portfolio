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
    headline: ['软件工程师。', '构建现代 Web 与 AI 应用。', '探索技术的无限可能。'],
    intro:
      '我专注于现代 Web 开发与 AI 应用探索，从前端体验到后端架构，将想法转化为可靠、优雅的软件产品。',
    primaryCta: { label: '查看项目', href: '#projects' },
    secondaryCta: { label: '了解更多', href: '#about' },
  },
  {
    headline: ['全栈开发者。', '连接界面、系统与智能。', '创造有价值的软件。'],
    intro:
      '我喜欢解决真实问题，从 Vue 与 TypeScript 驱动的交互体验，到后端服务与基础设施建设，持续打磨完整的软件体验。',
    primaryCta: { label: '浏览作品', href: '#projects' },
    secondaryCta: { label: '联系我', href: '#contact' },
  },
  {
    headline: ['AI 应用探索者。', '让软件拥有新的交互方式。', '构建 AI 原生体验。'],
    intro:
      '我关注大语言模型、Agent 工作流以及 AI 驱动的软件形态，探索人与技术协作的新方式，并将实验落地为真实应用。',
    primaryCta: { label: '查看探索', href: '#projects' },
    secondaryCta: { label: '我的经历', href: '#timeline' },
  },
  {
    headline: ['热爱构建。', '从一个想法到完整产品。', '持续学习与迭代。'],
    intro:
      '从校园应用到个人项目，从前端工程到服务部署，我享受把复杂问题拆解，并用代码创造解决方案的过程。',
    primaryCta: { label: '我的项目', href: '#projects' },
    secondaryCta: { label: '关于我', href: '#about' },
  },
]

/** Pick a random hero variant — different on each refresh. */
export function getRandomHero(): HeroConfig {
  return heroVariants[Math.floor(Math.random() * heroVariants.length)]
}

/** Default variant, kept for static references. */
export const hero: HeroConfig = heroVariants[0]

