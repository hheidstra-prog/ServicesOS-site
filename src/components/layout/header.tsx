"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./language-switcher";
import { GetStartedButton } from "@/components/modals/get-started-modal";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: `/${locale}/features`, label: t("features") },
    { href: `/${locale}/pricing`, label: t("pricing") },
    { href: `/${locale}/blog`, label: t("blog") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <Image
            src="/images/servible.png"
            alt="Servible"
            width={112}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <GetStartedButton
            className="cursor-pointer text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            {t("signIn")}
          </GetStartedButton>
          <GetStartedButton
            className="inline-flex h-9 cursor-pointer items-center rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-4 text-sm font-medium text-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            {t("startTrial")}
          </GetStartedButton>
        </div>

        {/* Mobile menu button */}
        <button
          className="cursor-pointer p-2 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-[var(--border)] bg-white transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-96" : "max-h-0 border-t-0"
        )}
      >
        <div className="space-y-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:bg-primary-50 hover:text-[var(--foreground)]"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 border-t border-[var(--border)] pt-4">
            <LanguageSwitcher />
            <GetStartedButton
              className="cursor-pointer text-sm font-medium text-[var(--muted-foreground)]"
            >
              {t("signIn")}
            </GetStartedButton>
          </div>
          <GetStartedButton
            className="mt-2 block cursor-pointer rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-4 py-2.5 text-center text-sm font-medium text-white"
          >
            {t("startTrial")}
          </GetStartedButton>
        </div>
      </div>
    </header>
  );
}
