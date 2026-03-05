"use client";

import { useTranslations } from "next-intl";
import { Clock, Square, ArrowRight } from "lucide-react";

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

export function TimeTrackerMockup() {
  const t = useTranslations("featuresPage.timeTracking.mockup");

  return (
    <div className="space-y-3">
      {/* Persistent timer bar */}
      <div className="overflow-hidden rounded-xl border border-accent-200 bg-accent-50 shadow-md">
        <div className="flex items-center justify-between px-4 py-2.5">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-500" />
            </span>
            <div>
              <p className="text-[12px] font-semibold text-[var(--foreground)] tabular-nums">
                {t("timerValue")}
              </p>
              <p className="text-[10px] text-[var(--muted-foreground)]">
                {t("timerTask")}
              </p>
            </div>
          </div>
          <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-100 text-red-600">
            <Square className="h-3 w-3 fill-current" />
          </button>
        </div>
      </div>

      {/* Time entries card */}
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-lg">
        {/* Header with summary pills */}
        <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--muted)] px-5 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-accent-100">
              <Clock className="h-4 w-4 text-primary-600" />
            </div>
            <span className="text-sm font-medium text-[var(--foreground)]">
              {t("title")}
            </span>
          </div>
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
            <div className="hidden md:block rounded-full bg-primary-50 px-2.5 py-0.5 border border-primary-100">
              <span className="text-[9px] text-[var(--muted-foreground)]">
                {t("monthLabel")}{" "}
              </span>
              <span className="text-[10px] font-bold text-primary-600">
                {t("monthHours")}
              </span>
            </div>
          </div>
        </div>

        {/* Billable summary bar */}
        <div className="px-5 py-2.5 border-b border-[var(--border)]">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] text-[var(--muted-foreground)]">
              {t("billableSplit")}
            </span>
            <span className="text-[10px] font-semibold text-accent-600">
              {t("billablePercent")}
            </span>
          </div>
          <div className="flex h-1.5 rounded-full overflow-hidden">
            <div className="bg-accent-500" style={{ width: "78%" }} />
            <div className="bg-gray-200 flex-1" />
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

        {/* Convert to invoice */}
        <div className="px-4 py-3 border-t border-[var(--border)]">
          <button className="w-full rounded-lg bg-primary-600 py-1.5 text-[11px] font-semibold text-white flex items-center justify-center gap-1.5">
            <ArrowRight className="h-3 w-3" />
            {t("convertButton")}
          </button>
        </div>
      </div>
    </div>
  );
}
