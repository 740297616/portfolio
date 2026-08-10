import type { CSSProperties } from 'vue'

interface SpotlightOptions {
  /** Disable tracking entirely (e.g. prefers-reduced-motion) */
  disabled?: Ref<boolean>
  /** Smoothing factor per frame, 0–1 (higher = snappier) */
  ease?: number
}

/**
 * Global mouse-follow spotlight. Tracks the pointer across the viewport and
 * exposes CSS custom properties (`--spot-x` / `--spot-y` / `--spot-o`) that a
 * fixed radial-gradient layer consumes. Movement is smoothed with a small
 * rAF lerp so the light glides rather than snaps.
 */
export function useMouseSpotlight(options: SpotlightOptions = {}) {
  const { disabled, ease = 0.12 } = options

  // Rendered position (smoothed) and target position (raw pointer).
  const x = ref(0)
  const y = ref(0)
  const targetX = ref(0)
  const targetY = ref(0)
  const opacity = ref(0)

  let frame = 0
  let started = false

  const tick = () => {
    x.value += (targetX.value - x.value) * ease
    y.value += (targetY.value - y.value) * ease
    frame = requestAnimationFrame(tick)
  }

  const start = () => {
    if (started) return
    started = true
    frame = requestAnimationFrame(tick)
  }

  const stop = () => {
    started = false
    cancelAnimationFrame(frame)
  }

  useEventListener(window, 'pointermove', (event: PointerEvent) => {
    if (disabled?.value) return
    targetX.value = event.clientX
    targetY.value = event.clientY
    // Jump straight to the pointer on first move to avoid a corner-to-cursor swipe.
    if (opacity.value === 0) {
      x.value = event.clientX
      y.value = event.clientY
    }
    opacity.value = 1
  })

  // Fade out when the pointer leaves the document.
  useEventListener(document, 'pointerleave', () => {
    opacity.value = 0
  })

  onMounted(() => {
    if (!disabled?.value) start()
  })
  onBeforeUnmount(stop)

  // React to reduced-motion toggles at runtime.
  if (disabled) {
    watch(disabled, (isDisabled) => {
      if (isDisabled) {
        stop()
        opacity.value = 0
      } else {
        start()
      }
    })
  }

  const spotlightStyle = computed<CSSProperties>(() => ({
    '--spot-x': `${x.value}px`,
    '--spot-y': `${y.value}px`,
    '--spot-o': opacity.value,
  }))

  return { spotlightStyle }
}
