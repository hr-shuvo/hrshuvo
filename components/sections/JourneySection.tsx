"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/primitives/Section";
import { journeyItems } from "@/lib/data/journey";

export function JourneySection() {
  return (
    <Section id="journey" aria-label="My Journey">
      {/* Header — full container width, asymmetric */}
      <div className="mx-auto mb-20 max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
              Career
            </p>
            <h2
              className="font-extrabold leading-[0.95] tracking-tight text-[var(--foreground)]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              Not a biography.
              <br />
              <span className="text-[var(--muted-color)]">A path.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--muted-color)] lg:text-right lg:pb-2">
            Six years from first program to two live products. The moments that shaped the work.
          </p>
        </motion.div>
      </div>

      {/* Timeline — each item is full-width, alternating treatment */}
      <div className="space-y-0">
        {journeyItems.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
            className="border-t border-[var(--border)] group"
          >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
              <div className="grid py-10 lg:grid-cols-[12rem_1fr_auto] lg:gap-16 lg:py-12">
                {/* Year — large typographic anchor */}
                <div className="mb-4 lg:mb-0">
                  <span
                    className="font-extrabold leading-none tracking-tight text-[var(--border)] transition-colors duration-300 group-hover:text-[var(--color-accent)]"
                    style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="mb-3 font-semibold text-[var(--foreground)]"
                    style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="max-w-lg text-sm leading-relaxed text-[var(--muted-color)]">
                    {item.body}
                  </p>
                </div>

                {/* Tags — right-aligned on desktop */}
                <div className="mt-4 flex flex-wrap gap-2 lg:mt-0 lg:flex-col lg:items-end lg:justify-center">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted-color)] whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Closing border */}
        <div className="border-t border-[var(--border)]" />
      </div>
    </Section>
  );
}
