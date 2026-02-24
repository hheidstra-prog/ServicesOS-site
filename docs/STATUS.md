# Servible Marketing Site — Project Status

**Last updated:** 2026-02-23

---

## Tech Stack

- **Framework:** Next.js 16.1.6 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **i18n:** next-intl with `[locale]` routing (EN/NL)
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Hosting:** Vercel (planned)

---

## Pages

| Page | Route | Status |
|---|---|---|
| Homepage | `/[locale]` | Done |
| Features | `/[locale]/features` | Done |
| Pricing | `/[locale]/pricing` | Done |
| About | `/[locale]/about` | Done |
| Contact | `/[locale]/contact` | Done |
| Privacy Policy | `/[locale]/legal/privacy` | Done |
| Terms of Service | `/[locale]/legal/terms` | Done |

---

## HubSpot Integration

**Portal ID:** 147547452
**Owner ID:** 86890857
**Environment variables:** `.env.local` (HUBSPOT_ACCESS_TOKEN, HUBSPOT_PORTAL_ID, HUBSPOT_OWNER_ID)

### API Routes

| Route | Purpose | Status |
|---|---|---|
| `/api/hubspot/waitlist` | Waitlist signups | Done |
| `/api/hubspot/contact` | Contact form submissions | Done |

### Properties Sent to HubSpot

| Property | Waitlist | Contact Form | Type |
|---|---|---|---|
| `email` | Yes | Yes | Standard |
| `firstname` | Yes | Yes | Standard |
| `company` | Yes | — | Standard |
| `lifecyclestage` | `subscriber` | `lead` | Standard |
| `hs_lead_status` | `NEW` | `NEW` | Standard |
| `waitlist_signup` | `true` | — | Custom (boolean) |
| `contact_form_submission` | — | `true` | Custom (boolean) |
| `product` | `Servible` | `Servible` | Custom (single-line text) |
| `hubspot_owner_id` | Yes | Yes | Standard |

### HubSpot Custom Properties (must exist in portal)

These custom properties must be created manually in HubSpot (Settings > Properties > Contact):

- **`product`** — Single-line text. Identifies which product/channel the contact came from. Values: `Servible`, `Virtalize` (used across sites).
- **`waitlist_signup`** — Boolean. Set to `true` when contact comes from a waitlist form.
- **`contact_form_submission`** — Boolean. Set to `true` when contact comes from a contact form.

### Schedule a Call

- Embedded HubSpot Meetings iframe in a modal
- URL: `https://meetings-eu1.hubspot.com/hylke-heidstra?embed=true`
- Accessible from the contact page

---

## CTAs (Call-to-Action)

### Working CTAs

| CTA | Location | Destination |
|---|---|---|
| "Start free trial" | Hero section | `#waitlist` |
| "See how it works" | Hero section | Demo video modal |
| Waitlist form | Waitlist CTA section | `/api/hubspot/waitlist` |
| Contact form | Contact page | `/api/hubspot/contact` |
| "Join now" | Early bird banner | `#waitlist` |
| "Start free trial" | Header (desktop + mobile) | `#waitlist` |
| "Schedule a call" | Contact page | HubSpot Meetings modal |

### Placeholder CTAs (href="#")

| CTA | Location | Needs |
|---|---|---|
| "Get started free" | Final CTA section | Link destination |
| "Sign in" | Header | Sign-in URL / auth |
| "Start free" | Pricing - Starter tier | Link destination |
| "Start 14-day free trial" | Pricing - Professional tier | Link destination |
| "Start 14-day free trial" | Pricing - Agency tier | Link destination |

---

## Internationalization

- **Languages:** English (en), Dutch (nl)
- **Default locale:** NL (based on browser, NL fallback)
- **Translation files:** `messages/en.json`, `messages/nl.json`
- **Library:** next-intl
- All CTA and form text is properly translated

---

## What's Done

- All 7 pages built and translated (EN/NL)
- HubSpot waitlist integration (working, tested)
- HubSpot contact form integration (working, tested)
- HubSpot Meetings embed for scheduling calls
- `product` custom property set to `Servible` for channel identification
- Early bird dismissible banner
- Responsive design (desktop + mobile)
- Honeypot spam protection on contact form
- Duplicate contact handling (409 → update flow)

## What's Not Done

- [ ] Placeholder CTA links (final CTA, pricing tiers, sign-in) — need real destinations
- [ ] Demo video content (modal exists, no video)
- [ ] Initial git commit — all files are untracked
- [ ] Analytics setup (Plausible or similar)
- [ ] Open Graph images for social sharing
- [ ] Favicon and app icons
- [ ] Performance audit
- [ ] Domain configuration
- [ ] Vercel deployment

---

## Related Projects

| Project | Path | Product Value |
|---|---|---|
| Servible site | `C:\code\launchminds\Servible\Servible-site` | `Servible` |
| Virtalize.ai site | `C:\code\launchminds\agents-platform\agents-site` | `Virtalize` |

Both sites share the same HubSpot portal. Use the `product` property to distinguish contacts by channel.
