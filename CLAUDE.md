# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A personal profile/resume web app — a single-page timeline of work experience, skills, and education with glass-morphism UI and scroll-triggered animations.

## Commands

```bash
npm run dev          # Dev server on :5173
npm run build        # TypeScript check + Vite production build (tsc && vite build)
npm run test:run     # Run all tests once (vitest run)
npm run test         # Watch mode tests
npm run lint         # ESLint (src/ only)
npm run lint:fix     # ESLint with auto-fix
npm run format       # Prettier (src/ only)
```

Run a single test file: `npx vitest run src/__tests__/ProjectCard.test.tsx`

## Architecture

**Data flow:** `src/data/resumeData.ts` (single source of truth) → typed with interfaces from `src/types/resume.ts` → passed as props through `App` → `Header`, `Timeline`, `SkillsSection`.

**Timeline hierarchy:** `Timeline` → `YearBlock` (groups by year) → `CompanyCard` → `ProjectCard`. Each level uses `ExpandableSection` for expand/collapse with Framer Motion.

**Shared UI components** (`src/components/ui/`):
- `GlassPanel` — polymorphic glass-morphism wrapper (`as` prop for tag)
- `ExpandableSection` — Framer Motion animated expand/collapse
- `ChevronIcon` — shared rotation-animated chevron

**Markdown rendering:** `src/lib/markdown.tsx` exports `renderDetails()` which converts a subset of markdown (bold, headers, lists) to React nodes. Used for project detail text.

## Styling

Tailwind CSS v4 with CSS-first configuration. All custom theme tokens (colors, fonts) are defined in `src/index.css` under `@theme` — not in a `tailwind.config` file. Use semantic color names like `text-primary`, `bg-panel`, `text-accent` etc.

## Testing

Vitest + React Testing Library + jsdom. Test setup in `src/test-setup.ts` mocks `IntersectionObserver` (required for Framer Motion's `whileInView`). Tests live in `src/__tests__/`.

## Conventions

- All components use **named exports** (not default), except `App`
- TypeScript strict mode with `noUnusedLocals` and `noUnusedParameters`
- ESLint 9 flat config + Prettier (run both before committing)
