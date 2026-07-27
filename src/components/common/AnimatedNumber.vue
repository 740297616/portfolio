<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    value: number
    suffix?: string
    duration?: number
  }>(),
  { suffix: '', duration: 1600 },
)

const el = ref<HTMLElement | null>(null)
const { display } = useCountUp(el, () => props.value, {
  duration: props.duration,
})
const formatted = computed(() => display.value.toLocaleString('en-US'))
</script>

<template>
  <span ref="el" class="tabular-nums">{{ formatted }}{{ suffix }}</span>
</template>
