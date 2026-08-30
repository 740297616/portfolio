import type { CSSProperties, Ref } from 'vue'

/**
 * 卡片鼠标高光：暴露 CSS variables（--glow-x/y/o），由 radial-gradient overlay 消费。
 */
export function useCardGlow(target: Ref<HTMLElement | null>) {
  const x = ref(0)
  const y = ref(0)
  const opacity = ref(0)

  useEventListener(target, 'pointermove', (event: PointerEvent) => {
    const rect = target.value?.getBoundingClientRect()
    if (!rect) return
    x.value = event.clientX - rect.left
    y.value = event.clientY - rect.top
  })
  useEventListener(target, 'pointerenter', () => {
    opacity.value = 1
  })
  useEventListener(target, 'pointerleave', () => {
    opacity.value = 0
  })

  const glowStyle = computed<CSSProperties>(() => ({
    '--glow-x': `${x.value}px`,
    '--glow-y': `${y.value}px`,
    '--glow-o': opacity.value,
  }))

  return { glowStyle }
}
