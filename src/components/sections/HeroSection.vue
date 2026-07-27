<script setup lang="ts">
import { motion } from 'motion-v'
import { hero } from '@/config'
import { EASE_OUT_EXPO } from '@/constants/animation'

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE_OUT_EXPO, delay },
})
</script>

<template>
  <section class="relative flex min-h-[92vh] items-center overflow-hidden pt-16">
    <HeroVisual />

    <div class="container-page relative py-24">
      <h1 class="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
        <motion.span
          v-for="(line, i) in hero.headline"
          :key="line"
          class="block"
          :class="
            i === 0
              ? 'bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent'
              : 'text-ink-secondary'
          "
          v-bind="enter(0.1 + i * 0.12)"
        >
          {{ line }}
        </motion.span>
      </h1>

      <motion.p class="text-body mt-8 max-w-xl text-base" v-bind="enter(0.5)">
        {{ hero.intro }}
      </motion.p>

      <motion.div class="mt-10 flex flex-wrap gap-3" v-bind="enter(0.62)">
        <BaseButton variant="primary" :href="hero.primaryCta.href">
          {{ hero.primaryCta.label }}
          <Icon icon="ph:arrow-right" class="h-4 w-4" />
        </BaseButton>
        <BaseButton variant="secondary" :href="hero.secondaryCta.href">
          {{ hero.secondaryCta.label }}
        </BaseButton>
      </motion.div>
    </div>
  </section>
</template>
