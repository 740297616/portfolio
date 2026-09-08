<script setup lang="ts">
import { site } from '@/config'
import { useThemeStore } from '@/stores/theme'
import type { ThemeMode } from '@/stores/theme'

const ui = useUiStore()
const theme = useThemeStore()
const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 8)

const themeIcon = computed(() =>
  theme.mode === 'light' ? 'ph:sun' : theme.mode === 'dark' ? 'ph:moon' : 'ph:monitor',
)

const themeModeLabel: Record<ThemeMode, string> = {
  light: '浅色',
  dark: '深色',
  system: '跟随系统',
}

const themeActionLabel: Record<ThemeMode, string> = {
  light: '切换到浅色主题',
  dark: '切换到深色主题',
  system: '跟随系统主题',
}

const themeLabel = computed(
  () => `主题：${themeModeLabel[theme.mode]}，点击${themeActionLabel[theme.nextMode]}`,
)

function onNavClick() {
  ui.closeMenu()
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="
      scrolled || ui.menuOpen
        ? 'border-b border-line bg-header backdrop-blur-xl'
        : 'border-b border-transparent bg-transparent'
    "
  >
    <div class="container-page flex h-16 items-center justify-between">
      <BrandMark />

      <!-- 桌面端导航 -->
      <nav class="hidden items-center gap-1 md:flex" aria-label="Primary">
        <a
          v-for="item in site.nav"
          :key="item.href"
          :href="item.href"
          class="link-subtle rounded-lg px-3 py-1.5 text-sm hover:bg-overlay"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <a
          href="https://github.com/740297616/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          class="link-subtle hidden rounded-lg p-2 hover:bg-overlay md:inline-flex"
          aria-label="Repo"
        >
          <Icon icon="simple-icons:github" class="h-4.5 w-4.5" />
        </a>

        <!-- 主题按钮：light → dark → system 循环 -->
        <button
          type="button"
          class="link-subtle inline-flex rounded-lg p-2 hover:bg-overlay focus-visible:(outline-none ring-2 ring-focus ring-offset-2 ring-offset-bg)"
          :aria-label="themeLabel"
          :title="themeLabel"
          @click="theme.cycle()"
        >
          <Icon :icon="themeIcon" class="h-4.5 w-4.5" />
        </button>

        <!-- 移动端菜单按钮 -->
        <button
          type="button"
          class="link-subtle inline-flex rounded-lg p-2 hover:bg-overlay md:hidden"
          :aria-expanded="ui.menuOpen"
          aria-label="Toggle menu"
          @click="ui.toggleMenu()"
        >
          <Icon :icon="ui.menuOpen ? 'ph:x' : 'ph:list'" class="h-5 w-5" />
        </button>
      </div>
    </div>

    <!-- 移动端菜单 -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <nav
        v-if="ui.menuOpen"
        class="border-t border-line bg-header-solid backdrop-blur-xl md:hidden"
        aria-label="Mobile"
      >
        <div class="container-page flex flex-col gap-1 py-4">
          <a
            v-for="item in site.nav"
            :key="item.href"
            :href="item.href"
            class="link-subtle rounded-lg px-3 py-2.5 text-sm hover:bg-overlay"
            @click="onNavClick"
          >
            {{ item.label }}
          </a>
        </div>
      </nav>
    </Transition>
  </header>
</template>
