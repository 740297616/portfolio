import type { AboutConfig } from '@/types/content'

export const about: AboutConfig = {
  paragraphs: [
    '我习惯从真实的问题出发，而不是从技术出发。前端、后端、AI 应用，我都做，但核心始终是“这东西有没有真的帮到人”。',
    '现在主要研究 AI 原生应用和 Agent 工作流，同时维护自己的开源项目。技术上偏爱 Vue + TypeScript 这套组合，后端更看重 API 设计、数据建模和云原生的可观测性。',
    '有个朴素的信念：开发体验是产品的上游。工具链越顺手，反馈越快，交付的东西才会越好。',
  ],
  focuses: [
    {
      icon: 'ph:browser-duotone',
      title: '现代Web',
      description: '组件驱动的前端体系,注重排版、动效与可访问性——基于Vue、TypeScript与Vite构建。',
    },
    {
      icon: 'ph:sparkle-duotone',
      title: 'AI应用',
      description: 'LLM驱动的产品:检索管线、Agent工作流,以及围绕模型能力设计的交互界面。',
    },
    {
      icon: 'ph:stack-duotone',
      title: '后端与基础设施',
      description: 'API设计、数据建模与云原生部署——让服务在高负载下依然快速、可观测。',
    },
    {
      icon: 'ph:terminal-window-duotone',
      title: '开发者体验',
      description: '工具链、CI流水线与开源。好的DX会复利:更快的反馈循环造就更好的产品。',
    },
  ],
}
