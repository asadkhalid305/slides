# /new-talk

Scaffold a new reveal.js talk in this repository.

## Usage

```
/new-talk <kebab-case-name> "Talk Title: Subtitle Here"
```

## What this does

1. Creates `talks/<name>/` with the standard folder structure
2. Generates `index.html` — full boilerplate with watermark, lightbox, and all plugins
3. Generates `hook.md` — title slide only
4. Generates `slides.md` — starter content slides with placeholder structure
5. Creates `talks/<name>/assets/images/` directory
6. Runs `npm run extract` to register the talk in `data/slides.json`
7. Reports the dev URL to open: `http://localhost:8000/talks/<name>/`

## Rules

- Folder name must be `kebab-case` (all lowercase, hyphens only)
- Copy the `index.html` structure exactly from `talks/beyond-vibe-coding/index.html` — do not recreate from scratch
- The watermark in `index.html` uses only the website link (no QR code) — QR goes on the Questions slide inside `slides.md`
- `hook.md` contains exactly one slide: the title using `highlight-accent` on the subtitle
- `slides.md` must include placeholder slides for: problem/context, insight, solution, building blocks, recap, and questions (with AudienceMeter QR placeholder)
- Do NOT create a `NEW_PRESENTATION.md` or any planning document
- Do NOT run `git add` or commit anything — leave that to the user

## Steps to execute

1. Read `talks/beyond-vibe-coding/index.html` to get the exact boilerplate
2. Read `talks/beyond-vibe-coding/hook.md` to understand the title slide pattern
3. Create the three files and assets directory
4. Run `npm run extract`
5. Tell the user what was created and remind them to open `http://localhost:8000/talks/<name>/` to preview
