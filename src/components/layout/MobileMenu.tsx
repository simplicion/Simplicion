// ============================================================================
// MobileMenu — Full-screen overlay navigation
// ============================================================================

"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { NAV_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <motion.nav
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className={cn(
              "fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm",
              "glass-strong flex flex-col"
            )}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Close button */}
            <div className="flex items-center justify-end p-6">
              <button
                onClick={onClose}
                className="p-3 text-text-secondary hover:text-text-primary transition-colors rounded-lg focus-visible:outline-2 focus-visible:outline-primary"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Nav items */}
            <div className="flex-1 px-6 space-y-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "block py-3 px-4 text-lg font-medium text-text-primary",
                      "hover:text-primary hover:bg-primary-muted rounded-[var(--radius-button)]",
                      "transition-all duration-200"
                    )}
                  >
                    {item.label}
                  </Link>

                  {/* Sub-items */}
                  {item.children && (
                    <div className="pl-6 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className={cn(
                            "block py-2 px-4 text-sm text-text-secondary",
                            "hover:text-text-primary hover:bg-surface-hover rounded-lg",
                            "transition-all duration-200"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border">
              <Link
                href="/contact"
                onClick={onClose}
                className={cn(
                  "block w-full text-center py-3 bg-primary text-white",
                  "rounded-[var(--radius-button)] font-medium",
                  "hover:bg-primary-hover transition-colors duration-200"
                )}
              >
                Contact Us
              </Link>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
