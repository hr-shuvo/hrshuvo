/** Shared stroke/fill tokens for decorative section SVGs */
export const svgStroke = {
  accent: "var(--color-accent)",
  muted: "var(--border)",
  foreground: "var(--foreground)",
} as const;

export const svgFill = {
  surface: "var(--surface-alt)",
  transparent: "none",
} as const;

export const svgDefaults = {
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
