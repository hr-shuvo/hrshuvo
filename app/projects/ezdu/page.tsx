import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { ezduData } from "@/lib/data/ezdu";

export const metadata: Metadata = {
  title: "Ezdu — Case Study",
  description: "How I designed and built Ezdu — a gamified learning platform — solo, from first commit to production.",
};

export default function EzduPage() {
  return (
    <div className="pt-14">

      {/* ── Opening ── */}
      <div className="mx-auto max-w-7xl px-6 pt-32 sm:px-8 md:pt-40 lg:px-12 lg:pt-48">
        <div className="border-t border-[var(--border)] pt-14">
          <p className="mb-6 text-xs tracking-[0.3em] text-[var(--muted-color)] uppercase">
            The thing I quit my job to build
          </p>
          <div className="flex items-baseline justify-between gap-8">
            <h1
              className="font-serif tracking-tight text-[var(--foreground)]"
              style={{
                fontSize: "clamp(3rem, 7vw, 7rem)",
                fontWeight: 600,
                lineHeight: 1.04,
                letterSpacing: "-0.025em",
              }}
            >
              Ezdu
            </h1>
            <a
              href={ezduData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs tracking-[0.06em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors duration-300 pb-1 border-b border-[var(--border)] hover:border-[var(--muted-color)]"
            >
              ezdu.net <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>

      {/* ── Premise ── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-20 max-w-3xl border-l-2 border-[var(--color-accent)] pl-8 lg:pl-12 lg:mt-28">
          <p
            className="font-serif text-[var(--foreground)] leading-[1.55]"
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
              fontWeight: 400,
              fontStyle: "italic",
              letterSpacing: "-0.01em",
            }}
          >
            {ezduData.tagline}
          </p>
          <p className="mt-6 text-sm leading-[1.85] text-[var(--muted-color)] max-w-xl">
            {ezduData.vision.body}
          </p>
        </div>
      </div>

      {/* ── Problem ── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-24 lg:mt-32">
          <div className="grid gap-12 lg:grid-cols-[55%_1fr] lg:gap-20">
            <div>
              <p className="mb-5 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Why this exists</p>
              <h2
                className="font-serif text-[var(--foreground)]"
                style={{
                  fontSize: "clamp(1.4rem, 2.5vw, 2.1rem)",
                  fontWeight: 500,
                  lineHeight: 1.28,
                  letterSpacing: "-0.015em",
                }}
              >
                {ezduData.problem.headline}
              </h2>
            </div>
            <div className="space-y-5 lg:pt-14">
              {ezduData.problem.body.map((para, i) => (
                <p key={i} className="text-sm leading-[1.9] text-[var(--muted-color)]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stack Decisions ── */}
        <div className="mt-28 border-t border-[var(--border)] pt-20 lg:mt-36">
          <p className="mb-14 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">
            How it&apos;s built
          </p>
          <div className="space-y-16">
            {ezduData.stackDecisions.map((decision, i) => (
              <div key={i}>
                <p
                  className="font-serif mb-4 text-[var(--foreground)]"
                  style={{
                    fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.4,
                  }}
                >
                  {decision.choice}
                </p>
                <p className="max-w-2xl text-sm leading-[1.9] text-[var(--muted-color)]">
                  {decision.reason}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Challenges ── */}
        <div className="mt-28 border-t border-[var(--border)] pt-20 lg:mt-36">
          <p className="mb-14 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">
            What was actually hard
          </p>
          <div className="space-y-0">
            {ezduData.challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="grid border-b border-[var(--border)] py-10 gap-6 lg:grid-cols-[40%_1fr] lg:gap-16"
              >
                <div>
                  <h3
                    className="font-serif text-[var(--foreground)] leading-snug"
                    style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", fontWeight: 500 }}
                  >
                    {challenge.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.85] text-[var(--muted-color)]">
                    {challenge.description}
                  </p>
                </div>
                <div className="lg:pt-0.5">
                  <p className="text-sm leading-[1.85] text-[var(--muted-color)]">
                    {challenge.solved}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Lessons ── */}
        <div className="mt-28 border-t border-[var(--border)] pt-20 lg:mt-36">
          <p className="mb-20 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">
            What I know now
          </p>
          <div className="space-y-0">
            {ezduData.lessons.map((lesson, i) => (
              <div
                key={i}
                className="border-b border-[var(--border)] py-10"
              >
                <p
                  className="font-serif text-[var(--foreground)] max-w-3xl"
                  style={{
                    fontSize: "clamp(1.15rem, 2.2vw, 1.6rem)",
                    fontWeight: 400,
                    fontStyle: "italic",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.5,
                  }}
                >
                  &ldquo;{lesson}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Roadmap ── */}
        <div className="mt-28 border-t border-[var(--border)] pb-32 pt-20 lg:mt-36 lg:pb-40">
          <div className="grid gap-12 lg:grid-cols-[55%_1fr] lg:gap-20">
            <div>
              <p className="mb-5 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">
                Where it&apos;s going
              </p>
              <h2
                className="font-serif text-[var(--foreground)]"
                style={{
                  fontSize: "clamp(1.4rem, 2.5vw, 2.1rem)",
                  fontWeight: 500,
                  lineHeight: 1.28,
                  letterSpacing: "-0.015em",
                }}
              >
                {ezduData.roadmapStatement.headline}
              </h2>
            </div>
            <div className="lg:pt-14">
              <p className="text-sm leading-[1.9] text-[var(--muted-color)]">
                {ezduData.roadmapStatement.body}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
