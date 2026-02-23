"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Check,
  Bot,
  Users,
  Calendar,
  FileText,
  Clock,
  Globe,
  UserCircle,
  PenTool,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  bot: Bot,
  users: Users,
  calendar: Calendar,
  fileText: FileText,
  clock: Clock,
  globe: Globe,
  userCircle: UserCircle,
  penTool: PenTool,
} as const;

type IconKey = keyof typeof iconMap;

interface FeatureDetailProps {
  sectionKey: string;
  icon: IconKey;
  featureCount: number;
  descriptionCount: number;
  reversed?: boolean;
  muted?: boolean;
}

export function FeatureDetail({
  sectionKey,
  icon,
  featureCount,
  descriptionCount,
  reversed = false,
  muted = false,
}: FeatureDetailProps) {
  const t = useTranslations(`featuresPage.${sectionKey}`);
  const Icon = iconMap[icon];

  const features = Array.from({ length: featureCount }, (_, i) =>
    t(`f${i + 1}`)
  );

  const descriptions = Array.from({ length: descriptionCount }, (_, i) =>
    t(`description${i + 1}`)
  );

  return (
    <section
      className={cn("section-padding", muted && "bg-[var(--muted)]")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
            reversed && "lg:[&>*:first-child]:order-2"
          )}
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-100 to-accent-100">
              <Icon className="h-6 w-6 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
              {t("title")}
            </h2>
            <div className="mt-6 space-y-4">
              {descriptions.map((desc, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-[var(--muted-foreground)]"
                >
                  {desc}
                </p>
              ))}
            </div>
            <ul className="mt-8 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-100">
                    <Check className="h-3 w-3 text-accent-600" />
                  </div>
                  <span className="text-sm text-[var(--muted-foreground)]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Screenshot placeholder */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border)] bg-gradient-to-br from-primary-50 to-accent-50 shadow-lg">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <Icon className="mx-auto mb-3 h-10 w-10 text-primary-300" />
                  <p className="text-sm font-medium text-[var(--muted-foreground)]">
                    Screenshot
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
