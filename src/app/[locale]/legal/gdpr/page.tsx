import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { GdprContent } from "@/components/sections/gdpr-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "gdprPage.meta" });
  return { title: t("title"), description: t("description") };
}

export default function GdprPage() {
  return <GdprContent />;
}
