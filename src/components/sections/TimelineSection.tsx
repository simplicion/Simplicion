// ============================================================================
// TimelineSection — Vertical milestone timeline
// ============================================================================

"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TIMELINE } from "@/constants";
import { cn } from "@/lib/utils";

const statusColors = {
  completed: "bg-success border-success",
  current: "bg-primary border-primary animate-pulse",
  upcoming: "bg-border border-border",
};

const statusLineColors = {
  completed: "bg-success/30",
  current: "bg-primary/30",
  upcoming: "bg-border/50",
};

export function TimelineSection() {
  return (
    <section
      className="relative section-padding"
      id="timeline"
      aria-label="Timeline"
    >
      <Container size="narrow">
        <SectionHeading
          label="Roadmap"
          heading="Our Journey"
          description="From founding to the frontier of computing — our path forward."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-border/30" />

          {TIMELINE.map((milestone, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className={cn(
                  "relative flex items-start gap-6 mb-12 last:mb-0",
                  "md:gap-0",
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Content card */}
                <div
                  className={cn(
                    "flex-1 ml-12 md:ml-0",
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  )}
                >
                  <div
                    className={cn(
                      "glass rounded-[20px] p-5 inline-block",
                      "hover:bg-surface-hover transition-all duration-300",
                      milestone.status === "current" && "glow-blue"
                    )}
                  >
                    <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-primary font-bold tracking-wider">
                      {milestone.year}
                    </span>
                    <h3 className="font-[family-name:var(--font-michroma)] text-sm tracking-wider uppercase text-text-primary mt-1 mb-1.5">
                      {milestone.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 z-10">
                  <div
                    className={cn(
                      "h-4 w-4 rounded-full border-2",
                      statusColors[milestone.status]
                    )}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
