import { svgDefaults, svgStroke } from "./svg-styles";

export function IndependentIllustration() {
  const s = svgDefaults;
  return (
    <svg viewBox="0 0 200 160" className="w-full h-auto" aria-hidden="true">
      {/* Rocket body */}
      <path
        d="M100 20 Q88 50 88 90 L88 110 L112 110 L112 90 Q112 50 100 20 Z"
        fill="none"
        stroke={svgStroke.accent}
        strokeWidth={1.5}
        strokeLinecap={s.strokeLinecap}
        strokeLinejoin={s.strokeLinejoin}
      />
      {/* Rocket window */}
      <circle cx="100" cy="55" r="10" fill="none" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
      {/* Fins */}
      <path d="M88 95 L70 120 L88 110" fill="none" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} strokeLinejoin={s.strokeLinejoin} />
      <path d="M112 95 L130 120 L112 110" fill="none" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} strokeLinejoin={s.strokeLinejoin} />
      {/* Exhaust */}
      <path d="M92 120 Q100 135 108 120" fill="none" stroke={svgStroke.accent} strokeWidth={1} opacity={0.6} />
      <path d="M88 125 Q100 148 112 125" fill="none" stroke={svgStroke.muted} strokeWidth={0.75} opacity={0.4} />
      {/* Solo desk hint */}
      <line x1="40" y1="145" x2="160" y2="145" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
      <rect x="70" y="130" width="60" height="15" rx="2" fill="none" stroke={svgStroke.muted} strokeWidth={0.75} opacity={0.5} />
    </svg>
  );
}
