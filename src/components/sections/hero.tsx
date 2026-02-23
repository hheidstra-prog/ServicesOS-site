"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { DemoVideoModal } from "@/components/modals/demo-video-modal";

export function Hero() {
  const t = useTranslations("hero");
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-100/40 blur-3xl" />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-20 text-center lg:py-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#waitlist"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-8 text-base font-medium text-white shadow-lg shadow-primary-600/25 transition-all hover:shadow-xl hover:shadow-primary-600/30 hover:-translate-y-0.5"
            >
              {t("ctaPrimary")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              onClick={() => setDemoOpen(true)}
              className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-white px-8 text-base font-medium text-primary-600 transition-all hover:bg-primary-50 hover:border-primary-300"
            >
              <Play className="h-4 w-4" />
              {t("ctaSecondary")}
            </button>
          </motion.div>

          {/* Hero visual placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 w-full max-w-5xl"
          >
            <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--border)] bg-gradient-to-br from-primary-100 to-accent-50 shadow-2xl">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-12 w-12 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600" />
                  <p className="text-sm font-medium text-[var(--muted-foreground)]">
                    Dashboard Preview
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <DemoVideoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
