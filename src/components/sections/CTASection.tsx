// ============================================================================
// CTASection — Final call-to-action before footer
// ============================================================================

"use client";

import React from "react";
import { ArrowRight, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { GlowEffect } from "@/components/animations/GlowEffect";
import { BRAND } from "@/constants";

export function CTASection() {
  return (
    <section
      className="relative section-padding overflow-hidden"
      id="cta"
      aria-label="Get in touch"
    >
      <GlowEffect position="center" color="mixed" size="xl" />

      <Container size="narrow">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="heading-display heading-lg mb-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-500 bg-clip-text text-transparent">
              {BRAND.tagline}
            </h2>
            <p className="text-body-lg text-text-secondary max-w-xl mx-auto mb-10">
              {BRAND.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Contact Us
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="/careers"
                leftIcon={<Users className="h-4 w-4" />}
              >
                Explore Careers
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
