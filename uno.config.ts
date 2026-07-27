import {
  defineConfig,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

/**
 * Design tokens — Linear/Vercel-inspired dark monochrome system.
 * Every color used in the app is defined here; components never hardcode hex values.
 */
export default defineConfig({
  presets: [presetWind3()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      // Backgrounds
      bg: {
        DEFAULT: '#08090a',
        soft: '#0d0e10',
        raised: '#121316',
      },
      // Foregrounds
      ink: {
        DEFAULT: '#f7f8f8',
        secondary: '#9a9fa8',
        muted: '#63676f',
      },
      // Hairline borders
      line: {
        DEFAULT: 'rgba(255,255,255,0.08)',
        strong: 'rgba(255,255,255,0.16)',
      },
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
    // Layout
    'container-page': 'mx-auto w-full max-w-page px-6 md:px-8',
    'section-pad': 'py-20 md:py-28 lg:py-32',

    // Typography
    'text-eyebrow':
      'text-xs font-medium uppercase tracking-[0.18em] text-ink-muted',
    'text-section-title':
      'text-3xl md:text-4xl font-semibold tracking-tight text-ink',
    'text-body': 'text-[15px] leading-relaxed text-ink-secondary',

    // Surfaces
    'card-surface':
      'rounded-2xl border border-line bg-white/[0.02] transition-colors duration-300',
    'card-hover': 'hover:border-line-strong hover:bg-white/[0.04]',

    // Interactive
    'btn-base':
      'inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:(outline-none ring-2 ring-white/40 ring-offset-2 ring-offset-bg)',
    'btn-primary':
      'btn-base bg-ink text-bg px-5 py-2.5 hover:bg-white/85 active:scale-[0.98]',
    'btn-secondary':
      'btn-base border border-line bg-white/[0.03] px-5 py-2.5 text-ink hover:(border-line-strong bg-white/[0.06]) active:scale-[0.98]',
    'link-subtle':
      'text-ink-secondary transition-colors duration-200 hover:text-ink',
  },
})
