"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { GetStartedButton } from "@/components/modals/get-started-modal";

function formatEuro(value: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function PricingContent() {
  const t = useTranslations("pricingPage");
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  // Calculator state
  const [hourlyRate, setHourlyRate] = useState(85);
  const [adminHours, setAdminHours] = useState(6);
  const [toolCount, setToolCount] = useState(4);

  const savings = useMemo(() => {
    const timeSavings = Math.round(hourlyRate * adminHours * 4.33);
    const toolSavings = toolCount * 30;
    const totalMonth = timeSavings + toolSavings;
    const totalYear = totalMonth * 12;
    return { timeSavings, toolSavings, totalMonth, totalYear };
  }, [hourlyRate, adminHours, toolCount]);

  const tiers = [
    {
      key: "professional",
      price: annual ? t("professional.priceAnnual") : t("professional.priceMonthly"),
      features: Array.from({ length: 7 }, (_, i) =>
        t(`professional.f${i + 1}`)
      ),
      popular: true,
    },
    {
      key: "agency",
      price: annual ? t("agency.priceAnnual") : t("agency.priceMonthly"),
      features: Array.from({ length: 6 }, (_, i) => t(`agency.f${i + 1}`)),
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
                  "relative h-6 w-11 cursor-pointer rounded-full transition-colors",
                  annual ? "bg-accent-500" : "bg-gray-300"
                )}
              >
                <span
                  className={cn(
                    "absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform",
                    annual ? "translate-x-5" : "translate-x-0"
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
          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
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
                    {annual ? t("perYear") : t("perMonth")}
                  </span>
                </div>

                {annual && (
                  <p className="mt-1 text-xs text-accent-600 font-medium">
                    {t("save")} {t(`${tier.key}.saveAmount`)}
                  </p>
                )}

                <GetStartedButton
                  className={cn(
                    "mt-6 block w-full cursor-pointer rounded-lg py-3 text-center text-sm font-medium transition-all",
                    tier.popular
                      ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
                      : "border border-[var(--border)] bg-white text-primary-600 hover:bg-primary-50 hover:border-primary-300"
                  )}
                >
                  {t(`${tier.key}.cta`)}
                </GetStartedButton>

                <div className="mt-8">
                  {tier.key === "agency" && (
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

      {/* Savings calculator */}
      <section className="section-padding bg-[var(--muted)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              {t("calculator.headline")}
            </h2>
            <p className="mt-4 text-lg text-[var(--muted-foreground)]">
              {t("calculator.subtitle")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-12 rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm"
          >
            {/* Sliders */}
            <div className="grid gap-8 sm:grid-cols-3">
              {/* Hourly rate */}
              <div>
                <div className="flex items-baseline justify-between">
                  <label className="text-sm font-medium text-[var(--foreground)]">
                    {t("calculator.hourlyRateLabel")}
                  </label>
                  <span className="text-lg font-bold text-accent-600">
                    €{hourlyRate}
                  </span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={250}
                  step={5}
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-accent-500 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent-500 [&::-webkit-slider-thumb]:shadow-md"
                />
                <div className="mt-1 flex justify-between text-xs text-[var(--muted-foreground)]">
                  <span>€50</span>
                  <span>€250</span>
                </div>
              </div>

              {/* Admin hours */}
              <div>
                <div className="flex items-baseline justify-between">
                  <label className="text-sm font-medium text-[var(--foreground)]">
                    {t("calculator.adminHoursLabel")}
                  </label>
                  <span className="text-lg font-bold text-accent-600">
                    {adminHours}h
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={20}
                  step={1}
                  value={adminHours}
                  onChange={(e) => setAdminHours(Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-accent-500 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent-500 [&::-webkit-slider-thumb]:shadow-md"
                />
                <div className="mt-1 flex justify-between text-xs text-[var(--muted-foreground)]">
                  <span>1h</span>
                  <span>20h</span>
                </div>
              </div>

              {/* Tools count */}
              <div>
                <div className="flex items-baseline justify-between">
                  <label className="text-sm font-medium text-[var(--foreground)]">
                    {t("calculator.toolsLabel")}
                  </label>
                  <span className="text-lg font-bold text-accent-600">
                    {toolCount}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={8}
                  step={1}
                  value={toolCount}
                  onChange={(e) => setToolCount(Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-accent-500 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent-500 [&::-webkit-slider-thumb]:shadow-md"
                />
                <div className="mt-1 flex justify-between text-xs text-[var(--muted-foreground)]">
                  <span>1</span>
                  <span>8</span>
                </div>
                <p className="mt-1 text-xs text-[var(--muted-foreground)]">
                  {t("calculator.avgToolCost")}
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-primary-50 p-5 text-center">
                <p className="text-sm font-medium text-[var(--muted-foreground)]">
                  {t("calculator.timeSavingsLabel")}
                </p>
                <p className="mt-1 text-2xl font-bold text-primary-700">
                  {formatEuro(savings.timeSavings)}
                  <span className="text-sm font-normal text-[var(--muted-foreground)]">
                    {t("calculator.perMonth")}
                  </span>
                </p>
              </div>
              <div className="rounded-xl bg-primary-50 p-5 text-center">
                <p className="text-sm font-medium text-[var(--muted-foreground)]">
                  {t("calculator.toolSavingsLabel")}
                </p>
                <p className="mt-1 text-2xl font-bold text-primary-700">
                  {formatEuro(savings.toolSavings)}
                  <span className="text-sm font-normal text-[var(--muted-foreground)]">
                    {t("calculator.perMonth")}
                  </span>
                </p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 p-5 text-center text-white">
                <p className="text-sm font-medium text-white/80">
                  {t("calculator.totalLabel")}
                </p>
                <p className="mt-1 text-2xl font-bold">
                  {formatEuro(savings.totalMonth)}
                  <span className="text-sm font-normal text-white/80">
                    {t("calculator.perMonth")}
                  </span>
                </p>
                <p className="mt-0.5 text-sm text-white/80">
                  {formatEuro(savings.totalYear)}
                  {t("calculator.perYear")}
                </p>
              </div>
            </div>

            {/* Payback line */}
            <p className="mt-6 text-center text-sm font-medium text-[var(--muted-foreground)]">
              {t("calculator.paybackLine")}
            </p>
          </motion.div>
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
