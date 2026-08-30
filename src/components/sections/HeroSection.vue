<script setup lang="ts">
import { motion } from 'motion-v'
import { getRandomHero } from '@/config'
import { EASE_OUT_EXPO } from '@/constants/animation'

// 每次加载随机选一条 hero 文案
const hero = getRandomHero()

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
              ? 'text-ink hero-headline-fade'
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

<style scoped>
/* 首行标题的纵向渐隐：颜色是 --color-text（随主题过渡），
   这个静态 mask 只把 alpha 从 1 淡到 0.7，替代原 gradient */
.hero-headline-fade {
  -webkit-mask-image: linear-gradient(to bottom, #000 0%, rgba(0, 0, 0, 0.7) 100%);
  mask-image: linear-gradient(to bottom, #000 0%, rgba(0, 0, 0, 0.7) 100%);
}
</style>
