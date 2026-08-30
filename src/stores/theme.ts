/**
 * 主题唯一状态源。
 * - mode 持久化到 localStorage（key: `theme`），`system` 模式实时跟随系统
 * - data-theme 挂在 <html> 上，所有 design token 以它为准
 * - 首次 paint 前由 index.html 内联脚本初始化，避免 FOUC
 */
import { usePreferredDark, useStorage } from '@vueuse/core'

export type ThemeMode = 'light' | 'dark' | 'system'

/** 实际渲染到页面上的主题 */
export type ResolvedTheme = Exclude<ThemeMode, 'system'>

/** 按钮循环顺序：light → dark → system → light */
const CYCLE_ORDER: readonly ThemeMode[] = ['light', 'dark', 'system']

export const useThemeStore = defineStore('theme', () => {
  /** 用户选择，持久化；默认跟随系统 */
  const mode = useStorage<ThemeMode>('theme', 'system')

  /** 系统主题，监听 prefers-color-scheme 实时变化 */
  const systemDark = usePreferredDark()

  /** 实际生效的主题 */
  const effective = computed<ResolvedTheme>(() =>
    mode.value === 'system' ? (systemDark.value ? 'dark' : 'light') : mode.value,
  )

  /**
   * 点击按钮后要切换到的模式。
   * 从 `system` 退出时切到当前生效主题的反面，保证点击即有视觉变化；
   * 其余情况按固定循环 light → dark → system 走。
   */
  const nextMode = computed<ThemeMode>(() => {
    if (mode.value === 'system') return systemDark.value ? 'light' : 'dark'
    return CYCLE_ORDER[(CYCLE_ORDER.indexOf(mode.value) + 1) % CYCLE_ORDER.length]!
  })

  function applyTheme(resolved: ResolvedTheme) {
    const root = document.documentElement
    const current = root.dataset.theme

    // 只在真实切换时挂 transition class，首次渲染不挂，避免初始加载出现动画
    if (current && current !== resolved) {
      root.classList.add('theme-switching')
      window.setTimeout(() => root.classList.remove('theme-switching'), 220)
    }

    root.dataset.theme = resolved

    // 同步浏览器外壳（移动端地址栏 / PWA 状态栏）的 theme-color
    document
      .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
      ?.setAttribute('content', resolved === 'dark' ? '#0a0a0a' : '#ffffff')
  }

  watch(effective, applyTheme, { immediate: true })

  function setMode(next: ThemeMode) {
    mode.value = next
  }

  function cycle() {
    mode.value = nextMode.value
  }

  return { mode, effective, nextMode, setMode, cycle }
})
