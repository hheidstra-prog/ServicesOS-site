"use client";

import { Check, Bot } from "lucide-react";
import { useTranslations } from "next-intl";

interface Message {
  role: "user" | "assistant";
  content: string;
  checkmarks?: string[];
}

function ChatBubble({ message }: { message: Message }) {
  return (
    <div className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
      {message.role === "assistant" && (
        <div className="mr-2 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-accent-100">
          <Bot className="h-3.5 w-3.5 text-primary-600" />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
          message.role === "user"
            ? "bg-primary-600 text-white"
            : "bg-[var(--muted)] text-[var(--foreground)]"
        }`}
      >
        <p>{message.content}</p>
        {message.checkmarks && message.checkmarks.length > 0 && (
          <div className="mt-2 space-y-1">
            {message.checkmarks.map((check, i) => (
              <div key={i} className="flex items-center gap-1.5 text-accent-600">
                <Check className="h-3 w-3 shrink-0" />
                <span className="text-[11px]">{check}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function AiChatMockup() {
  const t = useTranslations("featuresPage.aiAssistant.chat");

  const messages: Message[] = [
    { role: "user", content: t("user1") },
    {
      role: "assistant",
      content: t("assistant1"),
      checkmarks: [t("check1"), t("check2"), t("check3")],
    },
    { role: "user", content: t("user2") },
    { role: "assistant", content: t("assistant2") },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--muted)] px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-accent-100">
            <Bot className="h-4 w-4 text-primary-600" />
          </div>
          <div>
            <span className="text-sm font-medium text-[var(--foreground)]">{t("title")}</span>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              <span className="text-[10px] text-[var(--muted-foreground)]">{t("status")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-3 p-4">
        {messages.map((message, index) => (
          <ChatBubble key={index} message={message} />
        ))}
      </div>
    </div>
  );
}
