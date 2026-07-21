// ============================================================================
// ResearchSection — Research areas showcase
// ============================================================================

"use client";

import React from "react";
import {
  Brain, Bot, Cloud, GitBranch, Network, Users,
  MessageSquare, Compass, Monitor, ShieldCheck, Cpu, Atom, ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { GlowEffect } from "@/components/animations/GlowEffect";
import { RESEARCH_AREAS } from "@/constants";
import type { ResearchArea } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: Brain,
  bot: Bot,
  cloud: Cloud,
  "git-branch": GitBranch,
  network: Network,
  users: Users,
  "message-square": MessageSquare,
  compass: Compass,
  monitor: Monitor,
  "shield-check": ShieldCheck,
  cpu: Cpu,
  atom: Atom,
};

function ResearchCard({ area, index }: { area: ResearchArea; index: number }) {
  const IconComponent = iconMap[area.icon];

  return (
    <ScrollReveal delay={index * 0.05}>
      <GlassCard hover glow={false} gradientBorder padding="md">
        <div className="flex items-start gap-4">
          <div className="shrink-0 p-2.5 rounded-[14px] bg-accent-muted text-accent">
            {IconComponent && <IconComponent className="h-5 w-5" />}
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-text-primary mb-1">
              {area.name}
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              {area.description}
            </p>
          </div>
        </div>
      </GlassCard>
    </ScrollReveal>
  );
}

export function ResearchSection() {
  return (
    <section
      className="relative section-padding bg-surface/20 overflow-hidden"
      id="research"
      aria-label="Research"
    >
      <GlowEffect position="center" color="mixed" size="xl" />

      <Container>
        <SectionHeading
          label="Research"
          heading="Research Areas"
          description="Fundamental and applied research across the frontier of computing, intelligence, and systems."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESEARCH_AREAS.map((area, i) => (
            <ResearchCard key={area.id} area={area} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-10">
            <a
              href="/research"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors duration-200 font-medium"
            >
              View all research
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
