import type { CSSProperties } from 'vue'

interface SpotlightOptions {
  /** 完全禁用 tracking（如 prefers-reduced-motion 开启时） */
  disabled?: Ref<boolean>
  /** 每帧平滑系数 0–1，越大越跟手 */
  ease?: number
}

/**
 * 全局鼠标聚光：rAF lerp 平滑跟随指针，通过 CSS variables（--spot-x/y/o）
 * 暴露位置给 fixed radial-gradient 层。
 */
export function useMouseSpotlight(options: SpotlightOptions = {}) {
  const { disabled, ease = 0.12 } = options

  // 平滑后的渲染位置 + 原始指针位置，分开存避免 lerp 抖动
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
    // 首次移动直接跳到指针位置，避免从角落滑过去
    if (opacity.value === 0) {
      x.value = event.clientX
      y.value = event.clientY
    }
    opacity.value = 1
  })

  // 指针离开文档时淡出
  useEventListener(document, 'pointerleave', () => {
    opacity.value = 0
  })

  onMounted(() => {
    if (!disabled?.value) start()
  })
  onBeforeUnmount(stop)

  // reduced-motion 动态开关
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
