"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/primitives/AnimatedSection";
import { ezduData } from "@/lib/data/ezdu";

export function EzduSection() {
  return (
    <section id="ezdu" aria-label="Ezdu — Featured Project">

      {/* ── Section opening ── */}
      <div className="mx-auto max-w-7xl px-6 pt-24 sm:px-8 md:pt-32 lg:px-12 lg:pt-40">
        <AnimatedSection>
          <div className="h-px bg-[var(--border)] mb-14" />
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">
                The thing I quit my job to build
              </p>
              <h2
                className="font-serif tracking-tight text-[var(--foreground)]"
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
                  fontWeight: 600,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                Ezdu
              </h2>
            </div>
            <a
              href={ezduData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start text-sm tracking-[0.05em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors sm:self-auto pb-1 border-b border-[var(--border)] hover:border-[var(--foreground)]"
            >
              ezdu.net <ExternalLink size={11} />
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* ── Full-bleed dark banner ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-14 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #12100d 0%, #1e1a13 60%, #2a2010 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_42%]">
            <div>
              <p
                className="mb-5 text-xs tracking-[0.2em] uppercase"
                style={{ color: "rgba(194,136,74,0.7)" }}
              >
                The premise
              </p>
              <h3
                className="font-serif mb-6 text-white"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                {ezduData.tagline}
              </h3>
            </div>
            <div className="flex items-end">
              <p
                className="text-sm leading-[1.8]"
                style={{ color: "#8a8070" }}
              >
                {ezduData.vision.body}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── The Problem ── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="py-20 lg:py-28">
          <AnimatedSection>
            <div className="grid gap-16 lg:grid-cols-[44%_1fr]">
              <div>
                <p className="mb-5 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Why this exists</p>
                <h3
                  className="font-serif text-[var(--foreground)]"
                  style={{
                    fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)",
                    fontWeight: 500,
                    lineHeight: 1.3,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {ezduData.problem.headline}
                </h3>
              </div>
              <div className="space-y-5 lg:pt-11">
                {ezduData.problem.body.map((para, i) => (
                  <p key={i} className="text-sm leading-[1.85] text-[var(--muted-color)]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ── Decisions behind the architecture — replaces the diagram ── */}
        <AnimatedSection>
          <div className="border-t border-[var(--border)] py-20">
            <div className="grid gap-16 lg:grid-cols-[44%_1fr]">
              <div>
                <p className="mb-5 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">
                  How it&apos;s built
                </p>
                <h3
                  className="font-serif text-[var(--foreground)]"
                  style={{
                    fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)",
                    fontWeight: 500,
                    lineHeight: 1.3,
                    letterSpacing: "-0.015em",
                  }}
                >
                  The decisions that shaped the stack.
                </h3>
              </div>
              <div className="space-y-8 lg:pt-11">
                {ezduData.stackDecisions.map((decision, i) => (
                  <div key={i} className="border-t border-[var(--border)] pt-6 first:border-0 first:pt-0">
                    <p className="mb-2 text-sm font-medium text-[var(--foreground)] leading-snug">
                      {decision.choice}
                    </p>
                    <p className="text-sm leading-[1.8] text-[var(--muted-color)]">
                      {decision.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ── What was actually hard ── */}
        <AnimatedSection>
          <div className="border-t border-[var(--border)] pt-16 pb-4">
            <p className="mb-14 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">What was actually hard</p>
            <div>
              {ezduData.challenges.map((challenge, i) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                  className="grid border-b border-[var(--border)] py-8 gap-4 lg:grid-cols-[1fr_1fr] lg:gap-14"
                >
                  <div>
                    <h4 className="mb-2.5 text-sm font-medium tracking-tight text-[var(--foreground)]">
                      {challenge.title}
                    </h4>
                    <p className="text-sm leading-[1.8] text-[var(--muted-color)]">
                      {challenge.description}
                    </p>
                  </div>
                  <p className="text-sm leading-[1.8] text-[var(--muted-color)] lg:border-l lg:border-[var(--border)] lg:pl-10">
                    {challenge.solved}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Lessons — pull-quotes at magazine scale ── */}
        <div className="py-24 lg:py-32">
          <AnimatedSection>
            <p className="mb-16 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">What I know now that I didn&apos;t before</p>
          </AnimatedSection>
          <div className="space-y-12">
            {ezduData.lessons.map((lesson, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                className="border-t border-[var(--border)] pt-10"
              >
                <p
                  className="font-serif text-[var(--foreground)] leading-snug"
                  style={{
                    fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.45,
                  }}
                >
                  {lesson}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Where it's going — prose, not a grid ── */}
        <AnimatedSection>
          <div className="border-t border-[var(--border)] py-16">
            <div className="grid gap-12 lg:grid-cols-[44%_1fr]">
              <div>
                <p className="mb-5 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Where it&apos;s going</p>
                <h3
                  className="font-serif text-[var(--foreground)]"
                  style={{
                    fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)",
                    fontWeight: 500,
                    lineHeight: 1.3,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {ezduData.roadmapStatement.headline}
                </h3>
              </div>
              <div className="lg:pt-11">
                <p className="text-sm leading-[1.85] text-[var(--muted-color)]">
                  {ezduData.roadmapStatement.body}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
