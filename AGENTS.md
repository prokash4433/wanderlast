<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# wanderlust

Next.js 16.4 + React 19 single-package app (Turbopack). No tests, no CI, no formatter, no monorepo.

## Commands

- `npm run dev` — dev server. `npm run build` — production build (also runs typechecking). `npm run lint` — `eslint`, no path args.
- No `typecheck` script exists — verify types with `npx tsc --noEmit`.
- Verification order: `lint`, then `npx tsc --noEmit`, then `npm run build`.
- **`lint` is currently red** with 2 pre-existing `react-hooks/set-state-in-effect` errors in `src/components/ui/carousel.tsx` and `src/hooks/use-mobile.ts`. Don't treat them as your regression; keep everything else clean.
- `npm run build` warns that `package-lock.json` in `C:\Projects` is outside the Git repository. Harmless stray file — ignore it; don't add `turbopack.root` or delete anything outside this repo to silence it.

## Backend dependency (lives outside this repo)

- All data comes from a separate server at `http://localhost:5000`: `GET /destination`, `POST /add-destination`. The URLs are hardcoded (no env var) in `src/app/destinations/page.tsx` and `src/app/add-destination/page.tsx`.
- `/destinations` is a fully static server component that `fetch`es with no error handling, so **`npm run build` fails** (`Export encountered an error on /destinations`) unless that server is up. `next dev` only errors if you visit the route.
- `/destinations` is still a stub: it fetches, `console.log`s the JSON, and renders placeholder text. `/` is the finished landing page; `/add-destination` is a working client-side form.

## App structure

- Routes live in `src/app/` (`/`, `/destinations`, `/add-destination`). There are no API routes — the backend above is the API.
- `src/app/layout.tsx` wraps every page with `Navbar`, a sonner `Toaster`, and `Footer`. Fonts come from `next/font/google` (Josefin Sans, and Lora as `--font-display`), wired to Tailwind in `@theme inline`.
- Feature components: `src/components/` (`banner`, `why-choose`, `testimonials`, `cta`, `navbar`, `footer`). Shadcn primitives: `src/components/ui/`. Hooks: `src/hooks/`. Helpers: `src/lib/`.

## Framework quirks

- `next.config.ts`: `reactCompiler: true` (with `babel-plugin-react-compiler`), while `cacheComponents` and `partialPrefetching` are explicitly set to **false** — don't assume the Next 16 defaults and don't re-enable them. Do not "fix" compiler-related rerenders by adding manual `memo`.
- Tailwind is v4 with **no config file** — the entire theme lives in `src/app/globals.css` (`@theme inline`, CSS variables, `@import "shadcn/tailwind.css"`). Do not create `tailwind.config.*`; add theme tokens in CSS.
- CSS is routed through Turbopack (`turbopack.rules` in `next.config.ts`), so Tailwind only works via `next dev`/`next build`, not standalone PostCSS.

## Components

- `components.json` uses the shadcn **`base-nova`** style: primitives come from `@base-ui/react`, **not Radix**. Component APIs and usage differ from classic shadcn/radix examples — check an existing file in `src/components/ui/` before writing usage code.
- `src/components/ui/` is a full prebuilt library; edit or use existing components rather than re-installing them with the shadcn CLI unless asked.
- `cn` is imported from the `cn` npm package (`import { cn } from "cn"`); `src/lib/utils.ts` only re-exports it — there is no clsx/tailwind-merge composition.
- Icon placement in buttons uses `data-icon="inline-start"` / `data-icon="inline-end"` (sizes respond via `has-data-[icon=...]`), not slot children.
- Path aliases: `@/*` → `src/*` (tsconfig and `components.json` must stay in sync).

## Code highlighting

- `src/lib/highlighter.tsx` is the only place code is highlighted (shiki core, JS regex engine); `src/hooks/use-highlighted-code.ts` streams lines through it. Nothing in `src/app/` uses them yet, so there is no existing wiring to follow.
- Only languages listed in the `languages` map (plus the `aliases` map and `ansi`) work; add new languages there. Use the `GrammarState` return value to continue highlighting streamed lines.
