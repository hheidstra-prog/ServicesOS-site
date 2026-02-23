"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const rowKeys = ["r1", "r2", "r3", "r4", "r5"] as const;

export function FeatureComparison() {
  const t = useTranslations("featuresPage.comparison");

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 overflow-x-auto"
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="pb-4 text-left text-sm font-semibold text-[var(--foreground)]">
                  {t("task")}
                </th>
                <th className="pb-4 text-left text-sm font-semibold text-[var(--muted-foreground)]">
                  <div className="flex items-center gap-2">
                    <X className="h-4 w-4 text-red-400" />
                    {t("without")}
                  </div>
                </th>
                <th className="pb-4 text-left text-sm font-semibold text-primary-600">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent-500" />
                    {t("with")}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rowKeys.map((key) => (
                <tr
                  key={key}
                  className="border-b border-[var(--border)]"
                >
                  <td className="py-4 pr-4 text-sm font-medium text-[var(--foreground)]">
                    {t(`${key}.task`)}
                  </td>
                  <td className="py-4 pr-4 text-sm text-[var(--muted-foreground)]">
                    {t(`${key}.without`)}
                  </td>
                  <td className="py-4 text-sm font-medium text-primary-600">
                    {t(`${key}.with`)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
