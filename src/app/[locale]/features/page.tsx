import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { FeaturesHero } from "@/components/sections/features-hero";
import { FeatureDetail } from "@/components/sections/feature-detail";
import { FeatureComparison } from "@/components/sections/feature-comparison";
import { WaitlistCTA } from "@/components/sections/waitlist-cta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "featuresPage.meta" });
  return { title: t("title"), description: t("description") };
}

const featureSections = [
  { key: "aiAssistant", icon: "bot", featureCount: 5, descriptionCount: 3 },
  { key: "crm", icon: "users", featureCount: 5, descriptionCount: 2 },
  { key: "booking", icon: "calendar", featureCount: 6, descriptionCount: 2 },
  { key: "quotes", icon: "fileText", featureCount: 6, descriptionCount: 2 },
  { key: "invoicing", icon: "clock", featureCount: 8, descriptionCount: 2 },
  { key: "websiteBuilder", icon: "globe", featureCount: 7, descriptionCount: 2 },
  { key: "portal", icon: "userCircle", featureCount: 7, descriptionCount: 2 },
  { key: "blog", icon: "penTool", featureCount: 7, descriptionCount: 2 },
] as const;

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      {featureSections.map((section, index) => (
        <FeatureDetail
          key={section.key}
          sectionKey={section.key}
          icon={section.icon}
          featureCount={section.featureCount}
          descriptionCount={section.descriptionCount}
          reversed={index % 2 === 1}
          muted={index % 2 === 1}
        />
      ))}
      <FeatureComparison />
      <WaitlistCTA />
    </>
  );
}
