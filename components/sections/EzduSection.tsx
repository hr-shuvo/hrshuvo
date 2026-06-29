"use client";

import { ExternalLink } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { AnimatedSection } from "@/components/primitives/AnimatedSection";
import { ezduData } from "@/lib/data/ezdu";

export function EzduSection() {
  return (
    <Section id="ezdu" aria-label="Ezdu — Featured Project">
      <Container>
        {/* Header */}
        <AnimatedSection>
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
            Featured Project
          </p>
          <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2
              className="font-extrabold tracking-tight text-[var(--foreground)]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Ezdu
            </h2>
            <a
              href={ezduData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface-alt)] transition-colors self-start sm:self-auto"
            >
              Visit Ezdu <ExternalLink size={14} />
            </a>
          </div>
        </AnimatedSection>

        {/* Hero banner */}
        <AnimatedSection>
          <div
            className="mb-16 overflow-hidden rounded-2xl p-10 sm:p-14"
            style={{
              background:
                "linear-gradient(135deg, #1c1411 0%, #292118 50%, #3d2c10 100%)",
            }}
          >
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--color-accent-light)] uppercase">
              EdTech · Mobile-First · Gamification · AI
            </p>
            <h3 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">
              {ezduData.tagline}
            </h3>
            <p className="max-w-lg text-base leading-relaxed text-zinc-400">
              {ezduData.vision.body}
            </p>
          </div>
        </AnimatedSection>

        {/* Problem */}
        <div className="mb-20 grid gap-16 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
              The Problem
            </p>
            <h3 className="mb-6 text-xl font-semibold text-[var(--foreground)] leading-snug">
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

          {/* Architecture SVG */}
          <AnimatedSection direction="right">
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
              Architecture
            </p>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <svg
                viewBox="0 0 480 330"
                className="w-full h-auto"
                aria-label="Ezdu system architecture diagram"
              >
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--border)" />
                  </marker>
                </defs>

                {/* Mobile App — primary */}
                <rect x="60" y="10" width="140" height="48" rx="8" fill="var(--surface-alt)" stroke="var(--color-accent)" strokeWidth="2" />
                <text x="130" y="31" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--foreground)" fontFamily="system-ui">Mobile App</text>
                <text x="130" y="47" textAnchor="middle" fontSize="9" fill="var(--color-accent)" fontFamily="system-ui">Flutter · Primary</text>

                {/* Web App — secondary */}
                <rect x="280" y="10" width="140" height="48" rx="8" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
                <text x="350" y="31" textAnchor="middle" fontSize="11" fill="var(--foreground)" fontFamily="system-ui">Web App</text>
                <text x="350" y="47" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">Next.js · Companion</text>

                {/* Arrows to API */}
                <line x1="150" y1="58" x2="200" y2="112" stroke="var(--color-accent)" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <line x1="330" y1="58" x2="280" y2="112" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arrow)" />

                {/* .NET Core API */}
                <rect x="130" y="114" width="220" height="48" rx="8" fill="var(--surface-alt)" stroke="var(--color-accent)" strokeWidth="2" />
                <text x="240" y="135" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--foreground)" fontFamily="system-ui">.NET Core API</text>
                <text x="240" y="151" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">REST · Auth · LLM Pipeline</text>

                {/* LLM */}
                <rect x="10" y="114" width="100" height="48" rx="8" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
                <text x="60" y="135" textAnchor="middle" fontSize="11" fill="var(--foreground)" fontFamily="system-ui">LLM</text>
                <text x="60" y="151" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">AI Content</text>
                <line x1="130" y1="138" x2="110" y2="138" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arrow)" />

                {/* Push Notifs */}
                <rect x="370" y="114" width="100" height="48" rx="8" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
                <text x="420" y="133" textAnchor="middle" fontSize="10" fill="var(--foreground)" fontFamily="system-ui">Push</text>
                <text x="420" y="148" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">FCM / APNs</text>
                <line x1="350" y1="138" x2="370" y2="138" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arrow)" />

                {/* Arrows to data */}
                <line x1="190" y1="162" x2="120" y2="218" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arrow)" />
                <line x1="240" y1="162" x2="240" y2="218" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arrow)" />
                <line x1="290" y1="162" x2="360" y2="218" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arrow)" />

                {/* MySQL */}
                <rect x="30" y="220" width="140" height="44" rx="8" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
                <text x="100" y="240" textAnchor="middle" fontSize="11" fill="var(--foreground)" fontFamily="system-ui">MySQL</text>
                <text x="100" y="256" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">Primary DB</text>

                {/* Redis */}
                <rect x="170" y="220" width="140" height="44" rx="8" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
                <text x="240" y="240" textAnchor="middle" fontSize="11" fill="var(--foreground)" fontFamily="system-ui">Redis</text>
                <text x="240" y="256" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">Cache · Sessions</text>

                {/* S3 */}
                <rect x="310" y="220" width="140" height="44" rx="8" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
                <text x="380" y="240" textAnchor="middle" fontSize="11" fill="var(--foreground)" fontFamily="system-ui">AWS S3</text>
                <text x="380" y="256" textAnchor="middle" fontSize="9" fill="var(--muted-color)" fontFamily="system-ui">Content · Media</text>

                <text x="240" y="298" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui">
                  Mobile-first · Shared API · AI pipeline
                </text>
              </svg>
            </div>
          </AnimatedSection>
        </div>

        {/* Engineering Challenges */}
        <AnimatedSection>
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
            Engineering Challenges
          </p>
          <h3 className="mb-10 text-xl font-semibold text-[var(--foreground)]">
            Problems worth solving.
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {ezduData.challenges.map((challenge, i) => (
              <AnimatedSection key={challenge.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 h-full">
                  <h4 className="mb-2 font-semibold text-[var(--foreground)]">
                    {challenge.title}
                  </h4>
                  <p className="mb-3 text-sm leading-relaxed text-[var(--muted-color)]">
                    {challenge.description}
                  </p>
                  <p className="text-xs text-[var(--color-accent)]">
                    → {challenge.solved}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Lessons */}
        <AnimatedSection>
          <div className="mt-20">
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
              Lessons Learned
            </p>
            <h3 className="mb-10 text-xl font-semibold text-[var(--foreground)]">
              What building Ezdu actually taught me.
            </h3>
            <div className="space-y-4">
              {ezduData.lessons.map((lesson, i) => (
                <AnimatedSection key={i} delay={i * 0.07}>
                  <div className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                    <span className="mt-0.5 font-mono text-sm text-[var(--color-accent)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base font-medium text-[var(--foreground)]">
                      {lesson}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Roadmap */}
        <AnimatedSection>
          <div className="mt-20">
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
              Roadmap
            </p>
            <h3 className="mb-10 text-xl font-semibold text-[var(--foreground)]">
              Where Ezdu is going.
            </h3>
            <div className="flex flex-col gap-0 sm:flex-row sm:gap-0 relative">
              <div className="absolute left-0 right-0 top-5 hidden h-px sm:block" style={{ background: "var(--border)" }} />
              {ezduData.roadmap.map((item, i) => (
                <div key={item.phase} className="relative flex-1 pb-8 sm:pb-0">
                  <div className="flex items-center gap-3 mb-3 sm:flex-col sm:items-start sm:gap-0">
                    <div
                      className="relative z-10 h-2.5 w-2.5 flex-shrink-0 rounded-full sm:mb-4"
                      style={{
                        background: i === 0 ? "var(--color-accent)" : "var(--border)",
                        border: i === 0 ? "none" : "1px solid var(--border)",
                        boxShadow: i === 0 ? "0 0 0 4px rgba(245,158,11,0.25)" : "none",
                      }}
                    />
                  </div>
                  <div className="sm:pr-8">
                    <p className="mb-1 text-xs font-medium text-[var(--color-accent)]">{item.phase}</p>
                    <p className="text-sm text-[var(--foreground)]">{item.milestone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
