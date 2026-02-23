"use client";

import { useTranslations } from "next-intl";
import { Clock, ArrowDown, CheckCircle2, CreditCard } from "lucide-react";

function TimeEntry({
  task,
  client,
  time,
  rate,
  billableLabel,
  billable,
}: {
  task: string;
  client: string;
  time: string;
  rate?: string;
  billableLabel: string;
  billable: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-2.5 min-w-0">
        <div
          className={`h-2 w-2 shrink-0 rounded-full ${
            billable ? "bg-accent-500" : "bg-gray-300"
          }`}
        />
        <div className="min-w-0">
          <p className="text-[11px] font-medium text-[var(--foreground)] truncate">
            {task}
          </p>
          <p className="text-[10px] text-[var(--muted-foreground)]">
            {client}
            {rate && (
              <span className="ml-1.5 text-primary-500">{rate}</span>
            )}
          </p>
        </div>
      </div>
      <div className="shrink-0 text-right ml-3">
        <p className="text-[12px] font-semibold text-[var(--foreground)] tabular-nums">
          {time}
        </p>
        <p
          className={`text-[9px] font-medium ${
            billable ? "text-accent-600" : "text-gray-400"
          }`}
        >
          {billableLabel}
        </p>
      </div>
    </div>
  );
}

export function TimeInvoiceMockup() {
  const t = useTranslations("featuresPage.invoicing.mockup");

  return (
    <div className="space-y-3">
      {/* Time tracker card */}
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--muted)] px-5 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-accent-100">
              <Clock className="h-4 w-4 text-primary-600" />
            </div>
            <span className="text-sm font-medium text-[var(--foreground)]">
              {t("timerTitle")}
            </span>
          </div>
          {/* Summary pills */}
          <div className="flex gap-2">
            <div className="rounded-full bg-primary-50 px-2.5 py-0.5 border border-primary-100">
              <span className="text-[9px] text-[var(--muted-foreground)]">
                {t("todayLabel")}{" "}
              </span>
              <span className="text-[10px] font-bold text-primary-600">
                {t("todayHours")}
              </span>
            </div>
            <div className="hidden sm:block rounded-full bg-primary-50 px-2.5 py-0.5 border border-primary-100">
              <span className="text-[9px] text-[var(--muted-foreground)]">
                {t("weekLabel")}{" "}
              </span>
              <span className="text-[10px] font-bold text-primary-600">
                {t("weekHours")}
              </span>
            </div>
          </div>
        </div>

        {/* Time entries */}
        <div className="divide-y divide-[var(--border)] px-4">
          <TimeEntry
            task={t("entry1Task")}
            client={t("entry1Client")}
            time={t("entry1Time")}
            rate={t("entry1Rate")}
            billableLabel={t("entry1Billable")}
            billable
          />
          <TimeEntry
            task={t("entry2Task")}
            client={t("entry2Client")}
            time={t("entry2Time")}
            rate={t("entry2Rate")}
            billableLabel={t("entry2Billable")}
            billable
          />
          <TimeEntry
            task={t("entry3Task")}
            client={t("entry3Client")}
            time={t("entry3Time")}
            billableLabel={t("entry3Billable")}
            billable={false}
          />
        </div>

        {/* Convert button */}
        <div className="px-4 py-3 border-t border-[var(--border)]">
          <button className="w-full rounded-lg bg-primary-600 py-1.5 text-[11px] font-semibold text-white flex items-center justify-center gap-1.5">
            <ArrowDown className="h-3 w-3" />
            {t("convertButton")}
          </button>
        </div>
      </div>

      {/* Invoice result card */}
      <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-md">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-50 border border-accent-100">
              <CheckCircle2 className="h-4 w-4 text-accent-600" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-[12px] font-semibold text-[var(--foreground)]">
                  {t("invoiceTitle")}
                </p>
                <span className="rounded-full bg-accent-100 px-2 py-0.5 text-[9px] font-medium text-accent-700">
                  {t("invoiceStatus")}
                </span>
              </div>
              <p className="text-[10px] text-[var(--muted-foreground)]">
                {t("invoiceClient")} · {t("invoicePaidDate")}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[14px] font-bold text-[var(--foreground)]">
              {t("invoiceAmount")}
            </p>
            <div className="flex items-center justify-end gap-1 text-[9px] text-[var(--muted-foreground)]">
              <CreditCard className="h-2.5 w-2.5" />
              {t("invoiceMethod")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
