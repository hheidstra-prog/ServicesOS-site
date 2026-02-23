"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export function Problem() {
  const t = useTranslations("problem");

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
              <AlertTriangle className="h-6 w-6 text-amber-600" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              {t("headline")}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted-foreground)]">
              {t("body")}
            </p>
            <p className="mt-4 text-lg font-semibold text-[var(--foreground)]">
              {t("cta")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
