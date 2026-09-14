# Lakshith S Lokesh — Interactive Data Lab

Homepage core experience is complete. Phases 1–6 provide the Data Constellation, Project Observatory, About, Technical Journey, Capability Matrix, and Contact / Connection Layer. Phase 7 adds six technical case studies. Final production polish remains; the entire portfolio is not yet complete.

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
    skills/             Workflow rail, capability matrix, usage context
    ui/                 Actions, social links, section headings, reveals
    visuals/            Interactive constellation, native node buttons, SVG edges
  data/                 Central personal content and typed constellation graph
  hooks/                Section/project visibility observers and pointer proximity
  lib/                  Shared motion settings
  types/                Portfolio, education/journey, project, and constellation contracts
```

The page and section content use Server Components. Client code is limited to navigation, section tracking, reusable Framer Motion reveals, constellation interaction, project selection/expansion, journey stage previews/selection, and capability filtering/selection. Native anchor navigation and a native modal dialog provide keyboard navigation, Escape dismissal, focus containment/restoration, and mobile scroll management.

## Visual system

Graphite surfaces, off-white typography, restrained cyan, fine borders, and an editorial responsive type scale. Global color, spacing, typography, and interaction rules live in `src/app/globals.css`; the Tailwind theme exposes the main tokens. Layouts adapt from 320px upward. The hero uses a conceptual network of technical relationships, not measured data or proficiency scores. Its scoped styles live in `src/components/visuals/constellation.css` and inherit the global tokens.

Small one-time entrance transitions respect reduced-motion preferences. The hero uses a short CSS sequence and draws its SVG edges once before settling. Core content is visible in server HTML even without JavaScript. Simple hover and focus states use CSS; the native cursor is retained.

## Content and current phase

Edit `src/data/portfolio.ts` to maintain verified content. Contact routes are centralized in `src/data/contact.ts` and reused by Hero, Contact, and Footer. Unverified routes are omitted. Projects are defined in `src/data/projects.ts`; capability definitions live in `src/data/skills.ts` and show workflow roles rather than proficiency. Verified education records now include PUC, BCA, and current MSc study. Add institution names, dates, experience, and contact details only when supplied.

Phase 1 includes the application shell, responsive navigation, initial hero, reusable styles and motion, and structural sections for Work, About, Skills, Journey, and Contact. No fabricated projects, statistics, employment, awards, or social links are included.

## Phase 2: Data Constellation

`src/data/constellation.ts` defines 13 concepts, 17 meaningful connections, descriptions, importance, and percentage-based desktop/compact positions. Relationships are undirected for exploration: selecting either endpoint reveals its direct neighbours. Three visual levels distinguish main areas, technologies, and supporting concepts without suggesting proficiency.

- Select native HTML node buttons with click, tap, Tab then Enter/Space. `aria-pressed` exposes selection; a polite, atomic status region announces the selected concept, explanation, and related concepts. Selection persists until another concept is chosen.
- SVG edges are decorative and excluded from the accessibility tree. Direct edges and neighbours are emphasized; unrelated elements remain readable. Pointer proximity adds temporary emphasis without changing selection.
- Below 600px, four main nodes use a separate staggered composition with full-size touch targets. A labeled native select exposes all 13 concepts, including secondary concepts shown in the contextual response. The same selection state survives responsive changes.
- The proximity hook batches pointer events into at most one animation frame, reads one field rectangle, and updates DOM attributes only when the nearest node changes. It has no per-frame React state, physics, node drift, or idle animation loop. All listeners and pending frames are cleaned up.
- Reduced motion disables the entrance, edge drawing, and proximity effect while retaining selection. The server-rendered graph and initial description remain visible without JavaScript; interactive selection requires JavaScript.

No dependencies were added for Phase 2. The existing CTA destinations and safe social-link placeholders were preserved in Phase 2; verified routes replace those placeholders in Phase 6.

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

No Phase 3 dependencies were added. Missing GitHub/live URLs produce no action; verified external URLs open in a new tab with accessible labels and `noopener noreferrer`. The Phase 3 model reserved internal case-study paths; Phase 7 now supplies all six routes.

## Phase 4: About + Learning Trajectory

About uses an asymmetric narrative and supporting profile facts, an understated academic strip, and a technical statement leading directly into Journey. Skills follows Journey; its Phase 4 placeholder was replaced by the Phase 5 Capability Matrix. The text describes a postgraduate student and practical project work, with no employment or expertise claims.

- `src/data/education.ts` is the shared typed source for PUC, BCA, and MSc facts. PUC is CSBA at St. Joseph’s Pre-University College, 2021–2023; its four subjects are preserved. BCA Data Analytics at Jain includes only the supplied **8.172 CGPA**, without conversions or an invented date range. MSc Data Science at Chanakya University has the duration **2026–2028** and status **Current**.
- `src/data/profile.ts` contains the editorial narrative and references education records. `src/data/journey.ts` defines six conceptual stages, transitions, focus areas, education IDs, project IDs, and display positions. The path is a learning narrative; undated project stages may overlap and are not represented as a dated chronology.
- Journey references resolve project IDs through `src/data/projects.ts`. Project titles and destinations are not copied into the journey configuration. Links scroll to existing Observatory rows without changing project behavior.
- On desktop a custom SVG joins the stages along a changing path. Increasing small branches suggest conceptual complexity, not measured proficiency. Smaller screens use a readable, numbered stage composition with simplified connectors instead of scaling down the SVG.
- Hover/focus previews context; click, tap, Enter, or Space persists selection. Leaving a preview restores the selected context. A dedicated link moves keyboard focus into the selected stage’s details. Buttons expose pressed state, panels have accessible names, and selection is announced politely.
- Context and About content render on the server; only stage interaction and the one-shot entrance observer are client-side. The SVG is decorative. With reduced motion the trajectory renders immediately, context transitions are removed, and selection remains functional. No per-frame loops, physics, or dependencies were added.

## Phase 5: Skills / Technical Ecosystem

The Capability Matrix presents 19 supported tools as part of Data, Analyze, Model, Build, and Ship. Typographic columns show each tool once in a primary placement; multi-stage metadata expresses where else it participates. Active connectors trace the selected tool’s workflow. Ship includes report delivery, persistence, and repository workflow; it does not imply an unverified hosting platform.

- `src/types/skills.ts` defines stage, group, role, usage-purpose, exact project-technology aliases, and optional repository evidence. `src/data/skills.ts` replaces the old placeholder skills config. Broad Data Science positioning remains current-study context, rendered from the shared MSc record as **2026–2028**.
- `src/lib/capabilities.ts` resolves project associations from the existing project technology arrays on the server. Matching normalizes case and whitespace but uses exact tokens, so SQL is never inferred from PostgreSQL or SQLite. OpenAI APIs explicitly maps to the recorded OpenAI technology. No project titles or project-to-tool mapping lists are duplicated in skill configuration.
- Core means two or more matching listed projects, Used means one, and Workflow identifies repository-supported tooling without recorded project associations. Python matches five projects; Pandas two; Scikit-learn and Streamlit three each. Git/GitHub are supported by this repository, with zero inferred matches in the six project records. The UI explains that distinction.
- ALL is the default stage filter. Stage selection narrows available tools while preserving their primary placements. If the selected tool belongs to the new stage it stays selected; otherwise the first matching tool is selected. Hover/focus temporarily previews another tool; click, tap, Enter, or Space persists selection.
- A context panel exposes role, uses, workflow, derived usage counts, and project links. Six small marks represent the actual six project records; filled marks are real matches. Project links use existing Observatory anchors and do not duplicate project detail UI.
- Mobile uses a two-row stage selector, two-column grouped tool lists, and stacked context. Technical items and stage buttons meet 44px targets. Pressed states, focus outlines, polite selection announcements, and a link into the selected context support keyboard use.
- Reduced motion removes connector drawing and CSS transitions; filtering and selection remain intact. There are no per-frame listeners, idle loops, canvas, logos, chart packages, or new dependencies. The existing Framer Motion installation remains unchanged; Anime.js is not added.

## Phase 6: Contact / Connection Layer

Homepage core experience is complete. Contact closes the narrative with an editorial headline, shared academic/location metadata, a direct GitHub route, discussion areas, and a restrained closing statement.

- `src/types/contact.ts` supports email, LinkedIn, GitHub, and resume routes. `src/data/contact.ts` is the canonical source for route values, URLs, and descriptions. GitHub is verified by this repository’s origin remote (`lakshithlokesh06`). No verified email, LinkedIn URL, or resume asset was found; those actions are omitted. No private Git author email is used.
- `src/components/contact/connection-layer.tsx` renders a small decorative SVG whose three lines converge on a named endpoint. Hover/focus on a route emphasizes the lines and arrow using CSS. URLs, descriptions, and normal link actions remain visible without interaction. No new client-side state or event listeners are needed.
- Contact reuses the shared education record: MSc Data Science, Chanakya University, 2026–2028, Current. Location is centralized as Bengaluru, India; About consumes it without appending a duplicate country.
- Footer includes the current year, name, concise positioning, canonical social links, and a native Back to top anchor. The year is evaluated when the page is rendered during production builds; rebuild at year rollover for this static site.
- Navigation follows Home → Work → About → Journey → Skills → Contact. The unnumbered Hero and existing editorial sequence 01 Work, 02 About, 03 Journey, 04 Skills, 05 Contact are preserved; constellation FIELD / 01 remains its own diagram label.
- Contact retains the shared heading/entrance system. Its final statement flows directly into the compact footer without an extra section-sized bottom gap. Earlier section spacing and motion remain intact.
- Mobile stacks the composition, simplifies the motif, wraps route values, and allows footer links to wrap. Links have 44px minimum targets, visible focus, descriptive external labels, safe new-tab attributes, and associated context. Reduced motion removes hover movement/transitions and uses the existing native-scroll override.
- No form, backend, copy-email control, availability claims, social embeds, new dependencies, or Anime.js were introduced.

## Phase 7: Project case studies

All six projects now have statically generated case-study pages, using `src/app/projects/[slug]/page.tsx`, `generateStaticParams`, and `notFound()` for unknown slugs. The route resolver derives slugs from the canonical `caseStudy` paths in `src/data/projects.ts`. Project titles, classifications, technology lists, feature lists, flagship state, and external URLs stay in that existing source.

| Project                          | Route                                    | Depth   |
| -------------------------------- | ---------------------------------------- | ------- |
| AI Smart Travel Planner          | `/projects/ai-smart-travel-planner`      | Deep    |
| AutoInsight                      | `/projects/autoinsight`                  | Deep    |
| Job Market Analytics Portal      | `/projects/job-market-analytics`         | Deep    |
| Career Recommendation System     | `/projects/career-recommendation-system` | Compact |
| Commerce Data Insights Dashboard | `/projects/commerce-data-insights`       | Compact |
| Student Score Predictor          | `/projects/student-score-predictor`      | Compact |

- `src/types/case-study.ts` and `src/data/case-studies.ts` hold typed editorial details keyed by project ID: overview, approach, workflow, optional architecture, notes, outcome, reflection, and optional media. Deep studies add responsibility maps and a small section index; compact studies retain the complete purpose, workflow, features, stack, notes, and outcome sequence without filler architecture.
- Travel Planner separates interface, application API, planning orchestration, persistence, and external AI services. Its workflow runs from preferences to itinerary review/save/export. The diagram is explicitly a responsibility map, not an unverified request trace. Database access is represented separately from AI services.
- AutoInsight follows uploaded data through profiling, quality/exploration, ML guidance, and reporting. Recommendations are not described as automatic model training. Job Market Analytics uses the verified employment, role, skill, and market lenses; no unrecorded framework, ingestion service, scraper, or real-time data source is assigned.
- `TechnicalFlow`, `SystemMap`, and `ProjectLinks` are reusable server components. Architecture is semantic HTML with thin CSS rules, endpoint marks, and text explaining connections. Mobile workflows reflow vertically. Existing `ProjectVisual` illustrations are reused and remain explicitly illustrative, not measured outputs.
- No real project screenshots or verified project GitHub/live URLs were found. External actions are omitted even where the project record says a live application exists. `ProjectMedia` supports future verified images with alt text, intrinsic dimensions, captions, and Next.js Image rendering. No fake screenshots or metrics are added.
- Technology names come from project records; general tool roles reuse the Skills data. AutoInsight’s Scikit-learn role is specifically model guidance. No additional technology is inferred for Job Market Analytics.
- Every homepage project exposes View Case Study alongside its existing expandable notes. Header/footer actions return to Selected Work; Previous/Next project links wrap across the six projects. Global navigation uses homepage-qualified anchors and Next.js Link; the active-section observer reconnects when returning to the homepage.
- Metadata uses each project’s title and description for the document title, Open Graph, and Twitter summary. Canonicals and social images remain omitted until a public domain and verified assets exist.
- Case studies are server rendered, with semantic articles/headings, accessible section links, text alternatives to diagrams, safe external links, and visible keyboard focus. No diagram animation or page-transition framework is introduced. Existing reduced-motion scrolling behavior is preserved.
- No dependencies were added. The homepage layout, project descriptions, technologies, and feature records remain intact apart from case-study route integration.

## Future development

Phase 8 remains deferred until explicitly requested. Final production polish, verified project links/screenshots, canonical URLs, sitemap, and social imagery remain future work. No new backend, custom cursor, theme toggle, or heavy visualization dependencies are implemented.
