<script setup lang="ts">
import { stats } from '@/config'
import { STAGGER_STEP } from '@/constants/animation'
</script>

<template>
  <section class="border-y border-line bg-overlay-weak">
    <div class="container-page py-14 md:py-16">
      <div class="grid grid-cols-2 gap-8 lg:grid-cols-4">
        <RevealMotion
          v-for="(stat, i) in stats"
          :key="stat.label"
          :delay="i * STAGGER_STEP"
          :y="16"
        >
          <div class="flex flex-col items-center text-center">
            <Icon :icon="stat.icon" class="h-5 w-5 text-ink-muted" />
            <p class="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              <AnimatedNumber :value="stat.value" :suffix="stat.suffix" />
            </p>
            <p class="mt-1.5 text-xs text-ink-muted">{{ stat.label }}</p>
          </div>
        </RevealMotion>
      </div>
    </div>
  </section>
</template>
