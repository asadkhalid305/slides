<!--
title: Teach Your Agent How You Work
description: Building reusable team workflows
date: 2026-11-26
audience: company
-->
<!-- .slide: id="session" -->

<p class="lab-eyebrow">WELCOME / SESSION OVERVIEW</p>

## Three ways we’ll work.

<div class="lab-grid lab-grid--three"><div class="lab-panel"><p class="lab-number">01</p><h3>Follow along · ≈90 min</h3><p>Work on a task together.<br/>Show the agent how we want to work.</p></div><div class="lab-panel"><p class="lab-number">02</p><h3>Breakout · ≈30 min</h3><p>Write and test one practice<br/>from your own team.</p></div><div class="lab-panel"><p class="lab-number">03</p><h3>Discuss · flexible</h3><p>What helped? What didn’t?<br/>What would your team reuse?</p></div></div><div class="lab-observation"><p>Leave knowing how to turn a team practice into something the agent can use.</p></div>

<p class="lab-caption">About three hours, with flexible time for breaks, questions, and getting unstuck.</p>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>


<aside class="notes">Focus: participants learn to describe, test and share a team practice. The application is a place to try this. Timings are estimates, not a finalized agenda. Rehearse the guided sequence. Audience: frontend developers who may use AI already but are new to skills or other customization. Participant README is the step-by-step source.</aside>


---

<!-- .slide: id="exercise" -->

<p class="lab-eyebrow">ORIENT / LIVE EXERCISE</p>

## A task to practice on.

<div class="lab-flow"><p>Vue starter<br/>Plain CSS</p><span aria-hidden="true">→</span><p>COP-191<br/>Workbench rebrand</p><span aria-hidden="true">→</span><p>Look at the app<br/>Check the requirements</p></div><div class="lab-grid"><div class="lab-panel"><p class="lab-number">01</p><h3>Keep</h3><p>Keep the mock data structure.<br/>Keep the app accessible and its tests useful.</p></div><div class="lab-panel"><p class="lab-number">02</p><h3>Compare</h3><p>Check the result against Jira screenshots.<br/>Use Confluence for the technical details.</p></div></div><div class="lab-observation"><p>As we work, ask: is the agent following the way we want to work?</p></div>
<p class="lab-caption">Fictional owner dashboard · Vue 3 / Vite · Workbench packages already installed</p>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: use COP-191 as a common task to observe team workflow choices; finishing the rebrand alone is not the learning goal. Open /Users/khaliasa/Code/personal/projects/ai-workflows-workshop/ai-lab/workshops/ai-workflows/ as Cursor workspace root. Starter is main, with no committed .cursor configuration; reference examples and prepared mirrors are on ai-lab/workshops/ai-workflows/solution. Read README from main. Show app and ticket live: header, both panels, empty states, consistent wb-* components. Figma and Workbench docs supplement Jira images. Do not equate the mock with production UI.</aside>

---

<!-- .slide: id="concept-map" -->

## How can we teach it our way of working?

<div class="lab-grid lab-grid--three lab-map"><a href="#/mcp"><strong>MCP</strong><span>Connect to the tools we use</span></a><a href="#/skills"><strong>Skills</strong><span>Share the steps we follow</span></a><a href="#/rules"><strong>Rules</strong><span>Explain our coding conventions</span></a><a href="#/hooks"><strong>Hooks</strong><span>Automate a check we repeat</span></a><a href="#/subagents"><strong>Subagents</strong><span>Give a specialist a clear role</span></a><a href="#/commands"><strong>Commands</strong><span>Save a request we repeat</span></a></div><div class="lab-observation"><p>We’ll start with MCP. Click a topic to revisit it later.</p></div>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">This is a preview of the topics, not a list of features already configured. Start with MCP; introduce skills, rules, hooks, subagents and commands later in order. Clickable map for returning to a concept during the exercise. Right/left arrows move between main sections; down/up access optional detail. O = overview. Ctrl/Cmd+Shift+F = Reveal search. Use Escape to leave overview. The browser hash preserves position.</aside>

---

<!-- .slide: id="mcp" -->

<p class="lab-eyebrow">MCP / THE BASICS</p>

## MCP

<div class="lab-grid lab-grid--three"><div class="lab-panel"><p class="lab-number">01</p><h3>What it is</h3><p>Lets your agent use other tools and read information from them.</p></div><div class="lab-panel"><p class="lab-number">02</p><h3>When to use it</h3><p>You need the agent to read from or work with another tool.</p></div><div class="lab-panel"><p class="lab-number">03</p><h3>What to check</h3><p>Which tools it used, what it could access, and what came back.</p></div></div>

<div class="lab-observation"><p><strong>In this workshop:</strong> Connect the agent to the tools where we keep our work and requirements.</p></div>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: MCP gives access to team tools and information; it does not teach the team process. Use Jira access as the concrete demonstration. Source: /Users/khaliasa/Code/personal/projects/ai-workflows-workshop/ai-lab/workshops/ai-workflows/.cursor/mcp.json. https://cursor.com/docs/mcp . Connect Jira, then Confluence. Authenticate and check VPN live. No internal endpoints or tokens appear in these slides. Figma supplements Jira screenshots. GitHub is optional. MCP supplies tools, not the team process.</aside>

--

<!-- .slide: id="context-sources" -->

<p class="lab-eyebrow">MCP / WORKSHOP EXAMPLE</p>

## Where does our team keep the details?

<div class="lab-grid"><div class="lab-panel"><p class="lab-number">01</p><h3>Start here</h3><p>The Jira ticket, its requirements,<br/>and screenshots of the target UI.</p></div><div class="lab-panel"><p class="lab-number">02</p><h3>For more detail</h3><p>The linked Confluence page,<br/>then Workbench docs or Figma if needed.</p></div></div><div class="lab-observation"><p>Give the agent the sources we would use ourselves. If we use prepared copies, say so.</p></div>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: distinguish knowing where the team keeps information from deciding how the agent should use it. Source: main participant README; solution docs/ticket.md, docs/confluence-excerpt.md, docs/reference/. These are prepared mirrors, not current live evidence. Use this slide before implementation to explain where requirements live. In Cursor, check MCP access to the ticket and linked page; do not introduce skills yet. Then move to the baseline prompt. Check image availability explicitly; fetching ticket text does not prove screenshots were read. Access failures are useful observations, not permission to invent details.</aside>

---

<!-- .slide: id="baseline" -->

<p class="lab-eyebrow">OBSERVE / CURSOR</p>

## What can the agent do already?

<p class="lab-prompt">COP-191 — work on this task.</p><div class="lab-observation"><p>With the tools connected, try the task before adding our project instructions.</p></div><p class="lab-caption">Watch its approach. What matches the way we would handle this task?</p>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: observe the capable agent before project customization. Do not frame later additions as necessary for any successful implementation. Source: facilitator branch facilitator/SIMULATION-REVIEW.md and FACILITATOR-GUIDE.md. In the prior dry run, the agent read Jira and Confluence, switched the UI to Workbench and updated tests without project skills or rules. Keep this result in facilitator notes so participants observe their own run first. Prior simulation is historical evidence, not a promise of this run. Use a fresh chat. No attribution to rules or skills: none were active. Show tool activity, diff, rendered app and actual tests. Keep changes local.</aside>

---

<!-- .slide: id="evidence" -->

<p class="lab-eyebrow">BASELINE / CHECKPOINT</p>

## How did it approach the work?

<div class="lab-grid lab-grid--three"><div class="lab-panel"><p class="lab-number">01</p><h3>What did it read?</h3><p>The ticket, linked pages,<br/>and project files.</p></div><div class="lab-panel"><p class="lab-number">02</p><h3>What did it run?</h3><p>Tool calls, terminal commands,<br/>and tests.</p></div><div class="lab-panel"><p class="lab-number">03</p><h3>Would we accept it?</h3><p>Does it meet the requirements?<br/>What did we verify? What’s missing?</p></div></div><div class="lab-observation"><p>What did it do well? What would we want to explain about the way our team works?</p></div>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: identify which team expectations were already met and which need to be explained. Do not mention later features as active. Use this checkpoint after the MCP-only baseline. We have not introduced or added project skills, rules, hooks or subagents yet; do not ask whether they ran or imply that defaults supplied them. Ask only about the sources read, commands/tools/tests run, and resulting app. Pause in Cursor. Ask participants for observations before explanations. Separate reads from assumptions and tests executed from tests merely mentioned. Customization aims to make expectations explicit and repeatable, not to establish that an uncustomized agent is incapable.</aside>

---

<!-- .slide: id="skills" -->

<p class="lab-eyebrow">SKILLS / THE BASICS</p>

## Skills

<div class="lab-grid lab-grid--three"><div class="lab-panel"><p class="lab-number">01</p><h3>What it is</h3><p>Instructions that teach the agent how to approach a task.</p></div><div class="lab-panel"><p class="lab-number">02</p><h3>When to use it</h3><p>Your team has a way of doing a task that you want to share and reuse.</p></div><div class="lab-panel"><p class="lab-number">03</p><h3>What to check</h3><p>Did it use the skill, follow the steps, and produce something useful?</p></div></div>

<div class="lab-observation"><p><strong>In this workshop:</strong> Turn team practices into skills, such as Git conventions or how we work with Jira and Confluence.</p></div>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: skills encode repeatable team practices. Atlassian requirements is one prepared example, not the definition of a skill. Introduce the shared Git skill next. Review and adapt it to this repository before asking the agent to create a branch. Source: /Users/khaliasa/Code/personal/projects/ai-workflows-workshop/ai-lab/workshops/ai-workflows/.cursor/skills/atlassian-requirements/SKILL.md. https://cursor.com/docs/skills After the Git skill and branch segment, introduce the Atlassian skill. In a fresh chat, ask COP-191 — work on this task, without naming the skill. Use disable-model-invocation: false in the workshop copy and inspect whether Cursor chooses it. Selection is not guaranteed. Metadata aids discovery; instructions supply the procedure. Skills are guidance, not access controls.</aside>

---

<!-- .slide: id="skill-sources" -->

<p class="lab-eyebrow">SKILLS / GET STARTED</p>

## Three ways to get a skill

<div class="lab-grid lab-grid--three"><div class="lab-panel"><p class="lab-number">01</p><h3>Ask the agent</h3><p>Let it draft one. Review and improve what it writes.</p></div><div class="lab-panel"><p class="lab-number">02</p><h3>Write your own</h3><p>Start small with your team’s steps. Improve it as you use it.</p></div><div class="lab-panel"><p class="lab-number">03</p><h3>Reuse one</h3><p>Find a shared skill. Check whether it fits your team.</p></div></div>

<div class="lab-observation"><p>We’ll start with a Git skill shared in AI Studio.</p></div>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Explain the tradeoffs: an agent can draft a skill but its output needs review; a small hand-written skill can grow over time; a shared skill saves starting from scratch but must be reviewed and adapted. None is guaranteed correct or mandatory.</aside>

---

<!-- .slide: id="ai-studio-git" -->

<p class="lab-eyebrow">SKILLS / REUSE</p>

## Start with a shared Git skill

<ol class="lab-steps"><li>Find <a href="https://ai-studio.pages.mercedes-benz.ghe.com/#/skill/fe-skills/git-workflow-and-versioning">Git Workflow and Versioning</a> in AI Studio.</li><li>Choose the options and copy the install command.</li><li>Run it from the workshop project.</li><li>Read the skill. Does it match how our team works?</li></ol>

<div class="lab-observation"><p>Keep it, adapt it, or choose another approach.</p></div>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Show the actual AI Studio page and its current options and generated command live. Exact installation controls and destination require verification in an authenticated environment; do not claim the install has succeeded before checking. Review the downloaded files and provenance. The shared skill refers to develop, whereas this workshop starts from main: agree a safe workshop-specific adaptation before using it. Do not imply its defaults are company-wide policy. Avoid unreviewed network and Git actions.</aside>

---

<!-- .slide: id="git-branch" -->

<p class="lab-eyebrow">SKILLS / TRY IT</p>

## Now let’s create a branch

<p class="lab-prompt">Create a feature branch for COP-191.</p>

<div class="lab-grid lab-grid--three"><div class="lab-panel"><p class="lab-number">01</p><h3>Did it use the skill?</h3><p>Check what Cursor loaded.</p></div><div class="lab-panel"><p class="lab-number">02</p><h3>Does it fit?</h3><p>Check the branch name and starting point.</p></div><div class="lab-panel"><p class="lab-number">03</p><h3>What did we learn?</h3><p>Would this convention work for our team?</p></div></div>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Before branching, inspect the baseline working-tree changes and preserve them; use a suitable clean starter or agreed safe method. The workshop starts from main, not develop. Review the shared skill before use and adapt conflicting instructions for this exercise. Use a fresh chat and do not name the skill when testing automatic selection. Check actual activation and branch/base; selection is not guaranteed. A slash invocation can test the skill separately.</aside>

---

<!-- .slide: id="atlassian-workflow" -->

<p class="lab-eyebrow">SKILLS / OUR TEAM’S WORKFLOW</p>

## Now teach it how we work on a ticket

<div class="lab-flow"><p>Read the ticket<br/>Follow useful links</p><span aria-hidden="true">→</span><p>Share findings<br/>Flag what’s missing</p><span aria-hidden="true">→</span><p>Ask us first<br/>Then proceed</p></div>

<div class="lab-observation"><p>We’ll copy a workshop example from the solution branch and adapt it to our needs.</p></div>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Explain the desired team protocol: read Jira, relevant linked Confluence or other available sources and attachments; report criteria, notes, unknowns and inaccessible sources in a clear handover; ask for approval before implementing, even when the request says work on the ticket. This is a workshop example, not company policy. Participants copy the prepared skill from the solution branch into their Cursor skills folder and review it. The currently observed source permits coding if requested in the same message; it must be reconciled separately and rehearsed before this demo. With disable-model-invocation false, test automatic selection in a fresh chat without naming the skill. Confirm actual activation and that it stops; selection and compliance are not guaranteed. Plan mode can complement a skill by controlling the interaction while the skill supplies the team’s research procedure.</aside>


--

<!-- .slide: id="skill-anatomy" -->

<p class="lab-eyebrow">SKILLS / WORKSHOP EXAMPLE</p>

## One example: how we work with Atlassian

<div class="lab-annotation">
<div class="lab-code-excerpts">
<div class="lab-code-group text-accent"><p>01 / Metadata · excerpt</p><pre><code class="language-yaml">name: atlassian-requirements
# description omitted here
disable-model-invocation: false</code></pre></div>
<div class="lab-code-group text-info"><p>02 / Context · excerpt</p><pre><code class="language-markdown">## Instructions
…
2. When Confluence is linked, read those pages for constraints and technical notes.</code></pre></div>
<div class="lab-code-group text-success"><p>03 / Output · excerpt</p><pre><code class="language-markdown">| Unknowns | Numbered questions for humans |</code></pre></div>
<div class="lab-code-group text-warning"><p>04 / Limit · excerpt</p><pre><code class="language-markdown">- Do not invent requirements; state what could not be loaded.</code></pre></div>
</div>
<ol class="lab-legend">
<li class="text-accent"><strong>01 / Metadata</strong><p>The description helps Cursor decide when to use it. This setting lets the agent choose it.</p></li>
<li class="text-info"><strong>02 / Context</strong><p>Say which sources we expect it to read and what to do when something is missing.</p></li>
<li class="text-success"><strong>03 / Steps + result</strong><p>Define the handover we want: clear requirements and unanswered questions.</p></li>
<li class="text-warning"><strong>04 / Limits</strong><p>Don’t make up requirements. Read Jira and Confluence; don’t change them unless asked.</p></li>
</ol>
</div>
<p class="lab-caption">Workshop variant: automatic selection enabled. Other excerpts are shortened for display.</p>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: show how a team practice becomes instructions: sources, steps, expected handover and limits. These are example choices, not mandatory sections for every skill. Source: /Users/khaliasa/Code/personal/projects/ai-workflows-workshop/ai-lab/workshops/ai-workflows/.cursor/skills/atlassian-requirements/SKILL.md. https://cursor.com/docs/skills The current file uses false. Its approval boundary still needs reconciliation before demonstrating the intended stop-and-ask behavior; do not claim it is proven. Show the full file in Cursor. YAML description and body are abbreviated. Color legend maps metadata, inputs, procedure/output, and limits; limits appear in omitted body.</aside>

--

<!-- .slide: id="skill-loading" -->

<p class="lab-eyebrow">SKILLS / OPTIONAL DETAIL</p>

## How does the agent find our instructions?

<div class="lab-flow"><p>Name + description<br/>Is this useful here?</p><span aria-hidden="true">→</span><p>Instructions<br/>How to do the task</p><span aria-hidden="true">→</span><p>Extra files<br/>Read when needed</p></div><div class="lab-observation"><p><strong>In this workshop:</strong> <code>disable-model-invocation: false</code><br/>Give Cursor a relevant task and check whether it chooses the skill.</p></div><p class="lab-caption">Cursor can choose it; it isn’t guaranteed to. Check what was loaded and what the agent did.</p>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: sharing a skill file is not proof the agent used or followed it. Test automatic selection first with a relevant task in a fresh chat, without naming the skill. Source: /Users/khaliasa/Code/personal/projects/ai-workflows-workshop/ai-lab/workshops/ai-workflows/.cursor/skills/atlassian-requirements/SKILL.md. https://cursor.com/docs/skills Progressive disclosure keeps longer references separate until needed. With disable-model-invocation: false, Cursor can choose the skill based on relevance; this does not force activation. Check the skill description, then compare relevant and unrelated prompts in fresh chats. Explicit /atlassian-requirements remains an option to invoke it deliberately, but that is not proof of automatic selection. Do not change the source repository as part of creating these slides.</aside>

---

<!-- .slide: id="authoring" -->

<p class="lab-eyebrow">AUTHOR / REUSABLE PRACTICE</p>

## What do we want to teach it?

<ol class="lab-steps"><li>Pick a task your team repeats. What do you expect from it?</li><li>Say when to use it, and when not to.</li><li>Write down your team’s steps, sources, and checks.</li><li>Set clear limits. Put long references in separate files.</li><li>Try it, review what happened, and improve it with your team.</li></ol><p class="lab-caption">Keep it focused. There’s no single set of headings every skill needs.</p>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: start with an actual team need, not a desire to create more configuration files. Source: /Users/khaliasa/Code/personal/projects/ai-workflows-workshop/ai-lab/workshops/ai-workflows/.cursor/skills/atlassian-requirements/SKILL.md. https://cursor.com/docs/skills For SKILL.md use required name and description frontmatter; name matches parent directory. Purpose plus trigger belongs in description. Choose strictness to match risk. Verify output even if activation is correct. The Git example comes from AI Studio; inspect its actual installation and tailor it for the workshop repository. Authoring reference: https://agentskills.io/specification</aside>

---

<!-- .slide: id="rules" -->

<p class="lab-eyebrow">RULES / THE BASICS</p>

## Rules

<div class="lab-grid lab-grid--three"><div class="lab-panel"><p class="lab-number">01</p><h3>What it is</h3><p>Guidelines for how the agent should work in your project.</p></div><div class="lab-panel"><p class="lab-number">02</p><h3>When to use it</h3><p>You keep repeating the same coding or team conventions.</p></div><div class="lab-panel"><p class="lab-number">03</p><h3>What to check</h3><p>Did it read the right rules? Did it follow them?</p></div></div>

<div class="lab-observation"><p><strong>In this workshop:</strong> Write down a testing convention and decide which code changes it should apply to.</p></div>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: make ongoing coding/testing expectations explicit and choose when they apply. This is illustrative guidance, not company policy or enforcement. Source: /Users/khaliasa/Code/personal/projects/ai-workflows-workshop/ai-lab/workshops/ai-workflows/.cursor/rules/vue-component-tests.mdc. https://cursor.com/docs/rules . Illustrative convention only. Changes in behavior or meaningful rendered output warrant focused coverage. Cosmetic-only changes may not warrant new tests; explain why. Rules are contextual guidance, not CI enforcement.</aside>

--

<!-- .slide: id="rule-example" -->

<p class="lab-eyebrow">RULES / WORKSHOP EXAMPLE</p>

## One example: our testing expectations

<div class="lab-annotation">

<pre><code class="language-yaml">---
description: &gt;-
  When changing Vue app behavior or
  user-visible output, review and update
  Vitest coverage in src/ as appropriate.
globs: src/**/*.vue
alwaysApply: false
---</code></pre><div class="lab-panel"><h3>When working with a Vue file</h3><p>Read existing tests.<br/>Check what the tests should cover.<br/>Update tests where needed.<br/>Run <code>npm test</code>.</p><p class="text-warning">Check that the rule was included and the agent followed it.</p></div></div>

<p class="lab-caption">An example convention for this exercise. Adapt it to your team’s actual practice.</p>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>


<aside class="notes">Focus: show one convention expressed in a file; inspect attachment and behavior separately. Exact frontmatter excerpt from /Users/khaliasa/Code/personal/projects/ai-workflows-workshop/ai-lab/workshops/ai-workflows/.cursor/rules/vue-component-tests.mdc. Right-hand instructions summarize the body. A description on this globbed rule does not create a second independent activation mode. https://cursor.com/docs/rules</aside>


--

<!-- .slide: id="rule-modes" -->

<p class="lab-eyebrow">RULES / OPTIONAL DETAIL</p>

## When should this guidance apply?

<table class="lab-table"><thead><tr><th>Mode</th><th>Settings at the top of the file</th><th>Trigger</th></tr></thead><tbody><tr><td>Always</td><td><code>alwaysApply: true</code></td><td>Every chat</td></tr><tr><td>Specific files</td><td><code>false</code> + <code>globs</code></td><td>Matching file in context</td></tr><tr><td>Agent selected</td><td><code>false</code> + description, no globs</td><td>Agent decides it would help</td></tr><tr><td>Manual</td><td><code>false</code>, no description or globs</td><td><code>@rule-name</code></td></tr></tbody></table><p class="lab-caption">“false” refers to alwaysApply. With globs set, matching files decide when the rule is included.</p>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: choose scope deliberately so the right guidance appears for the right work. https://cursor.com/docs/rules . Always takes precedence; with alwaysApply false, provided globs determine file attachment. Explain attachment separately from compliance. Current skills docs also document migration of eligible agent-selected rules into skills.</aside>

---

<!-- .slide: id="hooks" -->

<p class="lab-eyebrow">HOOKS / THE BASICS</p>

## Hooks

<div class="lab-grid lab-grid--three"><div class="lab-panel"><p class="lab-number">01</p><h3>What it is</h3><p>A way to run an action when the agent starts, edits a file, or finishes.</p></div><div class="lab-panel"><p class="lab-number">02</p><h3>When to use it</h3><p>You want something to happen automatically before or after an agent action.</p></div><div class="lab-panel"><p class="lab-number">03</p><h3>What to check</h3><p>Did it run at the right time? What happened if it failed?</p></div></div>

<div class="lab-observation"><p><strong>In this workshop:</strong> Take a check we keep repeating and try running it automatically at the right moment.</p></div>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: automate a repeated team check only when the event and cost make sense. Preserve the unverified-demo caveat in the detail slide. Source: /Users/khaliasa/Code/personal/projects/ai-workflows-workshop/ai-lab/workshops/ai-workflows/.cursor/hooks.json and .cursor/hooks/after-src-edit.mjs. https://cursor.com/docs/hooks . Intended quick test runs src/App.test.js and exits zero. This is not a complete suite or CI gate. Demo requires separate repair/rehearsal: absolute file_path versus relative-path regex, matcher, and Agent/Tab distinction.</aside>

--

<!-- .slide: id="hook-example" -->

<p class="lab-eyebrow">HOOKS / WORKSHOP EXAMPLE</p>

## One example: a quick test after an edit

<div class="lab-flow"><p>Agent edit<br/><code>afterFileEdit</code></p><span aria-hidden="true">→</span><p>Hook script<br/>Check which file changed</p><span aria-hidden="true">→</span><p>Run one test file<br/>Show the result</p></div><div class="lab-observation"><p><span class="emphasis-warning">Rehearsal needed.</span> Cursor sends the full file path; our script expects it to start with <code>src/</code>.</p></div><p class="lab-caption">This script doesn’t stop the agent if tests fail. Read the test output and run final checks too.</p>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: a quick test is an example of a repeated check, not a claim that every hook runs tests or that this hook already works live. Exact source expression: /^src\/.*\.(vue|test\.js)$/. Source /Users/khaliasa/Code/personal/projects/ai-workflows-workshop/ai-lab/workshops/ai-workflows/.cursor/hooks/after-src-edit.mjs. Config matcher is Write|TabWrite. Current docs distinguish afterFileEdit from afterTabFileEdit; do not infer Tab coverage from matcher text. Show the source live and inspect real payload before demo. Workshop repo fixes remain separate. https://cursor.com/docs/hooks</aside>

--

<!-- .slide: id="hook-events" -->

<p class="lab-eyebrow">HOOKS / OPTIONAL DETAIL</p>

## Where does the check belong?

<table class="lab-table"><thead><tr><th>Moment</th><th>Selected events</th></tr></thead><tbody><tr><td>Session / prompt</td><td><code>sessionStart</code>, <code>sessionEnd</code>, <code>beforeSubmitPrompt</code></td></tr><tr><td>Shell / tools</td><td><code>beforeShellExecution</code>, <code>afterShellExecution</code><br/><code>beforeMCPExecution</code>, <code>afterMCPExecution</code></td></tr><tr><td>Files</td><td><code>beforeReadFile</code>, <code>afterFileEdit</code></td></tr><tr><td>Agent finishes</td><td><code>stop</code></td></tr><tr><td>Tab specifically</td><td><code>beforeTabFileRead</code>, <code>afterTabFileEdit</code></td></tr></tbody></table><p class="lab-caption">Choose a moment that fits the practice. Then check what that event lets the hook do.</p>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: place automation where it helps the workflow; do not present the event list as a checklist everyone must implement. https://cursor.com/docs/hooks . Selected categories, not an exhaustive catalogue. Subagent lifecycle events are deliberately left out here because subagents are introduced next. Once that concept is introduced, you can mention subagentStart and subagentStop if useful. Check installed Cursor version, event availability, input/output schema and failure semantics. Do not assume that an after-event can prevent an action already completed.</aside>

---

<!-- .slide: id="subagents" -->

<p class="lab-eyebrow">SUBAGENTS / THE BASICS</p>

## Subagents

<div class="lab-grid lab-grid--three"><div class="lab-panel"><p class="lab-number">01</p><h3>What it is</h3><p>Another agent that takes on part of the work and reports back.</p></div><div class="lab-panel"><p class="lab-number">02</p><h3>When to use it</h3><p>You want a task handled separately, or several tasks worked on at once.</p></div><div class="lab-panel"><p class="lab-number">03</p><h3>What to check</h3><p>What it was asked to do, what information it had, and what it found.</p></div></div>

<div class="lab-observation"><p><strong>In this workshop:</strong> Give a reviewer clear expectations for checking our work and reporting what still needs attention.</p></div>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: give a delegated reviewer the team expectations, inputs and reporting requirements it needs. Source: /Users/khaliasa/Code/personal/projects/ai-workflows-workshop/ai-lab/workshops/ai-workflows/.cursor/agents/pr-readiness-reviewer.md. https://cursor.com/docs/subagents . Explicitly request Use the pr-readiness-reviewer subagent on my changes. Provide ticket criteria and relevant diff context. Separate context has startup/token costs, and does not guarantee better accuracy. Review is not automatic PR approval.</aside>

--

<!-- .slide: id="reviewer" -->

<p class="lab-eyebrow">SUBAGENTS / WORKSHOP EXAMPLE</p>

## One example: our review checklist

<div class="lab-annotation"><pre><code class="language-yaml">---
name: pr-readiness-reviewer
description: &gt;-
  Read-only review of local changes
  against ticket acceptance criteria, …
readonly: true
---</code></pre><div class="lab-panel"><h3>The report we ask for</h3><p>What it checked, with proof<br/>What it couldn’t check<br/>Problems it found<br/>What we should do next<br/>Its conclusion and why</p></div></div><p class="lab-caption"><code>readonly: true</code> limits changes the subagent can make. Still check its tool use and permissions.</p>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: the review file encodes what we ask a reviewer to check and report. The human still assesses the findings. Abbreviated description excerpt from /Users/khaliasa/Code/personal/projects/ai-workflows-workshop/ai-lab/workshops/ai-workflows/.cursor/agents/pr-readiness-reviewer.md. Body output sections summarized. Cursor docs define readonly as restricted write permissions: no edits or state-changing shell commands. The local source understates this as intent; teach documented restrictions without claiming all possible external side effects are impossible. Tests may need tool permission; report unavailable checks honestly. https://cursor.com/docs/subagents</aside>

---

<!-- .slide: id="skill-or-agent" -->

<p class="lab-eyebrow">CHOOSE / CONTEXT & RESPONSIBILITY</p>

## A skill or another agent?

<div class="lab-grid"><div class="lab-panel"><p class="lab-number">01</p><h3>Use a skill</h3><p>Share the steps the current agent should follow.<br/><strong>Example:</strong> gathering requirements.</p></div><div class="lab-panel"><p class="lab-number">02</p><h3>Consider a subagent</h3><p>Give a specialist a separate task, with the information it needs.<br/><strong>Example:</strong> reviewing a diff.</p></div></div><div class="lab-observation"><p>You can use both. Another agent takes extra time and tokens, and its work still needs checking.</p></div>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: reusable task instructions versus a separately delegated responsibility; these choices can complement each other. https://cursor.com/docs/skills and https://cursor.com/docs/subagents . Avoid teaching that every complex task needs a subagent or that independent context implies superior correctness. The decision is about procedure versus responsibility and context needs.</aside>

---

<!-- .slide: id="commands" -->

<p class="lab-eyebrow">COMMANDS / THE BASICS</p>

## Commands

<div class="lab-grid lab-grid--three"><div class="lab-panel"><p class="lab-number">01</p><h3>What it is</h3><p>Saved prompts you can run by name.</p></div><div class="lab-panel"><p class="lab-number">02</p><h3>When to use it</h3><p>You use the same request often and want a shortcut.</p></div><div class="lab-panel"><p class="lab-number">03</p><h3>What to check</h3><p>What prompt it used, what it did, and whether it helped.</p></div></div>

<div class="lab-observation"><p><strong>In this workshop:</strong> Compare ways to start a repeatable team task. Our skill can be chosen by Cursor or called with <code>/</code>.</p></div>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: a named entry point can make a team workflow easier to repeat. No custom command is checked in; the workshop skill is available for automatic selection and can also be explicitly invoked. Historical commands format: .cursor/commands/name.md; https://cursor.com/changelog/1-6 . Current migration guidance: https://cursor.com/docs/skills . No custom command directory is shipped in this workshop. /mb-ticket is from an older rehearsal and must not be presented as current.</aside>

--

<!-- .slide: id="slash-entry" -->

<p class="lab-eyebrow">COMMANDS / OPTIONAL DETAIL</p>

## What does typing / actually run?

<div class="lab-grid"><div class="lab-panel"><p class="lab-number">01</p><h3>Custom command</h3><p>Traditionally: <code>.cursor/commands/name.md</code><br/>A saved prompt you choose to run.</p></div><div class="lab-panel"><p class="lab-number">02</p><h3>A skill Cursor can choose</h3><p><code>disable-model-invocation: false</code><br/>Cursor can choose it for a relevant task.<br/>You can also use <code>/atlassian-requirements</code>.</p></div></div><div class="lab-observation"><p>A useful shortcut should tell the agent how we want the work done. Typing / alone doesn’t tell us whether it is a command or a skill.</p></div>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: distinguish how a workflow is started from the instructions and role behind it. https://cursor.com/docs/skills documents /migrate-to-skills and preserving manual invocation for commands. Historical source: https://cursor.com/changelog/1-6 . There is no custom command implementation in the current workshop. Do not demonstrate a migration or add a command just for symmetry.</aside>

---

<!-- .slide: id="choose" -->

<p class="lab-eyebrow">PRACTICE / WHICH TOOL FITS?</p>

## Which part of our workflow needs help?

<table class="lab-table"><thead><tr><th>Need</th><th>Consider</th><th>Check</th></tr></thead><tbody><tr><td>Read from or use another tool</td><td>MCP</td><td>What it accessed and brought back</td></tr><tr><td>Share the steps for a team task</td><td>Skill</td><td>Did it use the skill? Did it help?</td></tr><tr><td>Apply our coding conventions</td><td>Rule</td><td>Did it get the rules and follow them?</td></tr><tr><td>Automate a repeated check</td><td>Hook</td><td>What triggered it? Did it run?</td></tr><tr><td>Give part of the work to another agent</td><td>Subagent</td><td>What it was told and what it found</td></tr><tr><td>Save a request the team repeats</td><td>Command / explicit skill call</td><td>What typing / actually runs</td></tr></tbody></table>

<div class="lab-observation"><p>Which addition made our expectations clearer or saved repetition?<br/>Compare with the first run, using what we actually checked.</p></div>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: choose the smallest useful addition for a team need and justify it with observations, not feature count. All six concepts have now been introduced. Compare with the baseline only for additions actually configured and tried: inspect skill/rule inclusion, hook output, and the reviewer’s evidence. Do not assume every participant enabled every example. Return to the map as needed. These are choices, not a requirement to use every feature. Some needs are satisfied by a clear prompt and existing tools. Ask participants to justify the smallest useful addition.</aside>

---

<!-- .slide: id="breakout" -->

<p class="lab-eyebrow">BREAKOUT / TRY IT</p>

## Teach it one practice from your team.

<ol class="lab-steps"><li>Pick something your team often has to explain or check.</li><li>Write a skill or rule using your team’s own expectations.</li><li>Try it in fresh chats, including a task it shouldn’t apply to.</li><li>Check whether it was used and what happened. Improve it once.</li></ol><div class="lab-observation"><p>Bring back the practice you chose, your draft, and what you learned from trying it.</p></div><p class="lab-caption">≈30 minutes · Work individually or with others · Keep the task small</p>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: participants use their own team practice; they are not required to copy the Atlassian example or finish another app feature. Confirmed breakout direction from planning conversation. Skill: use disable-model-invocation: false and compare relevant vs unrelated prompts without naming the skill. Inspect selection and execution separately. Rule: matching vs non-matching context, with no always-on setting if testing file scope. Use illustrative conventions and local work; no live PR or external write is required. Possible tasks: requirements handover, test-review guidance, team Git conventions. Room size and grouping remain flexible.</aside>

--

<!-- .slide: id="practice-tests" -->

<p class="lab-eyebrow">BREAKOUT / OPTIONAL TEST GUIDE</p>

## Try a case where it shouldn’t apply.

<div class="lab-grid">
<div class="lab-panel"><p class="lab-number">01 / SKILL</p><h3>Relevant vs. unrelated</h3><p>Try a task it should help with.<br/>Try one it should leave alone.<br/>Did it use the skill and follow your team’s steps?</p></div>
<div class="lab-panel"><p class="lab-number">02 / RULE</p><h3>Matching vs. non-matching</h3><p>Try a file the rule should apply to.<br/>Then try a file it shouldn’t apply to.<br/>Was the rule included? Did the work meet your expectations?</p></div>
</div>

<div class="lab-observation"><p>Use <code>disable-model-invocation: false</code>.<br/>Try fresh chats without naming the skill. Did Cursor choose it when it should?</p></div>

<a class="lab-return" href="#/breakout">↗ Breakout instructions</a>

<aside class="notes">Focus: test both when instructions should apply and when they should not, then check whether the work matches the intended team practice. For the workshop skill use disable-model-invocation: false. Test relevant and unrelated prompts in fresh chats without a slash invocation. Inspect actual selection and resulting behavior. A slash invocation can help test execution separately, but it does not demonstrate automatic selection. For a globbed rule use matching and non-matching files in separate contexts; inspect the actual attached context and resulting behavior. Relevant/unrelated outcomes are observations, not guarantees. Return to the holding slide while participants work.</aside>

---

<!-- .slide: id="report-back" -->

<p class="lab-eyebrow">DISCUSS / COMPARE NOTES</p>

## Show us what you noticed.

<div class="lab-grid lab-grid--three"><div class="lab-panel"><p class="lab-number">01</p><h3>What you tried</h3><p>What team practice did you choose?<br/>Why a skill or a rule?</p></div><div class="lab-panel"><p class="lab-number">02</p><h3>What happened</h3><p>Did it use your instructions?<br/>What did you check in the result?</p></div><div class="lab-panel"><p class="lab-number">03</p><h3>What you’d change</h3><p>What would you change before sharing it?<br/>Who would keep it up to date?</p></div></div><div class="lab-observation"><p>Would someone else on your team find this useful? What would they need to know?</p></div>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: discuss usefulness, limits and maintenance before suggesting a practice be shared. Invite concise reports; do not make every group demonstrate its entire chat. Discuss context gaps, tool access, automation cost and what might be reusable across teams. No predetermined success claim.</aside>

---

<!-- .slide: id="takeaways" -->

<p class="lab-eyebrow">REFLECT / TEAM PRACTICE</p>

## Make your team’s way of working reusable.

<ol class="lab-steps"><li>Start with something your team keeps having to explain.</li><li>Choose how to share the steps, guidance, or checks.</li><li>Write down what your team expects. Keep it small.</li><li>Try it, review the result, and maintain it together.</li></ol><div class="lab-observation"><p>The agent can help do the work. We still decide whether it meets our expectations.</p></div>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: leave with a small practice the team can own and improve; do not promise perfect compliance or fully autonomous delivery. Separate customization guidance from access controls and enforcement. The baseline was capable already. Human judgment still owns acceptance criteria, behavior, appropriate tests, permissions and whether automation is worth its cost.</aside>

---

<!-- .slide: id="questions" -->

<p class="lab-eyebrow">RESOURCES / KEEP EXPLORING</p>

## Questions? What will you try next?

<div class="lab-grid lab-grid--three lab-map"><a href="https://cursor.com/docs/skills"><strong>Skills</strong><span>Official Cursor documentation ↗</span></a><a href="https://cursor.com/docs/rules"><strong>Rules</strong><span>Official Cursor documentation ↗</span></a><a href="https://cursor.com/docs/hooks"><strong>Hooks</strong><span>Official Cursor documentation ↗</span></a><a href="https://cursor.com/docs/subagents"><strong>Subagents</strong><span>Official Cursor documentation ↗</span></a><a href="https://cursor.com/docs/mcp"><strong>MCP</strong><span>Official Cursor documentation ↗</span></a><a href="https://agentskills.io/specification"><strong>Agent Skills</strong><span>The shared skill file format ↗</span></a></div><p class="lab-caption">Keep the participant README beside Cursor.<br/>Which practice would you teach your agent first?</p>

<a class="lab-return" href="#/concept-map">↗ Concept map</a>

<aside class="notes">Focus: invite the next team practice to try, along with questions about where these mechanisms help or fall short. Documentation checked 25 November 2026. No event date or feedback QR supplied. Do not reuse another event’s QR. Remaining rehearsal: live VPN/OAuth/tool/image access, hook payload/matcher/Agent-vs-Tab behavior, guided timing, and optional reviewer checks. Workshop source remains untouched.</aside>
