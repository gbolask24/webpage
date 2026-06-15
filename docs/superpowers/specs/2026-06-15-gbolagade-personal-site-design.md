# Gbolagade Ishola — Personal Site Design Spec

**Date:** 2026-06-15
**Status:** Draft for review
**Base:** Repurpose of the Oleg Melnikov landing page (Next.js 15 + React 19 + Tailwind 4 + Framer Motion). Design, layout, and animations are kept; all content is replaced.

---

## 1. Goal

Transform the forked Oleg Melnikov landing page into a personal site for **Gbolagade Samuel Ishola** — an AI Engineer / AI Automation Architect based in London, UK. The site serves **two audiences at once**: recruiters/employers and prospective clients. It leads with credibility and outcomes and offers two paths: *view work* and *get in touch*.

## 2. Positioning & Voice

- **Identity:** AI Engineer · AI Automation Architect · LLM Solutions.
- **Narrative arc:** Digital marketing / SEO → AI automation for enterprise clients → senior enterprise AI engineering. "A marketer who became an AI engineer and ships production systems with real commercial impact."
- **Tone:** Professional capitalization (proper sentence case). Confident, concrete, no hype. Rewrite ALL of the original lowercase/casual copy.

## 3. Hard Constraints (from the user)

1. **No employer names anywhere.** Every role and project is described by function/industry only (e.g. "a UK B2B e-commerce distributor", "a digital marketing agency"). This includes Phase Electrical, Top Choice Digital, Techplus/Sreeyam, Rubber Roofing Supplies.
2. **No figures or metrics.** No percentages, no SKU counts, no "400%". Describe capability and business effect qualitatively (e.g. "drove several-fold revenue growth", "cut manual onboarding to a fraction of the time"). Emphasize **the technology built and the business effect it produced.**
3. **Photo:** keep the existing `/hero.jpg` for now; swap later.

## 4. Identity & Links

- **Name:** Gbolagade Samuel Ishola (display as "Gbolagade Ishola")
- **Title:** AI Engineer · AI Automation Architect · LLM Solutions
- **Location:** London, UK
- **LinkedIn:** https://www.linkedin.com/in/ishola-gbolagade/
- **X:** https://x.com/GbolagadeSEO
- **GitHub:** https://github.com/gbolask24
- **Email:** gbolagade.ishola@outlook.com
- **Portfolio:** https://gbolask24.github.io/portfolio (existing)

## 5. Main Page (`/`) — Sections

### 5.1 Hero
- Label chip: `AI Engineer · AI Automation Architect · LLM Solutions`
- **H1 (outcome-led):** "I build AI systems that move real business metrics." (exact wording to be refined during implementation)
- Subheading: one or two lines — senior AI engineer in London; designs and ships enterprise AI — RAG, multi-agent automation, and observable LLM systems — from R&D through to production.
- CTAs: **View Projects** (primary) + **Work with me** (secondary, scrolls/links to Contact). No CV/résumé link.
- Keep current hero image (`/hero.jpg`), alt text → "Gbolagade Ishola".

### 5.2 About
- The arc story: started in SEO / digital marketing (led a content/SEO team at a digital agency), moved into AI automation for enterprise clients (orchestration, ERP integrations), now a senior enterprise AI engineer. London-based. MSc Digital Marketing (Middlesex University) plus AI/ML certifications. Focus: turning LLMs into reliable production services inside secure, governed environments.

### 5.3 What I Build & The Impact (replaces "Results")
- Replaces the numbers-driven stats section. Qualitative capability + outcome statements, e.g.:
  - **Production LLM systems** — RAG pipelines, structured-output validation, prompt evaluation, multi-provider routing → reliable AI that behaves predictably in production.
  - **AI customer operations** — AI-first support across multiple e-commerce stores, automating the bulk of routine queries while protecting customer satisfaction.
  - **Agentic content pipelines** — multi-agent ingestion/enrichment/publishing that let a small team expand a product catalogue many times over while cutting manual onboarding to a fraction of the time.
  - **AI observability & governance** — latency/cost/validity monitoring, PII exclusion, GDPR-aligned redaction.
- Credentials row (no scores/dates emphasized): MSc Digital Marketing · Azure AI Engineer Associate (in progress) · ML Specialization (Andrew Ng) · RAG with LangChain · Vector DBs with Pinecone · Transformers with PyTorch.

### 5.4 Projects (replaces the video section)
- A responsive grid of project cards. Each card: title, one-line description, stack tags, link to its case-study page (or external repo for open-source).

### 5.5 Connect
- Links: LinkedIn · X · GitHub · Email · Portfolio. Footer with name + role.

### 5.6 Header
- Floating nav, blurs on scroll: About · Impact · Projects · Contact.

## 6. Project Case-Study Pages

Build **5** pages in this pass, reusing the existing resource-page pattern (minimal header, content sections via the accordion component, cross-linked footer). The footer (`resource-footer.tsx`) is repurposed into a **projects footer** listing the other projects.

| Slug | Title | Source | Naming |
|---|---|---|---|
| `/projects/llm-proxy` | Multi-Provider LLM Proxy | Public repo | Can name + link repo |
| `/projects/ai-ops-monitor` | AI Operations Monitor | Public repo | Can name + link repo |
| `/projects/exec-ai-assistant` | Executive AI Assistant | Private (Phase Assistant) | Anonymized — no employer |
| `/projects/ai-support-platform` | AI Customer Support Platform | Private work | Anonymized — no employer/metrics |
| `/projects/agentic-content-pipeline` | Agentic Product Content Pipeline | Private work | Anonymized — no employer/metrics |

Each page covers: **Overview · The Problem · What I Built (technology) · Stack · The Effect (qualitative business outcome)**. Open-source pages include a GitHub link CTA (like the original tool pages). Private-work pages omit links and stay anonymized.

URL note: original pages live at top-level slugs (e.g. `/claude-seo`). New project pages are namespaced under `/projects/*` for clarity (confirmed).

## 7. Pages to Remove

Delete all original content sub-pages and their layouts:
`60k-linkedin-post`, `ads-ai`, `claude-b2b-outreach`, `claude-content`, `claude-cowork-outreach`, `claude-interviewer`, `claude-marketing`, `claude-outreach`, `claude-reels`, `claude-seo`, `claude-social-growth`, `claude-tiktok`, `claude-trend-scanner`, `claude-twitter`, `claude-website`.

Remove `consult-cta.tsx` (Oleg's consulting CTA) unless reused. Remove the `video-section.tsx` usage from the homepage (replaced by Projects); delete `preview.mp4` if unused.

## 8. Cross-Cutting Updates

- **Metadata / SEO:** rewrite `layout.tsx` titles, descriptions, keywords, OG/Twitter for Gbolagade. Keywords shift to "AI Engineer", "LLM systems", "RAG", "AI automation", "London". Update `sitemap.ts` and `robots.ts` to the new page set. Update `json-ld.tsx` Person schema (name, role, sameAs links).
- **Analytics:** `plausible.tsx` domain currently `oleg.ae` — update to `gbolagade.com`.
- **Favicon / icon:** `icon.png` is Oleg's — replace later (placeholder acceptable for now).
- **CLAUDE.md:** update the workspace doc to reflect the new owner, page set, and removed marketing pages.

## 9. Architecture / Approach

- Keep all motion primitives (`motion/`), `accordion.tsx`, `header.tsx`, `hero-section.tsx`, `about-section.tsx`, section structure. Edit content in place.
- Rename/repurpose `results-section.tsx` → impact section; `video-section.tsx` → projects grid (or new `projects-section.tsx`).
- Repurpose `resource-footer.tsx` → projects footer (update the `resources` array to the project list).
- No new dependencies. Same Tailwind/Framer stack. Deployed on Vercel (already imported).

## 10. Resolved Decisions

1. **Project URL structure:** namespaced `/projects/<slug>`.
2. **Plausible analytics:** update domain to `gbolagade.com`.
3. **CV asset:** no CV link. Secondary hero CTA is "Work with me" → Contact.

## 11. Out of Scope (this pass)

- New professional photography / hero image swap.
- Custom domain setup.
- New favicon / OG share images.
- Blog or writing section.
