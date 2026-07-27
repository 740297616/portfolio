/** Cross-cutting UI state (mobile menu, future theme/blog prefs). */
export const useUiStore = defineStore('ui', () => {
  const menuOpen = ref(false)

  function toggleMenu() {
    menuOpen.value = !menuOpen.value
  }

  function closeMenu() {
    menuOpen.value = false
  }

  return { menuOpen, toggleMenu, closeMenu }
})
