<!-- <div class="fragment">
</div> -->

<!-- .slide: class="center-slide" -->

## Designing a Real-World Multi-Agent AI System

--

<!-- .slide: class="center-slide" -->

## Agenda

- What is an AI Agent?
- What are different types of an Agentic Systems?
- What are building blocks of a Multi-Agent System?
- How to ensure if a Multi-Agent System is safe and reliable?
- Case Study: KeyFinz AI Assistant

---

<!-- .slide: class="center-slide" -->

## <span class="line-through-danger">What is an Agent?</span>

## What is a LLM?

A language model trained on large amounts of data that works as a static workflow.

<div class="pt-8">

![LLM Flow](assets/ai-agents/llm.png)

</div>

--

<!-- .slide: class="center-slide" -->

## What is an Agent?

An agent is not just a static workflow.

<div class="fragment pt-8">

It uses a <span class="emphasis-success">LLM</span> to reason and <span class="emphasis-info">tools</span> to coordinate with the external environment, all processed by an <span class="emphasis-warning">orchestration layer</span>.

</div>

<!-- <div class="fragment pt-12">

Google calls these components as:

- LLM -> The Brain

- Tools -> The Hands

- Orchestration Layer -> The Mind
</div> -->

--

<!-- .slide: class="center-slide" -->

### Example

![Agent Flow](assets/ai-agents/ai-agent.png)

---

<!-- .slide: class="center-slide" -->

## What is an Agentic System?

<div class="pt-6">

A software system that uses one or more AI agents to perform tasks <span class="highlight-accent">autonomously</span>.

</div>

--

<!-- .slide: class="center-slide" -->

## Levels of Agentic Systems

![Agentic System Pyramid](assets/ai-agents/agentic-system.png)

--

<!-- .slide: class="center-slide" -->

## Level 0: AI Agent with <span class="highlight-accent">LLM</span>

The most basic form of an agentic system.

<div class="fragment pt-8">

<span class="emphasis-info">

**Example:** A corporate HR AI Assistant trained on company policies, benefits, and procedures that answers employee questions without accessing any live systems or databases.

</span>

<div class="pt-6 italic emphasis-success">

Prompt: "What is the process for applying for parental leave?"

</div>

</div>

--

<!-- .slide: class="center-slide" -->

## Level 1: AI Agent with <span class="highlight-accent">LLM + Tools</span>

Connects limited or outdated LLMs to real-world data and systems via tools.

<div class="fragment pt-8">

<span class="emphasis-info">

**Example:** A customer support AI Assistant that understands user queries and calls external APIs to fetch order status, process returns, and provide personalized recommendations.

</span>

<div class="pt-6 italic emphasis-success">

Prompt: "Fetch the order status for order #12345 from the Orders API and summarize the delivery timeline."

</div>

</div>

--

<!-- .slide: class="center-slide" -->

## Level 2: AI Agent with

## <span class="highlight-accent line-break">LLM + Tools + Memory & Context</span>

<div class="pt-6">

Here's where the complexity begins.

We move from executing simple tasks to strategically planning complex, <span class="emphasis-success">multi-part goals</span> with the help of <span class="emphasis-info">memory and context</span>.

</div>

--

<!-- .slide: class="center-slide" -->

## Level 2 Example

<div class="fragment pt-6">

<span class="emphasis-info">**Scenario:** A travel assistant finds a good coffee shop between two office locations that matches user preferences.
</span>

<div class="pt-6 italic emphasis-success">

Prompt: "Find a good coffee shop halfway between my office and my client's office."

</div>

</div>

--

<!-- .slide: class="center-slide" -->

## Level 2 Example: Thinking Process

<div class="pt-6 text-start leading-relaxed">

1. <span class="emphasis-success">Think: "I must first find the halfway point between the two offices."</span>
   - <span class="emphasis-info">Act: Call Maps tool with both office addresses.</span>
   - <span class="emphasis-warning">Observe: "The halfway point is location X."</span>
2. <span class="emphasis-info">Think: "Now find highly-rated coffee shops near location X that serve quality espresso."</span>
   - <span class="emphasis-success">Act: Search coffee shops near location X with min_rating=4.0 and specialty=espresso.</span>
   - <span class="emphasis-warning">Observe: "Found 'The Daily Brew' and 'Espresso House'."</span>
3. <span class="emphasis-info">Think: "Synthesize the results for the user."</span>
   - <span class="emphasis-success">Act: Compile with hours, ratings, and directions.</span>
   - <span class="emphasis-warning">Observe: "Both open at 7 AM, 4.5+ stars, 10 mins away."</span>

</div>

</div>

--

<!-- .slide: class="center-slide" -->

## Level 3: AI Agent with

## <span class="highlight-accent">LLM + Tools + Memory & Context + Orchestration Layer</span>

<div class="fragment pt-8">

Now you have everything you already had but with <span class="emphasis-success">multiple agents</span> working together, coordinated by an <span class="emphasis-info">orchestration layer</span>.

We call this level <span class="emphasis-warning">Multi-Agent System</span>.

</div>

--

<!-- .slide: class="center-slide" -->

### Why Multiple Agents?

<div class="pt-6">

When requirements grow for a single agent system, it starts <span class="emphasis-danger">hallucinating</span>.

</div>

<div class="fragment pt-8">

We follow what we have done in the history of Software Engineering: break programs into <span class="emphasis-success">single responsibility modules</span>. The same applies to AI Agents.

</div>

--

<!-- .slide: class="center-slide" -->

## Level 4: Self-Evolving Agents

<div class="pt-6">

Agents monitor their own performance and adapt over time. They identify areas for improvement, learn from past interactions, and update their strategies accordingly.

</div>

<div class="fragment pt-8">

The difference: In Level 4, agents can <span class="emphasis-success">self-evolve</span> without human intervention at the <span class="emphasis-info">architecture level</span>.

Such a system is <span class="emphasis-warning">extremely challenging</span>.

</div>

---

<!-- .slide: class="center-slide" -->

## Deep Dive: Level 3 Multi-Agent System

<div class="pt-6">

Multiple agents working together, coordinated by an <span class="emphasis-primary">orchestration layer</span>.

</div>

<!-- <div class="fragment">

Following things are involved here:

- Agents
  - LLM
  - Tools
  - Orchestration Layer
- Context & Memory
- Orchestration Layer (a concept)
</div> -->

<!-- -- -->

<!-- .slide: class="center-slide" -->

<!-- ### Orchestration Layer, A Concept?

You might have noticed I added "a concept" next to system level Orchestration Layer.

Why?

Because this is a design pattern. -->

<!-- .element: class="fragment" -->

<!-- <div class="fragment italic">

Mind that we have orchestration layer inside an Agent which is responsible for

coordinating memory, tools and LLM calls. That is integral component of an agent.

</div> -->

--

<!-- .slide: class="center-slide" -->

## What is an Orchestration Layer?

<div class="pt-6">

A design pattern for creating a central point where an <span class="emphasis-success">orchestrator agent</span> (parent) decides how to call <span class="emphasis-info">sub-agents</span> (children), manages memory & context, and ensures system safety.

</div>

<div class="fragment pt-8 text-start">

Common design patterns:

- Sequential
- Parallel
- Handoff/Coordinator

</div>

<div class="fragment pt-8">

The <span class="emphasis-success">base design remains the same</span>. The major difference is <span class="emphasis-info">how sub-agents are called by the orchestrator</span>.

</div>

--

<!-- .slide: class="center-slide" -->

## How It Works

<div class="max-w-[1100px]">

![Multi-Agent System Architecture](assets/ai-agents/multi-agent-architecture.png)

</div>

--

<!-- .slide: class="center-slide" -->

## How to Ensure Safety?

<div class="pt-6">

We introduce <span class="emphasis-success">guardrails</span>.

</div>

<div class="fragment pt-8">

Guardrails work as an <span class="emphasis-info">API gateway</span> for the agentic system.

</div>

--

<!-- .slide: class="center-slide" -->

## Multi-Agent System with Guardrails

<div class="max-w-[1500px]">

![Multi-Agent System with Guardrails](assets/ai-agents/multi-agent-architecture-guardrails.png)

</div>

---

<!-- .slide: class="center-slide" -->

## How Do We Test The System?

<div class="fragment pt-6">

<span class="emphasis-danger">Agents won't always return the same response for a same given input.</span>

<span class="emphasis-success">That's expected</span>.

</div>

<div class="fragment pt-8">

Instead of testing exact outputs, we test <span class="highlight-accent">quality and acceptability</span>.

</div>

--

<!-- .slide: class="center-slide" -->

## Acceptance Criteria Examples

<div class="fragment pt-6 text-start">

- Does it answer according to its role?
- Does it answer in the right direction?
- Does it avoid internal details?

</div>

--

<!-- .slide: class="center-slide" -->

## Using Agents to Evaluate Agents

<div class="pt-6">

One helpful pattern: <span class="highlight-accent">evaluator or critic agents</span>.

</div>

<div class="fragment pt-8 text-start">

These agents:

- Respond only to outputs from other agents
- Review outputs
- Flag low-quality or undesired responses

</div>

<div class="fragment pt-8">

Note: Such agents test <span class="highlight-success">quality and acceptability</span>, not safety (that's what <span class="text-success">guardrails</span> are for). There's no solid guideline on where and how to use them—it depends on the use case.

</div>

---

<!-- .slide: class="center-slide" -->

## Case Study: <span class="highlight-accent">KeyFinz AI Assistant</span>

<div class="pt-6">

A finance tracking application where you can record personal finances and interact with an AI assistant in natural language to get insights on your data.

</div>

--

<!-- .slide: class="center-slide" -->

![KeyFinz AI Assistant Demo](assets/ai-agents/keyfinz.gif)

--

<!-- .slide: class="center-slide" -->

## System Design

![KeyFinz AI Assistant Architecture](assets/ai-agents/keyfinz.png)

---

<!-- .slide: class="center-slide" -->

## Summary

<div class="pt-6 text-start">

- Agents are more than LLMs

- Multi-agent systems enable scalability

- Context and memory are critical

- Safety requires guardrails

- Test for acceptability, not exactness

</div>

--

<!-- .slide: class="center-slide" -->

## Thanks 🙏

---

<!-- .slide: class="center-slide" -->

## Citations & Resources

<div class="pt-6 text-start">

- https://www.kaggle.com/whitepaper-introduction-to-agents
- https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/ai-agent-design-patterns
- https://google.github.io/adk-docs/agents/multi-agents/
- https://openai.github.io/openai-agents-js/guides/multi-agent/
- https://openai.github.io/openai-agents-js/guides/context/
- https://openai.github.io/openai-agents-js/guides/guardrails/

</div>
