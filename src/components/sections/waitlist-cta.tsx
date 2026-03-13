"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle, Loader2, ArrowRight } from "lucide-react";

export function WaitlistCTA() {
  const t = useTranslations("waitlist");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [painpoint, setPainpoint] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/servible/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, painpoint }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      setStatus("success");
      setEmail("");
      setName("");
      setCompany("");
      setPainpoint("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  return (
    <section
      id="waitlist"
      className="section-padding relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800"
    >
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
          <p className="mt-4 text-lg text-primary-100">{t("subheadline")}</p>

          {status === "success" ? (
            <div className="mt-10 flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/20">
                <CheckCircle className="h-8 w-8 text-accent-300" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {t("successTitle")}
              </h3>
              <p className="mt-2 text-primary-200">
                {t("successDescription")}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col items-center gap-3"
            >
              <input
                type="email"
                required
                placeholder={t("emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-full max-w-md rounded-lg border border-white/20 bg-white/10 px-4 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-accent-400 focus:outline-none"
              />
              <div className="flex w-full max-w-md gap-3">
                <input
                  type="text"
                  required
                  placeholder={t("namePlaceholder")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 w-full rounded-lg border border-white/20 bg-white/10 px-4 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-accent-400 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder={t("companyPlaceholder")}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="h-12 w-full rounded-lg border border-white/20 bg-white/10 px-4 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-accent-400 focus:outline-none"
                />
              </div>
              <select
                required
                value={painpoint}
                onChange={(e) => setPainpoint(e.target.value)}
                className={`h-12 w-full max-w-md rounded-lg border border-white/20 bg-white/10 px-4 backdrop-blur-sm focus:border-accent-400 focus:outline-none ${painpoint ? "text-white" : "text-white/50"}`}
              >
                <option value="" disabled className="text-gray-900">
                  {t("painpointPlaceholder")}
                </option>
                <option value="invoicing" className="text-gray-900">{t("painpointInvoicing")}</option>
                <option value="communication" className="text-gray-900">{t("painpointCommunication")}</option>
                <option value="scheduling" className="text-gray-900">{t("painpointScheduling")}</option>
                <option value="overview" className="text-gray-900">{t("painpointOverview")}</option>
                <option value="tools" className="text-gray-900">{t("painpointTools")}</option>
                <option value="other" className="text-gray-900">{t("painpointOther")}</option>
              </select>
              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 inline-flex h-12 w-full max-w-md cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-8 font-medium text-primary-600 transition-all hover:bg-primary-50 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t("loading")}
                  </>
                ) : (
                  <>
                    {t("button")}
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-4 text-sm text-red-300">{errorMessage}</p>
          )}

          <p className="mt-6 text-sm text-primary-300">{t("noSpam")}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-200">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent-400" />
              {t("trustFree")}
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent-400" />
              {t("trustPricing")}
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent-400" />
              {t("trustNoCard")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
