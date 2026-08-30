<script setup lang="ts">
defineProps<{
  /** 导航锚点 id，如 projects */
  id: string
}>()
</script>

<template>
  <section :id="id" class="section-pad scroll-mt-16">
    <div class="container-page">
      <slot />
    </div>
  </section>
</template>
