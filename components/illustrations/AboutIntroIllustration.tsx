import { svgDefaults, svgStroke } from "./svg-styles";

export function AboutIntroIllustration() {
  const s = svgDefaults;
  return (
    <svg viewBox="0 0 320 240" className="w-full h-auto" aria-hidden="true">
      {/* Profile silhouette */}
      <circle
        cx="160"
        cy="72"
        r="36"
        fill="none"
        stroke={svgStroke.muted}
        strokeWidth={s.strokeWidth}
        strokeLinecap={s.strokeLinecap}
      />
      <path
        d="M96 200c8-44 32-64 64-64s56 20 64 64"
        fill="none"
        stroke={svgStroke.muted}
        strokeWidth={s.strokeWidth}
        strokeLinecap={s.strokeLinecap}
      />
      {/* Code brackets accent */}
      <path
        d="M40 100 L20 120 L40 140"
        fill="none"
        stroke={svgStroke.accent}
        strokeWidth={1.5}
        strokeLinecap={s.strokeLinecap}
        strokeLinejoin={s.strokeLinejoin}
      />
      <path
        d="M280 100 L300 120 L280 140"
        fill="none"
        stroke={svgStroke.accent}
        strokeWidth={1.5}
        strokeLinecap={s.strokeLinecap}
        strokeLinejoin={s.strokeLinejoin}
      />
      {/* Subtle dots */}
      <circle cx="160" cy="120" r="2" fill={svgStroke.accent} />
      <circle cx="148" cy="128" r="1.5" fill={svgStroke.muted} />
      <circle cx="172" cy="128" r="1.5" fill={svgStroke.muted} />
    </svg>
  );
}
