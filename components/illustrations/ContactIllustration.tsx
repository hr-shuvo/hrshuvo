import { svgDefaults, svgStroke } from "./svg-styles";

export function ContactIllustration() {
  const s = svgDefaults;
  return (
    <svg viewBox="0 0 240 180" className="w-full h-auto" aria-hidden="true">
      {/* Envelope body */}
      <rect
        x="30"
        y="50"
        width="180"
        height="110"
        rx="6"
        fill="none"
        stroke={svgStroke.muted}
        strokeWidth={s.strokeWidth}
      />
      {/* Flap accent */}
      <path
        d="M30 50 L120 115 L210 50"
        fill="none"
        stroke={svgStroke.accent}
        strokeWidth={1.5}
        strokeLinecap={s.strokeLinecap}
        strokeLinejoin={s.strokeLinejoin}
      />
      {/* Bottom fold lines */}
      <path
        d="M30 160 L120 100 L210 160"
        fill="none"
        stroke={svgStroke.muted}
        strokeWidth={s.strokeWidth}
        strokeLinecap={s.strokeLinecap}
        strokeLinejoin={s.strokeLinejoin}
        opacity={0.5}
      />
    </svg>
  );
}
