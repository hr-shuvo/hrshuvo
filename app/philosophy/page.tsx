import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philosophy",
  description: "Not principles I recite — patterns I noticed after things went wrong and I had to figure out why.",
};

const principles = [
  {
    name: "Write for the engineer at 2am.",
    body: "The person reading this code during a production incident is usually future me. That's who I write for — not the reviewer, not the interviewer. Naming, structure, comments: aimed at someone tired and under pressure.",
  },
  {
    name: "Ship before it's ready. Then fix what's actually broken.",
    body: "At Ezdu, features I spent weeks refining were replaced after two days of watching real users. The ones I shipped rough taught me things I couldn't have anticipated. Waiting for perfection is guessing in private.",
  },
  {
    name: "Slow software is a product decision.",
    body: "A 400ms render delay isn't a metrics failure — it's a choice about how much you value someone's time. Users don't separate slow from broken. Latency is a product concern.",
  },
  {
    name: "The schema outlives everything else.",
    body: "A bad data model costs six months later, not six hours now. Schema design happens first — before the API, before the UI. That sequence matters.",
  },
  {
    name: "Ownership is the multiplier.",
    body: "When there's no one to escalate to, you stop second-guessing and start deciding. Building Ezdu alone removed the option of blaming someone else. That's clarifying in a way collaborative environments can't replicate.",
  },
  {
    name: "Build for the user who skips everything.",
    body: "Most users will never read a tooltip, an onboarding modal, or an error message. Design for the person who taps past every instruction and expects it to work. If it requires reading, it requires a redesign.",
  },
];

export default function PhilosophyPage() {
  return (
    <div className="pt-14">

      {/* Opening */}
      <div className="mx-auto max-w-7xl px-6 pt-32 sm:px-8 md:pt-40 lg:px-12 lg:pt-48">
        <div className="border-t border-[var(--border)] pt-14 max-w-3xl">
          <p className="mb-6 text-xs tracking-[0.3em] text-[var(--muted-color)] uppercase">
            Convictions
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
            How I think
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--muted-color)" }}>
              about the work.
            </em>
          </h1>
          <p className="mt-7 text-sm leading-[1.85] text-[var(--muted-color)]">
            Not principles I recite — patterns I noticed after things went wrong and I had to
            figure out why.
          </p>
        </div>
      </div>

      {/* Principles — alternating layout with pull-quote style */}
      <div className="mt-20 lg:mt-28">
        {principles.map((p, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={p.name} className="border-t border-[var(--border)]">
              <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div
                  className={`py-14 lg:py-20 grid gap-8 lg:gap-20 lg:items-start ${
                    isEven ? "lg:grid-cols-[55%_1fr]" : "lg:grid-cols-[1fr_55%]"
                  }`}
                >
                  {/* Number */}
                  <div className={`${isEven ? "" : "lg:order-2"}`}>
                    <p
                      className="font-serif text-[var(--surface-alt)] select-none mb-4"
                      style={{ fontSize: "0.7rem", letterSpacing: "0.15em" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2
                      className="font-serif text-[var(--foreground)]"
                      style={{
                        fontSize: "clamp(1.25rem, 2.2vw, 1.9rem)",
                        fontWeight: 500,
                        lineHeight: 1.3,
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {p.name}
                    </h2>
                  </div>

                  <p
                    className={`text-sm leading-[1.9] text-[var(--muted-color)] ${
                      isEven ? "lg:pt-10" : "lg:order-1 lg:pt-10"
                    }`}
                  >
                    {p.body}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="border-t border-[var(--border)]" />
      </div>

      <div className="h-24 lg:h-32" />

    </div>
  );
}
