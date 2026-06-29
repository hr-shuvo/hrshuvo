"use client";

import { motion, type Variants } from "framer-motion";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { AnimatedSection } from "@/components/primitives/AnimatedSection";

const principles = [
  {
    number: "01",
    name: "Simplicity",
    body: "The solution should be no more complex than the problem demands. Complexity is a liability.",
  },
  {
    number: "02",
    name: "Scalability",
    body: "Build for 10x, design for 100x, architect for 1000x. The decisions you make at the start compound.",
  },
  {
    number: "03",
    name: "Security",
    body: "Security isn't a feature you add at the end. It's the foundation everything else is built on.",
  },
  {
    number: "04",
    name: "Maintainability",
    body: "Code is read far more often than it's written. Write for the engineer who comes next.",
  },
  {
    number: "05",
    name: "Performance",
    body: "Speed is a feature. Latency is a choice. Every millisecond of delay is a user experience decision.",
  },
  {
    number: "06",
    name: "User-First",
    body: "If a user has to think about how to use something, you've already made a mistake.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function PhilosophySection() {
  return (
    <Section
      id="philosophy"
      aria-label="Engineering Philosophy"
      className="bg-[var(--surface-alt)]"
    >
      <Container>
        <AnimatedSection>
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
            How I Think
          </p>
          <h2
            className="mb-6 font-extrabold tracking-tight text-[var(--foreground)]"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Engineering philosophy.
          </h2>
          <p className="mb-16 max-w-xl text-lg leading-relaxed text-[var(--muted-color)]">
            These aren&apos;t guidelines I follow — they&apos;re convictions
            shaped by building real systems that real people depend on.
          </p>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {principles.map((p) => (
            <motion.div
              key={p.number}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 cursor-default"
              style={{ boxShadow: "0 2px 12px rgba(245,158,11,0.06)" }}
            >
              <p className="mb-3 font-mono text-xs text-[var(--color-accent)]">{p.number}</p>
              <h3 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
                {p.name}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--muted-color)]">
                {p.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
