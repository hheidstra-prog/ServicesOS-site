"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import {
  X,
  CheckCircle,
  Loader2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface BookingConfig {
  durations: number[];
  organizationName?: string;
  title?: string;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

// ── Mini calendar (Sunday-start) ───────────────────────────────

function MiniCalendar({
  selectedDate,
  onSelect,
  availableDays,
  locale,
}: {
  selectedDate: string | null;
  onSelect: (date: string) => void;
  availableDays: number[];
  locale: string;
}) {
  const t = useTranslations("scheduleCall");
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const dayLabels =
    locale === "nl"
      ? ["zo", "ma", "di", "wo", "do", "vr", "za"]
      : ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const firstOfMonth = new Date(viewYear, viewMonth, 1);
  const startDay = firstOfMonth.getDay(); // 0=Sun already
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 2);

  const canPrev =
    viewYear > today.getFullYear() || viewMonth > today.getMonth();
  const canNext = new Date(viewYear, viewMonth + 1, 1) <= maxDate;

  function isAvailable(day: number) {
    const d = new Date(viewYear, viewMonth, day);
    if (d <= today) return false;
    if (d > maxDate) return false;
    return availableDays.includes(d.getDay());
  }

  function toDateString(day: number) {
    const m = String(viewMonth + 1).padStart(2, "0");
    const d = String(day).padStart(2, "0");
    return `${viewYear}-${m}-${d}`;
  }

  const monthName = new Date(viewYear, viewMonth).toLocaleString(locale, {
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      {/* Month nav */}
      <div className="mb-3 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => {
            if (viewMonth === 0) {
              setViewMonth(11);
              setViewYear((y) => y - 1);
            } else {
              setViewMonth((m) => m - 1);
            }
          }}
          disabled={!canPrev}
          className="cursor-pointer text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)] disabled:invisible"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-sm font-semibold capitalize text-[var(--foreground)]">
          {monthName}
        </span>
        <button
          type="button"
          onClick={() => {
            if (viewMonth === 11) {
              setViewMonth(0);
              setViewYear((y) => y + 1);
            } else {
              setViewMonth((m) => m + 1);
            }
          }}
          disabled={!canNext}
          className="cursor-pointer text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)] disabled:invisible"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 text-center">
        {dayLabels.map((d) => (
          <div
            key={d}
            className="pb-2 text-xs font-semibold uppercase text-[var(--muted-foreground)]"
          >
            {d}
          </div>
        ))}

        {/* Empty cells before 1st */}
        {Array.from({ length: startDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {/* Days */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const dateStr = toDateString(day);
          const available = isAvailable(day);
          const selected = dateStr === selectedDate;

          return (
            <div key={day} className="flex items-center justify-center py-1">
              <button
                type="button"
                disabled={!available}
                onClick={() => onSelect(dateStr)}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors ${
                  selected
                    ? "bg-primary-600 font-semibold text-white"
                    : available
                      ? "cursor-pointer font-medium text-[var(--foreground)] hover:bg-primary-50"
                      : "cursor-default text-gray-300"
                }`}
              >
                {day}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Format helpers ─────────────────────────────────────────────

function formatDateLong(dateStr: string, locale: string) {
  const [year, month, day] = dateStr.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  return d.toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatTime12(time: string) {
  const [h, m] = time.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${String(m).padStart(2, "0")} ${suffix}`;
}

// ── Main modal ─────────────────────────────────────────────────

export function ScheduleCallModal({
  isOpen,
  onClose,
}: ScheduleCallModalProps) {
  const t = useTranslations("scheduleCall");
  const [mounted, setMounted] = useState(false);

  // Data from API
  const [config, setConfig] = useState<BookingConfig | null>(null);
  const [availableDays, setAvailableDays] = useState<number[]>([]);
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [initLoading, setInitLoading] = useState(true);
  const [initError, setInitError] = useState("");

  // Selections
  const [duration, setDuration] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Steps: "schedule" (calendar+slots) or "details" (contact form)
  const [step, setStep] = useState<"schedule" | "details" | "success">(
    "schedule"
  );

  // Submit
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const locale =
    typeof window !== "undefined"
      ? document.documentElement.lang || "en"
      : "en";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch config + available days when modal opens
  useEffect(() => {
    if (!isOpen) return;

    setConfig(null);
    setAvailableDays([]);
    setSlots([]);
    setDuration(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setStep("schedule");
    setStatus("idle");
    setErrorMessage("");
    setInitError("");
    setInitLoading(true);

    async function fetchInit() {
      try {
        const [configRes, daysRes] = await Promise.all([
          fetch("/api/servible/bookings/config"),
          fetch("/api/servible/bookings/available-days"),
        ]);

        const configData = await configRes.json();
        const daysData = await daysRes.json();

        if (!configRes.ok || !daysRes.ok) {
          throw new Error("Failed to load booking configuration");
        }

        setConfig(configData.config);
        setAvailableDays(daysData.days);

        if (configData.config.durations.length === 1) {
          setDuration(configData.config.durations[0]);
        }
      } catch (error) {
        setInitError(
          error instanceof Error ? error.message : "Something went wrong"
        );
      } finally {
        setInitLoading(false);
      }
    }

    fetchInit();
  }, [isOpen]);

  // Fetch slots when date + duration change
  const fetchSlots = useCallback(
    async (date: string, dur: number) => {
      setSlotsLoading(true);
      setSlots([]);
      setSelectedTime(null);

      try {
        const res = await fetch(
          `/api/servible/bookings/available-slots?date=${date}&duration=${dur}`
        );
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Failed to fetch slots");

        setSlots(data.slots || []);
      } catch {
        setSlots([]);
      } finally {
        setSlotsLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    if (selectedDate && duration) {
      fetchSlots(selectedDate, duration);
    }
  }, [selectedDate, duration, fetchSlots]);

  // Escape to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !duration) return;

    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const firstName = (formData.get("firstName") as string) || "";
    const lastName = (formData.get("lastName") as string) || "";

    try {
      const response = await fetch("/api/servible/bookings/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          durationMinutes: duration,
          date: selectedDate,
          time: selectedTime,
          name: `${firstName} ${lastName}`.trim(),
          email: formData.get("email"),
          phone: formData.get("phone") || undefined,
          notes: formData.get("notes") || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 409) {
          fetchSlots(selectedDate, duration);
          setStep("schedule");
        }
        throw new Error(data.error || "Failed to book call");
      }

      setStep("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  }

  if (!isOpen || !mounted) return null;

  const inputClass =
    "w-full rounded-lg border border-[var(--border)] bg-[var(--muted)] px-4 py-2.5 text-sm text-[var(--foreground)] outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100";

  const availableSlots = slots.filter((s) => s.available);

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-[101] mx-4 flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-2xl">
        {/* Dark header */}
        <div className="flex items-center justify-between bg-gray-900 px-6 py-4">
          <h2 className="text-base font-semibold text-white">{t("title")}</h2>
          <button
            onClick={onClose}
            className="cursor-pointer rounded-lg p-1.5 text-gray-400 transition-colors hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body — fixed height across all steps */}
        <div className="h-[600px]">
          {/* Loading */}
          {initLoading && (
            <div className="flex h-full items-center justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-primary-600" />
            </div>
          )}

          {/* Init error */}
          {initError && (
            <div className="flex h-full items-center justify-center">
              <p className="text-sm text-red-500">{initError}</p>
            </div>
          )}

          {/* Success */}
          {step === "success" && (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-100">
                <CheckCircle className="h-7 w-7 text-accent-600" />
              </div>
              <p className="text-lg font-semibold text-[var(--foreground)]">
                {t("form.success")}
              </p>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                {t("form.successDetail")}
              </p>
            </div>
          )}

          {/* ── Step 1: Schedule ──────────────────────────── */}
          {!initLoading && !initError && step === "schedule" && config && (
            <div className="grid h-full md:grid-cols-2">
              {/* Left: avatar + calendar */}
              <div className="border-b border-[var(--border)] p-6 md:border-b-0 md:border-r">
                {/* Config title */}
                {config.title && (
                  <div className="mb-4 text-center">
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-lg font-semibold text-gray-600">
                      {(config.organizationName || "S")[0].toUpperCase()}
                    </div>
                    <p className="text-base font-semibold text-[var(--foreground)]">
                      {config.title}
                    </p>
                  </div>
                )}

                <MiniCalendar
                  selectedDate={selectedDate}
                  onSelect={setSelectedDate}
                  availableDays={availableDays}
                  locale={locale}
                />
              </div>

              {/* Right: duration + time slots */}
              <div className="flex flex-col overflow-hidden p-6">
                {/* Duration picker */}
                {config.durations.length > 1 && (
                  <div className="mb-5 shrink-0">
                    <p className="mb-2 text-sm font-semibold text-[var(--foreground)]">
                      {t("form.howLong")}
                    </p>
                    <div className="flex gap-2">
                      {config.durations.map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDuration(d)}
                          className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                            duration === d
                              ? "border-primary-600 bg-primary-50 text-primary-700"
                              : "border-[var(--border)] text-[var(--muted-foreground)] hover:border-primary-300"
                          }`}
                        >
                          {d} {t("form.mins")}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Time slots */}
                {selectedDate && duration && (
                  <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
                    <div className="shrink-0">
                      <p className="text-sm font-semibold text-[var(--foreground)]">
                        {t("form.whatTime")}
                      </p>
                      <p className="mb-3 text-xs text-[var(--muted-foreground)]">
                        {t("form.showingTimes")}{" "}
                        <span className="font-semibold">
                          {formatDateLong(selectedDate, locale)}
                        </span>
                      </p>
                    </div>

                    {slotsLoading && (
                      <div className="flex flex-1 items-center justify-center">
                        <Loader2 className="h-5 w-5 animate-spin text-primary-600" />
                      </div>
                    )}

                    {!slotsLoading && availableSlots.length === 0 && (
                      <p className="py-6 text-center text-sm text-[var(--muted-foreground)]">
                        {t("form.noSlots")}
                      </p>
                    )}

                    {!slotsLoading && availableSlots.length > 0 && (
                      <div className="-mr-2 min-h-0 flex-1 space-y-2 overflow-y-auto pr-2">
                        {availableSlots.map((slot) => (
                          <button
                            key={slot.time}
                            type="button"
                            onClick={() => {
                              setSelectedTime(slot.time);
                              setStep("details");
                            }}
                            className={`w-full cursor-pointer rounded-lg border py-3 text-center text-sm font-medium transition-colors ${
                              selectedTime === slot.time
                                ? "border-primary-600 bg-primary-50 text-primary-700"
                                : "border-[var(--border)] text-[var(--foreground)] hover:border-primary-400 hover:bg-primary-50/50"
                            }`}
                          >
                            {formatTime12(slot.time)}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Prompt to pick date if not yet selected */}
                {(!selectedDate || !duration) && (
                  <div className="flex flex-1 items-center justify-center">
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {t("description")}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── Step 2: Contact details ──────────────────── */}
          {step === "details" &&
            selectedDate &&
            selectedTime &&
            duration && (
              <form
                onSubmit={handleSubmit}
                className="flex h-full flex-col"
              >
                <div className="flex-1 overflow-y-auto p-6">
                  {/* Section heading */}
                  <h3 className="mb-1 text-lg font-semibold text-primary-600">
                    {t("form.yourInfo")}
                  </h3>

                  {/* Booking summary */}
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    {formatDateLong(selectedDate, locale)}{" "}
                    {formatTime12(selectedTime)}
                    <button
                      type="button"
                      onClick={() => setStep("schedule")}
                      className="ml-2 cursor-pointer text-sm font-medium text-primary-600 hover:text-primary-800"
                    >
                      {t("form.edit")}
                    </button>
                  </p>

                  {duration && (
                    <p className="mb-6 text-xs text-[var(--muted-foreground)]">
                      {duration} {t("form.mins")}
                    </p>
                  )}

                  {/* Form fields */}
                  <div className="space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="schedule-firstName"
                          className="mb-1.5 block text-sm font-medium text-[var(--foreground)]"
                        >
                          {t("form.firstName")} *
                        </label>
                        <input
                          id="schedule-firstName"
                          name="firstName"
                          type="text"
                          required
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="schedule-lastName"
                          className="mb-1.5 block text-sm font-medium text-[var(--foreground)]"
                        >
                          {t("form.lastName")} *
                        </label>
                        <input
                          id="schedule-lastName"
                          name="lastName"
                          type="text"
                          required
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="schedule-email"
                        className="mb-1.5 block text-sm font-medium text-[var(--foreground)]"
                      >
                        {t("form.emailAddress")} *
                      </label>
                      <input
                        id="schedule-email"
                        name="email"
                        type="email"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="schedule-phone"
                        className="mb-1.5 block text-sm font-medium text-[var(--foreground)]"
                      >
                        {t("form.phone")}
                      </label>
                      <input
                        id="schedule-phone"
                        name="phone"
                        type="tel"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="schedule-notes"
                        className="mb-1.5 block text-sm font-medium text-[var(--foreground)]"
                      >
                        {t("form.notes")}
                      </label>
                      <textarea
                        id="schedule-notes"
                        name="notes"
                        rows={2}
                        className={`${inputClass} resize-none`}
                        placeholder={t("form.notesPlaceholder")}
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-500">{errorMessage}</p>
                    )}
                  </div>
                </div>

                {/* Footer with Back + Confirm */}
                <div className="flex shrink-0 items-center justify-between border-t border-[var(--border)] px-6 py-4">
                  <button
                    type="button"
                    onClick={() => setStep("schedule")}
                    className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    {t("form.back")}
                  </button>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="cursor-pointer rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-2 text-sm font-medium text-white shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <span className="inline-flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {t("form.submitting")}
                      </span>
                    ) : (
                      t("form.confirm")
                    )}
                  </button>
                </div>
              </form>
            )}
        </div>
      </div>
    </div>,
    document.body
  );
}

export function ScheduleCallButton({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const t = useTranslations("scheduleCall");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={className}>
        {children || t("button")}
      </button>
      <ScheduleCallModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
