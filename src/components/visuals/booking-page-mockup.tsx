"use client";

import { useTranslations } from "next-intl";
import { Calendar, Clock, ChevronLeft, ChevronRight, Check } from "lucide-react";

function ServiceOption({
  label,
  duration,
  price,
  selected,
}: {
  label: string;
  duration: string;
  price: string;
  selected?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between rounded-lg border px-3 py-2.5 transition-colors ${
        selected
          ? "border-primary-300 bg-primary-50"
          : "border-[var(--border)] bg-white"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <div
          className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
            selected
              ? "border-primary-600 bg-primary-600"
              : "border-gray-300"
          }`}
        >
          {selected && <Check className="h-2.5 w-2.5 text-white" />}
        </div>
        <div>
          <p className="text-[12px] font-medium text-[var(--foreground)]">
            {label}
          </p>
          <p className="text-[10px] text-[var(--muted-foreground)]">
            <Clock className="mr-1 inline h-2.5 w-2.5" />
            {duration}
          </p>
        </div>
      </div>
      <span className="text-[11px] font-semibold text-primary-600">{price}</span>
    </div>
  );
}

function MiniCalendar({ monthLabel, selectedDate }: { monthLabel: string; selectedDate: string }) {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  // Sparse grid: first row starts on Saturday (index 5)
  const dates = [
    null, null, null, null, null, 1, 2,
    3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30,
    31,
  ];
  const unavailable = new Set([1, 2, 8, 9, 15, 16, 22, 23, 29, 30]);
  const selectedDay = 13;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-[var(--foreground)]">
          {monthLabel}
        </span>
        <div className="flex gap-1">
          <ChevronLeft className="h-3.5 w-3.5 text-[var(--muted-foreground)] cursor-pointer" />
          <ChevronRight className="h-3.5 w-3.5 text-[var(--muted-foreground)] cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-0.5 text-center">
        {days.map((d, i) => (
          <span
            key={i}
            className="text-[9px] font-medium text-[var(--muted-foreground)] py-0.5"
          >
            {d}
          </span>
        ))}
        {dates.map((date, i) => (
          <span
            key={i}
            className={`flex h-5 w-5 items-center justify-center rounded-full text-[9px] mx-auto ${
              date === null
                ? ""
                : date === selectedDay
                  ? "bg-primary-600 text-white font-bold"
                  : unavailable.has(date)
                    ? "text-gray-300"
                    : "text-[var(--foreground)] hover:bg-primary-50 cursor-pointer"
            }`}
          >
            {date}
          </span>
        ))}
      </div>
      <p className="mt-1.5 text-center text-[10px] font-medium text-primary-600">
        {selectedDate}
      </p>
    </div>
  );
}

function TimeSlot({ time, selected }: { time: string; selected?: boolean }) {
  return (
    <div
      className={`rounded-md border px-2.5 py-1.5 text-center text-[11px] font-medium transition-colors ${
        selected
          ? "border-primary-300 bg-primary-600 text-white"
          : "border-[var(--border)] text-[var(--foreground)] hover:border-primary-200 cursor-pointer"
      }`}
    >
      {time}
    </div>
  );
}

export function BookingPageMockup() {
  const t = useTranslations("featuresPage.booking.mockup");

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-lg">
      {/* Header */}
      <div className="border-b border-[var(--border)] bg-[var(--muted)] px-5 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-accent-100">
            <Calendar className="h-4 w-4 text-primary-600" />
          </div>
          <div>
            <span className="text-sm font-medium text-[var(--foreground)]">
              {t("header")}
            </span>
            <p className="text-[10px] text-[var(--muted-foreground)]">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Service selection */}
        <div className="space-y-2">
          <ServiceOption
            label={t("service1")}
            duration={t("service1Duration")}
            price={t("service1Price")}
            selected
          />
          <ServiceOption
            label={t("service2")}
            duration={t("service2Duration")}
            price={t("service2Price")}
          />
          <ServiceOption
            label={t("service3")}
            duration={t("service3Duration")}
            price={t("service3Price")}
          />
        </div>

        {/* Calendar + time slots */}
        <div className="grid grid-cols-2 gap-3">
          <MiniCalendar
            monthLabel={t("monthLabel")}
            selectedDate={t("selectedDate")}
          />
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              {t("timeSlotsLabel")}
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              <TimeSlot time={t("slot1")} />
              <TimeSlot time={t("slot2")} selected />
              <TimeSlot time={t("slot3")} />
              <TimeSlot time={t("slot4")} />
            </div>
          </div>
        </div>

        {/* Intake question */}
        <div>
          <label className="text-[10px] font-medium text-[var(--muted-foreground)]">
            {t("intakeLabel")}
          </label>
          <div className="mt-1 rounded-lg border border-[var(--border)] bg-[var(--muted)] px-3 py-2">
            <p className="text-[11px] text-gray-400 italic">
              {t("intakePlaceholder")}
            </p>
          </div>
        </div>

        {/* Confirm button */}
        <button className="w-full rounded-lg bg-primary-600 py-2 text-[12px] font-semibold text-white">
          {t("confirmButton")}
        </button>
      </div>
    </div>
  );
}
