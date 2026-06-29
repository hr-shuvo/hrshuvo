"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { AnimatedSection } from "@/components/primitives/AnimatedSection";
import { journeyItems } from "@/lib/data/journey";

export function JourneySection() {
  return (
    <Section id="journey" aria-label="My Journey">
      <Container>
        {/* Section header */}
        <AnimatedSection>
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
            Background
          </p>
          <h2
            className="mb-20 font-semibold tracking-tight text-[var(--foreground)]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Not a biography.
            <br />
            <span className="text-[var(--muted-color)]">A path.</span>
          </h2>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[7.5rem] top-0 hidden h-full w-px md:block"
            style={{ background: "var(--border)" }}
          />

          <div className="space-y-16">
            {journeyItems.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.08} direction="left">
                <div className="flex flex-col gap-4 md:flex-row md:gap-0">
                  {/* Year */}
                  <div className="flex-shrink-0 md:w-36">
                    <span className="font-mono text-sm font-medium text-[#6366f1]">
                      {item.year}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="relative hidden md:flex md:w-10 md:flex-shrink-0 md:justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + 0.2, type: "spring", stiffness: 200 }}
                      className="h-3 w-3 rounded-full border-2 border-[#6366f1] bg-[var(--background)]"
                      style={{ marginTop: "3px" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 md:pl-8">
                    <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="mb-4 leading-relaxed text-[var(--muted-color)]">
                      {item.body}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted-color)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
