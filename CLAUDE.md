# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## What This Is

This is the workspace for **Gbolagade Ishola's personal landing page** — a one-pager website that quickly communicates who Gbolagade is to the public world: his story, expertise, projects, and how to connect. The audience is dual: recruiters/employers and prospective clients.

**Gbolagade Samuel Ishola** is an AI Engineer / AI Automation Architect based in London, UK. He started in SEO and digital marketing, moved into AI automation for enterprise clients, and now builds production LLM systems — RAG architectures, multi-agent automation, prompt evaluation, and the observability that keeps them reliable. MSc Digital Marketing (Middlesex University) plus AI/ML certifications.

> **Content constraints (deliberate):** the site uses NO employer names (roles/projects are described by function/industry only) and NO numeric metrics (impact is described qualitatively). Preserve these when editing copy. Note: this codebase was forked from Oleg Melnikov's landing page — the design/animations were kept, all content replaced.

**This file (CLAUDE.md) is the foundation.** It is automatically loaded at the start of every session. Keep it current — it is the single source of truth for how Claude should understand and operate within this workspace.

---

## The Claude-User Relationship

Claude operates as an **agent assistant** with access to the workspace folders, context files, commands, and outputs. The relationship is:

- **User**: Defines goals, provides context about their role/function, and directs work through commands
- **Claude**: Reads context, understands the user's objectives, executes commands, produces outputs, and maintains workspace consistency

Claude should always orient itself through `/prime` at session start, then act with full awareness of who the user is, what they're trying to achieve, and how this workspace supports that.

---

## Workspace Structure

```
.
├── CLAUDE.md              # This file — core context, always loaded
├── .claude/
│   └── commands/          # Slash commands Claude can execute
│       ├── prime.md       # /prime — session initialization
│       ├── create-plan.md  # /create-plan — create implementation plans
│       ├── implement.md   # /implement — execute plans
│       └── scrape-video.md # /scrape-video — YouTube URL → full MD file
├── context/               # Background context about the user and project
│                          # (User should populate with role, goals, strategies)
├── plans/                 # Implementation plans created by /create-plan
├── outputs/               # Work products and deliverables
├── reference/             # Templates, examples, reusable patterns
└── scripts/               # Automation scripts (if applicable)
```

**Key directories:**

| Directory    | Purpose                                                                             |
| ------------ | ----------------------------------------------------------------------------------- |
| `context/`   | Who the user is, their role, current priorities, strategies. Read by `/prime`.      |
| `plans/`     | Detailed implementation plans. Created by `/create-plan`, executed by `/implement`. |
| `outputs/`   | Deliverables, analyses, reports, and work products.                                 |
| `reference/` | Helpful docs, templates and patterns to assist in various workflows.                |
| `scripts/`   | Any automation or tooling scripts.                                                  |

---

## Commands

### /prime

**Purpose:** Initialize a new session with full context awareness.

Run this at the start of every session. Claude will:

1. Read CLAUDE.md and context files
2. Summarize understanding of the user, workspace, and goals
3. Confirm readiness to assist

### /create-plan [request]

**Purpose:** Create a detailed implementation plan before making changes.

Use when adding new functionality, commands, scripts, or making structural changes. Produces a thorough plan document in `plans/` that captures context, rationale, and step-by-step tasks.

Example: `/create-plan add a competitor analysis command`

### /implement [plan-path]

**Purpose:** Execute a plan created by /create-plan.

Reads the plan, executes each step in order, validates the work, and updates the plan status.

Example: `/implement plans/2026-01-28-competitor-analysis-command.md`

### /scrape-video [youtube-url]

**Purpose:** Scrape a YouTube video's metadata and transcript, then save as a clean markdown file.

Uses two Apify actors in parallel:
- `pintostudio/youtube-transcript-scraper` — full transcript
- `streamers/youtube-scraper` — title, views, likes, duration, description, etc.

Produces a single MD file in `outputs/video-{slug}.md` with metadata table, description, timestamps, links, and cleaned transcript.

Requires `APIFY_KEY` in `.env`.

Example: `/scrape-video https://youtu.be/JQQhT0edXXw`

---

## Critical Instruction: Maintain This File

**Whenever Claude makes changes to the workspace, Claude MUST consider whether CLAUDE.md needs updating.**

After any change — adding commands, scripts, workflows, or modifying structure — ask:

1. Does this change add new functionality users need to know about?
2. Does it modify the workspace structure documented above?
3. Should a new command be listed?
4. Does context/ need new files to capture this?

If yes to any, update the relevant sections. This file must always reflect the current state of the workspace so future sessions have accurate context.

**Examples of changes requiring CLAUDE.md updates:**

- Adding a new slash command → add to Commands section
- Creating a new output type → document in Workspace Structure or create a section
- Adding a script → document its purpose and usage
- Changing workflow patterns → update relevant documentation

---

## Landing Page Goals

This site should convey:

- **Who Gbolagade is** -- AI Engineer / AI Automation Architect, London, UK
- **The arc** -- SEO/digital marketing → AI automation for enterprise clients → building production LLM systems
- **What he builds** -- Production LLM systems: RAG, multi-agent automation, AI customer operations, observability & governance
- **Credibility** -- Qualitative capability + outcome statements (NO numeric metrics, NO employer names) + MSc Digital Marketing and AI/ML certifications
- **How to connect** -- LinkedIn (/in/ishola-gbolagade), X (@GbolagadeSEO), GitHub (gbolask24), email (gbolagade.ishola@outlook.com), portfolio (gbolask24.github.io/portfolio)

---

## SEO

Ongoing goal: optimize the site for search around keywords like **"AI Engineer"**, **"AI Automation Architect"**, **"LLM systems"**, **"RAG"**, **"AI engineer London"**.

**Done:**
- Sitemap (`src/app/sitemap.ts`) + robots.txt (`src/app/robots.ts`) — domain `gbolagade.com`, includes all project pages
- Keyword-rich meta tags (title, description, keywords, OG, Twitter cards) on all pages
- Proper heading hierarchy (`h1` → `h2`) across all sections
- Structured data / JSON-LD `Person` schema (`src/components/json-ld.tsx`, on homepage)
- Plausible analytics (`src/components/plausible.tsx`, domain: gbolagade.com)

**Still to do:**
- Open Graph images (branded preview for social shares)
- Replace favicon (`src/app/icon.png` is still Oleg's)
- Swap hero photo (`public/hero.jpg` is still a placeholder)
- Performance audit (Lighthouse, image optimization)
- More project case-study pages (add to `src/lib/projects.ts`)
- Add custom domain `gbolagade.com` in Vercel
- Google Search Console verification (revisit later)

---

## Session Workflow

1. **Start**: Run `/prime` to load context
2. **Work**: Use commands or direct Claude with tasks
3. **Plan changes**: Use `/create-plan` before significant additions
4. **Execute**: Use `/implement` to execute plans
5. **Maintain**: Claude updates CLAUDE.md and context/ as the workspace evolves

---

## Tech Stack

- **Framework:** Next.js 15 + React 19 + TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Deployment target:** Vercel

### Dev Commands

```bash
npm run dev    # Start dev server (localhost:3000)
npm run build  # Production build
npm run start  # Start production server
```

### Site Structure

**Domain:** `gbolagade.com` (referenced in `layout.tsx` metadata, `sitemap.ts`, `robots.ts`, `json-ld.tsx`, and the Plausible analytics domain in `plausible.tsx`).

**Main page** (`/`) — single page with 5 sections + header:
1. **Hero** — Title, photo, CTAs "View Projects" + "Work with me" (`src/components/hero-section.tsx`)
2. **About** — The arc: marketing → AI automation → enterprise AI engineering (`src/components/about-section.tsx`)
3. **Impact** (`id="impact"`) — Capability cards + credentials, no metrics (`src/components/results-section.tsx`)
4. **Projects** — Grid of project case-study cards (`src/components/projects-section.tsx`)
5. **Connect** — Social links + footer (`src/components/connect-section.tsx`)
6. **Header** — Floating nav (About · Impact · Projects · Connect), blurs on scroll (`src/components/header.tsx`)

**Project case-study pages** — dynamic route `/projects/[slug]`, data-driven:
- Content lives in `src/lib/projects.ts` (the `projects` array + `getProject`). Each project has `slug`, `title`, `tagline`, `cardDescription`, `stack`, optional `repoUrl`, and `sections` (heading/body).
- Rendered by `src/components/project-page.tsx` (one reusable component). Route files (`src/app/projects/[slug]/page.tsx` + `layout.tsx`) are thin: `generateStaticParams` + `generateMetadata` from the data.
- The 5 projects: `llm-proxy`, `ai-ops-monitor` (both open-source, link to GitHub), `exec-ai-assistant`, `ai-support-platform`, `agentic-content-pipeline` (anonymized enterprise work, no employer names/metrics).
- **To add a project:** append to the `projects` array in `src/lib/projects.ts` — the homepage grid, footer, routes, and sitemap all derive from it automatically.

**Shared components:**
- Animation primitives in `src/components/motion/` (TextEffect, AnimatedGroup)
- `src/components/accordion.tsx` — Reusable accordion (available; not currently used on the live pages)
- `src/components/resource-footer.tsx` — "More projects" footer, derives from `src/lib/projects.ts`. Pass `currentSlug` to exclude the current page (homepage passes `""`).
- `src/components/json-ld.tsx` — `PersonJsonLd` (Person schema, rendered on the homepage).

---

## Notes

- Keep context minimal but sufficient — avoid bloat
- Plans live in `plans/` with dated filenames for history
- Outputs are organized by type/purpose in `outputs/`
- Reference materials go in `reference/` for reuse
