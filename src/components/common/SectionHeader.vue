<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()
</script>

<template>
  <RevealMotion>
    <div class="mb-12 max-w-xl md:mb-16">
      <p class="text-eyebrow mb-3">{{ eyebrow }}</p>
      <h2 class="text-section-title">{{ title }}</h2>
      <p v-if="description" class="text-body mt-4">{{ description }}</p>
    </div>
  </RevealMotion>
</template>
