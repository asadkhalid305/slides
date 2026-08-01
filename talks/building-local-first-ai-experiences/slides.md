<!--
date: 2026-08-01
audience: public
-->

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">THE POSSIBILITIES</p>

<p class="chrome-question">What are the possible ways of adding AI capabilities to a web application?</p>

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

<p class="chrome-question">Let’s look at an example first.</p>

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

<p class="chrome-subtitle fragment fade-up">No provider SDK. No backend API. No local server running.<br/>The user asked. The app answered. <span class="highlight highlight-accent">So what is actually powering this?</span></p>

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

<p class="chrome-kicker">THE TOPIC</p>

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
- Call it a Chrome-provided browser API, not a general Web API. It can be used by web pages, but it is not a cross-browser platform capability today.
- Clarify that this is a new architectural option, not a replacement for every cloud model.
- Mention that after the model is available, inference can run without sending the user’s content to an AI provider.

</aside>

--

<!-- .slide: class="center-slide" data-visibility="hidden" -->

<p class="chrome-kicker">BEFORE WE GET INTO DETAILS</p>

## A quick hello

<div class="chrome-speaker">
  <img class="chrome-speaker__avatar" src="https://github.com/asadkhalid305.png?size=420" alt="Asad Ullah Khalid" />
  <div>
    <h3>Asad Ullah Khalid</h3>
    <p class="chrome-speaker__role">Senior Frontend Developer · Mercedes-Benz.io · Berlin</p>
    <p>I’m here to share what I learned while building this playground.</p>
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

## Start with a user moment

<div class="chrome-card-grid chrome-card-grid--two fragment fade-up">
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">“THIS IS TOO MUCH”</p>
    <h3>Make it shorter</h3>
    <p>Summarize a long page, thread, or set of notes into something the user can scan.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">“I DON’T UNDERSTAND THIS”</p>
    <h3>Translate or identify it</h3>
    <p>Detect the language, then translate a selected message or a piece of user-provided text.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">“HELP ME SAY THIS”</p>
    <h3>Improve a draft</h3>
    <p>Write, rewrite, or proofread while the person remains the author and makes the final call.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">“WHAT SHOULD HAPPEN NEXT?”</p>
    <h3>Classify or extract</h3>
    <p>Use a bounded prompt to route a request, pull out known fields, or suggest the next step.</p>
  </div>
</div>

<aside class="notes">

- Read the four user quotes—not the API names. This makes the starting point concrete: a person has text, not a request for “a Summarizer API.”
- Map them quickly: shorter → Summarizer; understand → Language Detector + Translator; say this → Writer, Rewriter, Proofreader; next step → Prompt.
- The examples are intentionally bounded. They are useful local tasks, not a promise of deep research, large context, or autonomous product decisions.
- Time check: reach the end of the Chrome AI section by 25 minutes.
- If behind, name only the first and third cards, then move on.

</aside>

--

<!-- .slide: class="center-slide" -->

## Local-first is a trade-off

<div class="chrome-card-grid fragment fade-up" data-fragment-index="1">
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

<div class="chrome-boundary fragment fade-up" data-fragment-index="2">
  <p><strong>Privacy and offline use after setup are valuable—not a guarantee of correctness, capability, or universal availability.</strong></p>
</div>

<p class="chrome-source fragment fade-up" data-fragment-index="1">Source: Chrome built-in AI requirements and model lifecycle <a href="https://developer.chrome.com/docs/ai/get-started" target="_blank">[6]</a> · reviewed 31 July 2026</p>

<aside class="notes">

- This is the honest close to the built-in AI section, not an argument against it.
- Local models are a great fit for constrained product tasks. Do not promise cloud-model breadth, long-context analysis, or perfect outputs.
- Chrome documents requirements around desktop support, hardware, storage, language, model download, and model eviction under storage pressure.
- Say clearly: local processing can improve data locality and enable offline use after setup; it does not solve hallucinations or output validation.

</aside>

--

<!-- .slide: class="center-slide" -->

## Design for the real world

<div class="chrome-card-grid chrome-card-grid--two fragment fade-up" data-fragment-index="1">
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">DETECT</p>
    <h3>Check capability at runtime</h3>
    <p>Use feature detection and <code>availability()</code> with the same options you plan to use—not the browser name alone.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">EXPLAIN</p>
    <h3>Design the first-use wait</h3>
    <p>Ask for user activation, show download progress, and make unsupported and failed states understandable.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">FALL BACK</p>
    <h3>Keep the core journey working</h3>
    <p>Choose a manual path, deterministic logic, or a cloud service when local AI is unavailable or unsuitable.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">VALIDATE</p>
    <h3>Treat output as a suggestion</h3>
    <p>Check structured values before use. Do not make essential workflows depend on an AI response alone.</p>
  </div>
</div>

<div class="chrome-boundary fragment fade-up" data-fragment-index="2">
  <p><strong>The practical architecture is usually local-first with a graceful fallback—not local-only.</strong></p>
</div>

<p class="chrome-source fragment fade-up" data-fragment-index="1">Sources: Chrome built-in AI lifecycle <a href="https://developer.chrome.com/docs/ai/get-started" target="_blank">[6]</a> and Prompt API availability guidance <a href="https://developer.chrome.com/docs/ai/prompt-api" target="_blank">[2]</a> · reviewed 31 July 2026</p>

<aside class="notes">

- The first-use experience is an application-design problem, not an implementation detail.
- Chrome documents user activation, availability states, and download-progress monitoring. The fallbacks and validation rule are the product architecture that follows from those constraints.
- The right fallback varies: manual UX, a deterministic capability, or a cloud model. Do not prescribe a cloud fallback where privacy or offline requirements rule it out.
- This conclusion completes the local-AI story. Pause, then use the next slide to raise the question again: is this even the biggest change?

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
- It is a Chrome-provided, experimental browser API for a page to expose capabilities as tools—not a general Web API standard today.
- Stress that the human interface remains present and usable.
- The browser provides discovery and invocation; the page still owns validation, state, effects, and user control. The imperative entry points happen to live on <code>document.modelContext</code>; their location does not make them generic DOM APIs.
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
- Say: “We will start with the form route, then contrast it with JavaScript.”

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

## From form fields to a tool schema

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

## Inspect the form tool

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

<p class="chrome-kicker">DISCOVERY</p>

## Let a page inspect its tools

<pre class="chrome-code chrome-code--narrow chrome-code--discovery"><code class="language-javascript">async function getAvailableTools() {
  const tools = await document.modelContext.getTools();
  // Authorized same-origin tools, ordered alphabetically.
  return tools.map(({ name, description, inputSchema }) => ({
    name,
    description,
    inputSchema,
  }));
}

const availableTools = await getAvailableTools();
console.table(availableTools);

document.modelContext.addEventListener("toolchange", () =&gt; {
  void getAvailableTools().then(console.table);
});</code></pre>

<div class="chrome-boundary chrome-boundary--compact">
  <p><strong>Chrome provides <code>getTools()</code> through <code>document.modelContext</code>.</strong> Listen for <code>toolchange</code> to refresh a page-owned tool picker when the available list changes.</p>
</div>

<p class="chrome-source">Source: Chrome WebMCP Imperative API <a href="https://developer.chrome.com/docs/ai/webmcp/imperative-api" target="_blank">[11]</a> · reviewed 1 August 2026</p>

<aside class="notes">

- This is the function you were looking for: `document.modelContext.getTools()`.
- It lets a page enumerate the tools that this document is authorized to access. By default, that means same-origin tools, returned alphabetically.
- It is a Chrome WebMCP method attached to <code>document</code>, not a general Web API. Browser objects are namespaces: a browser can add an experimental method there without making it a cross-browser standard.
- It is not a custom window function that an external agent must call. Browser-integrated agents and DevTools use WebMCP's browser-level discovery; this API is for page code that wants to compose or display available tools.
- `getTools()` returns the public contract, never the page's private `execute()` handler.
- If a page can register or remove tools dynamically, listen for `toolchange` and run this function again. Cross-origin discovery requires an explicit `fromOrigins` request and permission from the tool's origin; skip that detail in the talk unless asked.

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

## WebMCP: clarity increases responsibility

<div class="chrome-card-grid chrome-card-grid--two fragment fade-up" data-fragment-index="1">
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">USER SESSION</p>
    <h3>Tools can act with real access</h3>
    <p>Browser agents may operate inside an authenticated user session, so the effect of a mistake can be real user data.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">UNTRUSTED CONTENT</p>
    <h3>Text can be an attack surface</h3>
    <p>Tool definitions, page content, and tool output can contain indirect prompt-injection attempts. Treat them as data, not instructions.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">AUTHORIZATION</p>
    <h3>The server stays in charge</h3>
    <p>Validate identity, permissions, ownership, input, and state transitions exactly as you would for any other client.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">CONSEQUENCE</p>
    <h3>Confirm meaningful actions</h3>
    <p>Split broad operations into narrow tools, keep destructive effects visible, and require human confirmation where the risk deserves it.</p>
  </div>
</div>

<div class="chrome-boundary fragment fade-up" data-fragment-index="2">
  <p><strong>Structured tools reduce ambiguity. They do not remove security boundaries, authorization, or the human in the loop.</strong></p>
</div>

<p class="chrome-source fragment fade-up" data-fragment-index="1">Sources: Chrome WebMCP overview <a href="https://developer.chrome.com/docs/ai/webmcp" target="_blank">[8]</a>, tool security <a href="https://developer.chrome.com/docs/ai/webmcp/secure-tools" target="_blank">[9]</a>, and best practices <a href="https://developer.chrome.com/docs/ai/webmcp/best-practices" target="_blank">[10]</a> · reviewed 31 July 2026</p>

<aside class="notes">

- Use this as the explicit warning after both demos, while the audience can still picture what a tool call does.
- Say: “Structured tools make agents more reliable, but because they operate inside an authenticated user session, authorization, prompt-injection protection, and confirmation for consequential actions become critical.”
- WebMCP's official security guidance calls out malicious instructions in tool definitions and externally sourced tool outputs. LLM safety layers cannot guarantee protection from prompt injection.
- WebMCP does not change backend authorization. A tool call is still an untrusted client request.
- Give a concrete distinction: prefer prepareCancellation and confirmCancellation over one vague manageOrder tool.

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
  <a class="chrome-reference" href="https://developer.chrome.com/docs/ai/webmcp/declarative-api" target="_blank">
    <p><strong>[7] Declarative WebMCP API</strong><br/><code>developer.chrome.com/docs/ai/webmcp/declarative-api</code></p>
  </a>
  <a class="chrome-reference" href="https://developer.chrome.com/docs/ai/webmcp" target="_blank">
    <p><strong>[8] WebMCP overview</strong><br/><code>developer.chrome.com/docs/ai/webmcp</code></p>
  </a>
  <a class="chrome-reference" href="https://developer.chrome.com/docs/ai/webmcp/secure-tools" target="_blank">
    <p><strong>[9] WebMCP tool security</strong><br/><code>developer.chrome.com/docs/ai/webmcp/secure-tools</code></p>
  </a>
  <a class="chrome-reference" href="https://developer.chrome.com/docs/ai/webmcp/best-practices" target="_blank">
    <p><strong>[10] WebMCP best practices</strong><br/><code>developer.chrome.com/docs/ai/webmcp/best-practices</code></p>
  </a>
  <a class="chrome-reference" href="https://developer.chrome.com/docs/ai/webmcp/imperative-api" target="_blank">
    <p><strong>[11] Imperative WebMCP API</strong><br/><code>developer.chrome.com/docs/ai/webmcp/imperative-api</code></p>
  </a>
</div>

<p class="chrome-version-note">Reviewed 31 July 2026 · Citation numbers on earlier slides are clickable.</p>

<aside class="notes">

- This is the reference list for citation numbers [1] through [11] used throughout the talk.
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
