"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Clock, MapPin, CheckCircle, Loader2, Calendar } from "lucide-react";
import { ScheduleCallModal } from "@/components/modals/schedule-call-modal";

const subjectKeys = [
  "general",
  "sales",
  "support",
  "partnership",
  "other",
] as const;

export function ContactContent() {
  const t = useTranslations("contactPage");
  const tSchedule = useTranslations("scheduleCall");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [scheduleOpen, setScheduleOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get("website")) return;

    try {
      const response = await fetch("/api/hubspot/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          name: formData.get("name"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  }

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

      {/* Form + Info */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              {status === "success" ? (
                <div className="flex flex-col items-center rounded-2xl border border-[var(--border)] bg-white p-12 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-100">
                    <CheckCircle className="h-7 w-7 text-accent-600" />
                  </div>
                  <p className="text-lg font-semibold text-[var(--foreground)]">
                    {t("form.success")}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 rounded-2xl border border-[var(--border)] bg-white p-8"
                >
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-[var(--foreground)]"
                    >
                      {t("form.name")}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--foreground)] outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-[var(--foreground)]"
                    >
                      {t("form.email")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--foreground)] outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block text-sm font-medium text-[var(--foreground)]"
                    >
                      {t("form.subject")}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      defaultValue=""
                      className="w-full cursor-pointer rounded-lg border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--foreground)] outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                    >
                      <option value="" disabled>
                        —
                      </option>
                      {subjectKeys.map((key) => (
                        <option key={key} value={key}>
                          {t(`form.subjects.${key}`)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-[var(--foreground)]"
                    >
                      {t("form.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full resize-none rounded-lg border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--foreground)] outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-500">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full cursor-pointer rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 py-3 text-sm font-medium text-white shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <span className="inline-flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      t("form.submit")
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact info + Schedule call */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8 lg:col-span-2"
            >
              {/* Schedule a call card */}
              <div className="rounded-2xl border border-primary-200 bg-primary-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-600">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      {tSchedule("title")}
                    </p>
                    <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                      {tSchedule("description")}
                    </p>
                    <button
                      onClick={() => setScheduleOpen(true)}
                      className="mt-3 cursor-pointer text-sm font-medium text-primary-600 transition-colors hover:text-primary-800"
                    >
                      {tSchedule("button")} &rarr;
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                  <Mail className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    Email
                  </p>
                  <a
                    href={`mailto:${t("info.email")}`}
                    className="text-sm text-primary-600 hover:underline"
                  >
                    {t("info.email")}
                  </a>
                  <br />
                  <a
                    href={`mailto:${t("info.support")}`}
                    className="text-sm text-primary-600 hover:underline"
                  >
                    {t("info.support")}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                  <Clock className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    {t("info.hoursLabel")}
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {t("info.hours")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                  <MapPin className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    {t("info.locationLabel")}
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {t("info.location")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ScheduleCallModal
        isOpen={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
      />
    </>
  );
}
