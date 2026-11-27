<!--
date: 2026-11-11
audience: company
-->

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

## What we will explore

<div class="chrome-card-grid chrome-card-grid--two"><div class="chrome-card"><p class="chrome-card__eyebrow">01 · TRANSLATOR API</p><h3>Translate a message</h3><p>Go from a language pair to an on-device result.</p></div><div class="chrome-card"><p class="chrome-card__eyebrow">02 · PROMPT API</p><h3>Stream an answer</h3><p>Prepare a local session, show output, and cancel it.</p></div></div><p class="chrome-subtitle">The same integration journey, with API-specific options.</p>

--

<!-- .slide: class="center-slide" -->

## Before writing code

<div class="chrome-card-grid"><div class="chrome-card"><h3>1 · Check status</h3><p>Open the <a href="https://developer.chrome.com/docs/ai/built-in-apis">API catalog</a> and the API guide. Stable, origin trial, or developer trial?</p></div><div class="chrome-card"><h3>2 · Prepare Chrome</h3><p>Check version, supported device and language. Follow API-specific trial or flag instructions only when needed.</p></div><div class="chrome-card"><h3>3 · Plan the experience</h3><p>Expect an unavailable device, a first download, and errors. Decide on a fallback.</p></div></div><p class="chrome-source">Stable APIs do not require Early Preview Program enrollment · <a href="https://developer.chrome.com/docs/ai/get-started">Chrome setup guide</a></p>

--

<!-- .slide: class="center-slide" -->

## The integration journey

<div class="chrome-availability"><code>detect</code><span>→</span><code>availability</code><span>→</span><code>create</code><span>→</span><code>run</code><span>→</span><code>cleanup</code></div><div class="chrome-boundary"><p>Browser version is a setup check. Runtime feature detection and availability determine what this user can do.</p></div>

--

<!-- .slide: class="center-slide" -->

## A shared starting pattern

<pre class="chrome-code chrome-code--narrow"><code class="language-javascript">// Translator illustrates the common pattern.
if (!('Translator' in self)) { showFallback(); return; }

const status = await Translator.availability(options);
if (status === 'unavailable') { showFallback(); return; }

// From a user action when preparation is needed:
const translator = await Translator.create(options);</code></pre>
<p class="chrome-subtitle">Then call the API's operation and release its instance when finished.</p>
<p class="chrome-source">For Prompt, use LanguageModel. Options, operations, and lifecycle vary by API.</p>

--

<!-- .slide: class="center-slide" -->

## What does availability mean?

<div class="chrome-card-grid chrome-card-grid--two"><div class="chrome-card"><h3>unavailable</h3><p>Cannot run with these options. Explain and offer a fallback.</p></div><div class="chrome-card"><h3>downloadable</h3><p>Preparation is needed. Start from a user action and show progress.</p></div><div class="chrome-card"><h3>downloading</h3><p>Preparation is in progress. Keep the user informed.</p></div><div class="chrome-card"><h3>available</h3><p>Create an instance and run the task.</p></div></div><p class="chrome-source">Translator reports language-pair download states with a privacy safeguard · <a href="https://developer.chrome.com/docs/ai/translator-api">Translator guide</a></p>

---

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">TRANSLATOR API</p>

## Detect and check

<pre class="chrome-code chrome-code--narrow"><code class="language-javascript">const options = {
  sourceLanguage: 'de',
  targetLanguage: 'en',
};

if (!('Translator' in self)) {
  showFallback();
  return;
}

const status = await Translator.availability(options);
if (status === 'unavailable') {
  showFallback();
  return;
}</code></pre><p class="chrome-subtitle">Check this language pair, not just the browser.</p><p class="chrome-source"><a href="https://developer.chrome.com/docs/ai/translator-api">Chrome Translator API</a></p>

--

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">TRANSLATOR API</p>

## Prepare the model

<pre class="chrome-code chrome-code--narrow"><code class="language-javascript">// Run from a user action, after the availability check.
const translator = await Translator.create({
  ...options,
  monitor(m) {
    m.addEventListener('downloadprogress', ({ loaded }) =&gt; {
      showProgress(Math.round(loaded * 100));
    });
  },
});</code></pre><p class="chrome-subtitle">Use the same language pair. Show preparation progress.</p><p class="chrome-source">A download may require user activation · <a href="https://developer.chrome.com/docs/ai/get-started">Chrome setup guide</a></p>

--

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">TRANSLATOR API</p>

## Translate and clean up

<pre class="chrome-code chrome-code--narrow"><code class="language-javascript">try {
  const result = await translator.translate(
    'Dieses Beispiel läuft direkt im Browser.'
  );
  showTranslation(result);
} catch (error) {
  showError(error);
} finally {
  translator.destroy();
}</code></pre><p class="chrome-subtitle">Reuse the instance when appropriate; destroy it when finished.</p><div class="chrome-boundary"><p>Try it: open the Translator lesson in the playground.</p></div>

---

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">PROMPT API</p>

## Declare and check

<pre class="chrome-code chrome-code--narrow"><code class="language-javascript">const options = {
  expectedInputs: [{ type: 'text', languages: ['en'] }],
  expectedOutputs: [{ type: 'text', languages: ['en'] }],
};

if (!('LanguageModel' in self)) {
  showFallback();
  return;
}
const status = await LanguageModel.availability(options);
if (status === 'unavailable') {
  showFallback();
  return;
}</code></pre><p class="chrome-subtitle">Declare the inputs and outputs you actually need.</p><p class="chrome-source"><a href="https://developer.chrome.com/docs/ai/prompt-api">Chrome Prompt API</a></p>

--

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">PROMPT API</p>

## Create and ask

<pre class="chrome-code chrome-code--narrow"><code class="language-javascript">// From a user action, after checking availability:
const session = await LanguageModel.create({
  ...options,
  monitor(m) {
    m.addEventListener('downloadprogress', ({ loaded }) =&gt; {
      showProgress(Math.round(loaded * 100));
    });
  },
});
try {
  const result = await session.prompt('Explain capability detection.');
  showResult(result);
} finally {
  session.destroy();
}</code></pre><p class="chrome-subtitle">Same journey. Different options and operation.</p>

--

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">PROMPT API</p>

## Stream and cancel

<pre class="chrome-code chrome-code--narrow"><code class="language-javascript">const controller = new AbortController();
cancelButton.onclick = () =&gt; controller.abort();

try {
  const stream = session.promptStreaming(userPrompt, {
    signal: controller.signal,
  });
  for await (const chunk of stream) {
    appendPartialText(chunk);
  }
} catch (error) {
  if (error.name === 'AbortError') showCanceled();
  else showError(error);
} finally {
  session.destroy();
}</code></pre><p class="chrome-subtitle">This replaces the prompt operation and cleanup in the previous example.</p>

---

<!-- .slide: class="center-slide" data-visibility="hidden" -->

## See it in the playground

---

<!-- .slide: class="center-slide" data-visibility="hidden" -->

## Make the feature reliable

<div class="chrome-card-grid chrome-card-grid--two"><div class="chrome-card"><h3>Explain the wait</h3><p>Show download progress, running, cancellation, and errors.</p></div><div class="chrome-card"><h3>Keep a fallback</h3><p>Offer manual or deterministic alternatives where local AI is unavailable.</p></div><div class="chrome-card"><h3>Validate the output</h3><p>Schema-shaped JSON can still be incorrect. Keep the user in control.</p></div><div class="chrome-card"><h3>Manage sessions</h3><p>Reuse when useful; destroy on replacement or when no longer needed.</p></div></div>

--

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

--

<!-- .slide: class="center-slide" -->

## Start with a user moment

<div class="chrome-card-grid chrome-card-grid--two">
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
- If behind, name only the first and third cards, then move on.

</aside>

--

<!-- .slide: class="center-slide" -->

## Can we use it in a real product?

<div class="chrome-card-grid">
  <div class="chrome-card"><h3>Drupal</h3><p>Summarizer helps generate SEO tags in CKEditor.</p></div>
  <div class="chrome-card"><h3>Yahoo! Japan</h3><p>Prompt helps moderate community comments.</p></div>
  <div class="chrome-card"><h3>Trip.com</h3><p>AI overviews help people navigate flight options.</p></div>
</div>

<div class="chrome-boundary"><p>Google-published product examples—not a measure of adoption or a guarantee of device support.</p></div>
<p class="chrome-source">Source: Chrome for Developers <a href="https://developer.chrome.com/blog/build-new-features-using-built-in-ai-in-chrome-io2026" target="_blank">Google I/O 2026</a> · reviewed 10 November 2026</p>

---

<!-- .slide: class="center-slide" data-visibility="hidden" -->

## Choose the right API

<div class="chrome-card-grid chrome-card-grid--two"><div class="chrome-card"><h3>Stable in Chrome</h3><p>Translator, Language Detector, Summarizer, Prompt.</p><p>Stable status still depends on device and model availability.</p></div><div class="chrome-card"><h3>Developer trial</h3><p>Writer, Rewriter, Proofreader.</p><p>Follow each API's current experimental setup instructions.</p></div></div><p class="chrome-source">Snapshot: 10 November 2026 · <a href="https://developer.chrome.com/docs/ai/built-in-apis">Check the current API catalog</a> · Stable APIs do not require EPP.</p>

---

<!-- .slide: class="center-slide" -->

## Take this journey with you

<div class="chrome-availability"><code>detect</code><span>→</span><code>availability</code><span>→</span><code>create</code><span>→</span><code>run</code><span>→</span><code>cleanup</code></div><div class="chrome-boundary"><p>Start with a user task. Check its exact requirements. Design the unavailable and download states.</p></div>

---

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">HANDS-ON WORKSHOP</p>

## Your turn to build

<p class="chrome-subtitle">Choose an exercise and put Chrome’s built-in AI into practice.</p>

---

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">OFFICIAL CHROME DOCUMENTATION</p>

## References

<div class="chrome-references">
  <a class="chrome-reference" href="https://developer.chrome.com/docs/ai/built-in-apis"><p><strong>API catalog</strong><br/><code>developer.chrome.com/docs/ai/built-in-apis</code></p></a>
  <a class="chrome-reference" href="https://developer.chrome.com/docs/ai/get-started"><p><strong>Setup and requirements</strong><br/><code>developer.chrome.com/docs/ai/get-started</code></p></a>
  <a class="chrome-reference" href="https://developer.chrome.com/docs/ai/translator-api"><p><strong>Translator API</strong><br/><code>developer.chrome.com/docs/ai/translator-api</code></p></a>
  <a class="chrome-reference" href="https://developer.chrome.com/docs/ai/prompt-api"><p><strong>Prompt API</strong><br/><code>developer.chrome.com/docs/ai/prompt-api</code></p></a>
</div>

<p class="chrome-version-note">Reviewed 10 November 2026 · Check current documentation before presenting.</p>

--

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
      <a href="https://developer.chrome.com/docs/ai/built-in" target="_blank">
        <p>Chrome built-in AI<br/><code>developer.chrome.com/docs/ai/built-in</code></p>
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

- Invite people to scan the LinkedIn QR code and try the examples later.
- Point out that the project is a teaching surface: each demo shows capability state, output, code path, and lifecycle.
- Mention the official documentation and Early Preview Program for people who want to track experimental APIs.
- Leave this slide visible for roughly one minute.

</aside>
