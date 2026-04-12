# Plan: Build Personal Landing Page (One-Pager)

**Created:** 2026-04-12
**Status:** Implemented
**Request:** Build a personal one-pager website explaining who Oleg is, what he does, and his results — styled after the hero-section reference code, structured like gleb.ae storytelling, with embedded YouTube video.

---

## Overview

### What This Plan Accomplishes

Build a complete personal landing page at oleeeg.com — a single-page Next.js site with smooth animations, dark aesthetic, and a conversational storytelling flow that introduces Oleg Melnikov to the world: who he is, what he's building, proof of results, and how to connect.

### Why This Matters

Oleg needs a public-facing home base that captures his unique positioning — AI engineer with competitive math background who quit a lucrative trading career to build in public. This page serves as the hub connecting his YouTube, LinkedIn, Authority AI, and personal brand.

---

## Current State

### Relevant Existing Structure

- `reference/components/hero-section/` — Next.js + Tailwind + Framer Motion hero with animated text, gradient backgrounds, floating header with scroll blur
- `reference/hero-image.jpg` — Professional photo (Oleg at desk, Dubai skyline)
- `context/` — Fully populated personal info, business info, strategy, metrics
- No existing site code — building from scratch

### Gaps or Problems Being Addressed

- Oleg has no personal website. All traffic goes to buildauthority.ai (product site) or YouTube. Needs a personal hub.

---

## Proposed Changes

### Summary of Changes

- Initialize a Next.js 15 + React 19 + Tailwind CSS 4 project (matching the reference code's stack)
- Build a single-page site with 6 sections following gleb.ae's storytelling structure
- Use the hero-section reference for visual style: dark theme, blur-in animations, floating header
- Embed YouTube video (https://youtu.be/AKtT6NLZGoM) with thumbnail preview
- Deploy-ready for Vercel

### New Files to Create

| File Path | Purpose |
|---|---|
| `src/app/layout.tsx` | Root layout with fonts, metadata, dark theme |
| `src/app/page.tsx` | Main page composing all sections |
| `src/app/globals.css` | Global styles, Tailwind imports |
| `src/components/header.tsx` | Floating nav header (adapted from reference) |
| `src/components/hero-section.tsx` | Hero with name, tagline, photo, animated text |
| `src/components/about-section.tsx` | "What I do now" — Authority AI + YouTube |
| `src/components/results-section.tsx` | Social proof: client results, YouTube stats, credentials |
| `src/components/video-section.tsx` | Embedded YouTube video with thumbnail preview |
| `src/components/connect-section.tsx` | Social links + contact CTA footer |
| `src/components/motion/text-effect.tsx` | Animated text component (from reference pattern) |
| `src/components/motion/animated-group.tsx` | Staggered animation wrapper (from reference pattern) |
| `src/lib/utils.ts` | cn() utility for className merging |
| `public/hero.jpg` | Hero photo (copy from reference/hero-image.jpg) |
| `package.json` | Dependencies |
| `tailwind.config.ts` | Tailwind configuration |
| `tsconfig.json` | TypeScript config |
| `next.config.ts` | Next.js config |

### Files to Modify

| File Path | Changes |
|---|---|
| `CLAUDE.md` | Add tech stack info and dev server instructions |

---

## Design Decisions

### Key Decisions Made

1. **Next.js 15 + Tailwind CSS 4**: Matches the reference code stack exactly, ensuring we can reuse the animation patterns and styling approach without adaptation.

2. **Dark theme only (no light mode toggle)**: Matches the aesthetic of the reference hero-section (dark backgrounds, light text, radial gradients). Simpler, more distinctive. Oleg's brand is tech-forward.

3. **gleb.ae storytelling structure adapted for Oleg**: Following the same narrative arc — who I am → what I do now → proof → content/media → connect — but adapted with Oleg's specific story beats and a more dramatic "quit 600K" narrative hook.

4. **Conversational lowercase copy style**: Matches gleb.ae's approachable tone. Lowercase headings, first-person, short declarative statements. This fits Oleg's authentic/no-fluff brand voice.

5. **YouTube embed with custom thumbnail preview**: Instead of a raw iframe, show a large clickable thumbnail that loads the video on click — better performance, more visual impact, and gives control over the preview appearance.

6. **Framer Motion for animations**: The reference uses `TextEffect` and `AnimatedGroup` with spring-based blur-in transitions. We'll implement lightweight versions of these for the landing page.

7. **No external component library (shadcn/ui)**: The reference imports from `@/components/ui/button` but for a simple one-pager we'll write minimal button/link components inline. Keeps dependencies lean.

### Alternatives Considered

- **Static HTML/CSS**: Simpler but loses the animation quality of the reference and makes future iteration harder.
- **Astro**: Good for static sites but Oleg's main project uses Next.js — keeping consistency.
- **Full shadcn/ui setup**: Overkill for a one-pager with ~5 interactive elements.

### Open Questions

1. **Domain**: Will this deploy to oleeeg.com or a subdomain? (Doesn't affect build, just metadata.)
2. **Hero photo**: The reference image is great — should we use it as-is, or do you have a preferred photo?

---

## Step-by-Step Tasks

### Step 1: Initialize Next.js Project

Set up the project with Next.js 15, React 19, Tailwind CSS 4, and Framer Motion.

**Actions:**

- Run `npx create-next-app@latest . --typescript --tailwind --app --src-dir --no-import-alias` (or manually create minimal config)
- Install framer-motion: `npm install framer-motion`
- Install clsx + tailwind-merge for cn(): `npm install clsx tailwind-merge`
- Copy `reference/hero-image.jpg` to `public/hero.jpg`
- Set up `src/lib/utils.ts` with cn() helper

**Files affected:**

- `package.json`
- `tsconfig.json`
- `next.config.ts`
- `tailwind.config.ts`
- `src/app/globals.css`
- `src/lib/utils.ts`
- `public/hero.jpg`

---

### Step 2: Build Motion/Animation Components

Create reusable animation primitives inspired by the reference code's `TextEffect` and `AnimatedGroup`.

**Actions:**

- Create `src/components/motion/text-effect.tsx` — animated text that fades/blurs in word-by-word or line-by-line, using framer-motion
- Create `src/components/motion/animated-group.tsx` — container that staggers children animations with spring physics

**Behavior specs (from reference):**

- TextEffect: `preset="fade-in-blur"`, configurable `speedSegment`, `delay`, renders as specified element (`as` prop)
- AnimatedGroup: accepts `variants` with container/item patterns, staggers children with `delayChildren` and `staggerChildren`

**Files affected:**

- `src/components/motion/text-effect.tsx`
- `src/components/motion/animated-group.tsx`

---

### Step 3: Build Header Component

Floating navigation header that becomes compact/blurred on scroll.

**Actions:**

- Adapt from `reference/components/hero-section/header.tsx`
- Simplify: remove login/signup buttons, replace menu items with anchor links to page sections
- Nav items: "about", "results", "watch", "connect" (lowercase, matching gleb.ae style)
- Left side: "oleg melnikov" text logo (no image logo needed)
- Right side: "youtube" link (external, opens in new tab)
- Mobile: hamburger menu with same links

**Files affected:**

- `src/components/header.tsx`

---

### Step 4: Build Hero Section

The opening impact — name, tagline, and photo.

**Actions:**

- Adapt visual structure from `reference/components/hero-section/hero-section.tsx`
- Keep the radial gradient background effects (the 3 rotated divs creating subtle light effects)
- Content (conversational, lowercase):
  - Small top label/pill: "ai engineer & entrepreneur" (similar to the "Introducing Support for AI Models" pill in reference, but simpler — no arrow, just text)
  - Main heading (TextEffect animated): "i quit a $650k trading career at 24 to build with AI."
  - Subheading (TextEffect with delay): "now i help B2B founders become authorities in their space — and teach thousands how to build with AI on youtube."
  - Two CTAs (AnimatedGroup):
    - Primary button: "watch on youtube" → links to YouTube channel
    - Secondary/ghost button: "see my work" → scrolls to results section
- Hero image: Large photo below the CTAs (similar to the app screenshot in reference, but using hero.jpg). Apply the same rounded-2xl border shadow treatment and mask-b fade effect.

**Files affected:**

- `src/components/hero-section.tsx`

---

### Step 5: Build About Section

What Oleg does now — current activities and offerings.

**Actions:**

- Section with id="about" for anchor navigation
- Storytelling flow (following gleb.ae pattern — "currently, i..."):
  - "i run authority ai — a done-for-you system that turns busy founders into linkedin authorities. one hour per week, 5 posts delivered."
  - Brief mention of how it works (voice interview → AI-generated content)
  - Link to buildauthority.ai
  - "i also teach ai automation and claude code to 15,000+ subscribers on youtube."
  - Link to YouTube channel
- Visual: Clean, text-focused section. Maybe a subtle card or two for Authority AI and YouTube with minimal styling. Dark background continues.

**Files affected:**

- `src/components/about-section.tsx`

---

### Step 6: Build Results Section

Social proof and credentials — the "why should I care" section.

**Actions:**

- Section with id="results" for anchor navigation
- Grid or list of proof points (adapted from gleb.ae's ratings/rankings pattern):
  - "500K+ impressions generated for clients"
  - "mike kamo (co-founder of NP Digital, $100M+ agency) — 80K views in 2 months"
  - "$6,600 first inbound deal generated in 14 days"
  - "15,700+ youtube subscribers, 435K+ views"
  - "russian national math olympiad winner (2017, 2019)"
  - "former quantitative researcher, pinely (amsterdam)"
- Visual treatment: Large numbers/stats in bold, descriptions in muted text. Cards or a clean grid layout.

**Files affected:**

- `src/components/results-section.tsx`

---

### Step 7: Build Video Section

Embedded YouTube video with thumbnail preview.

**Actions:**

- Section with id="watch" for anchor navigation
- Intro text: "i share my journey building with ai on youtube." (echoing gleb.ae's "i share parts of my journey on...")
- YouTube embed for https://youtu.be/AKtT6NLZGoM:
  - Default state: Show large thumbnail image (use YouTube's maxresdefault thumbnail URL: `https://img.youtube.com/vi/AKtT6NLZGoM/maxresdefault.jpg`) with a play button overlay
  - On click: Replace thumbnail with YouTube iframe embed (lazy load for performance)
  - Container: Same rounded-2xl border shadow treatment as hero image
- Below video: "subscribe for weekly claude code tutorials and ai automation breakdowns." with a link to the channel

**Files affected:**

- `src/components/video-section.tsx`

---

### Step 8: Build Connect/Footer Section

How to reach Oleg — social links and sign-off.

**Actions:**

- Section with id="connect" for anchor navigation
- "let's connect" or "say hi" heading
- Contact email link (if Oleg wants to share one) or just social links
- Social links row:
  - YouTube: youtube.com/@oleeeg
  - LinkedIn: linkedin.com/in/olegmelnikov
  - Instagram: @melnikoff_oleg
  - Website: buildauthority.ai
- Warm sign-off: "cheers, oleg" (matching gleb.ae's personal closing)
- Minimal footer below: "© 2026 oleg melnikov"

**Files affected:**

- `src/components/connect-section.tsx`

---

### Step 9: Compose Page & Layout

Wire everything together.

**Actions:**

- `src/app/layout.tsx`:
  - Set up Inter or Geist font (matching modern Next.js defaults)
  - Dark theme: set `<html className="dark">` and dark background on body
  - Metadata: title "Oleg Melnikov — AI Engineer & Entrepreneur", description, og:image
- `src/app/page.tsx`:
  - Import and render all sections in order:
    1. Header
    2. HeroSection
    3. AboutSection
    4. ResultsSection
    5. VideoSection
    6. ConnectSection
- `src/app/globals.css`:
  - Tailwind imports
  - Set background/foreground CSS variables for dark theme
  - Smooth scroll behavior
  - Any custom utilities

**Files affected:**

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`

---

### Step 10: Test & Polish

Verify everything works and looks right.

**Actions:**

- Run `npm run dev` and test in browser
- Check:
  - All animations fire correctly on load
  - Smooth scroll to sections from nav links
  - YouTube thumbnail loads, click plays video
  - Mobile responsive (header hamburger, stacked layout)
  - All external links open in new tabs
  - Hero image loads properly
  - Dark theme is consistent throughout
- Fix any visual issues or spacing problems

**Files affected:**

- Various components as needed for fixes

---

### Step 11: Update CLAUDE.md

Document the tech stack and dev workflow.

**Actions:**

- Add section to CLAUDE.md about the site's tech stack (Next.js 15, Tailwind 4, Framer Motion)
- Add dev server command (`npm run dev`)
- Note deployment target (Vercel)

**Files affected:**

- `CLAUDE.md`

---

## Connections & Dependencies

### Files That Reference This Area

- `CLAUDE.md` — needs tech stack and dev info added
- `context/personal-info.md` — source for copy/bio content
- `context/business-info.md` — source for Authority AI details and results

### Updates Needed for Consistency

- CLAUDE.md updated with tech stack and dev workflow (Step 11)

### Impact on Existing Workflows

- No existing workflows affected — this is greenfield
- The reference files in `reference/` remain untouched (they're inspiration, not consumed by the build)

---

## Validation Checklist

- [ ] `npm run dev` starts without errors
- [ ] Page loads with animated hero section
- [ ] Header floats and becomes compact/blurred on scroll
- [ ] All nav links smooth-scroll to correct sections
- [ ] YouTube thumbnail displays and clicking it plays the video
- [ ] All external links (YouTube channel, LinkedIn, buildauthority.ai) work and open in new tabs
- [ ] Mobile layout is clean (stacked sections, hamburger menu)
- [ ] Hero image displays correctly
- [ ] Copy is accurate (stats, names, links match context files)
- [ ] CLAUDE.md updated with tech stack info

---

## Success Criteria

The implementation is complete when:

1. A polished, dark-themed one-pager is running locally with all 6 sections (hero, about, results, video, connect, footer)
2. Animations match the quality of the reference code (fade-in-blur text, staggered reveals, scroll-responsive header)
3. The YouTube video embed works with thumbnail preview → click-to-play
4. The page is fully responsive (mobile, tablet, desktop)
5. The storytelling flows naturally: who I am → what I do → proof → watch → connect

---

## Notes

- The copy in this plan is a starting point — Oleg may want to adjust tone, specific numbers, or add/remove sections during implementation
- The video ID `AKtT6NLZGoM` is hardcoded — if Oleg wants to change the featured video later, it's a single constant to update
- Future enhancements could include: analytics (Plausible), custom domain setup, OG image generation, blog section
- The reference code uses `motion-primitives` library — we'll implement our own lightweight versions to avoid an unnecessary dependency
