<script setup lang="ts">
import { nowItems } from '@/config'
import { STAGGER_STEP } from '@/constants/animation'
</script>

<template>
  <SectionContainer id="now">
    <SectionHeader
      eyebrow="当下"
      title="现在的重心。"
      description="此刻占据我注意力的事——随变化持续更新。"
    />

    <div class="grid gap-4 sm:grid-cols-2">
      <RevealMotion
        v-for="(item, i) in nowItems"
        :key="item.label"
        :delay="i * STAGGER_STEP"
        :y="16"
      >
        <BaseCard class="h-full p-5">
          <div class="flex items-start gap-4">
            <span
              class="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-white/[0.03]"
            >
              <Icon :icon="item.icon" class="h-5 w-5 text-ink-secondary" />
            </span>
            <div>
              <p class="text-eyebrow">{{ item.label }}</p>
              <p class="mt-1.5 text-sm leading-relaxed text-ink">
                {{ item.detail }}
              </p>
            </div>
          </div>
        </BaseCard>
      </RevealMotion>
    </div>
  </SectionContainer>
</template>
