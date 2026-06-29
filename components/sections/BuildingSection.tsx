"use client";

import { Brain, Users, Wifi } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { AnimatedSection } from "@/components/primitives/AnimatedSection";

const cards = [
  {
    icon: Brain,
    title: "Intelligent Learning Paths",
    description:
      "AI-powered content that adapts to how each student actually learns — not a one-size-fits-all curriculum.",
  },
  {
    icon: Users,
    title: "Teacher Empowerment Tools",
    description:
      "Giving educators the ability to create, manage, and track custom learning experiences without needing a tech team.",
  },
  {
    icon: Wifi,
    title: "Resilient Infrastructure",
    description:
      "Built to scale from day one. Architecture decisions made with 10x growth in mind, not just the current user count.",
  },
];

export function BuildingSection() {
  return (
    <Section
      id="building"
      aria-label="What I'm Building"
      className="bg-[var(--surface-alt)]"
    >
      <Container>
        <AnimatedSection>
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
            What I&apos;m Building
          </p>
          <h2
            className="mb-6 font-extrabold tracking-tight text-[var(--foreground)]"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Reimagining education infrastructure.
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-[var(--muted-color)]">
            The EdTech space is full of content. What it lacks is thoughtful
            engineering. I&apos;m building the platform layer that makes truly
            great learning experiences possible.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 h-full">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(245,158,11,0.12)]">
                  <card.icon size={22} color="var(--color-accent)" />
                </div>
                <h3 className="mb-3 text-base font-semibold text-[var(--foreground)]">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted-color)]">
                  {card.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
