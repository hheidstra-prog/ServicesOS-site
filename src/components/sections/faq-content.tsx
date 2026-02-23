"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const categories = [
  { key: "general", count: 4 },
  { key: "ai", count: 3 },
  { key: "features", count: 4 },
  { key: "security", count: 3 },
  { key: "gettingStarted", count: 3 },
] as const;

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="border-b border-[var(--border)]"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between py-5 text-left"
      >
        <span className="pr-4 text-sm font-medium text-[var(--foreground)] sm:text-base">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[var(--muted-foreground)] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ${
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
            {answer}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function FaqContent() {
  const t = useTranslations("faqPage");
  const [activeCategory, setActiveCategory] = useState<string>("general");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-100/40 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center py-20 text-center lg:py-28">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
            >
              {t("hero.headline")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 max-w-2xl text-lg text-[var(--muted-foreground)]"
            >
              {t("hero.subheadline")}
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Category tabs */}
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map(({ key }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === key
                    ? "bg-primary-600 text-white"
                    : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-primary-50 hover:text-primary-600"
                }`}
              >
                {t(`categories.${key}`)}
              </button>
            ))}
          </div>

          {/* Questions */}
          <div>
            {categories
              .filter(({ key }) => key === activeCategory)
              .map(({ key, count }) =>
                Array.from({ length: count }, (_, i) => (
                  <FaqItem
                    key={`${key}-q${i + 1}`}
                    question={t(`${key}.q${i + 1}.q`)}
                    answer={t(`${key}.q${i + 1}.a`)}
                    index={i}
                  />
                ))
              )}
          </div>
        </div>
      </section>
    </>
  );
}
