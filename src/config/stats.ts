import type { StatItem } from '@/types/content'

/**
 * Static numbers for now — the shape is API-ready: swap `value` with
 * data fetched in a composable (e.g. GitHub REST) without touching components.
 */
export const stats: StatItem[] = [
  { label: '编程年限', value: 8, icon: 'ph:clock-countdown-duotone' },
  { label: '交付项目', value: 24, suffix: '+', icon: 'ph:rocket-launch-duotone' },
  { label: '公开仓库', value: 36, icon: 'ph:git-fork-duotone' },
  { label: 'GitHub Star', value: 1900, suffix: '+', icon: 'ph:star-duotone' },
]
