"use client";

import { useTranslations } from "next-intl";
import { FileText, Eye, Check, Square, CheckSquare } from "lucide-react";

function LineItem({
  name,
  qty,
  price,
  optional,
  checked = true,
}: {
  name: string;
  qty: string;
  price: string;
  optional?: string;
  checked?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <div className="flex items-center gap-2">
        {optional ? (
          checked ? (
            <CheckSquare className="h-3 w-3 shrink-0 text-primary-600" />
          ) : (
            <Square className="h-3 w-3 shrink-0 text-gray-300" />
          )
        ) : (
          <div className="w-3" />
        )}
        <div>
          <span className="text-[11px] text-[var(--foreground)]">{name}</span>
          {optional && (
            <span className="ml-1.5 rounded bg-amber-50 px-1 py-0.5 text-[8px] font-medium text-amber-600 border border-amber-100">
              {optional}
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-4 text-[11px]">
        <span className="text-[var(--muted-foreground)]">×{qty}</span>
        <span className={`font-medium ${checked ? "text-[var(--foreground)]" : "text-gray-300 line-through"}`}>
          {price}
        </span>
      </div>
    </div>
  );
}

export function QuoteMockup() {
  const t = useTranslations("featuresPage.quotes.mockup");

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--muted)] px-5 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-accent-100">
            <FileText className="h-4 w-4 text-primary-600" />
          </div>
          <span className="text-sm font-medium text-[var(--foreground)]">
            {t("quoteNumber")}
          </span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-0.5 border border-blue-100">
          <Eye className="h-3 w-3 text-blue-500" />
          <span className="text-[10px] font-medium text-blue-600">
            {t("status")}
          </span>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Client + dates */}
        <div className="grid grid-cols-3 gap-3">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              {t("clientLabel")}
            </p>
            <p className="text-[12px] font-medium text-[var(--foreground)]">
              {t("client")}
            </p>
            <p className="text-[10px] text-[var(--muted-foreground)]">
              {t("clientContact")}
            </p>
          </div>
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              {t("dateLabel")}
            </p>
            <p className="text-[11px] text-[var(--foreground)]">{t("date")}</p>
          </div>
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              {t("expiresLabel")}
            </p>
            <p className="text-[11px] text-[var(--foreground)]">
              {t("expires")}
            </p>
          </div>
        </div>

        {/* Line items */}
        <div className="rounded-lg border border-[var(--border)] divide-y divide-[var(--border)]">
          <div className="px-3 py-1">
            <LineItem
              name={t("item1")}
              qty={t("item1Qty")}
              price={t("item1Price")}
            />
          </div>
          <div className="px-3 py-1">
            <LineItem
              name={t("item2")}
              qty={t("item2Qty")}
              price={t("item2Price")}
            />
          </div>
          <div className="px-3 py-1 bg-amber-50/30">
            <LineItem
              name={t("item3")}
              qty={t("item3Qty")}
              price={t("item3Price")}
              optional={t("item3Optional")}
              checked={false}
            />
          </div>
        </div>

        {/* Totals */}
        <div className="space-y-1 text-right">
          <div className="flex justify-end gap-8 text-[11px]">
            <span className="text-[var(--muted-foreground)]">
              {t("subtotalLabel")}
            </span>
            <span className="w-16 text-[var(--foreground)]">
              {t("subtotal")}
            </span>
          </div>
          <div className="flex justify-end gap-8 text-[11px]">
            <span className="text-[var(--muted-foreground)]">
              {t("taxLabel")}
            </span>
            <span className="w-16 text-[var(--foreground)]">{t("tax")}</span>
          </div>
          <div className="flex justify-end gap-8 border-t border-[var(--border)] pt-1 text-[12px] font-bold">
            <span className="text-[var(--foreground)]">
              {t("totalLabel")}
            </span>
            <span className="w-16 text-primary-600">{t("total")}</span>
          </div>
        </div>

        {/* Signature */}
        <div className="rounded-lg border border-dashed border-accent-300 bg-accent-50/50 px-4 py-3">
          <p className="text-[9px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-1.5">
            {t("signatureLabel")}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-100">
              <Check className="h-3 w-3 text-accent-600" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-[var(--foreground)] italic font-serif">
                {t("signatureName")}
              </p>
              <p className="text-[9px] text-[var(--muted-foreground)]">
                {t("signatureDate")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
