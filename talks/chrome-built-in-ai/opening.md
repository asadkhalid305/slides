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
  <span>inference requests</span>
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

## <span class="highlight-accent">Chrome Built-in AI</span>

<aside class="notes">

- Put a name to the mystery the audience has just seen: Chrome can run suitable AI tasks locally through browser-managed models.
- Keep this concise. The title is now a reveal, not a preamble.

</aside>

---

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">THE ANSWER</p>

## Chrome is becoming an <span class="highlight-accent">AI runtime</span>

<p class="chrome-subtitle fragment fade-up">For suitable tasks, Chrome runs inference locally without an application inference backend.</p>

<aside class="notes">

- Introduce Chrome built-in AI for the first time.
- Explain “browser-managed”: Chrome exposes the API, handles capability checks, and downloads the required model when the user initiates it.
- Call it a Chrome-provided browser API, not a general Web API. It can be used by web pages, but it is not a cross-browser platform capability today.
- Clarify that this is a new architectural option, not a replacement for every cloud model.
- Mention that after the model is available, inference can run without sending the user’s content to an AI provider.

</aside>
