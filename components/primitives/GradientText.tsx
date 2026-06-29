import type { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-[#6366f1] to-[#818cf8] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
