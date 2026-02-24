# Servible Pricing Page Update — Claude Code Briefing

## Opdracht

Update de pricing pagina van Servible met een nieuw, versimpeld pricing model. Verwijder de gratis tier, introduceer alleen betaalde plannen met een 14-daagse gratis proefperiode.

---

## Belangrijke wijzigingen

1. **Verwijder de "Starter" (gratis) tier volledig**
2. **Twee plannen overblijven:** Professional en Agency
3. **Pricing is per gebruiker/maand**
4. **Geen kunstmatige limieten** (geen "5 facturen/maand" etc.)
5. **14-daagse gratis trial** voor beide plannen
6. **Fair use policy voor AI-gebruik** (geen harde limieten)
7. **Jaarlijkse optie met 2 maanden gratis**

---

## Nieuwe pricing structuur

### Professional
- **Prijs:** €29/gebruiker/maand
- **Jaarlijks:** €290/gebruiker/jaar (2 maanden gratis)
- **Doelgroep:** Freelancers en consultants

**Features:**
- Alles onbeperkt: klanten, facturen, boekingen, projecten
- Volledige AI assistent
- Website met custom domein
- Klantportaal
- Offertes & contracten met e-handtekening
- iDEAL, kaart & SEPA betalingen
- Email support

**CTA button:** "Start 14-daagse gratis proefperiode"

---

### Agency
- **Prijs:** €79/gebruiker/maand
- **Jaarlijks:** €790/gebruiker/jaar (2 maanden gratis)
- **Doelgroep:** Teams en agencies

**Features (alles in Professional, plus):**
- Team management & permissies
- Meerdere websites
- Geavanceerde rapportages
- API toegang
- Dedicated onboarding
- Priority support (telefoon & email)

**CTA button:** "Start 14-daagse gratis proefperiode"

---

## Content per taal

### Nederlands (NL)

**Headline:**
```
Simpele pricing. Geen verrassingen.
```

**Subheadline:**
```
Eén prijs per gebruiker. Alles inbegrepen. 14 dagen gratis proberen.
```

**Professional plan naam:** Professional
**Professional beschrijving:** Voor freelancers en consultants
**Professional features:**
- Alles onbeperkt: klanten, facturen, boekingen, projecten
- Volledige AI assistent
- Website met custom domein
- Klantportaal
- Offertes & contracten met e-handtekening
- iDEAL, kaart & SEPA betalingen
- Email support

**Agency plan naam:** Agency
**Agency beschrijving:** Voor teams en agencies
**Agency features (extra t.o.v. Professional):**
- Team management & permissies
- Meerdere websites
- Geavanceerde rapportages
- API toegang
- Dedicated onboarding
- Priority support (telefoon & email)

**FAQ items:**

1. **Vraag:** Wat zit er in de 14-daagse proefperiode?
   **Antwoord:** Alles. Volledige toegang tot alle features, geen creditcard nodig. Na 14 dagen kies je of je doorgaat.

2. **Vraag:** Hoe zit het met AI-gebruik?
   **Antwoord:** Normaal gebruik zit in de prijs. We hanteren een fair use policy — bij extreem gebruik nemen we contact op om een passende oplossing te vinden.

3. **Vraag:** Kan ik later upgraden of downgraden?
   **Antwoord:** Ja, wanneer je wilt. Wijzigingen gaan in op je volgende factuurcyclus.

4. **Vraag:** Welke betaalmethodes accepteren jullie?
   **Antwoord:** iDEAL, creditcard, SEPA automatische incasso en Bancontact.

5. **Vraag:** Is er een contract?
   **Antwoord:** Nee. Maandelijks opzegbaar. Jaarplannen hebben 30 dagen geld-terug-garantie.

6. **Vraag:** Is mijn data veilig?
   **Antwoord:** Ja. EU-servers, GDPR compliant, industrie-standaard encryptie.

---

### Engels (EN)

**Headline:**
```
Simple pricing. No surprises.
```

**Subheadline:**
```
One price per user. Everything included. 14 days free trial.
```

**Professional plan naam:** Professional
**Professional beschrijving:** For freelancers and consultants
**Professional features:**
- Everything unlimited: clients, invoices, bookings, projects
- Full AI assistant
- Website with custom domain
- Client portal
- Quotes & contracts with e-signature
- iDEAL, card & SEPA payments
- Email support

**Agency plan naam:** Agency
**Agency beschrijving:** For teams and agencies
**Agency features (extra t.o.v. Professional):**
- Team management & permissions
- Multiple websites
- Advanced reporting
- API access
- Dedicated onboarding
- Priority support (phone & email)

**FAQ items:**

1. **Question:** What's included in the 14-day trial?
   **Answer:** Everything. Full access to all features, no credit card required. After 14 days you decide if you want to continue.

2. **Question:** What about AI usage?
   **Answer:** Normal usage is included. We have a fair use policy — if usage is extreme, we'll reach out to find a suitable solution.

3. **Question:** Can I upgrade or downgrade later?
   **Answer:** Yes, anytime. Changes take effect on your next billing cycle.

4. **Question:** What payment methods do you accept?
   **Answer:** iDEAL, credit card, SEPA direct debit, and Bancontact.

5. **Question:** Is there a contract?
   **Answer:** No. Cancel monthly anytime. Yearly plans have a 30-day money-back guarantee.

6. **Question:** Is my data secure?
   **Answer:** Yes. EU servers, GDPR compliant, industry-standard encryption.

---

## UI/UX aanwijzingen

1. **Toggle maandelijks/jaarlijks** - behouden, toon besparing bij jaarlijks
2. **"Populairst" badge** - op Professional plan zetten
3. **Geen gratis tier meer** - verwijder volledig
4. **CTA buttons** - beide naar trial signup flow
5. **Prijs format:** "€29/gebruiker/maand" (NL) / "€29/user/month" (EN)
6. **Jaarlijkse prijs tonen als:** "€290/jaar (2 maanden gratis)" of vergelijkbaar

---

## Te verwijderen

- Volledige "Starter" plan sectie
- Alle referenties naar "gratis" plan
- Limieten zoals "5 klanten", "5 facturen/maand", "1 boekingstype"
- "Start gratis" buttons (vervangen door "Start 14-daagse gratis proefperiode")

---

## Te updaten elders op de site

Zoek en vervang op alle pagina's:
- "Start gratis" → "Start gratis proefperiode" of "Probeer 14 dagen gratis"
- Referenties naar het gratis Starter plan verwijderen
- Homepage pricing hint indien aanwezig updaten

---

## Bestandslocaties (verwacht)

- Pricing pagina: `/app/[locale]/pricing/page.tsx` of vergelijkbaar
- Translations: `/messages/nl.json` en `/messages/en.json`
- Mogelijk aparte pricing component: `/components/pricing/` of `/components/sections/`
