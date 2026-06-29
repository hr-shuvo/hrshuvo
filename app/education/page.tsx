import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description: "BSc in Computer Science & Engineering — and what building real products taught me that a degree couldn't.",
};

export default function EducationPage() {
  return (
    <div className="pt-14">

      {/* Opening */}
      <div className="mx-auto max-w-7xl px-6 pt-32 sm:px-8 md:pt-40 lg:px-12 lg:pt-48">
        <div className="border-t border-[var(--border)] pt-14">
          <p className="mb-6 text-xs tracking-[0.3em] text-[var(--muted-color)] uppercase">
            Education
          </p>
          <h1
            className="font-serif tracking-tight text-[var(--foreground)]"
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
              fontWeight: 600,
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
            }}
          >
            The foundation.
          </h1>
        </div>
      </div>

      {/* Degree block */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-20 lg:mt-28 grid gap-12 lg:grid-cols-[55%_1fr] lg:gap-20">

          <div>
            <p
              className="font-serif text-[var(--foreground)]"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: 500,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              B.Sc. in Computer Science
              <br />
              <em style={{ fontWeight: 400, color: "var(--muted-color)", fontStyle: "italic" }}>
                &amp; Engineering
              </em>
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-xs tracking-[0.15em] text-[var(--muted-color)] uppercase w-24 flex-shrink-0">
                  Institution
                </span>
                <span className="text-sm text-[var(--foreground)]">
                  Metropolitan University, Sylhet
                </span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs tracking-[0.15em] text-[var(--muted-color)] uppercase w-24 flex-shrink-0">
                  Graduated
                </span>
                <span className="text-sm text-[var(--foreground)]">2023</span>
              </div>
            </div>
          </div>

          <div className="lg:pt-2 space-y-5">
            <p className="text-sm leading-[1.9] text-[var(--muted-color)]">
              The degree gave me C, algorithms, data structures, and a habit of thinking in
              constraints. Competitive programming consumed three of those years — 500+ problems,
              mostly wrong on the first attempt.
            </p>
            <p className="text-sm leading-[1.9] text-[var(--muted-color)]">
              What the degree couldn&apos;t teach: what it feels like when a teacher can&apos;t do her job
              because of a bug you wrote. That lesson came from the first production system. The
              academic foundation made it possible to get there — and to debug it when it broke.
            </p>
          </div>
        </div>
      </div>

      {/* What it shaped */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-24 border-t border-[var(--border)] pt-16 lg:mt-32">
          <p className="mb-12 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">
            What it shaped
          </p>

          <div className="grid gap-0">
            {[
              {
                label: "Algorithmic thinking",
                caption: "Every performance decision starts with the same question: what is the time complexity of this?",
              },
              {
                label: "Constraint as design input",
                caption: "500 competitive programming problems taught me that a tight constraint doesn't block good solutions — it shapes them.",
              },
              {
                label: "Ownership of abstractions",
                caption: "Building data structures from scratch before using library versions. I know what the library is hiding.",
              },
              {
                label: "Production gap awareness",
                caption: "Nothing in the curriculum prepared me for a real incident. That gap is now something I design against explicitly.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border-b border-[var(--border)] py-8 grid gap-3 lg:grid-cols-[22rem_1fr] lg:gap-12"
              >
                <p
                  className="font-serif text-[var(--foreground)]"
                  style={{ fontSize: "0.95rem", fontWeight: 500, letterSpacing: "-0.01em" }}
                >
                  {item.label}
                </p>
                <p className="text-sm leading-[1.8] text-[var(--muted-color)]">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing quote */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-24 pb-32 lg:mt-32 lg:pb-40">
          <blockquote
            className="font-serif text-[var(--foreground)] max-w-2xl"
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
              fontWeight: 400,
              fontStyle: "italic",
              letterSpacing: "-0.015em",
              lineHeight: 1.4,
            }}
          >
            &ldquo;A degree teaches you how to learn. The rest you learn by building things that break.&rdquo;
          </blockquote>
        </div>
      </div>

    </div>
  );
}
