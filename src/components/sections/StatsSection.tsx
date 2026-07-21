// ============================================================================
// StatsSection — Animated statistics bar
// ============================================================================

"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { STATS } from "@/constants";
import { cn } from "@/lib/utils";

export function StatsSection() {
  return (
    <section className="relative -mt-20 z-20" aria-label="Key statistics">
      <Container>
        <ScrollReveal>
          <div
            className={cn(
              "glass rounded-[var(--radius-card)] gradient-border",
              "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
              "divide-y md:divide-y-0 md:divide-x divide-border/50",
              "p-2"
            )}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-6 px-4"
              >
                <span
                  className={cn(
                    "text-2xl md:text-3xl font-bold text-text-primary mb-1",
                    stat.isNumeric
                      ? "font-[family-name:var(--font-space-grotesk)]"
                      : "font-[family-name:var(--font-michroma)] text-lg md:text-xl tracking-wider"
                  )}
                >
                  {stat.isNumeric ? (
                    <AnimatedCounter
                      value={parseInt(stat.value)}
                      suffix={stat.suffix}
                    />
                  ) : (
                    stat.value
                  )}
                </span>
                <span className="text-xs text-text-muted uppercase tracking-[0.15em] font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
