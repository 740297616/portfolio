# Aster Studio — Developer Studio Homepage

A production-quality developer studio homepage built with Vue 3 + TypeScript + Vite.
Dark, minimal, Linear/Vercel-inspired design. All content is config-driven.

## Stack

Vue 3 (Composition API + `<script setup>`) · TypeScript · Vite · Vue Router · Pinia ·
UnoCSS (presetWind3 + design tokens) · motion-v · @vueuse/core · @iconify/vue ·
unplugin-auto-import / unplugin-vue-components

## Commands

```sh
pnpm install       # install dependencies
pnpm dev           # dev server with HMR
pnpm build         # type-check + production build
pnpm preview       # preview the production build
pnpm lint          # oxlint + eslint (with --fix)
pnpm format        # prettier on src/
node scripts/screenshot.mjs [url] [outDir]   # headless visual check (needs local Chrome)
```

## Editing content — no component changes needed

Everything visible on the site lives in `src/config/`:

| File | Controls |
| --- | --- |
| `site.ts` | Brand name, title/description, canonical URL, nav, hero copy & CTAs |
| `about.ts` | About paragraphs + focus areas |
| `tech.ts` | Tech stack by category (icon / level / years) |
| `projects.ts` | Featured projects (tags, tech, GitHub/demo links, `pinned`, screenshot) |
| `timeline.ts` | Growth timeline entries |
| `now.ts` | "Now" — current focus items |
| `stats.ts` | Animated statistics (API-ready shape) |
| `social.ts` | Contact channels (GitHub / Email / Blog / X) |

Types for all of the above are in `src/types/content.ts`.

> **Before deploying:** replace the placeholder brand (`Aster Studio`), domain
> (`asterstudio.dev`) and social handles (`yourname`) in `src/config/`,
> `index.html`, `public/robots.txt`, `public/sitemap.xml` and `public/site.webmanifest`.
> Project screenshots go in `public/` and are referenced via `image` in `projects.ts`.

## Architecture

```
src/
├── components/
│   ├── common/      # RevealMotion, BaseButton, BaseCard (mouse-follow glow),
│   │                # BaseTag, AnimatedNumber, SectionContainer, SectionHeader
│   ├── layout/      # AppHeader (sticky blur nav + mobile menu), AppFooter, BrandMark
│   └── sections/    # Hero, About, Tech, Projects, Timeline, Now, Stats, Contact
├── composables/     # useCountUp, useCardGlow (auto-imported)
├── config/          # ← all site content (see table above)
├── constants/       # shared animation easings/durations
├── layouts/         # DefaultLayout
├── router/          # routes + scroll behavior + document titles
├── stores/          # Pinia ui store (mobile menu)
├── styles/          # global base styles (tokens live in uno.config.ts)
├── types/           # content models + generated auto-import dts
└── views/           # HomeView, NotFoundView
```

Design tokens (colors, fonts, shortcuts like `btn-primary` / `card-surface`) are
defined once in `uno.config.ts`. Animations share one easing vocabulary in
`src/constants/animation.ts` and respect `prefers-reduced-motion`.

## SEO

`index.html` ships full meta (title/description/keywords), Open Graph + Twitter Card
(`public/og.png`), canonical URL, favicon (`.svg` + `.ico`), `site.webmanifest`,
`robots.txt` and `sitemap.xml`. Keep `index.html` meta in sync with `src/config/site.ts`.

## Extending

- **New page** (e.g. blog): add a view in `src/views/`, register it in
  `src/router/index.ts` — the layout, transitions and SEO title handling are already wired.
- **New project / timeline entry**: append to the config file; sorting (`pinned`) and
  rendering are automatic.
- **Live stats**: fetch in a composable and feed the same `StatItem[]` shape to
  `StatsSection` — components don't change.
