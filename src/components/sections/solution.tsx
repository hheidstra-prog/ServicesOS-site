"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Solution() {
  const t = useTranslations("solution");

  return (
    <section className="section-padding bg-[var(--muted)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100">
              <Sparkles className="h-6 w-6 text-accent-600" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              {t("headline")}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted-foreground)]">
              {t("body")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
