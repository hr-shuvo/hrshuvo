import { svgDefaults, svgStroke } from "./svg-styles";

export function AwardsIllustration() {
  const s = svgDefaults;
  return (
    <svg viewBox="0 0 120 160" className="w-full h-auto" aria-hidden="true">
      {/* Trophy cup */}
      <path
        d="M40 30 L80 30 L76 70 Q60 82 44 70 Z"
        fill="none"
        stroke={svgStroke.accent}
        strokeWidth={1.5}
        strokeLinecap={s.strokeLinecap}
        strokeLinejoin={s.strokeLinejoin}
      />
      {/* Handles */}
      <path
        d="M40 38 Q20 38 22 55 Q24 68 40 62"
        fill="none"
        stroke={svgStroke.muted}
        strokeWidth={s.strokeWidth}
        strokeLinecap={s.strokeLinecap}
      />
      <path
        d="M80 38 Q100 38 98 55 Q96 68 80 62"
        fill="none"
        stroke={svgStroke.muted}
        strokeWidth={s.strokeWidth}
        strokeLinecap={s.strokeLinecap}
      />
      {/* Stem and base */}
      <line x1="60" y1="78" x2="60" y2="110" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
      <path
        d="M42 110 L78 110 L82 125 L38 125 Z"
        fill="none"
        stroke={svgStroke.muted}
        strokeWidth={s.strokeWidth}
        strokeLinecap={s.strokeLinecap}
        strokeLinejoin={s.strokeLinejoin}
      />
      {/* Star accent */}
      <path
        d="M60 48 L62 54 L68 54 L63 58 L65 64 L60 60 L55 64 L57 58 L52 54 L58 54 Z"
        fill="none"
        stroke={svgStroke.accent}
        strokeWidth={0.75}
        strokeLinejoin={s.strokeLinejoin}
      />
    </svg>
  );
}
