"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data/projects";

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" aria-label="Selected Projects" className="relative">

      {/* Opening — left aligned, no rule device */}
      <div className="mx-auto max-w-7xl px-6 pt-32 sm:px-8 md:pt-40 lg:px-12 lg:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="border-t border-[var(--border)] pt-14">
            <h2
              className="font-serif tracking-tight text-[var(--foreground)]"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
                fontWeight: 600,
                lineHeight: 1.04,
                letterSpacing: "-0.025em",
              }}
            >
              Other work.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-[1.85] text-[var(--muted-color)]">
              Projects before the solo chapter. The work that built the instincts I rely on now.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Featured — each project gets its own composition */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {featured.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            className="mt-20 border-t border-[var(--border)] pt-16 lg:mt-24"
          >
            {/* Project name + link */}
            <div className="mb-10 flex items-baseline justify-between gap-8">
              <div>
                <h3
                  className="font-serif text-[var(--foreground)]"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  {project.title}
                </h3>
                <p className="mt-1.5 text-sm text-[var(--muted-color)]">{project.tagline}</p>
              </div>
              {project.links.length > 0 && (
                <a
                  href={project.links[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs tracking-[0.06em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors duration-300 pb-1 border-b border-[var(--border)] hover:border-[var(--muted-color)]"
                >
                  Visit <ExternalLink size={10} />
                </a>
              )}
            </div>

            {/* Long-form body — not a three-column spec sheet */}
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
          </motion.div>
        ))}
      </div>

      {/* Secondary — simple typographic list, nothing more */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-24 border-t border-[var(--border)] pt-16 lg:mt-32">
          <p className="mb-10 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Earlier</p>
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
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
            </motion.div>
          ))}
          <div className="h-28 lg:h-36" />
        </div>
      </div>
    </section>
  );
}
