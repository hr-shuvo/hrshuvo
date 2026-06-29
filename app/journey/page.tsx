import type { Metadata } from "next";
import { journeyItems } from "@/lib/data/journey";
import { CompanyCard } from "@/components/ui/CompanyCard";

export const metadata: Metadata = {
  title: "Journey",
  description: "From the first C program to two live products. The moments worth writing down.",
};

const companies = [
  {
    year: "2022",
    name: "OnnoRokom Software",
    role: "Software Engineer",
    period: "2022",
    accent: "#2563eb",
    url: "https://onnorokomgroup.com",
    description: "Built a school management system used by real students and teachers.",
  },
  {
    year: "2023",
    name: "A4Aero",
    role: "Full-Stack Engineer",
    period: "2023",
    accent: "#0ea5e9",
    url: "https://a4aero.com",
    description: "Designed and built the entire OTA platform — flights, hotels, payments, three user types — solo.",
  },
];

export default function JourneyPage() {
  return (
    <div className="pt-14">

      {/* Chapter opening */}
      <div className="mx-auto max-w-7xl px-6 pt-32 sm:px-8 md:pt-40 lg:px-12 lg:pt-48">
        <div className="border-t border-[var(--border)] pt-14 max-w-3xl">
          <p className="mb-6 text-xs tracking-[0.3em] text-[var(--muted-color)] uppercase">
            How I got here
          </p>
          <h1
            className="font-serif tracking-tight text-[var(--foreground)]"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              fontWeight: 600,
              lineHeight: 1.06,
              letterSpacing: "-0.025em",
            }}
          >
            Not a résumé.
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--muted-color)" }}>
              A sequence of moments.
            </em>
          </h1>
        </div>
      </div>

      {/* Timeline entries with company cards at relevant years */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-24 lg:mt-32">
          {journeyItems.map((item, i) => {
            const company = companies.find((c) => c.year === item.year);
            const isLast = i === journeyItems.length - 1;

            return (
              <div
                key={item.year}
                className="relative grid gap-6 border-t border-[var(--border)] py-14 lg:grid-cols-[10rem_1fr_22rem] lg:gap-12 lg:py-20"
              >
                {/* Year */}
                <div className="lg:pt-1">
                  <p
                    className="font-serif font-semibold text-[var(--surface-alt)] select-none tabular-nums"
                    style={{
                      fontSize: "clamp(2.5rem, 5vw, 4rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {item.year}
                  </p>
                  <div
                    className="mt-4 hidden lg:block w-1.5 h-1.5 rounded-full"
                    style={{ background: isLast ? "var(--color-accent)" : "var(--border)" }}
                  />
                </div>

                {/* Story */}
                <div className="max-w-xl">
                  <h2
                    className="font-serif text-[var(--foreground)] leading-snug mb-5"
                    style={{
                      fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)",
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h2>
                  <p className="text-sm leading-[1.9] text-[var(--muted-color)] mb-8">
                    {item.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs tracking-[0.04em] text-[var(--muted-color)] border border-[var(--border)] px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Company card — only at matching years */}
                <div className="lg:pt-1">
                  {company && (
                    <CompanyCard
                      name={company.name}
                      role={company.role}
                      period={company.period}
                      accent={company.accent}
                      url={company.url}
                      description={company.description}
                    />
                  )}
                </div>
              </div>
            );
          })}

          {/* Closing */}
          <div className="border-t border-[var(--border)] py-14 lg:py-20">
            <p
              className="font-serif text-[var(--foreground)] max-w-lg"
              style={{
                fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)",
                fontWeight: 400,
                fontStyle: "italic",
                letterSpacing: "-0.015em",
                lineHeight: 1.4,
              }}
            >
              &ldquo;Still being written.&rdquo;
            </p>
            <p className="mt-5 text-sm leading-[1.85] text-[var(--muted-color)] max-w-sm">
              The next chapter is forming. If you&apos;re building something worth being part of —{" "}
              <a
                href="/contact"
                className="text-[var(--foreground)] border-b border-[var(--border)] hover:border-[var(--muted-color)] transition-colors pb-0.5"
              >
                write to me
              </a>
              .
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
