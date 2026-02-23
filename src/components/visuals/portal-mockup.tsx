"use client";

import { useTranslations } from "next-intl";
import {
  UserCircle,
  FileText,
  Download,
  Link2,
  CheckCircle2,
  Clock,
} from "lucide-react";

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-gray-100">
      <div
        className="h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export function PortalMockup() {
  const t = useTranslations("featuresPage.portal.mockup");

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-lg">
      {/* Header */}
      <div className="border-b border-[var(--border)] bg-[var(--muted)] px-5 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-accent-100">
              <UserCircle className="h-4 w-4 text-primary-600" />
            </div>
            <span className="text-sm font-medium text-[var(--foreground)]">
              {t("header")}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Link2 className="h-3 w-3 text-accent-500" />
            <span className="text-[9px] text-accent-600">
              {t("magicLink")}
            </span>
          </div>
        </div>

        {/* Welcome + nav */}
        <p className="mt-2 text-[12px] text-[var(--muted-foreground)]">
          {t("welcomeLabel")}{" "}
          <span className="font-semibold text-[var(--foreground)]">
            {t("clientName")}
          </span>
        </p>
        <div className="mt-2 flex gap-1">
          {(["nav1", "nav2", "nav3", "nav4"] as const).map((key, i) => (
            <span
              key={key}
              className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${
                i === 0
                  ? "bg-primary-600 text-white"
                  : "bg-white text-[var(--muted-foreground)] border border-[var(--border)]"
              }`}
            >
              {t(key)}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Projects */}
        <div className="space-y-2.5">
          <div className="rounded-lg border border-[var(--border)] p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] font-medium text-[var(--foreground)]">
                {t("project1")}
              </span>
              <span className="rounded-full bg-primary-50 px-2 py-0.5 text-[9px] font-medium text-primary-600 border border-primary-100">
                {t("project1Status")}
              </span>
            </div>
            <ProgressBar value={Number(t("project1Progress"))} />
            <p className="mt-1 text-right text-[9px] text-[var(--muted-foreground)]">
              {t("project1Progress")}%
            </p>
          </div>
          <div className="rounded-lg border border-[var(--border)] p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] font-medium text-[var(--foreground)]">
                {t("project2")}
              </span>
              <span className="rounded-full bg-accent-50 px-2 py-0.5 text-[9px] font-medium text-accent-600 border border-accent-100">
                {t("project2Status")}
              </span>
            </div>
            <ProgressBar value={Number(t("project2Progress"))} />
            <p className="mt-1 text-right text-[9px] text-[var(--muted-foreground)]">
              {t("project2Progress")}%
            </p>
          </div>
        </div>

        {/* Invoices */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-2">
            {t("invoicesTitle")}
          </p>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between rounded-md bg-[var(--muted)] px-3 py-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent-500" />
                <div>
                  <p className="text-[11px] font-medium text-[var(--foreground)]">
                    {t("inv1")}
                  </p>
                  <p className="text-[9px] text-accent-600">{t("inv1Status")}</p>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-[var(--foreground)]">
                {t("inv1Amount")}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-[var(--muted)] px-3 py-2">
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-amber-500" />
                <div>
                  <p className="text-[11px] font-medium text-[var(--foreground)]">
                    {t("inv2")}
                  </p>
                  <p className="text-[9px] text-amber-600">{t("inv2Status")}</p>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-[var(--foreground)]">
                {t("inv2Amount")}
              </span>
            </div>
          </div>
        </div>

        {/* Files */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-2">
            {t("filesTitle")}
          </p>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between rounded-md border border-[var(--border)] px-3 py-2">
              <div className="flex items-center gap-2">
                <FileText className="h-3.5 w-3.5 text-primary-400" />
                <span className="text-[11px] text-[var(--foreground)]">
                  {t("file1")}
                </span>
              </div>
              <Download className="h-3 w-3 text-[var(--muted-foreground)]" />
            </div>
            <div className="flex items-center justify-between rounded-md border border-[var(--border)] px-3 py-2">
              <div className="flex items-center gap-2">
                <FileText className="h-3.5 w-3.5 text-primary-400" />
                <span className="text-[11px] text-[var(--foreground)]">
                  {t("file2")}
                </span>
              </div>
              <Download className="h-3 w-3 text-[var(--muted-foreground)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
