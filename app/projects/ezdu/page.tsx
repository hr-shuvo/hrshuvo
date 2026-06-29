import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { ezduData } from "@/lib/data/ezdu";
import { ProjectMockup } from "@/components/ui/ProjectMockup";

export const metadata: Metadata = {
  title: "Ezdu — Case Study",
  description: "How I designed and built Ezdu — a gamified learning platform — solo, from first commit to production.",
};

const EZDU_ACCENT = "#10b981";
const EZDU_SECONDARY = "#0d9488";

export default function EzduPage() {
  return (
    <div className="pt-14">

      {/* ── Hero ── */}
      <div className="mx-auto max-w-7xl px-6 pt-32 sm:px-8 md:pt-40 lg:px-12 lg:pt-48">
        <div className="border-t border-[var(--border)] pt-14">
          <p className="mb-6 text-xs tracking-[0.3em] text-[var(--muted-color)] uppercase">
            The thing I quit my job to build
          </p>

          <div className="flex items-start justify-between gap-8 flex-wrap">
            <div className="flex items-center gap-4">
              {/* Real logo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ezdu-logo.png"
                alt="Ezdu logo"
                className="flex-shrink-0 rounded-xl"
                style={{ width: 52, height: 52, objectFit: "cover" }}
              />
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
            </div>

            <div className="flex items-center gap-6 flex-wrap">
              <a
                href={ezduData.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs tracking-[0.06em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors pb-1 border-b border-[var(--border)] hover:border-[var(--muted-color)]"
              >
                ezdu.net <ExternalLink size={10} />
              </a>
              {/* Brand color chips */}
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ background: EZDU_ACCENT }} title="Brand amber" />
                <div className="w-4 h-4 rounded" style={{ background: EZDU_SECONDARY }} title="Brand green" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Visual Hero — Browser + Mobile mockups ── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-16 lg:mt-20 grid gap-6 lg:grid-cols-[1fr_200px] lg:gap-8 items-start">
          {/* Browser mockup with real screenshot */}
          <ProjectMockup
            name="Ezdu"
            accent={EZDU_ACCENT}
            secondaryAccent={EZDU_SECONDARY}
            variant="browser"
            imageSrc="/screenshots/ezdu.png"
          />
          {/* Mobile mockup — placeholder until mobile screenshot available */}
          <ProjectMockup
            name="Ezdu"
            accent={EZDU_ACCENT}
            secondaryAccent={EZDU_SECONDARY}
            variant="mobile"
            className="hidden lg:flex"
          />
        </div>
      </div>

      {/* ── Tagline / Premise ── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-16 max-w-3xl border-l-2 pl-8 lg:pl-12" style={{ borderColor: EZDU_ACCENT }}>
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

      {/* ── Product snapshot — key facts ── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-20 grid grid-cols-2 gap-px lg:grid-cols-4" style={{ background: "var(--border)" }}>
          {[
            { label: "Platform", value: "iOS · Android · Web" },
            { label: "Primary client", value: "Flutter" },
            { label: "Status", value: "Live in production" },
            { label: "My role", value: "Sole Engineer & Founder" },
          ].map((fact) => (
            <div key={fact.label} className="px-6 py-5" style={{ background: "var(--background)" }}>
              <p className="text-xs tracking-[0.15em] text-[var(--muted-color)] uppercase mb-1.5">
                {fact.label}
              </p>
              <p className="font-serif text-[var(--foreground)]" style={{ fontSize: "0.9rem", fontWeight: 500 }}>
                {fact.value}
              </p>
            </div>
          ))}
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
                <p key={i} className="text-sm leading-[1.9] text-[var(--muted-color)]">{para}</p>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stack decisions ── */}
        <div className="mt-28 border-t border-[var(--border)] pt-20 lg:mt-36">
          <p className="mb-14 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">
            How it&apos;s built
          </p>

          {/* Architecture visual — layered boxes */}
          <div className="mb-16 flex flex-wrap gap-2">
            {["Flutter · iOS · Android", "Next.js · Web", ".NET Core API", "MySQL · Redis", "AWS S3", "LLM Pipeline"].map((layer, i) => (
              <div
                key={layer}
                className="px-4 py-2.5 text-xs font-medium border"
                style={{
                  borderColor: i === 2 ? EZDU_ACCENT : "var(--border)",
                  color: i === 2 ? EZDU_ACCENT : "var(--muted-color)",
                  background: i === 2 ? `${EZDU_ACCENT}0d` : "transparent",
                  letterSpacing: "0.02em",
                }}
              >
                {layer}
              </div>
            ))}
          </div>

          <div className="space-y-14">
            {ezduData.stackDecisions.map((decision, i) => (
              <div key={i} className="grid gap-4 lg:grid-cols-[40%_1fr] lg:gap-16">
                <p
                  className="font-serif text-[var(--foreground)]"
                  style={{
                    fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.4,
                  }}
                >
                  {decision.choice}
                </p>
                <p className="text-sm leading-[1.9] text-[var(--muted-color)]">{decision.reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Challenges ── */}
        <div className="mt-28 border-t border-[var(--border)] pt-20 lg:mt-36">
          <p className="mb-14 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">
            What was actually hard
          </p>
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
                <p className="text-xs tracking-[0.15em] text-[var(--muted-color)] uppercase mb-3">How it was solved</p>
                <p className="text-sm leading-[1.85] text-[var(--foreground)]">{challenge.solved}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Lessons ── */}
        <div className="mt-28 border-t border-[var(--border)] pt-20 lg:mt-36">
          <p className="mb-16 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">
            What I know now
          </p>
          <div className="space-y-0">
            {ezduData.lessons.map((lesson, i) => (
              <div key={i} className="border-b border-[var(--border)] py-8">
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
