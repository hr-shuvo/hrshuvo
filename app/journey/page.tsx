import type { Metadata } from "next";
import { journeyItems } from "@/lib/data/journey";

export const metadata: Metadata = {
  title: "Journey",
  description: "From the first C program to two live products. The moments worth writing down.",
};

export default function JourneyPage() {
  return (
    <div className="pt-14">

      {/* Chapter opening */}
      <div className="mx-auto max-w-3xl px-6 pb-4 pt-32 text-center sm:px-8 md:pt-40 lg:px-12">
        <p className="mb-8 text-xs tracking-[0.3em] text-[var(--muted-color)] uppercase">
          How I got here
        </p>
        <h1
          className="font-serif tracking-tight text-[var(--foreground)]"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
          }}
        >
          Not a résumé.
          <br />
          <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--muted-color)" }}>
            A sequence of moments.
          </em>
        </h1>
        <p className="mx-auto mt-8 max-w-sm text-sm leading-[1.85] text-[var(--muted-color)]">
          From the first C program to two live products. The moments worth writing down.
        </p>
      </div>

      {/* Timeline entries */}
      <div className="mt-24">
        {journeyItems.map((item) => (
          <div
            key={item.year}
            className="border-t border-[var(--border)]"
          >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
              <div className="py-12 lg:py-20">

                <p
                  className="font-serif mb-6 font-medium text-[var(--surface-alt)] select-none"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 5rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {item.year}
                </p>

                <div className="grid gap-10 lg:grid-cols-[55%_1fr] lg:gap-20">
                  <div>
                    <h2
                      className="font-serif mb-5 text-[var(--foreground)] leading-snug"
                      style={{
                        fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                        fontWeight: 500,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </h2>
                    <p className="text-sm leading-[1.9] text-[var(--muted-color)]">
                      {item.body}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 content-start lg:pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs tracking-[0.04em] text-[var(--muted-color)] border border-[var(--border)] px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="border-t border-[var(--border)]" />
      </div>

      {/* Closing — forward-looking */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="max-w-2xl">
          <p
            className="font-serif text-[var(--foreground)]"
            style={{
              fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)",
              fontWeight: 400,
              fontStyle: "italic",
              letterSpacing: "-0.015em",
              lineHeight: 1.4,
            }}
          >
            &ldquo;Still being written.&rdquo;
          </p>
          <p className="mt-6 text-sm leading-[1.85] text-[var(--muted-color)]">
            The next chapter is forming. If you&apos;re building something worth being part of — write to me.
          </p>
        </div>
      </div>

    </div>
  );
}
