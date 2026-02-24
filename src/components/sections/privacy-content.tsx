"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

export function PrivacyContent() {
  const t = useTranslations("privacyPage");
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
          {isNl ? <PrivacyNl /> : <PrivacyEn />}
        </div>
      </div>
    </section>
  );
}

function PrivacyEn() {
  return (
    <>
      <h2>1. Introduction</h2>
      <p>
        Servible (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal data when you use our platform and website.
      </p>
      <p>
        Servible is operated from Amsterdam, the Netherlands, and complies with the General Data Protection Regulation (GDPR) and applicable Dutch data protection law.
      </p>

      <h2>2. Data We Collect</h2>
      <p>We collect the following categories of personal data:</p>
      <ul>
        <li><strong>Account data:</strong> Name, email address, organization name, and password hash when you register.</li>
        <li><strong>Business data:</strong> Client information, invoices, projects, time entries, bookings, and other data you enter into the platform.</li>
        <li><strong>Usage data:</strong> Pages visited, features used, browser type, IP address, and device information.</li>
        <li><strong>Payment data:</strong> Processed securely by Stripe. We do not store full credit card numbers.</li>
        <li><strong>Communication data:</strong> Messages sent through our contact form or support channels.</li>
      </ul>

      <h2>3. How We Use Your Data</h2>
      <p>We use your data to:</p>
      <ul>
        <li>Provide and maintain the Servible platform</li>
        <li>Process payments and send invoices</li>
        <li>Send transactional emails (booking confirmations, password resets)</li>
        <li>Improve our product based on usage patterns</li>
        <li>Respond to support requests</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>4. Legal Basis for Processing</h2>
      <p>We process your data based on:</p>
      <ul>
        <li><strong>Contract performance:</strong> To provide the services you signed up for.</li>
        <li><strong>Legitimate interests:</strong> To improve our product and prevent fraud.</li>
        <li><strong>Consent:</strong> For marketing communications (which you can opt out of at any time).</li>
        <li><strong>Legal obligation:</strong> To comply with tax and accounting requirements.</li>
      </ul>

      <h2>5. Data Retention</h2>
      <p>
        We retain your data for as long as your account is active. After account deletion, we retain data for 30 days before permanent deletion. Financial records are retained for 7 years as required by Dutch law.
      </p>

      <h2>6. Your Rights</h2>
      <p>Under GDPR, you have the right to:</p>
      <ul>
        <li>Access your personal data</li>
        <li>Rectify inaccurate data</li>
        <li>Request erasure of your data</li>
        <li>Data portability (export your data)</li>
        <li>Object to processing</li>
        <li>Withdraw consent at any time</li>
      </ul>
      <p>To exercise these rights, contact us at privacy@serviceos.app.</p>

      <h2>7. Cookies</h2>
      <p>
        We use essential cookies to keep you logged in and remember your language preference. We use privacy-friendly analytics that do not track individual users across websites.
      </p>

      <h2>8. Third-Party Services</h2>
      <p>We use the following third-party services that may process your data:</p>
      <ul>
        <li><strong>Stripe:</strong> Payment processing (PCI DSS compliant)</li>
        <li><strong>Cloudinary:</strong> Image and file storage</li>
        <li><strong>Anthropic (Claude):</strong> AI features</li>
        <li><strong>Resend:</strong> Transactional emails</li>
        <li><strong>Vercel:</strong> Website hosting</li>
      </ul>

      <h2>9. Data Security</h2>
      <p>
        We use industry-standard security measures including encryption in transit (TLS) and at rest, secure authentication, and regular security audits. Our servers are located in the European Union.
      </p>

      <h2>10. Contact</h2>
      <p>
        For privacy-related questions or requests, contact us at privacy@serviceos.app or write to: Servible, Amsterdam, Netherlands.
      </p>
    </>
  );
}

function PrivacyNl() {
  return (
    <>
      <h2>1. Inleiding</h2>
      <p>
        Servible (&ldquo;wij&rdquo;, &ldquo;ons&rdquo;, &ldquo;onze&rdquo;) is toegewijd aan het beschermen van uw privacy. Dit Privacybeleid legt uit hoe wij uw persoonsgegevens verzamelen, gebruiken en beschermen wanneer u ons platform en onze website gebruikt.
      </p>
      <p>
        Servible wordt geëxploiteerd vanuit Amsterdam, Nederland, en voldoet aan de Algemene Verordening Gegevensbescherming (AVG/GDPR) en de toepasselijke Nederlandse wetgeving inzake gegevensbescherming.
      </p>

      <h2>2. Gegevens die wij verzamelen</h2>
      <p>Wij verzamelen de volgende categorieën persoonsgegevens:</p>
      <ul>
        <li><strong>Accountgegevens:</strong> Naam, e-mailadres, organisatienaam en wachtwoord-hash bij registratie.</li>
        <li><strong>Bedrijfsgegevens:</strong> Klantinformatie, facturen, projecten, tijdregistraties, boekingen en andere gegevens die u in het platform invoert.</li>
        <li><strong>Gebruiksgegevens:</strong> Bezochte pagina&apos;s, gebruikte functies, browsertype, IP-adres en apparaatinformatie.</li>
        <li><strong>Betalingsgegevens:</strong> Veilig verwerkt door Stripe. Wij slaan geen volledige creditcardnummers op.</li>
        <li><strong>Communicatiegegevens:</strong> Berichten verzonden via ons contactformulier of supportkanalen.</li>
      </ul>

      <h2>3. Hoe wij uw gegevens gebruiken</h2>
      <p>Wij gebruiken uw gegevens om:</p>
      <ul>
        <li>Het Servible platform te leveren en te onderhouden</li>
        <li>Betalingen te verwerken en facturen te versturen</li>
        <li>Transactionele e-mails te versturen (boekingsbevestigingen, wachtwoord-resets)</li>
        <li>Ons product te verbeteren op basis van gebruikspatronen</li>
        <li>Supportverzoeken te beantwoorden</li>
        <li>Aan wettelijke verplichtingen te voldoen</li>
      </ul>

      <h2>4. Wettelijke grondslag voor verwerking</h2>
      <p>Wij verwerken uw gegevens op basis van:</p>
      <ul>
        <li><strong>Uitvoering van de overeenkomst:</strong> Om de diensten te leveren waarvoor u zich heeft aangemeld.</li>
        <li><strong>Gerechtvaardigd belang:</strong> Om ons product te verbeteren en fraude te voorkomen.</li>
        <li><strong>Toestemming:</strong> Voor marketingcommunicatie (u kunt zich op elk moment afmelden).</li>
        <li><strong>Wettelijke verplichting:</strong> Om te voldoen aan belasting- en boekhoudvereisten.</li>
      </ul>

      <h2>5. Bewaartermijn</h2>
      <p>
        Wij bewaren uw gegevens zolang uw account actief is. Na accountverwijdering bewaren wij gegevens 30 dagen voordat ze permanent worden verwijderd. Financiële gegevens worden 7 jaar bewaard zoals vereist door Nederlandse wetgeving.
      </p>

      <h2>6. Uw rechten</h2>
      <p>Onder de AVG/GDPR heeft u het recht op:</p>
      <ul>
        <li>Inzage in uw persoonsgegevens</li>
        <li>Rectificatie van onjuiste gegevens</li>
        <li>Verwijdering van uw gegevens</li>
        <li>Gegevensoverdraagbaarheid (export van uw gegevens)</li>
        <li>Bezwaar tegen verwerking</li>
        <li>Intrekking van toestemming op elk moment</li>
      </ul>
      <p>Om deze rechten uit te oefenen, neem contact met ons op via privacy@serviceos.app.</p>

      <h2>7. Cookies</h2>
      <p>
        Wij gebruiken essentiële cookies om u ingelogd te houden en uw taalvoorkeur te onthouden. Wij gebruiken privacyvriendelijke analytics die individuele gebruikers niet volgen over websites.
      </p>

      <h2>8. Diensten van derden</h2>
      <p>Wij maken gebruik van de volgende diensten van derden die uw gegevens kunnen verwerken:</p>
      <ul>
        <li><strong>Stripe:</strong> Betalingsverwerking (PCI DSS compliant)</li>
        <li><strong>Cloudinary:</strong> Afbeelding- en bestandsopslag</li>
        <li><strong>Anthropic (Claude):</strong> AI-functies</li>
        <li><strong>Resend:</strong> Transactionele e-mails</li>
        <li><strong>Vercel:</strong> Website hosting</li>
      </ul>

      <h2>9. Gegevensbeveiliging</h2>
      <p>
        Wij gebruiken beveiligingsmaatregelen volgens industriestandaard, waaronder encryptie tijdens transport (TLS) en in rust, veilige authenticatie en regelmatige beveiligingsaudits. Onze servers bevinden zich in de Europese Unie.
      </p>

      <h2>10. Contact</h2>
      <p>
        Voor privacygerelateerde vragen of verzoeken, neem contact met ons op via privacy@serviceos.app of schrijf naar: Servible, Amsterdam, Nederland.
      </p>
    </>
  );
}
