<!--
date: 2026-08-01
audience: public
-->

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">THE POSSIBILITIES</p>

<p class="chrome-question">What are the possible ways of adding AI capabilities to a frontend application?</p>

<aside class="notes">

- Ask the question exactly as written, then stop talking for a few seconds.
- Invite two or three answers from the audience.
- Do not mention Chrome, on-device models, or browser AI.
- If the room is quiet, ask: “Where would the model run, and how would the frontend reach it?”

</aside>

--

<!-- .slide: class="center-slide" data-visibility="hidden" -->

## <span class="underline-accent">The Familiar Paths</span>

<div class="chrome-card-grid">
  <div class="chrome-card fragment fade-up" data-fragment-index="1">
    <p class="chrome-card__eyebrow">01 · CLOUD</p>
    <h3>AI provider through a backend or SDK</h3>
    <p>OpenAI, Anthropic, Gemini, or another hosted model behind application infrastructure.</p>
  </div>
  <div class="chrome-card fragment fade-up" data-fragment-index="2">
    <p class="chrome-card__eyebrow">02 · SELF-HOSTED</p>
    <h3>Own or open-weight model</h3>
    <p>Operate the model, deployment, scaling, updates, and the API surface yourself.</p>
  </div>
  <div class="chrome-card fragment fade-up" data-fragment-index="3">
    <p class="chrome-card__eyebrow">03 · EXTERNAL</p>
    <h3>AI service or MCP server</h3>
    <p>The frontend still reaches intelligence through infrastructure somewhere else.</p>
  </div>
</div>

<div class="chrome-boundary fragment fade-up" data-fragment-index="4">
  <p>All three answers imply that the AI lives outside the frontend.</p>
</div>

<aside class="notes">

- Validate the audience’s answers and group them into these three paths.
- The common assumption is the important part: intelligence lives somewhere else.
- Do not frame these approaches as wrong. They remain useful and often necessary.
- Time check: reach this slide by 5 minutes.
- If behind, reveal all cards together and state only the common assumption.

</aside>

--

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">HOLD THAT THOUGHT</p>

<p class="chrome-question">Let me show you something first.</p>

<aside class="notes">

- Switch to the prepared browser window.
- Use separate prepared tabs for:
  - `https://chromeai.asadullahkhalid.com/#playground/translator`
  - `https://chromeai.asadullahkhalid.com/#playground/prompt`
- Before the talk, scroll each tab so the page heading “Learn Chrome built-in AI…” is outside the viewport. Keep only the demo card visible.
- Translator input: `Dieses Beispiel läuft direkt im Browser.`
- Prompt input: `Explain in two sentences why capability detection matters.`
- Do not name Chrome AI, Gemini Nano, a local model, or the absence of a backend.
- If one demo is unavailable, run the other and continue. The mystery matters more than the number of examples.

</aside>

--

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">THE TEST</p>

<p class="chrome-question">How is this page running AI?</p>

<div class="chrome-card-grid">
  <div class="chrome-card fragment fade-up" data-fragment-index="1">
    <p class="chrome-card__eyebrow">PROVIDER</p>
    <h3>AI provider SDK</h3>
    <p>The frontend calls a managed AI provider directly through its SDK or API.</p>
  </div>
  <div class="chrome-card fragment fade-up" data-fragment-index="2">
    <p class="chrome-card__eyebrow">BACKEND</p>
    <h3>Backend API or MCP</h3>
    <p>The frontend calls an application backend or MCP server, which orchestrates the AI request.</p>
  </div>
  <div class="chrome-card fragment fade-up" data-fragment-index="3">
    <p class="chrome-card__eyebrow">LOCAL</p>
    <h3>Self-hosted model</h3>
    <p>A local runtime such as Ollama or an on-premise service runs the model.</p>
  </div>
</div>

<aside class="notes">

- Return to the deck and ask the question before revealing any options.
- Reveal one card per keypress and briefly invite a reaction to each possibility.
- Collect a few guesses after all three cards are visible. Do not confirm or reject them yet.
- If someone guesses browser AI, acknowledge it without explaining and continue to the evidence.

</aside>

--

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">LOOKING AT THE EVIDENCE</p>

## None of the above answers fit.

<div class="chrome-metric fragment fade-up">
  <strong>0</strong>
  <span>network calls</span>
</div>

<p class="chrome-subtitle fragment fade-up">No provider SDK. No backend API. No local server running.<br/>The user asked. The app answered. So what is actually powering this?</p>

<aside class="notes">

- Return to the browser with DevTools already open on Network.
- Clear the log, filter to Fetch/XHR, and execute the prepared Prompt example again.
- Say “no inference request” rather than “no network request.” The page may still load assets, and the model required an earlier download.
- Let the empty request list sit on screen for a moment.
- Ask: “If there is no backend call, where did the result come from?”
- Time check: reach this reveal by 14 minutes.
- Fallback: if the Network panel is noisy, show the filtered Fetch/XHR list and explain the distinction. Do not debug the page on stage.

</aside>

---

<!-- .slide: class="center-slide chrome-title-slide" -->

<p class="chrome-kicker">NOW LET’S NAME THE CHANGE</p>

## Building Local-First AI Experiences

## <span class="highlight-accent">Chrome Built-in AI + WebMCP</span>

<aside class="notes">

- Put a name to the mystery the audience has just seen: the talk is about a browser that can run useful AI work locally, and a browser that can expose page capabilities to agents.
- Keep this concise. The title is now a reveal, not a preamble.

</aside>

---

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">THE ANSWER</p>

## Chrome is becoming an <span class="highlight-accent">AI runtime</span>

<p class="chrome-subtitle fragment fade-up">The model runs inside Chrome itself. No backend. No provider.</p>

<aside class="notes">

- Introduce Chrome built-in AI for the first time.
- Explain “browser-managed”: Chrome exposes the API, handles capability checks, and downloads the required model when the user initiates it.
- Clarify that this is a new architectural option, not a replacement for every cloud model.
- Mention that after the model is available, inference can run without sending the user’s content to an AI provider.

</aside>

--

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">BEFORE WE GET INTO CODE</p>

## A quick hello

<div class="chrome-speaker">
  <img class="chrome-speaker__avatar" src="https://github.com/asadkhalid305.png?size=420" alt="Asad Ullah Khalid" />
  <div>
    <h3>Asad Ullah Khalid</h3>
    <p class="chrome-speaker__role">Senior Frontend Developer · Mercedes-Benz.io · Berlin</p>
    <p>I work on frontend architecture, AI experiences, and practical learning in public.</p>
  </div>
</div>

<aside class="notes">

- This is the deliberately late, concise introduction. You have earned attention before asking the audience to hear about you.
- Say your name, role, and that this talk comes from hands-on exploration of browser capabilities and developer education.
- Do not linger here. It is a human reset before the implementation walkthrough.

</aside>

--

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
    <p>Built-in Web API</p>
  </div>
  <div class="chrome-flow__arrow">→</div>
  <div class="chrome-flow__node">
    <p>Browser-managed model</p>
  </div>
</div>

<aside class="notes">

- Walk through the familiar path first.
- Reveal the second path and call it an additional architecture available to frontend engineers.
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

<p class="chrome-source fragment fade-up" data-fragment-index="1">Sources: Chrome built-in AI API catalog <a href="https://developer.chrome.com/docs/ai/built-in-apis" target="_blank">[1]</a> and Prompt API <a href="https://developer.chrome.com/docs/ai/prompt-api" target="_blank">[2]</a> · reviewed 30 July 2026</p>

<aside class="notes">

- These are the four APIs currently listed as stable in Chrome's public catalog.
- Briefly name what each API does; do not teach its integration here.
- Prompt is stable later on the web than in extensions.
- The optional sampling-parameter extension has its own availability status.
- Stable means shipped, not guaranteed to run on every device. The final slide in this stack explains the remaining gates.
- Keep WebMCP out of this list; it is not another inference API.

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
      <strong>Local testing flags</strong>
      <code>#optimization-guide-on-device-model</code>
      <code>#prompt-api-for-gemini-nano-multimodal-input</code>
      <code>#writer-api-for-gemini-nano</code>
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
      <strong>Local testing flags</strong>
      <code>#optimization-guide-on-device-model</code>
      <code>#prompt-api-for-gemini-nano-multimodal-input</code>
      <code>#rewriter-api-for-gemini-nano</code>
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

<p class="chrome-source fragment fade-up" data-fragment-index="1">Sources: Chrome Writer <a href="https://developer.chrome.com/docs/ai/writer-api" target="_blank">[3]</a>, Rewriter <a href="https://developer.chrome.com/docs/ai/rewriter-api" target="_blank">[4]</a>, and Proofreader <a href="https://developer.chrome.com/docs/ai/proofreader-api" target="_blank">[5]</a> API documentation · reviewed 30 July 2026</p>

<aside class="notes">

- "Developer trial" is the current public status for all three APIs.
- The version ranges shown are historical Origin Trial windows. They are not current promises of production availability.
- Google has not published a stable Chrome milestone or a dependable time-to-stable estimate for these APIs.
- The flag lists are for local testing. The demo uses these same flags.
- Spend about ten seconds per row: name, purpose, past trial window, and local setup.

</aside>

--

<!-- .slide: class="center-slide" -->

## Chrome version is only the first check

<div class="chrome-requirements-grid fragment fade-up" data-fragment-index="1">
  <div class="chrome-requirement">
    <p class="chrome-card__eyebrow">EXPERT MODELS</p>
    <h3>Translator + Language Detector</h3>
    <p>Desktop only. Availability also depends on the requested language or language pair and whether its model is ready.</p>
  </div>
  <div class="chrome-requirement">
    <p class="chrome-card__eyebrow">FOUNDATION MODEL</p>
    <h3>The other five APIs</h3>
    <p>Supported desktop OS and hardware, about 22 GB free storage, an unmetered first download, and a prepared local model.</p>
  </div>
</div>

<div class="chrome-availability fragment fade-up" data-fragment-index="2">
  <code>unavailable</code>
  <span>→</span>
  <code>downloadable</code>
  <span>→</span>
  <code>downloading</code>
  <span>→</span>
  <code>available</code>
</div>

<div class="chrome-boundary chrome-boundary--compact fragment fade-up" data-fragment-index="2">
  <p>Always call <code>availability()</code>. Version, OS, hardware, storage, language support, and model state can all change the answer.</p>
</div>

<p class="chrome-version-note fragment fade-up" data-fragment-index="1">From Chrome 149, the foundation model supports English, Spanish, Japanese, German, and French input and output.</p>

<p class="chrome-source fragment fade-up" data-fragment-index="1">Source: Chrome built-in AI get-started documentation <a href="https://developer.chrome.com/docs/ai/get-started" target="_blank">[6]</a> · reviewed 30 July 2026</p>

<aside class="notes">

- "First gate" means the Chrome version tells us the API may exist; availability() tells us whether it can run on this device now.
- Correct the shortcut people often take: checking the Chrome version is necessary, but not sufficient.
- Translator and Language Detector use task-specific expert models.
- Summarizer, Prompt, Writer, Rewriter, and Proofreader use Chrome's foundation model.
- The documented foundation-model device requirements exclude mobile and non-Chromebook-Plus ChromeOS devices.
- Do not read every requirement aloud. Point to availability() as the production rule.

</aside>

--

<!-- .slide: class="center-slide" -->

## The core integration is simple

<pre class="chrome-code chrome-code--narrow chrome-code--compact"><code class="language-javascript">if (!('LanguageModel' in self)) return; // API is not exposed

const status = await LanguageModel.availability();
// 'unavailable': cannot run here · 'available': ready
// 'downloadable' / 'downloading': model preparation needed / in progress
if (status === 'unavailable') return;

const params = await LanguageModel.params();
// Docs example: topK default 3 / max 128; temperature default 1 / max 2
// Read params at runtime—values can change by model and Chrome version.

const session = await LanguageModel.create({
  topK: params.defaultTopK, // Set both sampling controls—or neither
  temperature: Math.min(
    params.defaultTemperature * 1.2,
    params.maxTemperature,
  ),
  monitor(monitor) {
    monitor.addEventListener('downloadprogress', ({ loaded }) =&gt; {
      updateProgress(Math.round(loaded * 100));
    });
  },
});

const result = await session.prompt(userPrompt);
session.destroy(); // Free this session's resources</code></pre>

<p class="chrome-subtitle">Check capability. Configure a session. Prompt it. Clean up.</p>

<div class="chrome-boundary chrome-boundary--compact">
  <p><strong>Sampling controls are not universal yet:</strong> available in Chrome extensions from Chrome 148; web usage requires the sampling-parameters Origin Trial.</p>
</div>

<p class="chrome-source">Adapted from the official Chrome Prompt API documentation <a href="https://developer.chrome.com/docs/ai/prompt-api" target="_blank">[2]</a> · reviewed 30 July 2026</p>

<aside class="notes">

- Prompt is the closest built-in API to the LLM provider SDKs and agent tooling the audience already recognizes.
- LanguageModel is the browser's Prompt API surface.
- 'LanguageModel' in self checks whether the API is exposed. It does not guarantee the model can run; availability() performs that second check.
- The documented parameter object currently shows defaultTopK 3, maxTopK 128, defaultTemperature 1, and maxTemperature 2. Treat these as returned values, not constants.
- params() reports the model's supported default and maximum sampling values.
- When customizing sampling, Chrome requires both topK and temperature together, or neither.
- `create()` provides the `monitor` callback. Its `downloadprogress` event reports `loaded` from 0 to 1, so the example converts it to a percentage for the UI.
- If the model is already prepared, `create()` may resolve quickly without a meaningful download interval.
- The playground currently uses availability(), create(), expected languages, an initial system prompt, prompt(), and destroy(); it does not expose sampling controls.
- On the web, temperature and topK still require the separate sampling-parameters Origin Trial. Do not present them as part of ordinary stable web Prompt usage.
- Explain only the landmarks: availability, params, create a configured session, prompt, and destroy.
- Mention that create() may require user activation for a download. Production UI must monitor download progress and expose running, cancellation, and error states.

</aside>

--

<!-- .slide: class="center-slide" -->

## Start with the user problem

<div class="chrome-card-grid chrome-card-grid--two fragment fade-up">
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">UNDERSTAND</p>
    <h3>Make content easier to consume</h3>
    <p>Summaries, language detection, translation, classification, and accessible alternatives.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">CREATE</p>
    <h3>Help people express intent</h3>
    <p>Drafting, rewriting, proofreading, and guided form completion.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">PERSONALIZE</p>
    <h3>Adapt an existing interface</h3>
    <p>Explain, organize, or transform what is already on the page for this user.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">PROTECT</p>
    <h3>Keep suitable work local</h3>
    <p>Avoid sending every draft, note, or interaction to an external model provider.</p>
  </div>
</div>

<aside class="notes">

- Invite the audience to map these capabilities to their own products.
- Keep the examples about user outcomes rather than API names.
- “Suitable work” matters: do not imply that every AI workload fits an on-device model.
- Time check: reach the end of the Chrome AI section by 25 minutes.
- If behind, reveal the grid, name only “understand” and “protect,” then move on.

</aside>

---

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">THERE IS MORE</p>

<p class="chrome-question">Chrome AI is exciting but what if it is not even the biggest change?</p>

<aside class="notes">

- Pause before revealing the next slide.
- Say that built-in inference changes where intelligence can run.
- The next capability changes how agents can interact with websites.

</aside>

--

<!-- .slide: class="center-slide" -->

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
  <p>MCP exposes tools which live inside backend systems.</p>
</div>

<aside class="notes">

- Give only the background needed for the comparison.
- An MCP server exposes named tools with descriptions and schemas.
- The agent discovers and calls those tools instead of guessing through an interface.
- Avoid a protocol deep dive.

</aside>

--

<!-- .slide: class="center-slide" -->

## WebMCP declares tools into the frontend code

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
    <small>form · state · operation</small>
  </div>
</div>

<div class="chrome-boundary">
  <p>The application is no longer only an interface. It can expose tools for agents.</p>
</div>

<aside class="notes">

- Define WebMCP carefully: it is not an AI model and not another built-in inference API.
- It is a proposed browser mechanism for a page to expose capabilities as tools.
- Stress that the human interface remains present and usable.
- The browser provides discovery and invocation; the page still owns validation, state, effects, and user control.

</aside>

--

<!-- .slide: class="center-slide" -->

## Declarative: annotate the form

<div class="chrome-code-grid">
  <div>
    <p class="chrome-code-label">HTML · EXPOSE THE TOOL</p>
    <pre class="chrome-code chrome-code--split"><code class="language-html">&lt;form id="support-form"
  toolname="submitSupportRequest"
  tooldescription="Send a support request"
  toolautosubmit
&gt;
  &lt;label&gt;Email
    &lt;input name="email" type="email" required
      toolparamdescription="Where support can reply." /&gt;
  &lt;/label&gt;
  &lt;label&gt;Request
    &lt;textarea name="details" required
      toolparamdescription="Describe the support request."&gt;
    &lt;/textarea&gt;
  &lt;/label&gt;
  &lt;button type="submit"&gt;Submit request&lt;/button&gt;
&lt;/form&gt;</code></pre>
  </div>
  <div>
    <p class="chrome-code-label">JAVASCRIPT · HANDLE THE RESULT</p>
    <pre class="chrome-code chrome-code--split"><code class="language-javascript">const form = document.querySelector("#support-form");
form.addEventListener("submit", (event) =&gt; {
  // Required before respondWith()
  event.preventDefault();
  // Existing validation + operation; returns a Promise
  const result = sendSupportRequest(new FormData(form));
  if (event.agentInvoked) {
    // Return success or failure to the agent
    event.respondWith(result);
  } else {
    // Keep the human path working
    result.then(showConfirmation);
  }
});</code></pre>
  </div>
</div>

<p class="chrome-subtitle"><code>toolparamdescription</code> is optional. Without it, Chrome uses the associated label, then <code>aria-description</code>.</p>

<div class="chrome-boundary chrome-boundary--compact">
  <p><strong><code>toolautosubmit</code> only triggers submission.</strong> The application still owns validation, the operation, and the result returned through <code>respondWith()</code>.</p>
</div>

<aside class="notes">

- Point to `toolname` and `tooldescription` as the tool identity, then `toolautosubmit` as the page-authored submission policy.
- Explain that normal field names, types, labels, constraints, and required attributes form the input schema. `toolparamdescription` can optionally add parameter guidance.
- Without `toolautosubmit`, a DevTools or agent invocation focuses and fills the visible form, then waits for the user’s submit click.
- With `toolautosubmit`, the browser triggers submission automatically. It is a page-authored form setting, not a per-call agent choice.
- `preventDefault()` keeps this SPA on the page and must happen before `respondWith()`.
- `sendSupportRequest()` represents the application’s existing validation and business operation; it returns a promise.
- For an agent invocation, `respondWith(result)` sends that promise’s success or failure back to the caller.
- For a person, the same promise drives the visible confirmation. The application does not need a second implementation.

</aside>

--

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">WHAT THE BROWSER DERIVES</p>

## The form becomes this agent contract

<pre class="chrome-code chrome-code--narrow chrome-code--compact"><code class="language-json">[
  {
    "name": "submitSupportRequest",
    "description": "Send a support request",
    "inputSchema": {
      "type": "object",
      "properties": {
        "email": { "type": "string", "description": "Where support can reply." },
        "details": { "type": "string", "description": "Describe the support request." }
      },
      "required": ["email", "details"]
    }
  }
]</code></pre>

<div class="chrome-boundary chrome-boundary--compact">
  <p><code>toolname</code> → name · <code>tooldescription</code> → description · named controls → properties · <code>required</code> → required parameters</p>
</div>

<p class="chrome-source">Adapted from the official Chrome Declarative WebMCP documentation <a href="https://developer.chrome.com/docs/ai/webmcp/declarative-api" target="_blank">[7]</a> · reviewed 30 July 2026</p>

<aside class="notes">

- This is the contract the agent discovers; the browser synthesizes it from the annotated form.
- Map `toolname` to `name`, `tooldescription` to `description`, each named control to a property, and the HTML `required` attributes to the schema's `required` array.
- Point out that `toolparamdescription` supplied the two property descriptions, but the attribute is optional.
- Without it, Chrome uses the associated label and, when there is no label, `aria-description`.
- The exact synthesis of every HTML constraint is still evolving, so this slide focuses on the stable structure demonstrated in Chrome's documentation.

</aside>

--

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">OPTIONAL DEEP DIVE · DECLARATIVE WEBMCP</p>

## Make agent activity visible

<div class="chrome-code-grid">
  <div>
    <p class="chrome-code-label">JAVASCRIPT · EXPLAIN THE AGENT ACTION</p>
    <pre class="chrome-code chrome-code--split"><code class="language-javascript">window.addEventListener("toolactivated", ({ toolName }) =&gt; {
  showAgentState(toolName + " is ready for review");
});
window.addEventListener("toolcancel", ({ toolName }) =&gt; {
  clearAgentState(toolName + " was cancelled");
});</code></pre>

  </div>
  <div>
    <p class="chrome-code-label">CSS · KEEP THE HUMAN IN THE LOOP</p>
    <pre class="chrome-code chrome-code--split"><code class="language-css">form:tool-form-active {
  outline: 3px dashed var(--chrome-blue);
  outline-offset: 6px;
}
button:tool-submit-active {
box-shadow: 0 0 0 4px var(--chrome-yellow);
}</code></pre>

  </div>
</div>

<div class="chrome-boundary">
  <p><strong>The agent fills the form; the page makes that state visible.</strong> Both events expose <code>toolName</code>. The CSS states clear after submit, cancel, or reset.</p>
</div>

<p class="chrome-source">Source: Chrome Declarative WebMCP documentation <a href="https://developer.chrome.com/docs/ai/webmcp/declarative-api#modify_focus_indicator" target="_blank">[7]</a> · reviewed 31 July 2026</p>

<aside class="notes">

- Optional: skip this vertical slide when time is tight; the next down/right step reaches the live declarative demo.
- Start on the JavaScript panel: when Chrome pre-fills the form for an agent, the page receives the non-cancelable `toolactivated` event. `toolName` identifies the active tool.
- Then show the CSS panel: `:tool-form-active` applies to the form and `:tool-submit-active` applies to the submit button. These sample styles match the talk's Chrome-color theme, rather than copying the browser defaults.
- `toolcancel` fires when the user cancels the agentic operation or the form is reset. Both events expose `toolName`.
- The pseudo-classes clear when the form submits, the operation is cancelled, or the user resets it. This keeps the human review state visible rather than silent.

</aside>

--

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">LIVE DEMO · DECLARATIVE WEBMCP</p>

## A form becomes an agent tool

<aside class="notes">

- Switch to `https://chromeai.asadullahkhalid.com/#playground/webmcp-declarative`.
- Open DevTools → Application → WebMCP.
- Under Available Tools, select `submitSupportRequest` and show its schema.
- Leave **Enable toolautosubmit** off and run a valid support request. DevTools fills and activates the visible form, but the call waits for human review.
- Show the page’s populated fields, then click **Submit request**. Return to DevTools and show the Completed output.
- If time permits, enable **toolautosubmit** and run the tool again. This invocation completes without the page click.
- If time permits, run one invalid email to show that validation is returned to the caller.
- Reset with the exact UI control: **Clear form**.
- If the tool is missing, confirm the active route and flags once. After the second failure, return to the code slide and state that the current browser did not expose the trial API.

</aside>

--

<!-- .slide: class="center-slide" -->

## Imperative: JavaScript capability

<div class="chrome-code-grid">
  <div>
    <p class="chrome-code-label">JAVASCRIPT · REGISTER THE TOOL</p>
    <pre class="chrome-code chrome-code--split"><code class="language-javascript">const controller = new AbortController();
await document.modelContext.registerTool({
  name: "addTodo",
  description: "Add an item to the local to-do list.",
  inputSchema: {
    type: "object",
    properties: {
      text: { type: "string" }
    },
    required: ["text"],
    additionalProperties: false
  },
  execute: addTodo
}, { signal: controller.signal });</code></pre>
  </div>
  <div>
    <p class="chrome-code-label">HANDLER · VALIDATE, MUTATE, RETURN</p>
    <pre class="chrome-code chrome-code--split"><code class="language-javascript">async function addTodo(input) {
  if (typeof input?.text !== "string" ||
      !input.text.trim()) {
    throw new Error("A non-empty text is required.");
  }
  const text = input.text.trim();
  setTodos(current =&gt; [...current, {
    id: crypto.randomUUID(),
    text,
    source: "agent"
  }]);
  return `Added to-do: "${text}".`;
}
// Call during teardown to unregister the tool.
const unregister = () =&gt; controller.abort();</code></pre>
  </div>
</div>

<p class="chrome-subtitle">The browser calls <code>execute</code>; its return value becomes the tool result.</p>

<div class="chrome-boundary chrome-boundary--compact">
  <p><strong><code>execute()</code> is a trust boundary:</strong> validate before changing page state, return a useful result, and abort the registration on cleanup.</p>
</div>

<aside class="notes">

- Contrast this with the declarative form.
- Imperative WebMCP is for capabilities that are clearer as explicit JavaScript operations.
- The schema describes the contract, but `execute()` still validates untrusted runtime input before mutating page state.
- The returned confirmation is serialized back to the agent as the tool result.
- The visible to-do list changes through the same application state the human interface renders.
- Highlight lifecycle ownership. Aborting the signal unregisters the tool when the component unmounts; the API has no separate `unregisterTool()` call.

</aside>

--

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">LIVE DEMO · IMPERATIVE WEBMCP</p>

## Call a function. Change the interface.

<aside class="notes">

- Switch to `https://chromeai.asadullahkhalid.com/#playground/webmcp-imperative`.
- In DevTools → Application → WebMCP, inspect `addTodo`.
- Execute with: `{ "text": "Explore WebMCP after the talk" }`.
- Show the returned confirmation and the visible list item marked as agent-created.
- Emphasize that the agent did not search for a button, move a pointer, or infer the DOM interaction.
- Reset using the exact UI controls: **Clear list**, then **Reset**.
- Time check: finish both WebMCP demos by 40 minutes.
- If behind, skip the invalid-input case and show only one successful tool invocation.

</aside>

--

<!-- .slide: class="center-slide" -->

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
    <small>perform a visible app action</small>
  </div>
</div>

<div class="chrome-card-grid chrome-card-grid--two">
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
</div>

<aside class="notes">

- Present this as an opportunity, not a required coupling.
- Built-in AI can understand or transform content locally.
- WebMCP can expose a deliberate app action to an agent.
- Either can be useful alone; together they suggest browser-native workflows with less infrastructure and less UI guessing.

</aside>

--

<!-- .slide: class="center-slide" -->

## New capabilities, familiar responsibilities

<div class="chrome-card-grid chrome-card-grid--two">
  <div class="chrome-card fragment fade-up" data-fragment-index="1">
    <p class="chrome-card__eyebrow">CAPABILITY</p>
    <h3>Detect before use</h3>
    <p>Browser version, device, operating system, language, and model state all matter.</p>
  </div>
  <div class="chrome-card fragment fade-up" data-fragment-index="2">
    <p class="chrome-card__eyebrow">EXPERIENCE</p>
    <h3>Make lifecycle visible</h3>
    <p>Downloads, progress, cancellation, unsupported states, and failures belong in the UI.</p>
  </div>
  <div class="chrome-card fragment fade-up" data-fragment-index="3">
    <p class="chrome-card__eyebrow">TRUST</p>
    <h3>Treat input and output carefully</h3>
    <p>Validate tool inputs, render model output safely, and keep meaningful effects inspectable.</p>
  </div>
  <div class="chrome-card fragment fade-up" data-fragment-index="4">
    <p class="chrome-card__eyebrow">CONTROL</p>
    <h3>Keep people in the system</h3>
    <p>Local execution and agent tools do not remove consent, confirmation, or recovery needs.</p>
  </div>
</div>

<aside class="notes">

- Prevent the talk from ending as pure hype.
- Local-first does not mean universally available, free of constraints, or automatically safe.
- WebMCP makes actions easier for agents to call; that increases the importance of schemas, validation, permissions, and visible effects.
- Time check: reach this slide by 45 minutes.

</aside>

---

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
- Time check: reach this slide by 47 minutes.

</aside>

--

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">OFFICIAL CHROME DOCUMENTATION</p>

## References

<div class="chrome-references">
  <a class="chrome-reference" href="https://developer.chrome.com/docs/ai/built-in-apis" target="_blank">
    <p><strong>[1] Built-in AI APIs</strong><br/><code>developer.chrome.com/docs/ai/built-in-apis</code></p>
  </a>
  <a class="chrome-reference" href="https://developer.chrome.com/docs/ai/prompt-api" target="_blank">
    <p><strong>[2] Prompt API</strong><br/><code>developer.chrome.com/docs/ai/prompt-api</code></p>
  </a>
  <a class="chrome-reference" href="https://developer.chrome.com/docs/ai/writer-api" target="_blank">
    <p><strong>[3] Writer API</strong><br/><code>developer.chrome.com/docs/ai/writer-api</code></p>
  </a>
  <a class="chrome-reference" href="https://developer.chrome.com/docs/ai/rewriter-api" target="_blank">
    <p><strong>[4] Rewriter API</strong><br/><code>developer.chrome.com/docs/ai/rewriter-api</code></p>
  </a>
  <a class="chrome-reference" href="https://developer.chrome.com/docs/ai/proofreader-api" target="_blank">
    <p><strong>[5] Proofreader API</strong><br/><code>developer.chrome.com/docs/ai/proofreader-api</code></p>
  </a>
  <a class="chrome-reference" href="https://developer.chrome.com/docs/ai/get-started" target="_blank">
    <p><strong>[6] Get started with built-in AI</strong><br/><code>developer.chrome.com/docs/ai/get-started</code></p>
  </a>
</div>

<p class="chrome-version-note">Reviewed 30 July 2026 · Citation numbers on earlier slides are clickable.</p>

<aside class="notes">

- This is the reference list for citation numbers [1] through [6] used on the API status, availability, and Prompt integration slides.
- The links point directly to official Chrome documentation rather than search results or secondary summaries.
- Move through this slide quickly, then leave Questions visible for discussion.

</aside>

--

<!-- .slide: class="center-slide" -->

## Questions?

<div class="chrome-resource-layout">
  <div>
    <img class="chrome-qr" src="./assets/images/qr-feedback-blue.png" data-chrome-qr="./assets/images/qr-feedback" alt="QR code for live feedback and talk resources" />
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
      <a href="https://developer.chrome.com/docs/ai/built-in" target="_blank">
        <p>Chrome built-in AI<br/><code>developer.chrome.com/docs/ai/built-in</code></p>
      </a>
    </div>
    <div class="chrome-resource">
      <a href="https://developer.chrome.com/docs/ai/webmcp" target="_blank">
        <p>WebMCP<br/><code>developer.chrome.com/docs/ai/webmcp</code></p>
      </a>
    </div>
    <div class="chrome-resource">
      <a href="https://developer.chrome.com/docs/ai/join-epp" target="_blank">
        <p>Early Preview Program<br/><code>developer.chrome.com/docs/ai/join-epp</code></p>
      </a>
    </div>
  </div>
</div>

<aside class="notes">

- Invite people to scan the QR code and try the examples later.
- Point out that the project is a teaching surface: each demo shows capability state, output, code path, and lifecycle.
- Mention the official documentation and Early Preview Program for people who want to track experimental APIs.
- Leave this slide visible for roughly one minute.
- End at 50 minutes.

</aside>
