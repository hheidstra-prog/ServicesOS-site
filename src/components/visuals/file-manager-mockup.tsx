"use client";

import { useTranslations } from "next-intl";
import {
  FolderSearch,
  Bot,
  Check,
  ImagePlus,
} from "lucide-react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  checkmarks?: string[];
  children?: React.ReactNode;
}

function ChatMessage({ role, content, checkmarks, children }: ChatMessageProps) {
  return (
    <div className={`flex ${role === "user" ? "justify-end" : "justify-start"}`}>
      {role === "assistant" && (
        <div className="mr-2 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-accent-100">
          <Bot className="h-3.5 w-3.5 text-primary-600" />
        </div>
      )}
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[12px] leading-relaxed ${
          role === "user"
            ? "bg-primary-600 text-white"
            : "bg-[var(--muted)] text-[var(--foreground)]"
        }`}
      >
        <p>{content}</p>
        {checkmarks && checkmarks.length > 0 && (
          <div className="mt-2 space-y-1">
            {checkmarks.map((check, i) => (
              <div key={i} className="flex items-center gap-1.5 text-accent-600">
                <Check className="h-3 w-3 shrink-0" />
                <span className="text-[11px]">{check}</span>
              </div>
            ))}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

function ImageResult({
  label,
  meta,
  useLabel,
  imageSrc,
}: {
  label: string;
  meta: string;
  useLabel: string;
  imageSrc: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-[var(--border)] bg-white p-2 mt-1.5">
      <img
        src={imageSrc}
        alt={label}
        className="h-10 w-10 shrink-0 rounded-md object-cover"
      />
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-medium text-[var(--foreground)] truncate">
          {label}
        </p>
        <p className="text-[9px] text-[var(--muted-foreground)]">{meta}</p>
      </div>
      <button className="shrink-0 rounded-md bg-primary-600 px-2.5 py-1 text-[9px] font-medium text-white">
        {useLabel}
      </button>
    </div>
  );
}

export function FileManagerMockup() {
  const t = useTranslations("featuresPage.fileManager.mockup");

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-2.5 border-b border-[var(--border)] bg-[var(--muted)] px-4 py-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-accent-100">
          <FolderSearch className="h-4 w-4 text-primary-600" />
        </div>
        <span className="text-sm font-medium text-[var(--foreground)]">
          {t("title")}
        </span>
      </div>

      {/* Chat */}
      <div className="space-y-3 p-4">
        {/* Archive flow */}
        <ChatMessage role="user" content={t("user1")} />
        <ChatMessage
          role="assistant"
          content={t("assistant1")}
          checkmarks={[t("check1"), t("check2"), t("check3")]}
        />

        {/* Search flow */}
        <ChatMessage role="user" content={t("user2")} />
        <ChatMessage role="assistant" content={t("assistant2")}>
          <div className="mt-2">
            <ImageResult
              label={t("result1Label")}
              meta={t("result1Meta")}
              useLabel={t("useButton")}
              imageSrc="/images/bus-women.jpg"
            />
            <ImageResult
              label={t("result2Label")}
              meta={t("result2Meta")}
              useLabel={t("useButton")}
              imageSrc="/images/team.jpg"
            />
          </div>
        </ChatMessage>

        {/* Stock fallback */}
        <div className="rounded-lg border border-dashed border-primary-200 bg-primary-50/50 p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-medium text-[var(--foreground)]">
                {t("stockLabel")}
              </p>
              <p className="text-[9px] text-[var(--muted-foreground)]">
                {t("stockResults")}
              </p>
            </div>
            <button className="flex items-center gap-1.5 rounded-md bg-primary-600 px-3 py-1.5 text-[10px] font-medium text-white">
              <ImagePlus className="h-3 w-3" />
              {t("stockButton")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
