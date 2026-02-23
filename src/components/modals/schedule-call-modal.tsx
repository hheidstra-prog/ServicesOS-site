"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ScheduleCallModal({ isOpen, onClose }: ScheduleCallModalProps) {
  const t = useTranslations("scheduleCall");
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setKey((prev) => prev + 1);
    }
  }, [isOpen]);

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

        {/* HubSpot Meetings iframe */}
        <div className="bg-white">
          <iframe
            key={key}
            src="https://meetings-eu1.hubspot.com/hylke-heidstra?embed=true&product=ServiceOS"
            style={{ width: "100%", minHeight: "690px", border: "none" }}
            title={t("title")}
          />
        </div>
      </div>
    </div>
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
      <button
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {children || t("button")}
      </button>
      <ScheduleCallModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
