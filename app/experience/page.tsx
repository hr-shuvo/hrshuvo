import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { experiences } from "@/lib/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Two years across two companies before going independent.",
};

function LogoPlaceholder({ accent, initials }: { accent: string; initials: string }) {
  return (
    <div
      className="flex items-center justify-center rounded-xl font-sans font-bold text-white flex-shrink-0"
      style={{ width: 52, height: 52, background: accent, fontSize: "0.8rem", letterSpacing: "0.02em" }}
    >
      {initials}
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <div className="pt-14">

      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 pt-32 sm:px-8 md:pt-40 lg:px-12 lg:pt-48">
        <div className="border-t border-[var(--border)] pt-14">
          <p className="mb-5 text-xs tracking-[0.3em] text-[var(--muted-color)] uppercase">Career</p>
          <h1
            className="font-serif tracking-tight text-[var(--foreground)]"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 6rem)", fontWeight: 600, lineHeight: 1.02, letterSpacing: "-0.03em" }}
          >
            Experience.
          </h1>
          <p className="mt-5 max-w-md text-sm leading-[1.9] text-[var(--muted-color)]">
            Two years, two companies. Every role shaped how I think about systems and ownership.
          </p>
        </div>
      </div>

      {/* Roles */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {experiences.map((exp, i) => {
          const initials = exp.company.split(/\s+/).map((w) => w[0]).join("").toUpperCase().slice(0, 2);
          const isLast = i === experiences.length - 1;

          return (
            <article key={exp.id} className="mt-20 border-t border-[var(--border)] pt-16 lg:mt-28">

              {/* Company header */}
              <div className="flex items-start gap-5 mb-10 flex-wrap">
                {exp.logoSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={exp.logoSrc}
                    alt={`${exp.company} logo`}
                    className="rounded-xl object-cover flex-shrink-0"
                    style={{ width: 52, height: 52 }}
                  />
                ) : (
                  <LogoPlaceholder accent={exp.logoAccent} initials={initials} />
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h2
                          className="font-serif text-[var(--foreground)]"
                          style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)", fontWeight: 600, letterSpacing: "-0.02em" }}
                        >
                          {exp.company}
                        </h2>
                        {exp.url && (
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors"
                          >
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>
                      <p className="mt-0.5 text-sm text-[var(--muted-color)]">{exp.tagline}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-medium text-[var(--foreground)]">{exp.role}</p>
                      <p className="mt-0.5 text-xs text-[var(--muted-color)]">{exp.period} · {exp.duration}</p>
                      <p className="text-xs text-[var(--muted-color)]">{exp.location}</p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-3 flex-wrap">
                    <span className="text-xs tracking-[0.08em] px-2.5 py-1 border border-[var(--border)] text-[var(--muted-color)]">
                      {exp.type}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.projects.map((p) => (
                        <span
                          key={p}
                          className="text-xs px-2.5 py-1"
                          style={{ background: `${exp.logoAccent}18`, color: exp.logoAccent }}
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content grid */}
              <div className="grid gap-12 lg:grid-cols-[55%_1fr] lg:gap-20">

                {/* Left: story + responsibilities */}
                <div>
                  <div className="border-l-2 pl-6 mb-10" style={{ borderColor: exp.logoAccent }}>
                    <p className="text-sm leading-[1.95] text-[var(--foreground)]">{exp.story}</p>
                  </div>

                  <div>
                    <p className="text-xs tracking-[0.2em] text-[var(--muted-color)] uppercase mb-5">Responsibilities</p>
                    <ul className="space-y-3.5">
                      {exp.responsibilities.map((r, ri) => (
                        <li key={ri} className="flex gap-4 items-start">
                          <span
                            className="mt-2 flex-shrink-0 w-1 h-1 rounded-full"
                            style={{ background: exp.logoAccent }}
                          />
                          <p className="text-sm leading-[1.85] text-[var(--muted-color)]">{r}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: achievements + tech */}
                <div className="space-y-10">
                  <div>
                    <p className="text-xs tracking-[0.2em] text-[var(--muted-color)] uppercase mb-5">Key achievements</p>
                    <div className="space-y-4">
                      {exp.achievements.map((a, ai) => (
                        <div key={ai} className="flex gap-4 items-start">
                          <span
                            className="font-serif flex-shrink-0 mt-0.5"
                            style={{ color: exp.logoAccent, fontSize: "0.65rem", fontWeight: 700 }}
                          >
                            {String(ai + 1).padStart(2, "0")}
                          </span>
                          <p className="text-sm leading-[1.85] text-[var(--foreground)]">{a}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs tracking-[0.2em] text-[var(--muted-color)] uppercase mb-4">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs border border-[var(--border)] px-2.5 py-1 text-[var(--muted-color)] hover:border-[var(--muted-color)] transition-colors duration-150"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {!isLast && (
                <div className="mt-16 flex items-center gap-4 lg:mt-20">
                  <div className="h-px flex-1" style={{ background: "var(--border)" }} />
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--border)" }} />
                  <div className="h-px flex-1" style={{ background: "var(--border)" }} />
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* Current chapter */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-20 border-t border-[var(--border)] py-16 lg:mt-28">
          <div className="flex items-start gap-5">
            <div
              className="flex items-center justify-center rounded-xl flex-shrink-0"
              style={{ width: 52, height: 52, border: "2px solid var(--color-accent)" }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: "var(--color-accent)" }} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                <h2
                  className="font-serif text-[var(--foreground)]"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontWeight: 600, letterSpacing: "-0.015em" }}
                >
                  Independent — Ezdu &amp; Better IELTS
                </h2>
                <span
                  className="text-xs px-2 py-0.5"
                  style={{ background: "#10b98118", color: "#10b981" }}
                >
                  Current
                </span>
              </div>
              <p className="text-sm text-[var(--muted-color)] mb-3">2024 – Present · Founder &amp; Sole Engineer</p>
              <p className="text-sm leading-[1.9] text-[var(--muted-color)] max-w-xl">
                Left employment to build independently. Two products in production —
                full ownership of product, engineering, and operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-20 lg:h-28" />
    </div>
  );
}
