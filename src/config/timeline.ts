import type { TimelineItem } from '@/types/content'

/** Growth record, newest first. */
export const timeline: TimelineItem[] = [
  {
    date: '2026',
    title: '毕业 & AI 应用开发',
    description:
      '完成软件工程本科毕业，开始专注于 AI Agent、聊天机器人和效率工具开发，探索 AI 原生产品设计。',
    kind: 'milestone',
  },
  {
    date: '2025',
    title: '开发多个 AI 与校园项目',
    description:
      '完成「我的珠科」微信小程序后端开发，并搭建基于 AstrBot 的 AI 群聊机器人，持续探索大模型应用。',
    kind: 'project',
  },
  {
    date: '2024',
    title: '前端开发实习',
    description:
      '参与汽车租赁管理系统开发，负责 Vue 前端页面、接口联调和业务功能实现，积累企业项目经验。',
    kind: 'experience',
  },
  {
    date: '2023',
    title: '深入学习全栈开发',
    description: '系统学习 Vue、FastAPI、MySQL、Docker 等技术栈，开始独立开发完整 Web 项目。',
    kind: 'experience',
  },
  {
    date: '2022 — 2026',
    title: '软件工程（本科）',
    description:
      '就读于珠海科技学院软件工程专业，从课程学习逐步走向真实项目开发，培养全栈开发与工程实践能力。',
    kind: 'education',
  },
]
