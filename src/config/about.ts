import type { AboutConfig } from '@/types/content'

export const about: AboutConfig = {
  paragraphs: [
    '我以一人工作室的方式运作,把软件当作一门手艺。每个项目都从第一性原理出发:一个清晰的问题、一份克制的设计,以及对用户真正能感知的细节的执着。',
    '这些年我交付过横跨整条技术栈的产品——有着完整设计语言的前端系统、为可靠性而生的后端服务,以及消除摩擦的开发者工具。最近,我的大部分精力都投入在 AI 驱动的应用及其背后的基础设施上。',
  ],
  focuses: [
    {
      icon: 'ph:browser-duotone',
      title: '现代 Web',
      description:
        '组件驱动的前端体系,注重排版、动效与可访问性——基于 Vue、TypeScript 与 Vite 构建。',
    },
    {
      icon: 'ph:sparkle-duotone',
      title: 'AI 应用',
      description: 'LLM 驱动的产品:检索管线、Agent 工作流,以及围绕模型能力设计的交互界面。',
    },
    {
      icon: 'ph:stack-duotone',
      title: '后端与基础设施',
      description: 'API 设计、数据建模与云原生部署——让服务在高负载下依然快速、可观测。',
    },
    {
      icon: 'ph:terminal-window-duotone',
      title: '开发者体验',
      description: '工具链、CI 流水线与开源。好的 DX 会复利:更快的反馈循环造就更好的产品。',
    },
  ],
}
