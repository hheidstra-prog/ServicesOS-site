"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function SocialProof() {
  const t = useTranslations("socialProof");

  return (
    <section className="border-y border-[var(--border)] bg-[var(--muted)] py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="#waitlist"
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 group"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700">
              {t("badge")}
            </span>
            <span className="text-sm text-[var(--muted-foreground)]">
              {t("text")}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:underline">
              {t("cta")}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
