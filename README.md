# Lakshith S Lokesh — Interactive Data Lab

An actively developed personal portfolio for data science, machine learning, analytics, AI systems, and full-stack technical projects. Phase 1 establishes the foundation and visual identity; project stories and richer interactions are still in development.

## Stack

Next.js App Router, React, strict TypeScript, Tailwind CSS 4, Framer Motion, and Lucide React. Manrope and IBM Plex Mono are served through `next/font`. No chart, particle, 3D, or component-library dependencies.

## Local setup

Use Node.js 22 LTS or newer and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. No environment variables are currently required; `.env.example` documents this. The first build needs network access to fetch the Google fonts, which Next.js then self-hosts.

## Commands

| Command             | Purpose                                        |
| ------------------- | ---------------------------------------------- |
| `npm run dev`       | Local development                              |
| `npm run lint`      | ESLint, including Next.js and TypeScript rules |
| `npm run typecheck` | Strict TypeScript validation                   |
| `npm run build`     | Production compilation and static generation   |
| `npm start`         | Serve the production build                     |

Run lint, typecheck, and build before releasing. Run them sequentially because Next.js generates route types during its build.

## Structure

```text
src/
  app/                  Routes, metadata, fonts, favicon, global design tokens
  components/
    layout/             Sticky navigation, mobile dialog, footer
    sections/           Hero and individual homepage sections
    ui/                 Actions, social links, section headings, reveals
    visuals/            Lightweight static hero field illustration
  data/portfolio.ts     Single source for personal and section content
  hooks/                Active-section observer
  lib/                  Shared motion settings
  types/                Content contracts for future additions
```

The page and section content use Server Components. Client code is limited to navigation, section tracking, and reusable Framer Motion reveals. Native anchor navigation and a native modal dialog provide keyboard navigation, Escape dismissal, focus containment/restoration, and mobile scroll management.

## Visual system

Graphite surfaces, off-white typography, restrained cyan, fine borders, and an editorial responsive type scale. Global color, spacing, typography, and interaction rules live in `src/app/globals.css`; the Tailwind theme exposes the main tokens. Layouts adapt from 320px upward. The decorative SVG is an abstract concept sketch, not measured data or a finished interactive visualization.

Small one-time entrance transitions share motion settings and respect reduced-motion preferences. Core content is visible in server HTML even without JavaScript. Simple hover and focus states use CSS; the native cursor is retained.

## Content and current phase

Edit `src/data/portfolio.ts` to maintain verified content. Social URLs are intentionally `null` and rendered as noninteractive, labeled placeholders. Add verified HTTPS URLs to enable links. Projects and technology lists are empty; the skill rows describe broad areas rather than claiming proficiency. Only known postgraduate study details are shown. Add institution names, dates, experience, and contact details only when supplied.

Phase 1 includes the application shell, responsive navigation, initial hero, reusable styles and motion, and structural sections for Work, About, Skills, Journey, and Contact. No fabricated projects, statistics, employment, awards, or social links are included.

## Future development

Phase 2 can replace the static hero visual, add verified flagship projects and project storytelling, expand the technical stack and journey, and activate contact links. No Phase 2 experiences, custom cursor, theme toggle, or heavy visualization dependencies are implemented. Deployment-specific canonical URLs, sitemap, and social preview imagery should be configured when the public domain and assets are available.
