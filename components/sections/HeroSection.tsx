"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-screen flex-col overflow-hidden pt-14"
    >
      {/* Very faint warm vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(194,136,74,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Main content — anchored to bottom */}
      <div className="relative flex flex-1 flex-col justify-end pb-20 md:pb-28">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">

          {/* Masthead rule */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 flex items-center gap-6"
          >
            <div className="h-px flex-1 bg-[var(--border)]" />
            <span className="text-xs tracking-[0.2em] text-[var(--muted-color)] uppercase">
              Dhaka, Bangladesh
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-serif mb-10 tracking-tight text-[var(--foreground)]"
            style={{
              fontSize: "clamp(3.2rem, 7.5vw, 7rem)",
              fontWeight: 600,
              lineHeight: 1.06,
              letterSpacing: "-0.02em",
            }}
          >
            I left a job
            <br />
            <em style={{ fontStyle: "italic", color: "var(--muted-color)" }}>to build</em>{" "}
            Ezdu.
          </motion.h1>

          {/* Subtext + links */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
          >
            <p
              className="max-w-sm leading-relaxed text-[var(--muted-color)]"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}
            >
              Two products. No co-founder. No funding.
              Still running. This is how.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#journey"
                className="text-sm tracking-[0.06em] text-[var(--foreground)] border-b border-[var(--foreground)] pb-0.5 hover:text-[var(--muted-color)] hover:border-[var(--muted-color)] transition-colors"
              >
                Read the story
              </a>
              <span className="text-[var(--border)]">·</span>
              <a
                href="#ezdu"
                className="text-sm tracking-[0.06em] text-[var(--muted-color)] border-b border-[var(--border)] pb-0.5 hover:text-[var(--foreground)] hover:border-[var(--foreground)] transition-colors"
              >
                See Ezdu
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar — product facts, not metrics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="border-t border-[var(--border)]"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-[var(--border)] px-6 sm:px-8 lg:px-12">
          {[
            { value: "Ezdu", label: "gamified learning platform" },
            { value: "Better IELTS", label: "exam preparation" },
            { value: "One engineer", label: "concept to production" },
          ].map((item) => (
            <div key={item.label} className="px-4 py-6 first:pl-0 last:pr-0 sm:px-8">
              <p
                className="font-serif font-medium leading-none text-[var(--foreground)]"
                style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", letterSpacing: "-0.01em" }}
              >
                {item.value}
              </p>
              <p className="mt-1.5 text-xs tracking-[0.08em] text-[var(--muted-color)]">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
