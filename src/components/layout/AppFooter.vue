<script setup lang="ts">
import { site, socialLinks } from '@/config'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line">
    <div
      class="container-page flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between"
    >
      <div class="flex flex-col items-center gap-2 md:items-start">
        <p class="text-sm text-ink-secondary">{{ site.slogan }}</p>
        <p class="text-xs text-ink-muted">© {{ year }} {{ site.name }} · 保留所有权利</p>
      </div>

      <div class="flex items-center gap-1">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="link-subtle rounded-lg p-2 hover:bg-white/[0.04]"
          :aria-label="link.name"
        >
          <Icon :icon="link.icon" class="h-4.5 w-4.5" />
        </a>
      </div>
    </div>
  </footer>
</template>
