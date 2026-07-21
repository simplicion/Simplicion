// ============================================================================
// GlassCard — Glassmorphism card with hover effects
// ============================================================================

"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  gradientBorder?: boolean;
  padding?: "sm" | "md" | "lg";
  as?: "div" | "article" | "section";
}

const paddingMap = {
  sm: "p-4 md:p-5",
  md: "p-5 md:p-7",
  lg: "p-6 md:p-9",
};

export function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
  gradientBorder = true,
  padding = "md",
  as: Tag = "div",
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -4,
              transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
            }
          : undefined
      }
      className={cn("group", hover && "cursor-pointer")}
    >
      <Tag
        className={cn(
          "glass rounded-[var(--radius-card)]",
          paddingMap[padding],
          "transition-all duration-300",
          gradientBorder && "gradient-border",
          hover && [
            "hover:bg-surface-hover",
            "hover:shadow-[var(--shadow-card-hover)]",
          ],
          glow && "glow-blue",
          hover && glow && "hover:glow-blue-strong",
          className
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
