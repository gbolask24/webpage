# gbolagade.com

The personal site of Gbolagade Ishola, an AI engineer in London. It has a landing page, a case
study for each system I have built, and articles on agent engineering.

Live at [gbolagade.com](https://gbolagade.com).

## What is on it

- **Landing page**: who I am, what I build, the project grid, and how to get in touch.
- **Project case studies** at `/projects/<slug>`: the problem, what I built, my approach and the
  result, with the stack and a link to the repo or live demo where one is public.
- **Articles** at `/articles`: longer pieces on agent loops, observability and cost, context
  layers, ERP agents and agentic commerce.

The case studies cover:

| Project | Public code |
|---|---|
| Executive AI Assistant | |
| Federated Agent Platform | |
| Agentic Product Content Pipeline | |
| AI Customer Support Co-pilot | |
| Workplace Automation on the Microsoft Stack | |
| AI-Native CRM | |
| Alice, AI Task and Content Studio | |
| Local Agent Panel and Framework Benchmark | [agent-panel-agentscope](https://github.com/gbolask24/agent-panel-agentscope) |
| Multi-Provider LLM Proxy | [multi-provider-llm-proxy](https://github.com/gbolask24/multi-provider-llm-proxy) |
| North Star Support Bot | [north-star-support-bot](https://github.com/gbolask24/north-star-support-bot), [live demo](https://north-star-support-bot-roan.vercel.app) |
| AI Operations Monitor | [ai-ops-monitor](https://github.com/gbolask24/ai-ops-monitor) |

## Stack

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4 and Framer Motion. Articles are
Markdown files read with gray-matter and rendered with react-markdown. Hosted on Vercel.

## Run it locally

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:3000. `npm run build` makes the production build and is
also the type check.

## Where the content lives

| What | Where |
|---|---|
| Project case studies | `src/lib/projects.ts`, one array |
| Articles | `content/articles/*.md` |
| Landing page sections | `src/components/*-section.tsx` |
| Site metadata and keywords | `src/app/layout.tsx` |
| Structured data (JSON-LD) | `src/components/json-ld.tsx` |
| Sitemap and robots | `src/app/sitemap.ts`, `src/app/robots.ts` |

### Add a project

Append an object to the `projects` array in `src/lib/projects.ts`. The landing page grid, the
"More projects" footer, the `/projects/<slug>` route, its social card and the sitemap all read
from that array, so nothing else needs editing.

Each project has a `slug`, `title`, `tagline`, `cardDescription`, `seoDescription`, `stack` and
`sections`. `repoUrl` and `demoUrl` are optional and add a button each. `updated` is an ISO date
that feeds the sitemap.

### Add an article

Add a Markdown file to `content/articles/`. The file name is the slug. Front matter:

```yaml
---
title: "Title of the article"
description: "Meta description, 140 to 160 characters."
excerpt: "The short hook shown on the articles page."
date: "2026-10-01"
tags: ["Agents", "LLM"]
---
```

## Content rules

The site describes work by function and industry. It names no employers and quotes no impact
figures. Copy is in British English with no em dashes.

## Deployment

Vercel builds and deploys every push to `main`.

## Credit

The layout and animations started from Oleg Melnikov's landing page template. All content is
mine.
