"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Gift, X } from "lucide-react";

export function EarlyBirdBanner() {
  const t = useTranslations("earlyBird");
  const locale = useLocale();
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative bg-gradient-to-r from-primary-600 to-accent-600 px-4 py-2.5 text-center text-sm text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3">
        <Gift className="hidden h-4 w-4 shrink-0 sm:block" />
        <span>{t("text")}</span>
        <Link
          href={`/${locale}#waitlist`}
          className="shrink-0 rounded-md bg-white/20 px-3 py-1 text-xs font-semibold transition-colors hover:bg-white/30"
        >
          {t("cta")}
        </Link>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer p-1 text-white/70 transition-colors hover:text-white"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
