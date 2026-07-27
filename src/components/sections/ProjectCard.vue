<script setup lang="ts">
import type { Project } from '@/types/content'

const props = defineProps<{ project: Project }>()

/** Monogram shown on the screenshot placeholder */
const initial = computed(() => props.project.title.charAt(0).toUpperCase())
</script>

<template>
  <BaseCard class="flex h-full flex-col">
    <!-- Screenshot (placeholder until `image` is provided) -->
    <div class="relative aspect-[16/9] overflow-hidden rounded-t-2xl border-b border-line">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="`${project.title} screenshot`"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        loading="lazy"
      />
      <div
        v-else
        class="grid h-full w-full place-items-center"
        style="
          background:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px) 0 0 / 32px 32px,
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px) 0 0 / 32px 32px,
            radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.05), transparent 70%);
        "
        aria-hidden="true"
      >
        <span
          class="grid h-14 w-14 place-items-center rounded-2xl border border-line-strong bg-white/[0.03] text-xl font-semibold text-ink-secondary"
        >
          {{ initial }}
        </span>
      </div>

      <span
        v-if="project.pinned"
        class="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-line bg-bg/70 px-2 py-0.5 text-[11px] text-ink-secondary backdrop-blur"
      >
        <Icon icon="ph:push-pin-duotone" class="h-3 w-3" />
        置顶
      </span>
    </div>

    <div class="flex flex-1 flex-col p-5">
      <div class="flex items-start justify-between gap-3">
        <div>
          <p class="text-[11px] uppercase tracking-[0.14em] text-ink-muted">
            {{ project.tags.join(' · ') }}
          </p>
          <h3 class="mt-1.5 text-lg font-semibold tracking-tight text-ink">
            {{ project.title }}
          </h3>
        </div>
        <div class="flex shrink-0 gap-1">
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="link-subtle rounded-lg p-2 hover:bg-white/[0.05]"
            :aria-label="`${project.title} on GitHub`"
          >
            <Icon icon="simple-icons:github" class="h-4 w-4" />
          </a>
          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            rel="noopener noreferrer"
            class="link-subtle rounded-lg p-2 hover:bg-white/[0.05]"
            :aria-label="`${project.title} live demo`"
          >
            <Icon icon="ph:arrow-up-right" class="h-4 w-4" />
          </a>
        </div>
      </div>

      <p class="mt-3 flex-1 text-[13.5px] leading-relaxed text-ink-secondary">
        {{ project.description }}
      </p>

      <div class="mt-5 flex flex-wrap gap-1.5">
        <BaseTag v-for="tech in project.tech" :key="tech">{{ tech }}</BaseTag>
      </div>
    </div>
  </BaseCard>
</template>
