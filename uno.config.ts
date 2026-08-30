import {
  defineConfig,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

/**
 * Design tokens —— Linear / Vercel 风格的单色系统。
 * 所有颜色都是 src/styles/main.css 里按主题（[data-theme]）定义的 CSS 变量，
 * UnoCSS 工具类只引用这些变量，组件不写死色值。
 */
export default defineConfig({
  presets: [presetWind3()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      // 背景
      bg: {
        DEFAULT: 'var(--color-bg)',
        soft: 'var(--color-bg-secondary)',
        raised: 'var(--color-surface)',
      },
      // 表面（卡片等）
      surface: {
        DEFAULT: 'var(--color-surface)',
        hover: 'var(--color-surface-hover)',
      },
      // 前景
      ink: {
        DEFAULT: 'var(--color-text)',
        secondary: 'var(--color-text-secondary)',
        muted: 'var(--color-text-muted)',
        hover: 'var(--color-text-hover)',
        fade: 'var(--color-text-fade)',
      },
      // 发丝边框
      line: {
        DEFAULT: 'var(--color-border)',
        strong: 'var(--color-border-strong)',
      },
      // 半透明叠加（hover 填充、标签、代码块）
      overlay: {
        weak: 'var(--color-overlay-weak)',
        DEFAULT: 'var(--color-overlay)',
        strong: 'var(--color-overlay-strong)',
      },
      // 悬浮头部 / 胶囊
      header: {
        DEFAULT: 'var(--color-header)',
        solid: 'var(--color-header-solid)',
      },
      pill: 'var(--color-pill)',
      // 状态色
      success: {
        DEFAULT: 'var(--color-success)',
        soft: 'var(--color-success-soft)',
      },
      // focus 光环
      focus: 'var(--color-focus-ring)',
    },
    fontFamily: {
      sans: `'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'PingFang SC', 'Microsoft YaHei', sans-serif`,
      mono: `ui-monospace, 'SFMono-Regular', 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace`,
    },
    maxWidth: {
      page: '1080px',
    },
  },
  shortcuts: {
    // 布局
    'container-page': 'mx-auto w-full max-w-page px-6 md:px-8',
    'section-pad': 'py-20 md:py-28 lg:py-32',

    // 排版
    'text-eyebrow':
      'text-xs font-medium uppercase tracking-[0.18em] text-ink-muted',
    'text-section-title':
      'text-3xl md:text-4xl font-semibold tracking-tight text-ink',
    'text-body': 'text-[15px] leading-relaxed text-ink-secondary',

    // 表面
    'card-surface':
      'rounded-2xl border border-line bg-surface transition-colors duration-300',
    'card-hover': 'hover:border-line-strong hover:bg-surface-hover',

    // 交互
    'btn-base':
      'inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:(outline-none ring-2 ring-focus ring-offset-2 ring-offset-bg)',
    'btn-primary':
      'btn-base bg-ink text-bg px-5 py-2.5 hover:bg-ink-hover active:scale-[0.98]',
    'btn-secondary':
      'btn-base border border-line bg-overlay-weak px-5 py-2.5 text-ink hover:(border-line-strong bg-overlay) active:scale-[0.98]',
    'link-subtle':
      'text-ink-secondary transition-colors duration-200 hover:text-ink',
  },
})
