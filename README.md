# Slides by Asad Ullah Khalid

This repository contains presentation slides for talks given by Asad Ullah Khalid, built using [reveal.js](https://revealjs.com/) - an open source HTML presentation framework.

## About

Senior Frontend Developer at Mercedes-Benz.io, Berlin, Germany with 7+ years of experience. Frontend focused with fullstack JS/TS expertise.

Connect with me:

- 🌐 Website: [asadullahkhalid.com](https://asadullahkhalid.com)
- 💼 LinkedIn: [asadkhalid305](https://linkedin.com/in/asadkhalid305)
- 💻 GitHub: [asadullah305](https://github.com/asadullah305)
- 📅 Book a session: [Topmate](https://topmate.io/asadullahkhalid)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Serve the Project

```bash
npm run dev
```

This will start a development server at `http://localhost:3000` (or different port if specified).

### Build the Project

```bash
npm run build
```

This generates optimised production-ready assets in the `dist` directory.

### Deploy the Project

```bash
npm run deploy
```

Note: Configure your deployment settings as needed based on your hosting provider.

## Creating New Talks

Each talk lives in its own subfolder under `talks/`:

```
talks/
  shared/
    assets/          ← images, memes, etc. reused across talks
    profiles/        ← speaker profile markdown
  your-talk-name/
    index.html       ← entry point (copy from an existing talk)
    hook.md          ← title slide
    slides.md        ← main slide content
    assets/          ← talk-specific assets (optional)
```

1. Create a new folder `talks/your-talk-name/`
2. Copy `index.html` from an existing talk and update the `<title>` tag
3. Add `hook.md` and `slides.md` inside the new folder
4. Reference shared assets with `../shared/assets/...` in your markdown
5. Add entry to `data/slides.json`: `{"link": "your-talk-name/index.html", "title": "Your Talk Title"}`

---

## Reveal.js Plugins

This project uses 6 powerful plugins to enhance presentations:

### 1. 🎨 Highlight Plugin

Syntax highlighting for code blocks with line numbers.

```html
<pre><code data-line-numbers="1-3|4-6">
function example() {
  console.log("Hello");
}
</code></pre>
```

**Features:**

- Automatic syntax highlighting
- Line numbers: `data-line-numbers`
- Highlight ranges: `data-line-numbers="1,3-5"`

### 2. 📝 Markdown Plugin

Write slides in Markdown instead of HTML.

```html
<section
  data-markdown="slides.md"
  data-separator="^\n---\n$"
  data-separator-vertical="^\n--\n$"
></section>
```

**Separators:**

- `---` = New horizontal slide
- `--` = New vertical slide

### 3. 🗣️ Speaker Notes Plugin

Displays speaker notes in a separate window.

**In Markdown:**

```markdown
## Slide Title

Slide content here

Note:
These are speaker notes visible only to the presenter
```

**Usage:**

1. Start dev server: `npm run dev`
2. Open: `http://localhost:8000/talks/your-talk.html`
3. Press `S` key to open speaker notes window

**⚠️ Important:** Must access via `http://localhost:8000` (not file://)

**Features:**

- Current/next slide preview
- Timer
- Notes display

### 4. ∑ Math Plugin

Render mathematical equations using KaTeX.

**Inline math:**

```markdown
Einstein's equation: $E = mc^2$
```

**Block math:**

```markdown
$$
\frac{d}{dx}\left( \int_{0}^{x} f(u)\,du\right)=f(x)
$$
```

### 5. 🔍 Zoom Plugin

Zoom into slide elements for detail.

**Usage:**

- **Mac/Windows:** `Alt + Click` on any element
- **Linux:** `Ctrl + Click` on any element
- **Exit:** Press `ESC` or click again

**Works with:** Images, GIFs, diagrams, code blocks

**Visual feedback:**

- Zoom cursor (🔍) appears on hover
- Subtle glow effect on images
- Smooth 2x zoom animation

### 6. 🔎 Search Plugin

Search text across all slides.

**Usage:**

- **Shortcut:** `Ctrl + Shift + F` (works on Mac & Windows)
- Or click search icon (top right)
- Type search term and press Enter
- Navigate with ↑↓ arrows

**⚠️ Note:** Use `Ctrl` (not `Cmd`) on Mac to avoid browser conflicts

**Features:**

- Searches all slides
- Highlights matches
- Auto-navigation to results

---

## Plugin Installation

All plugins are already configured in this project. For new talks, include:

```html
<!-- Load plugins -->
<script src="../dist/reveal.js"></script>
<script src="../plugin/markdown/markdown.js"></script>
<script src="../plugin/highlight/highlight.js"></script>
<script src="../plugin/notes/notes.js"></script>
<script src="../plugin/math/math.js"></script>
<script src="../plugin/zoom/zoom.js"></script>
<script src="../plugin/search/search.js"></script>

<!-- Initialize -->
<script>
  Reveal.initialize({
    plugins: [
      RevealMarkdown,
      RevealHighlight,
      RevealNotes,
      RevealMath.KaTeX,
      RevealZoom,
      RevealSearch,
    ],
  });
</script>
```

---

## Quick Tips

1. **Highlight + Markdown:** Code blocks in markdown auto-highlight
2. **Notes + Markdown:** Use `Note:` keyword for speaker notes
3. **Math + Markdown:** Math syntax works in markdown slides
4. **Zoom:** Great for showing diagram/code details during talks
5. **Search:** Useful during Q&A to quickly find slides

---

## Project Structure

### CSS Organization

Stylesheets are organized in `css/` directory:

**Main Files:**

- `reveal.scss` → compiled to `dist/reveal.css` (for presentations)
- `landing.scss` → compiled to `dist/landing.css` (for landing page)

**Shared Modules:** (prefixed with `_`)

- `_variables.scss` - Global colors, theme settings
- `_animations.scss` - Keyframe animations
- `_reveal-customizations.scss` - Custom utilities, corner glow effects

**Subdirectories:**

- `print/` - Print and PDF export styles
- `talks/` - Talk-specific custom styles
- `theme/` - Reveal.js themes (black, white, etc.)

**Build CSS:**

```bash
npm run build    # Build all assets
gulp css         # Build CSS only
```

**Customize:**

- Colors/effects → Edit `css/_variables.scss`
- Utilities → Edit `css/_reveal-customizations.scss`
- Talk styles → Create file in `css/talks/`

---

## About reveal.js

reveal.js is an open source HTML presentation framework. For more information, visit [revealjs.com](https://revealjs.com/).

---

<div align="center">
  reveal.js is MIT licensed | Copyright © 2011-2022 Hakim El Hattab
</div>
