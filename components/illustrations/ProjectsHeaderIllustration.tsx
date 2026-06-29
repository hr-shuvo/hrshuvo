import { svgDefaults, svgFill, svgStroke } from "./svg-styles";

export function ProjectsHeaderIllustration() {
  const s = svgDefaults;
  return (
    <svg viewBox="0 0 320 240" className="w-full h-auto" aria-hidden="true">
      {/* Browser window */}
      <rect x="20" y="30" width="220" height="170" rx="8" fill="none" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
      <line x1="20" y1="55" x2="240" y2="55" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
      <circle cx="38" cy="42" r="4" fill="none" stroke={svgStroke.muted} strokeWidth={0.75} />
      <circle cx="52" cy="42" r="4" fill="none" stroke={svgStroke.muted} strokeWidth={0.75} />
      <circle cx="66" cy="42" r="4" fill="none" stroke={svgStroke.muted} strokeWidth={0.75} />
      <rect x="36" y="70" width="188" height="110" rx="4" fill={svgFill.surface} stroke={svgStroke.muted} strokeWidth={0.75} />
      <line x1="50" y1="95" x2="170" y2="95" stroke={svgStroke.accent} strokeWidth={1.5} opacity={0.7} />
      <line x1="50" y1="115" x2="140" y2="115" stroke={svgStroke.muted} strokeWidth={0.75} opacity={0.5} />
      <line x1="50" y1="130" x2="155" y2="130" stroke={svgStroke.muted} strokeWidth={0.75} opacity={0.5} />
      {/* Mobile frame */}
      <rect x="250" y="60" width="60" height="110" rx="8" fill="none" stroke={svgStroke.accent} strokeWidth={1.5} />
      <rect x="258" y="72" width="44" height="78" rx="3" fill={svgFill.surface} stroke={svgStroke.muted} strokeWidth={0.75} />
      <circle cx="280" cy="158" r="4" fill="none" stroke={svgStroke.muted} strokeWidth={0.75} />
      <line x1="268" y1="95" x2="292" y2="95" stroke={svgStroke.accent} strokeWidth={1} opacity={0.6} />
      <line x1="268" y1="108" x2="285" y2="108" stroke={svgStroke.muted} strokeWidth={0.75} opacity={0.4} />
    </svg>
  );
}
