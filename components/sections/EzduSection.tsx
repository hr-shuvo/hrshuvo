"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/primitives/AnimatedSection";
import { ezduData } from "@/lib/data/ezdu";

export function EzduSection() {
  return (
    <section id="ezdu" aria-label="Ezdu — Featured Project">
      {/* ── Header ── */}
      <div className="mx-auto max-w-7xl px-6 pt-24 sm:px-8 md:pt-32 lg:px-12 lg:pt-40">
        <AnimatedSection>
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
            The centerpiece
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2
              className="font-extrabold tracking-tight text-[var(--foreground)]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: 0.95 }}
            >
              Ezdu
            </h2>
            <a
              href={ezduData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface-alt)] transition-colors sm:self-auto"
            >
              Visit ezdu.net <ExternalLink size={13} />
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* ── Full-bleed dark banner — breaks out of container ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1c1411 0%, #292118 50%, #3d2c10 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <p className="mb-4 max-w-2xl text-xs font-medium tracking-[0.15em] uppercase"
            style={{ color: "rgba(251,191,36,0.7)" }}>
            The EdTech space is full of content. What it lacks is thoughtful engineering.
          </p>
          <h3
            className="mb-6 font-extrabold text-white"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)", lineHeight: 1.1 }}
          >
            {ezduData.tagline}
          </h3>
          <p className="max-w-xl text-base leading-relaxed" style={{ color: "#a8a29e" }}>
            {ezduData.vision.body}
          </p>
        </div>
      </motion.div>

      {/* ── Problem + Architecture ── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-16 py-20 lg:grid-cols-[1fr_45%] lg:py-28">
          <AnimatedSection direction="left">
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
              The Problem
            </p>
            <h3
              className="mb-8 font-extrabold leading-tight text-[var(--foreground)]"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              {ezduData.problem.headline}
            </h3>
            <div className="space-y-4">
              {ezduData.problem.body.map((para, i) => (
                <p key={i} className="leading-relaxed text-[var(--muted-color)]">
                  {para}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
              Architecture
            </p>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <svg viewBox="0 0 480 300" className="w-full h-auto" aria-label="Ezdu architecture">
                <defs>
                  <marker id="arr-e" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--border)" />
                  </marker>
                </defs>
                <rect x="60" y="10" width="130" height="44" rx="8" fill="var(--surface-alt)" stroke="var(--color-accent)" strokeWidth="2" />
                <text x="125" y="29" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--foreground)" fontFamily="system-ui">Mobile App</text>
                <text x="125" y="44" textAnchor="middle" fontSize="9" fill="var(--color-accent)" fontFamily="system-ui">Flutter · Primary</text>

                <rect x="290" y="10" width="130" height="44" rx="8" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
                <text x="355" y="29" textAnchor="middle" fontSize="11" fill="var(--foreground)" fontFamily="system-ui">Web App</text>
                <text x="355" y="44" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">Next.js · Companion</text>

                <line x1="140" y1="54" x2="195" y2="106" stroke="var(--color-accent)" strokeWidth="1.5" markerEnd="url(#arr-e)" />
                <line x1="340" y1="54" x2="285" y2="106" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr-e)" />

                <rect x="130" y="108" width="220" height="44" rx="8" fill="var(--surface-alt)" stroke="var(--color-accent)" strokeWidth="2" />
                <text x="240" y="127" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--foreground)" fontFamily="system-ui">.NET Core API</text>
                <text x="240" y="142" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">REST · Auth · LLM Pipeline</text>

                <rect x="10" y="108" width="100" height="44" rx="8" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
                <text x="60" y="127" textAnchor="middle" fontSize="11" fill="var(--foreground)" fontFamily="system-ui">LLM</text>
                <text x="60" y="142" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">AI Content</text>
                <line x1="130" y1="130" x2="110" y2="130" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr-e)" />

                <rect x="370" y="108" width="100" height="44" rx="8" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
                <text x="420" y="127" textAnchor="middle" fontSize="10" fill="var(--foreground)" fontFamily="system-ui">Push</text>
                <text x="420" y="142" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">FCM / APNs</text>
                <line x1="350" y1="130" x2="370" y2="130" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr-e)" />

                <line x1="190" y1="152" x2="110" y2="206" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr-e)" />
                <line x1="240" y1="152" x2="240" y2="206" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr-e)" />
                <line x1="290" y1="152" x2="360" y2="206" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr-e)" />

                <rect x="30" y="208" width="130" height="40" rx="8" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
                <text x="95" y="225" textAnchor="middle" fontSize="11" fill="var(--foreground)" fontFamily="system-ui">MySQL</text>
                <text x="95" y="240" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">Primary DB</text>

                <rect x="175" y="208" width="130" height="40" rx="8" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
                <text x="240" y="225" textAnchor="middle" fontSize="11" fill="var(--foreground)" fontFamily="system-ui">Redis</text>
                <text x="240" y="240" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">Cache · Sessions</text>

                <rect x="320" y="208" width="130" height="40" rx="8" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
                <text x="385" y="225" textAnchor="middle" fontSize="11" fill="var(--foreground)" fontFamily="system-ui">AWS S3</text>
                <text x="385" y="240" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">Content · Media</text>

                <text x="240" y="278" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui">Mobile-first · Shared API · AI pipeline</text>
              </svg>
            </div>
          </AnimatedSection>
        </div>

        {/* ── Challenges — numbered list, not card grid ── */}
        <AnimatedSection>
          <div className="border-t border-[var(--border)] pt-16 pb-4">
            <p className="mb-12 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
              Engineering Challenges
            </p>
            <div className="space-y-0">
              {ezduData.challenges.map((challenge, i) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                  className="group grid border-b border-[var(--border)] py-7 gap-4 lg:grid-cols-[3rem_1fr_1fr] lg:gap-12"
                >
                  <span
                    className="font-mono text-[var(--color-accent)] self-start"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="mb-2 font-semibold text-[var(--foreground)]">
                      {challenge.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-[var(--muted-color)]">
                      {challenge.description}
                    </p>
                  </div>
                  <p className="text-sm text-[var(--muted-color)] lg:border-l lg:border-[var(--border)] lg:pl-8 self-center">
                    <span className="text-[var(--color-accent)] font-medium">→ </span>
                    {challenge.solved}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Lessons — large pull-quotes, not boxes ── */}
        <div className="py-20 lg:py-28">
          <AnimatedSection>
            <p className="mb-16 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
              Lessons Learned
            </p>
          </AnimatedSection>
          <div className="space-y-12">
            {ezduData.lessons.map((lesson, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                className="flex gap-8 lg:gap-16"
              >
                <span
                  className="font-mono text-[var(--color-accent)] flex-shrink-0 leading-tight"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, opacity: 0.3 }}
                >
                  {i + 1}
                </span>
                <p
                  className="font-semibold text-[var(--foreground)] leading-snug"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
                >
                  {lesson}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Roadmap — horizontal steps, minimal ── */}
        <div className="border-t border-[var(--border)] py-16">
          <AnimatedSection>
            <p className="mb-10 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
              Roadmap
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {ezduData.roadmap.map((item, i) => (
                <div key={item.phase}>
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                      style={{
                        background: "var(--color-accent)",
                        opacity: i === 0 ? 1 : 0.35 + i * 0.1,
                      }}
                    />
                    <p className="text-xs font-medium text-[var(--color-accent)]">{item.phase}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--muted-color)] pl-[1.125rem]">
                    {item.milestone}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
