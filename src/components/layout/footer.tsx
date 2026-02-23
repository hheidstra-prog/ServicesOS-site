import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const columns = [
    {
      title: t("product"),
      links: [
        { label: t("features"), href: `/${locale}/features` },
        { label: t("pricing"), href: `/${locale}/pricing` },
        { label: t("roadmap"), href: "#" },
        { label: t("changelog"), href: "#" },
      ],
    },
    {
      title: t("company"),
      links: [
        { label: t("about"), href: `/${locale}/about` },
        { label: t("blog"), href: "#" },
        { label: t("contact"), href: `/${locale}/contact` },
        {
          label: `${t("careers")} (${t("comingSoon")})`,
          href: "#",
          disabled: true,
        },
      ],
    },
    {
      title: t("resources"),
      links: [
        { label: t("faq"), href: `/${locale}/faq` },
        { label: t("helpCenter"), href: "#" },
        { label: t("apiDocs"), href: "#" },
        { label: t("statusPage"), href: "#" },
      ],
    },
    {
      title: t("legal"),
      links: [
        { label: t("privacy"), href: `/${locale}/legal/privacy` },
        { label: t("terms"), href: `/${locale}/legal/terms` },
        { label: t("gdpr"), href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--muted)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Columns */}
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4 lg:py-16">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-[var(--foreground)]">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`text-sm transition-colors ${
                        link.disabled
                          ? "cursor-default text-[var(--muted-foreground)]/50"
                          : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] py-6 md:flex-row">
          <div className="flex flex-col items-center gap-1 text-sm text-[var(--muted-foreground)] md:items-start">
            <span>{t("copyright")}</span>
            <span>{t("madeWith")}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
              aria-label="X (Twitter)"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
