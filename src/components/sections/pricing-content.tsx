"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function PricingContent() {
  const t = useTranslations("pricingPage");
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const tiers = [
    {
      key: "starter",
      price: "0",
      features: Array.from({ length: 6 }, (_, i) => t(`starter.f${i + 1}`)),
      popular: false,
    },
    {
      key: "professional",
      price: annual ? t("professional.priceAnnual") : t("professional.priceMonthly"),
      features: Array.from({ length: 8 }, (_, i) =>
        t(`professional.f${i + 1}`)
      ),
      popular: true,
    },
    {
      key: "agency",
      price: annual ? t("agency.priceAnnual") : t("agency.priceMonthly"),
      features: Array.from({ length: 7 }, (_, i) => t(`agency.f${i + 1}`)),
      popular: false,
    },
  ];

  const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

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

            {/* Billing toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex items-center gap-3"
            >
              <span
                className={cn(
                  "text-sm font-medium",
                  !annual
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted-foreground)]"
                )}
              >
                {t("monthly")}
              </span>
              <button
                onClick={() => setAnnual(!annual)}
                className={cn(
                  "relative h-7 w-12 cursor-pointer rounded-full transition-colors",
                  annual ? "bg-accent-500" : "bg-gray-300"
                )}
              >
                <span
                  className={cn(
                    "absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform",
                    annual ? "translate-x-5.5" : "translate-x-0.5"
                  )}
                />
              </button>
              <span
                className={cn(
                  "text-sm font-medium",
                  annual
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted-foreground)]"
                )}
              >
                {t("annual")}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="-mt-8 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className={cn(
                  "relative rounded-2xl border bg-white p-8",
                  tier.popular
                    ? "border-primary-300 shadow-xl shadow-primary-600/10 lg:scale-105"
                    : "border-[var(--border)] shadow-sm"
                )}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-4 py-1 text-xs font-semibold text-white">
                    {t("mostPopular")}
                  </span>
                )}

                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  {t(`${tier.key}.name`)}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                  {t(`${tier.key}.description`)}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[var(--foreground)]">
                    &euro;{tier.price}
                  </span>
                  <span className="text-sm text-[var(--muted-foreground)]">
                    {annual && tier.key !== "starter"
                      ? t("perYear")
                      : t("perMonth")}
                  </span>
                </div>

                {annual && tier.key !== "starter" && (
                  <p className="mt-1 text-xs text-accent-600 font-medium">
                    {t("save")} {t(`${tier.key}.saveAmount`)}
                  </p>
                )}

                <Link
                  href="#"
                  className={cn(
                    "mt-6 block w-full rounded-lg py-3 text-center text-sm font-medium transition-all",
                    tier.popular
                      ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
                      : "border border-[var(--border)] bg-white text-primary-600 hover:bg-primary-50 hover:border-primary-300"
                  )}
                >
                  {t(`${tier.key}.cta`)}
                </Link>

                <div className="mt-8">
                  {tier.key !== "starter" && (
                    <p className="mb-4 text-sm font-medium text-[var(--foreground)]">
                      {t(`${tier.key}.includes`)}
                    </p>
                  )}
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                        <span className="text-sm text-[var(--muted-foreground)]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[var(--muted)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl"
          >
            {t("faq.headline")}
          </motion.h2>

          <div className="mt-12 space-y-4">
            {faqKeys.map((key) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border border-[var(--border)] bg-white"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === key ? null : key)
                  }
                  className="flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-[var(--foreground)]">
                    {t(`faq.${key}.q`)}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-[var(--muted-foreground)] transition-transform",
                      openFaq === key && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all",
                    openFaq === key ? "max-h-40" : "max-h-0"
                  )}
                >
                  <p className="px-6 pb-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {t(`faq.${key}.a`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
