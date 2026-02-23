"use client";

import { useTranslations } from "next-intl";
import { PenTool, Sparkles, Calendar, Search } from "lucide-react";

export function BlogEditorMockup() {
  const t = useTranslations("featuresPage.blog.mockup");

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--muted)] px-5 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-accent-100">
            <PenTool className="h-4 w-4 text-primary-600" />
          </div>
          <span className="text-sm font-medium text-[var(--foreground)]">
            {t("editorLabel")}
          </span>
        </div>
        <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-medium text-amber-600 border border-amber-100">
          {t("statusDraft")}
        </span>
      </div>

      <div className="p-4 space-y-4">
        {/* Title */}
        <div>
          <h3 className="text-[15px] font-bold leading-tight text-[var(--foreground)]">
            {t("title")}
          </h3>
          <p className="mt-1 text-[10px] text-[var(--muted-foreground)]">
            {t("meta")}
          </p>
        </div>

        {/* Content preview */}
        <div className="rounded-lg border border-[var(--border)] p-3">
          <p className="text-[11px] leading-relaxed text-[var(--muted-foreground)]">
            {t("paragraph")}
          </p>
        </div>

        {/* AI suggestion */}
        <div className="rounded-lg border border-dashed border-accent-300 bg-accent-50/50 p-3">
          <div className="flex items-center gap-1.5 mb-2">
            <Sparkles className="h-3 w-3 text-accent-500" />
            <span className="text-[10px] font-semibold text-accent-700">
              {t("aiSuggestion")}
            </span>
          </div>
          <p className="text-[11px] text-[var(--foreground)]">
            {t("suggestionText")}
          </p>
          <div className="mt-2 flex gap-2">
            <button className="rounded-md bg-accent-600 px-3 py-1 text-[10px] font-medium text-white">
              {t("acceptBtn")}
            </button>
            <button className="rounded-md border border-[var(--border)] px-3 py-1 text-[10px] font-medium text-[var(--muted-foreground)]">
              {t("dismissBtn")}
            </button>
          </div>
        </div>

        {/* SEO metadata */}
        <div className="rounded-lg bg-[var(--muted)] p-3">
          <div className="flex items-center gap-1.5 mb-2">
            <Search className="h-3 w-3 text-primary-500" />
            <span className="text-[10px] font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
              {t("seoTitle")}
            </span>
          </div>
          <p className="text-[11px] font-medium text-primary-600">
            {t("seoMetaTitle")}
          </p>
          <p className="mt-0.5 text-[10px] text-[var(--muted-foreground)]">
            {t("seoDesc")}
          </p>
        </div>

        {/* Schedule */}
        <div className="flex items-center justify-between rounded-lg border border-[var(--border)] px-3 py-2.5">
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-primary-500" />
            <span className="text-[11px] font-medium text-[var(--muted-foreground)]">
              {t("scheduleLabel")}
            </span>
          </div>
          <span className="text-[11px] font-semibold text-[var(--foreground)]">
            {t("scheduleValue")}
          </span>
        </div>
      </div>
    </div>
  );
}
