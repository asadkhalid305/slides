<!--
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
    <p>Supported desktop OS and hardware, at least 22 GB free on the Chrome profile volume, an unmetered first download, and a prepared local model.</p>
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

<p class="chrome-source fragment fade-up" data-fragment-index="1">Source: Chrome built-in AI get-started documentation <a href="https://developer.chrome.com/docs/ai/get-started" target="_blank">[6]</a> · reviewed 10 November 2026</p>

<aside class="notes">

- "First gate" means the Chrome version tells us the API may exist; availability() tells us whether it can run on this device now.
- Correct the shortcut people often take: checking the Chrome version is necessary, but not sufficient.
- Translator and Language Detector use task-specific expert models.
- Summarizer, Prompt, Writer, Rewriter, and Proofreader use Chrome's foundation model.
- The 22 GB is a free-space requirement, not the download size. Audio input also requires a GPU.
- The documented foundation-model device requirements exclude mobile and non-Chromebook-Plus ChromeOS devices.
- Do not read every requirement aloud. Point to availability() as the production rule.

</aside>

--

<!-- .slide: class="center-slide" -->

## The core integration is simple

<pre class="chrome-code chrome-code--narrow chrome-code--compact"><code class="language-javascript">if (!('LanguageModel' in self)) return;

const options = {
  expectedInputs: [{ type: 'text', languages: ['en'] }],
  expectedOutputs: [{ type: 'text', languages: ['en'] }],
};
const status = await LanguageModel.availability(options);
if (status === 'unavailable') return;

const session = await LanguageModel.create({
  ...options,
  monitor(monitor) {
    monitor.addEventListener('downloadprogress', ({ loaded }) =&gt; {
      updateProgress(Math.round(loaded * 100));
    });
  },
});
try {
  const result = await session.prompt(userPrompt);
  showResult(result);
} finally {
  session.destroy();
}</code></pre>

<p class="chrome-subtitle">Check capability. Prepare a session. Prompt it. Clean up.</p>

<p class="chrome-source">Adapted from the official Chrome Prompt API documentation <a href="https://developer.chrome.com/docs/ai/prompt-api" target="_blank">[2]</a> · reviewed 10 November 2026</p>

<aside class="notes">

- LanguageModel is Chrome's Prompt API surface. Feature detection alone does not guarantee that the model can run.
- Pass matching language and modality declarations to availability() and create().
- A user action may be needed to start model preparation. Show progress, errors, cancellation, and an appropriate fallback in a real interface.
- The simple example omits experimental sampling controls. The playground adds session reuse and cancellation around these native calls.
- Destroy a session when the application no longer needs it; try/finally demonstrates cleanup even when prompting fails.

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

<p class="chrome-source fragment fade-up" data-fragment-index="1">Source: Chrome built-in AI requirements and model lifecycle <a href="https://developer.chrome.com/docs/ai/get-started" target="_blank">[6]</a> · reviewed 10 November 2026</p>

<aside class="notes">

- This is the honest close to the built-in AI section, not an argument against it.
- Local models are a great fit for constrained product tasks. Do not promise cloud-model breadth, long-context analysis, or perfect outputs.
- Chrome documents requirements around desktop support, hardware, storage, language, model download, and model eviction under storage pressure.
- Inference can work offline after preparation; loading the page and downloading or updating models may still use the network.
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

<p class="chrome-source fragment fade-up" data-fragment-index="1">Sources: Chrome built-in AI lifecycle <a href="https://developer.chrome.com/docs/ai/get-started" target="_blank">[6]</a> and Prompt API availability guidance <a href="https://developer.chrome.com/docs/ai/prompt-api" target="_blank">[2]</a> · reviewed 10 November 2026</p>

<aside class="notes">

- The first-use experience is an application-design problem, not an implementation detail.
- Chrome documents user activation, availability states, and download-progress monitoring. The fallbacks and validation rule are the product architecture that follows from those constraints.
- The right fallback varies: manual UX, a deterministic capability, or a cloud model. Do not prescribe a cloud fallback where privacy or offline requirements rule it out. The playground does not silently send content to a cloud fallback.
- This concludes the local-AI story. Pause before the recap.

</aside>

---

<!-- .slide: class="center-slide" -->

## Prompt can do more than text

<div class="chrome-card-grid fragment fade-up">
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">STRUCTURED OUTPUT</p>
    <h3>Ask for a shape</h3>
    <p>Request JSON with a schema, then validate both its shape and usefulness.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">MULTIMODAL INPUT</p>
    <h3>Describe an image</h3>
    <p>Declare image and text inputs; check the same options before creating the session.</p>
  </div>
  <div class="chrome-card">
    <p class="chrome-card__eyebrow">STREAMING</p>
    <h3>Show progress and cancel</h3>
    <p>Display partial output as it arrives and make cancellation visible.</p>
  </div>
</div>

<div class="chrome-boundary fragment fade-up">
  <p>Audio input is also documented. The playground's new follow-ups cover JSON, images, and streaming.</p>
</div>

<p class="chrome-source">Source: Chrome Prompt API <a href="https://developer.chrome.com/docs/ai/prompt-api" target="_blank">[2]</a> · reviewed 10 November 2026</p>

---

<!-- .slide: class="center-slide" -->

<p class="chrome-kicker">LIVE DEMO · PROMPT FOLLOW-UPS</p>

## From a prompt to a product experience

<div class="chrome-card-grid fragment fade-up">
  <div class="chrome-card"><h3>1 · Structured feedback</h3><p>Run the sample and inspect the validated sentiment and summary.</p></div>
  <div class="chrome-card"><h3>2 · Local image</h3><p>Select an image and ask for a short description.</p></div>
  <div class="chrome-card"><h3>3 · Streaming</h3><p>Watch partial text arrive, then cancel a request.</p></div>
</div>

<p class="chrome-subtitle">Open the updated local app → Prompt → Production extensions.</p>
<p class="chrome-version-note">Live results depend on Chrome, device capability, model preparation, and the local app version.</p>

---

<!-- .slide: class="center-slide" -->

## Can we use it in a real product?

<div class="chrome-card-grid fragment fade-up">
  <div class="chrome-card"><h3>Drupal</h3><p>Summarizer helps generate SEO tags in CKEditor.</p></div>
  <div class="chrome-card"><h3>Yahoo! Japan</h3><p>Prompt helps moderate community comments.</p></div>
  <div class="chrome-card"><h3>Trip.com</h3><p>AI overviews help people navigate flight options.</p></div>
</div>

<div class="chrome-boundary fragment fade-up"><p>Google-published product examples—not a measure of adoption or a guarantee of device support.</p></div>
<p class="chrome-source">Source: Chrome for Developers <a href="https://developer.chrome.com/blog/build-new-features-using-built-in-ai-in-chrome-io2026" target="_blank">[7]</a> · reviewed 10 November 2026</p>

---

<!-- .slide: class="center-slide" -->

## Which access path do we need?

<div class="chrome-card-grid fragment fade-up">
  <div class="chrome-card"><h3>Stable APIs</h3><p>No Early Preview Program enrollment or trial token required. Check device support and provide a fallback.</p></div>
  <div class="chrome-card"><h3>Origin trials</h3><p>Time-limited experiments use their own registration and token. Local testing may use a flag.</p></div>
  <div class="chrome-card"><h3>Developer trials</h3><p>Experimental APIs have API-specific testing instructions and no general availability promise.</p></div>
</div>

<p class="chrome-subtitle fragment fade-up">The Early Preview Program gives access to earlier ideas; it is not a blanket requirement for stable APIs.</p>
<p class="chrome-source">Sources: Chrome API catalog <a href="https://developer.chrome.com/docs/ai/built-in-apis" target="_blank">[1]</a> and get started <a href="https://developer.chrome.com/docs/ai/get-started" target="_blank">[6]</a> · reviewed 10 November 2026</p>

---

<!-- .slide: class="center-slide" -->

## What to take away

<div class="chrome-takeaways">
  <div class="chrome-takeaway fragment fade-up" data-fragment-index="1">
    <p class="chrome-takeaway__number">01 · A NEW OPTION</p>
    <p>Chrome built-in AI offers browser-managed, local-first capabilities for suitable frontend experiences.</p>
  </div>
  <div class="chrome-takeaway fragment fade-up" data-fragment-index="2">
    <p class="chrome-takeaway__number">02 · DESIGN FOR REAL DEVICES</p>
    <p>Check availability, explain model downloads, validate outputs, and provide a useful fallback.</p>
  </div>
</div>

<aside class="notes">

- Start with a focused user need and choose an API that fits it.
- Availability and user experience matter as much as the integration code.

</aside>

---

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
  <a class="chrome-reference" href="https://developer.chrome.com/blog/build-new-features-using-built-in-ai-in-chrome-io2026" target="_blank">
    <p><strong>[7] Product examples</strong><br/><code>Chrome for Developers · Google I/O 2026</code></p>
  </a>
</div>

<p class="chrome-version-note">Reviewed 10 November 2026 · Citation numbers on earlier slides are clickable.</p>

<aside class="notes">

- This is the reference list for citation numbers [1] through [7] used throughout the talk.
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

</aside>
