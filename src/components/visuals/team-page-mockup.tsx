"use client";

import { useTranslations } from "next-intl";
import { Bot, Mail, UserPlus } from "lucide-react";

function MemberCard({
  initials,
  name,
  email,
  role,
  roleBg,
  roleText,
}: {
  initials: string;
  name: string;
  email: string;
  role: string;
  roleBg: string;
  roleText: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-4 py-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-600">
        {initials}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="text-[12px] font-semibold text-[var(--foreground)] truncate">
            {name}
          </p>
          <span
            className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-medium ${roleBg} ${roleText}`}
          >
            {role}
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <Mail className="h-2.5 w-2.5 text-[var(--muted-foreground)]" />
          <p className="text-[10px] text-[var(--muted-foreground)] truncate">
            {email}
          </p>
        </div>
      </div>
    </div>
  );
}

function AgentCard({
  name,
  role,
  statusLabel,
  active,
}: {
  name: string;
  role: string;
  statusLabel: string;
  active: boolean;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-4 py-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-200 to-accent-200">
        <Bot className="h-4.5 w-4.5 text-primary-700" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="text-[12px] font-semibold text-[var(--foreground)] truncate">
            {name}
          </p>
          <span className="shrink-0 rounded-full bg-primary-50 px-2 py-0.5 text-[9px] font-medium text-primary-600 border border-primary-100">
            AI
          </span>
        </div>
        <div className="flex items-center gap-2 mt-0.5">
          <p className="text-[10px] text-[var(--muted-foreground)]">{role}</p>
          <span className="flex items-center gap-1">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                active ? "bg-accent-500" : "bg-gray-300"
              }`}
            />
            <span
              className={`text-[9px] font-medium ${
                active ? "text-accent-600" : "text-gray-400"
              }`}
            >
              {statusLabel}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function TeamPageMockup() {
  const t = useTranslations("featuresPage.teamManagement.mockup");

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--muted)] px-5 py-3">
        <span className="text-sm font-medium text-[var(--foreground)]">
          {t("title")}
        </span>
        <button className="flex items-center gap-1.5 rounded-lg bg-primary-600 px-3 py-1.5 text-[11px] font-semibold text-white">
          <UserPlus className="h-3 w-3" />
          {t("inviteButton")}
        </button>
      </div>

      {/* Team members */}
      <div className="p-4 space-y-2">
        {/* Section: People */}
        <p className="text-[10px] font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-1.5">
          {t("peopleLabel")}
        </p>
        <MemberCard
          initials="HV"
          name={t("member1Name")}
          email={t("member1Email")}
          role={t("member1Role")}
          roleBg="bg-primary-100"
          roleText="text-primary-700"
        />
        <MemberCard
          initials="SV"
          name={t("member2Name")}
          email={t("member2Email")}
          role={t("member2Role")}
          roleBg="bg-accent-100"
          roleText="text-accent-700"
        />
        <MemberCard
          initials="LK"
          name={t("member3Name")}
          email={t("member3Email")}
          role={t("member3Role")}
          roleBg="bg-gray-100"
          roleText="text-gray-600"
        />

        {/* Section: AI Agents */}
        <p className="text-[10px] font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mt-3 mb-1.5">
          {t("agentsLabel")}
        </p>
        <AgentCard
          name={t("agent1Name")}
          role={t("agent1Role")}
          statusLabel={t("agent1Status")}
          active
        />
        <AgentCard
          name={t("agent2Name")}
          role={t("agent2Role")}
          statusLabel={t("agent2Status")}
          active
        />
      </div>
    </div>
  );
}
