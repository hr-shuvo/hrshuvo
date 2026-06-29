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
            "radial-gradient(ellipse 70% 40% at 50% -10%, rgba(194,136,74,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Content — vertically centered with top weight */}
      <div className="relative flex flex-1 flex-col justify-center">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">

          {/* Location — small, quiet */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-20 text-xs tracking-[0.22em] text-[var(--muted-color)] uppercase"
          >
            Dhaka, Bangladesh
          </motion.p>

          {/* Headline — dominant, unhurried */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="font-serif tracking-tight text-[var(--foreground)]"
            style={{
              fontSize: "clamp(3.5rem, 8.5vw, 8.5rem)",
              fontWeight: 600,
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
            }}
          >
            Software engineer.
            <br />
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--muted-color)",
                fontSize: "0.88em",
              }}
            >
              Product builder.
            </em>
          </motion.h1>

          {/* Subtext — below the fold of the headline, narrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
            className="mt-14 max-w-md leading-[1.85] text-[var(--muted-color)]"
            style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)" }}
          >
            I left a stable job to build Ezdu — a gamified learning platform
            — from scratch. No co-founder. No funding. Two products in production.
            This is the account of how that happened.
          </motion.p>

          {/* Single quiet scroll invitation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.75 }}
            className="mt-16"
          >
            <a
              href="#journey"
              className="text-sm tracking-[0.08em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors duration-300"
            >
              Read the story ↓
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom — year and name only, like a book's title page */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="mx-auto w-full max-w-7xl px-6 pb-10 sm:px-8 lg:px-12"
      >
        <div className="flex items-end justify-between">
          <p
            className="font-serif text-[var(--border)]"
            style={{ fontSize: "clamp(0.65rem, 1vw, 0.75rem)", letterSpacing: "0.1em" }}
          >
            2026
          </p>
          <p
            className="font-serif italic text-[var(--border)]"
            style={{ fontSize: "clamp(0.65rem, 1vw, 0.75rem)", letterSpacing: "0.05em" }}
          >
            Shuvo
          </p>
        </div>
      </motion.div>
    </section>
  );
}
