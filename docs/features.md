# Servible — Feature List

## CRM & Client Management

| Feature | Status |
|---|---|
| Client database with company details, address, VAT | Done |
| Pipeline status tracking (Lead → Prospect → Client → Archived) | Done |
| Multiple contacts per client (with roles, primary contact) | Done |
| Contact person on invoices, quotes, and bookings | Done |
| Client tagging system | Done |
| Notes (with pinning) | Done |
| Activity timeline (events: calls, emails, meetings, documents) | Done |
| Client detail page (projects, quotes, invoices, files, activity) | Done |
| Lead capture from contact form & booking form | Done |
| Email deduplication (reuse client by email + org) | Done |
| Source tracking on clients (API, contact form, booking) | Done |
| Per-client portal access control | Roadmap |
| Client import/export (CSV) | Vision |
| Client merge (dedup) | Vision |
| Pipeline board view (kanban) | Vision |

---

## Projects & Tasks

| Feature | Status |
|---|---|
| Project management linked to clients | Done |
| Project status tracking (Not Started → Completed) | Done |
| Budget management (monetary + hour budgets, hourly rate) | Done |
| Task lists with priorities (Low/Medium/High/Urgent) | Done |
| Task due dates and completion tracking | Done |
| Task progress bar | Done |
| File attachments per project | Done |
| Time entry association | Done |
| Portal visibility toggle | Done |
| Task assignments (to team members) | Roadmap |
| Task comments / discussion | Vision |
| Project templates | Vision |
| Gantt / timeline view | Vision |

---

## Booking & Scheduling

| Feature | Status |
|---|---|
| Configurable booking durations (e.g. 15/30/60 min) | Done |
| Public booking page (`/book`) with multi-step form | Done |
| Portal booking flow (authenticated clients) | Done |
| Per-day availability rules (Mon-Sun, start/end times) | Done |
| Per-user availability overrides | Done |
| Buffer times between bookings | Done |
| Slot calculation (availability - existing bookings) | Done |
| Calendar view in admin (month view with day detail) | Done |
| Booking detail page with inline editing | Done |
| Status actions (Confirm / Complete / Cancel / No Show) | Done |
| Booking assignment to team members | Done |
| "My bookings" / "All bookings" filter | Done |
| Contact-aware bookings (name/email from contact person) | Done |
| Location types (Online, At Provider, At Client) | Done |
| Confirmation required toggle | Done |
| Confirmation & cancellation emails (i18n: nl/en/de/fr) | Done |
| Honeypot spam protection | Done |
| Auto-creates Client + Contact + Booking + Event + Notification | Done |
| Locale-aware UI text (nl/en/de/fr) | Done |
| Source tracking on bookings | Done |
| Configurable public/portal booking titles & durations | Done |
| Google Calendar sync | Roadmap |
| MS Outlook sync | Roadmap |
| Calendar invite email (.ics) | Roadmap |
| Booking reminders (email before appointment) | Vision |
| Recurring bookings | Vision |
| Paid bookings (pay on booking) | Vision |

---

## Time Tracking

| Feature | Status |
|---|---|
| Log time entries with description | Done |
| Client + project + service + task association | Done |
| Billable / non-billable split | Done |
| Per-entry hourly rate (auto-derived from service) | Done |
| Live timer (stopwatch with persistent timer bar) | Done |
| Start/stop/discard timer from any page | Done |
| Weekly view with day breakdown | Done |
| Period summaries (today, week, month) | Done |
| Convert time to invoice items (grouped by service) | Done |
| Per-user time entries (edit/delete restricted to own) | Done |
| "My time" / "All time" toggle | Done |
| Task time display (logged vs estimated, over-budget warning) | Done |
| Team time overview | Roadmap |
| Timesheet approval workflow | Vision |

---

## Quotes

| Feature | Status |
|---|---|
| Auto-numbered quotes (QUO-YYYY-NNNN) | Done |
| Line items with quantity, unit price, tax | Done |
| Optional items (client can select/deselect) | Done |
| Finalize → Send workflow (Draft → Finalized → Sent) | Done |
| Send to client with PDF attachment (i18n email) | Done |
| Contact person on quotes ("Attn: Name") | Done |
| Portal visibility toggle | Done |
| Portal: view, accept, or reject quotes | Done |
| Status lifecycle (Draft → Finalized → Sent → Viewed → Accepted/Rejected/Expired) | Done |
| Public access via unique URL (access token) | Done |
| Duplicate quote | Done |
| Validity dates | Done |
| AI introduction generation | Done |
| Convert quote to project | Done |
| Quote templates | Vision |
| E-signature on acceptance | Vision |
| Quote versioning | Vision |

---

## Invoices & Payments

| Feature | Status |
|---|---|
| Auto-numbered invoices (INV-YYYY-NNNN) | Done |
| Line items with EU tax types (standard, reduced, zero, exempt, reverse charge) | Done |
| Finalize → Send workflow (Draft → Finalized → Sent) | Done |
| Send to client with PDF attachment (i18n email) | Done |
| Contact person on invoices ("Attn: Name") | Done |
| PDF generation & download (@servible/pdf) | Done |
| Portal visibility toggle | Done |
| Portal: view invoices with full line items + PDF download | Done |
| Partial payments | Done |
| Credit notes | Done |
| Status lifecycle (Draft → Finalized → Sent → Viewed → Paid/Overdue) | Done |
| Public invoice view via access token | Done |
| Stripe payment integration | Done |
| Payment methods: iDEAL, card, SEPA, Bancontact, bank transfer, cash | Done |
| Overdue detection with dashboard alerts | Done |
| Reminder tracking | Done |
| Record manual payments | Done |
| Create invoice from time entries (grouped by service) | Done |
| Create invoice from accepted quote | Done |
| AI payment reminders (via Nova agent, escalating tone) | Done |
| Recurring invoices | Vision |
| Multi-currency support | Vision |
| Accounting export (CSV/MT940) | Vision |

---

## Services Catalog

| Feature | Status |
|---|---|
| Reusable service definitions | Done |
| Flexible pricing (fixed, hourly, daily, monthly, custom) | Done |
| Tax rate per service | Done |
| Active/inactive toggle | Done |
| Used as templates in quotes & invoices | Done |
| Service packages / bundles | Vision |

---

## Website Builder (AI-Powered)

| Feature | Status |
|---|---|
| AI site generation from business description | Done |
| 14 block types (hero, features, services, testimonials, CTA, contact, FAQ, pricing, stats, process, logos, columns, text, image) | Done |
| Natural language block editing via chat | Done |
| AI-assisted block creation (describe section → auto-generated) | Done |
| Design token system (colors, typography, spacing) | Done |
| Templates (starter, agency, consultant) | Done |
| Light/dark color modes | Done |
| Custom domains + subdomains (*.servible.app) | Done |
| Navigation management | Done |
| Per-page SEO (meta title, description, OG image) | Done |
| Site publish/draft/maintenance status | Done |
| AI image search (archive + Freepik stock) | Done |
| Columns block with per-item styling | Done |
| Contact form block with spam protection | Done |
| Responsive design | Done |
| Google Analytics integration | Done |
| Multi-page support with custom slugs | Done |
| Header/footer style variants | Done |
| Booking widget integration (/book page) | Done |
| Custom CSS overrides | Vision |
| Form builder block | Vision |
| A/B testing | Vision |
| Analytics dashboard (traffic, conversions) | Vision |

---

## Blog / CMS (AI-Powered)

| Feature | Status |
|---|---|
| Chat-driven blog management | Done |
| AI content generation from prompts | Done |
| Rich text editor (TipTap/Novel) | Done |
| AI title/excerpt regeneration | Done |
| AI SEO metadata generation | Done |
| Inline AI content editing with image upload | Done |
| Featured images with AI suggestions | Done |
| Category & tag taxonomy | Done |
| Multi-site publication (one post, multiple sites) | Done |
| Multilingual blog posts (per-locale title, slug, content, SEO) | Done |
| AI translation between languages | Done |
| Locale tab bar in editor (switch languages, add translations) | Done |
| Public blog with category filters & language switcher | Done |
| SEO hreflang tags for multilingual posts | Done |
| Scheduling (publish date) | Done |
| Table of contents (auto-generated from headings) | Done |
| Related posts | Done |
| Booking CTA in blog sidebar | Done |
| REST API for blog posts & categories (with locale filter) | Done |
| Author selection dropdown | Roadmap |
| Blog comments | Vision |
| RSS feed | Vision |
| Newsletter integration | Vision |
| Social media auto-publish | Vision |

---

## File Management (AI-Powered)

| Feature | Status |
|---|---|
| Cloudinary-backed media library | Done |
| AI analysis on upload (image description + tags via Claude vision) | Done |
| Document text extraction & summarization (PDF, DOCX, TXT, CSV) | Done |
| Semantic search (AI query expansion) | Done |
| Chat-driven interface | Done |
| Freepik stock image integration | Done |
| File association (client, project) | Done |
| Portal visibility toggle | Done |
| Folder organization | Done |
| Media picker (Library/Upload/Stock tabs) | Done |
| File versioning | Vision |
| Bulk operations | Vision |

---

## Client Portal

| Feature | Status |
|---|---|
| Passwordless magic link login (email-based, 24h expiry) | Done |
| Magic link supports both client and contact emails | Done |
| Magic link email delivery (Resend, i18n: nl/en/de/fr) | Done |
| Dashboard with stat cards (projects, invoices, quotes, bookings) | Done |
| Projects list with task progress bars | Done |
| Project detail with tasks + files | Done |
| Invoices (pending/paid sections, full line items, PDF download) | Done |
| Quotes (view, accept, reject with status notices) | Done |
| Files grouped by project with download | Done |
| Bookings (upcoming cards + past table, link to /book) | Done |
| Portal booking flow (authenticated clients) | Done |
| Dark/light theme toggle | Done |
| Locale-aware UI (nl/en/de/fr) | Done |
| Portal nav with sign out | Done |
| Per-client portal access control | Roadmap |
| Rate limiting on magic link requests | Roadmap |
| Client self-service profile editing | Vision |
| Document signing in portal | Vision |
| Payment from portal | Vision |

---

## Virtual Team Members (AI Agents)

| Feature | Status |
|---|---|
| AI-powered virtual team members on your Team page | Done |
| Operations Manager agent (default, full tool access) | Done |
| Nova agent (Finance & Admin specialist, filtered tools) | Done |
| Agent chat with database-persisted conversations | Done |
| 22+ shared tools (clients, invoices, quotes, projects, bookings, time, files) | Done |
| Stacked results panel (accumulated per conversation turn) | Done |
| Agent-specific suggested prompt chips | Done |
| Help popover with categorized example prompts | Done |
| Token usage tracking per agent | Done |
| Automated workflows/jobs (scheduled tasks via Inngest) | Done |
| Payment reminder workflows (escalating tone, AI-drafted emails) | Done |
| Weekly financial summary reports | Done |
| Unbilled hours reports with create-invoice checklist | Done |
| Approval inbox (review AI actions before they execute) | Done |
| Rejection feedback (provide guidance when declining) | Done |
| Run workflow on demand ("Run Now") | Done |
| Per-agent custom instructions (self-learning via chat) | Done |
| Hire/fire flow with monthly pricing | Done |
| Agent avatar upload | Done |
| Send AI-drafted emails directly from chat | Done |
| Email language awareness (writes in recipient's language) | Done |
| Smart email drafting (fetches context before composing) | Done |
| Custom agents (build your own) | Vision |
| Visual workflow editor | Vision |
| Lead follow-up sequences | Vision |
| Daily research briefings | Vision |

---

## Team Management

| Feature | Status |
|---|---|
| Team page (human + virtual members unified) | Done |
| Invite team members by email (7-day expiry) | Done |
| Role-based access (Owner, Admin, Member, Bookkeeper, Viewer) | Done |
| Role change for existing members | Done |
| Remove team member | Done |
| Invitation accept flow (auto-accept on signup) | Done |
| Invitation emails (i18n: nl/en/de/fr) | Done |
| User profile sync (name, avatar from auth provider) | Done |
| Per-user time tracking (entries owned by user) | Done |
| Per-user booking assignment + availability | Done |
| Org switching (multi-org support) | Roadmap |
| Per-user notifications | Vision |

---

## Public REST API

| Feature | Status |
|---|---|
| API key management (create, revoke, delete in Settings) | Done |
| SHA-256 hashed key storage (one-time key reveal) | Done |
| CORS headers for cross-origin requests | Done |
| POST /contacts (create leads with source tracking) | Done |
| POST /bookings (create bookings with availability check) | Done |
| GET /bookings/config, /available-days, /available-slots | Done |
| GET /blog/posts (with locale filter) | Done |
| GET /blog/posts/[slug] (with locale + available translations) | Done |
| GET /blog/categories | Done |
| Source tracking (api:value prefix on clients + bookings) | Done |
| Custom event titles for activity timeline | Done |
| API documentation page | Roadmap |
| Webhook events | Vision |
| Additional endpoints (projects, invoices, quotes) | Vision |

---

## Inbox & Notifications

| Feature | Status |
|---|---|
| Internal notification center (org-scoped inbox) | Done |
| New booking notifications | Done |
| Contact form submission notifications | Done |
| Workflow approval request notifications | Done |
| Financial report notifications (from AI agents) | Done |
| Read/unread filtering | Done |
| Link to source entity (booking, agent, workflow) | Done |
| Push notifications (browser/mobile) | Vision |
| Notification preferences / mute | Vision |
| Per-user notification inbox | Vision |

---

## Emails & PDFs

| Feature | Status |
|---|---|
| Invoice email with PDF attachment (i18n: nl/en/de/fr) | Done |
| Quote email with PDF attachment (i18n) | Done |
| Booking confirmation email (i18n) | Done |
| Booking cancellation email (i18n) | Done |
| Portal magic link email (i18n) | Done |
| Team invitation email (i18n) | Done |
| AI-drafted emails from agent chat (Send button) | Done |
| PDF generation package (@servible/pdf) | Done |
| Invoice PDF (admin + portal download) | Done |
| Quote PDF (admin + portal download) | Done |
| Contact person on PDFs | Done |
| Org-branded HTML email templates | Done |
| Custom email templates (editor) | Vision |

---

## Organization & Settings

| Feature | Status |
|---|---|
| Multi-tenant architecture (all data scoped to org) | Done |
| Business profile (industry, audience, brand voice, pain points) | Done |
| Branding (logo, primary color) | Done |
| Legal/tax info (VAT, KvK, IBAN) | Done |
| Role-based access (Owner, Admin, Member, Bookkeeper, Viewer) | Done |
| Default currency, tax rate, payment terms | Done |
| Timezone & locale settings (nl/en/de/fr) | Done |
| Tone of voice setting (formal/professional/friendly/casual) | Done |
| Clerk auth integration (Google/Microsoft SSO) | Done |
| Stripe connected accounts | Done |
| AI-powered onboarding flow | Done |
| API key management | Done |
| Booking settings (durations, buffer, confirmation) | Done |
| Dark mode | Done |
| Mobile responsive | Done |
| Vercel deployment (auto-deploy from GitHub) | Done |
| EU hosting (PostgreSQL in eu-central) | Done |
| Audit log | Roadmap |
| White-label / custom branding | Vision |
| Mobile app (PWA / native) | Vision |

---

## Legend

| Label | Meaning |
|---|---|
| **Done** | Shipped and working |
| **Roadmap** | Planned, partially built or fields exist |
| **Vision** | Future idea, not yet started |
