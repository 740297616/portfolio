<script setup lang="ts">
import { timeline } from '@/config'
import { STAGGER_STEP } from '@/constants/animation'
import type { TimelineKind } from '@/types/content'

const kindMeta: Record<TimelineKind, { icon: string; label: string }> = {
  education: { icon: 'ph:graduation-cap-duotone', label: '教育' },
  experience: { icon: 'ph:briefcase-duotone', label: '经历' },
  project: { icon: 'ph:rocket-launch-duotone', label: '项目' },
  milestone: { icon: 'ph:flag-duotone', label: '里程碑' },
}
</script>

<template>
  <SectionContainer id="timeline">
    <SectionHeader
      eyebrow="历程"
      title="一路走来。"
      description="不是简历——而是那些塑造了我构建方式的时刻。"
    />

    <div class="relative max-w-2xl">
      <!-- Vertical line -->
      <div
        class="absolute bottom-2 left-[11px] top-2 w-px bg-gradient-to-b from-white/20 via-line to-transparent"
        aria-hidden="true"
      />

      <ol class="space-y-10">
        <li v-for="(item, i) in timeline" :key="item.title">
          <RevealMotion :delay="i * STAGGER_STEP" :y="16">
            <div class="relative pl-12">
              <!-- Node -->
              <span
                class="absolute left-0 top-0.5 grid h-6 w-6 place-items-center rounded-full border border-line-strong bg-bg"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-ink/80" />
              </span>

              <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-muted">
                <span class="font-mono tabular-nums">{{ item.date }}</span>
                <span
                  class="inline-flex items-center gap-1 rounded-full border border-line px-2 py-0.5"
                >
                  <Icon :icon="kindMeta[item.kind].icon" class="h-3 w-3" />
                  {{ kindMeta[item.kind].label }}
                </span>
              </div>
              <h3 class="mt-2 text-base font-medium text-ink">
                {{ item.title }}
              </h3>
              <p class="mt-1.5 text-[13.5px] leading-relaxed text-ink-secondary">
                {{ item.description }}
              </p>
            </div>
          </RevealMotion>
        </li>
      </ol>
    </div>
  </SectionContainer>
</template>
