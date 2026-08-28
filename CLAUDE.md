@AGENTS.md

# NeoMasterys

## Overview

NeoMasterys (نيوماستريز) is a **bilingual (Arabic / English) agency platform** for a
company focused on AI Training, Automation, Management Consulting, Business
Process Re-engineering, and Machine Learning / Deep Learning & predictive
models. Arabic is the default language and primary market; English is a
fully-supported secondary language, not an afterthought.

## Architecture

- **Framework**: Next.js (App Router), TypeScript, Tailwind CSS v4.
- `src/app/` — routes, layouts, `globals.css`. Routes: `/`, `/services`,
  `/portfolio`, `/about`, `/contact` — the latter four are currently
  `ComingSoon` placeholders (see `src/components/ComingSoon.tsx`) so Navbar/
  Footer links resolve; only `/` has its full content built out.
- `src/components/layout/` — site-wide chrome (`Navbar.tsx`, `Footer.tsx`),
  wired into `src/app/layout.tsx` around `{children}`. Other reusable UI
  lives directly under `src/components/`.
- `src/context/LanguageContext.tsx` — the bilingual provider (see below).
- `src/data/` — static content and copy: `translations.ts` (bilingual
  dictionary), `site-config.ts` (non-translated contact/social values —
  email, phone, links; these aren't language-dependent so they don't belong
  in `translations.ts`), `service-icons.ts` (service `id` → `lucide-react`
  icon map).
- `src/types/` — shared TypeScript types (`Language`, `Translations`, etc.).
- `src/lib/utils.ts` — shared helpers, including the `cn()` class-merging
  helper (`clsx` + `tailwind-merge`).
- Path alias: `@/*` → `src/*`.

## Bilingual system (Arabic / English)

- Default language is **Arabic** (`ar`, `dir="rtl"`); secondary is **English**
  (`en`, `dir="ltr"`).
- `LanguageProvider` (`src/context/LanguageContext.tsx`) treats `localStorage`
  as the single source of truth, read via `useSyncExternalStore` (not
  `useEffect` + `setState`, which both mistimes the update and trips the
  `react-hooks/set-state-in-effect` lint rule). `getServerSnapshot` always
  returns the default language, so the server render and first client render
  match exactly; React swaps in the stored value only after hydration
  completes. A `useEffect` then imperatively syncs
  `document.documentElement.lang` / `dir` to match. The root layout renders
  static `lang="ar" dir="rtl"` on `<html>` for the same reason — keep it
  static and let the provider own updates after mount, or you will
  reintroduce hydration mismatches.
- **Rule: never hardcode user-facing text.** Every component that renders
  copy must pull it from `useLanguage().t`, which is typed by the
  `Translations` interface in `src/types/index.ts` and populated for both
  languages in `src/data/translations.ts`. When you add a new piece of UI
  copy, add the key to `Translations` first, then fill in both the `ar` and
  `en` entries in `translations.ts` before using it in a component.
- **Rule: layouts must work in both directions.** Use Tailwind's logical
  properties instead of physical left/right ones, so the same markup mirrors
  correctly under both `dir="rtl"` and `dir="ltr"`:
  - `ms-*` / `me-*` instead of `ml-*` / `mr-*`
  - `ps-*` / `pe-*` instead of `pl-*` / `pr-*`
  - `text-start` / `text-end` instead of `text-left` / `text-right`
  - `start-*` / `end-*` instead of `left-*` / `right-*`
  - `border-s-*` / `border-e-*` and `rounded-s-*` / `rounded-e-*` where relevant
  - Only reach for a physical utility when a value must stay fixed regardless
    of direction (e.g. an icon that shouldn't flip).
- **Known gotcha: don't pair `rtl:`/`ltr:` variants with `translate-x-*` (or
  other transform-family) utilities.** In this Tailwind v4 setup, the
  variant-scoped class doesn't reliably update the element's computed
  `translate` when only the active class swaps (confirmed via computed-style
  inspection while debugging the Navbar's mobile drawer — it got stuck
  off-screen). Compute the transform from `dir` in JS and apply it as an
  inline `style` instead, as `src/components/layout/Navbar.tsx` does for its
  mobile drawer.

## Fonts

Two typefaces loaded via `next/font/google` in `src/app/layout.tsx`, exposed
as CSS variables (`--font-ar`, `--font-en`):

- **Arabic body/UI**: `IBM_Plex_Sans_Arabic`
- **English body/UI**: `Plus_Jakarta_Sans`

`globals.css` switches the active font automatically based on the `<html
dir>` attribute — components should not need to set font-family manually.

## Design language

Visual direction follows the "Experimental Developer-First" system defined
for this brand (see the Stitch export design tokens): a **strictly
monochrome, dark-first** palette, sharp/flat surfaces (no soft shadows, 0px
corner radius by default), and 1px hairline borders instead of elevation
shadows. Keep new UI consistent with it:

- **Colors** (`src/app/globals.css`, CSS variables, dark-first with a
  `prefers-color-scheme: light` override): `background`, `foreground`,
  `card` (recessed panel surface), `primary` / `primary-foreground` (the only
  accent — pure white on dark, pure near-black on light), `muted-foreground`,
  `surface-hover`, `border` / `border-strong`, `error` / `error-foreground`.
  Exposed as Tailwind utilities via `@theme inline` (e.g. `bg-background`,
  `text-muted-foreground`, `border-border`, `bg-primary
  text-primary-foreground`).
- **Shape**: sharp corners — avoid `rounded-*` utilities unless there's a
  specific reason to deviate.
- **Depth**: communicate hierarchy with borders and background-plane changes
  (`border`, `card`, `surface-hover`), not shadows.
- **Buttons**: primary = solid `bg-primary text-primary-foreground`, no
  border; secondary = transparent with `border border-border`, hover to
  `border-primary`.

## Verification

Before considering a change done, run:

```bash
npm run build
npm run lint
```

Both must pass with no TypeScript or ESLint errors. Since language switching
mutates `<html>` after mount, watch the browser console for React hydration
warnings whenever you touch `LanguageContext`, the root layout, or anything
that reads `t`/`dir` during the first render.
