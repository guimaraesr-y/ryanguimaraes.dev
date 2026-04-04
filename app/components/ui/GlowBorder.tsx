"use client";

import { HTMLAttributes, forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface GlowBorderProps extends HTMLAttributes<HTMLDivElement> {
  color?: "violet" | "cyan" | "gradient";
  size?: "sm" | "md" | "lg";
}

type MotionGlowBorderProps = HTMLMotionProps<"div"> & GlowBorderProps;

export const GlowBorder = forwardRef<HTMLDivElement, MotionGlowBorderProps>(
  ({ children, color = "gradient", size = "md", className = "", ...props }, ref) => {
    const colors = {
      violet: "from-violet-600 to-violet-400",
      cyan: "from-cyan-500 to-cyan-300",
      gradient: "from-violet-600 to-cyan-500",
    };

    const sizes = {
      sm: "p-1",
      md: "p-1.5",
      lg: "p-2",
    };

    return (
      <motion.div
        ref={ref}
        className={`
          relative inline-block rounded-full bg-gradient-to-r ${colors[color]}
          ${sizes[size]} ${className}
        `}
        {...props}
      >
        <div className="rounded-full bg-[#0a0a0a]">
          {children}
        </div>
      </motion.div>
    );
  }
);

GlowBorder.displayName = "GlowBorder";
