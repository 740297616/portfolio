<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary'
  /** Renders an <a> when set; in-page anchors (`#id`) scroll smoothly */
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
