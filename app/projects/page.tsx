import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { ProjectMockup } from "@/components/ui/ProjectMockup";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies from Ezdu, Better IELTS, and the work that built the instincts I rely on now.",
};

const projectMeta: Record<string, { accent: string; secondaryAccent?: string; role: string; logoSrc?: string }> = {
  ezdu: {
    accent: "#10b981",
    secondaryAccent: "#0d9488",
    role: "Sole Engineer & Founder",
    logoSrc: "/ezdu-logo.png",
  },
  "better-ielts": {
    accent: "#00d492",
    secondaryAccent: "#008d61",
    role: "Sole Engineer & Founder",
    logoSrc: "/better-ielts-logo.svg",
  },
  "school-management": {
    accent: "#2563eb",
    role: "Software Engineer",
  },
  "ota-system": {
    accent: "#0ea5e9",
    role: "Full-Stack Engineer",
  },
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="pt-14">

      {/* Opening */}
      <div className="mx-auto max-w-7xl px-6 pt-32 sm:px-8 md:pt-40 lg:px-12 lg:pt-48">
        <div className="border-t border-[var(--border)] pt-14">
          <h1
            className="font-serif tracking-tight text-[var(--foreground)]"
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
              fontWeight: 600,
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
            }}
          >
            The work.
          </h1>
          <p className="mt-5 max-w-sm text-sm leading-[1.85] text-[var(--muted-color)]">
            Products I built — what the problem was, what I decided, and what it taught me.
          </p>
        </div>
      </div>

      {/* Featured projects */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {featured.map((project, i) => {
          const meta = projectMeta[project.id] ?? { accent: "#c2884a", role: "Engineer" };
          return (
            <div
              key={project.id}
              className="mt-20 border-t border-[var(--border)] pt-16 lg:mt-28"
            >
              {/* Header row */}
              <div className="flex items-start justify-between gap-8 mb-12 flex-wrap">
                <div className="flex items-baseline gap-5">
                  <span
                    className="font-serif text-[var(--surface-alt)] select-none tabular-nums"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 600, letterSpacing: "-0.04em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    {/* Project identity: color swatch + name */}
                    <div className="flex items-center gap-3 mb-1">
                      {meta.logoSrc ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={meta.logoSrc} alt={`${project.title} logo`} className="w-7 h-7 rounded-lg flex-shrink-0" style={{ objectFit: "cover" }} />
                      ) : (
                        <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: meta.accent }} />
                      )}
                      <h2
                        className="font-serif text-[var(--foreground)]"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                          fontWeight: 600,
                          letterSpacing: "-0.02em",
                          lineHeight: 1.1,
                        }}
                      >
                        {project.title}
                      </h2>
                    </div>
                    <p className="text-sm text-[var(--muted-color)] ml-6">{project.tagline}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-xs tracking-[0.06em] text-[var(--foreground)] hover:text-[var(--muted-color)] transition-colors pb-1 border-b border-[var(--foreground)] hover:border-[var(--muted-color)]"
                  >
                    Case study
                  </Link>
                  {project.links.length > 0 && (
                    <a
                      href={project.links[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs tracking-[0.06em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors pb-1 border-b border-[var(--border)] hover:border-[var(--muted-color)]"
                    >
                      Visit <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </div>

              {/* Visual-first layout: mockup left, text right */}
              <div className="grid gap-10 lg:grid-cols-[55%_1fr] lg:gap-14">

                {/* Mockup — visual identity */}
                <ProjectMockup
                  name={project.title}
                  accent={meta.accent}
                  secondaryAccent={meta.secondaryAccent}
                  variant="browser"
                  imageSrc={project.id === "ezdu" ? "/screenshots/ezdu.png" : undefined}
                />

                {/* Project details */}
                <div className="flex flex-col gap-6 justify-center">
                  {/* Role badge */}
                  <div>
                    <p className="text-xs tracking-[0.15em] text-[var(--muted-color)] uppercase mb-1">My role</p>
                    <p className="text-sm text-[var(--foreground)] font-medium">{meta.role}</p>
                  </div>

                  <div>
                    <p className="text-xs tracking-[0.15em] text-[var(--muted-color)] uppercase mb-2">The problem</p>
                    <p className="text-sm leading-[1.85] text-[var(--muted-color)]">{project.problem}</p>
                  </div>

                  {/* Stack */}
                  <div
                    className="border-l-2 pl-4"
                    style={{ borderColor: meta.accent }}
                  >
                    <p className="text-xs tracking-[0.15em] text-[var(--muted-color)] uppercase mb-2">Stack</p>
                    <p className="text-xs leading-[1.7] text-[var(--muted-color)]">{project.architecture}</p>
                  </div>

                  {/* Outcome */}
                  <p className="text-sm leading-[1.85] text-[var(--foreground)]">{project.outcome}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Earlier work — with mobile mockups */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-24 border-t border-[var(--border)] pt-16 lg:mt-32">
          <p className="mb-10 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">
            Earlier work
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {rest.map((project) => {
              const meta = projectMeta[project.id] ?? { accent: "#c2884a", role: "Engineer" };
              return (
                <div
                  key={project.id}
                  className="border border-[var(--border)] overflow-hidden"
                >
                  {/* Mini mockup */}
                  <ProjectMockup
                    name={project.title}
                    accent={meta.accent}
                    variant="desktop"
                    // imageSrc="/screenshots/project.png"
                  />
                  {/* Card body */}
                  <div className="p-5">
                    <div className="flex items-center gap-2.5 mb-2">
                      {meta.logoSrc ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={meta.logoSrc} alt={`${project.title} logo`} className="w-5 h-5 rounded flex-shrink-0" style={{ objectFit: "cover" }} />
                      ) : (
                        <div className="w-2 h-2 rounded-sm" style={{ background: meta.accent }} />
                      )}
                      <h3
                        className="font-serif text-[var(--foreground)]"
                        style={{ fontSize: "0.95rem", fontWeight: 500, letterSpacing: "-0.01em" }}
                      >
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[var(--muted-color)] mb-3">{project.tagline}</p>
                    <p className="text-xs leading-[1.75] text-[var(--muted-color)]">{project.outcome}</p>
                    <p className="mt-3 text-xs text-[var(--muted-color)]" style={{ opacity: 0.6 }}>
                      {meta.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="h-28 lg:h-36" />
        </div>
      </div>

    </div>
  );
}
