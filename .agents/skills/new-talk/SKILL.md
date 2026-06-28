---
name: new-talk
description: Scaffold a new reveal.js talk in this repository. Use when the user asks to create a new talk, presentation, deck, or talk folder under talks/ with index.html, hook.md, slides.md, and assets/images.
---

# New Talk

Scaffold a new reveal.js talk using this repository's established talk structure.

## Inputs

Expected user shape:

```text
Create a new talk <kebab-case-name> titled "Talk Title: Subtitle"
```

If the folder name or title is missing, infer only when obvious. Otherwise ask a concise question.

## Rules

- Folder name must be kebab-case: lowercase letters, numbers, and hyphens only.
- Create:

```text
talks/<name>/
  index.html
  hook.md
  slides.md
  assets/images/
```

- Copy the `index.html` structure from `talks/beyond-vibe-coding/index.html`; do not recreate the reveal.js shell from scratch.
- Preserve the shared speaker bio reference as `../shared/intro-mbio.md`.
- The watermark in `index.html` uses only the website link. QR codes belong on the Questions slide.
- `hook.md` contains exactly one title slide.
- `slides.md` includes starter slides for problem/context, insight, solution, building blocks, recap, and questions.
- Do not create planning documents such as `NEW_PRESENTATION.md`.
- Do not run `git add` or commit.

## Workflow

1. Read `.agents/skills/talk-design-system/SKILL.md`.
2. Read `talks/beyond-vibe-coding/index.html` for the exact boilerplate.
3. Read `talks/beyond-vibe-coding/hook.md` for the title-slide pattern.
4. Create the talk directory, files, and `assets/images/` directory.
5. Run `npm run extract` so `data/slides.json` registers the new talk.
6. Report what was created and the preview URL:

```text
http://localhost:8000/talks/<name>/
```

## Starter Content

Use the repository design system:

- `hook.md`: one centered title slide, with the subtitle wrapped in `highlight-accent`.
- `slides.md`: concise placeholder slides that are useful to edit, not filler prose.
- Questions slide: include the AudienceMeter QR pattern from `talk-design-system`, using `./assets/images/qr_audiencemeter.png` as the image path placeholder.

