# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server at http://localhost:8080
npm run build        # Production build
npm run lint         # Run ESLint
npm run test         # Run Vitest tests once
npm run test:watch   # Run Vitest in watch mode
npm run preview      # Preview production build
```

## Architecture

This is a **frontend-only SPA** — a marketing landing page for an AI social media content platform. No backend, no database, no API calls.

**Stack:** React 18 + TypeScript + Vite (SWC) + Tailwind CSS + shadcn/ui + React Router v6

**Structure:**
- `src/pages/` — Routes: `Index.tsx` (landing page), `NotFound.tsx` (404), `About.tsx`, `Blog.tsx`, `Careers.tsx`, `Changelog.tsx`, `Contact.tsx`, `Integrations.tsx`, `Privacy.tsx`, `Security.tsx`, `Terms.tsx`
- `src/components/` — Section components composed in `Index.tsx` (Navbar, HeroSection, FeaturesSection, HowItWorksSection, PricingSection, ComplianceSection, Footer); `PageLayout.tsx` wraps inner pages with Navbar and Footer; `ContactSalesModal.tsx` is a dialog triggered from Navbar CTAs; `NavLink.tsx` is a reusable nav link primitive
- `src/components/ui/` — shadcn/ui primitives; edit these sparingly and only when extending component variants
- `src/hooks/` — `use-mobile.tsx` (breakpoint detection), `use-toast.ts`
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

**Routing:** `App.tsx` sets up routes with React Router. The landing page sections live in `Index.tsx`. Inner pages (`/about`, `/blog`, `/careers`, `/changelog`, `/contact`, `/integrations`, `/privacy`, `/security`, `/terms`) use `PageLayout.tsx` for consistent Navbar/Footer wrapping. New routes go above the catch-all `*` route in `App.tsx`.

**Styling:** Tailwind with CSS custom properties for theming (HSL variables in `index.css`). Dark mode uses the `class` strategy. Custom animations (fade-in-up, float, pulse-glow) are defined in `index.css`. Use `cn()` from `@/lib/utils` for conditional class merging.

**Path alias:** `@` maps to `src/` (configured in Vite, TypeScript, and Vitest).

**Data:** Features, pricing plans, add-ons, and footer links are hardcoded arrays inside their respective section components — no external data sources.

**TypeScript:** Strict mode is off (`strict: false`, `noImplicitAny: false`).

**Testing:** Vitest with jsdom. Tests go in `src/**/*.{test,spec}.{ts,tsx}`. Setup file at `src/test/setup.ts`. E2E via Playwright with the Lovable preset (`playwright.config.ts`).

**Lovable platform:** The project was scaffolded via Lovable. The `lovable-tagger` plugin runs in dev mode to tag components. `.lovable/plan.md` tracks project-level tasks.

## Integration with Agency AI OS
- App: https://app.brandsbakery.com (Agency AI OS, ~/projects/agency-ai-os)
- CTA targets: Log In → /login · Get Started → / · Sales → mailto:hello@brandsbakery.com
- Auth: Clerk shared instance — no auth in this repo
- Deploy: npm run build && pm2 restart brandsbakery

