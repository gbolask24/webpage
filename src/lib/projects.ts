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
        body: "Production AI systems shouldn't be locked to a single LLM provider. Outages, cost swings, and model changes break apps that are hard-wired to one SDK — and there's rarely clear visibility into what each request actually costs.",
      },
      {
        heading: "What I built",
        body: "A FastAPI service that exposes one messages-first endpoint and routes each request to the chosen provider, with automatic fallback chains, response normalisation, token-based cost estimation, structured logging, and a pluggable provider registry. The whole thing ships in Docker with pytest coverage.",
      },
      {
        heading: "The effect",
        body: "Applications can switch providers — or fail over automatically — without any code changes, with full cost and reliability visibility for every call.",
      },
    ],
  },
  {
    slug: "ai-ops-monitor",
    title: "AI Operations Monitor",
    tagline:
      "A lightweight observability layer for AI-assisted customer operations.",
    cardDescription:
      "Open-source FastAPI + Postgres + Grafana stack tracking AI latency, cost, and failure trends.",
    stack: ["Python", "FastAPI", "Postgres", "Grafana", "Docker Compose"],
    repoUrl: "https://github.com/gbolask24/ai-ops-monitor",
    sections: [
      {
        heading: "The problem",
        body: "AI workflows are hard to trust in production without visibility into how they actually behave — latency, cost per request, schema validity, and where things quietly fail.",
      },
      {
        heading: "What I built",
        body: "A thin FastAPI webhook receiver that ingests chat events, workflow runs, and AI telemetry into Postgres, surfaced through provisioned Grafana dashboards. It tracks latency, cost, schema validity, escalation, and failure trends, and runs end to end with a single Docker Compose command.",
      },
      {
        heading: "The effect",
        body: "Real-time operational visibility into AI systems — spotting regressions, runaway costs, and failing workflows before they reach customers.",
      },
    ],
  },
  {
    slug: "exec-ai-assistant",
    title: "Executive AI Assistant",
    tagline:
      "A director-level AI operating system with voice and chat that takes real actions across Microsoft 365.",
    cardDescription:
      "Conversational AI assistant (voice + chat) that manages email, calendar, meetings, and calls.",
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
        body: "A busy director loses hours every week to email triage, scheduling, meeting prep, and follow-ups scattered across separate tools — with important threads slipping through the cracks.",
      },
      {
        heading: "What I built",
        body: "A conversational app with chat and always-on realtime voice and full tool-calling. It reads and writes email, manages tasks and calendar, captures meetings, generates pre-meeting briefs, places outbound calls, and remembers durable context across sessions. Side-effecting actions fan out through dedicated automation workflows that hold the credentials, and every write is confirmed before it fires.",
      },
      {
        heading: "The effect",
        body: "Collapses a director's scattered admin into a single assistant — fewer dropped threads, faster meeting prep, and far less time spent in the inbox.",
      },
    ],
  },
  {
    slug: "ai-support-platform",
    title: "AI Customer Support Platform",
    tagline:
      "An AI-first customer support platform spanning multiple e-commerce stores.",
    cardDescription:
      "LLM-routed support unifying chat, email, form, and voice with ERP, CRM, and courier integrations.",
    stack: [
      "Python",
      "LLM APIs",
      "n8n",
      "ERP / CRM integrations",
      "Grafana",
    ],
    sections: [
      {
        heading: "The problem",
        body: "A multi-store retailer was handling high volumes of repetitive customer queries across fragmented channels, with no consistent way to route, answer, or measure them.",
      },
      {
        heading: "What I built",
        body: "An AI-driven support system with LLM-based routing, tool invocation, and a multi-provider abstraction that unifies chat, email, form, and voice into one pipeline — integrated with ERP, CRM, and courier APIs. Structured-output validation and guardrails keep responses reliable, and observability tracks quality over time.",
      },
      {
        heading: "The effect",
        body: "Automates the bulk of routine queries and routes the rest intelligently, while keeping customer satisfaction high.",
      },
    ],
  },
  {
    slug: "agentic-content-pipeline",
    title: "Agentic Product Content Pipeline",
    tagline:
      "A multi-agent pipeline that turns raw supplier data into published, search-optimised product content.",
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
        body: "Building a large product catalogue by hand is slow, inconsistent, and simply doesn't scale as supplier data grows.",
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
