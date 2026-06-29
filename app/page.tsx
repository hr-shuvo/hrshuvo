import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen pt-14 flex flex-col">
      <section className="flex-1 flex flex-col justify-center relative overflow-hidden">

        {/* Warm ambient gradient */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background: [
              "radial-gradient(ellipse 75% 60% at 10% 55%, rgba(194,136,74,0.09) 0%, transparent 55%)",
              "radial-gradient(ellipse 45% 50% at 90% 25%, rgba(194,136,74,0.05) 0%, transparent 60%)",
            ].join(", "),
          }}
        />

        {/* Decorative large letterform */}
        <div
          className="pointer-events-none absolute right-0 top-1/2 select-none font-serif leading-none"
          aria-hidden="true"
          style={{
            fontSize: "clamp(20rem, 44vw, 40rem)",
            fontWeight: 700,
            letterSpacing: "-0.06em",
            lineHeight: 1,
            transform: "translateY(-52%) translateX(16%)",
            color: "var(--foreground)",
            opacity: 0.05,
          }}
        >
          S
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_260px] lg:gap-16 lg:items-end">

            {/* Left column */}
            <div>
              {/* Animated status */}
              <div className="mb-12 flex items-center gap-3">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50"
                    style={{ background: "var(--color-accent)" }}
                  />
                  <span
                    className="relative inline-flex h-2 w-2 rounded-full"
                    style={{ background: "var(--color-accent)" }}
                  />
                </span>
                <p className="text-xs tracking-[0.22em] text-[var(--muted-color)] uppercase">
                  Dhaka, Bangladesh&nbsp;&nbsp;·&nbsp;&nbsp;
                  <span style={{ color: "var(--color-accent)" }}>Currently building Ezdu</span>
                </p>
              </div>

              {/* Name — breaks to two lines for more visual mass */}
              <h1
                className="font-serif text-[var(--foreground)]"
                style={{
                  fontSize: "clamp(4.5rem, 11.5vw, 11rem)",
                  fontWeight: 600,
                  lineHeight: 0.92,
                  letterSpacing: "-0.04em",
                }}
              >
                Shuvo
              </h1>

              {/* Title */}
              <p
                className="mt-8 font-serif text-[var(--muted-color)]"
                style={{
                  fontSize: "clamp(1rem, 2.1vw, 1.65rem)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  letterSpacing: "-0.01em",
                }}
              >
                Creative Technologist.
              </p>

              {/* Tagline */}
              <p
                className="mt-5 text-[var(--muted-color)]"
                style={{
                  fontSize: "clamp(0.8rem, 1.05vw, 0.88rem)",
                  lineHeight: 1.9,
                  maxWidth: "40ch",
                }}
              >
                2.5+ years building production systems for real organisations.
                Two products in production.
              </p>

              {/* Navigation hints with animated line */}
              <nav className="mt-12 flex flex-wrap gap-x-8 gap-y-2.5" aria-label="Explore">
                {[
                  { label: "About",      href: "/about"      },
                  { label: "Projects",   href: "/projects"   },
                  { label: "Experience", href: "/experience" },
                  { label: "Contact",    href: "/contact"    },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-2.5 text-xs tracking-[0.1em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors duration-200"
                  >
                    <span
                      className="block h-px bg-current transition-all duration-300 group-hover:w-6"
                      style={{ width: "14px" }}
                    />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right column — product previews (desktop only) */}
            <div className="hidden lg:flex flex-col gap-2.5">
              <p className="text-xs tracking-[0.2em] text-[var(--muted-color)] uppercase mb-2">
                Live products
              </p>

              {[
                {
                  name: "Ezdu",
                  tag: "Mobile learning · EdTech",
                  accent: "#10b981",
                  href: "/projects",
                }
              ].map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="group block border border-[var(--border)] p-4 hover:border-[var(--foreground)] transition-all duration-200"
                  style={{ background: "var(--surface)" }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.accent }} />
                      <p
                        className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--color-accent)] transition-colors duration-200"
                        style={{ letterSpacing: "-0.01em" }}
                      >
                        {p.name}
                      </p>
                    </div>
                    <span
                      className="text-xs px-1.5 py-0.5 flex-shrink-0"
                      style={{ background: `${p.accent}1a`, color: p.accent }}
                    >
                      Live
                    </span>
                  </div>
                  <p className="text-xs text-[var(--muted-color)]">{p.tag}</p>
                </Link>
              ))}

              <Link
                href="/projects"
                className="text-right text-xs text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors duration-200 mt-1 tracking-[0.05em]"
              >
                All work →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="mx-auto w-full max-w-7xl px-6 pb-8 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between border-t border-[var(--border)] pt-5">
          <p
            className="font-serif text-[var(--border)]"
            style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}
          >
            2026
          </p>
          <p
            className="font-serif italic text-[var(--border)]"
            style={{ fontSize: "0.65rem", letterSpacing: "0.06em" }}
          >
            hrshuvo.dev
          </p>
        </div>
      </div>
    </div>
  );
}
