"use client";

import { HTMLAttributes, forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  hoverable?: boolean;
}

type MotionCardProps = HTMLMotionProps<"div"> & CardProps;

export const Card = forwardRef<HTMLDivElement, MotionCardProps>(
  ({ children, glow = false, hoverable = true, className = "", ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverable ? { scale: 1.02, y: -5 } : undefined}
        className={`
          relative rounded-xl bg-white/5 border border-white/10 overflow-hidden
          ${hoverable ? "transition-all duration-300 hover:border-violet-500/50" : ""}
          ${glow ? "before:absolute before:inset-0 before:rounded-xl before:border-[1px] before:border-violet-500/30 before:animate-pulse" : ""}
          ${className}
        `}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
