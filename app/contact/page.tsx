import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Building something early-stage or need someone who moves between product and engineering? Write to me.",
};

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

export default function ContactPage() {
  return (
    <div className="pt-14">
      <div className="mx-auto max-w-7xl px-6 pb-28 pt-32 sm:px-8 md:pb-36 md:pt-40 lg:px-12 lg:pb-44 lg:pt-48">
        <div className="border-t border-[var(--border)] pt-14">

          <h1
            className="font-serif tracking-tight text-[var(--foreground)]"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 7rem)",
              fontWeight: 600,
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
              maxWidth: "18ch",
            }}
          >
            Let&apos;s build
            <br />
            something
            <br />
            <em
              className="font-serif"
              style={{ fontStyle: "italic", fontWeight: 400, color: "var(--muted-color)" }}
            >
              that matters.
            </em>
          </h1>

          <div className="mt-16 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-sm text-sm leading-[1.9] text-[var(--muted-color)]">
              If you&apos;re building something early-stage, working through a
              hard technical problem, or need someone who can move between
              product and engineering without losing context — write to me.
              Based in Dhaka. Available remotely.
            </p>

            <div className="flex flex-col gap-5">
              <a
                href="mailto:hrshuvo207@gmail.com"
                className="font-serif text-[var(--foreground)] hover:text-[var(--color-accent)] transition-colors duration-300"
                style={{
                  fontSize: "clamp(1rem, 1.8vw, 1.4rem)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  letterSpacing: "-0.01em",
                }}
              >
                hrshuvo207@gmail.com
              </a>

              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/hr-shuvo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs tracking-[0.08em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors duration-300"
                >
                  <GitHubIcon size={13} />
                  GitHub
                </a>
                <span className="text-[var(--border)]">·</span>
                <a
                  href="https://linkedin.com/in/hrshuvo9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs tracking-[0.08em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors duration-300"
                >
                  <LinkedInIcon size={13} />
                  LinkedIn
                </a>
                <span className="text-[var(--border)]">·</span>
                <span className="text-xs tracking-[0.08em] text-[var(--muted-color)]">Dhaka, BD</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
