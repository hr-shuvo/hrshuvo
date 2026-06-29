"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { AnimatedSection } from "@/components/primitives/AnimatedSection";

const diagrams = [
  {
    id: "api",
    label: "Ezdu Architecture",
    description: "Mobile-first architecture — the React Native app is the primary client. Web is a companion surface. Both share the same .NET Core API.",
    svg: (
      <svg viewBox="0 0 620 380" className="w-full h-auto" aria-label="Ezdu system architecture diagram">
        <defs>
          <marker id="arr1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--border)" />
          </marker>
        </defs>

        {/* ── Clients row ── */}

        {/* Mobile App — primary, accent border */}
        <rect x="80" y="14" width="160" height="52" rx="10" fill="var(--surface-alt)" stroke="#6366f1" strokeWidth="2" />
        <text x="160" y="36" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="system-ui, sans-serif">Mobile App</text>
        <text x="160" y="52" textAnchor="middle" fontSize="10" fill="#6366f1" fontFamily="system-ui, sans-serif">React Native · Primary</text>

        {/* Web App — secondary */}
        <rect x="380" y="14" width="160" height="52" rx="10" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
        <text x="460" y="36" textAnchor="middle" fontSize="12" fill="var(--foreground)" fontFamily="system-ui, sans-serif">Web App</text>
        <text x="460" y="52" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui, sans-serif">Next.js · Companion</text>

        {/* Arrows from clients down to API */}
        <line x1="160" y1="66" x2="210" y2="126" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arr1)" />
        <line x1="460" y1="66" x2="410" y2="126" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr1)" />

        {/* ── API layer ── */}
        <rect x="160" y="128" width="300" height="52" rx="10" fill="var(--surface-alt)" stroke="#6366f1" strokeWidth="2" />
        <text x="310" y="150" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="system-ui, sans-serif">.NET Core Web API</text>
        <text x="310" y="166" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui, sans-serif">REST · Auth · Business Logic · LLM Pipeline</text>

        {/* ── LLM service ── */}
        <rect x="20" y="128" width="120" height="52" rx="10" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
        <text x="80" y="150" textAnchor="middle" fontSize="12" fill="var(--foreground)" fontFamily="system-ui, sans-serif">LLM</text>
        <text x="80" y="166" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui, sans-serif">AI Content</text>
        <line x1="140" y1="154" x2="160" y2="154" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr1)" />

        {/* ── Push Notifications ── */}
        <rect x="480" y="128" width="120" height="52" rx="10" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
        <text x="540" y="150" textAnchor="middle" fontSize="11" fill="var(--foreground)" fontFamily="system-ui, sans-serif">Push Notifs</text>
        <text x="540" y="166" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui, sans-serif">FCM / APNs</text>
        <line x1="460" y1="154" x2="480" y2="154" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr1)" />

        {/* Arrows from API down to data stores */}
        <line x1="240" y1="180" x2="130" y2="256" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr1)" />
        <line x1="310" y1="180" x2="310" y2="256" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr1)" />
        <line x1="380" y1="180" x2="490" y2="256" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr1)" />

        {/* ── Data stores ── */}
        <rect x="40" y="258" width="160" height="48" rx="10" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
        <text x="120" y="278" textAnchor="middle" fontSize="12" fill="var(--foreground)" fontFamily="system-ui, sans-serif">MySQL</text>
        <text x="120" y="294" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui, sans-serif">Primary Database</text>

        <rect x="230" y="258" width="160" height="48" rx="10" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
        <text x="310" y="278" textAnchor="middle" fontSize="12" fill="var(--foreground)" fontFamily="system-ui, sans-serif">Redis</text>
        <text x="310" y="294" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui, sans-serif">Cache · Sessions</text>

        <rect x="420" y="258" width="160" height="48" rx="10" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
        <text x="500" y="278" textAnchor="middle" fontSize="12" fill="var(--foreground)" fontFamily="system-ui, sans-serif">AWS S3</text>
        <text x="500" y="294" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui, sans-serif">Content · Media</text>

        {/* Caption */}
        <text x="310" y="348" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui, sans-serif">
          Mobile-first · Shared API · AI-powered content pipeline
        </text>
      </svg>
    ),
  },
  {
    id: "auth",
    label: "Auth Flow",
    description: "JWT-based authentication with refresh token rotation.",
    svg: (
      <svg viewBox="0 0 560 340" className="w-full h-auto" aria-label="Auth flow diagram">
        <defs>
          <marker id="arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--border)" />
          </marker>
        </defs>
        {/* User */}
        <rect x="20" y="140" width="120" height="44" rx="8" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
        <text x="80" y="160" textAnchor="middle" fontSize="12" fill="var(--foreground)" fontFamily="system-ui, sans-serif">User</text>
        <text x="80" y="176" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui, sans-serif">Login Request</text>
        {/* Arrow right */}
        <line x1="140" y1="162" x2="196" y2="162" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr2)" />
        {/* Auth Service */}
        <rect x="198" y="140" width="164" height="44" rx="8" fill="var(--surface-alt)" stroke="#6366f1" strokeWidth="1.5" />
        <text x="280" y="160" textAnchor="middle" fontSize="12" fill="var(--foreground)" fontFamily="system-ui, sans-serif">Auth Service</text>
        <text x="280" y="176" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui, sans-serif">Validate · Sign JWT</text>
        {/* Arrow to DB */}
        <line x1="280" y1="140" x2="280" y2="96" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr2)" />
        {/* User DB */}
        <rect x="200" y="52" width="160" height="44" rx="8" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
        <text x="280" y="72" textAnchor="middle" fontSize="12" fill="var(--foreground)" fontFamily="system-ui, sans-serif">MySQL</text>
        <text x="280" y="88" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui, sans-serif">User Records</text>
        {/* Arrow right from auth */}
        <line x1="362" y1="162" x2="418" y2="162" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr2)" />
        {/* JWT Token */}
        <rect x="420" y="140" width="120" height="44" rx="8" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
        <text x="480" y="160" textAnchor="middle" fontSize="12" fill="var(--foreground)" fontFamily="system-ui, sans-serif">JWT Token</text>
        <text x="480" y="176" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui, sans-serif">Access + Refresh</text>
        {/* Arrow down to protected API */}
        <line x1="480" y1="184" x2="480" y2="228" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr2)" />
        <rect x="360" y="230" width="240" height="44" rx="8" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
        <text x="480" y="250" textAnchor="middle" fontSize="12" fill="var(--foreground)" fontFamily="system-ui, sans-serif">Protected API Routes</text>
        <text x="480" y="266" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui, sans-serif">Bearer token validation</text>
        <text x="280" y="300" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui, sans-serif">
          JWT Authentication with Refresh Token Rotation
        </text>
      </svg>
    ),
  },
  {
    id: "realtime",
    label: "Real-time",
    description: "WebSocket / SignalR event-driven communication for live features.",
    svg: (
      <svg viewBox="0 0 560 340" className="w-full h-auto" aria-label="Real-time architecture diagram">
        <defs>
          <marker id="arr3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--border)" />
          </marker>
        </defs>
        {/* Client A */}
        <rect x="20" y="60" width="120" height="44" rx="8" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
        <text x="80" y="80" textAnchor="middle" fontSize="12" fill="var(--foreground)" fontFamily="system-ui, sans-serif">Client A</text>
        <text x="80" y="96" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui, sans-serif">Browser</text>
        {/* Client B */}
        <rect x="20" y="220" width="120" height="44" rx="8" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
        <text x="80" y="240" textAnchor="middle" fontSize="12" fill="var(--foreground)" fontFamily="system-ui, sans-serif">Client B</text>
        <text x="80" y="256" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui, sans-serif">Browser</text>
        {/* Arrows to hub */}
        <line x1="140" y1="82" x2="196" y2="148" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr3)" />
        <line x1="140" y1="242" x2="196" y2="186" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr3)" />
        {/* SignalR Hub */}
        <rect x="198" y="140" width="164" height="44" rx="8" fill="var(--surface-alt)" stroke="#6366f1" strokeWidth="1.5" />
        <text x="280" y="160" textAnchor="middle" fontSize="12" fill="var(--foreground)" fontFamily="system-ui, sans-serif">SignalR Hub</text>
        <text x="280" y="176" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui, sans-serif">WebSocket · Events</text>
        {/* Arrows to services */}
        <line x1="362" y1="155" x2="418" y2="96" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr3)" />
        <line x1="362" y1="169" x2="418" y2="228" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arr3)" />
        {/* Event Bus */}
        <rect x="420" y="52" width="120" height="44" rx="8" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
        <text x="480" y="72" textAnchor="middle" fontSize="12" fill="var(--foreground)" fontFamily="system-ui, sans-serif">Event Bus</text>
        <text x="480" y="88" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui, sans-serif">Pub / Sub</text>
        {/* DB */}
        <rect x="420" y="212" width="120" height="44" rx="8" fill="var(--surface-alt)" stroke="var(--border)" strokeWidth="1" />
        <text x="480" y="232" textAnchor="middle" fontSize="12" fill="var(--foreground)" fontFamily="system-ui, sans-serif">MySQL</text>
        <text x="480" y="248" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui, sans-serif">Persistence</text>
        <text x="280" y="300" textAnchor="middle" fontSize="10" fill="var(--muted-color)" fontFamily="system-ui, sans-serif">
          SignalR / WebSocket Event-Driven Architecture
        </text>
      </svg>
    ),
  },
];

export function ArchitectureSection() {
  const [active, setActive] = useState(diagrams[0].id);
  const current = diagrams.find((d) => d.id === active)!;

  return (
    <Section
      id="architecture"
      aria-label="Architecture Showcase"
      className="bg-[var(--surface-alt)]"
    >
      <Container>
        <AnimatedSection>
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--muted-color)] uppercase">
            System Design
          </p>
          <h2
            className="mb-6 font-semibold tracking-tight text-[var(--foreground)]"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Architecture showcase.
          </h2>
          <p className="mb-12 max-w-xl text-lg leading-relaxed text-[var(--muted-color)]">
            Visual diagrams of the systems I&apos;ve designed. Every line is a decision.
          </p>
        </AnimatedSection>

        {/* Tab bar */}
        <div className="mb-8 flex flex-wrap gap-2">
          {diagrams.map((d) => (
            <button
              key={d.id}
              onClick={() => setActive(d.id)}
              className="rounded-full px-4 py-2 text-sm font-medium transition-colors"
              style={{
                background: active === d.id ? "var(--foreground)" : "var(--surface)",
                color: active === d.id ? "var(--background)" : "var(--muted-color)",
                border: "1px solid var(--border)",
              }}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Diagram */}
        <AnimatedSection>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-10">
            <p className="mb-6 text-sm text-[var(--muted-color)]">{current.description}</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {current.svg}
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
