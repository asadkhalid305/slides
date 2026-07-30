<!--
title: A Workshop for Unlocking Developer Productivity with Antigravity CLI
description: GDG Berlin × WeAreDevelopers World Congress 2026
date: 2026-07-08
audience: public
-->

<!-- .slide: class="center-slide" -->

### <span class="underline-accent">Live Feedback & Resources</span>

<div class="pt-8">

<img src="assets/images/qr_audiencemeter.png" alt="QR Code for Live Feedback" style="width: min(320px, 42vw); height: auto;" />

</div>

<aside class="notes">

- Ask people to scan the QR code while they settle in.
- Mention that feedback and links will be available again at the end.

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Challenges In Working With AI Agents?</span>

<div class="pt-8 fragment fade-up" style="font-size: 0.95em;">
Agents are very <span class="emphasis-accent">powerful</span> now.
</div>

<div class="pt-12 fragment fade-up">
<blockquote class="callout callout--warning">
<span class="callout__label">BUT...</span>
Making them less unpredictable, more affordable, and more controllable for maximum productivity is a real challenge.
</blockquote>
</div>

<aside class="notes">

- Open with the real problem: agents are capable, but capability alone is not productivity.
- Say the workshop is about making agent work predictable, controllable, and worth the cost.

</aside>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Blockers To Real Productivity?</span>

<div class="pt-8 fragment fade-up" style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.9rem; font-size: 0.76em; text-align: center;">

<div class="glass-card" style="min-height: 5.4rem; display: flex; align-items: center; justify-content: center;"><span class="emphasis-danger">No guidelines</span></div>
<div class="glass-card" style="min-height: 5.4rem; display: flex; align-items: center; justify-content: center;"><span class="emphasis-warning">Costly bills</span></div>
<div class="glass-card" style="min-height: 5.4rem; display: flex; align-items: center; justify-content: center;"><span class="emphasis-info">No guardrails in place</span></div>
<div class="glass-card" style="min-height: 5.4rem; display: flex; align-items: center; justify-content: center;"><span class="emphasis-other">Code verification & review</span></div>

</div>

<aside class="notes">

- Name the blockers as practical workshop themes: missing guidance, runaway cost, weak guardrails, and unverified output.
- Ask for quick nods/examples from the room; keep it short and move on.
- Time check: should be at 4 minutes by the end of this slide.

</aside>

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

<aside class="notes">

- State the workshop goal: learn how to steer agents using context, checks, scope, and repeatable workflow.
- Emphasize that TripLens is the teaching surface, not the product we are trying to ship today.

</aside>

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

<aside class="notes">

- Position Antigravity as an ecosystem: CLI for today, IDE/2.0/SDK as adjacent surfaces.
- Say we stay CLI-first unless another surface clearly helps the exercise.
- Time check: should be at 8 minutes by the end of this slide.

</aside>

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

<aside class="notes">

- Explain the repository/app split: antigravity-workshop is the repo; TripLens is the small post-trip insights app.
- Tell participants the app is intentionally simple so agent behavior is easier to inspect.
- Prepare to switch to the repo or browser after this section.

</aside>

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

<aside class="notes">

- Introduce the loop as the backbone of the workshop: Context, Plan, Execute, Inspect, Verify, Guardrails, Automate, Repeat.
- Connect each branch to one extra control surface in that loop.

</aside>

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

<aside class="notes">

- Have everyone open `docs/workshop/guide.md`.
- Point them to setup, participation modes, branch map, and recovery commands.
- Pause here for install/clone/dev-server setup; observers can continue without local setup.

</aside>

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

<aside class="notes">

- Explain the CLI start options and the tradeoff between convenience and safety.
- For the workshop, use the mode you prepared for the room.
- Make clear that dangerous auto-approval is a controlled demo choice, not a default recommendation.

</aside>

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

<aside class="notes">

- Ask participants to keep the guide open for prompts and recovery.
- Mention `branch-flow.md` is for checkpoint orientation and `cli-command-showcase.md` is mostly take-home reference.
- If someone is blocked, move them to observer mode rather than slowing the whole room.
- Time check: should be at 14 minutes by the end of this slide.

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Ready To Start?</span>

<div class="pt-8 emphasis-accent" style="font-size: 0.9em; max-width: 820px; margin: 0 auto;">
Before the first exercise, make sure the guide is open and the CLI is ready.
</div>

<div class="pt-10 fragment fade-up" style="font-size: 0.82em; max-width: 780px; margin: 0 auto;">
Now we start with the <span class="emphasis-success">00-unprepared-agent</span> branch: an agent with almost <span class="emphasis-warning">no project context</span>.
</div>

<aside class="notes">

- Confirm everyone has the guide open and knows whether they are active or observing.
- Tell drivers to be ready to switch to `00-unprepared-agent`.
- Set expectation: outputs will differ across groups, and that is part of the lesson.
- Time check: should be at 15 minutes by the end of this slide. If later than 18 minutes, make exercise 00 facilitator-led and shorten group comparison.

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Concept 00: The Unprepared Agent</span>

<div class="pt-10">
<blockquote class="callout callout--danger">
<span class="callout__label">MISSING</span>
The app exists, but the agent does not yet have enough project context.
</blockquote>
</div>

<aside class="notes">

- Explain that branch 00 is the baseline: broad task, minimal project-specific AI guidance.
- Say the goal is not to produce the best feature; it is to see how much the agent guesses.

</aside>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Exercise 00</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.9rem; font-size: 0.68em; text-align: center;">

<div class="glass-card exercise-guide-card"><span class="emphasis-info">Guide section</span><span class="exercise-guide-card__body">Exercise 00: Unprepared Agent</span></div>
<div class="glass-card exercise-guide-card"><span class="emphasis-success">Branch</span><span class="exercise-guide-card__body"><code>00-unprepared-agent</code></span></div>
<div class="glass-card exercise-guide-card"><span class="emphasis-accent">Prompt</span><span class="exercise-guide-card__body">Copy the prompt from the guide</span></div>

</div>

<!-- <div class="pt-8 fragment fade-up" style="font-size: 0.78em; max-width: 820px; margin: 0 auto;">
While it runs, watch changed files, assumptions, and whether the scope spreads.
</div> -->

<aside class="notes">

- Use guide section `Exercise 00: Unprepared Agent`.
- Tell participants to switch to `00-unprepared-agent`, glance at the app, then run the guide prompt.
- While it runs, watch scope, dependencies, changed files, and whether it stays inside the post-trip insight boundary.
- Debrief by comparing how different group outputs are.

</aside>

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

<aside class="notes">

- Ask groups what changed: UI, data model, copy, forms, dependencies, or architecture.
- Highlight that impressive output can still be unaligned output.
- Transition: next branch shows what shared context changes.
- Time check: should be at 25 minutes by the end of this slide.

</aside>

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

<aside class="notes">

- Explain that context is a steering mechanism, not a magic correctness switch.
- Set up the repo walkthrough of `AGENTS.md` and `.agents`.

</aside>

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

<aside class="notes">

- Walk through the hierarchy: `AGENTS.md` routes, rules set boundaries, workflows define repeatable steps, skills hold deeper task guidance.
- Emphasize progressive disclosure: keep the always-on layer small.

</aside>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Exercise 01</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.9rem; font-size: 0.68em; text-align: center;">

<div class="glass-card exercise-guide-card"><span class="emphasis-info">Guide section</span><span class="exercise-guide-card__body">Exercise 01: Agent Context</span></div>
<div class="glass-card exercise-guide-card"><span class="emphasis-success">Branch</span><span class="exercise-guide-card__body"><code>01-agent-context</code></span></div>
<div class="glass-card exercise-guide-card"><span class="emphasis-accent">Prompt</span><span class="exercise-guide-card__body">Copy the prompt from the guide</span></div>

</div>

<!-- <div class="pt-8 fragment fade-up" style="font-size: 0.78em; max-width: 820px; margin: 0 auto;">
Compare the output with the unprepared branch and look for narrower, more convention-aware work.
</div> -->

<aside class="notes">

- Use guide section `Exercise 01: Agent Context`.
- Show `AGENTS.md`, `.agents/rules`, `.agents/workflows`, and `.agents/skills` before running the prompt.
- Have participants compare the result with branch 00: smaller scope, product boundary, UI conventions, and verification behavior.

</aside>

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

<aside class="notes">

- Stress the balanced lesson: context reduces guessing but costs tokens and can encode bad guidance.
- Ask which files felt useful and which would be too much in a normal small app.
- Time check: should be at 38 minutes by the end of this slide. If later than 42 minutes, skip attendee implementation in exercise 02 and use plan-only.

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Concept 02: Plan Before Editing</span>

<div class="pt-10">
<blockquote class="callout callout--warning">
<span class="callout__label">CONTROL</span>
Planning catches wrong assumptions before files change.
</blockquote>
</div>

<aside class="notes">

- Frame planning as the first strong control surface before edits happen.
- Tell participants the next branch has a deliberately bounded comparison gap.

</aside>

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

<aside class="notes">

- Show the incomplete comparison surface in the app if useful.
- Tell participants to ask for a plan only first, then make it smaller, then approve implementation.

</aside>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Exercise 02</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.9rem; font-size: 0.68em; text-align: center;">

<div class="glass-card exercise-guide-card"><span class="emphasis-info">Guide section</span><span class="exercise-guide-card__body">Exercise 02: Plan Before Editing</span></div>
<div class="glass-card exercise-guide-card"><span class="emphasis-success">Branch</span><span class="exercise-guide-card__body"><code>02-plan-before-editing</code></span></div>
<div class="glass-card exercise-guide-card"><span class="emphasis-accent">Prompts</span><span class="exercise-guide-card__body">Copy 02A, 02B, then 02C</span></div>

</div>

<aside class="notes">

- Use guide section `Exercise 02: Plan Before Editing`.
- Run 02A as plan-only; do not approve file edits yet.
- Run 02B to force smaller scope and explicit verification.
- Only then run 02C if time allows implementation.

</aside>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Debrief 02</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; font-size: 0.78em; text-align: left;">

<div class="glass-card"><span class="emphasis-danger">Without planning</span><br/><span style="opacity: 0.68; font-size: 0.86em;">You discover the misunderstanding after implementation.</span></div>
<div class="glass-card"><span class="emphasis-success">With planning</span><br/><span style="opacity: 0.68; font-size: 0.86em;">You correct scope while the change is still cheap.</span></div>

</div>

<aside class="notes">

- Ask what the plan step prevented: wrong scope, missed helper functions, UI overbuild, weak verification.
- Reinforce that plans are cheap to correct; diffs are more expensive.
- Time check: should be at 52 minutes by the end of this slide.

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Concept 03: Inspect And Verify</span>

<div class="pt-10">
<blockquote class="callout callout--info">
<span class="callout__label">EVIDENCE</span>
Trust the evidence around the work, not the confidence of the summary.
</blockquote>
</div>

<aside class="notes">

- Frame this section around evidence: summaries are not enough.
- The goal is to inspect agent output with a reusable review workflow and focused verification.

</aside>

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

<aside class="notes">

- Explain why review guidance is packaged as a plugin here: repeated behavior should become reusable.
- Show the plugin folder on branch `03-inspect-and-verify` when moving into the exercise.
- Mention the approval gate: draft comments first, post only after approval.

</aside>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Exercise 03</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.9rem; font-size: 0.68em; text-align: center;">

<div class="glass-card exercise-guide-card"><span class="emphasis-info">Guide section</span><span class="exercise-guide-card__body">Exercise 03: Inspect And Verify</span></div>
<div class="glass-card exercise-guide-card"><span class="emphasis-success">Branch</span><span class="exercise-guide-card__body"><code>03-inspect-and-verify</code></span></div>
<div class="glass-card exercise-guide-card"><span class="emphasis-accent">Prompt</span><span class="exercise-guide-card__body">Copy 03A from the guide</span></div>

</div>

<aside class="notes">

- Use guide section `Exercise 03: Inspect And Verify`.
- Switch to `03-inspect-and-verify`; inspect or validate `.agents/plugins/triplens-pr-review`.
- Run the PR review prompt against PR #1.
- Look for the prepared daily-cost regression and whether the agent asks before posting comments.

</aside>

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

<aside class="notes">

- Debrief the evidence chain: plan, diff, tests, approval.
- If time allows, run or point to `npm run test` as the focused verification signal.
- Ask which review criteria should be encoded for their own projects.
- Time check: should be at 64 minutes by the end of this slide. If later than 68 minutes, skip hands-on work in exercise 04 and run it as a facilitator demo.

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Concept 04: External Context With MCP</span>

<div class="pt-10">
<blockquote class="callout callout--accent">
<span class="callout__label">LIMITATION</span>
The repository is not the whole world.
</blockquote>
</div>

<aside class="notes">

- Explain that repository files only show intent; runtime evidence shows what actually happened.
- Introduce MCP as the bridge to browser state and external docs.

</aside>

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

<aside class="notes">

- Keep the emphasis on Chrome DevTools MCP for this workshop.
- Mention Context7 as optional/current-docs support, not the main demo.
- Prepare to inspect the running app, console, and network request.

</aside>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Exercise 04</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.9rem; font-size: 0.68em; text-align: center;">

<div class="glass-card exercise-guide-card"><span class="emphasis-info">Guide section</span><span class="exercise-guide-card__body">Exercise 04: External Context And MCP</span></div>
<div class="glass-card exercise-guide-card"><span class="emphasis-success">Branch</span><span class="exercise-guide-card__body"><code>04-external-context-mcp</code></span></div>
<div class="glass-card exercise-guide-card"><span class="emphasis-accent">Prompts</span><span class="exercise-guide-card__body">Copy 04A, then 04B</span></div>

</div>

<aside class="notes">

- Use guide section `Exercise 04: External Context And MCP`.
- Switch to `04-external-context-mcp` and start the app if needed.
- Run 04A for no-edit browser/runtime inspection.
- Run 04B and require method, URL, status, payload, response body, console message, and visible UI state.
- Only discuss the smallest fix after evidence is collected.

</aside>

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

<aside class="notes">

- Debrief the mismatch: `POST /api/insights/compare`, 400, payload uses `compareWithTripId`, API expects `compareTripId`.
- Make the lesson explicit: local code plus runtime evidence beats guessing from files alone.
- Time check: should be at 78 minutes by the end of this slide.

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Concept 05: Automation And Hooks</span>

<div class="pt-10">
<blockquote class="callout callout--success">
<span class="callout__label">AUTOMATE</span>
Automate work that is repeated, bounded, boring, and easy to verify.
</blockquote>
</div>

<aside class="notes">

- Introduce automation as something that comes after a workflow is stable.
- Use the guide language: repeated, bounded, boring, and easy to verify.

</aside>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Hooks Before Schedules</span>

<div class="pt-8" style="font-size: 0.84em; max-width: 840px; margin: 0 auto;">
Before we let work run later, we define what must not happen silently.
</div>

<div class="pt-8 fragment fade-up" style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.9rem; font-size: 0.72em; text-align: center;">

<div class="glass-card"><span class="emphasis-danger">hook</span><br/><span style="opacity: 0.68; font-size: 0.84em;">blocks unsafe actions</span></div>
<div class="glass-card"><span class="emphasis-info">schedule</span><br/><span style="opacity: 0.68; font-size: 0.84em;">runs later</span></div>

</div>

<aside class="notes">

- Explain the order: hooks define what must not happen silently before schedules run later.
- Make this a safety story, not just a convenience story.

</aside>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Exercise 05</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.9rem; font-size: 0.68em; text-align: center;">

<div class="glass-card exercise-guide-card"><span class="emphasis-info">Guide section</span><span class="exercise-guide-card__body">Exercise 05: Automation And Hooks</span></div>
<div class="glass-card exercise-guide-card"><span class="emphasis-success">Branch</span><span class="exercise-guide-card__body"><code>05-automation-and-hooks</code></span></div>
<div class="glass-card exercise-guide-card"><span class="emphasis-accent">Prompts</span><span class="exercise-guide-card__body">Copy 05A, then 05B</span></div>

</div>

<aside class="notes">

- Use guide section `Exercise 05: Automation And Hooks`.
- Switch to `05-automation-and-hooks`.
- Run 05A and observe the hook blocking the mutating GitHub command.
- Run 05B to schedule a read-only PR brief.
- If facilitating, create fresh PR activity from a normal terminal with `npm run demo:scheduled-pr`; do not ask the agent to run it.

</aside>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Debrief 05</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.9rem; font-size: 0.72em; text-align: center;">

<div class="glass-card"><span class="emphasis-info">Scheduling controls when</span></div>
<div class="glass-card"><span class="emphasis-danger">Hooks control what not</span></div>
<div class="glass-card"><span class="emphasis-success">Verification controls trust</span></div>

</div>

<div class="pt-10 fragment fade-up" style="font-size: 0.84em;">
Do not automate unstable loops. Stabilize them first.
</div>

<aside class="notes">

- Ask whether the hook blocked the write and whether the scheduled brief stayed read-only.
- Reinforce: scheduling controls when; hooks control what must not happen; verification controls trust.
- Time check: should be at 88 minutes by the end of this slide. Stop teaching new core material here and protect Q&A time.

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Concept 06: Command Showcase</span>

<div class="pt-10">
<blockquote class="callout callout--info">
<span class="callout__label">COMMANDS</span>
Commands are shortcuts for moments where you need control, clarity, or recovery.
</blockquote>
</div>

<aside class="notes">

- Position commands as control surfaces for longer agentic work.
- This section is optional if time is tight; prioritize only the highest-value commands.

</aside>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Useful Commands</span>

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

<aside class="notes">

- Prioritize `/grill-me`, `/learn`, `/goal`, `/tasks`, and `/agents`.
- Mention `/diff`, `/fork`, `/rewind`, `/usage`, `/credits`, settings, permissions, shortcuts, and launch flags as take-home exploration.
- Remind yourself to confirm exact command names in `/help` because CLI availability can change.

</aside>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Exercise 06</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.9rem; font-size: 0.68em; text-align: center;">

<div class="glass-card exercise-guide-card"><span class="emphasis-info">Guide section</span><span class="exercise-guide-card__body">Exercise 06: Command Showcase</span></div>
<div class="glass-card exercise-guide-card"><span class="emphasis-success">Branch</span><span class="exercise-guide-card__body"><code>06-command-showcase</code></span></div>
<div class="glass-card exercise-guide-card"><span class="emphasis-accent">Prompts</span><span class="exercise-guide-card__body">Copy prompts from the guide section</span></div>

</div>

<aside class="notes">

- Use guide section `Exercise 06: Command Showcase`.
- Switch to `06-command-showcase`.
- Run only the prompts that fit the remaining time: 06A for CLI discovery, 06B for `/grill-me`, 06C for `/learn`, 06D for `/goal`, then inspect `/tasks`.
- Keep this as command awareness, not another product-building exercise.

</aside>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Debrief 06</span>

<div class="pt-8 emphasis-accent" style="font-size: 0.9em; max-width: 820px; margin: 0 auto;">
Productivity can highly be increased, if you know how to use your tools.
</div>

<aside class="notes">

- Debrief that productivity comes from knowing when to clarify, bound, inspect, recover, and automate.
- Keep the phrasing practical: commands matter when they change the next decision.
- Time check: optional section. Only be here before 92 minutes; otherwise skip directly to wrap-up and leave this branch as take-home.

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">What We Did Today</span>

<div class="pt-8" style="font-size: 0.88em; max-width: 820px; margin: 0 auto;">
We used each branch to add one more control surface around the agent.
</div>

<aside class="notes">

- Start the wrap-up by mapping the branches back to the workshop loop.
- Keep this quick; the next two recap slides hold the details.

</aside>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Recap: 00 - 03</span>

<div class="pt-7 text-start" style="font-size: 0.7em; max-width: 900px; margin: 0 auto;">

<div class="glass-card" style="margin-bottom: 0.65rem;"><span class="emphasis-danger"><code>00-unprepared-agent</code></span><br/><span style="opacity: 0.7;">Observed what happens without shared project context.</span></div>
<div class="glass-card" style="margin-bottom: 0.65rem;"><span class="emphasis-info"><code>01-agent-context</code></span><br/><span style="opacity: 0.7;">Added <span class="emphasis-accent">rules</span>, <span class="emphasis-success">workflows</span>, and <span class="emphasis-warning">skills</span>.</span></div>
<div class="glass-card" style="margin-bottom: 0.65rem;"><span class="emphasis-warning"><code>02-plan-before-editing</code></span><br/><span style="opacity: 0.7;">Used planning to catch wrong assumptions before implementation.</span></div>
<div class="glass-card"><span class="emphasis-accent"><code>03-inspect-and-verify</code></span><br/><span style="opacity: 0.7;">Introduced a <span class="emphasis-info">plugin</span>, <span class="emphasis-accent">custom agent</span>, review skills, and an approval gate.</span></div>

</div>

<aside class="notes">

- Recap 00: broad task with minimal context.
- Recap 01: added rules, workflows, and skills.
- Recap 02: forced plan-first behavior.
- Recap 03: used plugin, reviewer agent, tests, and approval gate.

</aside>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Recap: 04 - 06</span>

<div class="pt-7 text-start" style="font-size: 0.7em; max-width: 900px; margin: 0 auto;">

<div class="glass-card" style="margin-bottom: 0.65rem;"><span class="emphasis-success"><code>04-external-context-mcp</code></span><br/><span style="opacity: 0.7;">Used MCP to bring in runtime evidence and external documentation.</span></div>
<div class="glass-card" style="margin-bottom: 0.65rem;"><span class="emphasis-danger"><code>05-automation-and-hooks</code></span><br/><span style="opacity: 0.7;">Added <span class="emphasis-danger">hooks</span>, <span class="emphasis-info">scheduling</span>, and safe read-only automation.</span></div>
<div class="glass-card"><span class="emphasis-accent"><code>06-command-showcase</code></span><br/><span style="opacity: 0.7;">Used commands for clarity, boundaries, inspection, and recovery.</span></div>

</div>

<aside class="notes">

- Recap 04: used runtime and external context through MCP.
- Recap 05: added hooks and scheduled read-only automation.
- Recap 06: explored commands for clarity, boundaries, inspection, and recovery.

</aside>

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

<aside class="notes">

- Re-state the loop as the durable model participants should take home.
- Say the point is not to slow the agent down; it is to create enough structure that fast work is still inspectable.

</aside>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Final Message</span>

<div class="pt-8 emphasis-danger" style="font-size: 0.94em; max-width: 850px; margin: 0 auto;">
Better results rarely come from the agent and/or model alone.
</div>

<div class="pt-12 fragment fade-up">
<blockquote class="callout callout--success">
<span class="callout__label">THE POINT</span>
They come from the ecosystem around the agent: context, planning, guardrails, feedback, and verification.
</blockquote>
</div>

<aside class="notes">

- Final message: better results rarely come from model choice alone.
- Name the surrounding system: context, planning, guardrails, feedback, verification, and automation only after stability.
- Invite participants to apply one control surface to their current workflow.
- Time check: should be at 96 minutes by the end of this slide.

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Questions?</span>

<div class="pt-10" style="text-align: center;">

<img src="./assets/images/qr_audiencemeter.png" alt="Feedback QR code" style="width: 200px; height: 200px; border-radius: 12px;" />
<div style="margin-top: 0.6rem; font-size: 0.7em; opacity: 0.6; letter-spacing: 0.08em;">SCAN FOR FEEDBACK & LINKS</div>

</div>

<aside class="notes">

- Leave the QR code up.
- Ask for questions and invite people to use the guide later for self-paced replay.
- Mention the recovery commands and branch checkpoints if people want to revisit exercises.
- Time check: should reach this slide by 100 minutes or earlier.

</aside>
