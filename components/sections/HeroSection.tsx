"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GradientText } from "@/components/primitives/GradientText";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      {/* Warm background radial */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 70% 10%, rgba(245,158,11,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 32 }}
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
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mb-8 font-extrabold leading-[1.05] tracking-tight text-[var(--foreground)]"
            style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)", fontWeight: 800 }}
          >
            I left a job
            <br />
            to build <GradientText>Ezdu.</GradientText>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="mb-12 max-w-xl text-lg leading-relaxed text-[var(--muted-color)] sm:text-xl"
          >
            Ezdu is a gamified learning platform for academic education — mobile-first, AI-powered,
            built by one person. Before that: OTA systems at A4Aero, school software at OnnoRokom,
            500+ competitive programming problems. Two and a half years of professional experience.
            One product that&apos;s live.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
            className="flex flex-wrap items-center gap-4"
          >
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
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--muted-color)]"
        aria-hidden="true"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
