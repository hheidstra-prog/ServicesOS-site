"use client";

import { useTranslations } from "next-intl";
import { FolderOpen, CheckCircle2, Circle, Clock, AlertCircle } from "lucide-react";

const priorityColors: Record<string, string> = {
  urgent: "bg-red-500",
  high: "bg-orange-400",
  medium: "bg-yellow-400",
  low: "bg-blue-400",
};

function TaskRow({
  name,
  priority,
  priorityLabel,
  dueDate,
  assignee,
  logged,
  estimated,
  done,
}: {
  name: string;
  priority: string;
  priorityLabel: string;
  dueDate: string;
  assignee: string;
  logged: string;
  estimated: string;
  done: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-2.5 min-w-0">
        {done ? (
          <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-500" />
        ) : (
          <Circle className="h-4 w-4 shrink-0 text-gray-300" />
        )}
        <div className="min-w-0">
          <p
            className={`text-[11px] font-medium truncate ${
              done
                ? "text-[var(--muted-foreground)] line-through"
                : "text-[var(--foreground)]"
            }`}
          >
            {name}
          </p>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="flex items-center gap-1">
              <span
                className={`h-1.5 w-1.5 rounded-full ${priorityColors[priority] || "bg-gray-300"}`}
              />
              <span className="text-[9px] text-[var(--muted-foreground)]">
                {priorityLabel}
              </span>
            </span>
            <span className="text-[9px] text-[var(--muted-foreground)]">
              {dueDate}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 shrink-0 ml-3">
        <div className="flex items-center gap-1 text-[10px] text-[var(--muted-foreground)] tabular-nums">
          <Clock className="h-2.5 w-2.5" />
          {logged}/{estimated}
        </div>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-[9px] font-bold text-primary-600">
          {assignee}
        </div>
      </div>
    </div>
  );
}

export function ProjectBoardMockup() {
  const t = useTranslations("featuresPage.projectsTasks.mockup");

  const budgetUsed = 62;
  const taskProgress = 50;

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-lg">
      {/* Project header */}
      <div className="border-b border-[var(--border)] bg-[var(--muted)] px-5 py-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-100 to-accent-100">
              <FolderOpen className="h-4.5 w-4.5 text-primary-600" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[var(--foreground)]">
                {t("projectName")}
              </h3>
              <p className="text-[11px] text-[var(--muted-foreground)]">
                {t("client")}
              </p>
            </div>
          </div>
          <span className="rounded-full bg-accent-100 px-2.5 py-0.5 text-[11px] font-medium text-accent-700">
            {t("status")}
          </span>
        </div>

        {/* Budget & progress bars */}
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-[var(--muted-foreground)]">
                {t("budgetLabel")}
              </span>
              <span className="text-[10px] font-semibold text-[var(--foreground)]">
                {t("budgetValue")}
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-gray-200">
              <div
                className="h-1.5 rounded-full bg-primary-500"
                style={{ width: `${budgetUsed}%` }}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-[var(--muted-foreground)]">
                {t("progressLabel")}
              </span>
              <span className="text-[10px] font-semibold text-[var(--foreground)]">
                {t("progressValue")}
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-gray-200">
              <div
                className="h-1.5 rounded-full bg-accent-500"
                style={{ width: `${taskProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Task list */}
      <div className="px-5 py-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[11px] font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
            {t("tasksLabel")}
          </p>
          <div className="flex items-center gap-1 text-[10px] text-[var(--muted-foreground)]">
            <AlertCircle className="h-3 w-3 text-orange-400" />
            {t("overBudgetWarning")}
          </div>
        </div>
        <div className="divide-y divide-[var(--border)]">
          <TaskRow
            name={t("task1Name")}
            priority="high"
            priorityLabel={t("task1Priority")}
            dueDate={t("task1Due")}
            assignee="JB"
            logged={t("task1Logged")}
            estimated={t("task1Estimated")}
            done
          />
          <TaskRow
            name={t("task2Name")}
            priority="urgent"
            priorityLabel={t("task2Priority")}
            dueDate={t("task2Due")}
            assignee="SV"
            logged={t("task2Logged")}
            estimated={t("task2Estimated")}
            done
          />
          <TaskRow
            name={t("task3Name")}
            priority="medium"
            priorityLabel={t("task3Priority")}
            dueDate={t("task3Due")}
            assignee="JB"
            logged={t("task3Logged")}
            estimated={t("task3Estimated")}
            done={false}
          />
          <TaskRow
            name={t("task4Name")}
            priority="low"
            priorityLabel={t("task4Priority")}
            dueDate={t("task4Due")}
            assignee="AI"
            logged={t("task4Logged")}
            estimated={t("task4Estimated")}
            done={false}
          />
        </div>
      </div>
    </div>
  );
}
