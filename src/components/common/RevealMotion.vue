<script setup lang="ts">
import { motion } from 'motion-v'
import { EASE_OUT_EXPO, REVEAL_DURATION } from '@/constants/animation'

interface Props {
  /** 延迟（秒），用于兄弟元素交错出现 */
  delay?: number
  /** 初始垂直偏移，px */
  y?: number
  once?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  y: 24,
  once: true,
})
</script>

<template>
  <motion.div
    :initial="{ opacity: 0, y: props.y }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :in-view-options="{ once: props.once, amount: 0.2, margin: '0px 0px -48px 0px' }"
    :transition="{ duration: REVEAL_DURATION, ease: EASE_OUT_EXPO, delay: props.delay }"
  >
    <slot />
  </motion.div>
</template>
