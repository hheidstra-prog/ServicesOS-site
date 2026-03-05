"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    if (routing.locales.includes(segments[1] as "nl" | "en")) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    // Blog detail pages have locale-specific slugs, so redirect to blog index
    if (segments[2] === "blog" && segments[3]) {
      router.push(`/${newLocale}/blog`);
      return;
    }

    router.push(segments.join("/"));
  }

  return (
    <div className="flex items-center gap-1 rounded-lg border border-[var(--border)] bg-white p-0.5 text-sm">
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          className={cn(
            "cursor-pointer rounded-md px-2.5 py-1 font-medium uppercase transition-colors",
            locale === l
              ? "bg-primary-600 text-white"
              : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
