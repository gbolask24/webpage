# Gbolagade Personal Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Repurpose the forked Oleg Melnikov landing page into a personal site for Gbolagade Ishola (AI Engineer / AI Automation Architect), replacing all content while keeping the design, layout, and animations.

**Architecture:** Edit the existing section components in place (hero, about, results→impact, connect, header, footer). Replace the homepage video section with a data-driven Projects grid. Delete the 14 marketing resource pages + 2 tool/lead-magnet pages and build 5 project case-study pages under `/projects/*` via a single reusable `ProjectPage` component fed by a `projects.ts` data file. Update all SEO/metadata/config for the new owner and domain (`gbolagade.com`).

**Tech Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · lucide-react. No new dependencies.

**Hard constraints (from spec):**
1. **No employer names anywhere** — roles/projects described by function/industry only.
2. **No figures/metrics** — qualitative only (no percentages, SKU counts, "400%").
3. **Professional capitalization** — rewrite all of the original lowercase copy.
4. Keep existing `/hero.jpg` for now.

**Verification model:** This is a content site with no test suite. Each task's "verify" step is `npm run build` (must compile with no type/lint errors) plus, where relevant, a `npm run dev` visual check. Commit after each task.

---

## File Map

**Delete:**
- `src/app/{claude-outreach,claude-twitter,claude-tiktok,claude-website,claude-social-growth,claude-trend-scanner,claude-b2b-outreach,claude-seo,claude-cowork-outreach,claude-marketing,claude-reels,claude-content,claude-interviewer,ads-ai,60k-linkedin-post}/` (15 route folders)
- `src/components/consult-cta.tsx`
- `public/preview.mp4`

**Create:**
- `src/lib/projects.ts` — project case-study content data
- `src/components/project-page.tsx` — reusable case-study page component
- `src/components/projects-section.tsx` — homepage projects grid (replaces video section)
- `src/app/projects/[slug]/page.tsx` — dynamic project route
- `src/app/projects/[slug]/layout.tsx` — per-project metadata (generateMetadata)

**Modify:**
- `src/app/layout.tsx` — root metadata + metadataBase
- `src/app/page.tsx` — section composition
- `src/app/sitemap.ts` — new URL set
- `src/app/robots.ts` — new sitemap URL
- `src/components/header.tsx` — name, nav, CTA
- `src/components/hero-section.tsx` — copy + CTAs + alt text
- `src/components/about-section.tsx` — copy
- `src/components/results-section.tsx` — → impact (capabilities + credentials, no numbers)
- `src/components/connect-section.tsx` — socials + sign-off
- `src/components/resource-footer.tsx` — → projects footer
- `src/components/plausible.tsx` — domain → gbolagade.com
- `src/components/json-ld.tsx` — Person schema for homepage
- `CLAUDE.md` — workspace doc update

**Constants reused across tasks (define once, use verbatim):**
- Name: `Gbolagade Ishola`
- Title line: `AI Engineer · AI Automation Architect · LLM Solutions`
- Domain: `https://gbolagade.com`
- LinkedIn: `https://www.linkedin.com/in/ishola-gbolagade/`
- X: `https://x.com/GbolagadeSEO`
- GitHub: `https://github.com/gbolask24`
- Email: `gbolagade.ishola@outlook.com`
- Portfolio: `https://gbolask24.github.io/portfolio`

---

### Task 1: Delete obsolete pages and assets

**Files:**
- Delete: 15 route folders under `src/app/`, `src/components/consult-cta.tsx`, `public/preview.mp4`

- [ ] **Step 1: Delete the marketing route folders, consult CTA, and preview video**

```bash
cd "src/app" && rm -rf claude-outreach claude-twitter claude-tiktok claude-website \
  claude-social-growth claude-trend-scanner claude-b2b-outreach claude-seo \
  claude-cowork-outreach claude-marketing claude-reels claude-content \
  claude-interviewer ads-ai 60k-linkedin-post
cd ../.. && rm -f src/components/consult-cta.tsx public/preview.mp4
```

- [ ] **Step 2: Verify the folders are gone**

Run: `ls src/app`
Expected: only `globals.css  icon.png  layout.tsx  page.tsx  projects (later)  robots.ts  sitemap.ts` remain (no `claude-*`, `ads-ai`, `60k-linkedin-post`).

Note: The app will NOT build yet — `page.tsx` still imports `ConsultCta` and `VideoSection`/`ResourceFooter` reference deleted slugs. That is fixed in later tasks. Do not run `npm run build` here.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "chore: remove Oleg's marketing pages, consult CTA, and preview video"
```

---

### Task 2: Rewrite root metadata and domain (`src/app/layout.tsx`)

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Replace the `metadata` export**

Replace the entire `export const metadata: Metadata = { ... };` block with:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://gbolagade.com"),
  title: {
    default: "Gbolagade Ishola — AI Engineer & AI Automation Architect",
    template: "%s — Gbolagade Ishola",
  },
  description:
    "AI Engineer in London building production LLM systems — RAG, multi-agent automation, and observable AI workflows that deliver measurable business impact.",
  keywords: [
    "AI Engineer",
    "AI Automation Architect",
    "LLM solutions",
    "RAG",
    "retrieval-augmented generation",
    "production AI",
    "AI engineer London",
    "prompt engineering",
    "Gbolagade Ishola",
  ],
  openGraph: {
    title: "Gbolagade Ishola — AI Engineer & AI Automation Architect",
    description:
      "AI Engineer in London building production LLM systems — RAG, multi-agent automation, and observable AI workflows with measurable business impact.",
    type: "website",
    url: "https://gbolagade.com",
    siteName: "Gbolagade Ishola",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gbolagade Ishola — AI Engineer & AI Automation Architect",
    description:
      "AI Engineer in London building production LLM systems — RAG, multi-agent automation, and observable AI workflows with measurable business impact.",
  },
  alternates: {
    canonical: "https://gbolagade.com",
  },
};
```

- [ ] **Step 2: Verify type-check passes for this file**

Run: `npx tsc --noEmit`
Expected: no errors referencing `layout.tsx` (other files may still error until later tasks; confirm none are in `layout.tsx`).

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx && git commit -m "feat: rewrite root metadata for Gbolagade + gbolagade.com"
```

---

### Task 3: Update analytics domain (`src/components/plausible.tsx`)

**Files:**
- Modify: `src/components/plausible.tsx`

- [ ] **Step 1: Change the domain**

Replace `init({ domain: "oleg.ae" });` with:

```tsx
      init({ domain: "gbolagade.com" });
```

- [ ] **Step 2: Commit**

```bash
git add src/components/plausible.tsx && git commit -m "feat: point Plausible at gbolagade.com"
```

---

### Task 4: Rewrite header (`src/components/header.tsx`)

**Files:**
- Modify: `src/components/header.tsx`

- [ ] **Step 1: Update nav items**

Replace the `navItems` array with:

```tsx
const navItems = [
  { name: "About", href: "#about" },
  { name: "Impact", href: "#impact" },
  { name: "Projects", href: "#projects" },
  { name: "Connect", href: "#connect" },
];
```

- [ ] **Step 2: Update the brand name link**

Replace `oleg melnikov` (inside the `<Link href="/" ...>`) with `Gbolagade Ishola`.

- [ ] **Step 3: Replace the desktop CTA**

Replace the desktop CTA `<Link>` (the one with `href="https://www.youtube.com/@Oleg-Melnikov"` containing `<YoutubeIcon .../>youtube`) with:

```tsx
          <Link
            href="#connect"
            className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20"
          >
            Get in touch
          </Link>
```

- [ ] **Step 4: Replace the mobile menu CTA**

Replace the mobile-menu CTA `<Link>` (inside the `{menuOpen && ...}` block, with the YouTube href + `<YoutubeIcon .../>youtube`) with:

```tsx
            <Link
              href="#connect"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-lg transition-colors hover:bg-white/20"
            >
              Get in touch
            </Link>
```

- [ ] **Step 5: Remove the now-unused `YoutubeIcon` component**

Delete the entire `function YoutubeIcon({ className }: { className?: string }) { ... }` definition at the bottom of the file.

- [ ] **Step 6: Verify**

Run: `npx tsc --noEmit`
Expected: no errors in `header.tsx` (no "YoutubeIcon is not defined", no unused-import errors).

- [ ] **Step 7: Commit**

```bash
git add src/components/header.tsx && git commit -m "feat: rewrite header nav, name, and CTA for Gbolagade"
```

---

### Task 5: Rewrite hero (`src/components/hero-section.tsx`)

**Files:**
- Modify: `src/components/hero-section.tsx`

- [ ] **Step 1: Replace the label chip text**

Replace `ai software entrepreneur` with `AI Engineer · AI Automation Architect · LLM Solutions`.

- [ ] **Step 2: Replace the H1 (TextEffect)**

Replace the H1 string `5 years in AI. left big tech and a hedge fund to build my own company.` with:

```
I build AI systems that move real business metrics.
```

- [ ] **Step 3: Replace the subheading (TextEffect `p`)**

Replace `now i'm running a service business that's 90% AI inside — and sharing AI systems for marketing with 18K+ on youtube.` with:

```
Senior AI engineer in London. I design and ship enterprise AI — RAG, multi-agent automation, and observable LLM systems — from R&D through to production.
```

- [ ] **Step 4: Replace the primary CTA (YouTube → View Projects)**

Replace the first CTA `<Link>` block (the one with `href="https://www.youtube.com/@Oleg-Melnikov"`, containing `watch on youtube` + the YouTube `<svg>`) with:

```tsx
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              View Projects
              <svg viewBox="0 0 20 20" fill="currentColor" className="size-4">
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
```

- [ ] **Step 5: Replace the secondary CTA (see my work → Work with me)**

Replace the second CTA `<Link href="#results">see my work ...</Link>` block with:

```tsx
            <Link
              href="#connect"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              Work with me
            </Link>
```

- [ ] **Step 6: Update hero image alt text**

Replace `alt="Oleg Melnikov"` with `alt="Gbolagade Ishola"`.

- [ ] **Step 7: Verify**

Run: `npx tsc --noEmit`
Expected: no errors in `hero-section.tsx`.

- [ ] **Step 8: Commit**

```bash
git add src/components/hero-section.tsx && git commit -m "feat: rewrite hero copy and CTAs for Gbolagade"
```

---

### Task 6: Rewrite about (`src/components/about-section.tsx`)

**Files:**
- Modify: `src/components/about-section.tsx`

- [ ] **Step 1: Replace the heading and three paragraphs**

Replace everything from `<motion.h2 ...>what i do</motion.h2>` through the closing of the third `<motion.p>` with the following. Note: the `Link` import is no longer used — this step also removes the external links, so the import must be deleted in Step 2.

```tsx
        <motion.h2 variants={fadeUp} className="text-sm uppercase tracking-widest text-zinc-500">
          About
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          I&apos;m Gbolagade — an AI engineer based in London. I design and ship production AI systems, turning large language models into reliable services that behave predictably inside secure, governed environments.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          I started out in SEO and digital marketing, leading content and growth for a range of businesses. From there I moved into AI automation — wiring language models into ERPs, customer operations, and internal tooling for enterprise teams.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          Today I lead enterprise AI work end to end: RAG architectures, multi-agent automation, prompt evaluation, and the monitoring that keeps it all reliable in production. I hold an MSc in Digital Marketing from Middlesex University, alongside AI and machine-learning certifications.
        </motion.p>
```

- [ ] **Step 2: Remove the now-unused `Link` import**

Delete the line `import Link from "next/link";` at the top of the file.

- [ ] **Step 3: Verify**

Run: `npx tsc --noEmit`
Expected: no errors in `about-section.tsx` (no unused `Link`).

- [ ] **Step 4: Commit**

```bash
git add src/components/about-section.tsx && git commit -m "feat: rewrite about section for Gbolagade"
```

---

### Task 7: Convert results → impact (`src/components/results-section.tsx`)

**Files:**
- Modify: `src/components/results-section.tsx`

This section drops the numeric stat grid entirely (constraint: no figures) and becomes capability cards + credentials.

- [ ] **Step 1: Replace the `stats` and `highlights` arrays**

Replace both the `stats` array and the `highlights` array with the following single `capabilities` array plus a `credentials` array:

```tsx
const capabilities = [
  {
    title: "Production LLM systems",
    description:
      "RAG pipelines, structured-output validation, prompt evaluation, and multi-provider routing — AI that behaves predictably and stays reliable in production.",
  },
  {
    title: "AI customer operations",
    description:
      "AI-first support across multiple channels and stores — automating the bulk of routine queries and routing the rest intelligently, while protecting customer satisfaction.",
  },
  {
    title: "Agentic content pipelines",
    description:
      "Multi-agent ingestion, enrichment, and publishing that let a small team expand a large product catalogue while cutting manual onboarding to a fraction of the time.",
  },
  {
    title: "Observability & governance",
    description:
      "Latency, cost, and output-validity monitoring with PII exclusion and GDPR-aligned redaction — AI you can trust, audit, and run accountably.",
  },
];

const credentials = [
  "MSc Digital Marketing — Middlesex University",
  "Azure AI Engineer Associate (in progress)",
  "Machine Learning Specialization — Andrew Ng",
  "RAG with LangChain",
  "Vector Databases with Pinecone",
  "Transformer Models with PyTorch",
];
```

- [ ] **Step 2: Update the section id and heading**

Change `<section id="results" ...>` to `<section id="impact" ...>` and change the heading text `results` to `What I Build & The Impact`.

- [ ] **Step 3: Replace the stats grid with the capabilities grid**

Replace the entire `{/* Stats grid */}` `<motion.div>...</motion.div>` block (the one mapping over `stats`) with:

```tsx
        {/* Capabilities grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.title}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-lg font-medium">{cap.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
```

- [ ] **Step 4: Replace the highlight cards block with a credentials row**

Replace the entire `{/* Highlight cards */}` `<motion.div>...</motion.div>` block (the one mapping over `highlights`) with:

```tsx
        {/* Credentials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
          className="mt-16"
        >
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest text-zinc-500">
            Education & Certifications
          </motion.p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {credentials.map((c) => (
              <motion.span
                key={c}
                variants={fadeUp}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400"
              >
                {c}
              </motion.span>
            ))}
          </div>
        </motion.div>
```

- [ ] **Step 5: Verify**

Run: `npx tsc --noEmit`
Expected: no errors in `results-section.tsx` (no references to removed `stats`/`highlights`).

- [ ] **Step 6: Commit**

```bash
git add src/components/results-section.tsx && git commit -m "feat: convert results into capability + credentials impact section"
```

---

### Task 8: Create the projects data file (`src/lib/projects.ts`)

**Files:**
- Create: `src/lib/projects.ts`

- [ ] **Step 1: Create the file with all 5 project case studies**

```tsx
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
```

- [ ] **Step 2: Verify**

Run: `npx tsc --noEmit`
Expected: no errors in `projects.ts`.

- [ ] **Step 3: Commit**

```bash
git add src/lib/projects.ts && git commit -m "feat: add project case-study content data"
```

---

### Task 9: Create the reusable project page component (`src/components/project-page.tsx`)

**Files:**
- Create: `src/components/project-page.tsx`

Models the existing resource-page layout (minimal header, hero, content) but data-driven and without the marketing footer/video.

- [ ] **Step 1: Create the component**

```tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function ProjectPage({ project }: { project: Project }) {
  return (
    <>
      {/* Minimal header */}
      <header className="px-2">
        <div className="mx-auto mt-2 flex max-w-3xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-lg font-[family-name:var(--font-unbounded)] tracking-tight"
          >
            Gbolagade Ishola
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20"
          >
            All projects
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="pt-16 pb-8 md:pt-24 md:pb-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="mx-auto max-w-3xl px-6 text-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-400"
            >
              Project
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-8 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl"
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-zinc-400 md:text-xl"
            >
              {project.tagline}
            </motion.p>

            {project.repoUrl && (
              <motion.div variants={fadeUp} className="mt-8">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* Body sections */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="pb-16"
        >
          <div className="mx-auto max-w-3xl space-y-10 px-6">
            {project.sections.map((section) => (
              <motion.div key={section.heading} variants={fadeUp}>
                <h2 className="text-sm uppercase tracking-widest text-zinc-500">
                  {section.heading}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-zinc-300">
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stack */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="pb-24 md:pb-32"
        >
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-sm uppercase tracking-widest text-zinc-500">
              Stack
            </h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-3xl px-6 pb-12">
        <p className="text-center text-sm text-zinc-600">
          &copy; 2026 Gbolagade Ishola
        </p>
      </footer>
    </>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npx tsc --noEmit`
Expected: no errors in `project-page.tsx`.

- [ ] **Step 3: Commit**

```bash
git add src/components/project-page.tsx && git commit -m "feat: add reusable data-driven project case-study component"
```

---

### Task 10: Create the dynamic project route (`src/app/projects/[slug]/`)

**Files:**
- Create: `src/app/projects/[slug]/page.tsx`
- Create: `src/app/projects/[slug]/layout.tsx`

- [ ] **Step 1: Create `page.tsx` with static params + 404 handling**

```tsx
import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";
import { ProjectPage } from "@/components/project-page";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectPage project={project} />;
}
```

- [ ] **Step 2: Create `layout.tsx` with per-project metadata**

```tsx
import type { Metadata } from "next";
import { getProject } from "@/lib/projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const url = `https://gbolagade.com/projects/${project.slug}`;
  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      type: "article",
      url,
      authors: ["Gbolagade Ishola"],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.tagline,
    },
    alternates: { canonical: url },
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
```

- [ ] **Step 3: Verify the routes build**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/projects && git commit -m "feat: add dynamic /projects/[slug] routes with per-project metadata"
```

---

### Task 11: Create the homepage projects section (`src/components/projects-section.tsx`)

**Files:**
- Create: `src/components/projects-section.tsx`

- [ ] **Step 1: Create the component**

```tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-sm uppercase tracking-widest text-zinc-500"
        >
          Projects
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={fadeUp}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
              >
                <p className="text-lg font-medium transition-colors group-hover:text-white">
                  {project.title}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.cardDescription}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors group-hover:text-white">
                  View case study
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npx tsc --noEmit`
Expected: no errors in `projects-section.tsx`.

- [ ] **Step 3: Commit**

```bash
git add src/components/projects-section.tsx && git commit -m "feat: add homepage projects grid"
```

---

### Task 12: Rewrite connect section (`src/components/connect-section.tsx`)

**Files:**
- Modify: `src/components/connect-section.tsx`

- [ ] **Step 1: Replace the `socials` array**

Replace the entire `socials` array with the following (LinkedIn, X, GitHub, Email, Portfolio — keeps the LinkedIn and Instagram SVG paths reused for icons; adds X, GitHub, mail, external icons):

```tsx
const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ishola-gbolagade/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/GbolagadeSEO",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/gbolask24",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:gbolagade.ishola@outlook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>
    ),
  },
  {
    name: "Portfolio",
    href: "https://gbolask24.github.io/portfolio",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
        <path
          fillRule="evenodd"
          d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];
```

- [ ] **Step 2: Update the intro paragraph and sign-off**

Replace the intro `<motion.p>` text `let&apos;s connect — i&apos;m always open to interesting conversations and collaborations.` with:

```tsx
          Open to roles and freelance work. If you&apos;re building with AI — or want to — let&apos;s talk.
```

Replace the sign-off `cheers, oleg` with `Gbolagade Ishola`.

- [ ] **Step 3: Verify**

Run: `npx tsc --noEmit`
Expected: no errors in `connect-section.tsx`.

- [ ] **Step 4: Commit**

```bash
git add src/components/connect-section.tsx && git commit -m "feat: rewrite connect section with Gbolagade's links"
```

---

### Task 13: Convert the resource footer into a projects footer (`src/components/resource-footer.tsx`)

**Files:**
- Modify: `src/components/resource-footer.tsx`

- [ ] **Step 1: Replace the imports**

Replace the entire `lucide-react` import block with:

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
```

- [ ] **Step 2: Delete the local `resources` array**

Delete the entire `const resources: { ... }[] = [ ... ];` array (it is replaced by the shared `projects` data).

- [ ] **Step 3: Replace the component body**

Replace the entire `export function ResourceFooter({ currentSlug }: { currentSlug: string }) { ... }` with:

```tsx
export function ResourceFooter({ currentSlug }: { currentSlug: string }) {
  const filtered = projects.filter((p) => p.slug !== currentSlug);

  return (
    <footer className="mx-auto max-w-3xl px-6 pb-12">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-10 sm:px-8 sm:py-12 mt-16">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-zinc-600">
          More projects
        </p>

        <div className="mx-auto mt-6 grid max-w-4xl gap-2.5 sm:grid-cols-2">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex items-start gap-3 rounded-xl px-4 py-3 transition-colors duration-150 hover:bg-white/5"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-zinc-400 transition-colors group-hover:text-white">
                  {project.title}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-zinc-600">
                  {project.cardDescription}
                </p>
              </div>
              <ArrowRight className="mt-1 size-3 shrink-0 text-zinc-700 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-white" />
            </Link>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-zinc-600">
        &copy; 2026 Gbolagade Ishola
      </p>
    </footer>
  );
}
```

Note: `ResourceFooter` is currently only used by the (now-deleted) resource pages and the homepage. After this task it is referenced only where we choose to keep it. The homepage uses it (see Task 14); the project pages use their own footer.

- [ ] **Step 4: Verify**

Run: `npx tsc --noEmit`
Expected: no errors in `resource-footer.tsx`.

- [ ] **Step 5: Commit**

```bash
git add src/components/resource-footer.tsx && git commit -m "feat: convert resource footer into projects footer"
```

---

### Task 14: Recompose the homepage (`src/app/page.tsx`)

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace the entire file**

```tsx
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ResultsSection } from "@/components/results-section";
import { ProjectsSection } from "@/components/projects-section";
import { ConnectSection } from "@/components/connect-section";
import { ResourceFooter } from "@/components/resource-footer";
import { PersonJsonLd } from "@/components/json-ld";

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ResultsSection />
        <ProjectsSection />
        <ConnectSection />
      </main>
      <ResourceFooter currentSlug="" />
    </>
  );
}
```

(`PersonJsonLd` is created in Task 15. If executing strictly in order, temporarily omit the `PersonJsonLd` import and tag, then add them in Task 15. Otherwise do Task 15 before building.)

- [ ] **Step 2: Verify (after Task 15, or with PersonJsonLd temporarily removed)**

Run: `npx tsc --noEmit`
Expected: no errors. If `PersonJsonLd` is not yet defined, complete Task 15 first.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx && git commit -m "feat: recompose homepage with projects section and Person schema"
```

---

### Task 15: Add Person JSON-LD (`src/components/json-ld.tsx`)

**Files:**
- Modify: `src/components/json-ld.tsx`

The existing `ArticleJsonLd` is no longer used (its resource pages are deleted). Replace the file with a homepage `PersonJsonLd`.

- [ ] **Step 1: Replace the entire file**

```tsx
export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gbolagade Ishola",
    alternateName: "Gbolagade Samuel Ishola",
    url: "https://gbolagade.com",
    jobTitle: "AI Engineer & AI Automation Architect",
    description:
      "AI Engineer in London building production LLM systems — RAG, multi-agent automation, and observable AI workflows.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "UK",
    },
    sameAs: [
      "https://www.linkedin.com/in/ishola-gbolagade/",
      "https://x.com/GbolagadeSEO",
      "https://github.com/gbolask24",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

- [ ] **Step 2: Verify**

Run: `npx tsc --noEmit`
Expected: no errors. `ArticleJsonLd` no longer referenced anywhere (deleted resource pages were its only consumers).

- [ ] **Step 3: Commit**

```bash
git add src/components/json-ld.tsx && git commit -m "feat: replace Article JSON-LD with homepage Person schema"
```

---

### Task 16: Update sitemap and robots (`src/app/sitemap.ts`, `src/app/robots.ts`)

**Files:**
- Modify: `src/app/sitemap.ts`
- Modify: `src/app/robots.ts`

- [ ] **Step 1: Replace `sitemap.ts` entirely**

```tsx
import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://gbolagade.com";
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projects.map((p) => ({
      url: `${base}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
```

- [ ] **Step 2: Update the robots sitemap URL**

In `src/app/robots.ts`, replace `sitemap: "https://oleg.ae/sitemap.xml",` with:

```tsx
    sitemap: "https://gbolagade.com/sitemap.xml",
```

- [ ] **Step 3: Verify**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts && git commit -m "feat: update sitemap and robots for gbolagade.com + project pages"
```

---

### Task 17: Full build + visual verification

**Files:** none (verification only)

- [ ] **Step 1: Production build**

Run: `npm run build`
Expected: build succeeds. Output lists routes `/`, `/projects/[slug]` (with the 5 slugs pre-rendered via `generateStaticParams`), `/robots.txt`, `/sitemap.xml`. No type or lint errors.

- [ ] **Step 2: Grep for leftover Oleg references**

Run: `grep -rin "oleg\|melnikov\|authority ai\|buildauthority\|youtube.com/@Oleg\|olegai\|melnikoff" src/`
Expected: no matches. If any appear, fix them and re-run.

- [ ] **Step 3: Dev visual check**

Run: `npm run dev`, open `http://localhost:3000`. Confirm:
- Hero shows the new title/CTAs; nav reads About / Impact / Projects / Connect.
- About, Impact (capabilities + credentials, no numbers), Projects grid (5 cards), Connect (5 links) all render.
- Clicking a project card opens `/projects/<slug>` with the case study; the public two link to GitHub; the projects footer lists the other four.
- Visiting `/projects/does-not-exist` returns the 404 page.

- [ ] **Step 4: Commit any fixes**

```bash
git add -A && git commit -m "fix: resolve build/visual issues from full verification"
```

(Skip if nothing changed.)

---

### Task 18: Update workspace docs (`CLAUDE.md`)

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Update the "What This Is" and "Site Structure" sections**

Edit `CLAUDE.md` so it describes Gbolagade Ishola's personal site instead of Oleg's:
- "What This Is": one-pager for **Gbolagade Ishola**, AI Engineer / AI Automation Architect in London — story, expertise, projects, and contact.
- "Site Structure → Main page": list the current 5 sections (Hero, About, Impact, Projects, Connect) + Header.
- Replace the "Resource pages / Tool pages / Lead magnet pages" lists with a single **Project pages** entry: dynamic `/projects/[slug]` routes driven by `src/lib/projects.ts` (5 case studies: llm-proxy, ai-ops-monitor, exec-ai-assistant, ai-support-platform, agentic-content-pipeline), rendered by `src/components/project-page.tsx`.
- Update "Shared components" to reflect `projects-section.tsx`, the repurposed `resource-footer.tsx` (now a projects footer fed by `projects.ts`), and removal of `video-section.tsx`/`consult-cta.tsx` from the homepage.
- Update the SEO section: domain is now `gbolagade.com`; Plausible domain updated; keywords now target "AI Engineer", "LLM systems", "RAG", "AI automation".

- [ ] **Step 2: Commit**

```bash
git add CLAUDE.md && git commit -m "docs: update CLAUDE.md for Gbolagade's personal site"
```

---

## Notes / Deferred (out of scope this pass)

- `src/components/video-section.tsx` is left in the repo but no longer imported. Optionally delete it in a follow-up; leaving it does not affect the build. (If deleting: `rm src/components/video-section.tsx` — confirm no imports first with `grep -rn "video-section" src/`.)
- `src/app/icon.png` is still Oleg's favicon — replace later with Gbolagade's.
- Hero photo (`/hero.jpg`) intentionally unchanged (per spec).
- No OG share image yet.
- After merge: deploy is already wired to Vercel; pushing the branch + merging will trigger a deploy. Custom domain `gbolagade.com` must be added in Vercel separately.

---

## Self-Review

**Spec coverage:**
- Positioning / voice / professional caps → Tasks 4–7, 12 (all copy rewritten). ✓
- No employer names → Task 8 content is anonymized; Task 17 grep guards regressions. ✓
- No figures → Task 7 drops stat grid; Task 8 copy is qualitative. ✓
- Hero keeps photo → Task 5 keeps `/hero.jpg`, only alt text changes. ✓
- 6 main sections (Hero, About, Impact, Projects, Connect, Header) → Tasks 4,5,6,7,11,12,14. ✓
- 5 project case-study pages under `/projects/*` → Tasks 8,9,10. ✓
- Remove 14 marketing + 2 tool/lead pages → Task 1. ✓
- SEO/metadata/sitemap/robots/json-ld/plausible → Tasks 2,3,15,16. ✓
- CLAUDE.md update → Task 18. ✓
- CTAs: View Projects + Work with me, no CV link → Task 5. ✓
- `/projects/<slug>` URL + gbolagade.com + no CV → Tasks 10,2,5. ✓

**Placeholder scan:** No TBD/TODO. The one conditional ("add PersonJsonLd in Task 15") is an explicit ordering note with the real code provided in Task 15, not a placeholder.

**Type consistency:** `Project`/`ProjectSection` interfaces defined in Task 8 are used identically in Tasks 9 (`project.sections`, `project.repoUrl`, `project.stack`, `project.tagline`, `project.title`), 11 (`project.cardDescription`, `project.stack`, `project.slug`), 13 (`project.title`, `project.cardDescription`, `project.slug`), 16 (`p.slug`). `getProject()`/`projects` exports match their imports. `PersonJsonLd` defined in Task 15 matches its import in Task 14.
