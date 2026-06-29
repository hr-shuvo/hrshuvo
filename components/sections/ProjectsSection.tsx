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

        {/* Section opening */}
        <AnimatedSection>
          <div className="mb-6 flex items-center gap-5">
            <span className="text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Shipped</span>
            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>
          <div className="mb-20 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2
              className="font-serif tracking-tight text-[var(--foreground)]"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Things I shipped.
            </h2>
            <p className="max-w-64 text-sm leading-relaxed text-[var(--muted-color)] sm:text-right sm:pb-1">
              What broke, what I changed, what ended up in production.
            </p>
          </div>
        </AnimatedSection>

        {/* Featured — open layout, no rounded cards */}
        <div className="mb-2 space-y-0">
          {featured.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.06}>
              <div className="border-t border-[var(--border)] py-14 lg:py-16">
                {/* Title row */}
                <div className="mb-10 flex items-baseline justify-between gap-6">
                  <div>
                    <h3
                      className="font-serif mb-1.5 text-[var(--foreground)]"
                      style={{
                        fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--muted-color)] tracking-[0.02em]">{project.tagline}</p>
                  </div>
                  {project.links.length > 0 && (
                    <a
                      href={project.links[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs tracking-[0.06em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors border-b border-[var(--border)] pb-0.5 hover:border-[var(--foreground)] whitespace-nowrap"
                    >
                      Visit site <ExternalLink size={10} />
                    </a>
                  )}
                </div>

                {/* Body — editorial three-column on desktop */}
                <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
                  <div>
                    <p className="mb-3 text-[10px] tracking-[0.2em] text-[var(--muted-color)] uppercase">Problem</p>
                    <p className="text-sm leading-[1.8] text-[var(--foreground)]">{project.problem}</p>
                  </div>
                  <div>
                    <p className="mb-3 text-[10px] tracking-[0.2em] text-[var(--muted-color)] uppercase">What I built</p>
                    <p className="text-sm leading-[1.8] text-[var(--foreground)]">{project.solution}</p>
                  </div>
                  <div>
                    <p className="mb-3 text-[10px] tracking-[0.2em] text-[var(--muted-color)] uppercase">Outcome</p>
                    <p className="text-sm leading-[1.8] text-[var(--foreground)]">{project.outcome}</p>
                  </div>
                </div>

                {/* Tech — inline, unadorned */}
                <div className="mt-8 flex flex-wrap gap-x-4 gap-y-1">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs tracking-[0.05em] text-[var(--muted-color)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Secondary — compact, list-form */}
        <div className="mt-2">
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
              className="group grid border-t border-[var(--border)] py-8 gap-4 lg:grid-cols-[14rem_1fr_12rem] lg:gap-12 lg:items-start"
            >
              <div>
                <h3
                  className="font-serif mb-1 text-[var(--foreground)] group-hover:text-[var(--color-accent)] transition-colors"
                  style={{ fontSize: "1rem", fontWeight: 500, letterSpacing: "-0.01em" }}
                >
                  {project.title}
                </h3>
                <p className="text-xs text-[var(--muted-color)]">{project.tagline}</p>
              </div>
              <p className="text-sm leading-[1.8] text-[var(--muted-color)]">{project.outcome}</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 lg:justify-end">
                {project.tech.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs tracking-[0.04em] text-[var(--muted-color)]">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[var(--border)]" />
        </div>
      </div>
    </Section>
  );
}
