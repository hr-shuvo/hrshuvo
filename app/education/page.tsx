import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description: "B.Sc. in Computer Science & Engineering — Metropolitan University, Sylhet. Graduated 2023.",
};

const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Database Management Systems",
  "Computer Networks",
  "Software Engineering",
  "Object-Oriented Programming",
  "Discrete Mathematics",
  "Compiler Design",
];

const activities = [
  {
    label: "Competitive Programming",
    detail: "500+ problems across Codeforces, HackerRank, and UVA Online Judge. 3 years, consistently.",
  },
  {
    label: "Algorithm Study Groups",
    detail: "Organized and participated in peer problem-solving sessions focused on graph theory and dynamic programming.",
  },
  {
    label: "Final Year Project",
    detail: "Built a web-based exam management system — my first end-to-end software project with a real user base.",
  },
];

const shaped = [
  {
    label: "Algorithmic thinking",
    caption: "Every performance decision starts with the same question: what is the time complexity of this?",
  },
  {
    label: "Constraint as design input",
    caption: "500 competitive programming problems taught me that a tight constraint doesn't block a good solution — it shapes one.",
  },
  {
    label: "Ownership of abstractions",
    caption: "Building data structures from scratch before using library versions. I know what the library is hiding.",
  },
  {
    label: "Production gap awareness",
    caption: "Nothing in the curriculum prepared me for a real incident. That gap is now something I design against explicitly.",
  },
];

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

      {/* Institution block */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-20 lg:mt-28">

          {/* Institution header */}
          <div className="flex items-start gap-6 mb-12 flex-wrap">
            {/* Real logo */}
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-xl overflow-hidden border border-[var(--border)] bg-white"
              style={{ width: 80, height: 56, padding: "8px 12px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mu-logo.png"
                alt="Metropolitan University logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-6 flex-wrap">
                <div>
                  <h2
                    className="font-serif text-[var(--foreground)]"
                    style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)", fontWeight: 600, letterSpacing: "-0.02em" }}
                  >
                    Metropolitan University
                  </h2>
                  <p className="mt-1 text-sm text-[var(--muted-color)]">Sylhet, Bangladesh</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-medium text-[var(--foreground)]">2019 – 2023</p>
                  <p className="mt-0.5 text-xs text-[var(--muted-color)]">4 years</p>
                </div>
              </div>

              {/* Degree badge row */}
              <div className="mt-4 flex items-center gap-3 flex-wrap">
                <span
                  className="text-xs tracking-[0.06em] px-3 py-1.5 font-medium"
                  style={{ background: "rgba(37,99,235,0.08)", color: "#2563eb" }}
                >
                  B.Sc. Computer Science &amp; Engineering
                </span>
                <span className="text-xs tracking-[0.06em] px-3 py-1.5 border border-[var(--border)] text-[var(--muted-color)]">
                  Graduated 2023
                </span>
              </div>
            </div>
          </div>

          {/* Degree story + coursework */}
          <div className="grid gap-12 lg:grid-cols-[55%_1fr] lg:gap-20">
            <div>
              <div className="border-l-2 border-[#2563eb] pl-6 mb-10">
                <p className="text-sm leading-[1.95] text-[var(--foreground)]">
                  The degree gave me C, algorithms, data structures, and a habit of thinking in constraints.
                  Competitive programming consumed three of those years — 500+ problems, mostly wrong on the first attempt.
                  Not because of the grade, but because the problems didn't accept almost-correct.
                </p>
                <p className="mt-4 text-sm leading-[1.95] text-[var(--muted-color)]">
                  What the curriculum couldn't teach: what it feels like when a teacher can't do her job because
                  of a bug you wrote. That lesson came from the first production deployment. The academic foundation
                  made it possible to get there — and to understand what broke when it did.
                </p>
              </div>

              {/* Activities */}
              <div>
                <p className="text-xs tracking-[0.2em] text-[var(--muted-color)] uppercase mb-5">
                  Activities &amp; highlights
                </p>
                <div className="space-y-5">
                  {activities.map((a, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span
                        className="font-serif flex-shrink-0 mt-0.5"
                        style={{ color: "#2563eb", fontSize: "0.65rem", fontWeight: 700 }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-[var(--foreground)] mb-0.5">{a.label}</p>
                        <p className="text-xs leading-[1.75] text-[var(--muted-color)]">{a.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Relevant coursework */}
            <div>
              <p className="text-xs tracking-[0.2em] text-[var(--muted-color)] uppercase mb-5">
                Relevant coursework
              </p>
              <div className="space-y-0">
                {coursework.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 border-b border-[var(--border)] py-3"
                  >
                    <span
                      className="flex-shrink-0 w-1 h-1 rounded-full"
                      style={{ background: "#2563eb" }}
                    />
                    <p className="text-sm text-[var(--foreground)]">{c}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What it shaped */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-24 border-t border-[var(--border)] pt-16 lg:mt-32">
          <p className="mb-10 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">
            What it shaped
          </p>
          <div className="grid gap-0">
            {shaped.map((item) => (
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
        <div className="mt-20 pb-32 lg:mt-28 lg:pb-40">
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
