import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies from Ezdu, Better IELTS, and the work that built the instincts I rely on now.",
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="pt-14">

      {/* Page opening */}
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
          <p className="mt-5 max-w-md text-sm leading-[1.85] text-[var(--muted-color)]">
            Case studies from products I built — what the problem was, how I approached it,
            what I decided, and what I learned.
          </p>
        </div>
      </div>

      {/* Featured projects */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {featured.map((project) => (
          <div
            key={project.id}
            className="mt-20 border-t border-[var(--border)] pt-16 lg:mt-24"
          >
            <div className="mb-10 flex items-baseline justify-between gap-8">
              <div>
                <h2
                  className="font-serif text-[var(--foreground)]"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  {project.title}
                </h2>
                <p className="mt-1.5 text-sm text-[var(--muted-color)]">{project.tagline}</p>
              </div>
              <div className="flex-shrink-0 flex items-center gap-4">
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-xs tracking-[0.06em] text-[var(--foreground)] hover:text-[var(--muted-color)] transition-colors duration-300 pb-1 border-b border-[var(--foreground)] hover:border-[var(--muted-color)]"
                >
                  Case study
                </Link>
                {project.links.length > 0 && (
                  <a
                    href={project.links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs tracking-[0.06em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors duration-300 pb-1 border-b border-[var(--border)] hover:border-[var(--muted-color)]"
                  >
                    Visit <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-[60%_1fr] lg:gap-20">
              <div className="space-y-4">
                <p className="text-sm leading-[1.9] text-[var(--foreground)]">{project.problem}</p>
                <p className="text-sm leading-[1.9] text-[var(--foreground)]">{project.solution}</p>
              </div>
              <div className="lg:pt-0.5">
                <p className="mb-6 text-sm leading-[1.85] text-[var(--muted-color)]">{project.outcome}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs tracking-[0.04em] text-[var(--muted-color)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Earlier work */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-24 border-t border-[var(--border)] pt-16 lg:mt-32">
          <p className="mb-10 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Earlier</p>
          {rest.map((project) => (
            <div
              key={project.id}
              className="border-b border-[var(--border)] py-8 grid gap-3 lg:grid-cols-[22rem_1fr] lg:gap-12"
            >
              <div>
                <h3
                  className="font-serif text-[var(--foreground)]"
                  style={{ fontSize: "1rem", fontWeight: 500, letterSpacing: "-0.01em" }}
                >
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-[var(--muted-color)]">{project.tagline}</p>
              </div>
              <p className="text-sm leading-[1.8] text-[var(--muted-color)]">{project.outcome}</p>
            </div>
          ))}
          <div className="h-28 lg:h-36" />
        </div>
      </div>

    </div>
  );
}
