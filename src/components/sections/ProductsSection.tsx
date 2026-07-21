// ============================================================================
// ProductsSection — Product cards showcase
// ============================================================================

"use client";

import React from "react";
import { ArrowRight, Network, LayoutDashboard, FlaskConical } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { GlowEffect } from "@/components/animations/GlowEffect";
import { PRODUCTS } from "@/constants";
import type { Product } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  network: <Network className="h-8 w-8" />,
  "layout-dashboard": <LayoutDashboard className="h-8 w-8" />,
  "flask-conical": <FlaskConical className="h-8 w-8" />,
};

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <GlassCard glow hover gradientBorder padding="lg">
        <div className="flex flex-col h-full min-h-[280px]">
          {/* Icon + Badge */}
          <div className="flex items-start justify-between mb-6">
            <div className="p-3 rounded-[16px] bg-primary-muted text-primary">
              {iconMap[product.icon]}
            </div>
            <Badge status={product.status} />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-[family-name:var(--font-michroma)] text-lg tracking-wide uppercase text-text-primary mb-1">
              {product.name}
            </h3>
            <p className="text-sm text-primary font-medium mb-3">
              {product.tagline}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-6 pt-4 border-t border-border/50">
            <Button
              variant="ghost"
              size="sm"
              href={product.href}
              rightIcon={
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              }
              className="text-primary hover:text-primary-hover px-0"
            >
              Explore
            </Button>
          </div>
        </div>
      </GlassCard>
    </ScrollReveal>
  );
}

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
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
