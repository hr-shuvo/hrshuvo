import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { ProjectMockup } from "@/components/ui/ProjectMockup";
import {
  SectionIllustration,
  ProjectsHeaderIllustration,
} from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Projects",
  description: "Products I built — Ezdu and Better IELTS.",
};

const projectMeta: Record<string, { accent: string; secondaryAccent?: string; role: string; logoSrc?: string }> = {
  ezdu: {
    accent: "#10b981",
    secondaryAccent: "#0d9488",
    role: "Sole Engineer & Founder",
    logoSrc: "/ezdu-logo.png",
  },
  "better-ielts": {
    accent: "#00b87a",
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

  return (
    <div className="pt-14">

      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 pt-32 sm:px-8 md:pt-40 lg:px-12 lg:pt-48">
        <div className="relative overflow-hidden border-t border-[var(--border)] pt-14">
          <SectionIllustration
            variant="decorator"
            className="top-0 right-0 hidden lg:block w-[220px] xl:w-[260px]"
          >
            <ProjectsHeaderIllustration />
          </SectionIllustration>
          <p className="mb-5 text-xs tracking-[0.3em] text-[var(--muted-color)] uppercase">Work</p>
          <h1
            className="font-serif tracking-tight text-[var(--foreground)]"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 6rem)", fontWeight: 600, lineHeight: 1.02, letterSpacing: "-0.03em" }}
          >
            Projects.
          </h1>
          <p className="mt-5 max-w-sm text-sm leading-[1.9] text-[var(--muted-color)]">
            Products built from scratch — from schema to deployment.
          </p>
        </div>
      </div>

      {/* Featured projects */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {featured.map((project, i) => {
          const meta = projectMeta[project.id] ?? { accent: "#c2884a", role: "Engineer" };
          return (
            <article
              key={project.id}
              className="mt-20 border-t border-[var(--border)] pt-16 lg:mt-28"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-8 mb-12 flex-wrap">
                <div className="flex items-baseline gap-5">
                  <span
                    className="font-serif select-none tabular-nums"
                    style={{
                      fontSize: "clamp(2rem, 4vw, 3.5rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.04em",
                      color: "var(--border)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      {meta.logoSrc ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={meta.logoSrc}
                          alt={`${project.title} logo`}
                          className="w-7 h-7 rounded-lg flex-shrink-0"
                          style={{ objectFit: "cover" }}
                        />
                      ) : (
                        <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: meta.accent }} />
                      )}
                      <h2
                        className="font-serif text-[var(--foreground)]"
                        style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1 }}
                      >
                        {project.title}
                      </h2>
                    </div>
                    <p className="text-sm text-[var(--muted-color)] ml-10">{project.tagline}</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 flex-shrink-0">
                  <Link
                    href={`/projects/${project.id}`}
                    className="group flex items-center gap-2 text-xs tracking-[0.08em] text-[var(--foreground)] hover:text-[var(--color-accent)] transition-colors duration-200 pb-px border-b border-[var(--border)] hover:border-[var(--color-accent)]"
                  >
                    Case study →
                  </Link>
                  {project.links.length > 0 && (
                    <a
                      href={project.links[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs tracking-[0.08em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors duration-200 pb-px border-b border-[var(--border)] hover:border-[var(--muted-color)]"
                    >
                      Live site <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </div>

              {/* Visual + details */}
              <div className={`grid gap-10 lg:gap-14 ${project.id !== "better-ielts" ? "lg:grid-cols-[55%_1fr]" : ""}`}>
                {project.id !== "better-ielts" && (
                  <ProjectMockup
                    name={project.title}
                    accent={meta.accent}
                    secondaryAccent={meta.secondaryAccent}
                    variant="browser"
                    imageSrc={project.id === "ezdu" ? "/screenshots/ezdu.png" : undefined}
                  />
                )}

                <div className="flex flex-col gap-7 justify-center">
                  <div>
                    <p className="text-xs tracking-[0.15em] text-[var(--muted-color)] uppercase mb-1">Role</p>
                    <p className="text-sm text-[var(--foreground)] font-medium">{meta.role}</p>
                  </div>

                  <div>
                    <p className="text-xs tracking-[0.15em] text-[var(--muted-color)] uppercase mb-2">Problem</p>
                    <p className="text-sm leading-[1.9] text-[var(--muted-color)]">{project.problem}</p>
                  </div>

                  <div className="border-l-2 pl-4" style={{ borderColor: meta.accent }}>
                    <p className="text-xs tracking-[0.15em] text-[var(--muted-color)] uppercase mb-2">Stack</p>
                    <p className="text-xs leading-[1.75] text-[var(--muted-color)]">{project.architecture}</p>
                  </div>

                  <p className="text-sm leading-[1.9] text-[var(--foreground)]">{project.outcome}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="h-28 lg:h-36" />

    </div>
  );
}
