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
      "Next.js",
      "Bun",
      "OpenAI Realtime",
      "Microsoft Graph",
      "SQLite",
      "Webhooks",
    ],
    sections: [
      {
        heading: "The problem",
        body: "The person running a business is the bottleneck. Email triage, scheduling, meeting prep, and follow-ups eat the day, and the threads that slip are usually the ones that mattered most.",
      },
      {
        heading: "What I built",
        body: "An assistant you talk to, by voice or chat, that acts on your behalf across the tools the business already runs on, Microsoft 365 among them. It triages and drafts email, runs the calendar, turns meetings into briefs, places outbound calls, and carries context between sessions. Every action that changes something is confirmed before it fires, and credentials never touch the model.",
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
    title: "AI Content Engine",
    tagline:
      "An AI content engine that writes in a real person's voice, not a generic model's.",
    cardDescription:
      "Multi-channel AI content generator with a three-layer, per-user learned voice model.",
    seoDescription:
      "A multi-channel AI content engine with a three-layer learned voice model and a multi-agent pipeline, so generated writing sounds like a real author at scale.",
    stack: ["Next.js", "TypeScript", "Vercel AI SDK", "SQLite", "Multi-agent"],
    sections: [
      {
        heading: "The problem",
        body: "Generic AI writing is easy to spot and easy to ignore. The hard part was never producing more words, it was sounding like a specific, credible person while doing it at volume.",
      },
      {
        heading: "What I built",
        body: "A content engine that turns a single brief into output across several channels, driven by a library of purpose-built generators and a three-layer voice model: a per-user learned style, a shared house style, and an optional brand modifier. One finished piece can be repurposed into many.",
      },
      {
        heading: "My approach",
        body: "The interesting problem was voice, not volume. A three-layer model separates an individual's learned style from a shared house style and an optional brand modifier, so output stays personal at scale, while a multi-agent pipeline handles generation and repurposing.",
      },
      {
        heading: "The result",
        body: "On-brand writing at the pace of a team, in a voice readers recognise as the author's rather than a model's.",
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
    ],
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
        body: "I split the work across specialised agents so each step, extract, enrich, validate, and publish, is independently testable. A Pinecone-backed retrieval layer keeps taxonomy classification accurate, and schema-guarded outputs mean nothing reaches the catalogue unvalidated.",
      },
      {
        heading: "The result",
        body: "A small team ships a catalogue that would otherwise need a department, at a consistency manual entry never reaches.",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
