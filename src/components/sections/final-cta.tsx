"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GetStartedButton } from "@/components/modals/get-started-modal";

export function FinalCTA() {
  const t = useTranslations("cta");

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("headline")}
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            {t("subheadline")}
          </p>
          <GetStartedButton
            className="mt-8 cursor-pointer inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-8 text-base font-medium text-primary-600 shadow-lg transition-all hover:bg-primary-50 hover:-translate-y-0.5"
          >
            {t("button")}
            <ArrowRight className="h-4 w-4" />
          </GetStartedButton>
        </motion.div>
      </div>
    </section>
  );
}
