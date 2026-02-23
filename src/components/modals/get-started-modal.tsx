"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslations, useLocale } from "next-intl";
import { X, Rocket, Calendar } from "lucide-react";
import { ScheduleCallModal } from "./schedule-call-modal";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const t = useTranslations("getStarted");
  const locale = useLocale();
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const handleEarlyBird = () => {
    onClose();
    const el = document.getElementById("waitlist");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/${locale}#waitlist`;
    }
  };

  const handleScheduleCall = () => {
    onClose();
    setScheduleOpen(true);
  };

  const modal = isOpen ? (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-[101] w-full max-w-lg overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-2xl">
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

        {/* Options */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-[var(--muted-foreground)]">
            {t("description")}
          </p>

          {/* Early Bird option */}
          <button
            onClick={handleEarlyBird}
            className="w-full cursor-pointer rounded-xl border border-[var(--border)] p-5 text-left transition-all hover:border-primary-300 hover:bg-primary-50 hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-primary-600 to-accent-600">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--foreground)]">
                  {t("earlyBirdTitle")}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                  {t("earlyBirdDescription")}
                </p>
              </div>
            </div>
          </button>

          {/* Schedule a Call option */}
          <button
            onClick={handleScheduleCall}
            className="w-full cursor-pointer rounded-xl border border-[var(--border)] p-5 text-left transition-all hover:border-accent-300 hover:bg-accent-50 hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-accent-500 to-accent-600">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--foreground)]">
                  {t("scheduleTitle")}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                  {t("scheduleDescription")}
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {mounted && modal ? createPortal(modal, document.body) : null}
      <ScheduleCallModal
        isOpen={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
      />
    </>
  );
}

export function GetStartedButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {children}
      </button>
      <GetStartedModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
