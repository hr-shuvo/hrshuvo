"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section id="contact" aria-label="Contact" className="relative overflow-hidden">
      {/* Warm glow behind the text */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(245,158,11,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
            What&apos;s next
          </p>

          {/* Massive headline — no container constraint */}
          <h2
            className="mb-12 font-extrabold leading-[0.9] tracking-tight text-[var(--foreground)]"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            If you&apos;re working
            <br />
            on something real,
            <br />
            <span className="text-[var(--muted-color)]">I want to hear.</span>
          </h2>

          {/* Bottom row: body + contact */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-md text-lg leading-relaxed text-[var(--muted-color)]">
              Open to founding teams, hard engineering problems, and products that
              don&apos;t exist yet. Based in Dhaka, working remotely.
            </p>

            <div className="flex flex-col gap-5">
              <a
                href="mailto:hrshuvo207@gmail.com"
                className="inline-flex items-center gap-2.5 rounded-full bg-[var(--foreground)] px-7 py-3.5 text-base font-medium text-[var(--background)] hover:opacity-80 transition-opacity self-start"
              >
                <Mail size={17} />
                hrshuvo207@gmail.com
              </a>

              <div className="flex items-center gap-6 pl-1">
                <a
                  href="https://github.com/hr-shuvo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors"
                >
                  <GitHubIcon size={16} />
                  hr-shuvo
                </a>
                <a
                  href="https://linkedin.com/in/hrshuvo9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors"
                >
                  <LinkedInIcon size={16} />
                  hrshuvo9
                </a>
                <span className="text-sm text-[var(--muted-color)]">
                  Dhaka, BD
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
