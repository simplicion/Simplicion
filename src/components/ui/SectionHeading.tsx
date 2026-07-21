// ============================================================================
// SectionHeading — Consistent section header with label + heading + desc
// ============================================================================

"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface SectionHeadingProps {
  label?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  label,
  heading,
  description,
  align = "center",
  as: Component = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <ScrollReveal>
      <div
        className={cn(
          "mb-12 md:mb-16",
          align === "center" && "text-center",
          className
        )}
      >
        {label && (
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            {label}
          </span>
        )}
        <Component
          className={cn(
            "heading-display",
            "heading-md",
            "text-text-primary mb-4"
          )}
        >
          {heading}
        </Component>
        {description && (
          <p
            className={cn(
              "text-body-lg text-text-secondary max-w-2xl",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
