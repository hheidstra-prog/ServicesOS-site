"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Bot,
  Users,
  Calendar,
  FileText,
  Clock,
  Globe,
} from "lucide-react";

const featureKeys = [
  { key: "aiAssistant", icon: Bot },
  { key: "clientManagement", icon: Users },
  { key: "booking", icon: Calendar },
  { key: "quotes", icon: FileText },
  { key: "invoicing", icon: Clock },
  { key: "website", icon: Globe },
] as const;

export function FeatureHighlights() {
  const t = useTranslations("features");

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            {t("headline")}
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featureKeys.map(({ key, icon: Icon }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-2xl border border-[var(--border)] bg-white p-6 transition-all hover:border-primary-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-100 to-accent-100">
                <Icon className="h-5 w-5 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                {t(`${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                {t(`${key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
