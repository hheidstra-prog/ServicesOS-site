import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { AboutContent } from "@/components/sections/about-content";
import { WaitlistCTA } from "@/components/sections/waitlist-cta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aboutPage.meta" });
  return { title: t("title"), description: t("description") };
}

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <WaitlistCTA />
    </>
  );
}
