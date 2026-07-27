<script setup lang="ts">
import { site, socialLinks } from '@/config'

const ui = useUiStore()
const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 8)

const github = socialLinks.find((link) => link.name === 'GitHub')

function onNavClick() {
  ui.closeMenu()
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="
      scrolled || ui.menuOpen
        ? 'border-b border-line bg-bg/75 backdrop-blur-xl'
        : 'border-b border-transparent bg-transparent'
    "
  >
    <div class="container-page flex h-16 items-center justify-between">
      <BrandMark />

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-1 md:flex" aria-label="Primary">
        <a
          v-for="item in site.nav"
          :key="item.href"
          :href="item.href"
          class="link-subtle rounded-lg px-3 py-1.5 text-sm hover:bg-white/[0.04]"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <a
          v-if="github"
          :href="github.href"
          target="_blank"
          rel="noopener noreferrer"
          class="link-subtle hidden rounded-lg p-2 hover:bg-white/[0.04] md:inline-flex"
          :aria-label="github.name"
        >
          <Icon :icon="github.icon" class="h-4.5 w-4.5" />
        </a>

        <!-- Mobile menu toggle -->
        <button
          type="button"
          class="link-subtle inline-flex rounded-lg p-2 hover:bg-white/[0.04] md:hidden"
          :aria-expanded="ui.menuOpen"
          aria-label="Toggle menu"
          @click="ui.toggleMenu()"
        >
          <Icon :icon="ui.menuOpen ? 'ph:x' : 'ph:list'" class="h-5 w-5" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
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
        class="border-t border-line bg-bg/95 backdrop-blur-xl md:hidden"
        aria-label="Mobile"
      >
        <div class="container-page flex flex-col gap-1 py-4">
          <a
            v-for="item in site.nav"
            :key="item.href"
            :href="item.href"
            class="link-subtle rounded-lg px-3 py-2.5 text-sm hover:bg-white/[0.04]"
            @click="onNavClick"
          >
            {{ item.label }}
          </a>
        </div>
      </nav>
    </Transition>
  </header>
</template>
