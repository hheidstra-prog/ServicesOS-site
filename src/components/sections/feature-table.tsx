"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  FolderKanban,
  Calendar,
  Clock,
  FileText,
  FileSignature,
  Receipt,
  ShoppingBag,
  Globe,
  PenTool,
  FolderSearch,
  UserCircle,
  Bot,
  MessageCircle,
  Bell,
  Settings,
  ChevronDown,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Status = "done" | "comingSoon" | "planned";

interface Feature {
  key: string;
  status: Status;
}

interface Category {
  key: string;
  icon: LucideIcon;
  features: Feature[];
}

const categories: Category[] = [
  {
    key: "crm",
    icon: Users,
    features: [
      { key: "f_crm_clientDatabase", status: "done" },
      { key: "f_crm_pipelineTracking", status: "done" },
      { key: "f_crm_multipleContacts", status: "done" },
      { key: "f_crm_tagging", status: "done" },
      { key: "f_crm_notes", status: "done" },
      { key: "f_crm_activityTimeline", status: "done" },
      { key: "f_crm_detailPage", status: "done" },
      { key: "f_crm_leadCapture", status: "done" },
      { key: "f_crm_emailDedup", status: "done" },
      { key: "f_crm_portalAccess", status: "comingSoon" },
      { key: "f_crm_portalInvite", status: "comingSoon" },
      { key: "f_crm_importExport", status: "planned" },
      { key: "f_crm_merge", status: "planned" },
      { key: "f_crm_kanban", status: "planned" },
    ],
  },
  {
    key: "projectsTasks",
    icon: FolderKanban,
    features: [
      { key: "f_projects_management", status: "done" },
      { key: "f_projects_statusTracking", status: "done" },
      { key: "f_projects_budgets", status: "done" },
      { key: "f_projects_taskLists", status: "done" },
      { key: "f_projects_taskDueDates", status: "done" },
      { key: "f_projects_progressBar", status: "done" },
      { key: "f_projects_fileAttachments", status: "done" },
      { key: "f_projects_timeEntries", status: "done" },
      { key: "f_projects_portalToggle", status: "done" },
      { key: "f_projects_taskAssignments", status: "planned" },
      { key: "f_projects_taskComments", status: "planned" },
      { key: "f_projects_templates", status: "planned" },
      { key: "f_projects_gantt", status: "planned" },
    ],
  },
  {
    key: "booking",
    icon: Calendar,
    features: [
      { key: "f_booking_types", status: "done" },
      { key: "f_booking_publicPortal", status: "done" },
      { key: "f_booking_availability", status: "done" },
      { key: "f_booking_bufferTimes", status: "done" },
      { key: "f_booking_intakeQuestions", status: "done" },
      { key: "f_booking_publicPage", status: "done" },
      { key: "f_booking_portalFlow", status: "done" },
      { key: "f_booking_slotCalc", status: "done" },
      { key: "f_booking_calendar", status: "done" },
      { key: "f_booking_detailSheet", status: "done" },
      { key: "f_booking_confirmation", status: "done" },
      { key: "f_booking_locationTypes", status: "done" },
      { key: "f_booking_honeypot", status: "done" },
      { key: "f_booking_autoCreate", status: "done" },
      { key: "f_booking_locale", status: "done" },
      { key: "f_booking_googleSync", status: "comingSoon" },
      { key: "f_booking_outlookSync", status: "comingSoon" },
      { key: "f_booking_reminders", status: "planned" },
      { key: "f_booking_recurring", status: "planned" },
      { key: "f_booking_group", status: "planned" },
      { key: "f_booking_waitlist", status: "planned" },
    ],
  },
  {
    key: "timeTracking",
    icon: Clock,
    features: [
      { key: "f_time_logEntries", status: "done" },
      { key: "f_time_clientProject", status: "done" },
      { key: "f_time_billable", status: "done" },
      { key: "f_time_rateOverride", status: "done" },
      { key: "f_time_weeklyView", status: "done" },
      { key: "f_time_periodSummaries", status: "done" },
      { key: "f_time_convertInvoice", status: "done" },
      { key: "f_time_timer", status: "planned" },
      { key: "f_time_teamOverview", status: "planned" },
      { key: "f_time_approvalWorkflow", status: "planned" },
    ],
  },
  {
    key: "quotes",
    icon: FileText,
    features: [
      { key: "f_quotes_autoNumbered", status: "done" },
      { key: "f_quotes_lineItems", status: "done" },
      { key: "f_quotes_optionalItems", status: "done" },
      { key: "f_quotes_statusLifecycle", status: "done" },
      { key: "f_quotes_publicAccess", status: "done" },
      { key: "f_quotes_reminderTracking", status: "done" },
      { key: "f_quotes_convertContract", status: "done" },
      { key: "f_quotes_templates", status: "planned" },
      { key: "f_quotes_eSignature", status: "planned" },
      { key: "f_quotes_versioning", status: "planned" },
    ],
  },
  {
    key: "contracts",
    icon: FileSignature,
    features: [
      { key: "f_contracts_richText", status: "done" },
      { key: "f_contracts_autoNumbered", status: "done" },
      { key: "f_contracts_statusLifecycle", status: "done" },
      { key: "f_contracts_signatureCapture", status: "done" },
      { key: "f_contracts_publicSigning", status: "done" },
      { key: "f_contracts_quoteLink", status: "done" },
      { key: "f_contracts_templates", status: "planned" },
      { key: "f_contracts_multiParty", status: "planned" },
    ],
  },
  {
    key: "invoices",
    icon: Receipt,
    features: [
      { key: "f_invoices_autoNumbered", status: "done" },
      { key: "f_invoices_lineItems", status: "done" },
      { key: "f_invoices_partialPayments", status: "done" },
      { key: "f_invoices_creditNotes", status: "done" },
      { key: "f_invoices_statusLifecycle", status: "done" },
      { key: "f_invoices_publicView", status: "done" },
      { key: "f_invoices_stripe", status: "done" },
      { key: "f_invoices_paymentMethods", status: "done" },
      { key: "f_invoices_overdueDetection", status: "done" },
      { key: "f_invoices_reminderTracking", status: "done" },
      { key: "f_invoices_manualPayments", status: "done" },
      { key: "f_invoices_pdfGeneration", status: "comingSoon" },
      { key: "f_invoices_recurring", status: "planned" },
      { key: "f_invoices_multiCurrency", status: "planned" },
      { key: "f_invoices_accountingExport", status: "planned" },
      { key: "f_invoices_autoReminders", status: "planned" },
    ],
  },
  {
    key: "services",
    icon: ShoppingBag,
    features: [
      { key: "f_services_definitions", status: "done" },
      { key: "f_services_pricing", status: "done" },
      { key: "f_services_taxRate", status: "done" },
      { key: "f_services_activeToggle", status: "done" },
      { key: "f_services_templates", status: "done" },
      { key: "f_services_packages", status: "planned" },
    ],
  },
  {
    key: "websiteBuilder",
    icon: Globe,
    features: [
      { key: "f_website_aiGeneration", status: "done" },
      { key: "f_website_blockTypes", status: "done" },
      { key: "f_website_chatEditing", status: "done" },
      { key: "f_website_aiBlockCreation", status: "done" },
      { key: "f_website_designTokens", status: "done" },
      { key: "f_website_templates", status: "done" },
      { key: "f_website_colorModes", status: "done" },
      { key: "f_website_customDomains", status: "done" },
      { key: "f_website_navigation", status: "done" },
      { key: "f_website_seo", status: "done" },
      { key: "f_website_publishStatus", status: "done" },
      { key: "f_website_aiImageSearch", status: "done" },
      { key: "f_website_columnsBlock", status: "done" },
      { key: "f_website_contactForm", status: "done" },
      { key: "f_website_responsive", status: "done" },
      { key: "f_website_analytics", status: "done" },
      { key: "f_website_multiPage", status: "done" },
      { key: "f_website_headerFooter", status: "done" },
      { key: "f_website_customCss", status: "planned" },
      { key: "f_website_formBuilder", status: "planned" },
      { key: "f_website_blogBlock", status: "planned" },
      { key: "f_website_abTesting", status: "planned" },
      { key: "f_website_analyticsDashboard", status: "planned" },
    ],
  },
  {
    key: "blog",
    icon: PenTool,
    features: [
      { key: "f_blog_chatDriven", status: "done" },
      { key: "f_blog_aiGeneration", status: "done" },
      { key: "f_blog_richTextEditor", status: "done" },
      { key: "f_blog_aiTitleExcerpt", status: "done" },
      { key: "f_blog_aiSeoMetadata", status: "done" },
      { key: "f_blog_inlineAiEditing", status: "done" },
      { key: "f_blog_featuredImages", status: "done" },
      { key: "f_blog_taxonomy", status: "done" },
      { key: "f_blog_multiSite", status: "done" },
      { key: "f_blog_scheduling", status: "done" },
      { key: "f_blog_publicBlog", status: "done" },
      { key: "f_blog_toc", status: "done" },
      { key: "f_blog_relatedPosts", status: "done" },
      { key: "f_blog_bookingCta", status: "done" },
      { key: "f_blog_authorDropdown", status: "comingSoon" },
      { key: "f_blog_comments", status: "planned" },
      { key: "f_blog_rss", status: "planned" },
      { key: "f_blog_newsletter", status: "planned" },
      { key: "f_blog_socialPublish", status: "planned" },
    ],
  },
  {
    key: "fileManager",
    icon: FolderSearch,
    features: [
      { key: "f_fileManager_cloudinary", status: "done" },
      { key: "f_fileManager_aiAnalysis", status: "done" },
      { key: "f_fileManager_docExtraction", status: "done" },
      { key: "f_fileManager_semanticSearch", status: "done" },
      { key: "f_fileManager_chatInterface", status: "done" },
      { key: "f_fileManager_stockImages", status: "done" },
      { key: "f_fileManager_fileAssociation", status: "done" },
      { key: "f_fileManager_portalToggle", status: "done" },
      { key: "f_fileManager_folders", status: "done" },
      { key: "f_fileManager_mediaPicker", status: "done" },
      { key: "f_fileManager_versioning", status: "planned" },
      { key: "f_fileManager_bulkOps", status: "planned" },
    ],
  },
  {
    key: "portal",
    icon: UserCircle,
    features: [
      { key: "f_portal_magicLink", status: "done" },
      { key: "f_portal_dashboard", status: "done" },
      { key: "f_portal_projectsList", status: "done" },
      { key: "f_portal_projectDetail", status: "done" },
      { key: "f_portal_invoices", status: "done" },
      { key: "f_portal_files", status: "done" },
      { key: "f_portal_bookings", status: "done" },
      { key: "f_portal_bookingFlow", status: "done" },
      { key: "f_portal_themeToggle", status: "done" },
      { key: "f_portal_locale", status: "done" },
      { key: "f_portal_nav", status: "done" },
      { key: "f_portal_emailDelivery", status: "comingSoon" },
      { key: "f_portal_accessControl", status: "comingSoon" },
      { key: "f_portal_pdfDownload", status: "comingSoon" },
      { key: "f_portal_rateLimiting", status: "comingSoon" },
      { key: "f_portal_messaging", status: "comingSoon" },
      { key: "f_portal_docSigning", status: "planned" },
      { key: "f_portal_payment", status: "planned" },
      { key: "f_portal_onboarding", status: "planned" },
    ],
  },
  {
    key: "aiAssistant",
    icon: Bot,
    features: [
      { key: "f_ai_chat", status: "done" },
      { key: "f_ai_toolUse", status: "done" },
      { key: "f_ai_businessContext", status: "done" },
      { key: "f_ai_localeAware", status: "done" },
      { key: "f_ai_iterations", status: "done" },
      { key: "f_ai_history", status: "done" },
      { key: "f_ai_suggestedPrompts", status: "done" },
      { key: "f_ai_multiEntity", status: "planned" },
      { key: "f_ai_scheduled", status: "planned" },
      { key: "f_ai_voice", status: "planned" },
    ],
  },
  {
    key: "chat",
    icon: MessageCircle,
    features: [
      { key: "f_chat_clientFacing", status: "comingSoon" },
      { key: "f_chat_portal", status: "comingSoon" },
      { key: "f_chat_notifications", status: "planned" },
      { key: "f_chat_fileSharing", status: "planned" },
      { key: "f_chat_history", status: "planned" },
      { key: "f_chat_chatbot", status: "planned" },
      { key: "f_chat_channels", status: "planned" },
    ],
  },
  {
    key: "notifications",
    icon: Bell,
    features: [
      { key: "f_notifications_center", status: "done" },
      { key: "f_notifications_booking", status: "done" },
      { key: "f_notifications_contactForm", status: "done" },
      { key: "f_notifications_readUnread", status: "done" },
      { key: "f_notifications_linkSource", status: "done" },
      { key: "f_notifications_email", status: "comingSoon" },
      { key: "f_notifications_push", status: "planned" },
      { key: "f_notifications_preferences", status: "planned" },
    ],
  },
  {
    key: "organization",
    icon: Settings,
    features: [
      { key: "f_org_multiTenant", status: "done" },
      { key: "f_org_businessProfile", status: "done" },
      { key: "f_org_branding", status: "done" },
      { key: "f_org_legalTax", status: "done" },
      { key: "f_org_roles", status: "done" },
      { key: "f_org_defaults", status: "done" },
      { key: "f_org_timezone", status: "done" },
      { key: "f_org_clerkAuth", status: "done" },
      { key: "f_org_stripe", status: "done" },
      { key: "f_org_onboarding", status: "done" },
      { key: "f_org_auditLog", status: "comingSoon" },
      { key: "f_org_teamManagement", status: "planned" },
      { key: "f_org_whiteLabel", status: "planned" },
      { key: "f_org_apiWebhooks", status: "planned" },
      { key: "f_org_mobileApp", status: "planned" },
    ],
  },
];

const totalFeatures = categories.reduce(
  (sum, cat) => sum + cat.features.length,
  0
);
const shippedFeatures = categories.reduce(
  (sum, cat) =>
    sum + cat.features.filter((f) => f.status === "done").length,
  0
);

const statusColors: Record<Status, string> = {
  done: "bg-emerald-100 text-emerald-700",
  comingSoon: "bg-amber-100 text-amber-700",
  planned: "bg-gray-100 text-gray-500",
};

function CategoryAccordion({
  category,
  index,
}: {
  category: Category;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("featuresPage.featureTable");
  const Icon = category.icon;
  const doneCount = category.features.filter(
    (f) => f.status === "done"
  ).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-gray-50/60"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
          <Icon className="h-4.5 w-4.5" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] font-semibold text-[var(--foreground)]">
            {t(category.key)}
          </h3>
          <p className="text-xs text-[var(--muted-foreground)]">
            {doneCount}/{category.features.length}{" "}
            {t("statsShipped")}
          </p>
        </div>
        {/* Mini progress bar */}
        <div className="hidden sm:block w-24">
          <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-emerald-400 transition-all"
              style={{
                width: `${(doneCount / category.features.length) * 100}%`,
              }}
            />
          </div>
        </div>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-[var(--muted-foreground)] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-[var(--border)] px-5 py-3">
              <ul className="space-y-1">
                {category.features.map((feature) => (
                  <li
                    key={feature.key}
                    className="flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 text-sm"
                  >
                    <span className="flex items-center gap-2 text-[var(--foreground)]">
                      {feature.status === "done" && (
                        <Check className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                      )}
                      {feature.status !== "done" && (
                        <span className="h-3.5 w-3.5 shrink-0" />
                      )}
                      {t(feature.key)}
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                        statusColors[feature.status]
                      }`}
                    >
                      {t(feature.status)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FeatureTable() {
  const t = useTranslations("featuresPage.featureTable");

  return (
    <section id="overview" className="section-padding">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            {t("headline")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--muted-foreground)]">
            {t("subtitle")}
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-white px-5 py-2 text-sm shadow-sm">
            <span className="font-semibold text-[var(--foreground)]">
              {totalFeatures} {t("statsFeatures")}
            </span>
            <span className="h-4 w-px bg-[var(--border)]" />
            <span className="text-emerald-600 font-medium">
              {shippedFeatures} {t("statsShipped")}
            </span>
          </div>
        </motion.div>

        <div className="mt-12 space-y-3">
          {categories.map((category, index) => (
            <CategoryAccordion
              key={category.key}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
