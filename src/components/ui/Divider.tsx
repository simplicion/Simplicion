// ============================================================================
// Divider — Subtle gradient line separator
// ============================================================================

import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <div
      className={cn(
        "w-full h-px",
        "bg-gradient-to-r from-transparent via-border to-transparent",
        className
      )}
      role="separator"
    />
  );
}
