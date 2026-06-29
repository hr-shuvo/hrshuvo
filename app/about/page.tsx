import type { Metadata } from "next";
import { journeyItems } from "@/lib/data/journey";

export const metadata: Metadata = {
  title: "About",
  description: "Software engineer and product builder based in Dhaka.",
};

const interests = [
  "Competitive Programming",
  "Chess",
  "Reading",
];

const achievements = [
  { title: "Facebook Hacker Cup 2022", detail: "Advanced to Round 1" },
  { title: "500+ Problems Solved", detail: "Codeforces · HackerRank · UVA" },
  { title: "Professional Programming with C#", detail: "DevSkill" },
  { title: "Full Stack ASP.NET Core MVC Web Development", detail: "DevSkill" },
];

const contacts = [
  {
    label: "Email",
    handle: "hrshuvo207@gmail.com",
    href: "mailto:hrshuvo207@gmail.com",
    icon: (
      <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    handle: "hr-shuvo",
    href: "https://github.com/hr-shuvo",
    icon: (
      <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "hrshuvo9",
    href: "https://linkedin.com/in/hrshuvo9",
    icon: (
      <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    handle: "YOUR_HANDLE",
    href: "https://facebook.com/YOUR_HANDLE",
    icon: (
      <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    handle: "YOUR_HANDLE",
    href: "https://instagram.com/YOUR_HANDLE",
    icon: (
      <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.69.073 4.949.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="pt-14">

      {/* ── Introduction ── */}
      <section className="mx-auto max-w-7xl px-6 pt-28 sm:px-8 md:pt-36 lg:px-12 lg:pt-44">
        <div className="border-t border-[var(--border)] pt-14">

          <p className="mb-8 text-xs tracking-[0.3em] text-[var(--muted-color)] uppercase">About</p>

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
                Full-stack engineer with 2.5+ years building production systems —
                a school platform, a full OTA, and two independently-built EdTech products.
              </p>
              <p className="text-sm leading-[1.95] text-[var(--muted-color)]">
                In 2024 I left employment to build on my own.
                Full ownership of product, engineering, and operations.
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
                  className="font-serif select-none tabular-nums font-semibold"
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    color: "var(--surface-alt)",
                  }}
                >
                  {item.year}
                </p>
                <p className="text-sm font-medium text-[var(--foreground)] leading-snug">
                  {item.title}
                </p>
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

      {/* ── Interests ── */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-24 border-t border-[var(--border)] pt-14 lg:mt-32">
          <p className="mb-8 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Interests</p>
          <div className="flex flex-wrap gap-3">
            {interests.map((item) => (
              <span
                key={item}
                className="text-sm border border-[var(--border)] px-4 py-2 text-[var(--muted-color)] hover:text-[var(--foreground)] hover:border-[var(--foreground)] transition-colors duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-24 border-t border-[var(--border)] pt-14 lg:mt-32">
          <p className="mb-12 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Awards &amp; Achievements</p>
          <div className="grid gap-px sm:grid-cols-2" style={{ background: "var(--border)" }}>
            {achievements.map((a) => (
              <div
                key={a.title}
                className="p-6 transition-colors duration-150 hover:bg-[var(--surface-alt)]"
                style={{ background: "var(--surface)" }}
              >
                <p className="text-sm font-medium text-[var(--foreground)] mb-1 leading-snug">{a.title}</p>
                <p className="text-xs text-[var(--muted-color)]">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-24 border-t border-[var(--border)] pt-14 pb-32 lg:mt-32 lg:pb-44">
          <p className="mb-10 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">Contact</p>
          <div className="flex flex-col gap-1 max-w-sm">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel={c.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-4 py-3 border-b border-[var(--border)] hover:border-[var(--foreground)] transition-colors duration-200"
              >
                <span className="w-4 flex-shrink-0 text-[var(--muted-color)] group-hover:text-[var(--foreground)] transition-colors duration-200">
                  {c.icon}
                </span>
                <span className="text-xs tracking-[0.08em] text-[var(--muted-color)] w-20 flex-shrink-0">{c.label}</span>
                <span className="text-xs text-[var(--foreground)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
                  {c.handle}
                </span>
                <span className="ml-auto text-[var(--border)] group-hover:text-[var(--color-accent)] text-xs transition-colors duration-200">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
