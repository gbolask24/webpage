export interface ProjectSection {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  /** Short one-liner used on the homepage card. */
  cardDescription: string;
  /** Richer 140-160 char description for SEO meta tags. */
  seoDescription: string;
  stack: string[];
  /** Public GitHub repo, if open source. */
  repoUrl?: string;
  /** Public live demo, if there is one. */
  demoUrl?: string;
  /** ISO date (YYYY-MM-DD) of the last meaningful update, for sitemap lastmod. Optional. */
  updated?: string;
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "exec-ai-assistant",
    title: "Executive AI Assistant",
    tagline:
      "A voice and chat AI agent that runs real business operations, from inbox and calendar to outbound calls.",
    cardDescription:
      "Voice-and-chat AI co-pilot that triages email, runs the calendar, preps meetings, and places calls.",
    seoDescription:
      "A voice-and-chat AI agent that takes real actions across the systems a business runs on, behind human-in-the-loop controls. An agentic engineering case study.",
    stack: [
      "TypeScript",
      "Next.js",
      "OpenAI Realtime",
      "Microsoft Graph",
      "WebRTC",
      "Bun",
      "SQLite",
      "Webhooks",
    ],
    updated: "2026-10-01",
    sections: [
      {
        heading: "The problem",
        body: "The person running a business is the bottleneck. Email triage, scheduling, meeting prep, and follow-ups eat the day, and the threads that slip are usually the ones that mattered most.",
      },
      {
        heading: "What I built",
        body: "A multi-agent assistant you talk to, by voice or chat, that acts on your behalf across the tools the business already runs on, Microsoft 365 among them. Several agents cooperate through an orchestration layer I wrote in TypeScript on top of the provider agent SDKs, which holds their state, routes their tool calls, and keeps memory between sessions. The assistant triages and drafts email, runs the calendar and task list, writes a brief before each meeting, and places outbound calls. Voice is always on, over the OpenAI Realtime API and WebRTC. Every action that changes something is confirmed before it fires, and credentials never touch the model.",
      },
      {
        heading: "My approach",
        body: "Tool-calling is the core abstraction: the agent reasons in plain language and acts through typed, validated functions. Latency, tool-call success, and cost are instrumented end to end, and every write passes a confirmation gate, so the system stays fast, observable, and safe to let loose on a real inbox.",
      },
      {
        heading: "The result",
        body: "Hours of admin handled before the working day starts, nothing dropped, and a clear audit trail behind every action taken.",
      },
    ],
  },
  {
    slug: "federated-agent-platform",
    title: "Federated Agent Platform",
    tagline:
      "One assistant across every internal app, with each app keeping ownership of its own tools.",
    cardDescription:
      "A hub that joins a company's internal apps into one agent surface, with per-user permissions, audit, and a typed memory layer.",
    seoDescription:
      "A hub federating internal business apps into one agent surface: a shared tool contract, per-user manifests, grant-filtered access, audit, and typed agent memory.",
    stack: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Zod",
      "Agent memory",
    ],
    updated: "2026-10-01",
    sections: [
      {
        heading: "The problem",
        body: "A company that builds an agent into each internal app ends up with many assistants that cannot see each other. Staff have to know which app holds the answer before they can ask the question, and every team solves permissions and audit again from scratch.",
      },
      {
        heading: "What I built",
        body: "A hub that federates the company's internal applications into one agent surface. Each app implements the same agent-tool contract and serves a tool manifest for the signed-in user. The hub collects those manifests, filters them by what that person has been granted, proxies each call to the app that owns the tool, and writes an audit record on both sides. Staff talk to one assistant and it reaches whichever system has the answer.",
      },
      {
        heading: "How memory works",
        body: "The assistant has a typed memory layer. Every memory has a kind, a record of where it came from, an importance score, and a last-used date. People can pin a memory or restrict who sees it. Remembering and forgetting are tools the agent has to ask permission to use, and a forgotten memory is archived, never deleted. A nightly job consolidates what was learned that day.",
      },
      {
        heading: "My approach",
        body: "Reads and writes are treated differently. A read tool runs straight away. A write tool has no execute path of its own: it produces a proposal that the person confirms. Each app stays in charge of its own data and rules, so adding an app to the estate means implementing the contract, with no change to the hub.",
      },
      {
        heading: "The result",
        body: "Staff across the business use one assistant for work that spans many systems, and every tool call can be traced to the person, the app, and the grant that allowed it.",
      },
    ],
  },
  {
    slug: "agentic-content-pipeline",
    title: "Agentic Product Content Pipeline",
    tagline:
      "A multi-agent pipeline that builds an entire product catalogue from raw supplier data.",
    cardDescription:
      "Multi-agent ingestion, enrichment, and publishing with a Pinecone-backed RAG taxonomy.",
    seoDescription:
      "A multi-agent pipeline turning raw supplier data into published product content, with Pinecone RAG taxonomy classification and schema-guarded, validated outputs.",
    stack: [
      "Python",
      "OpenAI",
      "Pinecone (RAG)",
      "Docker",
      "Structured output validation",
      "Evals",
    ],
    updated: "2026-10-01",
    sections: [
      {
        heading: "The problem",
        body: "Cataloguing products by hand does not scale. As supplier feeds grow, listings get slower to produce and less consistent, and the backlog only ever gets longer.",
      },
      {
        heading: "What I built",
        body: "A pipeline of cooperating agents that ingest supplier data, extract and enrich attributes, validate against a schema, and publish, with a Pinecone-backed retrieval layer classifying each product into the right place in the taxonomy. Output is structured and quality-gated at every step.",
      },
      {
        heading: "My approach",
        body: "I split the work across specialised agents so each step, extract, enrich, validate, and publish, is independently testable. A Pinecone-backed retrieval layer keeps taxonomy classification accurate, and schema-guarded outputs mean nothing reaches the catalogue unvalidated. An eval harness with deterministic checks runs before any prompt or model change goes live, which is also how I moved work to cheaper models once their scores held.",
      },
      {
        heading: "The result",
        body: "A small team ships a catalogue that would otherwise need a department, at a consistency manual entry never reaches.",
      },
    ],
  },
  {
    slug: "ai-support-copilot",
    title: "AI Customer Support Co-pilot",
    tagline:
      "AI that resolves the routine and drafts the rest, on a support desk you fully own.",
    cardDescription:
      "Self-hosted support stack with AI routing, drafted replies, and back-office automations.",
    seoDescription:
      "AI co-pilots and automations on a self-hosted, open-source support desk: LLM routing, guardrailed replies, and human-in-the-loop escalation across every channel.",
    stack: ["Python", "LLM APIs", "Webhooks", "Docker", "Self-hosted"],
    sections: [
      {
        heading: "The problem",
        body: "Support teams answer the same questions all day across disconnected channels, and bolt-on AI tends to reply confidently and wrongly, which costs more trust than it saves time.",
      },
      {
        heading: "What I built",
        body: "An open, self-hosted support platform with AI built into the workflow rather than bolted on. It routes incoming messages, drafts replies for an agent to approve, validates every answer against a strict schema, and reaches into ERP, CRM, and courier systems to act on real orders. Chat, email, and forms run through one queue.",
      },
      {
        heading: "My approach",
        body: "Human-in-the-loop by default: the AI drafts and routes, a person approves anything that carries risk. Answers are schema-validated and the desk is wired to back-office systems through event-driven hooks, so automation scales without sacrificing accuracy or auditability.",
      },
      {
        heading: "The result",
        body: "Agents stop repeating themselves and start handling the exceptions, while answers stay accurate because a human signs off on anything that carries risk.",
      },
    ],
  },
  {
    slug: "microsoft-automation",
    title: "Workplace Automation on the Microsoft Stack",
    tagline:
      "Automations and Copilot agents for the everyday work of every department, built on tools the business already had.",
    cardDescription:
      "Power Automate and Power Apps workflows, Copilot Studio agents, and desktop RPA for legacy processes.",
    seoDescription:
      "Power Automate and Power Apps workflows, Copilot Studio agents over Microsoft 365 and ERP data, and desktop RPA for legacy processes, rolled out company-wide.",
    stack: [
      "Power Automate",
      "Power Apps",
      "Copilot Studio",
      "Copilot Agent Builder",
      "Power Automate Desktop",
      "Automation Anywhere",
      "Microsoft 365",
      "Business Central",
    ],
    updated: "2026-10-01",
    sections: [
      {
        heading: "The problem",
        body: "Much of the routine work in a business sits between systems: a form that has to be retyped, an approval that waits in an inbox, a report someone assembles by hand each week. Most of it is too small to justify a software project, so it stays manual.",
      },
      {
        heading: "What I built",
        body: "Power Automate and Power Apps automations for the day-to-day workflows of every department and branch. Copilot Studio and Copilot Agent Builder agents answer questions over Microsoft 365 and ERP data. Where an older desktop system has no API, Power Automate Desktop and Automation Anywhere drive its screens.",
      },
      {
        heading: "My approach",
        body: "I started from what each team did by hand and automated the steps they agreed were routine. Staying on the platform the business already used meant sign-in and permissions were already in place, and nothing new had to be bought or hosted.",
      },
      {
        heading: "The result",
        body: "Internal workflows, communications, and reporting across the business run with far less retyping and chasing.",
      },
    ],
  },
  {
    slug: "ai-crm-copilot",
    title: "AI-Native CRM",
    tagline:
      "A CRM that does the admin itself, instead of asking your team to feed it.",
    cardDescription:
      "Open-source CRM with AI co-pilots, automatic enrichment, and natural-language actions.",
    seoDescription:
      "An open-source, AI-native CRM built around co-pilots and automations: self-enriching records, automated follow-ups, and natural-language pipeline actions.",
    stack: ["TypeScript", "React", "GraphQL", "PostgreSQL", "AI co-pilots"],
    sections: [
      {
        heading: "The problem",
        body: "Teams buy a CRM to move faster and then lose hours feeding it: chasing updates, enriching records, and writing the same follow-ups by hand. The tool meant to help becomes the chore.",
      },
      {
        heading: "What I built",
        body: "An open-source, AI-native CRM where co-pilots live inside the workflow. Records enrich themselves, follow-ups and status changes run automatically, and anyone can query or update the pipeline in plain language instead of clicking through forms. It runs on a modern TypeScript and GraphQL stack with pluggable automations.",
      },
      {
        heading: "My approach",
        body: "I treated the CRM as a set of automatable workflows rather than static forms. Co-pilots run on a typed GraphQL layer with pluggable automations, so enrichment and follow-ups happen as background jobs while the team interacts in natural language.",
      },
      {
        heading: "The result",
        body: "The pipeline stays current on its own, so the team spends its time on relationships and deals rather than on the system that was supposed to help them close.",
      },
    ],
  },
  {
    slug: "ai-content-engine",
    title: "Alice, AI Task and Content Studio",
    tagline:
      "Task tracking and content generation in one studio, writing in a real person's voice.",
    cardDescription:
      "Tasks and multi-channel content in one studio, with a five-stage agent pipeline, a copilot, and an MCP server.",
    seoDescription:
      "An AI-native task and content studio: a Router, Retriever, Generator, Critic and Polisher pipeline, a confirmation-gated copilot, an MCP server, and learned voice.",
    stack: [
      "Next.js",
      "TypeScript",
      "Vercel AI SDK",
      "SQLite",
      "MCP",
      "Multi-agent",
    ],
    updated: "2026-10-01",
    sections: [
      {
        heading: "The problem",
        body: "Generic AI writing is easy to spot and easy to ignore. The hard part was never producing more words, it was sounding like a specific, credible person while doing it at volume. The briefs, deadlines, and approvals around the writing usually sit in a separate tool, so the work gets split across two places.",
      },
      {
        heading: "What I built",
        body: "A studio that holds the tasks and the content together. A brief goes through a pipeline of five agents: a Router decides what kind of piece it is, a Retriever pulls reference posts and the author's own drafts, a Generator writes variants, a Critic scores them, and a Polisher tidies the ones that pass. A copilot works on tasks, drafts, and the library through tools, and every write shows a confirmation card first. The same tools are exposed through an MCP server, over stdio and HTTP, so other agents can drive the studio.",
      },
      {
        heading: "How it remembers",
        body: "Voice comes from three layers: a style learned from each author's own drafts, a shared house style, and an optional brand modifier. Trends are stored as facts with an expiry date. Duplicate topics are merged by meaning, and anything a person has edited is protected from being overwritten by a later run.",
      },
      {
        heading: "My approach",
        body: "Each stage of the pipeline is small enough to test alone. The Critic scores every variant on voice match, hook, clarity, and platform fit, and if polishing lowers a score the original wins.",
      },
      {
        heading: "The result",
        body: "On-brand writing at the pace of a team, in a voice readers recognise as the author's, with the tasks behind it tracked in the same place.",
      },
    ],
  },
  {
    slug: "local-agent-panel",
    title: "Local Agent Panel and Framework Benchmark",
    tagline:
      "A three-agent judgement panel and a tool-calling benchmark, both running on a small open-weight model on a laptop.",
    cardDescription:
      "Researcher, Critic, and Chair deliberation on a local Qwen model, plus a tool-calling comparison of AgentScope and Qwen-Agent.",
    seoDescription:
      "A Researcher, Critic and Chair judgement panel on a local Qwen model, with a tool-calling benchmark across a raw API call, AgentScope, and Qwen-Agent.",
    stack: ["Python", "AgentScope", "Qwen-Agent", "Ollama", "MCP"],
    repoUrl: "https://github.com/gbolask24/agent-panel-agentscope",
    updated: "2026-10-01",
    sections: [
      {
        heading: "The problem",
        body: "Agent frameworks are easy to adopt and hard to compare. I wanted to know what AgentScope and Qwen-Agent add over a plain API call, and whether a small open-weight model on a laptop can run a multi-agent workflow at all.",
      },
      {
        heading: "What I built",
        body: "A panel of three agents, a Researcher, a Critic, and a Chair, that review a piece of work. Each panellist records a structured verdict before seeing anyone else's, then they exchange views once, and the Chair gives a final verdict that names any dissent it overruled. Every message is written to a log. Alongside the panel is a benchmark that runs the same tool-calling prompts through a raw API call, AgentScope's ReAct agent, and Qwen-Agent, all on the same local Qwen model served by Ollama.",
      },
      {
        heading: "My approach",
        body: "Verdicts are recorded before the exchange because a panellist who sees another view first tends to agree with it, and the log then holds one opinion written three times. Both frameworks also drive an MCP server, and any write through it waits for a person to confirm.",
      },
      {
        heading: "The result",
        body: "The frameworks matched the raw API call on accuracy and added some latency to each call. The repository has the numbers, the failures, and my notes on what I would use each framework for.",
      },
    ],
  },
  {
    slug: "llm-proxy",
    title: "Multi-Provider LLM Proxy",
    tagline:
      "One endpoint for every LLM provider, with automatic failover and cost control built in.",
    cardDescription:
      "Open-source FastAPI gateway with provider fallback, cost tracking, and structured logging.",
    seoDescription:
      "An open-source FastAPI gateway that routes LLM requests across providers with fallback, per-request cost attribution, and structured logging. Anti-vendor-lock-in by design.",
    stack: ["Python", "FastAPI", "OpenAI", "Anthropic", "Docker", "pytest"],
    repoUrl: "https://github.com/gbolask24/multi-provider-llm-proxy",
    sections: [
      {
        heading: "The problem",
        body: "Wiring a product directly to one model provider is a standing liability. When that provider has an outage, raises prices, or changes a model, the whole product feels it, and nobody can say what a single request actually costs.",
      },
      {
        heading: "What I built",
        body: "A FastAPI gateway that puts one messages-first endpoint in front of every provider. It routes each call, fails over automatically, normalises responses, estimates cost per request, and logs everything, with new providers added through a small registry. It ships in Docker with test coverage.",
      },
      {
        heading: "My approach",
        body: "I modelled every provider behind one messages-first contract, so the application never knows which model answered. Fallback, normalisation, and per-request cost accounting live in the gateway, with a pluggable registry and pytest coverage keeping new providers cheap to add.",
      },
      {
        heading: "The result",
        body: "Switching or combining providers becomes a config change instead of a rewrite, and every call is observable and costed.",
      },
    ],
  },
  {
    slug: "north-star-support-bot",
    title: "North Star Support Bot",
    tagline:
      "A customer-support agent inside a working demo shop that anyone can try without keys, accounts, or setup.",
    cardDescription:
      "Deterministic support agent in a demo storefront: order tracking, returns, recommendations, and human handoff, with no runtime dependencies.",
    seoDescription:
      "A deterministic customer-support agent inside a demo storefront: order tracking, returns, recommendations, and human handoff. TypeScript, no runtime dependencies.",
    stack: ["TypeScript", "Vite", "Vitest", "Single-file build"],
    repoUrl: "https://github.com/gbolask24/north-star-support-bot",
    demoUrl: "https://north-star-support-bot-roan.vercel.app",
    updated: "2026-10-01",
    sections: [
      {
        heading: "The problem",
        body: "A support bot demo that needs an API key, an account, or a setup guide rarely gets tried. When the answers come from a model, two reviewers can also see two different conversations.",
      },
      {
        heading: "What I built",
        body: "A support agent for a fictional outdoor-gear shop, placed inside a working storefront with product pages, a cart, and an FAQ. It tracks orders, explains returns and exchanges, recommends products after a clarifying question or two, and hands over to a live agent when asked or when it fails to understand twice. The whole thing builds to a single HTML file that works offline.",
      },
      {
        heading: "My approach",
        body: "The conversation engine is plain TypeScript with no DOM access: an intent recogniser that scores keywords and phrases, and a state machine for the flows. Nothing is random and nothing calls out to a service, so the engine is covered by unit tests and every reviewer sees the same behaviour.",
      },
      {
        heading: "The result",
        body: "Anyone can open the demo and test the full brief in a browser, with the same conversation on every run.",
      },
    ],
  },
  {
    slug: "ai-ops-monitor",
    title: "AI Operations Monitor",
    tagline:
      "The dashboard that tells you when your AI is slow, expensive, or quietly failing.",
    cardDescription:
      "Open-source FastAPI, Postgres, and Grafana stack for AI latency, cost, and failure tracking.",
    seoDescription:
      "An open-source observability layer for AI and agent stacks: latency, cost, schema validity, and failure trends in Postgres and Grafana, up with one command.",
    stack: ["Python", "FastAPI", "Postgres", "Grafana", "Docker Compose"],
    repoUrl: "https://github.com/gbolask24/ai-ops-monitor",
    sections: [
      {
        heading: "The problem",
        body: "Most teams ship AI into production blind. They learn about latency spikes, runaway cost, and silent failures from customers rather than from a dashboard, which means they learn late.",
      },
      {
        heading: "What I built",
        body: "A lightweight telemetry layer that captures chat events, workflow runs, and model calls into Postgres and surfaces them in provisioned Grafana dashboards, tracking latency, cost, schema validity, escalations, and failure trends. The whole stack comes up with one command.",
      },
      {
        heading: "My approach",
        body: "I kept ingestion deliberately thin: accept telemetry, store it, visualise it. Postgres plus provisioned Grafana means dashboards are reproducible and the whole stack starts with one command, so observability is something you switch on, not a project in itself.",
      },
      {
        heading: "The result",
        body: "Problems surface on a dashboard before they reach the support queue, and cost and reliability stop being guesswork.",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
