<script setup lang="ts">
import { personalSites } from '@/config'
import { STAGGER_STEP } from '@/constants/animation'
</script>

<template>
  <div v-if="personalSites.length">
    <RevealMotion>
      <h3 class="mb-6 text-sm font-medium uppercase tracking-wider text-ink-muted">Sites</h3>
    </RevealMotion>

    <div class="grid gap-4 sm:grid-cols-2">
      <RevealMotion
        v-for="(site, i) in personalSites"
        :key="site.slug"
        :delay="i * STAGGER_STEP"
        :y="16"
      >
        <a :href="site.url" target="_blank" rel="noopener noreferrer" class="block h-full">
          <BaseCard class="h-full p-5 transition-colors duration-200">
            <div class="flex items-start gap-4">
              <span
                class="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-overlay-weak"
              >
                <Icon :icon="site.icon" class="h-5 w-5 text-ink-secondary" />
              </span>

              <div class="min-w-0 flex-1">
                <!-- 名称 + 状态 -->
                <div class="flex items-center gap-2">
                  <h4 class="truncate text-sm font-medium text-ink">{{ site.name }}</h4>
                  <span
                    class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium"
                    :class="
                      site.status === 'online'
                        ? 'bg-success-soft text-success'
                        : 'bg-overlay text-ink-muted'
                    "
                  >
                    <span
                      class="h-1.5 w-1.5 rounded-full"
                      :class="site.status === 'online' ? 'bg-success' : 'bg-ink-muted'"
                    />
                    {{
                      site.status === 'online'
                        ? 'Online'
                        : site.status === 'developing'
                          ? 'Developing'
                          : 'Offline'
                    }}
                  </span>
                </div>

                <!-- 描述 -->
                <p class="mt-1 text-xs text-ink-muted">{{ site.description }}</p>

                <!-- 域名 -->
                <div class="mt-3">
                  <code
                    class="inline-block truncate rounded-lg border border-line bg-overlay-weak px-3 py-1.5 font-mono text-xs text-ink-secondary"
                  >
                    {{ site.domain }}
                  </code>
                </div>
              </div>
            </div>
          </BaseCard>
        </a>
      </RevealMotion>
    </div>
  </div>
</template>
