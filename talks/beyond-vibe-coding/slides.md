<!-- .slide: class="center-slide" -->

## <span class="underline-accent">How every task starts</span>

<div class="pt-8" style="font-size: 0.85em; display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.5rem; text-align: center;">

<div class="fragment fade-up" data-fragment-index="1">
<div style="font-size: 1.8em; margin-bottom: 0.4em;">📋</div>
<div style="opacity: 0.7; font-size: 0.75em;">Read ticket</div>
</div>

<div class="fragment fade-up" data-fragment-index="2">
<div style="font-size: 1.8em; margin-bottom: 0.4em;">→</div>
</div>

<div class="fragment fade-up" data-fragment-index="2">
<div style="font-size: 1.8em; margin-bottom: 0.4em;">📄</div>
<div style="opacity: 0.7; font-size: 0.75em;">Check specs</div>
</div>

<div class="fragment fade-up" data-fragment-index="3">
<div style="font-size: 1.8em; margin-bottom: 0.4em;">→</div>
</div>

<div class="fragment fade-up" data-fragment-index="3">
<div style="font-size: 1.8em; margin-bottom: 0.4em;">🎨</div>
<div style="opacity: 0.7; font-size: 0.75em;">Review designs</div>
</div>

<div class="fragment fade-up" data-fragment-index="4">
<div style="font-size: 1.8em; margin-bottom: 0.4em;">→</div>
</div>

<div class="fragment fade-up" data-fragment-index="4">
<div style="font-size: 1.8em; margin-bottom: 0.4em;">💻</div>
<div style="opacity: 0.7; font-size: 0.75em;">Explore code</div>
</div>

</div>

<div class="pt-8" style="font-size: 0.85em; display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.5rem; text-align: center;">

<div class="fragment fade-up" data-fragment-index="5">
<div style="font-size: 1.8em; margin-bottom: 0.4em;">⌨️</div>
<div style="opacity: 0.7; font-size: 0.75em;">Write code</div>
</div>

<div class="fragment fade-up" data-fragment-index="6">
<div style="font-size: 1.8em; margin-bottom: 0.4em;">→</div>
</div>

<div class="fragment fade-up" data-fragment-index="6">
<div style="font-size: 1.8em; margin-bottom: 0.4em;">🧪</div>
<div style="opacity: 0.7; font-size: 0.75em;">Write tests</div>
</div>

<div class="fragment fade-up" data-fragment-index="7">
<div style="font-size: 1.8em; margin-bottom: 0.4em;">→</div>
</div>

<div class="fragment fade-up" data-fragment-index="7">
<div style="font-size: 1.8em; margin-bottom: 0.4em;">🔀</div>
<div style="opacity: 0.7; font-size: 0.75em;">Create PR</div>
</div>

</div>

<div class="pt-10 fragment fade-up" data-fragment-index="8">

Most of the time isn't <span class="emphasis-danger">coding</span>. It's <span class="emphasis-warning">gathering context</span>.

</div>

<aside class="notes">

- "Raise your hand if this looks familiar."
- Each step appears one by one — let it build
- "Most of our time is the stuff around the code, not the code itself."

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">The real cost isn't time</span>

<div class="pt-10" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem; text-align: center;">

<div class="fragment fade-up">
<div style="font-size: 2em; margin-bottom: 0.5em;">🔄</div>
<div><span class="emphasis-warning">Context switching</span></div>
<div style="opacity: 0.6; font-size: 0.75em; padding-top: 0.5rem;">Between 5+ tools before writing a line</div>
</div>

<div class="fragment fade-up">
<div style="font-size: 2em; margin-bottom: 0.5em;">🧠</div>
<div><span class="emphasis-danger">Mental overhead</span></div>
<div style="opacity: 0.6; font-size: 0.75em; padding-top: 0.5rem;">Re-building context every single time</div>
</div>

<div class="fragment fade-up">
<div style="font-size: 2em; margin-bottom: 0.5em;">📋</div>
<div><span class="emphasis-info">Repetitive setup</span></div>
<div style="opacity: 0.6; font-size: 0.75em; padding-top: 0.5rem;">Before any real engineering begins</div>
</div>

</div>

<div class="pt-12 fragment fade-up">

What if the context-gathering just <span class="highlight-accent">happened automatically</span>?

</div>

<aside class="notes">

- Keep this short. One point: the friction isn't one big task, it's 20 small interruptions.
- The highlighted question is the setup for everything that follows — pause after it

</aside>

---

<!-- .slide: class="center-slide" data-auto-animate -->

## <span class="underline-accent">Input</span>

<div class="pt-8">

<blockquote class="callout callout--accent">
<span class="callout__label">PROMPT</span>
Work on USGMMV-1234
</blockquote>

</div>

<aside class="notes">

- Just the input. Let it land for a second before moving to the next slide.

</aside>

---

<!-- .slide: class="center-slide" data-auto-animate -->

## <span class="underline-accent">Output</span>

<div class="pt-8">

<blockquote class="callout callout--success">
<span class="callout__label">RESULT</span>
Pull Request — written, reviewed, tested
</blockquote>

</div>

<aside class="notes">

- "That's it. That's the talk."
- Let this breathe before moving on to show HOW

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">The system behind it</span>

<div class="pt-6">

<!-- TODO: Replace with Excalidraw export — orchestrator + specialist agents + checkpoint diagram -->
<!-- VISUAL PLACEHOLDER: Architecture diagram showing orchestrator → parallel research agents → Checkpoint 1 → parallel implementation agents → PR -->

<pre style="font-size: 0.5em; text-align: left; display: inline-block; background: transparent; box-shadow: none; border: none; color: rgba(255,255,255,0.75);">
                   ┌────────────────────┐
                   │  "Work on USGMMV-1234"  │
                   └──────────┬─────────┘
                              │
                   ┌──────────▼─────────┐
                   │    Orchestrator     │
                   └──────────┬─────────┘
                              │
           ┌──────────────────┼──────────────────┐
           ▼                  ▼                  ▼
     ┌───────────┐      ┌───────────┐      ┌───────────┐
     │   Jira    │      │Confluence │      │ Codebase  │
     │ Research  │      │ Research  │      │ Explorer  │
     └─────┬─────┘      └─────┬─────┘      └─────┬─────┘
           └──────────────────┼──────────────────┘
                              ▼
                     🛑  Checkpoint 1
                              │
           ┌──────────────────┼──────────────────┐
           ▼                  ▼                  ▼
     ┌───────────┐      ┌───────────┐      ┌───────────┐
     │Implementer│      │   Tests   │      │ Reviewer  │
     └─────┬─────┘      └─────┬─────┘      └─────┬─────┘
           └──────────────────┼──────────────────┘
                              ▼
                   ┌──────────────────┐
                   │    PR Created     │
                   └──────────────────┘
</pre>

</div>

<aside class="notes">

- "One orchestrator. Seven specialists. Each does one thing."
- "The checkpoint matters — the system pauses and I review before any code is written."
- Don't linger — the video is next

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">See it in action</span>

<div class="pt-8">

<!-- VIDEO PLACEHOLDER: 60–90 second screen recording -->
<!-- Flow: VS Code → select "Work on Ticket" prompt → type USGMMV-XXXX -->
<!-- → agents orchestrating in parallel → Checkpoint 1 summary → implementation → PR URL in terminal -->

<div style="border: 2px dashed rgba(139, 92, 246, 0.4); border-radius: 12px; padding: 2.5rem 5rem; display: inline-block; background: rgba(139, 92, 246, 0.05);">
<div style="font-size: 2em; margin-bottom: 0.5rem;">🎬</div>
<div style="opacity: 0.6; font-size: 0.8em;">VIDEO PLACEHOLDER</div>
<div style="opacity: 0.4; font-size: 0.65em; padding-top: 0.3rem;">60–90s · ticket ID → agents → PR</div>
</div>

</div>

<div class="pt-8 fragment fade-up">

One input. <span class="emphasis-success">No tab-switching.</span>

</div>

<aside class="notes">

- Let the video run 10–15 seconds silently before narrating
- "I typed one thing. Everything else was handled."
- "This isn't a demo build — it's what I use every day."

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Four building blocks</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; text-align: center; font-size: 0.85em;">

<div class="fragment fade-up glass-card" data-fragment-index="1">
<div style="font-size: 1.5em; margin-bottom: 0.5rem;">🤖</div>
<div><span class="emphasis-accent">Agents</span></div>
<div style="opacity: 0.55; font-size: 0.8em; padding-top: 0.4rem;">who does the work</div>
</div>

<div class="fragment fade-up glass-card" data-fragment-index="2">
<div style="font-size: 1.5em; margin-bottom: 0.5rem;">⚡</div>
<div><span class="emphasis-info">Prompts</span></div>
<div style="opacity: 0.55; font-size: 0.8em; padding-top: 0.4rem;">how you trigger it</div>
</div>

<div class="fragment fade-up glass-card" data-fragment-index="3">
<div style="font-size: 1.5em; margin-bottom: 0.5rem;">📚</div>
<div><span class="emphasis-success">Skills</span></div>
<div style="opacity: 0.55; font-size: 0.8em; padding-top: 0.4rem;">what they know</div>
</div>

<div class="fragment fade-up glass-card" data-fragment-index="4">
<div style="font-size: 1.5em; margin-bottom: 0.5rem;">🔌</div>
<div><span class="emphasis-warning">MCPs</span></div>
<div style="opacity: 0.55; font-size: 0.8em; padding-top: 0.4rem;">where they get data</div>
</div>

</div>

<div class="pt-8 fragment fade-up" data-fragment-index="5">

<!-- SCREENSHOT PLACEHOLDER: VS Code file explorer showing .github/agents/ · .github/prompts/ · .agents/skills/ · .vscode/mcp.json -->
<div style="opacity: 0.5; font-size: 0.7em; border: 1px dashed rgba(255,255,255,0.2); border-radius: 8px; padding: 0.5rem 1.5rem; display: inline-block;">📸 screenshot: project folder structure</div>

</div>

<div class="pt-4 fragment fade-up" data-fragment-index="5">

All of it is <span class="emphasis-accent">markdown files</span> and one JSON config. Nothing exotic.

</div>

<aside class="notes">

- Cards appear one by one — name each briefly as it appears
- "Agents are the workers. Prompts are the triggers. Skills are shared knowledge. MCPs connect to the outside world."
- "All of this lives right in your repo."

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">One responsibility per agent</span>

<div class="pt-6" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; font-size: 0.8em; text-align: left;">

<div>

<!-- SCREENSHOT PLACEHOLDER: .github/agents/ folder with all 8 agent filenames visible -->
<div style="opacity: 0.5; font-size: 0.75em; border: 1px dashed rgba(255,255,255,0.2); border-radius: 8px; padding: 0.5rem 1.2rem; margin-bottom: 1rem;">📸 screenshot: agents folder</div>

</div>

<div class="fragment fade-up" style="display: flex; flex-direction: column; justify-content: center; gap: 0.8rem;">

<div>Started with <span class="emphasis-danger">one big agent</span> that did everything</div>
<div>↓</div>
<div>Unreliable. Hard to debug. Unpredictable.</div>
<div>↓</div>
<div>Split into <span class="emphasis-success">specialists</span></div>
<div>↓</div>
<div>Predictable. Debuggable. <span class="emphasis-accent">Each usable standalone.</span></div>

</div>

</div>

<aside class="notes">

- "Same design principle as clean code: single responsibility."
- "The test-writer can run on its own — you don't need the full pipeline."

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Skills — shared knowledge</span>

<div class="pt-8" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">

<div>

<!-- SCREENSHOT PLACEHOLDER: .agents/skills/ folder showing all skill directories -->
<div style="opacity: 0.5; font-size: 0.75em; border: 1px dashed rgba(255,255,255,0.2); border-radius: 8px; padding: 0.5rem 1.2rem;">📸 screenshot: skills folder</div>

</div>

<div class="text-start" style="font-size: 0.85em;">

<div class="fragment fade-up"><span class="emphasis-success">project-conventions</span></div>
<div class="fragment fade-up" style="opacity: 0.5; font-size: 0.8em; padding-left: 1rem; padding-bottom: 0.5rem;">← loaded by implementer, test-writer, reviewer</div>

<div class="fragment fade-up"><span class="emphasis-info">git-conventions</span></div>
<div class="fragment fade-up" style="opacity: 0.5; font-size: 0.8em; padding-left: 1rem; padding-bottom: 0.5rem;">← loaded by pr-creator</div>

<div class="fragment fade-up"><span class="emphasis-warning">vue / pinia / vitest</span></div>
<div class="fragment fade-up" style="opacity: 0.5; font-size: 0.8em; padding-left: 1rem;">← loaded on demand</div>

</div>

</div>

<div class="pt-8 fragment fade-up">

Write once. <span class="emphasis-accent">Referenced by any agent that needs it.</span>

</div>

<aside class="notes">

- "Instead of copy-pasting your coding standards into every agent file, you define them once as a skill."
- "It's like your team's coding standards — but machine-readable."

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">MCPs — the bridge to your tools</span>

<div class="pt-8" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">

<div class="text-start" style="font-size: 0.9em;">

<div class="fragment fade-up" style="padding: 0.6rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
AI ↔ <span class="emphasis-accent">Jira</span>
</div>
<div class="fragment fade-up" style="padding: 0.6rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
AI ↔ <span class="emphasis-info">Confluence</span>
</div>
<div class="fragment fade-up" style="padding: 0.6rem 0;">
AI ↔ <span class="emphasis-success">GitHub Enterprise</span>
</div>

<div class="fragment fade-up pt-8" style="opacity: 0.65; font-size: 0.75em;">
One-time JSON config. Agents connect directly — no copy-pasting from browser tabs.
</div>

</div>

<div>

<!-- SCREENSHOT PLACEHOLDER: .vscode/mcp.json with tokens blurred -->
<div style="opacity: 0.5; font-size: 0.75em; border: 1px dashed rgba(255,255,255,0.2); border-radius: 8px; padding: 0.5rem 1.2rem;">📸 screenshot: mcp.json (blur tokens)</div>

</div>

</div>

<aside class="notes">

- "This is what makes it actually useful. Without MCPs, AI can't read your tickets or create PRs."
- "Setup is once. Tokens live in env vars — never in config files."

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">What it saves</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; text-align: center; font-size: 0.85em;">

<div class="fragment fade-up" style="padding: 1.5rem 1rem;">
<div style="font-size: 2.5em; font-weight: 700; color: var(--color-success);">~45 min</div>
<div style="opacity: 0.7; padding-top: 0.5rem;">context gathering<br/>per ticket</div>
</div>

<div class="fragment fade-up" style="padding: 1.5rem 1rem;">
<div style="font-size: 2.5em; font-weight: 700; color: var(--color-info);">~20 min</div>
<div style="opacity: 0.7; padding-top: 0.5rem;">PR description<br/>per PR</div>
</div>

<div class="fragment fade-up" style="padding: 1.5rem 1rem;">
<div style="font-size: 2.5em; font-weight: 700; color: var(--color-accent);">~15 min</div>
<div style="opacity: 0.7; padding-top: 0.5rem;">test boilerplate<br/>per feature</div>
</div>

</div>

<div class="pt-6 fragment fade-up" style="opacity: 0.6; font-size: 0.75em;">
rough estimates — your numbers will differ
</div>

<div class="pt-4 fragment fade-up">

The bigger shift is <span class="emphasis-warning">focus</span> — not having to context-switch before writing a line of code.

</div>

<aside class="notes">

- Don't oversell these numbers — qualify them
- "The biggest saving isn't time. It's the mental energy you don't spend on the boring parts."

</aside>

---

<!-- .slide: class="center-slide" -->

## Your workflow is different

## <span class="highlight-accent">That's the point</span>

<div class="pt-10" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; text-align: center; font-size: 0.85em;">

<div class="fragment fade-up glass-card">
<div style="font-size: 1.4em; margin-bottom: 0.5rem;">🧪</div>
<div><span class="emphasis-success">Hate writing tests?</span></div>
<div style="opacity: 0.6; font-size: 0.8em; padding-top: 0.4rem;">Start with the test-writer</div>
</div>

<div class="fragment fade-up glass-card">
<div style="font-size: 1.4em; margin-bottom: 0.5rem;">📝</div>
<div><span class="emphasis-info">PRs always incomplete?</span></div>
<div style="opacity: 0.6; font-size: 0.8em; padding-top: 0.4rem;">Start with the PR creator</div>
</div>

<div class="fragment fade-up glass-card">
<div style="font-size: 1.4em; margin-bottom: 0.5rem;">🔍</div>
<div><span class="emphasis-warning">Legacy code a maze?</span></div>
<div style="opacity: 0.6; font-size: 0.8em; padding-top: 0.4rem;">Start with codebase explorer</div>
</div>

</div>

<div class="pt-8 fragment fade-up">

One agent. One problem. <span class="emphasis-accent">Expand from there.</span>

</div>

<aside class="notes">

- "I'm not saying build what I built."
- "Look at your own workflow. What's the thing you dread? Start there."
- This is the core message — don't rush it

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">How to start today</span>

<div class="pt-8" style="font-size: 0.9em; text-align: left; max-width: 700px; margin: 0 auto;">

<div class="fragment fade-up" style="display: flex; gap: 1.2rem; align-items: flex-start; padding-bottom: 1.2rem;">
<span style="color: var(--color-accent); font-weight: 700; font-size: 1.1em; min-width: 1.8rem;">1</span>
<div>Create <code>.agent.md</code> — <span class="emphasis-accent">one clear responsibility</span></div>
</div>

<div class="fragment fade-up" style="display: flex; gap: 1.2rem; align-items: flex-start; padding-bottom: 1.2rem;">
<span style="color: var(--color-info); font-weight: 700; font-size: 1.1em; min-width: 1.8rem;">2</span>
<div>Add one <span class="emphasis-info">MCP connection</span> — Jira, GitHub, whatever you use daily</div>
</div>

<div class="fragment fade-up" style="display: flex; gap: 1.2rem; align-items: flex-start; padding-bottom: 1.2rem;">
<span style="color: var(--color-success); font-weight: 700; font-size: 1.1em; min-width: 1.8rem;">3</span>
<div>Write a <span class="emphasis-success">prompt</span> — the trigger that kicks it off</div>
</div>

<div class="fragment fade-up" style="display: flex; gap: 1.2rem; align-items: flex-start;">
<span style="color: var(--color-warning); font-weight: 700; font-size: 1.1em; min-width: 1.8rem;">4</span>
<div><span class="emphasis-warning">Iterate</span> — it won't be perfect. That's expected.</div>
</div>

</div>

<div class="pt-10 fragment fade-up" style="opacity: 0.6; font-size: 0.75em;">

GitHub Copilot in VS Code supports agents, prompts, skills, and MCPs natively — no extensions needed.

<!-- SCREENSHOT PLACEHOLDER: A minimal 8–10 line .agent.md file -->
<div style="margin-top: 0.5rem; opacity: 0.7; border: 1px dashed rgba(255,255,255,0.2); border-radius: 8px; padding: 0.4rem 1.2rem; display: inline-block;">📸 screenshot: minimal agent file</div>

</div>

<aside class="notes">

- "You can set this up in under an hour."
- "Don't over-engineer. One file, one job."

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">To recap</span>

<div class="pt-8 text-start" style="font-size: 0.9em; max-width: 750px; margin: 0 auto;">

<div class="fragment fade-up" style="padding: 0.6rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
<span class="emphasis-accent">Context-gathering is automatable</span> — most pre-coding work is just data retrieval
</div>

<div class="fragment fade-up" style="padding: 0.6rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
<span class="emphasis-info">The architecture is simple</span> — agents, prompts, skills, MCPs — all text files
</div>

<div class="fragment fade-up" style="padding: 0.6rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
<span class="emphasis-success">You don't need the full pipeline</span> — start with your biggest friction point
</div>

<div class="fragment fade-up" style="padding: 0.6rem 0;">
<span class="emphasis-warning">The interesting work stays with you</span> — decisions, architecture, judgment
</div>

</div>

<aside class="notes">

- Quick, don't over-explain each point
- Leave room for questions

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Questions?</span>

<div class="pt-8">

<a href="https://asadullahkhalid.com" target="_blank" class="emphasis-accent" style="font-size: 1.1em;">🌐 asadullahkhalid.com</a>

</div>

<div class="pt-6" style="opacity: 0.55; font-size: 0.75em;">

Happy to share the agent files if you want to try it.

</div>
