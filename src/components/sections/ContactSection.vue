<script setup lang="ts">
import { socialLinks } from '@/config'
import { STAGGER_STEP } from '@/constants/animation'

const email = socialLinks.find((link) => link.name === 'Email')
</script>

<template>
  <SectionContainer id="contact">
    <div class="mx-auto max-w-2xl text-center">
      <RevealMotion>
        <p class="text-eyebrow mb-3">联系</p>
        <h2 class="text-section-title">一起做点有意思的东西。</h2>
        <p class="text-body mx-auto mt-4 max-w-md">
          欢迎有趣的产品、合作机会与开源协作。联系我最快的方式是邮件。
        </p>
      </RevealMotion>

      <RevealMotion v-if="email" :delay="0.1">
        <div class="mt-8">
          <BaseButton variant="primary" :href="email.href">
            <Icon icon="ph:envelope-simple" class="h-4 w-4" />
            {{ email.handle }}
          </BaseButton>
        </div>
      </RevealMotion>

      <div class="mt-12 grid gap-3 sm:grid-cols-2">
        <RevealMotion
          v-for="(link, i) in socialLinks"
          :key="link.name"
          :delay="i * STAGGER_STEP"
          :y="16"
        >
          <a
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center justify-between rounded-xl border border-line bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:(border-line-strong bg-white/[0.04])"
          >
            <span class="flex items-center gap-3">
              <Icon :icon="link.icon" class="h-4.5 w-4.5 text-ink-secondary" />
              <span class="text-sm font-medium text-ink">{{ link.name }}</span>
            </span>
            <span class="flex items-center gap-1.5 text-xs text-ink-muted">
              {{ link.handle }}
              <Icon
                icon="ph:arrow-up-right"
                class="h-3.5 w-3.5 transition-transform duration-200 group-hover:(-translate-y-0.5 translate-x-0.5)"
              />
            </span>
          </a>
        </RevealMotion>
      </div>
    </div>
  </SectionContainer>
</template>
