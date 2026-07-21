// ============================================================================
// Container — Max-width content wrapper
// ============================================================================

import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
  as?: "div" | "section" | "main" | "article";
}

const sizeMap = {
  narrow: "max-w-4xl",
  default: "max-w-[1280px]",
  wide: "max-w-[1440px]",
};

export function Container({
  children,
  className,
  size = "default",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeMap[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}
