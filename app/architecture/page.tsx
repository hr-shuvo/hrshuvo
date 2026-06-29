import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture",
  description: "How I design systems — authentication, caching, API design, scalability, and engineering decisions explained through diagrams.",
};

const topics = [
  {
    id: "auth",
    label: "Authentication",
    headline: "Sessions vs. tokens. State vs. stateless.",
    body: "Most auth bugs come from misunderstanding what a token actually is. A JWT is not a session — it's a claim, signed at a point in time. If you don't have a revocation strategy, you're one leaked token away from a silent incident.",
    decisions: [
      "Refresh tokens in HttpOnly cookies — not localStorage.",
      "Short-lived access tokens (15 min) with rotation on every refresh.",
      "Redis tracks active refresh token fingerprints. Revocation is O(1).",
    ],
  },
  {
    id: "caching",
    label: "Caching",
    headline: "Cache the output, not the implementation.",
    body: "The most common caching mistake is caching too early and invalidating too late. Redis for computed results that are expensive to reconstruct. The cache is not the source of truth — the database is.",
    decisions: [
      "Only cache what's been measured as slow.",
      "Write-through for user-owned state. Cache-aside for shared content.",
      "Cache invalidation happens in the same transaction as the write.",
    ],
  },
  {
    id: "api",
    label: "API Design",
    headline: "Design the contract, then the implementation.",
    body: "An API is a commitment. Once another system depends on it, changing the shape is expensive. I treat API design as schema design — the shape of the response is a decision, not an output.",
    decisions: [
      "All errors return the same shape: { code, message, details }.",
      "Resource names are plural nouns. Actions are HTTP methods.",
      "No breaking changes without a new version prefix.",
    ],
  },
  {
    id: "background-jobs",
    label: "Background Jobs",
    headline: "Move it out of the request path.",
    body: "If the user doesn't need to see it happen before the response, it shouldn't block the response. LLM content generation, email dispatch, analytics aggregation — all async. Every job has a status store, a retry policy, and a dead-letter queue.",
    decisions: [
      "Request-response is for reads and writes. Not for side effects.",
      "Every async job is idempotent. Retry at least once.",
      "Failed jobs surface in an internal dashboard before users notice.",
    ],
  },
  {
    id: "database",
    label: "Database Design",
    headline: "The schema is the most expensive decision.",
    body: "Migrations in production cost real engineering time. A schema decision made in week one is still there in month twelve — usually under more load, more relations, and more complexity than expected. Schema design happens first.",
    decisions: [
      "Primary keys are UUIDs. Integers expose enumeration and row counts.",
      "Soft deletes where audit trails matter. Hard deletes everywhere else.",
      "Foreign keys enforced at the database level, not just the application.",
    ],
  },
  {
    id: "scalability",
    label: "Scalability",
    headline: "You can't optimize what you haven't measured.",
    body: "Premature scaling is as wasteful as premature optimization. What I design for from the start: stateless API servers, read replicas before they're needed, and structured logs that make bottlenecks visible before users feel them.",
    decisions: [
      "Stateless services from day one. State lives in Redis or the DB.",
      "Log request latency, not just errors. Percentiles, not averages.",
      "Load test before launch. Not after the first slow day.",
    ],
  },
];

export default function ArchitecturePage() {
  return (
    <div className="pt-14">

      {/* Opening */}
      <div className="mx-auto max-w-7xl px-6 pt-32 sm:px-8 md:pt-40 lg:px-12 lg:pt-48">
        <div className="border-t border-[var(--border)] pt-14">
          <h1
            className="font-serif tracking-tight text-[var(--foreground)]"
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
              fontWeight: 600,
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
            }}
          >
            Architecture.
          </h1>
          <p className="mt-5 max-w-md text-sm leading-[1.85] text-[var(--muted-color)]">
            Not a list of technologies — the decisions, the trade-offs, and the reasoning
            behind how I design systems.
          </p>
        </div>
      </div>

      {/* Topic index — anchor navigation */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-14 flex flex-wrap gap-3">
          {topics.map((topic) => (
            <a
              key={topic.id}
              href={`#${topic.id}`}
              className="text-xs tracking-[0.06em] text-[var(--muted-color)] border border-[var(--border)] px-3 py-1.5 hover:text-[var(--foreground)] hover:border-[var(--muted-color)] transition-colors"
            >
              {topic.label}
            </a>
          ))}
        </div>
      </div>

      {/* Topics — each gets a unique visual treatment */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {topics.map((topic, i) => (
          <div
            key={topic.id}
            id={topic.id}
            className="mt-16 border-t border-[var(--border)] pt-14 scroll-mt-20 lg:mt-20 lg:pt-18"
          >
            {/* Topic header row */}
            <div className="flex items-start justify-between gap-8 mb-10">
              <div>
                <p className="text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase mb-3">
                  {String(i + 1).padStart(2, "0")}&nbsp;&nbsp;{topic.label}
                </p>
                <h2
                  className="font-serif text-[var(--foreground)]"
                  style={{
                    fontSize: "clamp(1.2rem, 2.2vw, 1.8rem)",
                    fontWeight: 500,
                    lineHeight: 1.3,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {topic.headline}
                </h2>
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-[55%_1fr] lg:gap-16">
              {/* Body */}
              <p className="text-sm leading-[1.9] text-[var(--muted-color)]">{topic.body}</p>

              {/* Key decisions */}
              <div>
                <p className="text-xs tracking-[0.2em] text-[var(--muted-color)] uppercase mb-5">
                  Key decisions
                </p>
                <div className="space-y-4">
                  {topic.decisions.map((d, di) => (
                    <div key={di} className="flex gap-4">
                      <span
                        className="font-serif text-[var(--color-accent)] select-none flex-shrink-0 mt-0.5"
                        style={{ fontSize: "0.7rem", fontWeight: 600 }}
                      >
                        {String(di + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-[1.75] text-[var(--foreground)]">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-[var(--border)] mt-20 lg:mt-28" />
      <div className="h-24 lg:h-32" />

    </div>
  );
}
