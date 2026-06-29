"use client";

import { motion, type Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045 },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AnimatedText({
  text,
  className,
  el: El = "p",
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      transition={{ delayChildren: delay }}
    >
      <El className={className}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            style={{ display: "inline-block", marginRight: "0.28em" }}
          >
            {word}
          </motion.span>
        ))}
      </El>
    </motion.div>
  );
}
