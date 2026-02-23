"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, Sparkles } from "lucide-react";

const rowKeys = ["r1", "r2", "r3", "r4", "r5", "r6"] as const;

export function FeatureComparison() {
  const t = useTranslations("featuresPage.comparison");

  return (
    <section className="section-padding bg-[var(--muted)]">
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
          <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--muted-foreground)]">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rowKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Pain */}
              <div className="border-b border-[var(--border)] bg-red-50/60 px-5 py-4">
                <div className="mb-2 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-red-400">
                    {t("painLabel")}
                  </span>
                </div>
                <p className="text-[15px] leading-relaxed font-medium text-gray-700">
                  {t(`${key}.pain`)}
                </p>
              </div>

              {/* Arrow divider */}
              <div className="flex justify-center -my-3 relative z-10">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[var(--border)] bg-white shadow-sm">
                  <ArrowRight className="h-3 w-3 text-accent-500 rotate-90" />
                </div>
              </div>

              {/* Solution */}
              <div className="px-5 py-4 pt-5">
                <div className="mb-2 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 shrink-0 text-accent-500" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-600">
                    {t("solveLabel")}
                  </span>
                </div>
                <p className="text-[15px] leading-relaxed text-[var(--muted-foreground)]">
                  {t(`${key}.solve`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
