// ============================================================================
// Logo — Typographic logo in Michroma
// ============================================================================

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "text-sm tracking-[0.2em]",
  md: "text-base tracking-[0.25em]",
  lg: "text-xl tracking-[0.3em]",
};

export function Logo({ className, size = "md" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "font-[family-name:var(--font-michroma)] font-normal uppercase",
        "text-text-primary hover:text-primary transition-colors duration-300",
        "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 flex items-center gap-2.5",
        sizeMap[size],
        className
      )}
      aria-label="Simplicion Private Limited — Home"
    >
      <img src="/black%20icon.svg" alt="Simplicion Icon" className="w-6 h-6 dark:hidden" />
      <img src="/white%20icon.svg" alt="Simplicion Icon" className="w-6 h-6 hidden dark:block" />
      <span className="flex items-center">
        SIMPLICI<span className="text-primary">O</span>N
      </span>
    </Link>
  );
}
