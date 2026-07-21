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
  sm: "h-6",
  md: "h-8",
  lg: "h-10",
};

export function Logo({ className, size = "md" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "transition-opacity duration-300 hover:opacity-80",
        "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 flex items-center",
        className
      )}
      aria-label="Simplicion Private Limited — Home"
    >
      <img src="/black%20logo.svg" alt="Simplicion Logo" className={cn("w-auto", sizeMap[size])} />
    </Link>
  );
}
