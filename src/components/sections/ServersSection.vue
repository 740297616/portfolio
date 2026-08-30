<script setup lang="ts">
import { gameServers } from '@/config'
import { STAGGER_STEP } from '@/constants/animation'

const { copy } = useClipboard()

/** 记录最近复制过的服务器地址（按 slug），用于按钮反馈 */
const copiedSlug = ref<string | null>(null)

async function copyAddress(slug: string, address: string) {
  await copy(address)
  copiedSlug.value = slug
  setTimeout(() => {
    if (copiedSlug.value === slug) copiedSlug.value = null
  }, 2000)
}
</script>

<template>
  <div v-if="gameServers.length">
    <RevealMotion>
      <h3 class="mb-6 text-sm font-medium uppercase tracking-wider text-ink-muted">
        Game Servers
      </h3>
    </RevealMotion>

    <div class="grid gap-4 sm:grid-cols-2">
      <RevealMotion
        v-for="(server, i) in gameServers"
        :key="server.slug"
        :delay="i * STAGGER_STEP"
        :y="16"
      >
        <BaseCard class="h-full p-5">
          <div class="flex items-start gap-4">
            <!-- 游戏图标 -->
            <span
              class="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-overlay-weak"
            >
              <Icon :icon="server.icon" class="h-5 w-5 text-ink-secondary" />
            </span>

            <div class="min-w-0 flex-1">
              <!-- 名称 + 状态 -->
              <div class="flex items-center gap-2">
                <h4 class="truncate text-sm font-medium text-ink">{{ server.game }}</h4>
                <span
                  class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium"
                  :class="
                    server.status === 'online'
                      ? 'bg-success-soft text-success'
                      : 'bg-overlay text-ink-muted'
                  "
                >
                  <span
                    class="h-1.5 w-1.5 rounded-full"
                    :class="server.status === 'online' ? 'bg-success' : 'bg-ink-muted'"
                  />
                  {{ server.status === 'online' ? 'Online' : 'Offline' }}
                </span>
              </div>

              <!-- meta：在线人数 / 版本 -->
              <p class="mt-1 text-xs text-ink-muted">
                <template v-if="server.players">
                  {{ server.players.current }}/{{ server.players.max }} 玩家
                </template>
                <template v-if="server.players && server.version"> · </template>
                <template v-if="server.version">v{{ server.version }}</template>
              </p>

              <!-- 地址 + 复制按钮 -->
              <div class="mt-3 flex items-center gap-2">
                <code
                  class="min-w-0 flex-1 truncate rounded-lg border border-line bg-overlay-weak px-3 py-1.5 font-mono text-xs text-ink-secondary"
                >
                  {{ server.address }}
                </code>
                <button
                  type="button"
                  class="btn-base shrink-0 border border-line bg-overlay-weak px-2.5 py-1.5 text-xs text-ink-secondary hover:(border-line-strong bg-overlay text-ink) active:scale-[0.96]"
                  :aria-label="`复制 ${server.game} 服务器地址`"
                  @click="copyAddress(server.slug, server.address)"
                >
                  <Transition
                    enter-active-class="transition duration-150 ease-out"
                    enter-from-class="opacity-0 scale-90"
                    enter-to-class="opacity-100 scale-100"
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100 scale-100"
                    leave-to-class="opacity-0 scale-90"
                    mode="out-in"
                  >
                    <span
                      v-if="copiedSlug === server.slug"
                      key="done"
                      class="inline-flex items-center gap-1 text-success"
                    >
                      <Icon icon="ph:check" class="h-3.5 w-3.5" />
                      已复制
                    </span>
                    <span v-else key="copy" class="inline-flex items-center gap-1">
                      <Icon icon="ph:copy" class="h-3.5 w-3.5" />
                      复制
                    </span>
                  </Transition>
                </button>
              </div>
            </div>
          </div>
        </BaseCard>
      </RevealMotion>
    </div>
  </div>
</template>
