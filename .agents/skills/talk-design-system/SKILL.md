---
name: talk-design-system
description: Apply the correct design system when creating or editing slides in this repository. Use whenever writing or modifying slide content in talks/*/slides.md, talks/*/hook.md, or any talk HTML. This skill overrides generic reveal.js advice with the exact conventions used in this codebase.
---

# Talk Design System

This repository uses a custom CSS design system on top of reveal.js 4.4.0. Always follow these conventions exactly — do not invent new classes or inline color styles.

## Color Semantics

Use the right class for the right meaning. Never use inline `color:` CSS.

| Class prefix | Color | When to use |
|---|---|---|
| `*-accent` | Purple `#8b5cf6` | Key concept, main idea, section heading emphasis |
| `*-success` | Green `#10b981` | Positive outcome, gain, what works, "correct" |
| `*-danger` | Red `#ef4444` | Wrong approach, cost, error, what to avoid |
| `*-warning` | Amber `#f59e0b` | Caution, nuance, tradeoff |
| `*-info` | Blue `#3b82f6` | Technical term, definition, neutral info |
| `*-other` | Soft red `#ff8383` | Secondary emphasis when accent is already used nearby |

## Text Utilities

```html
<span class="text-accent">purple</span>
<span class="text-success">green</span>
<span class="text-warning">amber</span>
<span class="text-danger">red</span>
<span class="text-info">blue</span>
```

## Emphasis (bold + color — use for key terms in sentences)

```html
<span class="emphasis-accent">key concept</span>
<span class="emphasis-success">positive result</span>
<span class="emphasis-warning">caution point</span>
<span class="emphasis-danger">wrong approach</span>
<span class="emphasis-info">technical term</span>
<span class="emphasis-other">secondary term</span>
```

## Highlights (colored background pill)

```html
<span class="highlight highlight-accent">term</span>
<span class="highlight highlight-success">term</span>
<span class="highlight highlight-warning">term</span>
<span class="highlight highlight-danger">term</span>
<span class="highlight highlight-info">term</span>
```

## Underlines (use on slide titles and section headers)

```html
<span class="underline-accent">slide title</span>
<span class="underline-success">positive heading</span>
<span class="underline-primary">deep purple underline</span>
```

## Brush Highlight (marker-stroke effect — use sparingly, one per slide max)

```html
<span class="brush-highlight">standout term</span>
```

## Callout / Blockquote

```html
<blockquote class="callout callout--accent">
  <span class="callout__label">PROMPT</span>
  The callout text.
</blockquote>
<!-- variants: callout--success, callout--warning, callout--danger, callout--info -->
```

## Glass Card

```html
<div class="glass-card">Content</div>
```

## Slide Directives

```markdown
<!-- .slide: class="center-slide" -->       Full vertical+horizontal centering
<!-- .slide: data-auto-animate -->           Morphing transition to next slide
<!-- .slide: data-visibility="hidden" -->    Hidden from navigation (preserved in source)
```

## Fragments — always use fade-up

```html
<!-- CORRECT -->
<div class="fragment fade-up">item</div>
<div class="fragment fade-up" data-fragment-index="2">item</div>

<!-- WRONG — never use these -->
<div class="fragment fade-in">...</div>
<div class="fragment">...</div>
```

## Layout Patterns

### Standard slide
```markdown
---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Slide Title</span>

<div class="pt-8">
  Content
</div>
```

### Two-column comparison
```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; font-size: 0.85em; text-align: left;">
  <div>
    <div style="opacity: 0.5; font-size: 0.75em; letter-spacing: 0.08em; margin-bottom: 0.8rem;">LEFT HEADER</div>
    <div class="fragment fade-up" style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);">Item</div>
  </div>
  <div>
    <div style="opacity: 0.5; font-size: 0.75em; letter-spacing: 0.08em; margin-bottom: 0.8rem;">RIGHT HEADER</div>
    <div class="fragment fade-up" style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);">Item</div>
  </div>
</div>
```

### Icon step flow
```html
<div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.5rem; text-align: center;">
  <div class="fragment fade-up" data-fragment-index="1">
    <div style="font-size: 1.8em; margin-bottom: 0.4em;">📋</div>
    <div style="opacity: 0.7; font-size: 0.75em;">Label</div>
  </div>
  <div class="fragment fade-up" data-fragment-index="2">
    <div style="font-size: 1.8em; margin-bottom: 0.4em;">→</div>
  </div>
  <div class="fragment fade-up" data-fragment-index="2">
    <div style="font-size: 1.8em; margin-bottom: 0.4em;">⚙️</div>
    <div style="opacity: 0.7; font-size: 0.75em;">Label</div>
  </div>
</div>
```

### Glass card grid
```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.85em;">
  <div class="glass-card fragment fade-up">
    <strong class="text-accent">Card Title</strong><br/>
    Description
  </div>
</div>
```

### Auto-animate morphing pair
```markdown
---

<!-- .slide: data-auto-animate -->

## Before Title

<div data-id="morph-box" class="glass-card">Before state</div>

---

<!-- .slide: data-auto-animate -->

## After Title

<div data-id="morph-box" class="glass-card">After state — same data-id causes morphing</div>
```

## Hook.md Pattern (title slide only)

```markdown
<!-- .slide: class="center-slide" -->

## Talk Title

## <span class="highlight-accent">Talk Subtitle</span>
```

## Questions Slide Pattern

```markdown
---

<!-- .slide: class="center-slide" -->

## Questions?

<div class="pt-8" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
  <div style="font-size: 0.55em; opacity: 0.5; letter-spacing: 0.1em;">SCAN FOR FEEDBACK & LINKS</div>
  <img src="./assets/images/qr_audiencemeter.png" alt="Feedback QR" style="width: 200px; height: 200px;" />
</div>
```

## File Structure

```
talks/<kebab-case-name>/
  index.html        # reveal.js shell — copy from beyond-vibe-coding
  hook.md           # Title slide only (1 slide)
  slides.md         # All content slides
  assets/images/    # Talk-specific images
talks/shared/
  intro-mbio.md     # Speaker bio — referenced as ../shared/intro-mbio.md, never edited
```

## Slide Separators

- Horizontal (next slide): `---` on its own line with blank lines above and below
- Vertical (sub-slide): `--` on its own line with blank lines above and below

## What NOT to do

- Never use inline `color:` CSS — use the utility classes above
- Never use `fragment fade-in` or bare `fragment` — always `fragment fade-up`
- Never edit `talks/shared/intro-mbio.md`
- Never commit `data/slides.json` unless talk titles actually changed
- Never create planning documents (no `NEW_PRESENTATION.md` etc.)
- Never use `pt` for font sizes — this repo uses `em` and inline `font-size` where needed
