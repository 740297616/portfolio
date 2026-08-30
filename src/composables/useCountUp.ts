import type { MaybeRefOrGetter, Ref } from 'vue'

interface UseCountUpOptions {
  /** 动画时长，ms */
  duration?: number
}

/**
 * 元素进入视口后从 0 数到 `value`，ease-out 曲线；尊重 prefers-reduced-motion。
 */
export function useCountUp(
  el: Ref<HTMLElement | null>,
  value: MaybeRefOrGetter<number>,
  options: UseCountUpOptions = {},
) {
  const { duration = 1600 } = options
  const display = ref(0)
  const reducedMotion = usePreferredReducedMotion()
  let started = false

  const run = () => {
    const target = toValue(value)
    if (reducedMotion.value === 'reduce') {
      display.value = target
      return
    }
    const t0 = performance.now()
    const tick = (t: number) => {
      const progress = Math.min((t - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      display.value = Math.round(target * eased)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  const { stop } = useIntersectionObserver(
    el,
    (entries) => {
      if (started) return
      if (entries.some((entry) => entry.isIntersecting)) {
        started = true
        stop()
        run()
      }
    },
    { threshold: 0.4 },
  )

  return { display }
}
