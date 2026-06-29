import { svgDefaults, svgFill, svgStroke } from "./svg-styles";

type SkillArea =
  | "Backend"
  | "Frontend"
  | "Mobile"
  | "Data"
  | "Infrastructure"
  | "AI / LLM";

interface SkillIconProps {
  area: SkillArea;
}

export type { SkillArea };
export function SkillIcon({ area }: SkillIconProps) {
  const s = svgDefaults;

  switch (area) {
    case "Backend":
      return (
        <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
          <rect x="6" y="4" width="20" height="6" rx="1" fill={svgFill.surface} stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
          <rect x="6" y="13" width="20" height="6" rx="1" fill={svgFill.surface} stroke={svgStroke.accent} strokeWidth={1.5} />
          <rect x="6" y="22" width="20" height="6" rx="1" fill={svgFill.surface} stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
          <circle cx="10" cy="7" r="1" fill={svgStroke.muted} />
          <circle cx="10" cy="16" r="1" fill={svgStroke.accent} />
          <circle cx="10" cy="25" r="1" fill={svgStroke.muted} />
        </svg>
      );
    case "Frontend":
      return (
        <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
          <rect x="4" y="6" width="24" height="18" rx="2" fill="none" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
          <line x1="4" y1="11" x2="28" y2="11" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
          <circle cx="8" cy="8.5" r="1" fill={svgStroke.muted} />
          <line x1="8" y1="16" x2="22" y2="16" stroke={svgStroke.accent} strokeWidth={1.5} />
          <line x1="8" y1="20" x2="16" y2="20" stroke={svgStroke.muted} strokeWidth={0.75} opacity={0.6} />
        </svg>
      );
    case "Mobile":
      return (
        <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
          <rect x="10" y="3" width="12" height="26" rx="2" fill="none" stroke={svgStroke.accent} strokeWidth={1.5} />
          <rect x="13" y="7" width="6" height="16" rx="1" fill={svgFill.surface} stroke={svgStroke.muted} strokeWidth={0.75} />
          <circle cx="16" cy="26" r="1.5" fill="none" stroke={svgStroke.muted} strokeWidth={0.75} />
        </svg>
      );
    case "Data":
      return (
        <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
          <ellipse cx="16" cy="8" rx="10" ry="4" fill={svgFill.surface} stroke={svgStroke.accent} strokeWidth={1.5} />
          <path d="M6 8 L6 16 Q16 20 26 16 L26 8" fill="none" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
          <path d="M6 16 L6 24 Q16 28 26 24 L26 16" fill="none" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
        </svg>
      );
    case "Infrastructure":
      return (
        <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
          <path d="M8 18 Q16 10 24 18" fill="none" stroke={svgStroke.muted} strokeWidth={s.strokeWidth} />
          <circle cx="10" cy="20" r="2" fill={svgFill.surface} stroke={svgStroke.muted} strokeWidth={0.75} />
          <circle cx="22" cy="20" r="2" fill={svgFill.surface} stroke={svgStroke.muted} strokeWidth={0.75} />
          <circle cx="16" cy="14" r="2" fill={svgFill.surface} stroke={svgStroke.accent} strokeWidth={1.5} />
          <line x1="10" y1="20" x2="16" y2="14" stroke={svgStroke.muted} strokeWidth={0.75} />
          <line x1="22" y1="20" x2="16" y2="14" stroke={svgStroke.muted} strokeWidth={0.75} />
        </svg>
      );
    case "AI / LLM":
      return (
        <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
          <circle cx="16" cy="16" r="4" fill="none" stroke={svgStroke.accent} strokeWidth={1.5} />
          <circle cx="8" cy="10" r="2.5" fill={svgFill.surface} stroke={svgStroke.muted} strokeWidth={0.75} />
          <circle cx="24" cy="10" r="2.5" fill={svgFill.surface} stroke={svgStroke.muted} strokeWidth={0.75} />
          <circle cx="8" cy="24" r="2.5" fill={svgFill.surface} stroke={svgStroke.muted} strokeWidth={0.75} />
          <circle cx="24" cy="24" r="2.5" fill={svgFill.surface} stroke={svgStroke.muted} strokeWidth={0.75} />
          <line x1="10" y1="12" x2="13" y2="14" stroke={svgStroke.muted} strokeWidth={0.75} />
          <line x1="22" y1="12" x2="19" y2="14" stroke={svgStroke.muted} strokeWidth={0.75} />
          <line x1="10" y1="22" x2="13" y2="18" stroke={svgStroke.muted} strokeWidth={0.75} />
          <line x1="22" y1="22" x2="19" y2="18" stroke={svgStroke.muted} strokeWidth={0.75} />
        </svg>
      );
  }
}
