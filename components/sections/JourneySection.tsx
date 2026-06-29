"use client";

import { motion } from "framer-motion";
import { journeyItems } from "@/lib/data/journey";

export function JourneySection() {
  return (
    <section id="journey" aria-label="My Journey" className="relative">

      {/* Chapter opening — wide, centered, breathing */}
      <div className="mx-auto max-w-3xl px-6 pb-4 pt-32 text-center sm:px-8 md:pt-40 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-8 text-xs tracking-[0.3em] text-[var(--muted-color)] uppercase">
            How I got here
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
            Not a résumé.
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--muted-color)" }}>
              A sequence of moments.
            </em>
          </h2>
          <p className="mx-auto mt-8 max-w-sm text-sm leading-[1.85] text-[var(--muted-color)]">
            From the first C program to two live products. The moments worth writing down.
          </p>
        </motion.div>
      </div>

      {/* Entries — full bleed, each one a beat */}
      <div className="mt-24">
        {journeyItems.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="border-t border-[var(--border)]"
          >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
              <div className="py-12 lg:py-16">

                {/* Year — large, typographic weight, pulls left */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.03 }}
                  className="font-serif mb-6 font-medium text-[var(--surface-alt)] select-none"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 5rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {item.year}
                </motion.p>

                {/* Content — narrow, left-aligned, generous leading */}
                <div className="max-w-2xl">
                  <h3
                    className="font-serif mb-5 text-[var(--foreground)] leading-snug"
                    style={{
                      fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-[1.9] text-[var(--muted-color)]">
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-[var(--border)]" />
      </div>
    </section>
  );
}
