import Link from "next/link";
import { journeyItems } from "@/lib/data/journey";
import { projects } from "@/lib/data/projects";

export default function Home() {
  const featuredProject = projects.find((p) => p.id === "ezdu")!;
  const recentJourneyItem = journeyItems[journeyItems.length - 1];

  return (
    <div className="min-h-screen pt-14">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-[90vh] flex-col overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 40% at 50% -10%, rgba(194,136,74,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative flex flex-1 flex-col justify-center">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">

            <p className="mb-20 text-xs tracking-[0.22em] text-[var(--muted-color)] uppercase">
              Dhaka, Bangladesh
            </p>

            <h1
              className="font-serif tracking-tight text-[var(--foreground)]"
              style={{
                fontSize: "clamp(3.5rem, 8.5vw, 8.5rem)",
                fontWeight: 600,
                lineHeight: 1.04,
                letterSpacing: "-0.025em",
              }}
            >
              Software engineer.
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--muted-color)",
                  fontSize: "0.88em",
                }}
              >
                Product builder.
              </em>
            </h1>

            <p
              className="mt-14 max-w-md leading-[1.85] text-[var(--muted-color)]"
              style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)" }}
            >
              I left a stable job to build Ezdu — a gamified learning platform
              — from scratch. No co-founder. No funding. Two products in production.
            </p>

            <div className="mt-12 flex items-center gap-8">
              <Link
                href="/journey"
                className="text-sm tracking-[0.08em] text-[var(--foreground)] border-b border-[var(--foreground)] pb-0.5 hover:text-[var(--muted-color)] hover:border-[var(--muted-color)] transition-colors duration-300"
              >
                Read the story
              </Link>
              <Link
                href="/projects"
                className="text-sm tracking-[0.08em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors duration-300"
              >
                See the work →
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 pb-10 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between">
            <p
              className="font-serif text-[var(--border)]"
              style={{ fontSize: "clamp(0.65rem, 1vw, 0.75rem)", letterSpacing: "0.1em" }}
            >
              2026
            </p>
            <p
              className="font-serif italic text-[var(--border)]"
              style={{ fontSize: "clamp(0.65rem, 1vw, 0.75rem)", letterSpacing: "0.05em" }}
            >
              Shuvo
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured: Ezdu ───────────────────────────────────── */}
      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="flex items-baseline justify-between gap-8 mb-12">
            <div>
              <p className="text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase mb-4">
                Featured — The thing I quit my job to build
              </p>
              <h2
                className="font-serif text-[var(--foreground)]"
                style={{
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  fontWeight: 600,
                  lineHeight: 1.06,
                  letterSpacing: "-0.025em",
                }}
              >
                {featuredProject.title}
              </h2>
            </div>
            <Link
              href="/projects/ezdu"
              className="flex-shrink-0 text-xs tracking-[0.06em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors border-b border-[var(--border)] hover:border-[var(--muted-color)] pb-1"
            >
              Full case study →
            </Link>
          </div>

          <div className="max-w-3xl border-l-2 border-[var(--color-accent)] pl-8 lg:pl-12">
            <p
              className="font-serif text-[var(--foreground)] leading-[1.55]"
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.6rem)",
                fontWeight: 400,
                fontStyle: "italic",
                letterSpacing: "-0.01em",
              }}
            >
              {featuredProject.tagline}
            </p>
            <p className="mt-5 text-sm leading-[1.85] text-[var(--muted-color)] max-w-xl">
              {featuredProject.problem}
            </p>
          </div>
        </div>
      </section>

      {/* ── Preview Grid: Journey + Projects + Architecture ── */}
      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border)]">

            {/* Journey preview */}
            <div className="py-16 lg:pr-12">
              <p className="text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase mb-8">
                Journey
              </p>
              <p
                className="font-serif text-[var(--foreground)] leading-snug mb-6"
                style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)", fontWeight: 500, letterSpacing: "-0.01em" }}
              >
                {recentJourneyItem.title}
              </p>
              <p className="text-sm leading-[1.85] text-[var(--muted-color)] mb-8 line-clamp-3">
                {recentJourneyItem.body}
              </p>
              <Link
                href="/journey"
                className="text-xs tracking-[0.08em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors border-b border-[var(--border)] hover:border-[var(--muted-color)] pb-0.5"
              >
                From 2016 to now →
              </Link>
            </div>

            {/* Projects preview */}
            <div className="py-16 lg:px-12">
              <p className="text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase mb-8">
                Projects
              </p>
              <div className="space-y-6 mb-8">
                {projects.slice(0, 3).map((project) => (
                  <div key={project.id} className="border-b border-[var(--border)] pb-6 last:border-0 last:pb-0">
                    <p className="font-serif text-[var(--foreground)] text-sm font-medium mb-1">
                      {project.title}
                    </p>
                    <p className="text-xs text-[var(--muted-color)]">{project.tagline}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/projects"
                className="text-xs tracking-[0.08em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors border-b border-[var(--border)] hover:border-[var(--muted-color)] pb-0.5"
              >
                All case studies →
              </Link>
            </div>

            {/* Architecture preview */}
            <div className="py-16 lg:pl-12">
              <p className="text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase mb-8">
                Architecture
              </p>
              <p
                className="font-serif text-[var(--foreground)] leading-snug mb-6"
                style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)", fontWeight: 500, letterSpacing: "-0.01em" }}
              >
                How I design systems,
                <br />
                <em style={{ fontWeight: 400, color: "var(--muted-color)" }}>not just write code.</em>
              </p>
              <p className="text-sm leading-[1.85] text-[var(--muted-color)] mb-8">
                Authentication, caching, API design, scalability — explained through diagrams and decisions, not bullet lists.
              </p>
              <Link
                href="/architecture"
                className="text-xs tracking-[0.08em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors border-b border-[var(--border)] hover:border-[var(--muted-color)] pb-0.5"
              >
                Engineering thinking →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Philosophy teaser ────────────────────────────────── */}
      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[55%_1fr] lg:gap-20 lg:items-end">
            <div>
              <p className="text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase mb-8">
                Philosophy
              </p>
              <blockquote
                className="font-serif text-[var(--foreground)]"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2.8rem)",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                &ldquo;The schema outlives everything else.&rdquo;
              </blockquote>
            </div>
            <div>
              <p className="text-sm leading-[1.9] text-[var(--muted-color)] mb-8">
                A bad data model costs six months later, not six hours now.
                Not principles I recite — patterns I noticed after things went wrong.
              </p>
              <Link
                href="/philosophy"
                className="text-xs tracking-[0.08em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors border-b border-[var(--border)] hover:border-[var(--muted-color)] pb-0.5"
              >
                How I think about the work →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
