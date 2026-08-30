/**
 * Theme management — single source of truth for light / dark / system.
 *
 * - `mode` is persisted to localStorage under the `theme` key.
 * - When mode is `system` (also the default before the user ever chooses),
 *   the app follows the OS preference live via `usePreferredDark`.
 * - `data-theme` on `<html>` is what every design token keys off.
 * - The tiny FOUC-guard inline script in `index.html` resolves the initial
 *   value before first paint, so the page never flashes the wrong theme.
 */
import { usePreferredDark, useStorage } from '@vueuse/core'

export type ThemeMode = 'light' | 'dark' | 'system'

/** Resolved theme actually painted to the page. */
export type ResolvedTheme = Exclude<ThemeMode, 'system'>

/** Cycle order for the header button: light → dark → system → light. */
const CYCLE_ORDER: readonly ThemeMode[] = ['light', 'dark', 'system']

export const useThemeStore = defineStore('theme', () => {
  /** User-selected mode, persisted. Defaults to following the system. */
  const mode = useStorage<ThemeMode>('theme', 'system')

  /** Live OS preference (reacts to `prefers-color-scheme` changes). */
  const systemDark = usePreferredDark()

  /** The theme actually applied to the document. */
  const effective = computed<ResolvedTheme>(() =>
    mode.value === 'system' ? (systemDark.value ? 'dark' : 'light') : mode.value,
  )

  /**
   * The mode a click on the header button will switch to.
   * Leaving `system` always flips the currently-shown theme, so the first
   * click produces an immediate visible change; otherwise the fixed
   * light → dark → system cycle is followed.
   */
  const nextMode = computed<ThemeMode>(() => {
    if (mode.value === 'system') return systemDark.value ? 'light' : 'dark'
    return CYCLE_ORDER[(CYCLE_ORDER.indexOf(mode.value) + 1) % CYCLE_ORDER.length]!
  })

  function applyTheme(resolved: ResolvedTheme) {
    const root = document.documentElement
    const current = root.dataset.theme

    // Animate the swap only for real runtime changes — never on first paint,
    // so the initial load stays free of flash and transitions.
    if (current && current !== resolved) {
      root.classList.add('theme-switching')
      window.setTimeout(() => root.classList.remove('theme-switching'), 220)
    }

    root.dataset.theme = resolved

    // Keep browser chrome (mobile address bar / PWA status bar) in sync.
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
