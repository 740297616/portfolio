import type { StatItem } from '@/types/content'

/**
 * 目前是静态数据；结构已按 API 预留，后续接 GitHub REST 等数据源时组件不用改。
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
