# CSS Directory Structure

> **Note:** For general usage, see main [../README.md](../README.md). This file contains technical details for CSS development.

## File Organization

```
css/
├── reveal.scss                    # Main presentation styles
├── landing.scss                   # Landing page styles
├── _variables.scss                # Colors, theme settings
├── _animations.scss               # Keyframe animations
├── _reveal-customizations.scss    # Utilities, corner glow
├── customizations.scss            # Imports shared modules
├── layout.scss                    # Layout helpers
├── print/                         # Print & PDF styles
├── talks/                         # Talk-specific styles
└── theme/                         # Reveal.js themes
```

## Compilation

**Gulp tasks:**

- `css-core` - Compiles `reveal.scss` → `dist/reveal.css`
- `css-landing` - Compiles `landing.scss` → `dist/landing.css`
- `css-themes` - Compiles theme files → `dist/theme/*.css`
- `css` - Runs all CSS tasks in parallel (`css-themes`, `css-core`, `css-landing`)

**Module imports:**

- Files prefixed with `_` are Sass partials (not compiled directly)
- Imported by main files using `@import` or `@use`

**Common commands:**

- `npm run build` - Runs full build (including CSS)
- `gulp css` - Rebuild CSS only
- `npm run dev` - Start watch mode + livereload for CSS and talks

## Making Changes

**To change colors/glow:** Edit `_variables.scss`  
**To add utilities:** Edit `_reveal-customizations.scss`  
**For talk styles:** Create file in `talks/` and import in `reveal.scss`  
**For landing page:** Edit `landing.scss`
