"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

interface Message {
  role: "user" | "assistant";
  content: string;
  checkmarks?: string[];
  isSuccess?: boolean;
}

function ChatBubble({ message, activeLabel }: { message: Message; activeLabel: string }) {
  return (
    <div className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`}>
      <div
        className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm leading-relaxed ${
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
        {message.isSuccess && (
          <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent-100 px-2.5 py-0.5 text-[11px] font-medium text-accent-700">
            <Check className="h-3 w-3" />
            {activeLabel}
          </div>
        )}
      </div>
    </div>
  );
}

export function ChatAnimationCarousel() {
  const t = useTranslations("hero.carousel");

  const variants = [
    {
      title: t("variants.briefing.title"),
      messages: [
        { role: "user" as const, content: t("variants.briefing.user1") },
        {
          role: "assistant" as const,
          content: t("variants.briefing.assistant1"),
          checkmarks: [
            t("variants.briefing.check1"),
            t("variants.briefing.check2"),
            t("variants.briefing.check3"),
            t("variants.briefing.check4"),
          ],
        },
        { role: "user" as const, content: t("variants.briefing.user2") },
        { role: "assistant" as const, content: t("variants.briefing.assistant2"), isSuccess: true },
      ],
    },
    {
      title: t("variants.onboarding.title"),
      messages: [
        { role: "user" as const, content: t("variants.onboarding.user1") },
        {
          role: "assistant" as const,
          content: t("variants.onboarding.assistant1"),
          checkmarks: [
            t("variants.onboarding.check1"),
            t("variants.onboarding.check2"),
            t("variants.onboarding.check3"),
            t("variants.onboarding.check4"),
          ],
        },
        { role: "user" as const, content: t("variants.onboarding.user2") },
        { role: "assistant" as const, content: t("variants.onboarding.assistant2"), isSuccess: true },
      ],
    },
    {
      title: t("variants.invoicing.title"),
      messages: [
        { role: "user" as const, content: t("variants.invoicing.user1") },
        {
          role: "assistant" as const,
          content: t("variants.invoicing.assistant1"),
          checkmarks: [
            t("variants.invoicing.check1"),
            t("variants.invoicing.check2"),
            t("variants.invoicing.check3"),
          ],
        },
        { role: "user" as const, content: t("variants.invoicing.user2") },
        { role: "assistant" as const, content: t("variants.invoicing.assistant2"), isSuccess: true },
      ],
    },
    {
      title: t("variants.blog.title"),
      messages: [
        { role: "user" as const, content: t("variants.blog.user1") },
        {
          role: "assistant" as const,
          content: t("variants.blog.assistant1"),
          checkmarks: [
            t("variants.blog.check1"),
            t("variants.blog.check2"),
            t("variants.blog.check3"),
          ],
        },
        { role: "user" as const, content: t("variants.blog.user2") },
        { role: "assistant" as const, content: t("variants.blog.assistant2"), isSuccess: true },
      ],
    },
  ];

  const [activeVariant, setActiveVariant] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout[]>([]);
  const variantsRef = useRef(variants);
  variantsRef.current = variants;

  const clearTimers = useCallback(() => {
    timerRef.current.forEach(clearTimeout);
    timerRef.current = [];
  }, []);

  const runAnimation = useCallback((variantIndex: number) => {
    clearTimers();
    setVisibleMessages(0);

    const msgs = variantsRef.current[variantIndex].messages;
    msgs.forEach((_, i) => {
      const timer = setTimeout(() => {
        setVisibleMessages(i + 1);
      }, 600 + i * 2500);
      timerRef.current.push(timer);
    });

    const advanceTimer = setTimeout(() => {
      if (!isPaused) {
        setActiveVariant((prev) => (prev + 1) % variantsRef.current.length);
      }
    }, 600 + msgs.length * 2500 + 4000);
    timerRef.current.push(advanceTimer);
  }, [clearTimers, isPaused]);

  useEffect(() => {
    runAnimation(activeVariant);
    return clearTimers;
  }, [activeVariant, runAnimation, clearTimers]);

  const handleDotClick = (index: number) => {
    setIsPaused(true);
    setActiveVariant(index);
    setTimeout(() => setIsPaused(false), 15000);
  };

  const currentVariant = variants[activeVariant];

  return (
    <div
      className="relative w-full max-w-[540px] mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Glow */}
      <div
        className="absolute -inset-6 rounded-3xl opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(30, 58, 95, 0.4) 0%, rgba(20, 184, 166, 0.3) 100%)"
        }}
      />

      <div className="relative rounded-2xl border border-[var(--border)] bg-white shadow-xl shadow-primary-600/5 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--muted)] px-4 sm:px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-gray-300" />
              <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-gray-300" />
              <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-gray-300" />
            </div>
            <span className="ml-1 text-xs sm:text-sm font-medium text-[var(--foreground)]">
              {currentVariant.title}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-[var(--muted-foreground)]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            <span>{t("online")}</span>
          </div>
        </div>

        {/* Chat area */}
        <div className="p-4 sm:p-5 md:p-6 min-h-[420px] sm:min-h-[480px]">
          <div className="space-y-3 sm:space-y-4">
            {currentVariant.messages.slice(0, visibleMessages).map((message, index) => (
              <ChatBubble key={`${activeVariant}-${index}`} message={message} activeLabel={t("active")} />
            ))}
          </div>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 pb-4">
          {variants.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeVariant
                  ? "w-6 bg-primary-600"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Variant ${i + 1}`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
