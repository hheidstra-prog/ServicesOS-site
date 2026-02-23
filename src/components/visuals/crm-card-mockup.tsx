"use client";

import { useTranslations } from "next-intl";
import { Building2, Mail, Phone, FileText, Clock, CheckCircle2, Send } from "lucide-react";

export function CrmCardMockup() {
  const t = useTranslations("featuresPage.crm.card");

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-lg">
      {/* Client header */}
      <div className="border-b border-[var(--border)] bg-[var(--muted)] px-5 py-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-600 font-bold text-sm">
              AC
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[var(--foreground)]">{t("name")}</h3>
              <p className="text-[11px] text-[var(--muted-foreground)]">{t("contact")}</p>
            </div>
          </div>
          <span className="rounded-full bg-accent-100 px-2.5 py-0.5 text-[11px] font-medium text-accent-700">
            {t("status")}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-primary-50 px-2 py-0.5 text-[10px] font-medium text-primary-600 border border-primary-100">
            {t("tag1")}
          </span>
          <span className="rounded-full bg-primary-50 px-2 py-0.5 text-[10px] font-medium text-primary-600 border border-primary-100">
            {t("tag2")}
          </span>
          <span className="rounded-full bg-primary-50 px-2 py-0.5 text-[10px] font-medium text-primary-600 border border-primary-100">
            {t("tag3")}
          </span>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 divide-x divide-[var(--border)] border-b border-[var(--border)]">
        <div className="px-4 py-3 text-center">
          <p className="text-lg font-bold text-[var(--foreground)]">{t("projectsCount")}</p>
          <p className="text-[10px] text-[var(--muted-foreground)]">{t("projectsLabel")}</p>
        </div>
        <div className="px-4 py-3 text-center">
          <p className="text-lg font-bold text-[var(--foreground)]">{t("invoicedAmount")}</p>
          <p className="text-[10px] text-[var(--muted-foreground)]">{t("invoicedLabel")}</p>
        </div>
        <div className="px-4 py-3 text-center">
          <p className="text-lg font-bold text-accent-600">{t("hoursCount")}</p>
          <p className="text-[10px] text-[var(--muted-foreground)]">{t("hoursLabel")}</p>
        </div>
      </div>

      {/* Contact details */}
      <div className="border-b border-[var(--border)] px-5 py-3 space-y-2">
        <div className="flex items-center gap-2.5 text-[12px] text-[var(--muted-foreground)]">
          <Building2 className="h-3.5 w-3.5 shrink-0 text-primary-400" />
          <span>{t("company")}</span>
        </div>
        <div className="flex items-center gap-2.5 text-[12px] text-[var(--muted-foreground)]">
          <Mail className="h-3.5 w-3.5 shrink-0 text-primary-400" />
          <span>{t("email")}</span>
        </div>
        <div className="flex items-center gap-2.5 text-[12px] text-[var(--muted-foreground)]">
          <Phone className="h-3.5 w-3.5 shrink-0 text-primary-400" />
          <span>{t("phone")}</span>
        </div>
      </div>

      {/* Activity timeline */}
      <div className="px-5 py-3">
        <p className="text-[11px] font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-2.5">{t("activityTitle")}</p>
        <div className="space-y-2.5">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-500" />
            <div>
              <p className="text-[12px] text-[var(--foreground)]">{t("activity1")}</p>
              <p className="text-[10px] text-[var(--muted-foreground)]">{t("activity1Time")}</p>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <FileText className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary-400" />
            <div>
              <p className="text-[12px] text-[var(--foreground)]">{t("activity2")}</p>
              <p className="text-[10px] text-[var(--muted-foreground)]">{t("activity2Time")}</p>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Send className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary-400" />
            <div>
              <p className="text-[12px] text-[var(--foreground)]">{t("activity3")}</p>
              <p className="text-[10px] text-[var(--muted-foreground)]">{t("activity3Time")}</p>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary-400" />
            <div>
              <p className="text-[12px] text-[var(--foreground)]">{t("activity4")}</p>
              <p className="text-[10px] text-[var(--muted-foreground)]">{t("activity4Time")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
