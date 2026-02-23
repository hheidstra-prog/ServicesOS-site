import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { ContactContent } from "@/components/sections/contact-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contactPage.meta" });
  return { title: t("title"), description: t("description") };
}

export default function ContactPage() {
  return <ContactContent />;
}
