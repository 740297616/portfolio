<script setup lang="ts">
const root = ref<HTMLElement | null>(null)
const { glowStyle } = useCardGlow(root)
</script>

<template>
  <div ref="root" class="card-surface card-hover group relative overflow-hidden" :style="glowStyle">
    <!-- Mouse-follow highlight -->
    <div
      class="pointer-events-none absolute inset-0 transition-opacity duration-300"
      style="
        opacity: var(--glow-o, 0);
        background: radial-gradient(
          320px circle at var(--glow-x) var(--glow-y),
          var(--color-card-glow),
          transparent 65%
        );
      "
      aria-hidden="true"
    />
    <div class="relative flex h-full flex-col">
      <slot />
    </div>
  </div>
</template>
