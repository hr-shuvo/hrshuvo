import { svgDefaults, svgStroke } from "./svg-styles";

export function JourneyIllustration() {
  const s = svgDefaults;
  return (
    <svg viewBox="0 0 200 200" className="w-full h-auto" aria-hidden="true">
      {/* Winding path */}
      <path
        d="M30 170 Q60 140 80 120 T130 70 T170 30"
        fill="none"
        stroke={svgStroke.muted}
        strokeWidth={s.strokeWidth}
        strokeLinecap={s.strokeLinecap}
        strokeDasharray="4 4"
      />
      {/* Milestone dots */}
      <circle cx="30" cy="170" r="5" fill="none" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
      <circle cx="80" cy="120" r="5" fill="none" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
      <circle cx="130" cy="70" r="6" fill="none" stroke={svgStroke.accent} strokeWidth={1.5} />
      <circle cx="170" cy="30" r="7" fill="none" stroke={svgStroke.accent} strokeWidth={1.5} />
      {/* Accent inner dots */}
      <circle cx="130" cy="70" r="2" fill={svgStroke.accent} />
      <circle cx="170" cy="30" r="2.5" fill={svgStroke.accent} />
    </svg>
  );
}
