<script setup lang="ts">
import { friendLinks } from '@/config'
import { STAGGER_STEP } from '@/constants/animation'
</script>

<template>
  <SectionContainer v-if="friendLinks.length" id="friends">
    <SectionHeader eyebrow="网络" title="Friends" description="一些值得访问的朋友与站点。" />

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <RevealMotion
        v-for="(friend, i) in friendLinks"
        :key="friend.href"
        :delay="i * STAGGER_STEP"
        :y="16"
      >
        <a :href="friend.href" target="_blank" rel="noopener noreferrer" class="block h-full">
          <BaseCard class="h-full p-5 transition-colors duration-200">
            <div class="flex items-center gap-4">
              <!-- 头像，缺省时用图标兜底 -->
              <span
                v-if="friend.avatar"
                class="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-line"
              >
                <img
                  :src="friend.avatar"
                  :alt="friend.name"
                  class="h-full w-full object-cover"
                />
              </span>
              <span
                v-else
                class="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-overlay-weak"
              >
                <Icon
                  :icon="friend.icon || 'ph:user'"
                  class="h-5 w-5 text-ink-secondary"
                />
              </span>

              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-2">
                  <h4 class="truncate text-sm font-medium text-ink">{{ friend.name }}</h4>
                  <Icon
                    icon="ph:arrow-up-right"
                    class="h-3.5 w-3.5 shrink-0 text-ink-muted transition-transform duration-200 group-hover:(-translate-y-0.5 translate-x-0.5)"
                  />
                </div>
                <p v-if="friend.description" class="mt-0.5 truncate text-xs text-ink-muted">
                  {{ friend.description }}
                </p>
              </div>
            </div>
          </BaseCard>
        </a>
      </RevealMotion>
    </div>
  </SectionContainer>
</template>
