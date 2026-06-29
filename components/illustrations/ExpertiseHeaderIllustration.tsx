import { svgDefaults, svgFill, svgStroke } from "./svg-styles";

export function ExpertiseHeaderIllustration() {
  const s = svgDefaults;
  return (
    <svg viewBox="0 0 320 240" className="w-full h-auto" aria-hidden="true">
      {/* Layered stack — backend to frontend to infra */}
      {/* Bottom layer — infra/cloud */}
      <ellipse cx="160" cy="195" rx="90" ry="18" fill={svgFill.surface} stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
      <path d="M120 185 Q160 165 200 185" fill="none" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
      {/* Middle layer — backend */}
      <rect x="80" y="120" width="160" height="50" rx="6" fill={svgFill.surface} stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
      <line x1="100" y1="138" x2="220" y2="138" stroke={svgStroke.muted} strokeWidth={0.75} opacity={0.5} />
      <line x1="100" y1="152" x2="190" y2="152" stroke={svgStroke.muted} strokeWidth={0.75} opacity={0.5} />
      {/* Top layer — frontend */}
      <rect x="60" y="50" width="200" height="55" rx="8" fill="none" stroke={svgStroke.accent} strokeWidth={1.5} />
      <rect x="72" y="62" width="176" height="31" rx="3" fill={svgFill.surface} stroke={svgStroke.muted} strokeWidth={0.75} />
      {/* Window dots */}
      <circle cx="82" cy="58" r="2" fill={svgStroke.muted} />
      <circle cx="92" cy="58" r="2" fill={svgStroke.muted} />
      <circle cx="102" cy="58" r="2" fill={svgStroke.muted} />
      {/* Accent line on top layer */}
      <line x1="90" y1="78" x2="230" y2="78" stroke={svgStroke.accent} strokeWidth={1.5} opacity={0.6} />
    </svg>
  );
}
