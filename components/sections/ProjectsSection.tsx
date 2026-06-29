"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { AnimatedSection } from "@/components/primitives/AnimatedSection";
import { projects } from "@/lib/data/projects";

export function ProjectsSection() {
  return (
    <Section id="projects" aria-label="Selected Projects">
      <Container>
        <AnimatedSection>
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
            Work
          </p>
          <h2
            className="mb-6 font-semibold tracking-tight text-[var(--foreground)]"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Selected projects.
          </h2>
          <p className="mb-16 max-w-xl text-lg leading-relaxed text-[var(--muted-color)]">
            Every project here started with a real problem. These are the
            decisions, trade-offs, and outcomes — not just the screenshots.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
                style={{
                  boxShadow: "0 0 0 0 rgba(99,102,241,0)",
                  transition: "box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 20px 60px rgba(99,102,241,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 0 0 rgba(99,102,241,0)";
                }}
              >
                {/* Title row */}
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="mb-1 text-xl font-semibold text-[var(--foreground)]">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--muted-color)]">
                      {project.tagline}
                    </p>
                  </div>
                  {project.links.length > 0 && (
                    <div className="flex gap-2 flex-shrink-0">
                      {project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.label}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-color)] hover:text-[var(--foreground)] hover:border-[var(--foreground)] transition-colors"
                        >
                          <ExternalLink size={14} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Problem / Solution */}
                <div className="mb-6 space-y-4 flex-1">
                  <div>
                    <p className="mb-1 text-xs font-medium tracking-wider text-[var(--muted-color)] uppercase">
                      Problem
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--foreground)]">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-medium tracking-wider text-[var(--muted-color)] uppercase">
                      Solution
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--foreground)]">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-medium tracking-wider text-[var(--muted-color)] uppercase">
                      Architecture
                    </p>
                    <p className="text-sm leading-relaxed italic text-[var(--muted-color)]">
                      {project.architecture}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-medium tracking-wider text-[var(--muted-color)] uppercase">
                      Outcome
                    </p>
                    <p className="text-sm leading-relaxed font-medium text-[var(--foreground)]">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
