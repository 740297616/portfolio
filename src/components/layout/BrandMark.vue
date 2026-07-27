<script setup lang="ts">
import { site } from '@/config'
</script>

<template>
  <a href="#top" class="group inline-flex items-center gap-2.5">
    <!-- Geometric logomark: rotated square outline -->
    <span
      class="grid h-6 w-6 place-items-center rounded-md border border-line-strong transition-colors duration-300 group-hover:border-white/40"
      aria-hidden="true"
    >
      <span
        class="block h-2 w-2 rotate-45 bg-ink transition-transform duration-300 group-hover:rotate-[135deg]"
      />
    </span>
    <span class="text-sm font-semibold tracking-tight text-ink">
      {{ site.name }}
    </span>
  </a>
</template>
