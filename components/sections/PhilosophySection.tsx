"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/primitives/Section";
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

export function PhilosophySection() {
  return (
    <Section
      id="philosophy"
      aria-label="Engineering Philosophy"
      className="bg-[var(--surface-alt)]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header — left/right split */}
        <AnimatedSection>
          <div className="mb-20 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
                Convictions
              </p>
              <h2
                className="font-extrabold leading-[0.95] tracking-tight text-[var(--foreground)]"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                What I won&apos;t
                <br />
                compromise on.
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-lg leading-relaxed text-[var(--muted-color)]">
                These aren&apos;t guidelines I follow — they&apos;re convictions
                shaped by building real systems that real people depend on.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Principles — two column, statement large on left, body small on right */}
        <div className="space-y-0">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              className="grid border-t border-[var(--border)] py-10 gap-4 lg:grid-cols-[3rem_1fr_1fr] lg:gap-16 lg:items-center"
            >
              <span className="font-mono text-xs text-[var(--color-accent)]">{p.number}</span>
              <h3
                className="font-extrabold tracking-tight text-[var(--foreground)]"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
              >
                {p.name}
              </h3>
              <p className="text-base leading-relaxed text-[var(--muted-color)]">
                {p.body}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-[var(--border)]" />
        </div>
      </div>
    </Section>
  );
}
