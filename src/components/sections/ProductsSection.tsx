// ============================================================================
// ProductsSection — Product cards showcase
// ============================================================================

"use client";

import React from "react";
import { ArrowRight, Network, LayoutDashboard, FlaskConical } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { GlowEffect } from "@/components/animations/GlowEffect";
import { PRODUCTS } from "@/constants";
import type { Product } from "@/types";
export function ProductsSection() {
  return (
    <section
      className="relative section-padding overflow-x-clip"
      id="products"
      aria-label="Our Products"
    >
      {/* Background glow */}
      <GlowEffect position="top-right" color="blue" size="xl" />
      <GlowEffect position="bottom-left" color="accent" size="lg" />

      <Container>
        <SectionHeading
          label="Products"
          heading="Our Products"
          description="Technology platforms designed for long-term impact, powering businesses and industries globally."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.1}>
              <ProjectCard {...product} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
