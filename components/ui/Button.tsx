"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-pink to-pink2 text-white shadow-lg shadow-pink/30 hover:brightness-105",
  secondary:
    "bg-lav/20 text-ink dark:text-white border border-lav/40 hover:bg-lav/30",
  ghost: "bg-transparent hover:bg-black/5 dark:hover:bg-white/10",
  danger: "bg-red-500 text-white hover:bg-red-600",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-bold text-sm transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
