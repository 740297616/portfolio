<script setup lang="ts">
import { techCategories } from '@/config'
import { STAGGER_STEP } from '@/constants/animation'
</script>

<template>
  <SectionContainer id="stack">
    <SectionHeader
      eyebrow="技术栈"
      title="我信赖的工具。"
      description="在生产环境中使用的技术,按它们在技术栈中的位置分组。"
    />

    <div class="space-y-10">
      <div v-for="(category, ci) in techCategories" :key="category.name">
        <RevealMotion :delay="ci * 0.04">
          <h3 class="text-eyebrow mb-4">{{ category.name }}</h3>
        </RevealMotion>

        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <RevealMotion
            v-for="(item, i) in category.items"
            :key="item.name"
            :delay="i * STAGGER_STEP"
            :y="16"
          >
            <div
              class="group flex items-center gap-3 rounded-xl border border-line bg-overlay-weak px-4 py-3 transition-all duration-300 hover:(-translate-y-0.5 border-line-strong bg-overlay)"
            >
              <Icon
                :icon="item.icon"
                class="h-6 w-6 shrink-0 opacity-70 saturate-0 transition-all duration-300 group-hover:(opacity-100 saturate-100)"
              />
              <div class="min-w-0 flex-1">
                <p class="truncate text-sm font-medium text-ink">
                  {{ item.name }}
                </p>
              </div>
            </div>
          </RevealMotion>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>
