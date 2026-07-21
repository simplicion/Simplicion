// ============================================================================
// Header — Sticky glass header with scroll awareness
// ============================================================================

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/common/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { NAV_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isAtTop } = useScrollDirection();

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-500",
          isAtTop
            ? "bg-transparent border-b border-transparent"
            : "glass border-b border-border-subtle"
        )}
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-[72px] items-center justify-between">
            {/* Logo */}
            <Logo size="sm" />

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1"
              role="navigation"
              aria-label="Main navigation"
            >
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm",
                      "text-text-secondary hover:text-text-primary",
                      "transition-colors duration-200 rounded-lg",
                      "hover:bg-surface/50"
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className={cn(
                          "absolute top-full left-0 mt-1 min-w-[220px]",
                          "glass-strong rounded-[16px] p-2",
                          "border border-border shadow-[var(--shadow-card)]"
                        )}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "block px-4 py-2.5 text-sm text-text-secondary",
                              "hover:text-text-primary hover:bg-surface-hover",
                              "rounded-lg transition-all duration-200"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                href="/contact"
                className="hidden md:inline-flex text-text-secondary hover:text-text-primary"
              >
                Contact
              </Button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(true)}
                className={cn(
                  "lg:hidden p-2 text-text-secondary",
                  "hover:text-text-primary transition-colors",
                  "rounded-lg focus-visible:outline-2 focus-visible:outline-primary"
                )}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
