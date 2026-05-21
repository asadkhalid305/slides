# /pdf-export

Export a talk to PDF.

## Usage

```
/pdf-export <talk-folder-name>
```

## Steps to execute

1. Check if the dev server is running: `curl -s -o /dev/null -w "%{http_code}" http://localhost:8000/`
   - If it returns 200, proceed
   - If not, tell the user to run `npm run dev` in a separate terminal first, then re-run this command
2. Run: `npm run generate:pdf -- <talk-folder-name>`
3. Tell the user the output file location (it will be in the talk folder, e.g. `talks/<talk-folder-name>/<talk-folder-name>.pdf`)

## Notes

- The dev server **must** be running at `localhost:8000` before export — the PDF generator opens a headless browser against it
- Export captures all slides including hidden ones (`data-visibility="hidden"`) — warn the user if the talk has hidden slides
- If the export hangs or fails, the most common cause is the dev server not being ready; wait a few seconds and retry
