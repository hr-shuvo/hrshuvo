"use client";

import { motion } from "framer-motion";

const principles = [
  {
    name: "Write for the engineer at 2am.",
    body: "The person reading this code during a production incident is usually future me. That's who I write for — not the reviewer, not the interviewer. Naming, structure, comments: all aimed at someone tired and under pressure, who needs to understand it fast.",
  },
  {
    name: "Ship before it's ready. Then fix what's actually broken.",
    body: "At Ezdu, features I spent weeks refining were replaced after two days of watching real users. The ones I shipped rough taught me things I couldn't have anticipated. Waiting for perfection just means guessing in private for longer.",
  },
  {
    name: "Slow software is a product decision, not a tech problem.",
    body: "A 400ms render delay isn't a metrics failure — it's a choice about how much you value someone's time. Users don't separate slow from broken. If the engineering team doesn't treat latency as a product concern, nobody will.",
  },
  {
    name: "The schema outlives everything else.",
    body: "A bad data model costs six months later, not six hours now. I've watched teams defer this decision until it became a migration nobody wanted to own. Schema design happens first — before the API, before the UI. That sequence matters.",
  },
];

export function PhilosophySection() {
  return (
    <section id="philosophy" aria-label="Engineering Philosophy" className="relative">

      {/* Chapter header — centered, quiet */}
      <div className="mx-auto max-w-3xl px-6 pb-0 pt-32 text-center sm:px-8 md:pt-40 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-8 text-xs tracking-[0.3em] text-[var(--muted-color)] uppercase">
            Convictions
          </p>
          <h2
            className="font-serif tracking-tight text-[var(--foreground)]"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            How I think
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--muted-color)" }}>
              about the work.
            </em>
          </h2>
          <p className="mx-auto mt-8 max-w-sm text-sm leading-[1.85] text-[var(--muted-color)]">
            Not principles I recite — patterns I noticed after things went wrong
            and I had to figure out why.
          </p>
        </motion.div>
      </div>

      {/* Each principle — full horizontal width, alternating composition */}
      <div className="mt-24">
        {principles.map((p, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-[var(--border)]"
            >
              <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div
                  className={`py-14 lg:py-20 grid gap-8 lg:gap-20 lg:items-start ${
                    isEven
                      ? "lg:grid-cols-[55%_1fr]"
                      : "lg:grid-cols-[1fr_55%]"
                  }`}
                >
                  <h3
                    className={`font-serif text-[var(--foreground)] ${isEven ? "" : "lg:order-2"}`}
                    style={{
                      fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                      fontWeight: 500,
                      lineHeight: 1.3,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    className={`text-sm leading-[1.9] text-[var(--muted-color)] ${isEven ? "lg:pt-1.5" : "lg:order-1 lg:pt-1.5"}`}
                  >
                    {p.body}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
        <div className="border-t border-[var(--border)]" />
      </div>
    </section>
  );
}
