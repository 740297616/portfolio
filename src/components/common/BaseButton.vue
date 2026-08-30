<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary'
  /** 传入 href 时渲染 <a>；页内锚点（#id）自动平滑滚动 */
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  href: undefined,
})

const isExternal = computed(() => !!props.href && /^(https?:|mailto:)/.test(props.href))
const classes = computed(() => (props.variant === 'primary' ? 'btn-primary' : 'btn-secondary'))
</script>

<template>
  <a
    v-if="href"
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :class="classes"
  >
    <slot />
  </a>
  <button v-else type="button" :class="classes">
    <slot />
  </button>
</template>
