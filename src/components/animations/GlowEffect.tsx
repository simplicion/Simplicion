// ============================================================================
// GlowEffect — Ambient glow background element
// ============================================================================

import React from "react";
import { cn } from "@/lib/utils";

interface GlowEffectProps {
  className?: string;
  color?: "blue" | "accent" | "mixed";
  size?: "sm" | "md" | "lg" | "xl";
  position?: "center" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const sizeMap = {
  sm: "w-[200px] h-[200px]",
  md: "w-[400px] h-[400px]",
  lg: "w-[600px] h-[600px]",
  xl: "w-[800px] h-[800px]",
};

const colorMap = {
  blue: "bg-primary/20",
  accent: "bg-accent/20",
  mixed: "bg-gradient-to-br from-primary/20 to-accent/20",
};

const positionMap = {
  center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
  "top-left": "left-0 top-0 -translate-x-1/3 -translate-y-1/3",
  "top-right": "right-0 top-0 translate-x-1/3 -translate-y-1/3",
  "bottom-left": "left-0 bottom-0 -translate-x-1/3 translate-y-1/3",
  "bottom-right": "right-0 bottom-0 translate-x-1/3 translate-y-1/3",
};

export function GlowEffect({
  className,
  color = "blue",
  size = "lg",
  position = "center",
}: GlowEffectProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-[120px] pointer-events-none",
        sizeMap[size],
        colorMap[color],
        positionMap[position],
        className
      )}
      aria-hidden="true"
    />
  );
}
