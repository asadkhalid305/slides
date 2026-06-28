---
name: add-talk-slide
description: Add a new slide to an existing talk in this repository. Use when the user asks to add, append, or insert one or more slides into talks/*/slides.md, including slide intents such as comparisons, callouts, icon flows, card grids, or auto-animate pairs.
---

# Add Talk Slide

Add a slide to an existing talk's `slides.md` while following this repository's design system.

## Inputs

Expected user shape:

```text
Add a slide to <talk-folder-name>: <slide intent>
```

If the talk folder is missing or ambiguous, inspect `talks/` and ask only if it cannot be inferred.

## Workflow

1. Read `talks/<talk-folder-name>/slides.md` to understand the existing narrative, formatting, and best insertion point.
2. Read `.agents/skills/talk-design-system/SKILL.md` before writing slide content.
3. Insert the new slide at the user-specified position. If no position is specified, append it to `slides.md`.
4. Use `---` as the horizontal slide separator unless the user explicitly asks for a vertical slide.
5. Do not run `npm run extract`, `git add`, or commit.

## Slide Rules

- Use the established slide anatomy:

```markdown
---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Slide Title</span>

<div class="pt-8">
  Content here
</div>
```

- Never invent color classes or use inline `color:` styles.
- Always use `class="fragment fade-up"` for fragments.
- Use `data-fragment-index` when reveal order matters.
- Do not add speaker notes unless explicitly requested.
- Keep slide copy concise and presentation-ready.

## Preferred Patterns

Use the patterns from `talk-design-system` for:

- Bullet lists with fragments
- Two-column comparisons
- Icon step flows
- Callout blockquotes
- Glass card grids
- Auto-animate input/output pairs

