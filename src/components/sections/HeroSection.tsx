// ============================================================================
// HeroSection — Full viewport hero with neural network animation
// ============================================================================

"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion, Variants } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { BRAND } from "@/constants";

// Dynamic import for Three.js to prevent SSR issues
const NeuralNetwork = dynamic(
  () =>
    import("@/components/animations/NeuralNetwork").then(
      (mod) => mod.NeuralNetwork
    ),
  { ssr: false }
);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
      aria-label="Hero"
    >
      {/* Three.js Background */}
      <NeuralNetwork className="opacity-60" />

      {/* Content */}
      <Container className="relative z-10 py-32 md:py-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Tag */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-medium tracking-[0.15em] uppercase text-primary bg-primary-muted rounded-full border border-primary/20">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Research-Driven Technology Company
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="heading-display heading-xl mb-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-500 bg-clip-text text-transparent"
          >
            {BRAND.tagline}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-body-lg text-text-secondary max-w-2xl mx-auto mb-10"
          >
            {BRAND.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              href="/products"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Explore Products
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/research"
              leftIcon={<BookOpen className="h-4 w-4" />}
            >
              Research
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-text-muted/30 flex items-start justify-center p-1"
        >
          <motion.div className="w-1 h-2 rounded-full bg-text-muted/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
