# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server with livereload at localhost:8000
npm run build        # Full build: extract metadata + compile JS/CSS/plugins
npm run extract      # Regenerate data/slides.json from talks/ directory
npm run build-talks  # Pre-deployment build (outputs to build/)
npm run test         # Run ESLint + QUnit tests

# PDF export for a specific talk (requires local dev server running)
npm run generate:pdf -- <talk-folder-name>

# Granular Gulp tasks
npx gulp css         # Rebuild CSS only
npx gulp js          # Rebuild JS bundles only
```

## Architecture

This is a **reveal.js presentation portfolio** — a static site with a landing page listing all talks, each talk being a self-contained reveal.js presentation.

### Key Data Flow

1. `scripts/extractSlideData.js` scans `talks/` folders, reads `<title>` tags from `index.html` files, and writes `data/slides.json`
2. `main.js` reads `data/slides.json` at runtime and renders talk cards on the landing page (`index.html`)
3. The Gulp build compiles everything to `dist/` (dev) or `build/` (deployment)

### Adding a New Talk

Create `talks/<kebab-case-name>/index.html` with a `<title>` tag and `data-*` metadata attributes. Run `npm run extract` to update `data/slides.json`. Talk content is typically split across markdown files (`hook.md`, `intro.md`, `slides.md`) loaded via reveal.js's Markdown plugin.

Horizontal slide separators: `---` | Vertical slide separators: `--`

Shared content (intro slide, common images) lives in `talks/shared/`.

### Build Pipeline

Gulp orchestrates: **extract → Rollup JS bundles** (`js/index.js` → `dist/reveal.js` UMD + `dist/reveal.esm.js` ESM) **→ plugin bundles** (6 plugins each get UMD + ESM) **→ SCSS → Tailwind/PostCSS → copy assets**.

### CSS Structure

- `css/reveal.scss` — main presentation styles
- `css/landing.scss` — landing page styles (uses Tailwind + DaisyUI)
- `css/_variables.scss` — colors and theme variables
- `css/talks/` — talk-specific overrides
- `css/theme/` — 13+ reveal.js themes

### Deployment

- **Vercel**: auto-deploys via `vercel.json`
- **GitHub Pages**: CI in `.github/workflows/deploy.yml` triggers on push to `main`, runs `npm run build-talks`
