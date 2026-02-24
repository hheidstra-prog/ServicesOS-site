"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

export function TermsContent() {
  const t = useTranslations("termsPage");
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
          {isNl ? <TermsNl /> : <TermsEn />}
        </div>
      </div>
    </section>
  );
}

function TermsEn() {
  return (
    <>
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using Servible, you agree to be bound by these Terms of Service. If you do not agree, you may not use our services.
      </p>

      <h2>2. Account Registration</h2>
      <p>
        You must provide accurate information when creating an account. You are responsible for maintaining the security of your account credentials. You must notify us immediately of any unauthorized use.
      </p>

      <h2>3. Subscription and Billing</h2>
      <p>
        Servible offers free and paid subscription plans. Paid plans are billed monthly or annually as selected. Prices are in euros and exclude applicable taxes. We may change pricing with 30 days notice. Refunds for annual plans are available within 30 days of purchase.
      </p>

      <h2>4. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the service for any unlawful purpose</li>
        <li>Attempt to gain unauthorized access to our systems</li>
        <li>Transmit viruses or malicious code</li>
        <li>Interfere with other users&apos; use of the service</li>
        <li>Use the service to send spam or unsolicited communications</li>
        <li>Reverse engineer or decompile our software</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>
        Servible and its original content, features, and functionality are owned by Servible and are protected by international copyright, trademark, and other intellectual property laws.
      </p>

      <h2>6. Your Data</h2>
      <p>
        You retain ownership of all data you enter into Servible. We do not claim any intellectual property rights over your content. You grant us a license to host and process your data solely to provide the service. You can export your data at any time.
      </p>

      <h2>7. AI Features</h2>
      <p>
        Servible uses artificial intelligence to assist with various tasks. AI-generated content is provided as-is and should be reviewed before use. We are not liable for actions taken based on AI-generated suggestions.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Servible shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue, whether incurred directly or indirectly. Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.
      </p>

      <h2>9. Termination</h2>
      <p>
        You may cancel your account at any time. We may terminate or suspend your account for violation of these terms. Upon termination, your data will be retained for 30 days, after which it will be permanently deleted.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These terms are governed by the laws of the Netherlands. Any disputes shall be submitted to the competent court in Amsterdam, the Netherlands.
      </p>

      <h2>11. Changes to Terms</h2>
      <p>
        We may update these terms from time to time. We will notify you of material changes via email or through the platform. Continued use after changes constitutes acceptance.
      </p>

      <h2>12. Contact</h2>
      <p>
        For questions about these terms, contact us at legal@serviceos.app.
      </p>
    </>
  );
}

function TermsNl() {
  return (
    <>
      <h2>1. Acceptatie van Voorwaarden</h2>
      <p>
        Door toegang tot of gebruik van Servible gaat u akkoord met deze Algemene Voorwaarden. Als u niet akkoord gaat, mag u onze diensten niet gebruiken.
      </p>

      <h2>2. Accountregistratie</h2>
      <p>
        U dient juiste informatie te verstrekken bij het aanmaken van een account. U bent verantwoordelijk voor het beveiligen van uw accountgegevens. U dient ons onmiddellijk op de hoogte te stellen van ongeautoriseerd gebruik.
      </p>

      <h2>3. Abonnement en Facturatie</h2>
      <p>
        Servible biedt gratis en betaalde abonnementsplannen. Betaalde plannen worden maandelijks of jaarlijks gefactureerd zoals geselecteerd. Prijzen zijn in euro&apos;s en exclusief toepasselijke belastingen. Wij kunnen prijzen wijzigen met 30 dagen voorafgaande kennisgeving. Restitutie voor jaarplannen is beschikbaar binnen 30 dagen na aankoop.
      </p>

      <h2>4. Acceptabel Gebruik</h2>
      <p>U gaat ermee akkoord om niet:</p>
      <ul>
        <li>De dienst te gebruiken voor onwettige doeleinden</li>
        <li>Ongeautoriseerde toegang te proberen tot onze systemen</li>
        <li>Virussen of kwaadaardige code te verzenden</li>
        <li>Het gebruik van andere gebruikers te verstoren</li>
        <li>De dienst te gebruiken voor spam of ongewenste communicatie</li>
        <li>Onze software te reverse-engineeren of decompileren</li>
      </ul>

      <h2>5. Intellectueel Eigendom</h2>
      <p>
        Servible en zijn originele content, functies en functionaliteit zijn eigendom van Servible en worden beschermd door internationale auteursrecht-, handelsmerk- en andere intellectuele eigendomswetten.
      </p>

      <h2>6. Uw Gegevens</h2>
      <p>
        U behoudt het eigendom van alle gegevens die u in Servible invoert. Wij claimen geen intellectuele eigendomsrechten op uw content. U verleent ons een licentie om uw gegevens te hosten en te verwerken uitsluitend om de dienst te leveren. U kunt uw gegevens op elk moment exporteren.
      </p>

      <h2>7. AI-functies</h2>
      <p>
        Servible maakt gebruik van kunstmatige intelligentie om te helpen bij verschillende taken. Door AI gegenereerde content wordt geleverd zoals deze is en moet worden gecontroleerd voor gebruik. Wij zijn niet aansprakelijk voor acties ondernomen op basis van door AI gegenereerde suggesties.
      </p>

      <h2>8. Beperking van Aansprakelijkheid</h2>
      <p>
        Voor zover maximaal toegestaan door de wet, is Servible niet aansprakelijk voor indirecte, incidentele, speciale, gevolgschade of punitieve schade, of verlies van winst of omzet, direct of indirect geleden. Onze totale aansprakelijkheid bedraagt niet meer dan het bedrag dat u in de 12 maanden voorafgaand aan de claim heeft betaald.
      </p>

      <h2>9. Beëindiging</h2>
      <p>
        U kunt uw account op elk moment opzeggen. Wij kunnen uw account beëindigen of opschorten bij overtreding van deze voorwaarden. Na beëindiging worden uw gegevens 30 dagen bewaard, waarna ze permanent worden verwijderd.
      </p>

      <h2>10. Toepasselijk Recht</h2>
      <p>
        Deze voorwaarden worden beheerst door het Nederlands recht. Geschillen worden voorgelegd aan de bevoegde rechtbank in Amsterdam, Nederland.
      </p>

      <h2>11. Wijzigingen in Voorwaarden</h2>
      <p>
        Wij kunnen deze voorwaarden van tijd tot tijd bijwerken. Wij stellen u op de hoogte van materiële wijzigingen via e-mail of via het platform. Voortgezet gebruik na wijzigingen geldt als acceptatie.
      </p>

      <h2>12. Contact</h2>
      <p>
        Voor vragen over deze voorwaarden, neem contact met ons op via legal@serviceos.app.
      </p>
    </>
  );
}
