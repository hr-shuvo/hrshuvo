import type { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
};

export function Container({ className = "", children, size = "lg" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-6 sm:px-8 lg:px-12 ${sizeMap[size]} ${className}`}
    >
      {children}
    </div>
  );
}
