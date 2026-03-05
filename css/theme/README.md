## Dependencies

Themes are written using Sass to keep things modular and reduce the need for repeated selectors across files. Make sure that you have the reveal.js development environment installed before proceeding: https://revealjs.com/installation/#full-setup

## Creating a Theme

To create your own theme, duplicate any `.scss` file in `css/theme/source/` and rename it.

Then compile themes with one of these commands:

- `gulp css-themes`
- `npm run build` (builds all assets, including themes)

Each theme file does four things in the following order:

1. **Include `css/theme/template/mixins.scss`**
   Shared utility functions.

2. **Include `css/theme/template/settings.scss`**
   Declares a set of custom variables that the template file (step 4) expects. Can be overridden in step 3.

3. **Override**
   Override defaults by setting variables (see `css/theme/template/settings.scss`) or adding selectors.

4. **Include `css/theme/template/theme.scss`**
   The template theme file which will generate final CSS output based on the currently defined variables.
