"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  once?: boolean;
}

function buildVariants(direction: string): Variants {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : 0,
      x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      variants={buildVariants(direction)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
