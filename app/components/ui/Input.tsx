"use client";

import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const inputBaseStyles =
  "focus-ring w-full border border-line bg-white/[0.025] px-4 py-3.5 text-paper placeholder:text-muted/55 transition-colors hover:border-paper/25 focus:border-acid";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className = "", ...props }, ref) => (
    <div className="w-full">
      <input
        ref={ref}
        aria-invalid={Boolean(error)}
        className={`${inputBaseStyles} ${error ? "border-coral" : ""} ${className}`}
        {...props}
      />
      {error ? <p className="mono mt-2 text-[0.65rem] text-coral">{error}</p> : null}
    </div>
  ),
);

Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, className = "", ...props }, ref) => (
    <div className="w-full">
      <textarea
        ref={ref}
        aria-invalid={Boolean(error)}
        className={`${inputBaseStyles} min-h-36 resize-y ${error ? "border-coral" : ""} ${className}`}
        {...props}
      />
      {error ? <p className="mono mt-2 text-[0.65rem] text-coral">{error}</p> : null}
    </div>
  ),
);

Textarea.displayName = "Textarea";
