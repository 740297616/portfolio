import type { NowItem } from '@/types/content'

/** 当前在做的事，保持简短与时效性 */
export const nowItems: NowItem[] = [
  {
    icon: 'ph:briefcase-duotone',
    label: '最近在做',
    detail: '专注于正在进行的项目，把想法逐步变成真正可用的产品。',
  },
  {
    icon: 'ph:sparkle-duotone',
    label: '兴趣方向',
    detail: '关注新技术、新工具，以及技术与生活之间有趣的可能性。',
  },
  {
    icon: 'ph:terminal-window-duotone',
    label: '平时喜欢',
    detail: '写代码、做项目、研究有趣的东西，也喜欢不断尝试新的事物。',
  },
  {
    icon: 'ph:heart-duotone',
    label: '持续探索',
    detail: '保持好奇，不断学习，把遇到的问题变成成长的机会。',
  },
]
