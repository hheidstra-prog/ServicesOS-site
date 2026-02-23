"use client";

import { useTranslations } from "next-intl";
import { Globe, MessageSquare, Loader2, Sparkles, Layers, FolderOpen, MessageCircle } from "lucide-react";

export function WebsiteBuilderMockup() {
  const t = useTranslations("featuresPage.websiteBuilder.mockup");

  return (
    <div className="space-y-3">
      {/* Chat prompt */}
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-lg">
        <div className="flex items-center gap-2.5 border-b border-[var(--border)] bg-[var(--muted)] px-4 py-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-accent-100">
            <Globe className="h-4 w-4 text-primary-600" />
          </div>
          <span className="text-sm font-medium text-[var(--foreground)]">
            {t("chatLabel")}
          </span>
        </div>

        {/* User message */}
        <div className="p-3">
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl bg-primary-600 px-3.5 py-2.5 text-[12px] leading-relaxed text-white">
              {t("userMessage")}
            </div>
          </div>

          {/* Generating indicator */}
          <div className="mt-3 flex items-center gap-2">
            <Loader2 className="h-3.5 w-3.5 animate-spin text-primary-500" />
            <span className="text-[11px] font-medium text-primary-600">
              {t("generating")}
            </span>
            <span className="text-[10px] text-[var(--muted-foreground)]">
              {t("progress")}
            </span>
          </div>
        </div>
      </div>

      {/* Website preview */}
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-lg">
        <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--muted)] px-4 py-2">
          <span className="text-[10px] font-medium text-[var(--muted-foreground)]">
            {t("previewLabel")}
          </span>
          {/* Browser dots */}
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-red-300" />
            <span className="h-2 w-2 rounded-full bg-yellow-300" />
            <span className="h-2 w-2 rounded-full bg-green-300" />
          </div>
        </div>

        {/* Mini website */}
        <div className="p-3">
          {/* Nav */}
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[11px] font-bold text-[var(--foreground)]">
              {t("pageTitle")}
            </span>
            <div className="flex gap-3">
              {(["nav1", "nav2", "nav3", "nav4"] as const).map((key) => (
                <span
                  key={key}
                  className="text-[9px] text-[var(--muted-foreground)]"
                >
                  {t(key)}
                </span>
              ))}
            </div>
          </div>

          {/* Hero */}
          <div className="rounded-lg bg-gradient-to-br from-gray-900 to-gray-700 px-4 py-5 text-center">
            <p className="text-[13px] font-bold text-white">
              {t("pageTagline")}
            </p>
            <div className="mx-auto mt-2 w-fit rounded-full bg-white px-3 py-1 text-[9px] font-medium text-gray-900">
              {t("heroBtn")}
            </div>
          </div>

          {/* Section blocks */}
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {([
              { key: "section1" as const, icon: Layers },
              { key: "section2" as const, icon: FolderOpen },
              { key: "section3" as const, icon: MessageCircle },
            ]).map(({ key, icon: Icon }) => (
              <div
                key={key}
                className="rounded bg-[var(--muted)] px-2 py-2.5 text-center"
              >
                <Icon className="mx-auto mb-1 h-4 w-4 text-primary-300" />
                <span className="text-[8px] text-[var(--muted-foreground)]">
                  {t(key)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Edit prompt */}
        <div className="border-t border-[var(--border)] bg-[var(--muted)] px-4 py-2">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-3 w-3 shrink-0 text-primary-500" />
            <span className="text-[10px] italic text-[var(--muted-foreground)]">
              {t("editPrompt")}
            </span>
          </div>
          <div className="mt-1 flex items-center gap-1">
            <Sparkles className="h-2.5 w-2.5 text-accent-500" />
            <span className="text-[9px] font-medium text-accent-600">
              {t("editLabel")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
