"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";

export function GdprContent() {
  const t = useTranslations("gdprPage");
  const locale = useLocale();
  const isNl = locale === "nl";

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)]">
            {t("title")}
          </h1>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            {t("lastUpdated")}
          </p>
        </motion.div>

        <div className="prose prose-zinc mt-12 max-w-none [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-[var(--foreground)] [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-[var(--muted-foreground)] [&_p]:mb-4 [&_ul]:text-sm [&_ul]:text-[var(--muted-foreground)] [&_ul]:space-y-1 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:leading-relaxed">
          {isNl ? <GdprNl locale={locale} /> : <GdprEn locale={locale} />}
        </div>
      </div>
    </section>
  );
}

function GdprEn({ locale }: { locale: string }) {
  return (
    <>
      <h2>1. Data Controller</h2>
      <p>
        Servible, operated by LaunchMinds, based in Amsterdam, the Netherlands, is the data controller for personal data processed through the Servible platform and website.
      </p>
      <p>
        Contact: privacy@serviceos.app
      </p>

      <h2>2. Lawful Bases for Processing</h2>
      <p>We process personal data under the following lawful bases as defined by Article 6 of the GDPR:</p>
      <ul>
        <li><strong>Performance of a contract (Art. 6(1)(b)):</strong> Processing necessary to provide the Servible platform and services you signed up for — including account management, project tracking, invoicing, and booking.</li>
        <li><strong>Legitimate interests (Art. 6(1)(f)):</strong> Product improvement, fraud prevention, platform security, and analytics. We balance these interests against your rights and freedoms.</li>
        <li><strong>Consent (Art. 6(1)(a)):</strong> Marketing communications, optional cookies, and AI-assisted features that process personal data beyond core service delivery. You may withdraw consent at any time.</li>
        <li><strong>Legal obligation (Art. 6(1)(c)):</strong> Tax and accounting record-keeping as required by Dutch and EU law.</li>
      </ul>

      <h2>3. Data Subject Rights</h2>
      <p>Under the GDPR, you have the following rights regarding your personal data:</p>
      <ul>
        <li><strong>Right of access (Art. 15):</strong> Request a copy of the personal data we hold about you.</li>
        <li><strong>Right to rectification (Art. 16):</strong> Request correction of inaccurate or incomplete data.</li>
        <li><strong>Right to erasure (Art. 17):</strong> Request deletion of your personal data, subject to legal retention obligations.</li>
        <li><strong>Right to restriction (Art. 18):</strong> Request that we limit how we process your data in certain circumstances.</li>
        <li><strong>Right to data portability (Art. 20):</strong> Receive your data in a structured, machine-readable format and transfer it to another controller.</li>
        <li><strong>Right to object (Art. 21):</strong> Object to processing based on legitimate interests, including profiling.</li>
        <li><strong>Right to withdraw consent (Art. 7):</strong> Withdraw consent at any time, without affecting the lawfulness of prior processing.</li>
      </ul>
      <p>To exercise any of these rights, contact us at privacy@serviceos.app. We will respond within 30 days.</p>

      <h2>4. Processing Activities</h2>
      <p>We process personal data for the following purposes:</p>
      <ul>
        <li><strong>Account management:</strong> Registration, authentication, organization settings.</li>
        <li><strong>Service delivery:</strong> CRM, project management, bookings, time tracking, invoicing, quotes, contracts, file management, website builder, and client portal.</li>
        <li><strong>AI features:</strong> The AI assistant processes your business data to execute commands and provide insights. Data is sent to our AI provider (Anthropic) for processing but is not used for model training.</li>
        <li><strong>Communication:</strong> Transactional emails (booking confirmations, invoice delivery, magic link login), support correspondence.</li>
        <li><strong>Analytics:</strong> Privacy-friendly analytics to understand platform usage. We do not track individual users across websites.</li>
        <li><strong>Payment processing:</strong> Handled by Stripe (PCI DSS compliant). We do not store full payment card details.</li>
      </ul>

      <h2>5. International Data Transfers</h2>
      <p>
        Our primary infrastructure is hosted within the European Union. Where data is transferred outside the EEA (for example, to AI providers in the United States), we ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) and supplementary security measures.
      </p>
      <p>Our sub-processors and their locations:</p>
      <ul>
        <li><strong>Vercel:</strong> Website hosting (EU region)</li>
        <li><strong>Stripe:</strong> Payment processing (EU/US, PCI DSS compliant)</li>
        <li><strong>Cloudinary:</strong> File and image storage (EU region)</li>
        <li><strong>Anthropic:</strong> AI processing (US, with SCCs)</li>
        <li><strong>Resend:</strong> Transactional email delivery (US, with SCCs)</li>
      </ul>

      <h2>6. Data Protection Officer</h2>
      <p>
        For any questions or concerns about how we handle your personal data, or to exercise your GDPR rights, please contact us:
      </p>
      <ul>
        <li><strong>Email:</strong> privacy@serviceos.app</li>
        <li><strong>Address:</strong> Servible (LaunchMinds), Amsterdam, Netherlands</li>
      </ul>
      <p>
        You also have the right to lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) at <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:underline">autoriteitpersoonsgegevens.nl</a>.
      </p>

      <h2>7. Relationship to Privacy Policy</h2>
      <p>
        This page provides a GDPR-specific overview. For full details on data collection, retention, cookies, and third-party services, please see our{" "}
        <Link href={`/${locale}/legal/privacy`} className="text-accent-600 hover:underline">Privacy Policy</Link>.
      </p>
    </>
  );
}

function GdprNl({ locale }: { locale: string }) {
  return (
    <>
      <h2>1. Verwerkingsverantwoordelijke</h2>
      <p>
        Servible, geëxploiteerd door LaunchMinds, gevestigd in Amsterdam, Nederland, is de verwerkingsverantwoordelijke voor persoonsgegevens die via het Servible-platform en de website worden verwerkt.
      </p>
      <p>
        Contact: privacy@serviceos.app
      </p>

      <h2>2. Grondslagen voor verwerking</h2>
      <p>Wij verwerken persoonsgegevens op de volgende grondslagen zoals gedefinieerd in artikel 6 van de AVG:</p>
      <ul>
        <li><strong>Uitvoering van een overeenkomst (Art. 6(1)(b)):</strong> Verwerking die noodzakelijk is om het Servible-platform en de diensten te leveren waarvoor u zich heeft aangemeld — inclusief accountbeheer, projecttracking, facturatie en boekingen.</li>
        <li><strong>Gerechtvaardigd belang (Art. 6(1)(f)):</strong> Productverbetering, fraudepreventie, platformbeveiliging en analytics. Wij wegen deze belangen af tegen uw rechten en vrijheden.</li>
        <li><strong>Toestemming (Art. 6(1)(a)):</strong> Marketingcommunicatie, optionele cookies en AI-functies die persoonsgegevens verwerken buiten de kerndienstlevering. U kunt uw toestemming op elk moment intrekken.</li>
        <li><strong>Wettelijke verplichting (Art. 6(1)(c)):</strong> Belasting- en boekhoudkundige bewaarplicht volgens Nederlands en Europees recht.</li>
      </ul>

      <h2>3. Rechten van betrokkenen</h2>
      <p>Op grond van de AVG heeft u de volgende rechten met betrekking tot uw persoonsgegevens:</p>
      <ul>
        <li><strong>Recht op inzage (Art. 15):</strong> Een kopie opvragen van de persoonsgegevens die wij over u bewaren.</li>
        <li><strong>Recht op rectificatie (Art. 16):</strong> Correctie vragen van onjuiste of onvolledige gegevens.</li>
        <li><strong>Recht op verwijdering (Art. 17):</strong> Verwijdering vragen van uw persoonsgegevens, met inachtneming van wettelijke bewaartermijnen.</li>
        <li><strong>Recht op beperking (Art. 18):</strong> Vragen dat wij de verwerking van uw gegevens in bepaalde omstandigheden beperken.</li>
        <li><strong>Recht op gegevensoverdraagbaarheid (Art. 20):</strong> Uw gegevens ontvangen in een gestructureerd, machineleesbaar formaat en overdragen aan een andere verwerkingsverantwoordelijke.</li>
        <li><strong>Recht van bezwaar (Art. 21):</strong> Bezwaar maken tegen verwerking op basis van gerechtvaardigd belang, inclusief profilering.</li>
        <li><strong>Recht om toestemming in te trekken (Art. 7):</strong> Toestemming op elk moment intrekken, zonder dat dit afbreuk doet aan de rechtmatigheid van eerdere verwerking.</li>
      </ul>
      <p>Om een van deze rechten uit te oefenen, neem contact met ons op via privacy@serviceos.app. Wij reageren binnen 30 dagen.</p>

      <h2>4. Verwerkingsactiviteiten</h2>
      <p>Wij verwerken persoonsgegevens voor de volgende doeleinden:</p>
      <ul>
        <li><strong>Accountbeheer:</strong> Registratie, authenticatie, organisatie-instellingen.</li>
        <li><strong>Dienstverlening:</strong> CRM, projectbeheer, boekingen, tijdregistratie, facturatie, offertes, contracten, bestandsbeheer, websitebouwer en klantportaal.</li>
        <li><strong>AI-functies:</strong> De AI-assistent verwerkt uw bedrijfsgegevens om opdrachten uit te voeren en inzichten te bieden. Gegevens worden naar onze AI-provider (Anthropic) gestuurd voor verwerking, maar worden niet gebruikt voor modeltraining.</li>
        <li><strong>Communicatie:</strong> Transactionele e-mails (boekingsbevestigingen, factuurlevering, magic link login), supportcorrespondentie.</li>
        <li><strong>Analytics:</strong> Privacyvriendelijke analytics om platformgebruik te begrijpen. Wij volgen individuele gebruikers niet over websites heen.</li>
        <li><strong>Betalingsverwerking:</strong> Uitgevoerd door Stripe (PCI DSS compliant). Wij slaan geen volledige betaalkaartgegevens op.</li>
      </ul>

      <h2>5. Internationale gegevensoverdracht</h2>
      <p>
        Onze primaire infrastructuur wordt gehost binnen de Europese Unie. Wanneer gegevens buiten de EER worden overgedragen (bijvoorbeeld naar AI-providers in de Verenigde Staten), zorgen wij voor passende waarborgen, waaronder Standaard Contractbepalingen (SCCs) en aanvullende beveiligingsmaatregelen.
      </p>
      <p>Onze sub-verwerkers en hun locaties:</p>
      <ul>
        <li><strong>Vercel:</strong> Website hosting (EU-regio)</li>
        <li><strong>Stripe:</strong> Betalingsverwerking (EU/VS, PCI DSS compliant)</li>
        <li><strong>Cloudinary:</strong> Bestands- en afbeeldingsopslag (EU-regio)</li>
        <li><strong>Anthropic:</strong> AI-verwerking (VS, met SCCs)</li>
        <li><strong>Resend:</strong> Transactionele e-mailbezorging (VS, met SCCs)</li>
      </ul>

      <h2>6. Functionaris voor gegevensbescherming</h2>
      <p>
        Voor vragen of zorgen over hoe wij uw persoonsgegevens verwerken, of om uw AVG-rechten uit te oefenen, neem contact met ons op:
      </p>
      <ul>
        <li><strong>E-mail:</strong> privacy@serviceos.app</li>
        <li><strong>Adres:</strong> Servible (LaunchMinds), Amsterdam, Nederland</li>
      </ul>
      <p>
        U heeft ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens op <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:underline">autoriteitpersoonsgegevens.nl</a>.
      </p>

      <h2>7. Relatie tot het privacybeleid</h2>
      <p>
        Deze pagina biedt een AVG-specifiek overzicht. Voor volledige details over gegevensverzameling, bewaartermijnen, cookies en diensten van derden, zie ons{" "}
        <Link href={`/${locale}/legal/privacy`} className="text-accent-600 hover:underline">Privacybeleid</Link>.
      </p>
    </>
  );
}
