import { svgDefaults, svgFill, svgStroke } from "./svg-styles";

export function ExperienceHeaderIllustration() {
  const s = svgDefaults;
  return (
    <svg viewBox="0 0 320 240" className="w-full h-auto" aria-hidden="true">
      {/* Career steps */}
      <rect x="40" y="170" width="50" height="12" rx="2" fill={svgFill.surface} stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
      <rect x="100" y="140" width="50" height="12" rx="2" fill={svgFill.surface} stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
      <rect x="160" y="110" width="50" height="12" rx="2" fill={svgFill.surface} stroke={svgStroke.accent} strokeWidth={1.5} />
      <rect x="220" y="80" width="50" height="12" rx="2" fill={svgFill.surface} stroke={svgStroke.accent} strokeWidth={1.5} />
      {/* Step connectors */}
      <line x1="65" y1="170" x2="125" y2="152" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} strokeDasharray="3 3" />
      <line x1="125" y1="140" x2="185" y2="122" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} strokeDasharray="3 3" />
      <line x1="185" y1="110" x2="245" y2="92" stroke={svgStroke.accent} strokeWidth={s.strokeWidth} strokeDasharray="3 3" />
      {/* Laptop */}
      <rect x="100" y="30" width="120" height="75" rx="6" fill="none" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
      <rect x="108" y="38" width="104" height="55" rx="2" fill={svgFill.surface} stroke={svgStroke.muted} strokeWidth={0.75} />
      <line x1="130" y1="105" x2="190" y2="105" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
      <path d="M115 105 L115 112 L205 112 L205 105" fill="none" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
      {/* Screen accent line */}
      <line x1="120" y1="55" x2="200" y2="55" stroke={svgStroke.accent} strokeWidth={1.5} opacity={0.7} />
    </svg>
  );
}
