/** 跨组件 UI 状态（移动端菜单等） */
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
