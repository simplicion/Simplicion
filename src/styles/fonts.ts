// ============================================================================
// Simplicion — Font Configuration
// ============================================================================

import { Inter, JetBrains_Mono, Space_Grotesk, Michroma } from "next/font/google";

/**
 * Michroma — Heading font
 * Wide spacing, uppercase, bold, modern.
 */
export const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
  display: "swap",
});

/**
 * Inter — Body font
 * Clean, readable, optimized for screens.
 */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * JetBrains Mono — Code font
 * Monospace font for code blocks and technical content.
 */
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

/**
 * Space Grotesk — Numbers font
 * Used for statistics, counters, and numerical data.
 */
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});
