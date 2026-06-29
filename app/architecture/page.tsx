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
    body: "Most auth bugs come from misunderstanding what a token actually is. A JWT is not a session. It's a claim, signed at a point in time. If you don't have a revocation strategy, you're one leaked token away from a silent incident. I use token rotation with Redis-backed refresh state, so revocation is instant without sacrificing statelessness.",
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
    body: "The most common caching mistake is caching too early and invalidating too late. I use Redis for computed results that are expensive to reconstruct — gamification state, user progress aggregates, content delivery. The cache is not the source of truth; the database is. Every cache entry has an explicit TTL and an explicit invalidation trigger.",
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
    body: "An API is a commitment. Once another system depends on it, changing the shape is expensive. I treat API design as schema design — the shape of the response is a decision, not an output. RESTful resource names, consistent error envelopes, versioning from day one, and documented deprecation cycles.",
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
    body: "If the user doesn't need to see it happen before the response, it shouldn't block the response. LLM content generation, email dispatch, analytics aggregation — all async. The risk is observability: a background job that fails silently is worse than a slow synchronous operation. Every job has a status store, a retry policy, and a dead-letter queue.",
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
    body: "Migrations in production cost real engineering time. A schema decision made in week one is still there in month twelve — usually under more load, more relations, and more complexity than you expected. I design schemas on paper before writing a single line of application code. Normalization first. Denormalization only when query performance demands it, with documentation.",
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
    body: "Premature scaling is as wasteful as premature optimization. The first version of Ezdu ran on a single EC2 instance. It was enough. What I designed for from the start: stateless API servers (so horizontal scaling is configuration), read replicas before they're needed, and structured logs that make bottlenecks visible before users feel them.",
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

      {/* Page opening */}
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
            Not a list of technologies. How I design systems — the decisions, the trade-offs,
            and the reasoning behind each one.
          </p>
        </div>
      </div>

      {/* Topic index */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-16 flex flex-wrap gap-3">
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

      {/* Topics */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {topics.map((topic) => (
          <div
            key={topic.id}
            id={topic.id}
            className="mt-20 border-t border-[var(--border)] pt-16 scroll-mt-20 lg:mt-24"
          >
            <p className="mb-6 text-xs tracking-[0.25em] text-[var(--muted-color)] uppercase">
              {topic.label}
            </p>

            <div className="grid gap-12 lg:grid-cols-[55%_1fr] lg:gap-20">
              <div>
                <h2
                  className="font-serif text-[var(--foreground)] mb-6"
                  style={{
                    fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                    fontWeight: 500,
                    lineHeight: 1.3,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {topic.headline}
                </h2>
                <p className="text-sm leading-[1.9] text-[var(--muted-color)]">
                  {topic.body}
                </p>
              </div>

              <div className="space-y-4 lg:pt-2">
                <p className="text-xs tracking-[0.2em] text-[var(--muted-color)] uppercase mb-5">
                  Key decisions
                </p>
                {topic.decisions.map((d, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="font-serif text-[var(--border)] select-none mt-0.5" style={{ fontSize: "0.7rem" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-[1.75] text-[var(--foreground)]">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-[var(--border)] mt-24 lg:mt-32" />
      <div className="h-24 lg:h-32" />

    </div>
  );
}
