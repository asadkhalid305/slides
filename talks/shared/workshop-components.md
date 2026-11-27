# Workshop components

These opt-in layouts are compiled from `css/_workshop-components.scss` through
`css/customizations.scss`. Existing talks do not need to change.

For the dark field-notes appearance, add `class="field-notebook"` to the deck’s
`body`. Its typography, background, glow suppression and accessible focus styles
are scoped to that class. Layout classes can also be used with another theme;
these layouts assume a dark background.

## Observation and session panels

```html
<div class="lab-observation"><p>What loaded? What ran? What evidence remains?</p></div>
<div class="lab-grid lab-grid--three">
  <div class="lab-panel">
    <p class="lab-number">01</p>
    <h3>Follow along · ≈90 min</h3>
    <p>Watch, try, and ask questions.</p>
  </div>
  <!-- Add two more panels; omit lab-grid--three for two columns. -->
</div>
```

## Annotated code

```html
<div class="lab-annotation">
  <pre><code class="language-yaml">name: example</code></pre>
  <ol class="lab-legend">
    <li class="text-accent"><strong>01 / Metadata</strong><p>Identify the procedure.</p></li>
  </ol>
</div>
```

Keep code short, use the existing highlight plugin, and label omissions. Use
`lab-code-group` plus a semantic text class to match numbered code excerpts to
the legend. Use labels as well as color.

## Navigation and practice

```html
<!-- .slide: id="concept-map" -->
<div class="lab-grid lab-map">
  <a href="#/skills"><strong>Skills</strong><span>Reusable procedures</span></a>
</div>
<a class="lab-return" href="#/concept-map">↗ Concept map</a>
<ol class="lab-steps">
  <li>Choose a recurring task.</li>
  <li>Test, inspect, and revise.</li>
</ol>
```

Give target slides stable IDs using Reveal markdown directives. Enable `hash`
in Reveal configuration. Use `--` for optional vertical detail, keeping the
primary explanation at the top of each stack. Use visible instructions without
fragments. `lab-flow` provides a simple flex row of paragraph nodes and arrows;
`lab-table` provides compact comparisons. Avoid more than three flow nodes or
six table rows at the workshop’s 1200 × 760 canvas size.

See `talks/ai-workflows-workshop/` for the complete example. Keep new event
content, private source locations, and demo caveats in that deck’s own notes.
