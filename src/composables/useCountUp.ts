import type { MaybeRefOrGetter, Ref } from 'vue'

interface UseCountUpOptions {
  /** Animation length in ms */
  duration?: number
}

/**
 * Counts from 0 to `value` with an ease-out curve, starting when `el`
 * first enters the viewport. Respects `prefers-reduced-motion`.
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
