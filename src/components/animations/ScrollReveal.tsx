// ============================================================================
// ScrollReveal — Framer Motion scroll-triggered animation wrapper
// ============================================================================

"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  stagger?: number;
}

const getInitial = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":
      return { opacity: 0, y: distance };
    case "down":
      return { opacity: 0, y: -distance };
    case "left":
      return { opacity: 0, x: distance };
    case "right":
      return { opacity: 0, x: -distance };
    case "none":
      return { opacity: 0 };
  }
};

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 30,
  once = true,
  stagger,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  if (stagger !== undefined) {
    return (
      <div ref={ref} className={className}>
        {React.Children.map(children, (child, index) => (
          <motion.div
            initial={getInitial(direction, distance)}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : undefined}
            transition={{
              duration,
              delay: delay + index * stagger,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {child}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitial(direction, distance)}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
