// ============================================================================
// IndustriesSection — Industries served grid
// ============================================================================

"use client";

import React from "react";
import {
  HeartPulse, GraduationCap, Landmark, ShoppingBag, Factory,
  Building2, Truck, Package, Shield, Tv, Sprout, Zap, Radio, Smartphone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { INDUSTRIES } from "@/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "heart-pulse": HeartPulse,
  "graduation-cap": GraduationCap,
  landmark: Landmark,
  "shopping-bag": ShoppingBag,
  factory: Factory,
  "building-2": Building2,
  truck: Truck,
  package: Package,
  shield: Shield,
  tv: Tv,
  sprout: Sprout,
  zap: Zap,
  radio: Radio,
  smartphone: Smartphone,
};

export function IndustriesSection() {
  return (
    <section
      className="relative section-padding"
      id="industries"
      aria-label="Industries"
    >
      <Container>
        <SectionHeading
          label="Industries"
          heading="Industries We Serve"
          description="Building technology solutions that power critical industries across the globe."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {INDUSTRIES.map((industry, i) => {
            const IconComponent = iconMap[industry.icon];
            return (
              <ScrollReveal key={industry.name} delay={i * 0.03}>
                <div
                  className={cn(
                    "flex flex-col items-center gap-3 p-5",
                    "glass rounded-[20px]",
                    "hover:bg-surface-hover hover:shadow-[0_0_20px_rgba(37,99,235,0.1)]",
                    "transition-all duration-300 cursor-default group"
                  )}
                >
                  {IconComponent && (
                    <IconComponent className="h-5 w-5 text-text-muted group-hover:text-primary transition-colors duration-300" />
                  )}
                  <span className="text-xs text-text-secondary text-center font-medium group-hover:text-text-primary transition-colors duration-300">
                    {industry.name}
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
