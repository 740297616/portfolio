<script setup lang="ts">
import { about } from '@/config'
import { STAGGER_STEP } from '@/constants/animation'
</script>

<template>
  <SectionContainer id="about">
    <SectionHeader eyebrow="关于" title="一个工程师，持续构建与探索。" />

    <div class="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
      <RevealMotion>
        <div class="space-y-5">
          <p v-for="paragraph in about.paragraphs" :key="paragraph" class="text-body">
            {{ paragraph }}
          </p>
        </div>
      </RevealMotion>

      <div class="grid gap-4 sm:grid-cols-2">
        <RevealMotion
          v-for="(focus, i) in about.focuses"
          :key="focus.title"
          :delay="i * STAGGER_STEP"
        >
          <BaseCard class="h-full p-5">
            <Icon :icon="focus.icon" class="h-6 w-6 text-ink-secondary" />
            <h3 class="mt-4 text-sm font-medium text-ink">
              {{ focus.title }}
            </h3>
            <p class="mt-2 text-[13px] leading-relaxed text-ink-secondary">
              {{ focus.description }}
            </p>
          </BaseCard>
        </RevealMotion>
      </div>
    </div>
  </SectionContainer>
</template>
