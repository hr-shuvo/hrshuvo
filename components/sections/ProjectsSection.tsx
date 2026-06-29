"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { AnimatedSection } from "@/components/primitives/AnimatedSection";
import { projects } from "@/lib/data/projects";

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" aria-label="Selected Projects">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header — minimal, tight */}
        <AnimatedSection>
          <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
                Shipped
              </p>
              <h2
                className="font-extrabold tracking-tight text-[var(--foreground)]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 0.95 }}
              >
                Selected projects.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--muted-color)] sm:text-right">
              Decisions, trade-offs, and outcomes — not screenshots.
            </p>
          </div>
        </AnimatedSection>

        {/* Featured: asymmetric two-column layout */}
        <div className="mb-4 grid gap-4 lg:grid-cols-[3fr_2fr]">
          {featured.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
                style={{ boxShadow: "0 2px 16px rgba(245,158,11,0.05)" }}
              >
                {/* Title + link */}
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className="mb-1 font-extrabold text-[var(--foreground)]"
                      style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--muted-color)]">{project.tagline}</p>
                  </div>
                  {project.links.length > 0 && (
                    <a
                      href={project.links[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={project.links[0].label}
                      className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-color)] hover:text-[var(--foreground)] hover:border-[var(--foreground)] transition-colors"
                    >
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>

                {/* Two-col problem/solution */}
                <div className="mb-6 grid gap-4 flex-1 sm:grid-cols-2">
                  <div>
                    <p className="mb-1.5 text-[10px] font-medium tracking-widest text-[var(--muted-color)] uppercase">
                      Problem
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--foreground)]">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1.5 text-[10px] font-medium tracking-widest text-[var(--muted-color)] uppercase">
                      Solution
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--foreground)]">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Outcome — highlighted */}
                <div className="mb-6 rounded-xl bg-[var(--surface-alt)] px-4 py-3">
                  <p className="mb-1 text-[10px] font-medium tracking-widest text-[var(--muted-color)] uppercase">
                    Outcome
                  </p>
                  <p className="text-sm font-medium leading-relaxed text-[var(--foreground)]">
                    {project.outcome}
                  </p>
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[var(--border)] px-2.5 py-0.5 text-xs text-[var(--muted-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Non-featured: compact horizontal list */}
        <div className="border-t border-[var(--border)]">
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="group grid border-b border-[var(--border)] py-7 gap-4 lg:grid-cols-[16rem_1fr_auto] lg:gap-12 lg:items-center"
            >
              <div>
                <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--color-accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[var(--muted-color)] mt-0.5">{project.tagline}</p>
              </div>
              <p className="text-sm leading-relaxed text-[var(--muted-color)]">
                {project.outcome}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-[var(--border)] px-2.5 py-0.5 text-xs text-[var(--muted-color)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
