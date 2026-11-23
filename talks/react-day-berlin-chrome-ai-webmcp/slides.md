<!--
audience: public
-->

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">THE POSSIBILITIES</p>

<p class="chrome-question">What are the possible ways of adding AI capabilities to a web application?</p>

<aside class="notes">

- Ask the question, allow a brief pause, then introduce the familiar paths. This is a recording, so do not wait for audience answers.

</aside>

--

<!-- .slide: class="center-slide"  -->

<p class="chrome-kicker">THE TEST</p>

<div class="chrome-card-grid">
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">PROVIDER</p>
    <h3>AI provider SDK</h3>
    <p>The frontend calls a managed AI provider directly through its SDK or API.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">BACKEND</p>
    <h3>Backend API</h3>
    <p>The frontend calls an application backend or MCP server, which orchestrates the AI request.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">LOCAL</p>
    <h3>Self-hosted model</h3>
    <p>A local runtime such as Ollama or an on-premise service runs the model.</p>
  </div>
</div>

<p class="chrome-question fragment fade-up">Is there anything else?</p>

<aside class="notes">

- Briefly describe the three familiar approaches and ask: “Is there anything else?”
- Reveal the browser-managed path on the next slide; leave the hands-on tour until after the API overview.

</aside>

--

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">THE ANSWER</p>

## AI, built into Chrome

<p class="chrome-subtitle fragment fade-up">Chrome runs AI models on your device.</p>

<aside class="notes">

- Introduce Chrome built-in AI for the first time.
- Explain “browser-managed”: Chrome exposes the API, handles capability checks, and downloads the required model when the user initiates it.
- Call it a Chrome-provided browser API, not a general Web API. It can be used by web pages, but it is not a cross-browser platform capability today.
- Clarify that this is a new architectural option, not a replacement for every cloud model.
- Mention that after the model is available, inference can run without sending the user’s content to an AI provider.

</aside>

---

<!-- .slide: class="center-slide" -->

## The new stack

<div class="chrome-flow">
  <div class="chrome-flow__node" data-id="architecture-ui">
    <p>Frontend UI</p>
  </div>
  <div class="chrome-flow__arrow">→</div>
  <div class="chrome-flow__node" data-id="architecture-middle">
    <p>Backend / provider</p>
    <small>network + infrastructure</small>
  </div>
  <div class="chrome-flow__arrow">→</div>
  <div class="chrome-flow__node">
    <p>Remote model</p>
  </div>
</div>

<div class="chrome-flow fragment fade-up">
  <div class="chrome-flow__node" data-id="architecture-ui">
    <p>Frontend UI</p>
  </div>
  <div class="chrome-flow__arrow">→</div>
  <div class="chrome-flow__node chrome-flow__node--active" data-id="architecture-middle">
    <p>Chrome built-in AI API</p>
  </div>
  <div class="chrome-flow__arrow">→</div>
  <div class="chrome-flow__node">
    <p>Browser-managed model</p>
  </div>
</div>

<aside class="notes">

- Walk through the familiar path first.
- Reveal the second path and call it an additional architecture available to frontend engineers.
- Be precise with the name: this is a Chrome-provided built-in AI API, not a general Web API. It is accessed from page JavaScript, but its current support and model lifecycle are Chrome-specific.
- The browser path removes the application’s inference backend for suitable tasks, but model availability remains capability-dependent.

</aside>

--

<!-- .slide: class="center-slide" -->

## One platform, different maturity levels

<p class="chrome-kicker">CURRENT STATUS · STABLE</p>

<div class="chrome-status-grid chrome-status-grid--two fragment fade-up" data-fragment-index="1">
  <div class="chrome-status">
    <h3>Translator</h3>
    <p>Translate dynamic or user-generated text on the device.</p>
    <p class="chrome-status__milestone">Chrome 138 · Web + extensions · No flag</p>
  </div>
  <div class="chrome-status">
    <h3>Language Detector</h3>
    <p>Rank the likely languages in a piece of text, with confidence scores.</p>
    <p class="chrome-status__milestone">Chrome 138 · Web + extensions · No flag</p>
  </div>
  <div class="chrome-status">
    <h3>Summarizer</h3>
    <p>Condense long content into a shorter summary.</p>
    <p class="chrome-status__milestone">Chrome 138 · Web + extensions · No flag</p>
  </div>
  <div class="chrome-status">
    <h3>Prompt <small>(LanguageModel)</small></h3>
    <p>Run open-ended language tasks with Chrome's local foundation model.</p>
    <p class="chrome-status__milestone">Web: Chrome 148 · Extensions: Chrome 138 · No flag</p>
  </div>
</div>

<div class="chrome-boundary chrome-boundary--compact fragment fade-up" data-fragment-index="2">
  <p><strong>Prompt sampling parameters are separate:</strong> stable for extensions in Chrome 148; still an Origin Trial on the web.</p>
</div>

<p class="chrome-source fragment fade-up" data-fragment-index="1">Sources: Chrome built-in AI API catalog <a href="https://developer.chrome.com/docs/ai/built-in-apis" target="_blank">[1]</a> and Prompt API <a href="https://developer.chrome.com/docs/ai/prompt-api" target="_blank">[2]</a> · reviewed 10 November 2026</p>

<aside class="notes">

- These are the four APIs currently listed as stable in Chrome's public catalog.
- Briefly name what each API does; do not teach its integration here.
- Prompt is stable later on the web than in extensions.
- The optional sampling-parameter extension has its own availability status.
- Stable means shipped, not guaranteed to run on every device. The final slide in this stack explains the remaining gates.

</aside>

--

<!-- .slide: class="center-slide" -->

## The remaining are in developer trial

<p class="chrome-kicker">CURRENT STATUS · NO STABLE MILESTONE ANNOUNCED</p>

<div class="chrome-api-list fragment fade-up" data-fragment-index="1">
  <div class="chrome-api-row">
    <div>
      <h3>Writer</h3>
      <p>Create a new draft from an idea and optional context.</p>
    </div>
    <div class="chrome-api-row__history">
      <strong>Past Origin Trial</strong>
      <span>Chrome 137–148</span>
    </div>
    <div class="chrome-api-row__flags">
      <strong>Local testing flag</strong>
      <code>#writer-api</code>
    </div>
  </div>
  <div class="chrome-api-row">
    <div>
      <h3>Rewriter</h3>
      <p>Revise existing text for tone, length, or structure.</p>
    </div>
    <div class="chrome-api-row__history">
      <strong>Past Origin Trial</strong>
      <span>Chrome 137–148</span>
    </div>
    <div class="chrome-api-row__flags">
      <strong>Local testing flag</strong>
      <code>#rewriter-api</code>
    </div>
  </div>
  <div class="chrome-api-row">
    <div>
      <h3>Proofreader</h3>
      <p>Find grammar, spelling, and punctuation issues with correction ranges.</p>
    </div>
    <div class="chrome-api-row__history">
      <strong>Past Origin Trial</strong>
      <span>Chrome 141–145</span>
    </div>
    <div class="chrome-api-row__flags">
      <strong>Local testing flag</strong>
      <code>#proofreader-api</code>
    </div>
  </div>
</div>

<p class="chrome-source fragment fade-up" data-fragment-index="1">Sources: Chrome Writer <a href="https://developer.chrome.com/docs/ai/writer-api" target="_blank">[3]</a>, Rewriter <a href="https://developer.chrome.com/docs/ai/rewriter-api" target="_blank">[4]</a>, and Proofreader <a href="https://developer.chrome.com/docs/ai/proofreader-api" target="_blank">[5]</a> API documentation · reviewed 10 November 2026</p>

<aside class="notes">

- "Developer trial" is the current public status for all three APIs.
- The version ranges shown are historical Origin Trial windows. They are not current promises of production availability.
- Google has not published a stable Chrome milestone or a dependable time-to-stable estimate for these APIs.
- These are local testing flags, not a promise of general availability. Writer and Rewriter document Enabled or Enabled Multilingual. Check the current setup before presenting.
- Spend about ten seconds per row: name, purpose, past trial window, and local setup.

</aside>

---

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">PRACTICAL TOUR · BROWSER DEMO</p>

## AI in everyday interfaces

<aside class="notes">

- Switch to the practical-experiences build of the playground. Prepare the exact build and models in advance; do not assume the public deployment contains this branch.
- Tour the seven tabs: Translator article selection, Language Detector community feed, Summarizer discussion catch-up, Prompt product comparison, Writer event announcement, Rewriter message editor, and Proofreader inline suggestions.
- Give translation and discussion catch-up the most time. For the remaining examples, show the user interaction and outcome briefly; explain that Writer, Rewriter and Proofreader are trials.
- If time is tight, shorten the tour rather than rushing the code or the WebMCP explanation. Return to slides after the tour.

</aside>

---

<!-- .slide: class="center-slide" -->

## The integration journey

<div class="chrome-availability"><code>detect</code><span>→</span><code>availability</code><span>→</span><code>create</code><span>→</span><code>run</code><span>→</span><code>cleanup</code></div><div class="chrome-boundary"><p>Browser version is a setup check. Runtime feature detection and availability determine what this user can do.</p></div>

--

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">ONE EXAMPLE · SUMMARIZER</p>

## From a user action to a summary

<pre class="chrome-code chrome-code--narrow"><code class="language-javascript">const options = {
  type: 'key-points', format: 'plain-text', length: 'short',
  expectedInputLanguages: ['en'], outputLanguage: 'en'
};

if (!('Summarizer' in self)) { showFallback(); return; }

const status = await Summarizer.availability(options);

if (status === 'unavailable') { showFallback(); return; }

// Start from a user action; show download progress if needed.
const summarizer = await Summarizer.create(options);

try { showSummary(await summarizer.summarize(discussion)); }
finally { summarizer.destroy(); }</code></pre>
<p class="chrome-source">Simplified for presentation · <a href="https://developer.chrome.com/docs/ai/summarizer-api">Summarizer API</a></p>

<aside class="notes">

- Trace the discussion example: feature detect, check availability with the same options, create, summarize, release.
- showFallback and showSummary represent application UI. In React, put results and loading/errors in state; clean up on unmount and cancellation.
- A downloadable or downloading model needs user-facing preparation and progress; creation can fail, so handle errors in real code. The real project wraps lifecycle and progress in hooks.
- Other APIs share the broad journey, but their options, methods and lifetimes differ.

</aside>

--

<!-- .slide: class="center-slide" data-visibility="hidden" -->

## Detection and availability

<div class="chrome-detection-grid">
  <div class="chrome-detection-step">
    <p class="chrome-card__eyebrow">1 · DETECT</p>
    <h3>Is the API here?</h3>
    <code>'Summarizer' in self</code>
    <p>If not, offer a fallback.</p>
  </div>
  <div class="chrome-detection-step">
    <p class="chrome-card__eyebrow">2 · AVAILABILITY</p>
    <h3>Can it run with these options?</h3>
    <code>Summarizer.availability(options)</code>
    <p>Check the result before creating.</p>
  </div>
</div>
<div class="chrome-availability-states">
  <div><strong>unavailable</strong><p>The device or options aren't supported. Offer a fallback.</p></div>
  <div><strong>downloadable</strong><p>A download is needed before the model can be used.</p></div>
  <div><strong>downloading</strong><p>The download is in progress. Keep the user informed.</p></div>
  <div><strong>available</strong><p>The model is ready. Create a session and run the task.</p></div>
</div>
<p class="chrome-source"><a href="https://developer.chrome.com/docs/ai/get-started#model-download">Chrome model download and availability</a></p>

<aside class="notes">

- Detection only checks whether the browser exposes the API. It does not establish that this device can use the requested configuration.
- availability(options) asks whether this configuration can run now or needs a download. unavailable means the device or options are unsupported; downloadable means a download is needed; downloading means it is underway; available means a session can be created immediately.
- downloading is a status, not a percentage. Listen for downloadprogress while creating to display progress; begin preparation from a user action when required.
- Use the same capability options when checking and creating. See Chrome's Summarizer guide for the monitor example.

</aside>

---

<!-- .slide: class="center-slide" -->

## Local-first is a trade-off

<div class="chrome-card-grid">
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">MODEL POWER</p>
    <h3>Focused work, not every hard problem</h3>
    <p>Local models suit bounded tasks. Complex reasoning and broad context may still need a stronger model or a different design.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">REACH</p>
    <h3>Support is not universal</h3>
    <p>Chrome version is only one gate. OS, hardware, storage, language support, and model state decide whether it can run.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">FIRST USE</p>
    <h3>Downloads are part of the product</h3>
    <p>Model preparation can take time, needs storage and an unmetered connection, and may be repeated after storage pressure.</p>
  </div>
</div>

<div class="chrome-boundary">
  <p><strong>Privacy and offline use after setup are valuable—not a guarantee of correctness, capability, or universal availability.</strong></p>
</div>

<p class="chrome-source">Source: Chrome built-in AI requirements and model lifecycle <a href="https://developer.chrome.com/docs/ai/get-started" target="_blank">Chrome documentation</a> · reviewed 10 November 2026</p>

<aside class="notes">

- This is the honest close to the built-in AI section, not an argument against it.
- Local models are a great fit for constrained product tasks. Do not promise cloud-model breadth, long-context analysis, or perfect outputs.
- Chrome documents requirements around desktop support, hardware, storage, language, model download, and model eviction under storage pressure.
- Inference can work offline after preparation; loading the page and downloading or updating models may still use the network.
- Say clearly: local processing can improve data locality and enable offline use after setup; it does not solve hallucinations or output validation.

</aside>

---

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">BUT THERE IS MORE</p>

## The browser can help the app think.

<p class="chrome-question fragment fade-up">What if the app could also tell an agent what it can do?</p>

<aside class="notes">

- Transition from browser-managed inference to a different idea: structured page actions for agents.
- WebMCP is not another model API, and does not require Chrome built-in AI.

</aside>

--

<!-- .slide: class="center-slide" data-visibility="hidden" -->

## MCP Server today

<div class="chrome-flow">
  <div class="chrome-flow__node">
    <p>AI agent</p>
  </div>
  <div class="chrome-flow__arrow">→</div>
  <div class="chrome-flow__node chrome-flow__node--active">
    <p>MCP server</p>
  </div>
  <div class="chrome-flow__arrow">→</div>
  <div class="chrome-flow__node">
    <p>Backend capability</p>
    <small>API · database · service</small>
  </div>
</div>

<div class="chrome-boundary">
  <p>MCP servers can expose tools from services and other environments.</p>
</div>

<aside class="notes">

- Give only the background needed for the comparison.
- An MCP server exposes named tools with descriptions and schemas.
- The agent discovers and calls those tools instead of guessing through an interface.
- Avoid a protocol deep dive.

</aside>

--

<!-- .slide: class="center-slide" -->

## Meet <span class="highlight highlight-accent">WebMCP</span>

<div class="chrome-card-grid chrome-card-grid--two fragment fade-up" data-fragment-index="1">
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">WHAT IT IS</p>
    <h3>Tools from the website itself</h3>
    <p>An experimental browser API that lets a page expose named, structured actions to compatible agents.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">WHAT IT IS NOT</p>
    <h3>Not another model or backend</h3>
    <p>WebMCP is not an AI model, not an MCP server, and not a replacement for server-side authorization.</p>
  </div>
</div>

<div class="chrome-boundary fragment fade-up" data-fragment-index="2">
  <p><strong>The page keeps its human interface and owns every effect. WebMCP gives compatible agents a clearer way to ask for an action.</strong></p>
</div>

<aside class="notes">

- This is the definition slide. Let the audience read it before showing another architecture diagram.
- Say: “MCP servers commonly expose backend capabilities. WebMCP is the browser-side complement: it lets a website describe actions from its own page.”
- Be precise: it is a Chrome-provided experimental browser API, not a general Web API standard today.
- It does not run a model, replace a backend, or grant permission to act. The page and server still own validation, authorization, and the visible user experience.
- The next slide makes the architectural difference concrete.

</aside>

--

<!-- .slide: class="center-slide" -->

## The tool contract moves into the page

<div class="chrome-flow">
  <div class="chrome-flow__node">
    <p>AI agent</p>
  </div>
  <div class="chrome-flow__arrow">→</div>
  <div class="chrome-flow__node chrome-flow__node--active">
    <p>Browser + WebMCP</p>
  </div>
  <div class="chrome-flow__arrow">→</div>
  <div class="chrome-flow__node">
    <p>Frontend capability</p>
  </div>
</div>

<div class="chrome-boundary">
  <p>The application is no longer only an interface. It can expose tools for agents.</p>
</div>

<aside class="notes">

- Contrast this with the previous MCP-server diagram: the tool is now declared from the webpage rather than only living behind a separate MCP server.
- Read the flow left to right. The browser is the intermediary: it discovers the page tool and routes a structured call; the page owns validation, state, effects, and user control.
- Stress that the human interface remains present and usable.
- For the imperative route, Chrome exposes the entry points on <code>document.modelContext</code>; their location does not make them generic DOM APIs.
- Brief safety signpost: structured tools make agents more reliable, but authenticated sessions make authorization, prompt-injection protection, and confirmation for consequential actions critical. We will return to that after the examples.
- Next, show the two ways a page can expose that tool. This is the bridge before code—not a claim that WebMCP has only one implementation style.

</aside>

--

<!-- .slide: class="center-slide" -->

## Two ways to expose a tool

<div class="chrome-card-grid chrome-card-grid--two fragment fade-up" data-fragment-index="1">
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">DECLARATIVE</p>
    <h3>Annotate an existing form</h3>
    <p>HTML already describes fields, labels, and validation. Add tool metadata and Chrome derives a tool contract.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">IMPERATIVE</p>
    <h3>Register a JavaScript operation</h3>
    <p>Define a named capability, its input schema, and the function that validates, performs, and reports the action.</p>
  </div>
</div>

<div class="chrome-boundary fragment fade-up" data-fragment-index="2">
  <p><strong>Use the form route when the human UI already contains the action. Use JavaScript when the capability is not naturally a form.</strong></p>
</div>

<aside class="notes">

- This is the missing map before the implementation examples.
- Declarative WebMCP starts with a visible form. Chrome can derive its tool schema from the controls the user already understands.
- Imperative WebMCP starts with an explicit JavaScript operation through Chrome's <code>document.modelContext</code> API. The page registers the public contract and owns what its handler does.
- Neither route is “more agentic.” Pick the one that represents the page capability honestly.
- Say: “Let’s see both in the browser, then compare the code.”

</aside>

---

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">BROWSER DEMO · WEBMCP</p>

## Two ways to expose a tool

<aside class="notes">

- Stay in the browser for both demonstrations. Open the declarative repair desk, then the imperative packing checklist.
- In DevTools → Application → WebMCP, inspect and invoke addRepairRequest with valid name, item, and details. Show the filled form and the required human review and submit; no service request is sent in this local demo.
- Then inspect addPackingItem and call it with {"name":"Travel adapter"}; show the checklist update and result if verified.
- Both can expose useful actions without an agent needing to guess UI controls. These examples have different interfaces and effects: the repair form waits for human review, while the packing tool updates local state. The implementation approaches also differ.
- Manual DevTools invocation demonstrates execution, not agent selection. Verify native imperative invocation and declarative result delivery in the recording profile first.
- Return to the slides for both code examples: HTML annotations first, JavaScript registration second.

</aside>

--

<!-- .slide: class="center-slide" -->

## Declarative: annotate a form

<pre class="chrome-code chrome-code--narrow"><code class="language-html">&lt;form toolname="addRepairRequest"
      tooldescription="Prepare a repair request for review"&gt;
  &lt;label&gt;Name &lt;input name="name" required /&gt;&lt;/label&gt;
  &lt;label&gt;Item &lt;select name="item" required&gt;...&lt;/select&gt;&lt;/label&gt;
  &lt;label&gt;Details &lt;textarea name="details" required&gt;&lt;/textarea&gt;&lt;/label&gt;
  &lt;button type="submit"&gt;Add request&lt;/button&gt;
&lt;/form&gt;</code></pre>
<div class="chrome-boundary chrome-boundary--compact"><p>Named controls describe the input. Without <code>toolautosubmit</code>, a person reviews and submits.</p></div>
<p class="chrome-source">Simplified from the project · <a href="https://developer.chrome.com/docs/ai/webmcp/declarative-api">Declarative WebMCP</a></p>

<aside class="notes">

- Explain the tool name and description, then the familiar named controls. The actual React form also supplies field descriptions and validation.
- Chrome derives a tool schema from the form. The application owns validation, the submit action, and any result delivery.
- This code is illustrative, not a full copy of the React component. The select options and handlers are omitted.

</aside>

--

<!-- .slide: class="center-slide" -->

## Imperative: register a JavaScript tool

<pre class="chrome-code chrome-code--narrow"><code class="language-javascript">const controller = new AbortController();
await document.modelContext.registerTool({
  name: 'addPackingItem',
  description: 'Add an item to the visible packing checklist.',
  inputSchema: {
    type: 'object',
    properties: { name: { type: 'string' } },
    required: ['name'], additionalProperties: false
  },
  execute: async (input) =&gt; addValidatedItem(input)
}, { signal: controller.signal });
// On component cleanup: controller.abort();</code></pre>
<div class="chrome-boundary chrome-boundary--compact"><p>Schema describes input; the handler still validates it and owns the effect.</p></div>
<p class="chrome-source">Simplified from the project · <a href="https://developer.chrome.com/docs/ai/webmcp/imperative-api">Imperative WebMCP</a></p>

<aside class="notes">

- Explain name, description, schema and execute. addValidatedItem represents the app's validation and state update, not an actual exported function.
- React must register with component lifecycle and clean up. The project uses an abort signal; do not claim this is the only possible API.
- Optional current features include outputSchema and annotations; hints do not enforce security or confirmation. Do not imply they are required.

</aside>

---

<!-- .slide: class="center-slide" data-visibility="hidden" -->

## WebMCP: clarity increases responsibility

<div class="chrome-card-grid chrome-card-grid--two fragment fade-up" data-fragment-index="1">
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">USER SESSION</p>
    <h3>Tools can act with real access</h3>
    <p>Agents may act in an authenticated session, affecting real user data.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">UNTRUSTED CONTENT</p>
    <h3>Text can be an attack surface</h3>
    <p>Tool descriptions and outputs may contain prompt injection. Treat untrusted content as data.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">AUTHORIZATION</p>
    <h3>The server stays in charge</h3>
    <p>Validate identity, permissions, input, and state transitions on the server.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">CONSEQUENCE</p>
    <h3>Confirm meaningful actions</h3>
    <p>Use narrow tools, make effects visible, and confirm consequential actions.</p>
  </div>
</div>

<div class="chrome-boundary fragment fade-up" data-fragment-index="2">
  <p><strong>Structured tools reduce ambiguity. They do not remove security boundaries, authorization, or the human in the loop.</strong></p>
</div>

<p class="chrome-source fragment fade-up" data-fragment-index="1">Sources: Chrome WebMCP overview <a href="https://developer.chrome.com/docs/ai/webmcp" target="_blank">[8]</a>, tool security <a href="https://developer.chrome.com/docs/ai/webmcp/secure-tools" target="_blank">[9]</a>, and best practices <a href="https://developer.chrome.com/docs/ai/webmcp/best-practices" target="_blank">[10]</a> · reviewed 23 November 2026</p>

<aside class="notes">

- Use this as the explicit warning after both demos, while the audience can still picture what a tool call does.
- Say: “Structured tools make agents more reliable, but because they operate inside an authenticated user session, authorization, prompt-injection protection, and confirmation for consequential actions become critical.”
- WebMCP's official security guidance calls out malicious instructions in tool definitions and externally sourced tool outputs. LLM safety layers cannot guarantee protection from prompt injection.
- WebMCP does not change backend authorization. A tool call is still an untrusted client request.
- Give a concrete distinction: prefer prepareCancellation and confirmCancellation over one vague manageOrder tool.

</aside>

---

<!-- .slide: class="center-slide" data-visibility="hidden" -->

## Put both changes together

<div class="chrome-flow">
  <div class="chrome-flow__node">
    <p>User intent</p>
  </div>
  <div class="chrome-flow__arrow">→</div>
  <div class="chrome-flow__node chrome-flow__node--active">
    <p>Built-in AI</p>
    <small>understand · transform · generate</small>
  </div>
  <div class="chrome-flow__arrow">→</div>
  <div class="chrome-flow__node chrome-flow__node--active">
    <p>WebMCP tool</p>
    <small>agent performs a visible app action by calling tool</small>
  </div>
</div>

<!-- <div class="chrome-card-grid chrome-card-grid--two">
  <div class="chrome-card fragment fade-up">
    <p class="chrome-card__eyebrow">SUPPORT</p>
    <h3>Understand locally, act explicitly</h3>
    <p>Summarize a request, then expose a validated support action to the agent.</p>
  </div>
  <div class="chrome-card fragment fade-up">
    <p class="chrome-card__eyebrow">PRODUCTIVITY</p>
    <h3>Transform content, update the interface</h3>
    <p>Rewrite or classify content, then call a page-owned tool that keeps state visible.</p>
  </div>
</div> -->

<aside class="notes">

- Present this as an opportunity, not a required coupling.
- Built-in AI can understand or transform content locally.
- WebMCP can expose a deliberate app action to an agent.
- Either can be useful alone; together they suggest browser-native workflows with less infrastructure and less UI guessing.

</aside>

--

<!-- .slide: class="center-slide" -->

## Two ideas to leave with

<div class="chrome-takeaways">
  <div class="chrome-takeaway fragment fade-up" data-fragment-index="1">
    <p class="chrome-takeaway__number">01 · WHERE AI RUNS</p>
    <p>Chrome built-in AI adds a browser-managed, local-first architecture for suitable frontend experiences.</p>
  </div>
  <div class="chrome-takeaway fragment fade-up" data-fragment-index="2">
    <p class="chrome-takeaway__number">02 · HOW AGENTS ACT</p>
    <p>WebMCP lets the frontend expose explicit tools instead of forcing agents to guess through the interface.</p>
  </div>
</div>

<p class="chrome-subtitle fragment fade-up">You do not need to remember every API. Start noticing what is becoming possible inside the browser.</p>

<aside class="notes">

- Deliver the two takeaways slowly and plainly.
- The first changes the architecture available to frontend teams.
- The second changes the relationship between agents and web applications.
- Close with the project link and invite viewers to explore the examples.

</aside>

---

<!-- .slide: class="center-slide" -->

## Questions?

<div class="chrome-resource-layout">
  <div>
    <img class="chrome-qr" src="./assets/images/qr-linkedin-blue.svg" data-chrome-qr="./assets/images/qr-linkedin" alt="QR code linking to Asad Ullah Khalid’s LinkedIn profile" />
    <p class="chrome-qr-label">CONNECT ON LINKEDIN</p>
  </div>
  <div class="chrome-resource-list">
    <div class="chrome-resource">
      <a href="https://chromeai.asadullahkhalid.com/" target="_blank">
        <p>Live playground<br/><code>chromeai.asadullahkhalid.com</code></p>
      </a>
    </div>
    <div class="chrome-resource">
      <a href="https://github.com/asadkhalid305/chrome-ai" target="_blank">
        <p>Source code<br/><code>github.com/asadkhalid305/chrome-ai</code></p>
      </a>
    </div>
    <div class="chrome-resource">
      <a href="https://asadullahkhalid.com" target="_blank">
        <p>Website<br/><code>asadullahkhalid.com</code></p>
      </a>
    </div>
    <div class="chrome-resource">
      <a href="https://slides.asadullahkhalid.com/" target="_blank">
        <p>Slides<br/><code>slides.asadullahkhalid.com</code></p>
      </a>
    </div>
    <div class="chrome-resource">
      <a href="https://developer.chrome.com/docs/ai/built-in-apis" target="_blank">
        <p>Chrome built-in AI<br/><code>developer.chrome.com/docs/ai/built-in-apis</code></p>
      </a>
    </div>
    <div class="chrome-resource">
      <a href="https://developer.chrome.com/docs/ai/webmcp" target="_blank">
        <p>WebMCP<br/><code>developer.chrome.com/docs/ai/webmcp</code></p>
      </a>
    </div>
  </div>
</div>

<aside class="notes">

- Invite people to scan the LinkedIn QR code and try the examples later.
- Point out that the project is a teaching surface: each demo shows capability state, output, code path, and lifecycle.
- Mention the official documentation for both topics. For the recording, invite viewers to pause and scan or use the links.

</aside>

---

<!-- .slide: class="center-slide" data-visibility="hidden" -->

<p class="chrome-kicker">OPTIONAL · DECLARATIVE DEEP DIVE</p>

## From form fields to a tool schema

<pre class="chrome-code chrome-code--narrow"><code class="language-json">{
  "name": "addRepairRequest",
  "inputSchema": {
    "type": "object",
    "properties": {
      "name": { "type": "string" },
      "item": { "type": "string" },
      "details": { "type": "string" }
    },
    "required": ["name", "item", "details"]
  }
}</code></pre>
<p class="chrome-source">Illustrative schema; inspect the actual browser-derived schema in DevTools.</p>

---

<!-- .slide: class="center-slide" data-visibility="hidden" -->

<p class="chrome-kicker">OPTIONAL · DECLARATIVE DEEP DIVE</p>

## Make agent activity visible

<pre class="chrome-code chrome-code--narrow"><code class="language-javascript">document.modelContext.addEventListener('toolactivated', ({ toolName }) =&gt; {
  showAgentState(toolName);
});
document.modelContext.addEventListener('toolcancel', ({ toolName }) =&gt; {
  clearAgentState(toolName);
});</code></pre>
<div class="chrome-boundary"><p>Show when an agent has filled a form and when that action is cancelled.</p></div>
<p class="chrome-source"><a href="https://developer.chrome.com/docs/ai/webmcp/declarative-api#modify_focus_indicator">Chrome declarative guide</a> · UI functions are illustrative</p>

---

<!-- .slide: class="center-slide" data-visibility="hidden" -->

<p class="chrome-kicker">OPTIONAL · DISCOVERY</p>

## Let a page inspect its tools

<pre class="chrome-code chrome-code--narrow"><code class="language-javascript">const tools = await document.modelContext.getTools();
console.table(tools.map(({ name, description, inputSchema }) =&gt;
  ({ name, description, inputSchema })
));
document.modelContext.addEventListener('toolchange', refreshTools);</code></pre>
<div class="chrome-boundary"><p>Page-owned discovery is separate from browser-integrated agent discovery.</p></div>
<p class="chrome-source"><a href="https://developer.chrome.com/docs/ai/webmcp/imperative-api">Chrome imperative guide</a> · refreshTools is illustrative</p>

---

<!-- .slide: class="center-slide" data-visibility="hidden" -->

## What does availability mean?

<div class="chrome-card-grid chrome-card-grid--two"><div class="chrome-card"><h3>unavailable</h3><p>Cannot run with these options. Explain and offer a fallback.</p></div><div class="chrome-card"><h3>downloadable</h3><p>Preparation is needed. Start from a user action and show progress.</p></div><div class="chrome-card"><h3>downloading</h3><p>Preparation is in progress. Keep the user informed.</p></div><div class="chrome-card"><h3>available</h3><p>Create an instance and run the task.</p></div></div><p class="chrome-source">Translator reports language-pair download states with a privacy safeguard · <a href="https://developer.chrome.com/docs/ai/translator-api">Translator guide</a></p>
