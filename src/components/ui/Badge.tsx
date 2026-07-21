// ============================================================================
// Badge — Status indicator
// ============================================================================

import React from "react";
import { cn } from "@/lib/utils";

type BadgeStatus = "live" | "in-development" | "coming-soon";

interface BadgeProps {
  status: BadgeStatus;
  className?: string;
}

const statusConfig: Record<
  BadgeStatus,
  { label: string; dotColor: string; bgColor: string; textColor: string }
> = {
  live: {
    label: "Live",
    dotColor: "bg-success",
    bgColor: "bg-success/10",
    textColor: "text-success",
  },
  "in-development": {
    label: "In Development",
    dotColor: "bg-warning",
    bgColor: "bg-warning/10",
    textColor: "text-warning",
  },
  "coming-soon": {
    label: "Coming Soon",
    dotColor: "bg-primary",
    bgColor: "bg-primary/10",
    textColor: "text-primary",
  },
};

export function Badge({ status, className }: BadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium",
        config.bgColor,
        config.textColor,
        className
      )}
    >
      <span
        className={cn("h-1.5 w-1.5 rounded-full", config.dotColor)}
        aria-hidden="true"
      />
      {config.label}
    </span>
  );
}
