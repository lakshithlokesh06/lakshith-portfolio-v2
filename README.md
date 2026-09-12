# Lakshith S Lokesh — Interactive Data Lab

An actively developed personal portfolio for data science, machine learning, analytics, AI systems, and full-stack technical projects. Phase 2 adds the interactive Data Constellation hero to the Phase 1 foundation; project stories and the remaining section experiences are still in development.

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
    visuals/            Interactive constellation, native node buttons, SVG edges
  data/                 Central personal content and typed constellation graph
  hooks/                Active-section observer and pointer proximity
  lib/                  Shared motion settings
  types/                Portfolio and constellation data contracts
```

The page and section content use Server Components. Client code is limited to navigation, section tracking, reusable Framer Motion reveals, and constellation interaction. Native anchor navigation and a native modal dialog provide keyboard navigation, Escape dismissal, focus containment/restoration, and mobile scroll management.

## Visual system

Graphite surfaces, off-white typography, restrained cyan, fine borders, and an editorial responsive type scale. Global color, spacing, typography, and interaction rules live in `src/app/globals.css`; the Tailwind theme exposes the main tokens. Layouts adapt from 320px upward. The hero uses a conceptual network of technical relationships, not measured data or proficiency scores. Its scoped styles live in `src/components/visuals/constellation.css` and inherit the global tokens.

Small one-time entrance transitions respect reduced-motion preferences. The hero uses a short CSS sequence and draws its SVG edges once before settling. Core content is visible in server HTML even without JavaScript. Simple hover and focus states use CSS; the native cursor is retained.

## Content and current phase

Edit `src/data/portfolio.ts` to maintain verified content. Social URLs are intentionally `null` and rendered as noninteractive, labeled placeholders. Add verified HTTPS URLs to enable links. Projects and technology lists are empty; the skill rows describe broad areas rather than claiming proficiency. Only known postgraduate study details are shown. Add institution names, dates, experience, and contact details only when supplied.

Phase 1 includes the application shell, responsive navigation, initial hero, reusable styles and motion, and structural sections for Work, About, Skills, Journey, and Contact. No fabricated projects, statistics, employment, awards, or social links are included.

## Phase 2: Data Constellation

`src/data/constellation.ts` defines 13 concepts, 17 meaningful connections, descriptions, importance, and percentage-based desktop/compact positions. Relationships are undirected for exploration: selecting either endpoint reveals its direct neighbours. Three visual levels distinguish main areas, technologies, and supporting concepts without suggesting proficiency.

- Select native HTML node buttons with click, tap, Tab then Enter/Space. `aria-pressed` exposes selection; a polite, atomic status region announces the selected concept, explanation, and related concepts. Selection persists until another concept is chosen.
- SVG edges are decorative and excluded from the accessibility tree. Direct edges and neighbours are emphasized; unrelated elements remain readable. Pointer proximity adds temporary emphasis without changing selection.
- Below 600px, four main nodes use a separate staggered composition with full-size touch targets. A labeled native select exposes all 13 concepts, including secondary concepts shown in the contextual response. The same selection state survives responsive changes.
- The proximity hook batches pointer events into at most one animation frame, reads one field rectangle, and updates DOM attributes only when the nearest node changes. It has no per-frame React state, physics, node drift, or idle animation loop. All listeners and pending frames are cleaned up.
- Reduced motion disables the entrance, edge drawing, and proximity effect while retaining selection. The server-rendered graph and initial description remain visible without JavaScript; interactive selection requires JavaScript.

No dependencies were added for Phase 2. The existing CTA destinations and safe social-link placeholders are preserved.

## Future development

Later phases can add verified flagship projects and project storytelling, expand the technical stack and journey, and activate contact links. No project case studies, custom cursor, theme toggle, backend, or heavy visualization dependencies are implemented. Deployment-specific canonical URLs, sitemap, and social preview imagery should be configured when the public domain and assets are available.
