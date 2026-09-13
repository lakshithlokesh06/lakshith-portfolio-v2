# Lakshith S Lokesh — Interactive Data Lab

An actively developed personal portfolio for data science, machine learning, analytics, AI systems, and full-stack technical projects. Phase 4 adds an editorial About profile and the interactive Learning Trajectory. The Data Constellation and six-project Observatory remain intact; Skills and Contact remain foundations for later development.

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
    projects/           Observatory, project rows, notes, previews, architecture
    journey/            Interactive stage map, SVG path, server-rendered context
    ui/                 Actions, social links, section headings, reveals
    visuals/            Interactive constellation, native node buttons, SVG edges
  data/                 Central personal content and typed constellation graph
  hooks/                Section/project visibility observers and pointer proximity
  lib/                  Shared motion settings
  types/                Portfolio, education/journey, project, and constellation contracts
```

The page and section content use Server Components. Client code is limited to navigation, section tracking, reusable Framer Motion reveals, constellation interaction, project selection/expansion, and journey stage previews/selection. Native anchor navigation and a native modal dialog provide keyboard navigation, Escape dismissal, focus containment/restoration, and mobile scroll management.

## Visual system

Graphite surfaces, off-white typography, restrained cyan, fine borders, and an editorial responsive type scale. Global color, spacing, typography, and interaction rules live in `src/app/globals.css`; the Tailwind theme exposes the main tokens. Layouts adapt from 320px upward. The hero uses a conceptual network of technical relationships, not measured data or proficiency scores. Its scoped styles live in `src/components/visuals/constellation.css` and inherit the global tokens.

Small one-time entrance transitions respect reduced-motion preferences. The hero uses a short CSS sequence and draws its SVG edges once before settling. Core content is visible in server HTML even without JavaScript. Simple hover and focus states use CSS; the native cursor is retained.

## Content and current phase

Edit `src/data/portfolio.ts` to maintain verified content. Social URLs are intentionally `null` and rendered as noninteractive, labeled placeholders. Add verified HTTPS URLs to enable links. Projects are defined in `src/data/projects.ts`; skill technology lists remain empty; the skill rows describe broad areas rather than claiming proficiency. Verified education records now include PUC, BCA, and current MSc study. Add institution names, dates, experience, and contact details only when supplied.

Phase 1 includes the application shell, responsive navigation, initial hero, reusable styles and motion, and structural sections for Work, About, Skills, Journey, and Contact. No fabricated projects, statistics, employment, awards, or social links are included.

## Phase 2: Data Constellation

`src/data/constellation.ts` defines 13 concepts, 17 meaningful connections, descriptions, importance, and percentage-based desktop/compact positions. Relationships are undirected for exploration: selecting either endpoint reveals its direct neighbours. Three visual levels distinguish main areas, technologies, and supporting concepts without suggesting proficiency.

- Select native HTML node buttons with click, tap, Tab then Enter/Space. `aria-pressed` exposes selection; a polite, atomic status region announces the selected concept, explanation, and related concepts. Selection persists until another concept is chosen.
- SVG edges are decorative and excluded from the accessibility tree. Direct edges and neighbours are emphasized; unrelated elements remain readable. Pointer proximity adds temporary emphasis without changing selection.
- Below 600px, four main nodes use a separate staggered composition with full-size touch targets. A labeled native select exposes all 13 concepts, including secondary concepts shown in the contextual response. The same selection state survives responsive changes.
- The proximity hook batches pointer events into at most one animation frame, reads one field rectangle, and updates DOM attributes only when the nearest node changes. It has no per-frame React state, physics, node drift, or idle animation loop. All listeners and pending frames are cleaned up.
- Reduced motion disables the entrance, edge drawing, and proximity effect while retaining selection. The server-rendered graph and initial description remain visible without JavaScript; interactive selection requires JavaScript.

No dependencies were added for Phase 2. The existing CTA destinations and safe social-link placeholders are preserved.

## Phase 3: Project Observatory

Six supplied projects form an editorial index rather than a card grid. AI Smart Travel Planner receives flagship space and an inline conceptual architecture diagram. The other projects cover dataset analysis, job-market exploration, career recommendations, commerce analytics/forecasting, and academic prediction.

`src/types/project.ts` defines the project contract: identity, classification, concise story notes, focus, full/summary stacks, functionality, optional deployment status and verified links, and preview configuration. Project data lives in `src/data/projects.ts`, separate from personal/navigation configuration so navigation does not load the project stories. Unknown details are omitted, including the Job Market stack. Live application status is only shown for the four projects confirmed by the brief; URLs are not fabricated.

- Select using a project title, preview button, or index link. Selection persists until another project is selected; hover/focus temporarily emphasizes a row without replacing selection.
- Explore Project toggles inline notes. Only one detail region is open; choosing another project closes the previous notes. Native buttons expose `aria-pressed` and `aria-expanded`; hidden regions are removed from keyboard navigation. Focus stays on the disclosure button when toggling.
- The sticky horizontal index scrolls with native anchors. A thin line and `aria-current` track the visible project using IntersectionObserver; cyan index numbers indicate persistent selection. Scrolling never changes the selected project.
- At narrow widths, rows stack, the index becomes six compact numbered targets, metadata wraps, and architecture uses a vertical interface/API flow followed by two branches. There is no viewport locking or custom scroll logic.
- Previews are small CSS/SVG compositions using unitless illustrative shapes. Their visible captions explicitly distinguish them from project results. Decorative SVG content is excluded from assistive technology; project meaning is available as text.
- `ProjectVisual` can render a supplied screenshot through Next Image when `visual.screenshot` includes `src`, `alt`, `width`, and `height`. No images are downloaded or generated. Add remote-image configuration only for a verified image host if needed later.
- The flagship diagram branches from the API into planning orchestration and SQLAlchemy/PostgreSQL persistence; it does not present storage as the last agent step. It is labeled as a conceptual architecture map.
- Static preview and detail components render on the server and are passed into the small client interaction shell. CSS transitions settle immediately after interaction, honor reduced motion, and use no animation loops or scroll handlers.

No Phase 3 dependencies were added. Missing GitHub/live URLs produce no action; verified external URLs open in a new tab with accessible labels and `noopener noreferrer`. A future internal case-study path is supported by the model but no project routes are created.

## Phase 4: About + Learning Trajectory

About uses an asymmetric narrative and supporting profile facts, an understated academic strip, and a technical statement leading directly into Journey. Skills follows Journey as an unchanged placeholder. The text describes a postgraduate student and practical project work, with no employment or expertise claims.

- `src/data/education.ts` is the shared typed source for PUC, BCA, and MSc facts. PUC is CSBA at St. Joseph’s Pre-University College, 2021–2023; its four subjects are preserved. BCA Data Analytics at Jain includes only the supplied **8.172 CGPA**, without conversions or an invented date range. MSc at Chanakya University is current, starting in 2026.
- `src/data/profile.ts` contains the editorial narrative and references education records. `src/data/journey.ts` defines six conceptual stages, transitions, focus areas, education IDs, project IDs, and display positions. The path is a learning narrative; undated project stages may overlap and are not represented as a dated chronology.
- Journey references resolve project IDs through `src/data/projects.ts`. Project titles and destinations are not copied into the journey configuration. Links scroll to existing Observatory rows without changing project behavior.
- On desktop a custom SVG joins the stages along a changing path. Increasing small branches suggest conceptual complexity, not measured proficiency. Smaller screens use a readable, numbered stage composition with simplified connectors instead of scaling down the SVG.
- Hover/focus previews context; click, tap, Enter, or Space persists selection. Leaving a preview restores the selected context. A dedicated link moves keyboard focus into the selected stage’s details. Buttons expose pressed state, panels have accessible names, and selection is announced politely.
- Context and About content render on the server; only stage interaction and the one-shot entrance observer are client-side. The SVG is decorative. With reduced motion the trajectory renders immediately, context transitions are removed, and selection remains functional. No per-frame loops, physics, or dependencies were added.

## Future development

Phase 5 can expand Skills and Contact, add verified project links and real screenshots, and develop full case-study routes when requested. No custom cursor, theme toggle, backend, or heavy visualization dependencies are implemented. Deployment-specific canonical URLs, sitemap, and social preview imagery should be configured when the public domain and assets are available.
