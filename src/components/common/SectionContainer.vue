<script setup lang="ts">
defineProps<{
  /** Anchor id used by nav links, e.g. `projects` */
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
