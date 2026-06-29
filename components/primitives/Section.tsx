import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
}

export function Section({
  id,
  className = "",
  children,
  "aria-label": ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`relative py-24 md:py-32 lg:py-40 ${className}`}
    >
      {children}
    </section>
  );
}
