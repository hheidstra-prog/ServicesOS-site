"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2, CreditCard, FileText, Download } from "lucide-react";

export function TimeInvoiceMockup() {
  const t = useTranslations("featuresPage.invoicing.mockup");

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-lg">
      {/* Invoice header */}
      <div className="border-b border-[var(--border)] bg-[var(--muted)] px-5 py-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-100 to-accent-100">
              <FileText className="h-4.5 w-4.5 text-primary-600" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[var(--foreground)]">
                {t("invoiceNumber")}
              </h3>
              <p className="text-[11px] text-[var(--muted-foreground)]">
                {t("invoiceClient")} · {t("invoiceDate")}
              </p>
            </div>
          </div>
          <span className="rounded-full bg-accent-100 px-2.5 py-0.5 text-[11px] font-medium text-accent-700">
            {t("invoiceStatus")}
          </span>
        </div>
      </div>

      {/* Line items */}
      <div className="px-5 py-3">
        <table className="w-full">
          <thead>
            <tr className="text-[9px] font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
              <th className="text-left pb-2">{t("colDescription")}</th>
              <th className="text-right pb-2 w-12">{t("colHours")}</th>
              <th className="text-right pb-2 w-16">{t("colRate")}</th>
              <th className="text-right pb-2 w-16">{t("colAmount")}</th>
            </tr>
          </thead>
          <tbody className="text-[11px]">
            <tr className="border-t border-[var(--border)]">
              <td className="py-2 text-[var(--foreground)]">{t("line1Desc")}</td>
              <td className="py-2 text-right text-[var(--muted-foreground)] tabular-nums">
                {t("line1Hours")}
              </td>
              <td className="py-2 text-right text-[var(--muted-foreground)] tabular-nums">
                {t("line1Rate")}
              </td>
              <td className="py-2 text-right font-medium text-[var(--foreground)] tabular-nums">
                {t("line1Amount")}
              </td>
            </tr>
            <tr className="border-t border-[var(--border)]">
              <td className="py-2 text-[var(--foreground)]">{t("line2Desc")}</td>
              <td className="py-2 text-right text-[var(--muted-foreground)] tabular-nums">
                {t("line2Hours")}
              </td>
              <td className="py-2 text-right text-[var(--muted-foreground)] tabular-nums">
                {t("line2Rate")}
              </td>
              <td className="py-2 text-right font-medium text-[var(--foreground)] tabular-nums">
                {t("line2Amount")}
              </td>
            </tr>
            <tr className="border-t border-[var(--border)]">
              <td className="py-2 text-[var(--foreground)]">{t("line3Desc")}</td>
              <td className="py-2 text-right text-[var(--muted-foreground)] tabular-nums">
                {t("line3Hours")}
              </td>
              <td className="py-2 text-right text-[var(--muted-foreground)] tabular-nums">
                {t("line3Rate")}
              </td>
              <td className="py-2 text-right font-medium text-[var(--foreground)] tabular-nums">
                {t("line3Amount")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="border-t border-[var(--border)] px-5 py-3 space-y-1">
        <div className="flex justify-between text-[11px]">
          <span className="text-[var(--muted-foreground)]">
            {t("subtotalLabel")}
          </span>
          <span className="font-medium text-[var(--foreground)] tabular-nums">
            {t("subtotal")}
          </span>
        </div>
        <div className="flex justify-between text-[11px]">
          <span className="text-[var(--muted-foreground)]">
            {t("taxLabel")}
          </span>
          <span className="font-medium text-[var(--foreground)] tabular-nums">
            {t("tax")}
          </span>
        </div>
        <div className="flex justify-between text-[13px] font-bold pt-1 border-t border-[var(--border)]">
          <span className="text-[var(--foreground)]">{t("totalLabel")}</span>
          <span className="text-[var(--foreground)] tabular-nums">
            {t("total")}
          </span>
        </div>
      </div>

      {/* Payment info footer */}
      <div className="border-t border-[var(--border)] bg-accent-50 px-5 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-accent-600" />
            <div>
              <p className="text-[11px] font-semibold text-accent-700">
                {t("paidLabel")}
              </p>
              <div className="flex items-center gap-1 text-[9px] text-[var(--muted-foreground)]">
                <CreditCard className="h-2.5 w-2.5" />
                {t("paymentMethod")} · {t("paidDate")}
              </div>
            </div>
          </div>
          <button className="flex items-center gap-1 rounded-lg border border-[var(--border)] bg-white px-2.5 py-1.5 text-[10px] font-medium text-[var(--muted-foreground)]">
            <Download className="h-3 w-3" />
            PDF
          </button>
        </div>
      </div>
    </div>
  );
}
