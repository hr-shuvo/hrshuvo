import type { Metadata } from "next";
import { journeyItems } from "@/lib/data/journey";

export const metadata: Metadata = {
  title: "About",
  description: "Software engineer and product builder. From competitive programming to two products in production.",
};

const skills = [
  { area: "Backend", items: [".NET Core", "C#", "REST APIs", "SignalR"] },
  { area: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind"] },
  { area: "Mobile", items: ["Flutter", "iOS", "Android"] },
  { area: "Data", items: ["MySQL", "SQL Server", "Redis"] },
  { area: "Infrastructure", items: ["AWS", "Docker", "MinIO", "CI/CD"] },
  { area: "AI / LLM", items: ["LLM Pipelines", "Prompt Engineering"] },
];

const philosophy = [
  {
    quote: "The schema outlives everything else.",
    note: "Design the data model before the API.",
  },
  {
    quote: "Write for the engineer at 2am.",
    note: "Future me, tired and under pressure, is the real reader.",
  },
  {
    quote: "Ship before it's ready.",
    note: "Watching real users replaces weeks of speculation.",
  },
  {
    quote: "Ownership is the multiplier.",
    note: "No one to blame forces clarity.",
  },
];

const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Database Systems",
  "Computer Networks",
  "Software Engineering",
  "Compiler Design",
];

export default function AboutPage() {
  return (
    <div className="pt-14">

      {/* ── Introduction ── */}
      <section className="mx-auto max-w-7xl px-6 pt-28 sm:px-8 md:pt-36 lg:px-12 lg:pt-44">
        <div className="border-t border-[var(--border)] pt-14 grid gap-12 lg:grid-cols-[55%_1fr] lg:gap-20 lg:items-end">
          <div>
            <p className="mb-5 text-xs tracking-[0.3em] text-[var(--muted-color)] uppercase">About</p>
            <h1
              className="font-serif tracking-tight text-[var(--foreground)]"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)", fontWeight: 600, lineHeight: 1.04, letterSpacing: "-0.025em" }}
            >
              Engineer.{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--muted-color)" }}>
                Product builder.
              </em>
            </h1>
          </div>
          <div className="space-y-4 lg:pb-2">
            <p className="text-sm leading-[1.9] text-[var(--muted-color)]">
              Two years building production systems for real organisations —
              a school platform used by actual teachers, an OTA where someone&apos;s
              flight depended on an API I wrote.
            </p>
            <p className="text-sm leading-[1.9] text-[var(--muted-color)]">
              In 2024 I left employment to build independently.
              Two products in production. Full ownership of product, engineering, and operations.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-accent)" }} />
              <p className="text-xs tracking-[0.06em] text-[var(--muted-color)]">
                Currently building <span style={{ color: "var(--color-accent)" }}>Ezdu</span> · Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Journey ── */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-20 border-t border-[var(--border)] pt-14 lg:mt-28">
          <p className="mb-12 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Journey</p>
          <div>
            {journeyItems.map((item) => (
              <div
                key={item.year}
                className="grid border-b border-[var(--border)] py-6 gap-3 lg:grid-cols-[6rem_1fr_auto] lg:gap-10 lg:items-baseline"
              >
                <p
                  className="font-serif text-[var(--surface-alt)] select-none tabular-nums font-semibold"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", lineHeight: 1, letterSpacing: "-0.04em" }}
                >
                  {item.year}
                </p>
                <div>
                  <p className="text-sm font-medium text-[var(--foreground)] mb-1 leading-snug">{item.title}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 lg:justify-end lg:max-w-[14rem]">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs border border-[var(--border)] px-2 py-0.5 text-[var(--muted-color)]">
                      {tag}
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
        <div className="mt-20 border-t border-[var(--border)] pt-14 lg:mt-28">
          <p className="mb-12 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Education</p>
          <div className="grid gap-10 lg:grid-cols-[55%_1fr] lg:gap-20 lg:items-start">
            <div className="flex items-start gap-5">
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-xl overflow-hidden border border-[var(--border)] bg-white"
                style={{ width: 64, height: 48, padding: "5px 8px" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mu-logo.png" alt="Metropolitan University" className="w-full h-full object-contain" />
              </div>
              <div>
                <h2
                  className="font-serif text-[var(--foreground)] font-semibold"
                  style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}
                >
                  Metropolitan University
                </h2>
                <p className="text-xs text-[var(--muted-color)] mt-0.5">Sylhet, Bangladesh</p>
                <div className="mt-3 flex items-center gap-2 flex-wrap">
                  <span
                    className="text-xs px-2.5 py-1"
                    style={{ background: "rgba(37,99,235,0.08)", color: "#2563eb" }}
                  >
                    B.Sc. Computer Science &amp; Engineering
                  </span>
                  <span className="text-xs border border-[var(--border)] px-2.5 py-1 text-[var(--muted-color)]">
                    2019 – 2023
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
                  <span key={c} className="text-xs border border-[var(--border)] px-2.5 py-1 text-[var(--muted-color)]">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Expertise ── */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-20 border-t border-[var(--border)] pt-14 lg:mt-28">
          <p className="mb-12 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Expertise</p>
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ background: "var(--border)" }}>
            {skills.map((s) => (
              <div key={s.area} className="p-6" style={{ background: "var(--background)" }}>
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

      {/* ── Philosophy ── */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-20 border-t border-[var(--border)] pt-14 lg:mt-28">
          <p className="mb-12 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Philosophy</p>
          <div className="grid gap-px sm:grid-cols-2" style={{ background: "var(--border)" }}>
            {philosophy.map((p, i) => (
              <div key={i} className="p-7" style={{ background: "var(--background)" }}>
                <p
                  className="font-serif text-[var(--foreground)] mb-2"
                  style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)", fontWeight: 500, fontStyle: "italic", lineHeight: 1.4, letterSpacing: "-0.01em" }}
                >
                  &ldquo;{p.quote}&rdquo;
                </p>
                <p className="text-xs leading-[1.7] text-[var(--muted-color)]">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Current focus ── */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-20 border-t border-[var(--border)] pt-14 pb-32 lg:mt-28 lg:pb-40">
          <p className="mb-10 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Now</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Ezdu", desc: "Gamified mobile learning. Teacher dashboard next.", accent: "#10b981" },
              { label: "Better IELTS", desc: "Real-time speaking tests in production.", accent: "#00d492" },
              { label: "Product thinking", desc: "What to build, what to cut, how to focus.", accent: "var(--color-accent)" },
            ].map((f) => (
              <div key={f.label} className="border border-[var(--border)] p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: f.accent }} />
                  <p className="text-sm font-medium text-[var(--foreground)]">{f.label}</p>
                </div>
                <p className="text-xs leading-[1.75] text-[var(--muted-color)]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
