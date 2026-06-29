"use client";

/**
 * CSS-only product mockup placeholder.
 * Replace `imageSrc` with a real screenshot path when assets are available.
 * The `variant` controls the shape: "desktop", "mobile", or "browser".
 */

interface ProjectMockupProps {
  name: string;
  accent: string;        // brand color hex
  secondaryAccent?: string;
  variant?: "browser" | "mobile" | "desktop";
  imageSrc?: string;     // real screenshot — leave undefined for placeholder
  className?: string;
}

export function ProjectMockup({
  name,
  accent,
  secondaryAccent,
  variant = "browser",
  imageSrc,
  className = "",
}: ProjectMockupProps) {
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  if (variant === "mobile") {
    return (
      <div className={`relative flex justify-center ${className}`}>
        {/* Phone shell */}
        <div
          className="relative w-[160px] h-[320px] rounded-[2rem] border-2 shadow-xl overflow-hidden flex-shrink-0"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        >
          {/* Notch */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 rounded-b-xl z-10"
            style={{ background: "var(--surface-alt)" }}
          />
          {/* Screen content */}
          <div className="w-full h-full pt-5">
            {imageSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={imageSrc} alt={`${name} screenshot`} className="w-full h-full object-cover object-top" />
            ) : (
              <PlaceholderScreen accent={accent} secondaryAccent={secondaryAccent} initials={initials} name={name} />
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "browser") {
    return (
      <div className={`relative ${className}`}>
        {/* Browser chrome */}
        <div
          className="rounded-t-lg border border-b-0 px-3 py-2 flex items-center gap-2"
          style={{ background: "var(--surface-alt)", borderColor: "var(--border)" }}
        >
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c, opacity: 0.7 }} />
            ))}
          </div>
          {/* URL bar */}
          <div
            className="flex-1 rounded text-xs px-2 py-0.5 text-center truncate"
            style={{ background: "var(--surface)", color: "var(--muted-color)", fontSize: "0.6rem" }}
          >
            {name.toLowerCase().replace(/\s/g, "")}.{name === "Better IELTS" ? "com" : "net"}
          </div>
        </div>
        {/* Viewport */}
        <div
          className="border rounded-b-lg overflow-hidden"
          style={{ borderColor: "var(--border)", aspectRatio: "16/9" }}
        >
          {imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imageSrc} alt={`${name} screenshot`} className="w-full h-full object-cover object-top" />
          ) : (
            <PlaceholderScreen accent={accent} secondaryAccent={secondaryAccent} initials={initials} name={name} />
          )}
        </div>
      </div>
    );
  }

  // desktop — plain framed rectangle
  return (
    <div className={`relative ${className}`}>
      <div
        className="border rounded-lg overflow-hidden shadow-md"
        style={{ borderColor: "var(--border)", aspectRatio: "16/9" }}
      >
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageSrc} alt={`${name} screenshot`} className="w-full h-full object-cover object-top" />
        ) : (
          <PlaceholderScreen accent={accent} secondaryAccent={secondaryAccent} initials={initials} name={name} />
        )}
      </div>
    </div>
  );
}

function PlaceholderScreen({
  accent,
  secondaryAccent,
  initials,
  name,
}: {
  accent: string;
  secondaryAccent?: string;
  initials: string;
  name: string;
}) {
  return (
    <div
      className="w-full h-full relative overflow-hidden flex flex-col"
      style={{ background: "var(--surface)" }}
    >
      {/* Gradient wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 60% 40%, ${accent}18 0%, transparent 70%)`,
        }}
      />
      {/* Simulated nav bar */}
      <div
        className="relative z-10 flex items-center gap-2 px-3 py-2 border-b"
        style={{ borderColor: "var(--border)", background: "var(--background)" }}
      >
        <div
          className="w-4 h-4 rounded-sm flex-shrink-0"
          style={{ background: accent }}
        />
        <div className="h-1.5 w-10 rounded-full" style={{ background: "var(--surface-alt)" }} />
        <div className="flex-1" />
        <div className="h-1.5 w-6 rounded-full" style={{ background: "var(--surface-alt)" }} />
        <div className="h-1.5 w-6 rounded-full" style={{ background: "var(--surface-alt)" }} />
      </div>

      {/* Content area */}
      <div className="relative flex-1 flex items-center justify-center p-4">
        {/* Brand mark */}
        <div className="text-center">
          <div
            className="mx-auto mb-3 flex items-center justify-center rounded-xl font-serif font-bold"
            style={{
              width: 48,
              height: 48,
              background: accent,
              color: "#fff",
              fontSize: "1.1rem",
              letterSpacing: "-0.02em",
            }}
          >
            {initials}
          </div>
          <p
            className="font-serif font-medium"
            style={{ color: "var(--foreground)", fontSize: "0.75rem", letterSpacing: "-0.01em" }}
          >
            {name}
          </p>
          <p
            style={{ color: "var(--muted-color)", fontSize: "0.55rem", marginTop: 2, letterSpacing: "0.08em" }}
          >
            SCREENSHOT PLACEHOLDER
          </p>
        </div>

        {/* Simulated UI elements */}
        <div className="absolute bottom-3 left-3 right-3 space-y-1.5">
          <div className="h-1.5 rounded-full w-3/4" style={{ background: "var(--surface-alt)" }} />
          <div className="h-1.5 rounded-full w-1/2" style={{ background: "var(--surface-alt)" }} />
          <div
            className="h-5 rounded-md w-20 mt-2"
            style={{ background: accent, opacity: 0.25 }}
          />
        </div>

        {/* Decorative circle */}
        <div
          className="absolute top-2 right-2 rounded-full opacity-10"
          style={{ width: 60, height: 60, background: secondaryAccent ?? accent }}
        />
      </div>
    </div>
  );
}
