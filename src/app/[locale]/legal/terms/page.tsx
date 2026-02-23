import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { TermsContent } from "@/components/sections/terms-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "termsPage.meta" });
  return { title: t("title"), description: t("description") };
}

export default function TermsPage() {
  return <TermsContent />;
}
