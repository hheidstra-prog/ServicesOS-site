"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { X, Play } from "lucide-react";
import { ScheduleCallButton } from "./schedule-call-modal";

interface DemoVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoVideoModal({ isOpen, onClose }: DemoVideoModalProps) {
  const t = useTranslations("demoVideo");
  const tSchedule = useTranslations("scheduleCall");

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-[101] w-full max-w-3xl overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-4">
          <h2 className="text-lg font-semibold text-[var(--foreground)]">
            {t("title")}
          </h2>
          <button
            onClick={onClose}
            className="cursor-pointer rounded-lg p-2 text-[var(--muted-foreground)] transition-colors hover:bg-primary-50 hover:text-[var(--foreground)]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Placeholder content — replace with video embed when ready */}
        <div className="flex flex-col items-center justify-center px-8 py-16">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-accent-100">
            <Play className="h-8 w-8 text-primary-600" />
          </div>
          <p className="mt-6 max-w-md text-center text-[var(--muted-foreground)]">
            {t("placeholder")}
          </p>
          <ScheduleCallButton className="mt-6 cursor-pointer inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-6 text-sm font-medium text-white shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
            {tSchedule("button")}
          </ScheduleCallButton>
        </div>
      </div>
    </div>
  );
}
