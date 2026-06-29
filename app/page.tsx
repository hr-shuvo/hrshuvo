import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen pt-14 flex flex-col">
      <section className="flex-1 flex flex-col justify-center relative overflow-hidden">

        {/* Subtle radial accent */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(194,136,74,0.055) 0%, transparent 70%)",
          }}
        />

        {/* Decorative large letterform — pure CSS, no image */}
        <div
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-serif text-[var(--surface-alt)] opacity-40 dark:opacity-20 leading-none"
          aria-hidden="true"
          style={{
            fontSize: "clamp(18rem, 40vw, 36rem)",
            fontWeight: 700,
            letterSpacing: "-0.06em",
            lineHeight: 1,
            transform: "translateY(-50%) translateX(18%)",
          }}
        >
          S
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 py-20">

          {/* Location + status */}
          <p className="mb-14 text-xs tracking-[0.22em] text-[var(--muted-color)] uppercase">
            Dhaka, Bangladesh&nbsp;&nbsp;·&nbsp;&nbsp;
            <span className="text-[var(--color-accent)]">Currently building Ezdu</span>
          </p>

          {/* Name */}
          <h1
            className="font-serif text-[var(--foreground)]"
            style={{
              fontSize: "clamp(4rem, 10vw, 10rem)",
              fontWeight: 600,
              lineHeight: 0.95,
              letterSpacing: "-0.035em",
            }}
          >
            Shuvo
          </h1>

          {/* Title */}
          <p
            className="mt-6 font-serif text-[var(--muted-color)]"
            style={{
              fontSize: "clamp(1.1rem, 2.2vw, 1.8rem)",
              fontWeight: 400,
              fontStyle: "italic",
              letterSpacing: "-0.01em",
            }}
          >
            Software engineer. Product builder.
          </p>

          {/* Tagline */}
          <p
            className="mt-8 max-w-xs text-[var(--muted-color)]"
            style={{ fontSize: "clamp(0.82rem, 1.2vw, 0.92rem)", lineHeight: 1.8 }}
          >
            I left a stable job to find out if I could build something people need.
            Two products in production. Still finding out.
          </p>

          {/* Navigation hints */}
          <nav className="mt-14 flex flex-wrap gap-x-8 gap-y-3" aria-label="Explore">
            {[
              { label: "About", href: "/about" },
              { label: "Projects", href: "/projects" },
              { label: "Experience", href: "/experience" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.1em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors duration-200 border-b border-transparent hover:border-[var(--muted-color)] pb-0.5"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Minimal footer line */}
      <div className="mx-auto w-full max-w-7xl px-6 pb-8 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between">
          <p
            className="font-serif text-[var(--border)]"
            style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}
          >
            2026
          </p>
          <p
            className="font-serif italic text-[var(--border)]"
            style={{ fontSize: "0.7rem", letterSpacing: "0.05em" }}
          >
            hrshuvo.dev
          </p>
        </div>
      </div>
    </div>
  );
}
