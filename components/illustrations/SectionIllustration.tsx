import type { ReactNode } from "react";

type Variant = "decorator" | "icon";

const variantClasses: Record<Variant, string> = {
  decorator:
    "pointer-events-none absolute select-none opacity-[0.38] [&_svg]:w-full [&_svg]:h-auto",
  icon: "shrink-0 w-7 h-7 opacity-70 [&_svg]:w-full [&_svg]:h-full",
};

interface SectionIllustrationProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export function SectionIllustration({
  variant = "decorator",
  className = "",
  children,
}: SectionIllustrationProps) {
  return (
    <div className={`${variantClasses[variant]} ${className}`} aria-hidden="true">
      {children}
    </div>
  );
}
