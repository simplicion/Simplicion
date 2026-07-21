// ============================================================================
// Button — Primary UI component
// Variants: primary (filled blue), secondary (glass), ghost, outline
// ============================================================================

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-medium transition-all",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    "disabled:pointer-events-none disabled:opacity-50",
    "cursor-pointer select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-primary text-white",
          "hover:bg-primary-hover hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]",
          "active:scale-[0.98]",
        ].join(" "),
        secondary: [
          "glass text-text-primary",
          "hover:bg-surface-hover hover:shadow-[0_0_20px_rgba(37,99,235,0.15)]",
          "active:scale-[0.98]",
        ].join(" "),
        ghost: [
          "bg-transparent text-text-secondary",
          "hover:text-text-primary hover:bg-surface/50",
        ].join(" "),
        outline: [
          "bg-transparent text-text-primary border border-border",
          "hover:border-primary/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.1)]",
          "active:scale-[0.98]",
        ].join(" "),
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-[10px]",
        md: "h-11 px-6 text-sm rounded-[14px]",
        lg: "h-13 px-8 text-base rounded-[14px]",
        xl: "h-14 px-10 text-base rounded-[16px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as a link */
  href?: string;
  /** Icon on the left */
  leftIcon?: React.ReactNode;
  /** Icon on the right */
  rightIcon?: React.ReactNode;
  /** Loading state */
  isLoading?: boolean;
  target?: string;
  /** Rel attribute for links */
  rel?: string;
}

export function Button({
  className,
  variant,
  size,
  href,
  target,
  rel,
  leftIcon,
  rightIcon,
  isLoading,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    buttonVariants({ variant, size }),
    "duration-300",
    className
  );

  const content = (
    <>
      {isLoading && (
        <svg
          className="h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {!isLoading && leftIcon}
      {children}
      {!isLoading && rightIcon}
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} disabled={isLoading} {...props}>
      {content}
    </button>
  );
}
