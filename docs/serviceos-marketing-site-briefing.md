# ServiceOS Marketing Website — Claude Code Briefing

## Project Overview

Build a marketing website for ServiceOS, an AI-native business management platform for service providers. The site should communicate the product's value proposition clearly, convert visitors into signups, and establish ServiceOS as the modern alternative to cobbled-together tool stacks.

**Target audience:** European service businesses — freelancers, agencies, consultants, coaches, creative professionals. Primary markets: Netherlands, Belgium, Germany, UK.

**Languages:** Dutch (primary) and English. Full content provided for both. User should be able to switch languages. Default based on browser locale, with NL as fallback.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Hosting:** Vercel
- **Fonts:** Inter (body), instrument serif or similar (accent headings)
- **Icons:** Lucide React
- **Animations:** Framer Motion (subtle, purposeful)

---

## Design Direction

### Visual Identity

- **Primary color:** Deep blue (#1e3a5f) — trust, professionalism
- **Accent color:** Vibrant teal (#14b8a6) — modern, tech-forward
- **Background:** Clean whites and very light grays (#fafafa)
- **Text:** Near-black (#111827) for body, gray-600 for secondary
- **Gradients:** Subtle blue-to-teal gradients for CTAs and hero sections

### Design Principles

1. **Clean and spacious** — generous whitespace, not cramped
2. **Professional but approachable** — not corporate-stiff, not startup-quirky
3. **Show, don't tell** — use UI mockups, screenshots, illustrations
4. **Mobile-first** — majority of traffic will be mobile
5. **Fast** — optimize images, minimal JavaScript, good Core Web Vitals

### UI Components

- Rounded corners (border-radius: 12-16px for cards, 8px for buttons)
- Subtle shadows for depth (shadow-sm to shadow-md)
- Consistent 8px spacing grid
- Large, readable text (18px base on desktop)
- Clear visual hierarchy with font weights and sizes

---

## Site Structure

```
/
├── / (Homepage)
├── /features (Feature overview)
├── /pricing (Pricing plans)
├── /about (About / Mission)
├── /contact (Contact form)
├── /blog (Future - placeholder)
└── /legal
    ├── /privacy
    └── /terms
```

---

## Page-by-Page Content

### 1. Homepage (/)

#### Hero Section

**EN:**
```
Headline: Run your service business with AI
Subheadline: ServiceOS replaces your CRM, scheduling, invoicing, and website tools with one intelligent platform. Less admin, more client work.

CTA Primary: Start free trial
CTA Secondary: See how it works
```

**NL:**
```
Headline: Run je servicebedrijf met AI
Subheadline: ServiceOS vervangt je CRM, planning, facturatie en website tools door één intelligent platform. Minder admin, meer klantwerk.

CTA Primary: Start gratis proefperiode
CTA Secondary: Bekijk hoe het werkt
```

#### Social Proof Bar

**EN:**
```
Trusted by 500+ service professionals across Europe
```

**NL:**
```
Vertrouwd door 500+ dienstverleners in heel Europa
```

*(Note: Use placeholder logos or "As featured in" style badges initially)*

#### Problem Section

**EN:**
```
Headline: Your tools don't talk to each other

Body: 
You're juggling Calendly for bookings, a spreadsheet for clients, Canva for your website, and three apps for invoicing. Nothing syncs. You copy-paste the same info everywhere. And you're still doing admin at 10pm.

Sound familiar?
```

**NL:**
```
Headline: Je tools praten niet met elkaar

Body:
Je jongleert met Calendly voor boekingen, een spreadsheet voor klanten, Canva voor je website, en drie apps voor facturatie. Niets synchroniseert. Je copy-paste dezelfde info overal. En om 10 uur 's avonds zit je nog steeds aan de admin.

Herkenbaar?
```

#### Solution Section

**EN:**
```
Headline: One platform. Everything connected.

Body:
ServiceOS brings your entire business into one place. Your CRM knows your calendar. Your invoices pull from tracked time. Your website updates when you add a service. And AI handles the busywork so you can focus on clients.
```

**NL:**
```
Headline: Eén platform. Alles verbonden.

Body:
ServiceOS brengt je hele bedrijf samen op één plek. Je CRM kent je agenda. Je facturen komen uit je tijdregistratie. Je website update als je een dienst toevoegt. En AI handelt het routinewerk af zodat jij je op klanten kunt richten.
```

#### Feature Highlights (Grid of 6)

**EN:**

1. **AI Assistant**
   Chat with your business. Create invoices, log time, find clients — just ask.

2. **Client Management**
   Full CRM with pipeline tracking, contacts, notes, and activity timeline.

3. **Booking & Scheduling**
   Public booking page, intake questions, calendar sync, automated reminders.

4. **Quotes & Contracts**
   Professional proposals with e-signatures. Track views and acceptances.

5. **Time & Invoicing**
   Track hours, convert to invoices, accept payments. All connected.

6. **AI Website Builder**
   Describe your business, get a complete website. Edit with chat.

**NL:**

1. **AI Assistent**
   Chat met je bedrijf. Maak facturen, log tijd, zoek klanten — vraag het gewoon.

2. **Klantbeheer**
   Volledige CRM met pipeline tracking, contacten, notities en activiteiten.

3. **Boekingen & Planning**
   Publieke boekingspagina, intake vragen, agenda sync, automatische herinneringen.

4. **Offertes & Contracten**
   Professionele offertes met e-handtekeningen. Volg views en acceptaties.

5. **Tijd & Facturatie**
   Track uren, zet om naar facturen, ontvang betalingen. Alles verbonden.

6. **AI Website Bouwer**
   Beschrijf je bedrijf, krijg een complete website. Bewerk via chat.

#### How It Works Section

**EN:**
```
Headline: Up and running in minutes

Step 1: Tell us about your business
Answer a few questions about your services, clients, and brand.

Step 2: AI builds your workspace  
Get a complete setup — website, services catalog, booking page — generated instantly.

Step 3: Start working
Manage everything from one dashboard. Let AI handle the repetitive stuff.
```

**NL:**
```
Headline: Binnen minuten aan de slag

Stap 1: Vertel over je bedrijf
Beantwoord een paar vragen over je diensten, klanten en merk.

Stap 2: AI bouwt je workspace
Krijg een complete setup — website, dienstencatalogus, boekingspagina — direct gegenereerd.

Stap 3: Ga aan het werk
Beheer alles vanuit één dashboard. Laat AI het repetitieve werk doen.
```

#### Testimonials Section

**EN:**
```
Headline: Loved by service professionals

Testimonial 1:
"I used to spend Sunday evenings on invoices and admin. Now my AI assistant handles most of it while I'm with clients."
— Sarah M., Business Coach

Testimonial 2:
"Finally, a tool that actually understands how freelancers work. Not built for enterprises and dumbed down."
— Thomas K., UX Consultant

Testimonial 3:
"My clients love the portal. They can see their projects, download invoices, book sessions — without emailing me."
— Lieke V., Marketing Consultant
```

**NL:**
```
Headline: Geliefd door dienstverleners

Testimonial 1:
"Ik besteedde zondagavonden aan facturen en admin. Nu handelt mijn AI assistent het meeste af terwijl ik bij klanten ben."
— Sarah M., Business Coach

Testimonial 2:
"Eindelijk een tool die begrijpt hoe freelancers werken. Niet gebouwd voor enterprises en dan versimpeld."
— Thomas K., UX Consultant

Testimonial 3:
"Mijn klanten zijn dol op de portal. Ze zien hun projecten, downloaden facturen, boeken sessies — zonder mij te mailen."
— Lieke V., Marketing Consultant
```

#### Final CTA Section

**EN:**
```
Headline: Ready to simplify your business?
Subheadline: Start your free 14-day trial. No credit card required.

CTA: Get started free
```

**NL:**
```
Headline: Klaar om je bedrijf te versimpelen?
Subheadline: Start je gratis proefperiode van 14 dagen. Geen creditcard nodig.

CTA: Start gratis
```

---

### 2. Features Page (/features)

#### Hero

**EN:**
```
Headline: Everything you need to run your service business
Subheadline: From first contact to final invoice — managed by AI, controlled by you.
```

**NL:**
```
Headline: Alles wat je nodig hebt om je servicebedrijf te runnen
Subheadline: Van eerste contact tot laatste factuur — beheerd door AI, gestuurd door jou.
```

#### Feature Sections (detailed)

Each feature gets its own section with:
- Icon
- Headline
- Description (2-3 paragraphs)
- Feature list (bullet points)
- Screenshot/mockup placeholder

**Feature 1: AI Assistant**

**EN:**
```
Headline: Your AI-powered business partner

Description:
The ServiceOS AI assistant isn't a chatbot that answers FAQs. It's a capable assistant that can actually do things in your business.

Ask it to create an invoice for a client, and it does. Ask for a summary of this month's revenue, and you get it. Ask it to find all projects that are overdue, and it searches your data instantly.

It knows your business context — your services, your clients, your brand voice. Every interaction is informed by who you are and how you work.

Features:
• Natural language commands — no menus to navigate
• Creates clients, projects, invoices, time entries
• Searches and summarizes your business data
• Learns your preferences over time
• Available in Dutch, English, German, French
```

**NL:**
```
Headline: Je AI-aangedreven business partner

Description:
De ServiceOS AI assistent is geen chatbot die FAQ's beantwoordt. Het is een capabele assistent die daadwerkelijk dingen kan doen in je bedrijf.

Vraag om een factuur te maken voor een klant, en het gebeurt. Vraag om een samenvatting van de omzet deze maand, en je krijgt het. Vraag om alle projecten te vinden die achter lopen, en het doorzoekt je data direct.

Het kent je bedrijfscontext — je diensten, je klanten, je tone of voice. Elke interactie is geïnformeerd door wie je bent en hoe je werkt.

Features:
• Natural language commando's — geen menu's om door te navigeren
• Maakt klanten, projecten, facturen, tijdregistraties
• Doorzoekt en vat je bedrijfsdata samen
• Leert je voorkeuren over tijd
• Beschikbaar in Nederlands, Engels, Duits, Frans
```

**Feature 2: Client Management (CRM)**

**EN:**
```
Headline: Know your clients inside and out

Description:
Every client gets a complete profile showing their entire history with your business. See projects, invoices, contracts, files, and every interaction — all on one page.

Track clients through your pipeline from lead to loyal customer. Tag and segment your client base. Never lose track of a follow-up again.

Features:
• Full client lifecycle tracking (Lead → Active → Completed)
• Multiple contacts per organization
• Custom tags and segmentation
• Activity timeline with all interactions
• Quick actions from anywhere in the app
```

**NL:**
```
Headline: Ken je klanten door en door

Description:
Elke klant krijgt een compleet profiel met hun hele historie bij jouw bedrijf. Zie projecten, facturen, contracten, bestanden en elke interactie — alles op één pagina.

Volg klanten door je pipeline van lead tot loyale klant. Tag en segmenteer je klantenbestand. Verlies nooit meer een follow-up uit het oog.

Features:
• Volledige klant lifecycle tracking (Lead → Actief → Afgerond)
• Meerdere contacten per organisatie
• Custom tags en segmentatie
• Activiteiten timeline met alle interacties
• Snelle acties vanaf overal in de app
```

**Feature 3: Booking & Scheduling**

**EN:**
```
Headline: Let clients book you — on your terms

Description:
Create booking types for your different services. Set your availability, buffer times, and custom intake questions. Share your booking page and let clients self-schedule.

For existing clients, the portal booking flow gives access to additional booking types like paid sessions or premium consultations. Everything creates a clean audit trail — client, booking, calendar event, notifications.

Features:
• Public booking page with your branding
• Custom intake questions per booking type
• Per-day availability rules
• Buffer time between appointments
• Automatic confirmation and reminder emails
• Calendar sync (Google, Outlook — coming soon)
```

**NL:**
```
Headline: Laat klanten bij je boeken — op jouw voorwaarden

Description:
Maak boekingstypes voor je verschillende diensten. Stel je beschikbaarheid in, buffertijden, en custom intake vragen. Deel je boekingspagina en laat klanten zelf plannen.

Voor bestaande klanten geeft de portal booking flow toegang tot extra boekingstypes zoals betaalde sessies of premium consultaties. Alles creëert een schone audit trail — klant, boeking, agenda event, notificaties.

Features:
• Publieke boekingspagina met jouw branding
• Custom intake vragen per boekingstype
• Per-dag beschikbaarheidsregels
• Buffertijd tussen afspraken
• Automatische bevestigings- en herinneringsmails
• Agenda sync (Google, Outlook — binnenkort)
```

**Feature 4: Quotes & Contracts**

**EN:**
```
Headline: From proposal to signed contract in minutes

Description:
Create professional quotes with line items, optional add-ons, and proper tax handling. Send a link and track when clients view it. When they're ready, they accept online.

Convert accepted quotes to contracts with a click. Clients sign digitally — name, timestamp, and IP recorded. The whole flow from proposal to signature, without email ping-pong.

Features:
• Auto-numbered quotes (QUO-2024-0001)
• Optional line items clients can select/deselect
• View tracking and expiry dates
• One-click conversion to contracts
• Digital signature capture
• Full audit trail
```

**NL:**
```
Headline: Van offerte naar getekend contract in minuten

Description:
Maak professionele offertes met regelitems, optionele add-ons, en correcte BTW-afhandeling. Stuur een link en track wanneer klanten het bekijken. Als ze klaar zijn, accepteren ze online.

Zet geaccepteerde offertes om naar contracten met één klik. Klanten tekenen digitaal — naam, timestamp en IP vastgelegd. De hele flow van voorstel tot handtekening, zonder email ping-pong.

Features:
• Auto-genummerde offertes (QUO-2024-0001)
• Optionele regelitems die klanten kunnen aan/afvinken
• View tracking en vervaldatums
• One-click conversie naar contracten
• Digitale handtekening vastlegging
• Volledige audit trail
```

**Feature 5: Time Tracking & Invoicing**

**EN:**
```
Headline: Track time. Get paid. Stay sane.

Description:
Log time entries as you work — tied to clients and projects, marked billable or not, with your hourly rate applied. See summaries for today, this week, this month.

When it's time to invoice, convert tracked time with one click. Or create invoices manually with line items. Accept payments via iDEAL, card, SEPA, and more through Stripe.

Features:
• One-click time logging
• Billable/non-billable split
• Per-entry hourly rates
• Period summaries and reports
• Auto-numbered invoices (INV-2024-0001)
• EU tax types (standard, reduced, reverse charge)
• Multiple payment methods via Stripe
• Overdue detection and reminders
```

**NL:**
```
Headline: Track tijd. Word betaald. Blijf gezond.

Description:
Log tijdregistraties terwijl je werkt — gekoppeld aan klanten en projecten, gemarkeerd als factureerbaar of niet, met je uurtarief toegepast. Zie samenvattingen voor vandaag, deze week, deze maand.

Als het tijd is om te factureren, zet je gelogde tijd om met één klik. Of maak handmatig facturen met regelitems. Ontvang betalingen via iDEAL, kaart, SEPA en meer via Stripe.

Features:
• One-click tijdregistratie
• Factureerbaar/niet-factureerbaar split
• Uurtarief per registratie
• Periode samenvattingen en rapporten
• Auto-genummerde facturen (INV-2024-0001)
• EU belastingtypes (standaard, verlaagd, verlegd)
• Meerdere betaalmethodes via Stripe
• Achterstallige detectie en herinneringen
```

**Feature 6: AI Website Builder**

**EN:**
```
Headline: Describe your business. Get a website.

Description:
Tell ServiceOS about your business — your services, your audience, your style. AI generates a complete, multi-page website with your copy, colors, and structure.

Want to change something? Just chat. "Make the hero section more bold." "Add a testimonials section." "Change the color scheme to warmer tones." No drag-and-drop builders, no templates to customize.

Features:
• Full website generated from a description
• 14 block types (hero, features, pricing, testimonials, FAQ, etc.)
• Edit any section through natural language
• AI-powered image search from your library and stock
• Custom domains supported
• Light and dark mode
• Mobile-responsive out of the box
```

**NL:**
```
Headline: Beschrijf je bedrijf. Krijg een website.

Description:
Vertel ServiceOS over je bedrijf — je diensten, je doelgroep, je stijl. AI genereert een complete, multi-pagina website met jouw teksten, kleuren en structuur.

Wil je iets aanpassen? Chat gewoon. "Maak de hero sectie meer opvallend." "Voeg een testimonials sectie toe." "Verander het kleurenschema naar warmere tonen." Geen drag-and-drop builders, geen templates om aan te passen.

Features:
• Volledige website gegenereerd vanuit een beschrijving
• 14 bloktypes (hero, features, pricing, testimonials, FAQ, etc.)
• Bewerk elke sectie via natural language
• AI-powered afbeelding zoeken uit je bibliotheek en stock
• Custom domeinen ondersteund
• Light en dark mode
• Mobile-responsive out of the box
```

**Feature 7: Client Portal**

**EN:**
```
Headline: Give clients their own space

Description:
Every client gets access to a white-labeled portal where they can see their projects, invoices, files, and bookings. No more "can you resend that invoice?" emails.

Passwordless login via magic link keeps it simple. Clients see what you want them to see — nothing more, nothing less.

Features:
• White-labeled with your branding
• Passwordless magic link login
• Project overview with progress
• Invoice history and payment status
• File downloads by project
• Book appointments directly
• Light/dark theme toggle
```

**NL:**
```
Headline: Geef klanten hun eigen plek

Description:
Elke klant krijgt toegang tot een white-labeled portal waar ze hun projecten, facturen, bestanden en boekingen kunnen zien. Geen "kun je die factuur opnieuw sturen?" emails meer.

Passwordless login via magic link houdt het simpel. Klanten zien wat jij wilt dat ze zien — niet meer, niet minder.

Features:
• White-labeled met jouw branding
• Passwordless magic link login
• Project overzicht met voortgang
• Factuur historie en betaalstatus
• Bestand downloads per project
• Direct afspraken boeken
• Light/dark thema toggle
```

**Feature 8: Blog & Content (AI-Powered)**

**EN:**
```
Headline: Publish content without the content struggle

Description:
Describe the blog post you want, and AI writes it. Full rich-text content with your brand voice applied. Edit inline, regenerate sections, let AI suggest images.

Publish to your ServiceOS website or multiple sites at once. SEO metadata generated automatically.

Features:
• AI-generated blog posts from prompts
• Rich text editor with AI inline editing
• Auto-generated SEO metadata
• Categories and tags
• Scheduling for future publication
• Multi-site publishing
• Related posts and booking CTAs
```

**NL:**
```
Headline: Publiceer content zonder de content struggle

Description:
Beschrijf de blogpost die je wilt, en AI schrijft het. Volledige rich-text content met jouw brand voice toegepast. Bewerk inline, regenereer secties, laat AI afbeeldingen suggereren.

Publiceer naar je ServiceOS website of meerdere sites tegelijk. SEO metadata automatisch gegenereerd.

Features:
• AI-gegenereerde blogposts vanuit prompts
• Rich text editor met AI inline editing
• Auto-gegenereerde SEO metadata
• Categorieën en tags
• Planning voor toekomstige publicatie
• Multi-site publishing
• Gerelateerde posts en booking CTAs
```

#### Feature Comparison Section

**EN:**
```
Headline: Everything in one place vs. your current stack

| Task | Without ServiceOS | With ServiceOS |
|------|-------------------|----------------|
| Book a client | Calendly + manual CRM update | One booking creates everything |
| Send a quote | Google Docs + email + manual tracking | Generate, send, track views automatically |
| Invoice for time | Export timesheet + create invoice + chase payment | One click from tracked time to paid |
| Update website | Call your web person or DIY drag-drop | "Add a new service to the homepage" |
| Find client info | Search 4 different apps | Ask AI or search once |
```

**NL:**
```
Headline: Alles op één plek vs. je huidige stack

| Taak | Zonder ServiceOS | Met ServiceOS |
|------|------------------|---------------|
| Klant boeken | Calendly + handmatige CRM update | Eén boeking maakt alles aan |
| Offerte sturen | Google Docs + email + handmatig tracken | Genereer, verstuur, track views automatisch |
| Factureren voor tijd | Exporteer timesheet + maak factuur + achtervolg betaling | Eén klik van gelogde tijd naar betaald |
| Website updaten | Bel je webpersoon of DIY drag-drop | "Voeg nieuwe dienst toe aan homepage" |
| Klantinfo vinden | Zoek in 4 verschillende apps | Vraag AI of zoek één keer |
```

---

### 3. Pricing Page (/pricing)

#### Hero

**EN:**
```
Headline: Simple pricing for growing businesses
Subheadline: Start free, upgrade when you're ready. No surprise fees.
```

**NL:**
```
Headline: Simpele pricing voor groeiende bedrijven
Subheadline: Start gratis, upgrade wanneer je klaar bent. Geen verrassingskosten.
```

#### Pricing Tiers

**Tier 1: Starter (Free)**

**EN:**
```
Name: Starter
Price: €0/month
Description: For freelancers just getting started

Includes:
• 5 active clients
• Basic CRM
• 1 booking type
• 5 invoices/month
• ServiceOS subdomain website
• Email support

CTA: Start free
```

**NL:**
```
Name: Starter
Price: €0/maand
Description: Voor freelancers die net beginnen

Inclusief:
• 5 actieve klanten
• Basis CRM
• 1 boekingstype
• 5 facturen/maand
• ServiceOS subdomein website
• Email support

CTA: Start gratis
```

**Tier 2: Professional (Most Popular)**

**EN:**
```
Name: Professional
Price: €29/month (or €290/year — save €58)
Description: For established freelancers and small teams

Everything in Starter, plus:
• Unlimited clients
• Full AI assistant access
• Unlimited booking types
• Unlimited invoices
• Quotes & contracts with e-signature
• Client portal
• Custom domain
• Priority support

CTA: Start 14-day free trial
```

**NL:**
```
Name: Professional
Price: €29/maand (of €290/jaar — bespaar €58)
Description: Voor gevestigde freelancers en kleine teams

Alles in Starter, plus:
• Onbeperkt klanten
• Volledige AI assistent toegang
• Onbeperkt boekingstypes
• Onbeperkt facturen
• Offertes & contracten met e-handtekening
• Klantportaal
• Custom domein
• Priority support

CTA: Start 14-daagse proefperiode
```

**Tier 3: Agency**

**EN:**
```
Name: Agency
Price: €79/month (or €790/year — save €158)
Description: For agencies and growing teams

Everything in Professional, plus:
• Up to 5 team members
• Role-based permissions
• Multiple websites
• Advanced reporting
• API access
• Dedicated onboarding
• Phone support

CTA: Start 14-day free trial
```

**NL:**
```
Name: Agency
Price: €79/maand (of €790/jaar — bespaar €158)
Description: Voor agencies en groeiende teams

Alles in Professional, plus:
• Tot 5 teamleden
• Role-based permissions
• Meerdere websites
• Geavanceerde rapportages
• API toegang
• Dedicated onboarding
• Telefonische support

CTA: Start 14-daagse proefperiode
```

#### FAQ Section

**EN:**
```
Q: Can I switch plans later?
A: Yes, upgrade or downgrade anytime. Changes take effect on your next billing cycle.

Q: What payment methods do you accept?
A: We accept all major credit cards, iDEAL, SEPA direct debit, and Bancontact.

Q: Is there a contract or commitment?
A: No contracts. Monthly plans can be cancelled anytime. Annual plans are billed upfront with a 30-day money-back guarantee.

Q: What happens to my data if I cancel?
A: You can export all your data anytime. After cancellation, your data is retained for 30 days, then permanently deleted.

Q: Do you offer discounts for non-profits?
A: Yes, registered non-profits get 30% off any plan. Contact us with proof of status.

Q: Is my data secure?
A: Yes. We use industry-standard encryption, EU-based servers, and are fully GDPR compliant.
```

**NL:**
```
Q: Kan ik later van plan wisselen?
A: Ja, upgrade of downgrade wanneer je wilt. Wijzigingen gaan in op je volgende factuurcyclus.

Q: Welke betaalmethodes accepteren jullie?
A: We accepteren alle gangbare creditcards, iDEAL, SEPA automatische incasso en Bancontact.

Q: Is er een contract of commitment?
A: Geen contracten. Maandelijkse plannen kunnen altijd opgezegd worden. Jaarplannen worden vooraf gefactureerd met 30 dagen geld-terug-garantie.

Q: Wat gebeurt er met mijn data als ik opzeg?
A: Je kunt al je data altijd exporteren. Na opzegging wordt je data 30 dagen bewaard, daarna permanent verwijderd.

Q: Bieden jullie korting voor non-profits?
A: Ja, geregistreerde non-profits krijgen 30% korting op elk plan. Neem contact op met bewijs van status.

Q: Is mijn data veilig?
A: Ja. We gebruiken industrie-standaard encryptie, EU-gebaseerde servers en zijn volledig GDPR compliant.
```

---

### 4. About Page (/about)

#### Hero

**EN:**
```
Headline: Built for people who do the work
Subheadline: We're building the business platform we wished existed when we were freelancing.
```

**NL:**
```
Headline: Gebouwd voor mensen die het werk doen
Subheadline: We bouwen het bedrijfsplatform dat we wensten te hebben toen we freelanceten.
```

#### Mission Section

**EN:**
```
Headline: Why we're building ServiceOS

Body:
Freelancers and small service businesses deserve better tools than spreadsheets and disconnected apps. But enterprise software is too complex, and most "simple" tools are too limited.

We believe AI changes this equation. Not as a gimmick or a chatbot, but as a genuinely useful assistant that handles the work you don't want to do.

ServiceOS is built on a simple idea: your business management software should work for you, not the other way around.
```

**NL:**
```
Headline: Waarom we ServiceOS bouwen

Body:
Freelancers en kleine servicebedrijven verdienen betere tools dan spreadsheets en losse apps. Maar enterprise software is te complex, en de meeste "simpele" tools zijn te beperkt.

We geloven dat AI deze vergelijking verandert. Niet als gimmick of chatbot, maar als een echt nuttige assistent die het werk doet dat jij niet wilt doen.

ServiceOS is gebouwd op een simpel idee: je bedrijfssoftware moet voor jou werken, niet andersom.
```

#### Values Section

**EN:**
```
Headline: What we believe

Value 1: Simplicity over features
More features isn't better. We add things that make your life easier and say no to everything else.

Value 2: AI as assistant, not gimmick
AI should do useful work, not just generate content. Our AI creates invoices, searches data, manages bookings.

Value 3: European by design
Built in Europe, for European businesses. GDPR compliant, EU servers, local payment methods, proper invoicing.

Value 4: Respect your time
You became a freelancer to do work you love, not to do admin. Every feature we build should give you time back.
```

**NL:**
```
Headline: Waar we in geloven

Value 1: Simpelheid boven features
Meer features is niet beter. We voegen dingen toe die je leven makkelijker maken en zeggen nee tegen al het andere.

Value 2: AI als assistent, niet als gimmick
AI moet nuttig werk doen, niet alleen content genereren. Onze AI maakt facturen, doorzoekt data, beheert boekingen.

Value 3: Europees by design
Gebouwd in Europa, voor Europese bedrijven. GDPR compliant, EU servers, lokale betaalmethodes, correcte facturatie.

Value 4: Respecteer je tijd
Je werd freelancer om werk te doen waar je van houdt, niet om admin te doen. Elke feature die we bouwen moet je tijd teruggeven.
```

#### Team Section

**EN:**
```
Headline: The team

[Placeholder for team member cards with photo, name, role, and short bio]

Note: If solo founder, use:
"ServiceOS is built by [Name], a [background] who got tired of juggling 10 different tools to run a simple service business."
```

**NL:**
```
Headline: Het team

[Placeholder voor teamlid kaarten met foto, naam, rol en korte bio]

Note: Als solo founder, gebruik:
"ServiceOS wordt gebouwd door [Naam], een [achtergrond] die het zat was om met 10 verschillende tools te jongleren om een simpel servicebedrijf te runnen."
```

---

### 5. Contact Page (/contact)

#### Hero

**EN:**
```
Headline: Get in touch
Subheadline: Questions, feedback, or just want to say hi? We'd love to hear from you.
```

**NL:**
```
Headline: Neem contact op
Subheadline: Vragen, feedback, of gewoon even hallo zeggen? We horen graag van je.
```

#### Contact Form

**EN:**
```
Fields:
• Name (required)
• Email (required)
• Subject (dropdown: General inquiry, Sales question, Support request, Partnership, Other)
• Message (required, textarea)

Button: Send message

Success message: Thanks for reaching out! We'll get back to you within 24 hours.
```

**NL:**
```
Fields:
• Naam (verplicht)
• E-mail (verplicht)
• Onderwerp (dropdown: Algemene vraag, Sales vraag, Support verzoek, Partnership, Anders)
• Bericht (verplicht, textarea)

Button: Verstuur bericht

Success message: Bedankt voor je bericht! We reageren binnen 24 uur.
```

#### Contact Info Section

**EN:**
```
Email: hello@serviceos.app
Support: support@serviceos.app

Office hours: Monday - Friday, 9:00 - 17:00 CET

Location: Amsterdam, Netherlands
```

**NL:**
```
Email: hello@serviceos.app
Support: support@serviceos.app

Kantooruren: Maandag - Vrijdag, 9:00 - 17:00 CET

Locatie: Amsterdam, Nederland
```

---

### 6. Legal Pages

#### Privacy Policy (/legal/privacy)

**EN:**
```
Headline: Privacy Policy
Last updated: [Date]

[Standard GDPR-compliant privacy policy covering:]
• What data we collect
• How we use it
• Legal basis for processing
• Data retention
• Your rights (access, rectification, erasure, portability)
• Cookies
• Third-party services (Stripe, Cloudinary, Anthropic, etc.)
• Contact for privacy questions

Note: Generate standard EU/GDPR compliant privacy policy text
```

**NL:**
```
Headline: Privacybeleid
Laatst bijgewerkt: [Datum]

[Standaard GDPR-compliant privacybeleid met:]
• Welke data we verzamelen
• Hoe we het gebruiken
• Wettelijke grondslag voor verwerking
• Data retentie
• Je rechten (inzage, rectificatie, verwijdering, overdraagbaarheid)
• Cookies
• Third-party diensten (Stripe, Cloudinary, Anthropic, etc.)
• Contact voor privacy vragen

Note: Genereer standaard EU/GDPR compliant privacybeleid tekst
```

#### Terms of Service (/legal/terms)

**EN:**
```
Headline: Terms of Service
Last updated: [Date]

[Standard SaaS terms covering:]
• Acceptance of terms
• Account registration
• Subscription and billing
• Acceptable use
• Intellectual property
• Data ownership
• Limitation of liability
• Termination
• Governing law (Netherlands)
• Changes to terms

Note: Generate standard SaaS terms of service text
```

**NL:**
```
Headline: Algemene Voorwaarden
Laatst bijgewerkt: [Datum]

[Standaard SaaS voorwaarden met:]
• Acceptatie van voorwaarden
• Account registratie
• Abonnement en facturatie
• Acceptabel gebruik
• Intellectueel eigendom
• Data eigendom
• Beperking van aansprakelijkheid
• Beëindiging
• Toepasselijk recht (Nederland)
• Wijzigingen in voorwaarden

Note: Genereer standaard SaaS algemene voorwaarden tekst
```

---

## Global Components

### Navigation

**EN:**
```
Logo: ServiceOS
Links: Features | Pricing | About | Contact
CTA: Sign in | Start free trial
Language toggle: EN / NL
```

**NL:**
```
Logo: ServiceOS
Links: Features | Pricing | Over ons | Contact  
CTA: Inloggen | Start gratis
Language toggle: EN / NL
```

### Footer

**EN:**
```
Column 1 - Product:
• Features
• Pricing
• Roadmap (link to public roadmap if available)
• Changelog

Column 2 - Company:
• About
• Blog
• Contact
• Careers (coming soon)

Column 3 - Resources:
• Help Center (placeholder)
• API Documentation (placeholder)
• Status Page (placeholder)

Column 4 - Legal:
• Privacy Policy
• Terms of Service
• GDPR

Bottom bar:
© 2024 ServiceOS. All rights reserved.
Made with ♥ in Amsterdam

Social links: LinkedIn, Twitter/X
```

**NL:**
```
Column 1 - Product:
• Features
• Pricing
• Roadmap
• Changelog

Column 2 - Bedrijf:
• Over ons
• Blog
• Contact
• Vacatures (binnenkort)

Column 3 - Resources:
• Help Center (placeholder)
• API Documentatie (placeholder)
• Status Pagina (placeholder)

Column 4 - Juridisch:
• Privacybeleid
• Algemene Voorwaarden
• GDPR

Bottom bar:
© 2024 ServiceOS. Alle rechten voorbehouden.
Gemaakt met ♥ in Amsterdam

Social links: LinkedIn, Twitter/X
```

---

## SEO & Meta

### Homepage

**EN:**
```
Title: ServiceOS — AI-Powered Business Management for Service Providers
Description: Replace your CRM, scheduling, invoicing, and website tools with one intelligent platform. Built for freelancers, agencies, and consultants.
```

**NL:**
```
Title: ServiceOS — AI-Powered Bedrijfsbeheer voor Dienstverleners
Description: Vervang je CRM, planning, facturatie en website tools door één intelligent platform. Gebouwd voor freelancers, agencies en consultants.
```

### Features

**EN:**
```
Title: Features — ServiceOS
Description: AI assistant, CRM, booking, invoicing, website builder, and client portal. Everything you need to run your service business.
```

**NL:**
```
Title: Features — ServiceOS
Description: AI assistent, CRM, boekingen, facturatie, website bouwer en klantportaal. Alles wat je nodig hebt om je servicebedrijf te runnen.
```

### Pricing

**EN:**
```
Title: Pricing — ServiceOS
Description: Simple, transparent pricing starting free. No hidden fees, no contracts. Start your 14-day free trial today.
```

**NL:**
```
Title: Pricing — ServiceOS
Description: Simpele, transparante pricing vanaf gratis. Geen verborgen kosten, geen contracten. Start vandaag je 14-daagse gratis proefperiode.
```

### About

**EN:**
```
Title: About Us — ServiceOS
Description: We're building the business platform we wished existed when we were freelancing. Learn about our mission and team.
```

**NL:**
```
Title: Over Ons — ServiceOS
Description: We bouwen het bedrijfsplatform dat we wensten te hebben toen we freelanceten. Leer over onze missie en ons team.
```

### Contact

**EN:**
```
Title: Contact — ServiceOS
Description: Get in touch with the ServiceOS team. Questions, feedback, or partnership inquiries welcome.
```

**NL:**
```
Title: Contact — ServiceOS
Description: Neem contact op met het ServiceOS team. Vragen, feedback of partnership aanvragen zijn welkom.
```

---

## Implementation Notes

### Internationalization (i18n)

1. Use Next.js built-in i18n routing with `[locale]` dynamic segment
2. Store translations in `/messages/en.json` and `/messages/nl.json`
3. Use `next-intl` or similar library for translation management
4. Default locale: `nl`
5. Detect browser language on first visit, allow manual override
6. Persist language preference in cookie

### Images & Assets

1. Use placeholder images initially (use Unsplash or generated)
2. Create mockup screenshots of the ServiceOS UI
3. Optimize all images with next/image
4. Use SVG for icons (Lucide React)
5. Consider illustrations for feature sections

### Performance

1. Implement proper loading states
2. Use static generation where possible
3. Lazy load below-fold content
4. Optimize fonts (subset, display swap)
5. Target 90+ Lighthouse score

### Analytics & Tracking

1. Add Plausible or similar privacy-friendly analytics
2. Implement conversion tracking on signup CTAs
3. Track language preferences
4. Add structured data (JSON-LD) for SEO

### Forms

1. Contact form should send to Resend or similar
2. Add honeypot field for spam prevention
3. Implement rate limiting
4. Show loading state on submission

---

## File Structure

```
/app
  /[locale]
    /page.tsx (homepage)
    /features/page.tsx
    /pricing/page.tsx
    /about/page.tsx
    /contact/page.tsx
    /legal
      /privacy/page.tsx
      /terms/page.tsx
    /layout.tsx
  /layout.tsx (root layout)
/components
  /ui (buttons, cards, etc.)
  /sections (hero, features, pricing, etc.)
  /layout (nav, footer)
/messages
  /en.json
  /nl.json
/lib
  /i18n.ts
  /utils.ts
/public
  /images
  /icons
```

---

## Launch Checklist

- [ ] All pages implemented in both languages
- [ ] Navigation works correctly with language switching
- [ ] Contact form functional
- [ ] SEO meta tags on all pages
- [ ] Open Graph images for social sharing
- [ ] Favicon and app icons
- [ ] 404 page
- [ ] Analytics installed
- [ ] Performance audit passed
- [ ] Mobile testing complete
- [ ] Cross-browser testing
- [ ] Legal pages reviewed
- [ ] Domain configured
- [ ] SSL certificate active
