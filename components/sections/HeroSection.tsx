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
      {/* Subtle background radial gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 70% 10%, rgba(99,102,241,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase"
          >
            Software Engineer · Product Builder · System Architect
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mb-8 font-semibold leading-[1.05] tracking-tight text-[var(--foreground)]"
            style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
          >
            I build things
            <br />
            that <GradientText>matter.</GradientText>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="mb-12 max-w-xl text-lg leading-relaxed text-[var(--muted-color)] sm:text-xl"
          >
            Full-stack engineer focused on scalable systems, clean architecture,
            and products that solve real problems. Currently building{" "}
            <a
              href="https://ezdu.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)] underline underline-offset-4 decoration-[var(--border)] hover:decoration-[#6366f1] transition-colors"
            >
              Ezdu
            </a>{" "}
            — rethinking how education works.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] hover:opacity-80 transition-opacity"
            >
              Explore My Work
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
