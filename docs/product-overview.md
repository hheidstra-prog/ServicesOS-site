# Servible — Product Overview

## What is Servible?

Servible is an AI-native business management platform for service providers — freelancers, agencies, consultants, and small service businesses. It replaces the stack of disconnected tools (CRM, scheduling, invoicing, project management, website builder) with a single, intelligent platform where AI is woven into every workflow.

Each business gets their own branded workspace with a public-facing website, client portal, booking system, and AI-powered virtual team members — all managed from one dashboard.

**Target audience:** European service businesses (freelancers, agencies, consultants, coaches, creative professionals). Default locale Dutch/EU, with full nl/en/de/fr support.

---

## Core Features

### Virtual Team Members (AI Agents)
Hire AI-powered team members that work alongside your human team. Each agent has their own role, personality, and set of capabilities — and they show up right on your Team page next to your real colleagues.

- **Operations Manager** — your general-purpose assistant with full access to all 22+ tools. Create clients, generate invoices, search data, manage bookings, and more — all through natural conversation.
- **Nova (Finance & Admin)** — a specialist focused on financial operations. Monitors overdue invoices, drafts payment reminder emails with escalating urgency, generates weekly financial summaries, and flags unbilled hours across clients.

Agents run **automated workflows** (jobs) on schedule — payment reminders, financial reports, unbilled hours tracking — with results delivered to your inbox. Set their autonomy level: fully autonomous, notify-only, or require approval before acting.

Key capabilities:
- Chat with agents in natural language, get structured results (tables, cards, checklists)
- Agents draft and send emails directly from chat, in the recipient's language
- Self-learning: agents remember your preferences and instructions over time
- Approval inbox for reviewing AI actions before execution
- Per-agent custom instructions to tailor behavior to your business
- Run any workflow on demand with "Run Now"

### CRM / Client Management
Full client lifecycle from lead to paid. Pipeline status tracking (Lead → Prospect → Client → Archived), multiple contacts per client with roles and primary contact designation, tagging, notes, and a complete activity timeline. Each client detail page shows projects, quotes, invoices, files, and all interactions in one place.

Contact persons flow through the entire system — they appear on invoices, quotes, and bookings. Source tracking shows where each client came from (contact form, booking, API integration).

### Projects & Tasks
Project management tied to clients with status tracking, budget management (monetary + hour budgets with hourly rates), task lists with priorities (Low/Medium/High/Urgent) and due dates, file attachments, and time entry association. Progress bars show task completion at a glance. Tasks display logged time vs estimated hours with over-budget warnings.

### Booking & Scheduling
Configurable booking durations with buffer times between appointments. Per-day availability rules (Mon-Sun) with per-team-member overrides. Public booking page (`/book`) for new leads with a multi-step form (duration → date → time → details), plus a portal-specific flow for existing clients.

Admin features: calendar view with month navigation and day detail sheets, booking assignment to team members, "My bookings" / "All bookings" filter, inline-editable detail pages with status actions (Confirm / Complete / Cancel / No Show). Automatic confirmation and cancellation emails in the client's language.

Creates full audit trail: Client + Contact + Booking + Event + Notification — all from a single booking.

### Time Tracking
Log time manually or use the live timer — a persistent stopwatch bar that follows you across every page. Start, stop, or discard from anywhere. Entries link to clients, projects, services, and tasks with automatic hourly rate derivation. Billable/non-billable split with period summaries (today, week, month). "My time" / "All time" toggle for teams. Convert tracked time directly into invoices, grouped by service with correct per-service rates.

### Quotes
Professional proposals with auto-numbering (QUO-YYYY-NNNN), line items, and optional items clients can select/deselect. Two-step workflow: **Finalize** locks the quote, then **Send** delivers it with a PDF attachment via email. Contact person shown on the quote ("Attn: Name"). AI-generated introductions.

Clients receive quotes on the portal where they can review line items, download the PDF, and accept or reject — with clear status notices after their decision. Full lifecycle: Draft → Finalized → Sent → Viewed → Accepted / Rejected / Expired. Duplicate quotes with one click.

### Invoices & Payments
Professional invoicing with auto-numbering (INV-YYYY-NNNN), line items with full EU tax support (standard 21%, reduced 9%, zero-rated, exempt, reverse charge). Two-step workflow matching quotes: **Finalize** then **Send** with PDF attachment. Contact person on invoices and PDFs.

Create invoices from accepted quotes or directly from tracked time entries (auto-grouped by service). Partial payments, credit notes, and full Stripe integration (iDEAL, card, SEPA, Bancontact, bank transfer, cash). Overdue detection with dashboard alerts.

AI-powered payment reminders via Nova agent — automatically identifies overdue invoices and drafts emails with escalating urgency (friendly → formal → urgent), routed through the approval inbox before sending.

### Services Catalog
Reusable service definitions with flexible pricing (fixed, hourly, daily, monthly, custom), tax rates, and active/inactive toggle. Used as templates when creating quotes and invoices — pick a service and the line item populates automatically.

### Website Builder (AI-Powered)
Describe your business and get a complete, multi-page website generated by AI — pages, blocks, design tokens, copy, color scheme, typography. 14 block types (hero, features, services, testimonials, CTA, contact, FAQ, pricing, stats, process, logos, columns, text, image). Edit any block through natural language chat. Create new blocks by describing what you want — AI picks the right type and generates the content.

AI image search pulls from your media library and Freepik stock, and the AI decides where to place the image in your block. Full design token system with templates (starter, agency, consultant), light/dark modes, custom domains (*.servible.app), header/footer style variants, and Google Analytics integration.

Contact form blocks include honeypot spam protection and automatically create leads in your CRM.

### Blog / CMS (AI-Powered)
Chat-driven blog management — describe the post you want, and AI generates full rich-text content with a TipTap/Novel editor. AI title/excerpt regeneration, SEO metadata generation, inline AI content editing with image upload, and AI image suggestions for featured images.

**Multilingual blog posts** — write in one language, then add translations with a click. AI translates your entire post (including rich text formatting) to any supported language. Each translation gets its own title, slug, excerpt, content, and SEO metadata. The public blog shows a language switcher with proper hreflang tags for international SEO.

Category/tag taxonomy, scheduling, and multi-site publication (one post, multiple sites with different slugs). Public blog with category filters, auto-generated table of contents, related posts, and booking CTA in the sidebar.

### File Management (AI-Powered)
Cloudinary-backed media library with AI analysis on upload — images get AI-generated descriptions and tags via Claude vision; documents (PDF, DOCX, TXT, CSV) get text extraction and summarization. Semantic search expands your query using AI before searching. Chat-driven interface. Freepik stock image integration. Files associate with clients and projects with portal visibility toggle.

### Client Portal
White-labelled, passwordless self-service portal for your clients. Magic link login via email (powered by Resend, i18n). Clients access:

- **Dashboard** with stat cards (projects, invoices, quotes, bookings) and recent activity
- **Projects** with task progress bars and file downloads
- **Invoices** — pending/paid sections, full line items, PDF download
- **Quotes** — review, accept, or reject with clear status notices
- **Files** grouped by project with download links
- **Bookings** — upcoming cards, past table, and a link to book new appointments

Dark/light theme toggle. Locale-aware UI in nl/en/de/fr.

### Team Management
Unified Team page showing human members and AI agents side by side. Invite team members by email with role-based access control:

- **Owner** — full access, billing, org settings
- **Admin** — manage team, all features
- **Member** — standard access to all features
- **Bookkeeper** — financial features (invoices, quotes, time)
- **Viewer** — read-only access

7-day invitation expiry with i18n emails and automatic accept on signup. Per-user features: time entries owned by user (edit/delete restricted to own), booking assignment with per-user availability overrides.

### Public REST API
Authenticated API (SHA-256 hashed API keys) for integrating Servible with external systems:

- **Contacts** — create leads with source tracking and custom event titles
- **Bookings** — create bookings with full availability checking (config, available days, available slots)
- **Blog** — fetch posts and categories with locale filtering and translation data

Source tracking tags every client and booking created via API (e.g., `api:contact_form`, `api:schedule_call`), visible in the admin UI. CORS-enabled for browser-based integrations.

### Emails & PDFs
Transactional emails powered by Resend with org-branded HTML templates, fully internationalized (nl/en/de/fr):

- Invoice emails with PDF attachment
- Quote emails with PDF attachment
- Booking confirmation & cancellation emails
- Portal magic link emails
- Team invitation emails
- AI-drafted emails from agent chat (with Send button)

PDF generation via the @servible/pdf package — professional invoices and quotes with contact person, line items, tax breakdown, and org branding. Downloadable from admin and portal.

### Inbox & Notifications
Internal notification center with real-time alerts: new bookings, contact form submissions, workflow approval requests, financial reports from AI agents. Read/unread filtering with direct links to source entities.

---

## AI Throughout

Servible isn't "a platform with AI bolted on" — AI is the interaction model:

| Area | AI Capability |
|---|---|
| Virtual team members | AI agents that work alongside your team, running workflows and handling routine tasks |
| Automated workflows | Payment reminders, financial summaries, unbilled hours tracking — on schedule or on demand |
| Approval inbox | Review AI-drafted emails and actions before they execute |
| Self-learning agents | Agents remember your preferences and adapt their behavior over time |
| Site generation | Full multi-page website from a business description |
| Block creation | Describe a section, AI picks the type + generates content |
| Block editing | Edit any block via natural language chat |
| Image search | AI agent searches your archive + stock, decides image placement |
| Blog creation | Generate full posts from a prompt |
| Blog translation | AI translates entire posts between languages, preserving rich text formatting |
| Blog editing | AI rewrites text, generates titles/excerpts/SEO metadata |
| File analysis | Vision-based image description, document summarization |
| File search | Semantic query expansion for natural language search |
| Email drafting | Agents draft and send emails in the recipient's language, with full context |
| Onboarding | AI conversation to set up your business profile, services, and website |
| All features | Business context (industry, audience, brand voice) injected into every AI call |
| All features | Locale-aware — AI responds in the organization's language |

---

## Architecture

**Monorepo (Turborepo)** with two Next.js 16 apps:
- **Admin app** — the business owner's dashboard
- **Web app** — public-facing sites, blog, booking, and client portal

**Tech stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, PostgreSQL via Prisma, Clerk auth, Anthropic Claude, Inngest (workflow orchestration), Cloudinary, Stripe, Resend, Freepik, TipTap/Novel.

**Multi-tenancy:** Every record scoped to `organizationId`. Sites get subdomains (`business.servible.app`) or custom domains. Role-based access (Owner, Admin, Member, Bookkeeper, Viewer).

**Deployment:** Vercel with auto-deploy from GitHub. EU-hosted PostgreSQL (Neon, eu-central). Inngest for scheduled workflow execution.

---

## What's Coming

- Google Calendar / Outlook sync for bookings
- Calendar invite emails (.ics attachment)
- Global search (Cmd+K spotlight across all entities)
- Recurring invoices
- Client-to-admin messaging (real-time chat)
- Custom agents (build your own AI team members)
- Per-client portal access control
- Revenue reporting dashboard
- Batch operations (bulk actions on clients, projects, invoices)
- Migration service (import data from competing products)
- Staging environment (preview before production)
