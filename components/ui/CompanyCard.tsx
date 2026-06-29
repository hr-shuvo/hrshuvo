interface CompanyCardProps {
  name: string;
  role: string;
  period: string;
  accent: string;
  logoSrc?: string;       // real logo — leave undefined for placeholder
  description?: string;
  url?: string;
}

export function CompanyCard({
  name,
  role,
  period,
  accent,
  logoSrc,
  description,
  url,
}: CompanyCardProps) {
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);

  const Wrapper = url ? "a" : "div";
  const wrapperProps = url
    ? { href: url, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex items-start gap-4 p-5 border border-[var(--border)] hover:border-[var(--muted-color)] transition-colors duration-200"
      style={{ textDecoration: "none" }}
    >
      {/* Logo / placeholder */}
      <div
        className="flex-shrink-0 flex items-center justify-center rounded-lg font-sans font-semibold text-white"
        style={{
          width: 40,
          height: 40,
          background: logoSrc ? "transparent" : accent,
          fontSize: "0.65rem",
          letterSpacing: "0.02em",
        }}
      >
        {logoSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={logoSrc} alt={`${name} logo`} className="w-full h-full object-contain rounded-lg" />
        ) : (
          initials
        )}
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3 flex-wrap">
          <p
            className="font-serif text-[var(--foreground)] font-medium"
            style={{ fontSize: "0.9rem", letterSpacing: "-0.01em" }}
          >
            {name}
          </p>
          <p
            className="text-xs text-[var(--muted-color)] flex-shrink-0"
            style={{ fontSize: "0.7rem", letterSpacing: "0.04em" }}
          >
            {period}
          </p>
        </div>
        <p className="mt-0.5 text-xs text-[var(--muted-color)]" style={{ letterSpacing: "0.02em" }}>
          {role}
        </p>
        {description && (
          <p className="mt-2 text-xs leading-[1.7] text-[var(--muted-color)]">{description}</p>
        )}
      </div>
    </Wrapper>
  );
}
