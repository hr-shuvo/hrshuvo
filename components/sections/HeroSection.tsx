"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/components/primitives/GradientText";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-screen flex-col overflow-hidden pt-16"
    >
      {/* Warm background radial */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 80% 20%, rgba(245,158,11,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Large background number — typographic texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 select-none leading-none text-[var(--border)] opacity-40"
        style={{
          fontSize: "clamp(18rem, 35vw, 40rem)",
          fontWeight: 900,
          lineHeight: 0.85,
          letterSpacing: "-0.05em",
          right: "-2vw",
          top: "8vh",
        }}
      >
        01
      </div>

      {/* Main content — left-anchored, pushed low */}
      <div className="relative mt-auto flex-1 flex items-end pb-24 md:pb-32">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-sm font-medium text-[var(--muted-color)]"
          >
            Full-stack engineer. Solo founder. Dhaka.
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="mb-10 font-extrabold leading-[0.95] tracking-tight text-[var(--foreground)]"
            style={{ fontSize: "clamp(3.5rem, 8vw, 7.5rem)", fontWeight: 800 }}
          >
            I left a job
            <br />
            to build{" "}
            <GradientText>Ezdu.</GradientText>
          </motion.h1>

          {/* Bottom row: subtext + CTAs side by side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-sm text-base leading-relaxed text-[var(--muted-color)]">
              Gamified learning platform, mobile-first, AI-powered, built by one
              person. 500+ problems. Two live products. Two and a half years in.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#journey"
                className="inline-flex items-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] hover:opacity-80 transition-opacity"
              >
                See the journey
              </a>
              <a
                href="#ezdu"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface-alt)] transition-colors"
              >
                See Ezdu
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pinned bottom stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative border-t border-[var(--border)]"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-[var(--border)] px-6 sm:px-8 lg:px-12">
          {[
            { value: "2", label: "Live products" },
            { value: "500+", label: "Problems solved" },
            { value: "2.5yr", label: "Experience" },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-5 first:pl-0 last:pr-0 sm:px-8">
              <p
                className="font-extrabold leading-none text-[var(--foreground)]"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-[var(--muted-color)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
