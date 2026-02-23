import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { PrivacyContent } from "@/components/sections/privacy-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacyPage.meta" });
  return { title: t("title"), description: t("description") };
}

export default function PrivacyPage() {
  return <PrivacyContent />;
}
