<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Live feedback</span>

<div class="pt-10" style="text-align: center;">

<img src="./assets/images/qr_audiencemeter.png" alt="Feedback QR code" style="width: 200px; height: 200px; border-radius: 12px;" />
<div style="margin-top: 0.6rem; font-size: 0.7em; opacity: 0.6; letter-spacing: 0.08em;">ANONYMOUS</div>

</div>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">How every task starts</span>

<div class="pt-8 fragment fade-up" style="font-size: 0.85em; display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.5rem; text-align: center;">

<div>
<div style="font-size: 1.8em; margin-bottom: 0.4em;">📋</div>
<div style="opacity: 0.7; font-size: 0.75em;">Read ticket</div>
</div>

<div>
<div style="font-size: 1.8em; margin-bottom: 0.4em;">→</div>
</div>

<div>
<div style="font-size: 1.8em; margin-bottom: 0.4em;">📄</div>
<div style="opacity: 0.7; font-size: 0.75em;">Check specs</div>
</div>

<div>
<div style="font-size: 1.8em; margin-bottom: 0.4em;">→</div>
</div>

<div>
<div style="font-size: 1.8em; margin-bottom: 0.4em;">🎨</div>
<div style="opacity: 0.7; font-size: 0.75em;">Review designs</div>
</div>

<div>
<div style="font-size: 1.8em; margin-bottom: 0.4em;">→</div>
</div>

<div>
<div style="font-size: 1.8em; margin-bottom: 0.4em;">💻</div>
<div style="opacity: 0.7; font-size: 0.75em;">Explore code</div>
</div>

</div>

<div class="pt-8 fragment fade-up" style="font-size: 0.85em; display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.5rem; text-align: center;">

<div>
<div style="font-size: 1.8em; margin-bottom: 0.4em;">⌨️</div>
<div style="opacity: 0.7; font-size: 0.75em;">Write code</div>
</div>

<div>
<div style="font-size: 1.8em; margin-bottom: 0.4em;">→</div>
</div>

<div>
<div style="font-size: 1.8em; margin-bottom: 0.4em;">🧪</div>
<div style="opacity: 0.7; font-size: 0.75em;">Write tests</div>
</div>

<div>
<div style="font-size: 1.8em; margin-bottom: 0.4em;">→</div>
</div>

<div>
<div style="font-size: 1.8em; margin-bottom: 0.4em;">🔀</div>
<div style="opacity: 0.7; font-size: 0.75em;">Create PR</div>
</div>

</div>

<div class="pt-10 fragment fade-up">

Most of the time isn't <span class="emphasis-danger">coding</span>. It's <span class="emphasis-warning">context-engineering</span>.

</div>

<aside class="notes">

- "Raise your hand if this looks familiar."
- Walk through each step as it appears — keep it conversational
- Land on the last line and let it sit: "Most of our time is everything around the code, not the code itself."

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">The overhead no one talks about</span>

<div class="pt-10 fragment fade-up" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem; text-align: center;">

<div>
<div style="font-size: 2em; margin-bottom: 0.5em;">🔄</div>
<div><span class="emphasis-warning">Context switching</span></div>
<div style="opacity: 0.6; font-size: 0.75em; padding-top: 0.5rem;">Between 5+ tools before writing a line</div>
</div>

<div>
<div style="font-size: 2em; margin-bottom: 0.5em;">🧠</div>
<div><span class="emphasis-danger">Mental overhead</span></div>
<div style="opacity: 0.6; font-size: 0.75em; padding-top: 0.5rem;">Re-building context every single time</div>
</div>

<div>
<div style="font-size: 2em; margin-bottom: 0.5em;">📋</div>
<div><span class="emphasis-info">Repetitive setup</span></div>
<div style="opacity: 0.6; font-size: 0.75em; padding-top: 0.5rem;">Before any real engineering begins</div>
</div>

</div>

<div class="pt-12 fragment fade-up">

What if the context-engineering just <span class="highlight-accent">happened automatically</span>?

</div>

<aside class="notes">

- "It's not one big task. It's 20 small interruptions before you write a single line."
- The three cards name what everyone feels but rarely says out loud — let each land
- Pause on the closing question — it's the setup for everything that follows

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">So I built something</span>

<div class="pt-10 fragment fade-up" style="font-size: 0.9em; opacity: 0.75;">

An AI workflow that gathers the information and engineer the context.

</div>

<aside class="notes">

- Drop the tone here. Plain statement, not a pitch.
- "I want to show you what that looks like — input first."

</aside>

---

<!-- .slide: class="center-slide" data-auto-animate -->

## <span class="underline-accent">Input</span>

<div class="pt-8">

<blockquote class="callout callout--info">
<span class="callout__label">PROMPT</span>
Work on USGMMV-1234
</blockquote>

</div>

<aside class="notes">

- Just the ticket number. Let it land.
- "That's everything I type."

</aside>

---

<!-- .slide: class="center-slide" data-auto-animate -->

## <span class="underline-accent">Output</span>

<div class="pt-8">

<blockquote class="callout callout--success">
<span class="callout__label">RESULT</span>
Context gathered. Code written. PR created.
</blockquote>

</div>

<aside class="notes">

- "That's the goal. Not magic — just the boring parts handled automatically."
- "Let me show you how."

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">The system behind it</span>

<div class="pt-6">

<img src="./assets/images/workflow.png" alt="Workflow diagram" style="max-height: 480px; width: auto;" />

</div>

<aside class="notes">

- Walk through the diagram top to bottom
- "One orchestrator. It reads the ticket and decides what needs to happen."
- "Three research agents run in parallel — Jira, Confluence, codebase."
- "Then it stops. Human in the loop — I review the context summary before any code is written."
- "Only then do the implementation agents start. And the result is a PR."
- "It's not autonomous. It's collaborative."

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">What it actually looks like</span>

<div class="pt-8" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; font-size: 0.85em; text-align: left;">

<div>
<div style="opacity: 0.5; font-size: 0.75em; letter-spacing: 0.08em; margin-bottom: 0.8rem;">WHAT THE SYSTEM HANDLES</div>
<div class="fragment fade-up">
<div style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);">Fetches the ticket</div>
<div style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);">Pulls relevant Confluence docs</div>
<div style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);">Explores the codebase</div>
<div style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);">Writes and reviews code</div>
<div style="padding: 0.5rem 0;">Opens the PR</div>
</div>
</div>

<div>
<div style="opacity: 0.5; font-size: 0.75em; letter-spacing: 0.08em; margin-bottom: 0.8rem;">WHAT STAYS WITH YOU</div>
<div class="fragment fade-up">
<div style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);">Reviewing the context summary</div>
<div style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);">Answering edge case questions</div>
<div style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);">Guiding implementation decisions</div>
<div style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);">Approving before merge</div>
<div style="padding: 0.5rem 0;"><span class="emphasis-accent">Engineering judgment</span></div>
</div>
</div>

</div>

<!-- <div class="pt-8 fragment fade-up">

The boring parts are automated. <span class="emphasis-success">The interesting parts stay yours.</span>

</div> -->

<aside class="notes">

- "This isn't magic. It asks questions. You still make decisions."
- "What's gone is the 45 minutes of opening tabs before you write a line."
- Build left column first, then right — audience sees the balance before the closing line

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Four building blocks</span>

<div class="pt-8 fragment fade-up" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; text-align: center; font-size: 0.85em;">

<div class="glass-card">
<div style="font-size: 1.5em; margin-bottom: 0.5rem;">🤖</div>
<div><span class="emphasis-accent">Agents</span></div>
<div style="opacity: 0.55; font-size: 0.8em; padding-top: 0.4rem;">who does the work</div>
</div>

<div class="glass-card">
<div style="font-size: 1.5em; margin-bottom: 0.5rem;">⚡</div>
<div><span class="emphasis-info">Prompts</span></div>
<div style="opacity: 0.55; font-size: 0.8em; padding-top: 0.4rem;">how you trigger it</div>
</div>

<div class="glass-card">
<div style="font-size: 1.5em; margin-bottom: 0.5rem;">📚</div>
<div><span class="emphasis-success">Skills</span></div>
<div style="opacity: 0.55; font-size: 0.8em; padding-top: 0.4rem;">what they know</div>
</div>

<div class="glass-card">
<div style="font-size: 1.5em; margin-bottom: 0.5rem;">🔌</div>
<div><span class="emphasis-warning">MCPs</span></div>
<div style="opacity: 0.55; font-size: 0.8em; padding-top: 0.4rem;">where they get data</div>
</div>

</div>

<!-- <div class="pt-8 fragment fade-up">

All of it is <span class="emphasis-accent">markdown files</span> and one JSON config. Nothing exotic.

</div> -->

<aside class="notes">

- "So how is this actually built? Four pieces."
- Name each as it appears: "Agents are the workers. Prompts are how you trigger them. Skills are shared knowledge. MCPs connect to external tools."
- "All of this lives in your repo. No special tooling."

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">One responsibility per agent</span>

<div class="pt-6" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; font-size: 0.8em; text-align: left;">

<div>

<img src="./assets/images/agents.png" alt="Agents folder" style="max-height: 280px; width: auto; border-radius: 8px;" />

</div>

<div style="display: flex; flex-direction: column; justify-content: center; gap: 0.8rem;">

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

- "Same principle as clean code: single responsibility."
- "The test-writer runs on its own — you don't need the full pipeline to use it."

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Skills — shared knowledge</span>

<div class="pt-8" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">

<div>

<img src="./assets/images/skills.png" alt="Skills folder" style="max-height: 280px; width: auto; border-radius: 8px;" />

</div>

<div class="text-start" style="font-size: 0.85em;">

<div><span class="emphasis-success">project-conventions</span></div>
<div style="opacity: 0.5; font-size: 0.8em; padding-left: 1rem; padding-bottom: 0.5rem;">← loaded by implementer, test-writer, reviewer</div>

<div><span class="emphasis-info">git-conventions</span></div>
<div style="opacity: 0.5; font-size: 0.8em; padding-left: 1rem; padding-bottom: 0.5rem;">← loaded by pr-creator</div>

<div><span class="emphasis-warning">vue / pinia / vitest</span></div>
<div style="opacity: 0.5; font-size: 0.8em; padding-left: 1rem;">← loaded on demand</div>

</div>

</div>

<!-- <div class="pt-8">

Write once. <span class="emphasis-accent">Referenced by any agent that needs it.</span> -->

</div>

<aside class="notes">

- "Instead of copy-pasting your coding standards into every agent, you define them once as a skill."
- "Think of it as your team's coding standards — but machine-readable."

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">MCPs — the bridge to your tools</span>

<div class="pt-8" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">

<div class="text-start" style="font-size: 0.9em;">

<div style="padding: 0.6rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
AI ↔ <span class="emphasis-accent">Jira</span>
</div>
<div style="padding: 0.6rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
AI ↔ <span class="emphasis-info">Confluence</span>
</div>
<div style="padding: 0.6rem 0;">
AI ↔ <span class="emphasis-success">GitHub Enterprise</span>
</div>

<div class="pt-8" style="opacity: 0.65; font-size: 0.75em;">
One-time JSON config.
</div>

</div>

<div style="display: flex; flex-direction: column; gap: 0.8rem; align-items: center;">

<img src="./assets/images/mcp.png" alt="MCP file path" style="max-height: 80px; width: auto; border-radius: 8px;" />
<img src="./assets/images/mcp-config.png" alt="MCP config" style="max-height: 260px; width: auto; border-radius: 8px;" />

</div>

</div>

<aside class="notes">

- "This is what makes the workflow actually useful. Without MCPs, the agents can't read your tickets or create PRs."
- "You set this up once. Tokens stay in env vars — never in config files."

</aside>

---

<!-- .slide: class="center-slide" data-visibility="hidden" -->

## <span class="underline-accent">What it saves</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; text-align: center; font-size: 0.85em;">

<div style="padding: 1.5rem 1rem;">
<div style="font-size: 2.5em; font-weight: 700; color: var(--color-success);">~45 min</div>
<div style="opacity: 0.7; padding-top: 0.5rem;">context gathering<br/>per ticket</div>
</div>

<div style="padding: 1.5rem 1rem;">
<div style="font-size: 2.5em; font-weight: 700; color: var(--color-info);">~20 min</div>
<div style="opacity: 0.7; padding-top: 0.5rem;">PR description<br/>per PR</div>
</div>

<div style="padding: 1.5rem 1rem;">
<div style="font-size: 2.5em; font-weight: 700; color: var(--color-accent);">~15 min</div>
<div style="opacity: 0.7; padding-top: 0.5rem;">test boilerplate<br/>per feature</div>
</div>

</div>

<div class="pt-6" style="opacity: 0.6; font-size: 0.75em;">
rough estimates — your numbers will differ
</div>

<div class="pt-4">

The bigger shift is <span class="emphasis-warning">focus</span> — not having to context-switch before writing a line of code.

</div>

<aside class="notes">

- Don't oversell these numbers — qualify them
- "The biggest saving isn't time. It's the mental energy you don't spend on the boring parts."

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Start with one problem</span>

<div class="pt-8" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; text-align: center; font-size: 0.85em;">

<div class="glass-card">
<div style="font-size: 1.4em; margin-bottom: 0.5rem;">🧪</div>
<div><span class="emphasis-success">Hate writing tests?</span></div>
<div style="opacity: 0.6; font-size: 0.8em; padding-top: 0.4rem;">Start with a test-writer agent</div>
</div>

<div class="glass-card">
<div style="font-size: 1.4em; margin-bottom: 0.5rem;">📝</div>
<div><span class="emphasis-info">PRs always incomplete?</span></div>
<div style="opacity: 0.6; font-size: 0.8em; padding-top: 0.4rem;">Start with a PR creator agent</div>
</div>

<div class="glass-card">
<div style="font-size: 1.4em; margin-bottom: 0.5rem;">🔍</div>
<div><span class="emphasis-warning">Legacy code a maze?</span></div>
<div style="opacity: 0.6; font-size: 0.8em; padding-top: 0.4rem;">Start with a codebase explorer</div>
</div>

</div>

<!-- <div class="pt-8">

Don't copy my workflow. <span class="emphasis-accent">Solve your own friction.</span> -->

</div>

<aside class="notes">

- "I'm not saying build what I built."
- "Look at your own day. What's the thing you dread or keep putting off? That's your starting point."
- "One agent. One problem. See if it helps. Then expand."

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">How to start today</span>

<div class="pt-8 fragment fade-up" style="font-size: 0.9em; text-align: left; max-width: 700px; margin: 0 auto;">

<div style="display: flex; gap: 1.2rem; align-items: flex-start; padding-bottom: 1.2rem;">
<span style="color: var(--color-accent); font-weight: 700; font-size: 1.1em; min-width: 1.8rem;">1</span>
<div>Create <code>.agent.md</code> — <span class="emphasis-accent">one clear responsibility</span></div>
</div>

<div style="display: flex; gap: 1.2rem; align-items: flex-start; padding-bottom: 1.2rem;">
<span style="color: var(--color-info); font-weight: 700; font-size: 1.1em; min-width: 1.8rem;">2</span>
<div>Add one <span class="emphasis-info">MCP connection</span> — Jira, GitHub, whatever you use daily</div>
</div>

<div style="display: flex; gap: 1.2rem; align-items: flex-start; padding-bottom: 1.2rem;">
<span style="color: var(--color-success); font-weight: 700; font-size: 1.1em; min-width: 1.8rem;">3</span>
<div>Write a <span class="emphasis-success">prompt</span> — the trigger that kicks it off</div>
</div>

<div style="display: flex; gap: 1.2rem; align-items: flex-start;">
<span style="color: var(--color-warning); font-weight: 700; font-size: 1.1em; min-width: 1.8rem;">4</span>
<div><span class="emphasis-warning">Iterate</span> — it won't be perfect. That's expected.</div>
</div>

</div>

<aside class="notes">

- "You can set this up in under an hour."
- "Don't over-engineer it. One file, one job."

</aside>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">To recap</span>

<div class="pt-8 text-start fragment fade-up" style="font-size: 0.9em; max-width: 750px; margin: 0 auto;">

<div style="padding: 0.6rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
<span class="emphasis-accent">Context-gathering is automatable</span> — most pre-coding work is just data retrieval
</div>

<div style="padding: 0.6rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
<span class="emphasis-info">The architecture is simple</span> — agents, prompts, skills, MCPs — all text files
</div>

<div style="padding: 0.6rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
<span class="emphasis-success">You don't need the full pipeline</span> — start with your biggest friction point
</div>

<div style="padding: 0.6rem 0;">
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

<div class="pt-10" style="text-align: center;">

<img src="./assets/images/qr_audiencemeter.png" alt="Feedback QR code" style="width: 200px; height: 200px; border-radius: 12px;" />
<div style="margin-top: 0.6rem; font-size: 0.7em; opacity: 0.6; letter-spacing: 0.08em;">SCAN FOR FEEDBACK & LINKS</div>

</div>
