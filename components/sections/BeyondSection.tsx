"use client";

import { BookOpen, Book, Lightbulb, Target } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { AnimatedSection } from "@/components/primitives/AnimatedSection";

const cards = [
  {
    icon: BookOpen,
    title: "Continuous Learning",
    body: "Currently studying distributed systems, functional programming, and the art of saying no. I treat learning as infrastructure — compound interest for the mind.",
  },
  {
    icon: Book,
    title: "Reading",
    body: "Designing Data-Intensive Applications. The Pragmatic Programmer. Zero to One. Books that change how you think, not just what you know.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    body: "Fascinated by how systems fail — not just how they succeed. The most interesting engineering happens at the edges and under pressure.",
  },
  {
    icon: Target,
    title: "Long-Term Thinking",
    body: "I'm not building for the next sprint. I'm building for the next decade. Every decision is an investment in a future I'm trying to create.",
  },
];

export function BeyondSection() {
  return (
    <Section id="beyond" aria-label="Beyond Engineering">
      <Container>
        <AnimatedSection>
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
            The Person
          </p>
          <h2
            className="mb-6 font-semibold tracking-tight text-[var(--foreground)]"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Beyond the code.
          </h2>
          <p className="mb-16 max-w-xl text-lg leading-relaxed text-[var(--muted-color)]">
            Great engineering comes from people who think deeply, read widely,
            and stay curious long after the problem is &quot;solved.&quot;
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.1}>
              <div className="flex gap-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 h-full">
                <div className="mt-0.5 flex-shrink-0">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(99,102,241,0.1)]">
                    <card.icon size={20} color="#6366f1" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-[var(--foreground)]">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted-color)]">
                    {card.body}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
