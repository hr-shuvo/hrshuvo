"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/primitives/Section";
import { AnimatedSection } from "@/components/primitives/AnimatedSection";

const principles = [
  {
    number: "01",
    name: "Write for the engineer at 2am.",
    body: "The person reading this code during a production incident is usually future me. That's who I write for — not the reviewer, not the interviewer. Naming, structure, comments: all aimed at someone tired and under pressure, who needs to understand it fast.",
  },
  {
    number: "02",
    name: "Ship before it's ready. Then fix what's actually broken.",
    body: "At Ezdu, features I spent weeks refining were replaced after two days of watching real users. The ones I shipped rough taught me things I couldn't have anticipated. Waiting for perfection just means guessing in private for longer.",
  },
  {
    number: "03",
    name: "Slow software is a product decision, not a tech problem.",
    body: "A 400ms render delay isn't a metrics failure — it's a choice about how much you value someone's time. Users don't separate slow from broken. If the engineering team doesn't treat latency as a product concern, nobody will.",
  },
  {
    number: "04",
    name: "The schema outlives everything else.",
    body: "A bad data model costs six months later, not six hours now. I've watched teams defer this decision until it became a migration nobody wanted to own. Schema design happens first — before the API, before the UI. That sequence matters.",
  },
];

export function PhilosophySection() {
  return (
    <Section id="philosophy" aria-label="Engineering Philosophy">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Section opening */}
        <AnimatedSection>
          <div className="mb-6 flex items-center gap-5">
            <span className="text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Convictions</span>
            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>
          <div className="mb-20 grid gap-8 lg:grid-cols-[1fr_40%] lg:gap-20">
            <h2
              className="font-serif tracking-tight text-[var(--foreground)]"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              How I think
              <br />
              <em className="font-serif" style={{ fontStyle: "italic", fontWeight: 400, color: "var(--muted-color)" }}>
                about the work.
              </em>
            </h2>
            <div className="flex items-end">
              <p className="text-sm leading-[1.8] text-[var(--muted-color)]">
                Not principles I recite — patterns I noticed after things went
                wrong and I had to figure out why.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Principles — editorial two-column with serif statement */}
        <div>
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
              className="grid border-t border-[var(--border)] py-10 gap-5 lg:grid-cols-[3rem_1fr_1fr] lg:gap-14 lg:py-12 lg:items-start"
            >
              <span
                className="font-mono text-[var(--color-accent)] pt-1"
                style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}
              >
                {p.number}
              </span>
              <h3
                className="font-serif text-[var(--foreground)]"
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                  fontWeight: 500,
                  lineHeight: 1.35,
                  letterSpacing: "-0.015em",
                }}
              >
                {p.name}
              </h3>
              <p className="text-sm leading-[1.85] text-[var(--muted-color)]">{p.body}</p>
            </motion.div>
          ))}
          <div className="border-t border-[var(--border)]" />
        </div>
      </div>
    </Section>
  );
}
