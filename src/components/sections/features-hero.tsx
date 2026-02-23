"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function FeaturesHero() {
  const t = useTranslations("featuresPage.hero");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-100/40 blur-3xl" />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-100/40 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-20 text-center lg:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
          >
            {t("headline")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg text-[var(--muted-foreground)] sm:text-xl"
          >
            {t("subheadline")}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
