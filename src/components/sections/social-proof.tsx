"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function SocialProof() {
  const t = useTranslations("socialProof");

  return (
    <section className="border-y border-[var(--border)] bg-[var(--muted)] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          <p className="text-sm font-medium text-[var(--muted-foreground)]">
            {t("text")}
          </p>
          {/* Placeholder logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-8 w-24 rounded-md bg-[var(--muted-foreground)]/20"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
