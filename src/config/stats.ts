import type { StatItem } from '@/types/content'

/**
 * Static numbers for now — the shape is API-ready: swap `value` with
 * data fetched in a composable (e.g. GitHub REST) without touching components.
 */
export const stats: StatItem[] = [
  {
    label: '技术探索',
    value: 5,
    suffix: ' 年',
    icon: 'ph:code-duotone',
  },
  {
    label: '完成项目',
    value: 20,
    suffix: '+',
    icon: 'ph:rocket-launch-duotone',
  },
  {
    label: '技术仓库',
    value: 30,
    suffix: '+',
    icon: 'ph:git-branch-duotone',
  },
  {
    label: '代码贡献',
    value: 10000,
    suffix: '+',
    icon: 'ph:terminal-window-duotone',
  },
]
