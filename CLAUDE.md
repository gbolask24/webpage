# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## What This Is

This is the workspace for **Oleg Melnikov's personal landing page** — a one-pager website that quickly communicates who Oleg is to the public world: his story, expertise, what he offers, and how to connect.

**Oleg** is a 25-year-old AI engineer turned entrepreneur. Former quant researcher (Pinely, Amsterdam), math olympiad winner, CS graduate from Saint Petersburg State University. He quit a ~600K EUR/year trading career at 24 to build Authority AI (done-for-you LinkedIn content for B2B founders) and a growing YouTube channel (15.7K subs, Claude Code + AI automation tutorials).

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
│       └── implement.md   # /implement — execute plans
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

- **Who Oleg is** -- AI engineer, math olympiad winner, former quant, founder
- **The story** -- Quit 600K EUR/year trading career at 24, 8 months zero revenue, now building Authority AI + YouTube
- **What he offers** -- Authority AI (LinkedIn content for B2B founders), YouTube (Claude Code tutorials), Skool community
- **Social proof** -- Client results (Mike Kamo, Rhys McKay), YouTube growth (15.7K subs, 435K views), math/CS credentials
- **How to connect** -- YouTube, LinkedIn, website links, CTA

Key references in the main repo (`/Users/olegmelnikov/Desktop/Software Projects/oleeeg`) contain deeper context if needed.

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

Single page with 6 sections:
1. **Hero** — Tagline, photo, CTAs (`src/components/hero-section.tsx`)
2. **About** — What Oleg does now (`src/components/about-section.tsx`)
3. **Results** — Stats, client proof, credentials (`src/components/results-section.tsx`)
4. **Video** — Embedded YouTube with thumbnail preview (`src/components/video-section.tsx`)
5. **Connect** — Social links + footer (`src/components/connect-section.tsx`)
6. **Header** — Floating nav, blurs on scroll (`src/components/header.tsx`)

Animation primitives in `src/components/motion/` (TextEffect, AnimatedGroup).

---

## Notes

- Keep context minimal but sufficient — avoid bloat
- Plans live in `plans/` with dated filenames for history
- Outputs are organized by type/purpose in `outputs/`
- Reference materials go in `reference/` for reuse
