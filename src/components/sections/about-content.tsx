"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Lightbulb, Bot, Globe, Clock } from "lucide-react";

const valueIcons = [Lightbulb, Bot, Globe, Clock];

export function AboutContent() {
  const t = useTranslations("aboutPage");

  const values = Array.from({ length: 4 }, (_, i) => ({
    key: `v${i + 1}`,
    icon: valueIcons[i],
    title: t(`values.v${i + 1}.title`),
    description: t(`values.v${i + 1}.description`),
  }));

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
              className="mt-6 max-w-2xl text-lg text-[var(--muted-foreground)] sm:text-xl"
            >
              {t("hero.subheadline")}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              {t("mission.headline")}
            </h2>
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-[var(--muted-foreground)]">
              <p>{t("mission.p1")}</p>
              <p>{t("mission.p2")}</p>
              <p>{t("mission.p3")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl"
          >
            {t("values.headline")}
          </motion.h2>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {values.map(({ key, icon: Icon, title, description }, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border border-[var(--border)] bg-white p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-100 to-accent-100">
                  <Icon className="h-5 w-5 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
              <div className="shrink-0">
                <Image
                  src="/images/portrait-bw.png"
                  alt={t("founder.name")}
                  width={140}
                  height={140}
                  className="rounded-full"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)]">
                  {t("founder.greeting")}
                </h2>
                <p className="mt-1 text-sm font-medium text-primary-600">
                  {t("founder.role")}
                </p>
                <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                  {t("founder.p1")}
                </p>
                <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                  {t("founder.p2")}
                </p>
                <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                  {t("founder.p3")}
                </p>
                <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                  {t("founder.p4")}
                </p>
                <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                  {t("founder.p5")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
