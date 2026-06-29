"use client";

import { motion, type Variants } from "framer-motion";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { AnimatedSection } from "@/components/primitives/AnimatedSection";

const principles = [
  {
    number: "01",
    name: "Simplicity",
    body: "Every abstraction you add is debt someone else pays. The best architecture is the one you can explain in five minutes.",
  },
  {
    number: "02",
    name: "Maintainability",
    body: "I write code for the engineer who inherits it at 2am during an incident. That person is usually future me.",
  },
  {
    number: "03",
    name: "Performance",
    body: "Every render delay is a product decision, not a technical one. I treat latency as UX, not ops.",
  },
  {
    number: "04",
    name: "User-First",
    body: "The measure of good engineering is whether the user ever has to think about the engineering. They shouldn't.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
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
            Convictions
          </p>
          <h2
            className="mb-6 font-extrabold tracking-tight text-[var(--foreground)]"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            What I won&apos;t compromise on.
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
          className="grid gap-px sm:grid-cols-2"
        >
          {principles.map((p) => (
            <motion.div
              key={p.number}
              variants={itemVariants}
              className="group border-l-2 border-[var(--border)] bg-[var(--surface)] p-8 transition-colors duration-300 hover:border-[var(--color-accent)]"
            >
              <p className="mb-4 font-mono text-xs text-[var(--color-accent)]">{p.number}</p>
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
