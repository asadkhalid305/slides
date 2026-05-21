# /slide

Add a new slide to an existing talk's `slides.md`.

## Usage

```
/slide <talk-folder-name> "<slide intent>"
```

Examples:
```
/slide beyond-vibe-coding "show the four building blocks with fragments"
/slide beyond-vibe-coding "two-column comparison: before vs after"
/slide beyond-vibe-coding "callout quote with a key insight"
/slide beyond-vibe-coding "icon flow showing 5 steps left to right"
```

## What this does

1. Reads `talks/<talk-folder-name>/slides.md` to understand the existing slide content and where to insert
2. Writes the new slide using the project's design system — do NOT invent classes or inline styles that conflict with the established patterns
3. Appends with `---` separator unless the user specifies a different position
4. Does NOT run extract, git add, or commit anything

## Design rules — always follow these

### Slide structure
```markdown
---

<!-- .slide: class="center-slide" -->

## Slide Title

<div class="pt-8">
  Content here
</div>
```

### Color semantics — use the right color for the right meaning
- `emphasis-accent` / `highlight-accent` / `text-accent` → key concept, the main idea
- `emphasis-success` / `text-success` → positive outcome, gain, what works
- `emphasis-danger` / `text-danger` → wrong approach, cost, what to avoid
- `emphasis-warning` / `text-warning` → caution, nuance, "but watch out"
- `emphasis-info` / `text-info` → technical term, definition
- `underline-accent` → slide titles and section headers
- `brush-highlight` → single standout term that must pop

### Fragment animations
- Always use `class="fragment fade-up"` (not fade-in, not default)
- Use `data-fragment-index` to control reveal order
- Arrows/separators in icon flows share the same index as the item they follow

### Layout patterns — pick the right one for the content

**Bullet list with fragments:**
```html
<ul style="font-size: 0.9em;">
  <li class="fragment fade-up">First point</li>
  <li class="fragment fade-up">Second point <span class="emphasis-accent">key word</span></li>
</ul>
```

**Two-column comparison:**
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

**Icon step flow (horizontal):**
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

**Callout / blockquote:**
```html
<blockquote class="callout callout--accent">
  <span class="callout__label">KEY INSIGHT</span>
  The callout text goes here.
</blockquote>
```

**Glass card grid:**
```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.85em;">
  <div class="glass-card fragment fade-up">
    <strong class="text-accent">Card Title</strong><br/>
    Card description text
  </div>
</div>
```

**Auto-animate pair (morphing transition):**
```markdown
---

<!-- .slide: data-auto-animate -->

## Before

<div data-id="box" class="glass-card">Before state</div>

---

<!-- .slide: data-auto-animate -->

## After

<div data-id="box" class="glass-card">After state</div>
```

### What NOT to do
- Do not use inline `color:` styles — always use the CSS utility classes
- Do not use `fade-in` fragments — always `fade-up`
- Do not add speaker notes unless explicitly asked
- Do not create a new file — always append to the existing `slides.md`
