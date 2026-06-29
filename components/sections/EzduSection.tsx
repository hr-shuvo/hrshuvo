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
          <div className="mb-6 flex items-center gap-5">
            <span className="text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">The thing I quit my job to build</span>
            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
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

      {/* ── Full-bleed dark banner — the manifesto ── */}
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

      {/* ── The Problem ── editorial long-form, wide margins */}
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

        {/* ── Architecture — technical but restrained ── */}
        <AnimatedSection>
          <div className="border-t border-[var(--border)] py-16">
            <p className="mb-10 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Architecture</p>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 lg:p-6">
              <svg viewBox="0 0 480 300" className="w-full h-auto" aria-label="Ezdu architecture">
                <defs>
                  <marker id="arr-e" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--border)" />
                  </marker>
                </defs>
                <rect x="60" y="10" width="130" height="44" rx="6" fill="var(--surface-alt)" stroke="var(--color-accent)" strokeWidth="1.5" />
                <text x="125" y="29" textAnchor="middle" fontSize="11" fontWeight="500" fill="var(--foreground)" fontFamily="system-ui">Mobile App</text>
                <text x="125" y="44" textAnchor="middle" fontSize="9" fill="var(--color-accent)" fontFamily="system-ui">Flutter · Primary</text>

                <rect x="290" y="10" width="130" height="44" rx="6" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
                <text x="355" y="29" textAnchor="middle" fontSize="11" fill="var(--foreground)" fontFamily="system-ui">Web App</text>
                <text x="355" y="44" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">Next.js · Companion</text>

                <line x1="140" y1="54" x2="195" y2="106" stroke="var(--color-accent)" strokeWidth="1" markerEnd="url(#arr-e)" />
                <line x1="340" y1="54" x2="285" y2="106" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr-e)" />

                <rect x="130" y="108" width="220" height="44" rx="6" fill="var(--surface-alt)" stroke="var(--color-accent)" strokeWidth="1.5" />
                <text x="240" y="127" textAnchor="middle" fontSize="11" fontWeight="500" fill="var(--foreground)" fontFamily="system-ui">.NET Core API</text>
                <text x="240" y="142" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">REST · Auth · LLM Pipeline</text>

                <rect x="10" y="108" width="100" height="44" rx="6" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
                <text x="60" y="127" textAnchor="middle" fontSize="11" fill="var(--foreground)" fontFamily="system-ui">LLM</text>
                <text x="60" y="142" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">AI Content</text>
                <line x1="130" y1="130" x2="110" y2="130" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr-e)" />

                <rect x="370" y="108" width="100" height="44" rx="6" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
                <text x="420" y="127" textAnchor="middle" fontSize="10" fill="var(--foreground)" fontFamily="system-ui">Push</text>
                <text x="420" y="142" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">FCM / APNs</text>
                <line x1="350" y1="130" x2="370" y2="130" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr-e)" />

                <line x1="190" y1="152" x2="110" y2="206" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr-e)" />
                <line x1="240" y1="152" x2="240" y2="206" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr-e)" />
                <line x1="290" y1="152" x2="360" y2="206" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr-e)" />

                <rect x="30" y="208" width="130" height="40" rx="6" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
                <text x="95" y="225" textAnchor="middle" fontSize="11" fill="var(--foreground)" fontFamily="system-ui">MySQL</text>
                <text x="95" y="240" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">Primary DB</text>

                <rect x="175" y="208" width="130" height="40" rx="6" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
                <text x="240" y="225" textAnchor="middle" fontSize="11" fill="var(--foreground)" fontFamily="system-ui">Redis</text>
                <text x="240" y="240" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">Cache · Sessions</text>

                <rect x="320" y="208" width="130" height="40" rx="6" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
                <text x="385" y="225" textAnchor="middle" fontSize="11" fill="var(--foreground)" fontFamily="system-ui">AWS S3</text>
                <text x="385" y="240" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">Content · Media</text>

                <text x="240" y="278" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">Mobile-first · Shared API · AI pipeline</text>
              </svg>
            </div>
          </div>
        </AnimatedSection>

        {/* ── What was actually hard — sparse editorial list ── */}
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
                  className="grid border-b border-[var(--border)] py-8 gap-4 lg:grid-cols-[3rem_1fr_1fr] lg:gap-14"
                >
                  <span
                    className="font-mono text-[var(--color-accent)] self-start pt-0.5"
                    style={{ fontSize: "0.75rem", letterSpacing: "0.05em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="mb-2.5 text-sm font-medium tracking-tight text-[var(--foreground)]">
                      {challenge.title}
                    </h4>
                    <p className="text-sm leading-[1.8] text-[var(--muted-color)]">
                      {challenge.description}
                    </p>
                  </div>
                  <p className="text-sm leading-[1.8] text-[var(--muted-color)] lg:border-l lg:border-[var(--border)] lg:pl-10">
                    <span className="text-[var(--color-accent)]">→ </span>
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
          <div className="space-y-14">
            {ezduData.lessons.map((lesson, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                className="grid gap-6 lg:grid-cols-[3rem_1fr]"
              >
                <span
                  className="font-mono text-[var(--color-accent)] flex-shrink-0 leading-tight self-start pt-1"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.05em", opacity: 0.5 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
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

        {/* ── Roadmap — restrained, factual ── */}
        <div className="border-t border-[var(--border)] py-16">
          <AnimatedSection>
            <p className="mb-10 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Where it&apos;s going</p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {ezduData.roadmap.map((item, i) => (
                <div key={item.phase}>
                  <p
                    className="mb-2 text-xs tracking-[0.08em] font-medium"
                    style={{ color: i < 2 ? "var(--color-accent)" : "var(--muted-color)" }}
                  >
                    {item.phase}
                  </p>
                  <p className="text-sm leading-[1.75] text-[var(--muted-color)]">
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
