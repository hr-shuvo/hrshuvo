import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expertise",
  description: "Skills, tools, and the education behind the engineering.",
};

const skills = [
  { area: "Backend",        items: [".NET Core", "C#", "REST APIs", "SignalR"] },
  { area: "Frontend",       items: ["Next.js", "React", "TypeScript", "Tailwind"] },
  { area: "Mobile",         items: ["Flutter", "iOS", "Android"] },
  { area: "Data",           items: ["MySQL", "SQL Server", "Redis"] },
  { area: "Infrastructure", items: ["AWS", "Docker", "MinIO", "CI/CD"] },
  { area: "AI / LLM",       items: ["LLM Pipelines", "Prompt Engineering"] },
];

const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Database Systems",
  "Computer Networks",
  "Software Engineering",
  "Compiler Design",
];

export default function ExpertisePage() {
  return (
    <div className="pt-14">

      {/* ── Introduction ── */}
      <section className="mx-auto max-w-7xl px-6 pt-28 sm:px-8 md:pt-36 lg:px-12 lg:pt-44">
        <div className="border-t border-[var(--border)] pt-14">

          <p className="mb-8 text-xs tracking-[0.3em] text-[var(--muted-color)] uppercase">Expertise</p>

          <div className="grid gap-12 lg:grid-cols-[60%_1fr] lg:gap-20 lg:items-end">
            <h1
              className="font-serif tracking-tight text-[var(--foreground)]"
              style={{
                fontSize: "clamp(2.8rem, 5vw, 4.8rem)",
                fontWeight: 600,
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
              }}
            >
              Skills &amp; tools.<br />
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--muted-color)" }}>
                Education.
              </em>
            </h1>

            <div className="space-y-5 lg:pb-2">
              <p className="text-sm leading-[1.95] text-[var(--muted-color)]">
                Full-stack across backend, frontend, and mobile — with infrastructure
                and AI pipelines where the product needs it.
              </p>
              <p className="text-sm leading-[1.95] text-[var(--muted-color)]">
                Grounded in algorithms from competitive programming, applied to
                real systems under production constraints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-24 border-t border-[var(--border)] pt-14 lg:mt-32">
          <p className="mb-12 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Skills</p>
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ background: "var(--border)" }}>
            {skills.map((s) => (
              <div
                key={s.area}
                className="p-6 transition-colors duration-150 hover:bg-[var(--surface-alt)]"
                style={{ background: "var(--surface)" }}
              >
                <p className="text-xs tracking-[0.12em] text-[var(--muted-color)] uppercase mb-4">{s.area}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-[var(--foreground)] border border-[var(--border)] px-2.5 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-24 border-t border-[var(--border)] pt-14 pb-32 lg:mt-32 lg:pb-44">
          <p className="mb-12 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Education</p>
          <div className="grid gap-10 lg:grid-cols-[58%_1fr] lg:gap-20 lg:items-start">
            <div className="flex items-start gap-6">
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-xl overflow-hidden border border-[var(--border)]"
                style={{ width: 68, height: 52, padding: "6px 10px", background: "#fff" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/diu-logo.png"
                  alt="Daffodil International University"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2
                  className="font-serif text-[var(--foreground)] font-semibold"
                  style={{ fontSize: "1.1rem", letterSpacing: "-0.01em" }}
                >
                  Daffodil International University
                </h2>
                <p className="text-xs text-[var(--muted-color)] mt-0.5">Dhaka, Bangladesh</p>
                <div className="mt-3 flex items-center gap-2 flex-wrap">
                  <span
                    className="text-xs px-2.5 py-1"
                    style={{ background: "rgba(37,99,235,0.08)", color: "#2563eb" }}
                  >
                    B.Sc. Computer Science &amp; Engineering
                  </span>
                  <span className="text-xs border border-[var(--border)] px-2.5 py-1 text-[var(--muted-color)]">
                    2016 – 2021
                  </span>
                </div>
                <p className="mt-3 text-xs leading-[1.8] text-[var(--muted-color)] max-w-sm">
                  500+ problems across Codeforces, HackerRank, and UVA.
                  Algorithms as design input, not just theory.
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.15em] text-[var(--muted-color)] uppercase mb-4">Coursework</p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span
                    key={c}
                    className="text-xs border border-[var(--border)] px-2.5 py-1 text-[var(--muted-color)]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
