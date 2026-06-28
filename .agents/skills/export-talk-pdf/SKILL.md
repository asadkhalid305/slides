---
name: export-talk-pdf
description: Export a reveal.js talk in this repository to PDF. Use when the user asks to generate, export, or build a PDF for a specific talks/<talk-folder-name> presentation.
---

# Export Talk PDF

Export a talk to PDF using the repository's PDF generation script.

## Inputs

Expected user shape:

```text
Export <talk-folder-name> to PDF
```

If the talk folder is missing or ambiguous, inspect `talks/` and ask only if it cannot be inferred.

## Workflow

1. Check whether the dev server is running:

```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:8000/
```

2. If the status is not `200`, tell the user to run `npm run dev` in a separate terminal, then retry the export after it is ready.
3. Check `talks/<talk-folder-name>/slides.md` and `hook.md` for `data-visibility="hidden"`. If hidden slides exist, warn that the export includes them.
4. Run:

```bash
npm run generate:pdf -- <talk-folder-name>
```

5. Report the output path:

```text
talks/<talk-folder-name>/<talk-folder-name>.pdf
```

## Notes

- The dev server must be available at `localhost:8000`; the generator uses a headless browser against that URL.
- If export hangs or fails and the server recently started, wait a few seconds and retry once.
- Do not run `git add` or commit.

