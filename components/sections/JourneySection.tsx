"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/primitives/Section";
import { journeyItems } from "@/lib/data/journey";

export function JourneySection() {
  return (
    <Section id="journey" aria-label="My Journey">
      {/* Section opening */}
      <div className="mx-auto mb-20 max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="h-px bg-[var(--border)] mb-14" />
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2
              className="font-serif tracking-tight text-[var(--foreground)]"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              How I got here.
              <br />
              <em className="font-serif" style={{ fontStyle: "italic", color: "var(--muted-color)", fontWeight: 400 }}>
                The real version.
              </em>
            </h2>
            <p className="max-w-60 text-sm leading-relaxed text-[var(--muted-color)] lg:text-right lg:pb-1">
              From the first C program to two live products. The moments worth writing down.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Timeline entries — year as typographic anchor, no tags column */}
      <div>
        {journeyItems.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
            className="border-t border-[var(--border)] group"
          >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
              <div className="grid py-10 lg:grid-cols-[10rem_1fr] lg:gap-16 lg:py-14">

                {/* Year — de-emphasised until hover */}
                <div className="mb-4 lg:mb-0 lg:pt-0.5">
                  <span
                    className="font-serif font-medium leading-none tracking-tight text-[var(--border)] transition-colors duration-300 group-hover:text-[var(--color-accent)]"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", letterSpacing: "-0.03em" }}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="font-serif mb-4 font-medium text-[var(--foreground)] leading-snug"
                    style={{ fontSize: "clamp(1rem, 1.6vw, 1.15rem)", letterSpacing: "-0.01em" }}
                  >
                    {item.title}
                  </h3>
                  <p className="max-w-prose text-sm leading-[1.8] text-[var(--muted-color)]">
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-[var(--border)]" />
      </div>
    </Section>
  );
}
