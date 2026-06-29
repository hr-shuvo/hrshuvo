import { svgDefaults, svgStroke } from "./svg-styles";

export function InterestsIllustration() {
  const s = svgDefaults;
  return (
    <svg viewBox="0 0 200 120" className="w-full h-auto" aria-hidden="true">
      {/* Chess knight (simplified) */}
      <path
        d="M28 95 L28 55 Q28 35 48 30 Q58 28 62 38 L68 55 L58 55 L58 95 Z"
        fill="none"
        stroke={svgStroke.accent}
        strokeWidth={1.5}
        strokeLinecap={s.strokeLinecap}
        strokeLinejoin={s.strokeLinejoin}
      />
      <circle cx="52" cy="42" r="3" fill="none" stroke={svgStroke.accent} strokeWidth={1} />
      {/* Open book */}
      <path
        d="M110 95 L110 35 Q130 30 150 35 L150 95 Q130 88 110 95 Z"
        fill="none"
        stroke={svgStroke.muted}
        strokeWidth={s.strokeWidth}
        strokeLinecap={s.strokeLinecap}
        strokeLinejoin={s.strokeLinejoin}
      />
      <path
        d="M150 35 Q170 30 190 35 L190 95 Q170 88 150 95"
        fill="none"
        stroke={svgStroke.muted}
        strokeWidth={s.strokeWidth}
        strokeLinecap={s.strokeLinecap}
        strokeLinejoin={s.strokeLinejoin}
      />
      <line x1="150" y1="35" x2="150" y2="95" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
      {/* Book lines */}
      <line x1="120" y1="50" x2="140" y2="48" stroke={svgStroke.muted} strokeWidth={0.75} opacity={0.6} />
      <line x1="120" y1="62" x2="138" y2="60" stroke={svgStroke.muted} strokeWidth={0.75} opacity={0.6} />
      <line x1="160" y1="50" x2="180" y2="48" stroke={svgStroke.muted} strokeWidth={0.75} opacity={0.6} />
      <line x1="160" y1="62" x2="178" y2="60" stroke={svgStroke.muted} strokeWidth={0.75} opacity={0.6} />
    </svg>
  );
}
