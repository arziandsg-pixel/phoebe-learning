"use client";

import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = "", id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm font-semibold opacity-80">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={`w-full rounded-xl border border-lav/30 bg-white/70 dark:bg-white/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink/50 transition-shadow ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
