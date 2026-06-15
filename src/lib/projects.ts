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
      "A director-level AI operating system with voice and chat that takes real actions across Microsoft 365.",
    cardDescription:
      "Conversational AI co-pilot (voice and chat) that manages email, calendar, meetings, and calls.",
    stack: [
      "Next.js",
      "Bun",
      "OpenAI Realtime",
      "n8n",
      "Microsoft Graph",
      "SQLite",
    ],
    sections: [
      {
        heading: "The problem",
        body: "A busy director loses hours every week to email triage, scheduling, meeting prep, and follow-ups scattered across separate tools, with important threads slipping through the cracks.",
      },
      {
        heading: "What I built",
        body: "A conversational app with chat and always-on realtime voice and full tool-calling. It reads and writes email, manages tasks and calendar, captures meetings, generates pre-meeting briefs, places outbound calls, and remembers durable context across sessions. Side-effecting actions fan out through dedicated automation workflows that hold the credentials, and every write is confirmed before it fires.",
      },
      {
        heading: "The effect",
        body: "Collapses a director's scattered admin into a single co-pilot: fewer dropped threads, faster meeting prep, and far less time spent in the inbox.",
      },
    ],
  },
  {
    slug: "ai-support-copilot",
    title: "AI Customer Support Co-pilot",
    tagline:
      "AI co-pilots and automations layered onto a self-hosted, open-source customer support platform.",
    cardDescription:
      "Self-hosted support stack with AI co-pilots, smart routing, and reply automations.",
    stack: ["Python", "LLM APIs", "n8n", "Webhooks", "Self-hosted"],
    sections: [
      {
        heading: "The problem",
        body: "Support teams drown in repetitive questions across fragmented channels, and most help-desk tools treat AI as a bolt-on rather than part of the workflow.",
      },
      {
        heading: "What I built",
        body: "A self-hosted, open-source support platform extended with AI co-pilots and automations: LLM-driven routing, drafted replies that agents approve, structured-output validation to keep answers reliable, and event-driven workflows that connect the desk to ERP, CRM, and courier systems. Chat, email, and forms are unified into one pipeline.",
      },
      {
        heading: "The effect",
        body: "Automates the bulk of routine queries and drafts the rest for human approval, so a small team handles far more volume without losing quality.",
      },
    ],
  },
  {
    slug: "ai-crm-copilot",
    title: "AI-Native CRM",
    tagline:
      "An open-source CRM rebuilt around AI co-pilots and automations.",
    cardDescription:
      "Open-source CRM with built-in AI co-pilots, record enrichment, and workflow automations.",
    stack: ["TypeScript", "React", "GraphQL", "PostgreSQL", "AI co-pilots"],
    sections: [
      {
        heading: "The problem",
        body: "Traditional CRMs store data but leave the busywork to people: chasing updates, enriching records, drafting follow-ups, and moving deals along by hand.",
      },
      {
        heading: "What I built",
        body: "An open-source, AI-native CRM where co-pilots sit inside the workflow. Records enrich themselves, routine updates and follow-ups are automated, and natural-language actions let the team query and update the pipeline without clicking through forms. It runs on a modern TypeScript stack with a GraphQL API and pluggable automations.",
      },
      {
        heading: "The effect",
        body: "The CRM handles the admin instead of the team, so people spend their time on relationships and deals rather than data entry.",
      },
    ],
  },
  {
    slug: "ai-content-engine",
    title: "AI Content Engine",
    tagline:
      "A multi-channel AI content engine with a learned, per-user voice model.",
    cardDescription:
      "AI content generator across multiple channels with a three-layer learned voice model.",
    stack: ["Next.js", "TypeScript", "Vercel AI SDK", "SQLite", "Multi-agent"],
    repoUrl: "https://github.com/gbolask24/alice",
    sections: [
      {
        heading: "The problem",
        body: "Producing a steady stream of on-brand writing by hand is slow, and generic AI output sounds nothing like the person it is meant to represent.",
      },
      {
        heading: "What I built",
        body: "A content engine that generates across several output channels from a single brief, backed by a dozen curated generators and a three-layer voice model that blends a per-user learned style, a shared house style, and an optional brand-voice modifier. A repurpose action turns one piece into many.",
      },
      {
        heading: "The effect",
        body: "On-brand writing in a fraction of the time, in a voice that actually sounds like its author rather than a generic model.",
      },
    ],
  },
  {
    slug: "llm-proxy",
    title: "Multi-Provider LLM Proxy",
    tagline:
      "A unified API gateway that routes requests across multiple LLM providers behind a single schema.",
    cardDescription:
      "Open-source FastAPI gateway with provider fallback, cost estimation, and structured logging.",
    stack: ["Python", "FastAPI", "OpenAI", "Anthropic", "Docker", "pytest"],
    repoUrl: "https://github.com/gbolask24/multi-provider-llm-proxy",
    sections: [
      {
        heading: "The problem",
        body: "Production AI systems should not be locked to a single LLM provider. Outages, cost swings, and model changes break apps that are hard-wired to one SDK, and there is rarely clear visibility into what each request actually costs.",
      },
      {
        heading: "What I built",
        body: "A FastAPI service that exposes one messages-first endpoint and routes each request to the chosen provider, with automatic fallback chains, response normalisation, token-based cost estimation, structured logging, and a pluggable provider registry. The whole thing ships in Docker with pytest coverage.",
      },
      {
        heading: "The effect",
        body: "Applications can switch providers, or fail over automatically, without any code changes, with full cost and reliability visibility for every call.",
      },
    ],
  },
  {
    slug: "ai-ops-monitor",
    title: "AI Operations Monitor",
    tagline:
      "A lightweight observability layer for AI-assisted operations.",
    cardDescription:
      "Open-source FastAPI, Postgres, and Grafana stack tracking AI latency, cost, and failure trends.",
    stack: ["Python", "FastAPI", "Postgres", "Grafana", "Docker Compose"],
    repoUrl: "https://github.com/gbolask24/ai-ops-monitor",
    sections: [
      {
        heading: "The problem",
        body: "AI workflows are hard to trust in production without visibility into how they actually behave: latency, cost per request, schema validity, and where things quietly fail.",
      },
      {
        heading: "What I built",
        body: "A thin FastAPI webhook receiver that ingests chat events, workflow runs, and AI telemetry into Postgres, surfaced through provisioned Grafana dashboards. It tracks latency, cost, schema validity, escalation, and failure trends, and runs end to end with a single Docker Compose command.",
      },
      {
        heading: "The effect",
        body: "Real-time operational visibility into AI systems, spotting regressions, runaway costs, and failing workflows before they reach customers.",
      },
    ],
  },
  {
    slug: "agentic-content-pipeline",
    title: "Agentic Product Content Pipeline",
    tagline:
      "A multi-agent pipeline that turns raw supplier data into published, structured product content.",
    cardDescription:
      "Multi-agent ingestion, enrichment, and publishing with a Pinecone-backed RAG taxonomy layer.",
    stack: [
      "Python",
      "OpenAI",
      "Pinecone (RAG)",
      "n8n",
      "Structured output validation",
    ],
    sections: [
      {
        heading: "The problem",
        body: "Building a large product catalogue by hand is slow, inconsistent, and simply does not scale as supplier data grows.",
      },
      {
        heading: "What I built",
        body: "A multi-agent system that automates supplier-data ingestion, attribute extraction, enrichment, validation, and publishing, with a Pinecone-backed RAG layer for taxonomy classification and structured JSON-schema outputs guarded for quality.",
      },
      {
        heading: "The effect",
        body: "Let a small team expand a product catalogue many times over while cutting manual onboarding to a fraction of the time.",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
