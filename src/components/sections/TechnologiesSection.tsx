// ============================================================================
// TechnologiesSection — Technology categories grid
// ============================================================================

"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TECHNOLOGIES } from "@/constants";
import { cn } from "@/lib/utils";

export function TechnologiesSection() {
  return (
    <section
      className="relative section-padding bg-surface/30"
      id="technologies"
      aria-label="Technologies"
    >
      <Container>
        <SectionHeading
          label="Technology"
          heading="Technologies We Build With"
          description="From artificial intelligence to embedded systems — the technologies powering the next generation of computing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TECHNOLOGIES.map((category, catIndex) => (
            <ScrollReveal key={category.category} delay={catIndex * 0.1}>
              <div>
                <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-4">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.items.map((tech) => (
                    <div
                      key={tech.name}
                      className={cn(
                        "px-4 py-2.5 rounded-[var(--radius-button)]",
                        "glass text-sm text-text-secondary",
                        "hover:text-text-primary hover:bg-surface-hover",
                        "transition-all duration-200 cursor-default"
                      )}
                    >
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
