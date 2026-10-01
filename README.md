# A portfolio site you can fork

This is the code behind [gbolagade.com](https://gbolagade.com), my personal site. It is a
landing page, a case study page for each project, and a blog, in one small Next.js app.

If you need a portfolio, use it. Fork the repo or press "Use this template", swap my content
for yours, and deploy. Most people can have their own version live in an afternoon. There is
no CMS, database or paid service to set up.

## What you get

- A landing page with a hero, an about section, capability cards, a project grid and a
  contact section.
- A case study page for every project, generated from one data file. Add an object, get a page.
- A "More projects" button on the grid, so a long list does not push the rest of the page down.
- Articles written as Markdown files, with reading time, tags and share buttons.
- The search basics already done: meta tags, Open Graph images generated per page, JSON-LD,
  a sitemap and robots.txt.
- A dark design with scroll animations that works on a phone.

## Start

You need Node.js 20 or newer.

```bash
git clone https://github.com/gbolask24/webpage.git my-site
cd my-site
npm install
npm run dev
```

The site runs at http://localhost:3000. `npm run build` makes the production build and is also
the type check, so run it before you deploy.

## Make it yours

Work through these in order. The first three change most of what a visitor sees.

### 1. Your projects

Everything lives in the `projects` array in `src/lib/projects.ts`. Replace my entries with
yours. The landing page grid, the "More projects" footer, each `/projects/<slug>` page, its
social card and the sitemap all read from that array, so there is nothing else to edit.

```ts
{
  slug: "my-project",                  // becomes /projects/my-project
  title: "My Project",
  tagline: "One sentence on what it does.",
  cardDescription: "The short line shown on the landing page card.",
  seoDescription: "140 to 160 characters for search results.",
  stack: ["TypeScript", "Next.js"],    // the first four show on the card
  repoUrl: "https://github.com/you/my-project",   // optional, adds a GitHub button
  demoUrl: "https://my-project.example.com",      // optional, adds a live demo button
  updated: "2026-10-01",               // optional, feeds the sitemap
  sections: [
    { heading: "The problem", body: "..." },
    { heading: "What I built", body: "..." },
    { heading: "My approach", body: "..." },
    { heading: "The result", body: "..." },
  ],
}
```

The section headings are free text, so use whatever structure suits the project.

### 2. Your words on the landing page

| Section | File |
|---|---|
| Hero headline, label and buttons | `src/components/hero-section.tsx` |
| About | `src/components/about-section.tsx` |
| Capability cards | `src/components/results-section.tsx` |
| Contact links and booking button | `src/components/connect-section.tsx` |
| Navigation | `src/components/header.tsx` |

### 3. Your articles

Delete my files in `content/articles/` and add your own. The file name is the URL slug. Each
file starts with this front matter:

```yaml
---
title: "Title of the article"
description: "Meta description, 140 to 160 characters."
excerpt: "The short hook shown on the articles page."
date: "2026-10-01"
tags: ["Agents", "LLM"]
---
```

If you do not want a blog, delete `src/app/articles`, `content/articles` and the "Articles"
link in the header.

### 4. Your name and domain

My name and domain are written into the metadata, the structured data and the page headers.
This lists every file that still mentions me:

```bash
grep -rlE "gbolagade\.com|Gbolagade|gbolask24|GbolagadeHQ|outlook\.com" src
```

Replace them with your own name, domain and handles. The ones that matter most for search are
`src/app/layout.tsx`, `src/components/json-ld.tsx`, `src/app/sitemap.ts` and
`src/app/robots.ts`.

### 5. Your images

- `public/hero.png`: the large image under the headline. Mine is 1672 by 941 pixels.
- `src/app/icon.png`: the favicon.

### 6. Your analytics

Do this before you deploy, or your visits will be counted on my accounts.

- `src/components/google-analytics.tsx` holds my Google Analytics ID.
- `src/components/plausible.tsx` holds my Plausible domain.

Put your own values in, or remove both components from `src/app/layout.tsx`.

### 7. Tidy up

These folders are my working notes and are not part of the site. Delete them: `.claude/`,
`context/`, `docs/`, `plans/`, `outputs/`, `reference/`, and the `CLAUDE.md` and
`shell-aliases.md` files.

## Deploy

The site is a standard Next.js app, so it deploys anywhere Next.js runs. On Vercel:

1. Push your fork to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new). The defaults are correct.
3. Add your domain in the project settings.

Every push to `main` then deploys on its own.

## Stack

Next.js 15 with the App Router, React 19, TypeScript, Tailwind CSS 4 and Framer Motion.
Articles are read with gray-matter and rendered with react-markdown.

## What you may reuse

Take the code, the structure and the design, and change them as much as you like. A link back
is welcome and not required.

Please do not reuse my case studies, articles, photo or name. They describe my work, and they
are the part you would want to replace anyway.

The layout and animations started from Oleg Melnikov's landing page template, so credit goes to
him for the design.

## Questions and improvements

If something in these steps is unclear or broken, open an issue. If you build a site from this,
I would like to see it, so open an issue with the link.
