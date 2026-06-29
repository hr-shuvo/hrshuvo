import type { Metadata } from "next";
import { journeyItems } from "@/lib/data/journey";

function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "About",
  description: "Software engineer and product builder. From competitive programming to two products in production.",
};

const skills = [
  { area: "Backend",        items: [".NET Core", "C#", "REST APIs", "SignalR"] },
  { area: "Frontend",       items: ["Next.js", "React", "TypeScript", "Tailwind"] },
  { area: "Mobile",         items: ["Flutter", "iOS", "Android"] },
  { area: "Data",           items: ["MySQL", "SQL Server", "Redis"] },
  { area: "Infrastructure", items: ["AWS", "Docker", "MinIO", "CI/CD"] },
  { area: "AI / LLM",       items: ["LLM Pipelines", "Prompt Engineering"] },
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
        <div className="border-t border-[var(--border)] pt-14">

          {/* Label row */}
          <p className="mb-8 text-xs tracking-[0.3em] text-[var(--muted-color)] uppercase">About</p>

          {/* Hero grid */}
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
              Software engineer.<br />
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--muted-color)" }}>
                Product builder.
              </em>
            </h1>

            <div className="space-y-5 lg:pb-2">
              <p className="text-sm leading-[1.95] text-[var(--muted-color)]">
                Two years building production systems for real organisations —
                a school platform used by actual teachers, an OTA where someone&apos;s
                flight depended on an API I wrote.
              </p>
              <p className="text-sm leading-[1.95] text-[var(--muted-color)]">
                In 2024 I left employment to build independently.
                Two products in production. Full ownership of product, engineering, and operations.
              </p>
              <div className="flex items-center gap-2.5 pt-1">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "var(--color-accent)" }}
                />
                <p className="text-xs tracking-[0.06em] text-[var(--muted-color)]">
                  Currently building{" "}
                  <span style={{ color: "var(--color-accent)" }}>Ezdu</span>
                  {" "}·{" "}Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Journey ── */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-24 border-t border-[var(--border)] pt-14 lg:mt-32">
          <p className="mb-12 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Journey</p>
          <div>
            {journeyItems.map((item) => (
              <div
                key={item.year}
                className="group grid border-b border-[var(--border)] py-6 gap-3 lg:grid-cols-[6rem_1fr_auto] lg:gap-10 lg:items-baseline hover:bg-[var(--surface)] transition-colors duration-150 -mx-2 px-2"
              >
                <p
                  className="font-serif select-none tabular-nums font-semibold transition-colors duration-200"
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    color: "var(--surface-alt)",
                  }}
                >
                  {item.year}
                </p>
                <div>
                  <p className="text-sm font-medium text-[var(--foreground)] mb-1 leading-snug">
                    {item.title}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 lg:justify-end lg:max-w-[14rem]">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-[var(--border)] px-2 py-0.5 text-[var(--muted-color)]"
                    >
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
        <div className="mt-24 border-t border-[var(--border)] pt-14 lg:mt-32">
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

      {/* ── Expertise ── */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-24 border-t border-[var(--border)] pt-14 lg:mt-32">
          <p className="mb-12 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Expertise</p>
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

      {/* ── Philosophy ── */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-24 border-t border-[var(--border)] pt-14 lg:mt-32">
          <p className="mb-12 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Philosophy</p>
          <div className="grid gap-px sm:grid-cols-2" style={{ background: "var(--border)" }}>
            {philosophy.map((p, i) => (
              <div
                key={i}
                className="p-7 transition-colors duration-150 hover:bg-[var(--surface-alt)]"
                style={{ background: "var(--surface)" }}
              >
                <p
                  className="font-serif text-[var(--foreground)] mb-3"
                  style={{
                    fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
                    fontWeight: 500,
                    fontStyle: "italic",
                    lineHeight: 1.4,
                    letterSpacing: "-0.01em",
                  }}
                >
                  &ldquo;{p.quote}&rdquo;
                </p>
                <p className="text-xs leading-[1.8] text-[var(--muted-color)]">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Current focus ── */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-24 border-t border-[var(--border)] pt-14 lg:mt-32">
          <p className="mb-10 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Now</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Ezdu",            desc: "Gamified mobile learning. Teacher dashboard next.",        accent: "#10b981" },
              { label: "Better IELTS",    desc: "Real-time speaking tests in production.",                  accent: "#00b87a" },
              { label: "Product thinking", desc: "What to build, what to cut, how to focus.",              accent: "var(--color-accent)" },
            ].map((f) => (
              <div
                key={f.label}
                className="border border-[var(--border)] p-5 hover:border-[var(--foreground)] transition-colors duration-200"
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: f.accent }} />
                  <p className="text-sm font-medium text-[var(--foreground)]">{f.label}</p>
                </div>
                <p className="text-xs leading-[1.8] text-[var(--muted-color)]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-24 border-t border-[var(--border)] pt-14 pb-32 lg:mt-32 lg:pb-44">
          <p className="mb-10 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Contact</p>

          <div className="grid gap-16 lg:grid-cols-[55%_1fr] lg:gap-24 lg:items-end">
            <h2
              className="font-serif tracking-tight text-[var(--foreground)]"
              style={{
                fontSize: "clamp(2.2rem, 5.5vw, 5rem)",
                fontWeight: 600,
                lineHeight: 1.03,
                letterSpacing: "-0.03em",
              }}
            >
              Let&apos;s build something{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--muted-color)" }}>
                that matters.
              </em>
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-[0.15em] text-[var(--muted-color)] uppercase mb-3">Email</p>
                <a
                  href="mailto:hrshuvo207@gmail.com"
                  className="group font-serif text-[var(--foreground)] hover:text-[var(--color-accent)] transition-colors duration-300 block"
                  style={{ fontSize: "clamp(1rem, 1.9vw, 1.45rem)", fontWeight: 400, fontStyle: "italic", letterSpacing: "-0.01em" }}
                >
                  hrshuvo207@gmail.com
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 not-italic text-[var(--color-accent)]">↗</span>
                </a>
              </div>

              <div>
                <p className="text-xs tracking-[0.15em] text-[var(--muted-color)] uppercase mb-3">Social</p>
                <div className="flex items-center gap-6 flex-wrap">
                  <a
                    href="https://github.com/hr-shuvo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs tracking-[0.08em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors duration-200"
                  >
                    <GitHubIcon size={13} />
                    GitHub
                  </a>
                  <span className="text-[var(--border)]">·</span>
                  <a
                    href="https://linkedin.com/in/hrshuvo9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs tracking-[0.08em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors duration-200"
                  >
                    <LinkedInIcon size={13} />
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-[var(--border)]">
                <p className="text-xs tracking-[0.15em] text-[var(--muted-color)] uppercase mb-3">Resume</p>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.08em] text-[var(--foreground)] border border-[var(--border)] px-4 py-2.5 hover:border-[var(--foreground)] hover:bg-[var(--surface)] transition-all duration-200"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          <p className="mt-14 text-xs leading-[2] text-[var(--muted-color)] max-w-xs border-l-2 border-[var(--border)] pl-5">
            Building something early-stage, or need someone who can move between product and engineering without losing context?
            Based in Dhaka. Available remotely.
          </p>
        </div>
      </section>

    </div>
  );
}
