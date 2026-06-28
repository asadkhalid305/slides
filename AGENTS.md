# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

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

Use the `/new-talk` slash command. Manually: create `talks/<kebab-case-name>/` with `index.html`, `hook.md`, and `slides.md`. Copy `index.html` from an existing talk (e.g., `beyond-vibe-coding`) as the boilerplate — it includes the lightbox, watermark, all plugins, and correct asset paths. Run `npm run extract` after to update `data/slides.json`.

**Talk folder structure:**
```
talks/<talk-name>/
  index.html        # reveal.js shell (title, plugins, watermark, lightbox)
  hook.md           # Title slide only (1 slide)
  slides.md         # All content slides
  assets/
    images/         # Talk-specific images
```

**Shared content** (used by all talks): `talks/shared/intro-mbio.md` — speaker bio slide. Reference it in `index.html` as `../shared/intro-mbio.md`.

**Slide separators:** `---` horizontal | `--` vertical

### Build Pipeline

Gulp orchestrates: **extract → Rollup JS bundles** (`js/index.js` → `dist/reveal.js` UMD + `dist/reveal.esm.js` ESM) **→ plugin bundles** (6 plugins each get UMD + ESM) **→ SCSS → Tailwind/PostCSS → copy assets**.

### CSS Structure

- `css/reveal.scss` — main presentation styles
- `css/landing.scss` — landing page styles (uses Tailwind + DaisyUI)
- `css/_variables.scss` — colors and theme variables
- `css/talks/` — talk-specific overrides (rare; global utilities usually suffice)
- `css/theme/` — 13+ reveal.js themes

### Deployment

- **Vercel**: auto-deploys via `vercel.json` on push to `main`
- **GitHub Pages**: CI in `.github/workflows/deploy.yml` triggers on push to `main`, runs `npm run build-talks`
- **Workflow**: develop on `feat/<talk-name>` branch → merge `--no-ff` into `main` → push `main` (Vercel deploys automatically)

---

## CSS Design System

All variables are in `css/_variables.scss`. All utilities are in `css/_reveal-customizations.scss`.

### Color Palette

| Variable | Hex | Semantic use |
|---|---|---|
| `--color-primary` | `#4f0cad` | Deep purple — brand, borders, glows |
| `--color-primary-light` | `#6b21a8` | Lighter purple — gradients |
| `--color-primary-dark` | `#3b0a82` | Darker purple — gradients |
| `--color-accent` | `#8b5cf6` | Purple accent — key concepts, code, callouts |
| `--color-success` | `#10b981` | Green — positive, correct, gains |
| `--color-warning` | `#f59e0b` | Amber — attention, caution |
| `--color-danger` | `#ef4444` | Red — errors, deprecated, wrong |
| `--color-info` | `#3b82f6` | Blue — information, technical terms |
| `--color-other` | `#ff8383` | Soft red — secondary emphasis |

### Text Utilities

```html
<span class="text-accent">purple text</span>
<span class="text-success">green text</span>
<span class="text-warning">amber text</span>
<span class="text-danger">red text</span>
<span class="text-info">blue text</span>
```

### Emphasis (bold + color)

```html
<span class="emphasis-accent">key concept</span>
<span class="emphasis-success">positive outcome</span>
<span class="emphasis-warning">caution point</span>
<span class="emphasis-danger">wrong approach</span>
<span class="emphasis-info">technical term</span>
<span class="emphasis-other">secondary emphasis</span>
```

### Highlights (colored background pill)

```html
<span class="highlight highlight-accent">highlighted text</span>
<span class="highlight highlight-success">highlighted text</span>
<!-- also: highlight-warning, highlight-danger, highlight-info -->
```

### Underlines

```html
<span class="underline-accent">underlined in purple</span>
<span class="underline-success">underlined in green</span>
<span class="underline-primary">underlined in deep purple</span>
```

### Brush Highlight (marker-stroke effect)

```html
<span class="brush-highlight">standout term</span>
```

### Callout / Blockquote

```html
<blockquote class="callout callout--accent">
  <span class="callout__label">PROMPT</span>
  The actual callout text goes here.
</blockquote>
<!-- also: callout--success, callout--warning, callout--danger, callout--info -->
```

### Glass Card

```html
<div class="glass-card">Content inside a frosted glass card</div>
```

### Layout Utilities

```html
<!-- Slide-level centering (add to slide directive) -->
<!-- .slide: class="center-slide" -->

<!-- Text alignment -->
<div class="text-start">left-aligned</div>
<div class="text-center">centered</div>

<!-- Padding top -->
<div class="pt-6">1.5rem top padding</div>
<div class="pt-8">2rem top padding</div>
<div class="pt-12">3rem top padding</div>
```

### Fragments (animations)

```html
<!-- Appear one by one -->
<div class="fragment fade-up" data-fragment-index="1">first</div>
<div class="fragment fade-up" data-fragment-index="2">second</div>

<!-- Strike-through on reveal -->
<span class="fragment strike">text to cross out</span>
```

### Slide Directives

```markdown
<!-- .slide: class="center-slide" -->          Full-center layout
<!-- .slide: data-auto-animate -->              Morphing transition to next slide
<!-- .slide: data-visibility="hidden" -->       Hidden from navigation (preserved in source)
<!-- .slide: data-background-color="#1a1a2e" --> Custom background
```

### Images

```html
<!-- Lightbox (click to fullscreen) -->
<a data-preview-image="./assets/images/screenshot.png">
  <img src="./assets/images/screenshot.png" alt="..." style="max-height: 400px;" />
</a>

<!-- Meme-sized image -->
<img class="meme" src="./assets/images/meme.png" alt="..." />
```

---

## Talk Authoring Conventions

### Standard Slide Anatomy

```markdown
---

<!-- .slide: class="center-slide" -->

## Slide Title

<div class="pt-8">
  Content here
</div>
```

### Typical Talk Structure

1. `hook.md` — title slide (1 slide, `center-slide`, use `highlight-accent` on subtitle)
2. `../shared/intro-mbio.md` — speaker bio (shared, do not edit)
3. `slides.md` — all content slides in this order:
   - Problem/context slides (what the audience already knows)
   - Insight/pivot slide (the "so I built something" moment)
   - Solution demonstration
   - Building blocks / how it works
   - What stays with the engineer (honest scope)
   - How to start / actionable takeaway
   - Recap
   - Questions (with AudienceMeter QR)

### Questions Slide Pattern

```markdown
---

<!-- .slide: class="center-slide" -->

## Questions?

<div class="pt-8" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
  <div style="font-size: 0.55em; opacity: 0.5; letter-spacing: 0.1em;">SCAN FOR FEEDBACK & LINKS</div>
  <img src="./assets/images/qr_audiencemeter.png" alt="Feedback QR" style="width: 200px; height: 200px;" />
</div>
```

### Two-Column Layout Pattern

```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; font-size: 0.85em; text-align: left;">
  <div>
    <div style="opacity: 0.5; font-size: 0.75em; letter-spacing: 0.08em; margin-bottom: 0.8rem;">LEFT COLUMN HEADER</div>
    <div class="fragment fade-up">Item 1</div>
    <div class="fragment fade-up">Item 2</div>
  </div>
  <div>
    <div style="opacity: 0.5; font-size: 0.75em; letter-spacing: 0.08em; margin-bottom: 0.8rem;">RIGHT COLUMN HEADER</div>
    <div class="fragment fade-up">Item A</div>
  </div>
</div>
```

### Icon Row Pattern (step-by-step flow)

```html
<div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.5rem; text-align: center;">
  <div class="fragment fade-up" data-fragment-index="1">
    <div style="font-size: 1.8em; margin-bottom: 0.4em;">📋</div>
    <div style="opacity: 0.7; font-size: 0.75em;">Step label</div>
  </div>
  <div class="fragment fade-up" data-fragment-index="2">
    <div style="font-size: 1.8em; margin-bottom: 0.4em;">→</div>
  </div>
  <div class="fragment fade-up" data-fragment-index="2">
    <div style="font-size: 1.8em; margin-bottom: 0.4em;">⚙️</div>
    <div style="opacity: 0.7; font-size: 0.75em;">Next step</div>
  </div>
</div>
```

### Auto-Animate Pair (Input → Output morphing)

```markdown
---

<!-- .slide: data-auto-animate -->

## Input

<div data-id="content-box" class="glass-card">
  Content that morphs
</div>

---

<!-- .slide: data-auto-animate -->

## Output

<div data-id="content-box" class="glass-card">
  Transformed content
</div>
```

---

## Git Workflow

- Feature branches: `feat/<talk-name>`
- Merge strategy: `git merge --no-ff feat/<talk-name>` into `main`
- Push `main` directly (Vercel auto-deploys, no separate deploy step needed)
- Never push feature branches to remote — work locally, merge to main
- After merge, push: `git push origin main`
- Co-author commits: `Co-Authored-By: Codex Sonnet 4.6 <noreply@anthropic.com>`
- **Never commit `data/slides.json`** unless talk titles actually changed (it reorders alphabetically on every extract, creating noise)
