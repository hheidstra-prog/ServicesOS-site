import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { FeaturesHero } from "@/components/sections/features-hero";
import { FeatureDetail } from "@/components/sections/feature-detail";
import { FeatureComparison } from "@/components/sections/feature-comparison";
import { FeatureTable } from "@/components/sections/feature-table";
import { WaitlistCTA } from "@/components/sections/waitlist-cta";
import { AiChatMockup } from "@/components/visuals/ai-chat-mockup";
import { CrmCardMockup } from "@/components/visuals/crm-card-mockup";
import { BookingPageMockup } from "@/components/visuals/booking-page-mockup";
import { QuoteMockup } from "@/components/visuals/quote-mockup";
import { TimeInvoiceMockup } from "@/components/visuals/time-invoice-mockup";
import { WebsiteBuilderMockup } from "@/components/visuals/website-builder-mockup";
import { PortalMockup } from "@/components/visuals/portal-mockup";
import { BlogEditorMockup } from "@/components/visuals/blog-editor-mockup";
import { FileManagerMockup } from "@/components/visuals/file-manager-mockup";

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
  { key: "fileManager", icon: "folderSearch", featureCount: 6, descriptionCount: 2 },
] as const;

const visualMap: Record<string, React.ReactNode> = {
  aiAssistant: <AiChatMockup />,
  crm: <CrmCardMockup />,
  booking: <BookingPageMockup />,
  quotes: <QuoteMockup />,
  invoicing: <TimeInvoiceMockup />,
  websiteBuilder: <WebsiteBuilderMockup />,
  portal: <PortalMockup />,
  blog: <BlogEditorMockup />,
  fileManager: <FileManagerMockup />,
};

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
          visual={visualMap[section.key]}
        />
      ))}
      <FeatureComparison />
      <FeatureTable />
      <WaitlistCTA />
    </>
  );
}
