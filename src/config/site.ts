import type { HeroConfig, SiteConfig } from '@/types/content'

/**
 * 站点全局信息，统一在这里改，组件不写死内容。
 */
export const site: SiteConfig = {
  name: 'Lydia',
  title: 'Lydia — 全栈开发者',
  description: '专注于 AI 与现代 Web 技术的独立开发者工作室,构建快速、优雅、可靠的产品。',
  url: 'https://lydia0.cn',
  slogan: '基于 Vue 设计与构建，用心打造。',
  nav: [
    { label: '关于', href: '#about' },
    { label: '技术栈', href: '#stack' },
    { label: '项目', href: '#projects' },
    { label: '历程', href: '#timeline' },
    { label: '当下', href: '#now' },
    { label: '基础设施', href: '#infrastructure' },
    { label: '联系', href: '#contact' },
  ],
}

/**
 * Hero 文案多版本，每次加载随机选一条；直接改这里即可。
 */
export const heroVariants: HeroConfig[] = [
  {
    headline: ['你好，我是 Lydia。', '一名喜欢创造东西的人。', '也在不断探索新的可能。'],
    intro:
      '我喜欢用代码把想法变成真实的东西，也喜欢尝试新的技术与工具。这里记录着我的项目、经历，以及一路上的一些思考。',
    primaryCta: { label: '看看我的项目', href: '#projects' },
    secondaryCta: { label: '认识一下我', href: '#about' },
  },
  {
    headline: ['喜欢做点有趣的东西。', '把想法变成可以使用的产品。', '然后继续下一个想法。'],
    intro:
      '我享受从一个简单的想法开始，慢慢把它变成真正可以使用的东西。这个网站是我的个人空间，也记录着我正在做的事情。',
    primaryCta: { label: '看看我做了什么', href: '#projects' },
    secondaryCta: { label: '了解更多', href: '#about' },
  },
  {
    headline: ['保持好奇。', '保持创造。', '慢慢把想法变成现实。'],
    intro:
      '我对技术、设计和各种新鲜事物保持好奇。平时会做一些项目，研究一些有意思的东西，也会把值得记录的内容分享在这里。',
    primaryCta: { label: '探索我的项目', href: '#projects' },
    secondaryCta: { label: '我的经历', href: '#timeline' },
  },
  {
    headline: ['正在认真地做一些事情。', '也在慢慢成为更好的自己。', '欢迎来到我的小角落。'],
    intro:
      '这里是我的个人主页。你可以在这里看到我做过的项目、正在尝试的事情，以及一些关于技术和生活的记录。',
    primaryCta: { label: '浏览项目', href: '#projects' },
    secondaryCta: { label: '关于我', href: '#about' },
  },
]


/** 每次刷新随机选一个 variant */
export function getRandomHero(): HeroConfig {
  const index = Math.floor(Math.random() * heroVariants.length)
  return heroVariants[index] ?? heroVariants[0]!
}

/** 固定取第一个作为默认版本 */
export const hero: HeroConfig = heroVariants[0]!
