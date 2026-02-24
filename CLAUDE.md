# Servible Marketing Site — Development Notes

## Project

Next.js marketing site for Servible, an AI-native business management platform for service providers. Full EN/NL i18n via `next-intl`. Tailwind CSS v4, Framer Motion, Lucide icons.

Run dev server: `npm run dev` (http://localhost:3000)

## Architecture

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Translations:** `messages/en.json` and `messages/nl.json` — always update both
- **Pages:** `src/app/[locale]/` — each page is a thin wrapper composing section components
- **Sections:** `src/components/sections/` — reusable page sections
- **Visuals:** `src/components/visuals/` — interactive UI mockups for the features page
- **Modals:** `src/components/modals/` — get-started, schedule-call, demo-video
- **Images:** `public/images/`

## Pages & Status

| Page | Route | Status |
|---|---|---|
| Homepage | `/` | Done — hero, social proof, problem, solution, feature highlights, how-it-works, testimonials, chat carousel, final CTA |
| Features | `/features` | Done — hero, 9 feature detail sections with visual mockups, pain-point comparison, waitlist CTA |
| Pricing | `/pricing` | Done — 2 tiers (Professional/Agency), per-user pricing, annual toggle, 14-day trial, FAQ |
| About | `/about` | Done — hero, mission, values, founder bio |
| Contact | `/contact` | Done — form + contact info |
| FAQ | `/faq` | Done |
| Privacy | `/legal/privacy` | Done |
| Terms | `/legal/terms` | Done |
| GDPR | `/legal/gdpr` | Done — data controller, lawful bases, data subject rights, processing activities, international transfers, DPO contact |

## Features Page — Visual Mockups

Each feature section has a custom interactive mockup component in `src/components/visuals/`:

| Section | Component | Key visual elements |
|---|---|---|
| AI Assistant | `ai-chat-mockup.tsx` | Chat conversation with checkmark results |
| CRM | `crm-card-mockup.tsx` | Client card with stats, tags, activity timeline |
| Booking | `booking-page-mockup.tsx` | Service picker, mini calendar, time slots, intake question |
| Quotes | `quote-mockup.tsx` | Quote document with line items (inc. optional), totals, signature |
| Invoicing | `time-invoice-mockup.tsx` | Time tracker entries + paid invoice card |
| Website Builder | `website-builder-mockup.tsx` | Chat prompt + live website preview with section icons |
| Portal | `portal-mockup.tsx` | Client dashboard with projects, invoices, files |
| Blog | `blog-editor-mockup.tsx` | Editor with AI suggestion, SEO metadata, scheduling |
| File Manager | `file-manager-mockup.tsx` | AI chat for archiving + natural language image search + stock fallback |

The feature sections alternate layout (normal / reversed+muted) and are configured in `src/app/[locale]/features/page.tsx` via `featureSections` array and `visualMap`.

## Comparison Section

Reworked from a plain table to a 6-card pain-point grid. Each card shows a relatable frustration (red tint) with an arrow leading to the Servible solution. Located at the bottom of the features page before the CTA.

## Pricing Model

- **No free tier** — removed the Starter plan
- **Two paid plans:** Professional (€29/user/month) and Agency (€79/user/month)
- **Annual option:** 2 months free (€290/year, €790/year)
- **14-day free trial** on both plans, no credit card required
- **Fair use AI policy** — no hard usage limits
- Component: `src/components/sections/pricing-content.tsx`

## Footer

3-column layout: Product (Features, Pricing, Roadmap), Company (About, Contact, FAQ, Careers), Legal (Privacy, Terms, GDPR). Roadmap links to `/features#overview`. Careers is disabled (coming soon). No placeholder `href="#"` links except the disabled Careers item.

## Key Patterns

- **Mockup translations:** Each mockup stores its UI text under `featuresPage.<sectionKey>.mockup` in the message files
- **Icon system:** `feature-detail.tsx` has an `iconMap` mapping string keys to Lucide components — add new entries there when adding sections
- **Section ordering:** Even-indexed sections get normal layout; odd-indexed get reversed + muted background
- **Stock images:** `public/images/bus-women.jpg` and `public/images/team.jpg` used in the file manager mockup
- **Legal pages:** Follow same pattern — page.tsx with `generateMetadata` + content component with hardcoded EN/NL text (not translation keys)
- **Founder bio:** `aboutPage.founder` uses keys `p1`–`p5` for five paragraphs
- **Docs folder:** `docs/` contains briefing documents (e.g. `pricing.md`) used as input for changes
- **CTA buttons:** All "try free" / "start trial" buttons (header, hero, pricing) open the `GetStartedModal` — not plain links
- **HubSpot forms:** Both contact and waitlist forms send `preferred_language` (visitor's locale) and create a HubSpot task assigned to `HUBSPOT_OWNER_ID` for notifications. Contact form tasks are HIGH priority; waitlist tasks are MEDIUM.

## What Could Be Next

- Blog page (currently placeholder in nav, `/blog` route not built)
- Open Graph images for social sharing
- Analytics integration (Plausible)
- Performance audit / Lighthouse optimization
- 404 page
- Structured data (JSON-LD)
- Mobile testing pass
