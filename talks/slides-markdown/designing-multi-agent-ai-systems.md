<!-- .slide: class="center-slide" data-visibility="hidden" -->

## <span class="underline-accent">Agenda</span>

- What is an AI Agent?

- What are the different types of Agentic Systems?

- What are the building blocks of a Multi-Agent System?

- How to ensure if a Multi-Agent System is safe and reliable?

- Case Study: KeyFinz AI Assistant (Optional)

---

<!-- .slide: class="center-slide" -->

## <span class="fragment strike">What is an Agent?</span>

<div class="fragment">

## <span class="underline-accent">What is a LLM?</span>

A language model trained on large amounts of data that generates text based on patterns learned during training.

<div class="pt-8">

<img src="assets/ai-agents/llm.png" alt="LLM Flow" style="max-height: min(70vh, 900px);" />

</div>

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">What is an Agent?</span>

<div class="pt-8">

An Agent uses a <span class="emphasis-success">LLM</span> to reason and <span class="emphasis-info">tools</span> to interact with the external environment. The <span class="emphasis-warning">orchestration layer</span> decides which tools to use and when.

</div>

<!-- <div class="fragment pt-12">

Google calls these components as:

- LLM -> The Brain

- Tools -> The Hands

- Orchestration Layer -> The Mind
</div> -->

--

<!-- .slide: class="center-slide" -->

### <span class="underline-accent">Example</span>

<img src="assets/ai-agents/ai-agent.png" alt="Agent Flow" style="max-height: min(70vh, 900px);" />

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">What is an Agentic System?</span>

<div class="pt-6">

A software system that uses one or more AI agents to perform tasks <span class="emphasis-accent">autonomously</span>.

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Levels of Agentic Systems</span>

<img src="assets/ai-agents/agentic-system.png" alt="Agentic System Pyramid" style="max-height: min(70vh, 900px);" />

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Level 0</span>: AI Agent with <span class="highlight-accent">LLM</span>

The most <span class="emphasis-accent">basic form</span> of an agentic system.

<div class="fragment pt-8">

<span class="emphasis-info">

**Scenario:** An AI chat assistant that tells jokes.

</span>

<div class="pt-6 italic emphasis-success">

Prompt: "Tell me a joke about AI."

</div>

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Level 1</span>: AI Agent with <span class="highlight-accent">LLM + Tools</span>

Connects LLMs to <span class="emphasis-accent">external environment</span> via tools.

<div class="fragment pt-8">

<span class="emphasis-info">

**Scenario:** A customer support AI Assistant that understands user queries and calls external APIs to fetch order information.

</span>

<div class="pt-6 italic emphasis-success">

Prompt: "Fetch the order status for order #12345."

</div>

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Level 2</span>: AI Agent with

## <span class="highlight-accent line-break">LLM + Tools + Memory & Context</span>

<div class="pt-6">

We move from executing simple tasks to strategically planning complex, <span class="emphasis-accent">multi-part goals</span> with the help of <span class="emphasis-accent">memory and context</span>.

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Level 2 Example</span>

<div class="pt-6">

<span class="emphasis-info">**Scenario:** A travel AI assistant finds a shop between two locations that matches user preferences.
</span>

<div class="pt-6 italic emphasis-success">

Prompt: "Find a good coffee shop halfway between my office and my client's office."

</div>

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Level 2 Example: Execution</span>

<div class="pt-8">

Retrieves addresses from <span class="emphasis-accent">memory</span> for both offices, reasons through the task, and updates <span class="emphasis-accent">context</span> after each tool call.

</div>

<div class="pt-8 text-start" style="font-size: 28px;">

<span class="emphasis-success">Iteration 1:</span> Calls Maps API with both addresses to calculate halfway point.

<span class="text-2xl italic opacity-75">(Stores the midpoint location in context.)</span>

<span class="emphasis-info">Iteration 2:</span> Calls search tool to find coffee shops near the midpoint.

<span class="text-2xl italic opacity-75">(Reasons that "good" means rating > 4.0, stores criteria in context.)</span>

<span class="emphasis-warning">Iteration 3:</span> Synthesizes the results and returns response to user.

</div>

--

<!-- .slide: class="center-slide" data-visibility="hidden" -->

## <span class="underline-accent">Iteration 1</span>

<div class="pt-8 text-start" style="font-size: 32px;">

- <span class="emphasis-success">Think: "I must first find the halfway point between the two offices."</span>

<div class="fragment pt-6">

- <span class="emphasis-info">Act: Call Maps tool with both office addresses.</span>

</div>

<div class="fragment pt-6">

- <span class="emphasis-warning">Observe: "The halfway point is location X."</span>

</div>

<div class="fragment pt-6">

- <span class="emphasis-accent">Adds to context.</span>

</div>

</div>

--

<!-- .slide: class="center-slide" data-visibility="hidden" -->

## <span class="underline-accent">Iteration 2</span>

<div class="pt-8 text-start" style="font-size: 32px;">

- <span class="emphasis-info">Think: "Now find highly-rated coffee shops near location X that serve quality espresso."</span>

<div class="fragment pt-6">

- <span class="emphasis-success">Act: Search coffee shops near location X with min_rating=4.0 and specialty=espresso.</span>

</div>

<div class="fragment pt-6">

- <span class="emphasis-warning">Observe: "Found 'The Daily Brew' and 'Espresso House'."</span>

</div>

<div class="fragment pt-6">

- <span class="emphasis-accent">Adds to context.</span>

</div>

</div>

--

<!-- .slide: class="center-slide" data-visibility="hidden" -->-->

## <span class="underline-accent">Iteration 3</span>

<div class="pt-8 text-start" style="font-size: 32px;">

- <span class="emphasis-info">Think: "Synthesize the results for the user."</span>

<div class="fragment pt-6">

- <span class="emphasis-success">Act: Compile with hours, ratings, and directions.</span>

</div>

<div class="fragment pt-6">

- <span class="emphasis-warning">Observe: "Both open at 7 AM, 4.5+ stars, 10 mins away."</span>

</div>

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Level 3</span>: AI Agent with

## <span class="highlight-accent">LLM + Tools + Memory & Context + Orchestration Layer</span>

<div class="pt-8">

Now you have everything you already had but with <span class="emphasis-success">multiple agents</span> working together, coordinated by an <span class="emphasis-info">orchestration layer</span>.

We call this level <span class="emphasis-accent">Multi-Agent System</span>.

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Level 4</span>: Self-Evolving Agents

<div class=" pt-6">

Here agents can <span class="emphasis-success">self-evolve</span> without <span class="emphasis-danger">human intervention</span> at the <span class="emphasis-info">architecture level</span>.

<span class="emphasis-warning">**Example:** Google Co-Scientist.

</div>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Deep Dive Multi-Agent System</span>

<div class="pt-6">

In level 3, multiple agents work together, coordinated by an <span class="emphasis-accent">orchestration layer</span>.

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Why Multiple Agents?</span>

<div class="pt-6">

When a single agent handles too many responsibilities, its prompt becomes <span class="emphasis-danger">complex and harder to maintain</span>, leading to decreased accuracy and reliability.

</div>

<div class="fragment pt-8">

With multiple agents, each agent can focus on a specific sub-task within a larger workflow, improving <span class="emphasis-success">cost, accuracy, reliability, and maintainability</span>.

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">What is an Orchestration Layer?</span>

<div class="pt-6">

A <span class="emphasis-accent">design pattern</span> where a <span class="emphasis-success">coordinator agent (parent agent)</span> routes tasks to <span class="emphasis-info">specialized sub-agents (child agents)</span>, <span class="emphasis-warning">manages the workflow between them, and maintains shared context across the system.</span>

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">How It Works</span>

<div class="pt-6">

<img src="assets/ai-agents/multi-agent-architecture.png" alt="Multi-Agent System Architecture" style="max-height: min(50vh, 550px);" />

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Common Design Patterns:</span>

<div class="pt-6 text-start">

- Sequential

- Parallel

- Handoff/Coordinator

</div>

<div class="pt-6">

The <span class="emphasis-success">base design remains the same</span>. The major difference is <span class="emphasis-info">how sub-agents are called by the orchestrator agent</span>.

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">How to Ensure Safety?</span>

<div class="pt-6">

We introduce <span class="emphasis-accent">guardrails</span>.

</div>

<div class="pt-8">

Guardrails are <span class="emphasis-success">safety mechanisms</span> that validate inputs and outputs, filter harmful content, enforce policies, and prevent unwanted agent behavior.

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Multi-Agent System with Guardrails</span>

<div class="max-w-[1500px]">

<img src="assets/ai-agents/multi-agent-architecture-guardrails.png" alt="Multi-Agent System with Guardrails" style="max-height: min(70vh, 900px);" />

</div>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">How Do We Test The System?</span>

<div class="pt-6">

<span class="emphasis-danger">Agents won't always return the same response for the same given input.</span>

<span class="emphasis-success">That's expected</span>.

</div>

<div class="fragment pt-8">

Instead of testing exact outputs, we test <span class="emphasis-accent">quality and acceptability</span>.

</div>

<!-- ## <spanAcceptance Criteria Examples

<div class="fragment pt-6 text-start">

- Does it answer according to its role?
- Does it answer in the right direction?
- Does it avoid internal details?

</div> -->

--

<!-- .slide: class="center-slide" -->

<!-- ## <span class="underline-accent">Using Agents to Evaluate Agents</span> -->

## <a class="underline-accent" data-preview-image="assets/memes/spider-man-pointing-agents.gif">Using Agents to Evaluate Agents</a>

<div class="pt-6">

One helpful pattern: <span class="emphasis-accent">evaluator or critic agents</span>.

</div>

<div class="fragment pt-8 text-start">

These agents:

- Review outputs from other agents

- Flag low-quality or undesired responses

</div>

<div class="fragment pt-8">

Note: Such agents evaluate response <span class="highlight-success">quality, relevance, and tone</span>. They complement <span class="text-success">guardrails</span>, which focus on preventing harmful outputs and enforcing hard constraints.

</div>

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Case Study: KeyFinz AI Assistant</span>

<div class="pt-6">

A finance tracking application where you can record personal finances and interact with an AI assistant in natural language to get insights on your data.

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Demo</span>

<div class="pt-6">

<img src="assets/ai-agents/keyfinz.gif" alt="KeyFinz AI Assistant Demo" style="max-height: min(60vh, 550px);" />

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Interaction Flow</span>

<div class="pt-6" style="font-size: 22px;">

| <span class="emphasis-info">**User Prompt**</span>                                               | <span class="emphasis-success">**Assistant Response**</span>                                                          | <span class="emphasis-accent">**Agent Used**</span>                        | <span class="emphasis-warning">**What Happened**</span>                                                                                                                                                              |
| :----------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="fragment" data-fragment-index="1">Hey!</span>                                       | <span class="fragment" data-fragment-index="1">Returns greetings</span>                                               | <span class="fragment" data-fragment-index="1">Greeting Agent</span>       | <span class="fragment" data-fragment-index="1">Basic LLM capabilities</span>                                                                                                                                         |
| <span class="fragment" data-fragment-index="2">How is the weather today?</span>                  | <span class="fragment" data-fragment-index="2">Out of Scope query, reroute to ask questions regarding finances</span> | <span class="fragment" data-fragment-index="2">Out of Scope Agent</span>   | <span class="fragment" data-fragment-index="2">Basic LLM capabilities</span>                                                                                                                                         |
| <span class="fragment" data-fragment-index="3">How much I spent on food this year?</span>        | <span class="fragment" data-fragment-index="3">Returns aggregated number from DB for 2026</span>                      | <span class="fragment" data-fragment-index="3">Finance Query Agent</span>  | <span class="fragment" data-fragment-index="3"><span class="emphasis-accent">LLM to SQL</span> → <span class="emphasis-info">Tool to fetch data</span> → <span class="emphasis-success">LLM to process</span></span> |
| <span class="fragment" data-fragment-index="4">And last year?</span>                             | <span class="fragment" data-fragment-index="4">Could not find any expense for food category in 2025</span>            | <span class="fragment" data-fragment-index="4">Finance Query Agent</span>  | <span class="fragment" data-fragment-index="4">Used <span class="emphasis-accent">memory</span> to recall previous context</span>                                                                                    |
| <span class="fragment" data-fragment-index="5">ok now give me best advice on saving money</span> | <span class="fragment" data-fragment-index="5">Gave generic advice on saving money</span>                             | <span class="fragment" data-fragment-index="5">Finance Advice Agent</span> | <span class="fragment" data-fragment-index="5">Basic LLM capabilities</span>                                                                                                                                         |

</div>

--

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">System Design</span>

<img src="assets/ai-agents/keyfinz.png" alt="KeyFinz AI Assistant Architecture" style="max-height: min(70vh, 900px);" />

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Summary</span>

<div class="pt-6 text-start">

- Agents are more than LLMs

- Multi-agent systems enable scalability

- Context and memory are critical

- Safety requires guardrails

- Test for acceptability, not exactness

</div>

--

<!-- .slide: class="center-slide" -->

<img src="assets/memes/thankyou.gif" alt="Thankyou" style="max-height: min(70vh, 900px);" />

---

<!-- .slide: class="center-slide" -->

## <span class="underline-accent">Citations & Resources</span>

<div class="pt-6 text-white text-3xl">

<style>
.text-white a { color: white !important; }
</style>

- https://www.kaggle.com/whitepaper-introduction-to-agents

- https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/ai-agent-design-patterns

- https://google.github.io/adk-docs/agents/multi-agents/

- https://openai.github.io/openai-agents-js/guides/multi-agent/

- https://openai.github.io/openai-agents-js/guides/context/

- https://openai.github.io/openai-agents-js/guides/guardrails/

- https://github.com/asadkhalid305/streamwise-ai/tree/template

</div>
