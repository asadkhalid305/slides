<!--
title: Google Antigravity Workshop: From Powerful Agents to Productive Workflows
description: Audience-facing workshop deck for the Antigravity workshop branch flow using TripLens.
date: 2026-07-08
-->

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Challenges In Working With AI Agents?</span>

<div class="pt-8" style="font-size: 0.95em;">
Agents are very <span class="emphasis-accent">powerful</span> now.
</div>

<div class="pt-12 fragment fade-up">
<blockquote class="callout callout--warning">
<span class="callout__label">BUT...</span>
Making them less unpredictable, more affordable, and more controllable for maximum productivity is a real challenge.
</blockquote>
</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Blockers To Real Productivity?</span>

<div class="pt-8 fragment fade-up" style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.9rem; font-size: 0.76em; text-align: center;">

<div class="glass-card" style="min-height: 5.4rem; display: flex; align-items: center; justify-content: center;"><span class="emphasis-danger">No guidelines</span></div>
<div class="glass-card" style="min-height: 5.4rem; display: flex; align-items: center; justify-content: center;"><span class="emphasis-warning">Costly bills</span></div>
<div class="glass-card" style="min-height: 5.4rem; display: flex; align-items: center; justify-content: center;"><span class="emphasis-info">No guardrails in place</span></div>
<div class="glass-card" style="min-height: 5.4rem; display: flex; align-items: center; justify-content: center;"><span class="emphasis-other">Code verification & review</span></div>

</div>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Today's Goal</span>

<div class="pt-8" style="font-size: 0.9em; max-width: 880px; margin: 0 auto;">
We will use <span class="emphasis-accent">Google Antigravity</span> to explore how it can help us steering the agents in right direction.
</div>

<div class="pt-10 fragment fade-up" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.8rem; font-size: 0.7em; text-align: center;">

<div class="glass-card" style="min-height: 5rem; display: flex; align-items: center; justify-content: center;"><span class="emphasis-info">Less guessing</span></div>
<div class="glass-card" style="min-height: 5rem; display: flex; align-items: center; justify-content: center;"><span class="emphasis-success">Stronger checks</span></div>
<div class="glass-card" style="min-height: 5rem; display: flex; align-items: center; justify-content: center;"><span class="emphasis-warning">Clearer scope</span></div>
<div class="glass-card" style="min-height: 5rem; display: flex; align-items: center; justify-content: center;"><span class="emphasis-accent">Repeatable workflow</span></div>

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Why Google Antigravity?</span>

<div class="pt-8" style="font-size: 0.86em; max-width: 880px; margin: 0 auto;">
It gives us a practical <span class="emphasis-accent">ecosystem</span> for working with coding agents, from quick <span class="emphasis-success">CLI</span> sessions to richer <span class="emphasis-warning">orchestration</span>.
</div>

<div class="fragment fade-up">

<div class="pt-8" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; font-size: 0.72em; text-align: center;">

<div class="glass-card" style="min-height: 6.5rem; display: flex; flex-direction: column; align-items: center; justify-content: center;"><span class="emphasis-info">IDE</span><br/><span style="opacity: 0.65; font-size: 0.84em;">Close code inspection</span></div>
<div class="glass-card" style="min-height: 6.5rem; display: flex; flex-direction: column; align-items: center; justify-content: center;"><span class="emphasis-success">CLI</span><br/><span style="opacity: 0.65; font-size: 0.84em;">Terminal-first work</span></div>
<div class="glass-card" style="min-height: 6.5rem; display: flex; flex-direction: column; align-items: center; justify-content: center;"><span class="emphasis-warning">2.0</span><br/><span style="opacity: 0.65; font-size: 0.84em;">Agents orchestration</span></div>
<div class="glass-card" style="min-height: 6.5rem; display: flex; flex-direction: column; align-items: center; justify-content: center;"><span class="emphasis-accent">SDK</span><br/><span style="opacity: 0.65; font-size: 0.84em;">Code-level control</span></div>

</div>

<div class="pt-10 italic" style="font-size: 0.64em;">
We will mostly use the CLI, and bring other tools in only when they help the exercise.
</div>

</div>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">The App & Repository</span>

<div class="pt-8" style="font-size: 0.86em; max-width: 860px; margin: 0 auto;">
<span class="emphasis-accent">antigravity-workshop</span> is the repository. <span class="emphasis-info">TripLens</span> is the app inside it.
</div>

<div class="pt-8 fragment fade-up" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.85rem; font-size: 0.68em; text-align: center;">

<div class="glass-card" style="min-height: 6.4rem; display: flex; flex-direction: column; align-items: center; justify-content: center;"><span class="emphasis-info">App</span><br/><span style="opacity: 0.65; font-size: 0.84em;">post-trip insights</span></div>
<div class="glass-card" style="min-height: 6.4rem; display: flex; flex-direction: column; align-items: center; justify-content: center;"><span class="emphasis-success">Docs</span><br/><span style="opacity: 0.65; font-size: 0.84em;">public guide</span></div>
<div class="glass-card" style="min-height: 6.4rem; display: flex; flex-direction: column; align-items: center; justify-content: center;"><span class="emphasis-warning">Branches</span><br/><span style="opacity: 0.65; font-size: 0.84em;">clean checkpoints</span></div>
<!-- <div class="glass-card" style="min-height: 6.4rem; display: flex; flex-direction: column; align-items: center; justify-content: center;"><span class="emphasis-accent">.agents</span><br/><span style="opacity: 0.65; font-size: 0.84em;">customizations</span></div> -->

</div>

<div class="pt-8 fragment fade-up" style="font-size: 0.78em;">
The app is small and simple but the problems are real enough to </br><span class="emphasis-accent">explore Google Antigravity</span>.
</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Today's Loop</span>

<div class="pt-8" style="font-size: 0.58em; display: grid; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr) auto minmax(0, 1fr) auto minmax(0, 1fr); gap: 0.42rem; align-items: center; text-align: center;">

<div class="glass-card" style="min-width: 0;"><span class="emphasis-info">Context</span></div>
<div style="opacity: 0.5;">&rarr;</div>
<div class="glass-card" style="min-width: 0;"><span class="emphasis-warning">Plan</span></div>
<div style="opacity: 0.5;">&rarr;</div>
<div class="glass-card" style="min-width: 0;"><span class="emphasis-success">Execute</span></div>
<div style="opacity: 0.5;">&rarr;</div>
<div class="glass-card" style="min-width: 0;"><span class="emphasis-accent">Inspect</span></div>

<div style="opacity: 0.5;">&uarr;</div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div style="opacity: 0.5;">&darr;</div>

<div class="glass-card" style="min-width: 0;"><span class="emphasis-accent">Repeat</span></div>
<div style="opacity: 0.5;">&larr;</div>
<div class="glass-card" style="min-width: 0;"><span class="emphasis-warning">Automate</span></div>
<div style="opacity: 0.5;">&larr;</div>
<div class="glass-card" style="min-width: 0;"><span class="emphasis-danger">Guardrails</span></div>
<div style="opacity: 0.5;">&larr;</div>
<div class="glass-card" style="min-width: 0;"><span class="emphasis-success">Verify</span></div>

</div>

<div class="pt-10" style="font-size: 0.82em; max-width: 820px; margin: 0 auto;">
The exercises use this loop to make agent work more predictable, inspectable, and repeatable.
</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Setup Time</span>

<div class="pt-8" style="font-size: 0.9em; max-width: 860px; margin: 0 auto;">
The workshop guide is the source of truth.
</div>

<div class="pt-10 fragment fade-up" style="display: flex; justify-content: center;">
<div class="glass-card" style="min-height: 7rem; width: 820px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
<span class="emphasis-info" style="font-size: 1.05em;">docs/workshop/guide.md</span>
<span style="opacity: 0.68; font-size: 0.78em; margin-top: 0.4rem;">Open this file in the repository and follow the setup section.</span>
</div>
</div>

<div class="pt-8 fragment fade-up emphasis-accent" style="font-size: 0.78em;">
Let's pause for setup, then continue together.
</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Choose How To Start The CLI</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.9rem; font-size: 0.64em; text-align: center;">

<div class="glass-card" style="min-height: 7rem; display: flex; flex-direction: column; align-items: center; justify-content: center;"><span class="emphasis-success"><code>agy</code></span><br/><span style="opacity: 0.68; font-size: 0.84em;">normal interactive session</span></div>
<div class="glass-card" style="min-height: 7rem; display: flex; flex-direction: column; align-items: center; justify-content: center;"><span class="emphasis-warning"><code>agy --sandbox</code></span><br/><span style="opacity: 0.68; font-size: 0.84em;">restrict terminal execution</span></div>
<div class="glass-card" style="grid-column: span 2; min-height: 7rem; display: flex; flex-direction: column; align-items: center; justify-content: center;"><span class="emphasis-danger"><code>agy --dangerously-skip-permissions</code></span><br/><span style="opacity: 0.68; font-size: 0.84em;">fewer permission request, higher risk</span></div>
<div class="glass-card" style="grid-column: span 2; min-height: 7rem; display: flex; flex-direction: column; align-items: center; justify-content: center;"><span class="emphasis-info"><code>agy --sandbox --dangerously-skip-permissions</code></span><br/><span style="opacity: 0.68; font-size: 0.84em;">sandbox plus auto-approval</span></div>

</div>

<div class="pt-8 fragment fade-up" style="font-size: 0.76em; max-width: 820px; margin: 0 auto;">
For this demo repository, we may use <span class="emphasis-danger">skip permissions</span> to avoid stopping on every tool prompt. In real projects, choose this mode cautiously.
</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Keep These Files Open</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; font-size: 0.68em; text-align: center;">

<div class="glass-card" style="min-height: 8rem; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1rem;"><span class="emphasis-info">docs/workshop/guide.md</span><br/><span style="opacity: 0.65; font-size: 0.84em;">setup, prompts, recovery</span></div>
<div class="glass-card" style="min-height: 8rem; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1rem;"><span class="emphasis-accent">docs/workshop/branch-flow.md</span><br/><span style="opacity: 0.65; font-size: 0.84em;">checkpoint map</span></div>
<div class="glass-card" style="min-height: 8rem; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1rem;"><span class="emphasis-warning">docs/workshop/cli-command-showcase.md</span><br/><span style="opacity: 0.65; font-size: 0.84em;">take-home commands</span></div>

</div>

<div class="pt-8 fragment fade-up" style="font-size: 0.78em;">
If setup fails, let me know or take help from your peers.
</div>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Ready To Start?</span>

<div class="pt-8 emphasis-accent" style="font-size: 0.9em; max-width: 820px; margin: 0 auto;">
Before the first exercise, make sure the guide is open and the CLI is ready.
</div>

<div class="pt-10 fragment fade-up" style="font-size: 0.82em; max-width: 780px; margin: 0 auto;">
Now we start with the <span class="emphasis-success">00-unprepared-agent</span> branch: an agent with almost <span class="emphasis-warning">no project context</span>.
</div>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Concept 00: The Unprepared Agent</span>

<div class="pt-10">
<blockquote class="callout callout--danger">
<span class="callout__label">MISSING</span>
The app exists, but the agent does not yet have enough project context.
</blockquote>
</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Exercise 00</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.9rem; font-size: 0.68em; text-align: center;">

<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-wrap: anywhere;"><span class="emphasis-info">Guide section</span><br/><span style="opacity: 0.68; font-size: 0.84em;">Exercise 00: Unprepared Agent</span></div>
<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; overflow-wrap: anywhere;"><span class="emphasis-success">Branch</span><br/><span style="opacity: 0.68; font-size: 0.84em;"><code>00-unprepared-agent</code></span></div>
<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-wrap: anywhere;"><span class="emphasis-accent">Prompt</span><br/><span style="opacity: 0.68; font-size: 0.84em;">Copy the prompt from the guide</span></div>

</div>

<!-- <div class="pt-8 fragment fade-up" style="font-size: 0.78em; max-width: 820px; margin: 0 auto;">
While it runs, watch changed files, assumptions, and whether the scope spreads.
</div> -->


--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Debrief 00</span>

<div class="pt-8" style="font-size: 0.92em; max-width: 860px; margin: 0 auto;">
Different sessions can generate different results for the same prompt. Not only UI but architecture, code, and conventions.
</div>

<div class="pt-12 fragment fade-up">
<blockquote class="callout callout--warning">
<span class="callout__label">THE POINT</span>
Without context, the agent has many different possibilities to implement the same requirement.
</blockquote>
</div>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Concept 01: Agent Context</span>

<div class="pt-10">
<blockquote class="callout callout--success">
<span class="callout__label">FIX</span>
Give the agent context in different possible ways.
</blockquote>
</div>

<div class="pt-10 fragment fade-up" style="font-size: 0.82em;">
<span class="emphasis-accent">Google Antigravity</span> provides <span class="emphasis-success">various ways</span> to construct the context.
</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Context Building Blocks</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.9rem; font-size: 0.72em; text-align: center;">

<div class="glass-card"><span class="emphasis-accent">AGENTS.md</span><br/><span style="opacity: 0.65; font-size: 0.84em;">entry point</span></div>
<div class="glass-card"><span class="emphasis-info">rules</span><br/><span style="opacity: 0.65; font-size: 0.84em;">boundaries & guardrails</span></div>
<div class="glass-card"><span class="emphasis-success">workflows</span><br/><span style="opacity: 0.65; font-size: 0.84em;">repeatable steps</span></div>
<div class="glass-card"><span class="emphasis-warning">skills</span><br/><span style="opacity: 0.65; font-size: 0.84em;">deep guidance on demand</span></div>

</div>

<div class="pt-10 fragment fade-up" style="font-size: 0.82em;">
The goal is not always bigger context, it's fewer repeated instructions and assumptions.
</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Exercise 01</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.9rem; font-size: 0.68em; text-align: center;">

<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-wrap: anywhere;"><span class="emphasis-info">Guide section</span><br/><span style="opacity: 0.68; font-size: 0.84em;">Exercise 01: Agent Context</span></div>
<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-wrap: anywhere;"><span class="emphasis-success">Branch</span><br/><span style="opacity: 0.68; font-size: 0.84em;"><code>01-agent-context</code></span></div>
<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-wrap: anywhere;"><span class="emphasis-accent">Prompts</span><br/><span style="opacity: 0.68; font-size: 0.84em;">Copy 01A, then 01B</span></div>

</div>

<!-- <div class="pt-8 fragment fade-up" style="font-size: 0.78em; max-width: 820px; margin: 0 auto;">
Compare the output with the unprepared branch and look for narrower, more convention-aware work.
</div> -->

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Debrief 01</span>

<div class="pt-8" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; font-size: 0.78em; text-align: left;">

<div class="glass-card"><span class="emphasis-success">Better default direction</span><br/><span style="opacity: 0.68; font-size: 0.86em;">The output should stay closer to the product and team conventions.</span></div>
<div class="glass-card"><span class="emphasis-danger">Context has a cost</span><br/><span style="opacity: 0.68; font-size: 0.86em;">Every instruction adds up and bloat the context window.</span></div>

</div>

<div class="pt-10 underline-success" style="font-size: 0.84em;">
Context reduces guessing. It does not make agents fully deterministic.
</div>

<div class="pt-10 underline-danger" style="font-size: 0.84em;">
Misguided context can also lead to poor quality output.
</div>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Concept 02: Plan Before Editing</span>

<div class="pt-10">
<blockquote class="callout callout--warning">
<span class="callout__label">CONTROL</span>
Planning catches wrong assumptions before files change.
</blockquote>
</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Planning First</span>

<div class="pt-8" style="font-size: 0.88em; max-width: 820px; margin: 0 auto;">
The comparison surface is incomplete on purpose.
</div>

<div class="pt-10 fragment fade-up">
<blockquote class="callout callout--info">
<span class="callout__label">BOUNDARY</span>
Ask for a small plan first, reduce the scope, then allow implementation.
</blockquote>
</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Exercise 02</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.9rem; font-size: 0.68em; text-align: center;">

<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-wrap: anywhere;"><span class="emphasis-info">Guide section</span><br/><span style="opacity: 0.68; font-size: 0.84em;">Exercise 02: Plan Before Editing</span></div>
<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-wrap: anywhere;"><span class="emphasis-success">Branch</span><br/><span style="opacity: 0.68; font-size: 0.84em;"><code>02-plan-before-editing</code></span></div>
<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-wrap: anywhere;"><span class="emphasis-accent">Prompts</span><br/><span style="opacity: 0.68; font-size: 0.84em;">Copy 02A, 02B, then 02C</span></div>

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Debrief 02</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; font-size: 0.78em; text-align: left;">

<div class="glass-card"><span class="emphasis-danger">Without planning</span><br/><span style="opacity: 0.68; font-size: 0.86em;">You discover the misunderstanding after implementation.</span></div>
<div class="glass-card"><span class="emphasis-success">With planning</span><br/><span style="opacity: 0.68; font-size: 0.86em;">You correct scope while the change is still cheap.</span></div>

</div>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Concept 03: Inspect And Verify</span>

<div class="pt-10">
<blockquote class="callout callout--info">
<span class="callout__label">EVIDENCE</span>
Trust the evidence around the work, not the confidence of the summary.
</blockquote>
</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Review Building Blocks</span>

<div class="pt-8" style="font-size: 0.86em; max-width: 820px; margin: 0 auto;">
Review is repeated behavior, so we package it as reusable agent guidance.
</div>

<div class="pt-8 fragment fade-up" style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.8rem; font-size: 0.68em; text-align: center;">

<div class="glass-card"><span class="emphasis-info">Plugin</span></div>
<div class="glass-card"><span class="emphasis-accent">Custom agent</span></div>
<div class="glass-card"><span class="emphasis-success">Review skills</span></div>
<div class="glass-card"><span class="emphasis-danger">Approval gate</span></div>

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Exercise 03</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.9rem; font-size: 0.68em; text-align: center;">

<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-wrap: anywhere;"><span class="emphasis-info">Guide section</span><br/><span style="opacity: 0.68; font-size: 0.84em;">Exercise 03: Inspect And Verify</span></div>
<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-wrap: anywhere;"><span class="emphasis-success">Branch</span><br/><span style="opacity: 0.68; font-size: 0.84em;"><code>03-inspect-and-verify</code></span></div>
<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-wrap: anywhere;"><span class="emphasis-accent">Prompt</span><br/><span style="opacity: 0.68; font-size: 0.84em;">Copy 03A from the guide</span></div>

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Debrief 03</span>

<div class="pt-8" style="font-size: 0.78em; display: grid; grid-template-columns: repeat(7, auto); gap: 0.45rem; align-items: center; justify-content: center; text-align: center;">

<div class="glass-card"><span class="emphasis-info">Plan</span></div>
<div style="opacity: 0.45;">+</div>
<div class="glass-card"><span class="emphasis-accent">Diff</span></div>
<div style="opacity: 0.45;">+</div>
<div class="glass-card"><span class="emphasis-success">Tests</span></div>
<div style="opacity: 0.45;">+</div>
<div class="glass-card"><span class="emphasis-danger">Approval</span></div>

</div>

<div class="pt-10 fragment fade-up" style="font-size: 0.84em;">
Trust comes from evidence, not from a confident agent summary.
</div>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Concept 04: External Context With MCP</span>

<div class="pt-10">
<blockquote class="callout callout--accent">
<span class="callout__label">LIMITATION</span>
The repository is not the whole world.
</blockquote>
</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">What MCP Adds</span>

<div class="pt-8" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; font-size: 0.76em; text-align: left;">

<div class="glass-card"><span class="emphasis-info">Chrome DevTools MCP</span><br/><span style="opacity: 0.68; font-size: 0.86em;">Inspect the running app, console, and network request.</span></div>
<div class="glass-card"><span class="emphasis-success">Context7 MCP</span><br/><span style="opacity: 0.68; font-size: 0.86em;">Fetch package docs when local knowledge is not enough.</span></div>

</div>

<div class="pt-10 fragment fade-up" style="font-size: 0.82em;">
MCP should answer a question the repo cannot answer alone.
</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Exercise 04</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.9rem; font-size: 0.68em; text-align: center;">

<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-wrap: anywhere;"><span class="emphasis-info">Guide section</span><br/><span style="opacity: 0.68; font-size: 0.84em;">Exercise 04: External Context And MCP</span></div>
<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-wrap: anywhere;"><span class="emphasis-success">Branch</span><br/><span style="opacity: 0.68; font-size: 0.84em;"><code>04-external-context-mcp</code></span></div>
<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-wrap: anywhere;"><span class="emphasis-accent">Prompts</span><br/><span style="opacity: 0.68; font-size: 0.84em;">Copy 04A, then 04B</span></div>

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Debrief 04</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; font-size: 0.78em; text-align: left;">

<div class="glass-card"><span class="emphasis-info">Local context</span><br/><span style="opacity: 0.68; font-size: 0.86em;">Explains intent and code structure.</span></div>
<div class="glass-card"><span class="emphasis-success">Runtime context</span><br/><span style="opacity: 0.68; font-size: 0.86em;">Shows what actually happened in the browser.</span></div>

</div>

<div class="pt-10 fragment fade-up" style="font-size: 0.84em;">
External context is useful when it changes the quality of the decision.
</div>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Concept 05: Automation And Hooks</span>

<div class="pt-10">
<blockquote class="callout callout--success">
<span class="callout__label">AUTOMATE</span>
Automate work that is repeated, bounded, boring, and easy to verify.
</blockquote>
</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Hooks Before Schedules</span>

<div class="pt-8" style="font-size: 0.84em; max-width: 840px; margin: 0 auto;">
Before we let work run later, we define what must not happen silently.
</div>

<div class="pt-8 fragment fade-up" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.9rem; font-size: 0.72em; text-align: center;">

<div class="glass-card"><span class="emphasis-danger">hook</span><br/><span style="opacity: 0.68; font-size: 0.84em;">blocks unsafe actions</span></div>
<div class="glass-card"><span class="emphasis-info">schedule</span><br/><span style="opacity: 0.68; font-size: 0.84em;">runs later</span></div>
<div class="glass-card"><span class="emphasis-success">read-only brief</span><br/><span style="opacity: 0.68; font-size: 0.84em;">safe automation</span></div>

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Exercise 05</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.9rem; font-size: 0.68em; text-align: center;">

<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-wrap: anywhere;"><span class="emphasis-info">Guide section</span><br/><span style="opacity: 0.68; font-size: 0.84em;">Exercise 05: Automation And Hooks</span></div>
<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-wrap: anywhere;"><span class="emphasis-success">Branch</span><br/><span style="opacity: 0.68; font-size: 0.84em;"><code>05-automation-and-hooks</code></span></div>
<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-wrap: anywhere;"><span class="emphasis-accent">Prompts</span><br/><span style="opacity: 0.68; font-size: 0.84em;">Copy 05A, then 05B</span></div>

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Debrief 05</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.9rem; font-size: 0.72em; text-align: center;">

<div class="glass-card"><span class="emphasis-info">Scheduling controls when</span></div>
<div class="glass-card"><span class="emphasis-danger">Hooks control what not</span></div>
<div class="glass-card"><span class="emphasis-success">Verification controls trust</span></div>

</div>

<div class="pt-10 fragment fade-up" style="font-size: 0.84em;">
Do not automate chaos. Stabilize the loop first.
</div>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Concept 06: Command Showcase</span>

<div class="pt-10">
<blockquote class="callout callout--info">
<span class="callout__label">COMMANDS</span>
Commands are shortcuts for moments where you need control, clarity, or recovery.
</blockquote>
</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Exercise 06</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.9rem; font-size: 0.68em; text-align: center;">

<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-wrap: anywhere;"><span class="emphasis-info">Guide section</span><br/><span style="opacity: 0.68; font-size: 0.84em;">Exercise 06: Command Showcase</span></div>
<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-wrap: anywhere;"><span class="emphasis-success">Branch</span><br/><span style="opacity: 0.68; font-size: 0.84em;"><code>06-command-showcase</code></span></div>
<div class="glass-card" style="min-height: 7rem; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-wrap: anywhere;"><span class="emphasis-accent">Prompts</span><br/><span style="opacity: 0.68; font-size: 0.84em;">Copy prompts from the guide section</span></div>

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Command Building Blocks</span>

<div class="pt-8 fragment fade-up" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.7rem; font-size: 0.62em; text-align: center;">

<div class="glass-card"><span class="emphasis-accent"><code>/grill-me</code></span><br/><span style="opacity: 0.65; font-size: 0.84em;">clarify fuzzy work</span></div>
<div class="glass-card"><span class="emphasis-info"><code>/goal</code></span><br/><span style="opacity: 0.65; font-size: 0.84em;">bounded completion</span></div>
<div class="glass-card"><span class="emphasis-success"><code>/tasks</code></span><br/><span style="opacity: 0.65; font-size: 0.84em;">active work</span></div>
<div class="glass-card"><span class="emphasis-warning"><code>/agents</code></span><br/><span style="opacity: 0.65; font-size: 0.84em;">active subagents</span></div>
<div class="glass-card"><span class="emphasis-accent"><code>/diff</code></span><br/><span style="opacity: 0.65; font-size: 0.84em;">inspect changes</span></div>
<div class="glass-card"><span class="emphasis-info"><code>/learn</code></span><br/><span style="opacity: 0.65; font-size: 0.84em;">durable corrections</span></div>
<div class="glass-card"><span class="emphasis-success"><code>/fork</code></span><br/><span style="opacity: 0.65; font-size: 0.84em;">alternate path</span></div>
<div class="glass-card"><span class="emphasis-warning"><code>/rewind</code></span><br/><span style="opacity: 0.65; font-size: 0.84em;">recover control</span></div>

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">When Commands Help</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.8rem; font-size: 0.68em; text-align: center;">

<div class="glass-card"><span class="emphasis-info">clarify</span><br/><span style="opacity: 0.65; font-size: 0.84em;">when the task is fuzzy</span></div>
<div class="glass-card"><span class="emphasis-success">bound</span><br/><span style="opacity: 0.65; font-size: 0.84em;">when the work needs a finish line</span></div>
<div class="glass-card"><span class="emphasis-accent">inspect</span><br/><span style="opacity: 0.65; font-size: 0.84em;">when the output needs evidence</span></div>
<div class="glass-card"><span class="emphasis-warning">recover</span><br/><span style="opacity: 0.65; font-size: 0.84em;">when the session drifts</span></div>

</div>

<div class="pt-10 fragment fade-up" style="font-size: 0.78em; max-width: 780px; margin: 0 auto;">
The useful command is the one that changes the next decision.
</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Debrief 06</span>

<div class="pt-8" style="font-size: 0.9em; max-width: 820px; margin: 0 auto;">
Agentic development is not just sending prompts.
</div>

<div class="pt-10 fragment fade-up">
<blockquote class="callout callout--accent">
<span class="callout__label">CONTROL SURFACES</span>
Choose how to start, inspect, continue, branch, recover, and automate work.
</blockquote>
</div>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">What We Did Today</span>

<div class="pt-8" style="font-size: 0.88em; max-width: 820px; margin: 0 auto;">
We used each branch to add one more control surface around the agent.
</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Recap: 00 - 03</span>

<div class="pt-7 text-start" style="font-size: 0.7em; max-width: 900px; margin: 0 auto;">

<div class="glass-card" style="margin-bottom: 0.65rem;"><span class="emphasis-danger"><code>00-unprepared-agent</code></span><br/><span style="opacity: 0.7;">Observed what happens without shared project context.</span></div>
<div class="glass-card" style="margin-bottom: 0.65rem;"><span class="emphasis-info"><code>01-agent-context</code></span><br/><span style="opacity: 0.7;">Added <span class="emphasis-accent">rules</span>, <span class="emphasis-success">workflows</span>, and <span class="emphasis-warning">skills</span>.</span></div>
<div class="glass-card" style="margin-bottom: 0.65rem;"><span class="emphasis-warning"><code>02-plan-before-editing</code></span><br/><span style="opacity: 0.7;">Used planning to catch wrong assumptions before implementation.</span></div>
<div class="glass-card"><span class="emphasis-accent"><code>03-inspect-and-verify</code></span><br/><span style="opacity: 0.7;">Introduced a <span class="emphasis-info">plugin</span>, <span class="emphasis-accent">custom agent</span>, review skills, and an approval gate.</span></div>

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Recap: 04 - 06</span>

<div class="pt-7 text-start" style="font-size: 0.7em; max-width: 900px; margin: 0 auto;">

<div class="glass-card" style="margin-bottom: 0.65rem;"><span class="emphasis-success"><code>04-external-context-mcp</code></span><br/><span style="opacity: 0.7;">Used MCP to bring in runtime evidence and external documentation.</span></div>
<div class="glass-card" style="margin-bottom: 0.65rem;"><span class="emphasis-danger"><code>05-automation-and-hooks</code></span><br/><span style="opacity: 0.7;">Added <span class="emphasis-danger">hooks</span>, <span class="emphasis-info">scheduling</span>, and safe read-only automation.</span></div>
<div class="glass-card"><span class="emphasis-accent"><code>06-command-showcase</code></span><br/><span style="opacity: 0.7;">Used commands for clarity, boundaries, inspection, and recovery.</span></div>

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">The Loop We Practiced</span>

<div class="pt-8" style="font-size: 0.58em; display: grid; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr) auto minmax(0, 1fr) auto minmax(0, 1fr); gap: 0.42rem; align-items: center; text-align: center;">

<div class="glass-card" style="min-width: 0;"><span class="emphasis-info">Context</span></div>
<div style="opacity: 0.5;">&rarr;</div>
<div class="glass-card" style="min-width: 0;"><span class="emphasis-warning">Plan</span></div>
<div style="opacity: 0.5;">&rarr;</div>
<div class="glass-card" style="min-width: 0;"><span class="emphasis-success">Execute</span></div>
<div style="opacity: 0.5;">&rarr;</div>
<div class="glass-card" style="min-width: 0;"><span class="emphasis-accent">Inspect</span></div>

<div style="opacity: 0.5;">&uarr;</div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div style="opacity: 0.5;">&darr;</div>

<div class="glass-card" style="min-width: 0;"><span class="emphasis-accent">Repeat</span></div>
<div style="opacity: 0.5;">&larr;</div>
<div class="glass-card" style="min-width: 0;"><span class="emphasis-warning">Automate</span></div>
<div style="opacity: 0.5;">&larr;</div>
<div class="glass-card" style="min-width: 0;"><span class="emphasis-danger">Guardrails</span></div>
<div style="opacity: 0.5;">&larr;</div>
<div class="glass-card" style="min-width: 0;"><span class="emphasis-success">Verify</span></div>

</div>

<div class="pt-10 fragment fade-up" style="font-size: 0.84em; max-width: 760px; margin: 0 auto;">
The same loop becomes easier to trust when the ecosystem around the agent is designed well.
</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Final Message</span>

<div class="pt-8" style="font-size: 0.94em; max-width: 850px; margin: 0 auto;">
Better agent results rarely come from the model alone.
</div>

<div class="pt-12 fragment fade-up">
<blockquote class="callout callout--success">
<span class="callout__label">THE POINT</span>
They come from the ecosystem around the agent: context, tools, guardrails, feedback, and verification.
</blockquote>
</div>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Questions?</span>

<div class="pt-10" style="text-align: center;">

<img src="./assets/images/qr_audiencemeter.png" alt="Feedback QR code" style="width: 200px; height: 200px; border-radius: 12px;" />
<div style="margin-top: 0.6rem; font-size: 0.7em; opacity: 0.6; letter-spacing: 0.08em;">SCAN FOR FEEDBACK & LINKS</div>

</div>
