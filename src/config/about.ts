import type { AboutConfig } from '@/types/content'

export const about: AboutConfig = {
  paragraphs: [
    '我是一名软件工程师，专注于Web开发、AI应用与开发者工具。',
    '我喜欢从真实问题出发，将想法转化为可靠的软件产品。从前端体验到后端架构，从工程实践到AI驱动的新型交互，我持续探索技术如何创造更好的体验。',
    '目前，我关注AI原生应用、Agent工作流以及现代 Web技术栈，也持续维护自己的开源项目与技术实验。',
  ],
  focuses: [
    {
      icon: 'ph:browser-duotone',
      title: '现代Web',
      description:
        '组件驱动的前端体系,注重排版、动效与可访问性——基于Vue、TypeScript与Vite构建。',
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
