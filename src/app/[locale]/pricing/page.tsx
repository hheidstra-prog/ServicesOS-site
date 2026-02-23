import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { PricingContent } from "@/components/sections/pricing-content";
import { WaitlistCTA } from "@/components/sections/waitlist-cta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pricingPage.meta" });
  return { title: t("title"), description: t("description") };
}

export default function PricingPage() {
  return (
    <>
      <PricingContent />
      <WaitlistCTA />
    </>
  );
}
