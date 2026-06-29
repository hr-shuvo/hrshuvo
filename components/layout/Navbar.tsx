"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "About",      href: "/about"      },
  { label: "Projects",   href: "/projects"   },
  { label: "Experience", href: "/experience" },
  { label: "Expertise",  href: "/expertise"  },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 bg-[var(--background)]/95 backdrop-blur-md"
        aria-label="Site navigation"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-serif text-base font-medium tracking-tight text-[var(--foreground)] hover:text-[var(--color-accent)] transition-colors duration-200"
            aria-label="Shuvo — home"
          >
            Shuvo
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-xs tracking-[0.1em] transition-colors duration-200 py-1 group"
                  style={{ color: active ? "var(--foreground)" : "var(--muted-color)" }}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 h-px transition-all duration-300"
                    style={{
                      background: "var(--color-accent)",
                      width: active ? "100%" : "0%",
                    }}
                  />
                  {!active && (
                    <span className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300" style={{ background: "var(--border)" }} />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            {/* Desktop: Get in touch CTA */}
            <a
              href="mailto:hrshuvo207@gmail.com"
              className="hidden md:inline-flex items-center text-xs tracking-[0.1em] text-[var(--muted-color)] hover:text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--foreground)] px-3.5 py-1.5 transition-all duration-200"
            >
              Get in touch
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1 text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="block w-5 h-px bg-current transition-transform duration-200"
                style={{ transform: open ? "translateY(4px) rotate(45deg)" : "none" }} />
              <span className="block w-5 h-px bg-current transition-opacity duration-200"
                style={{ opacity: open ? 0 : 1 }} />
              <span className="block w-5 h-px bg-current transition-transform duration-200"
                style={{ transform: open ? "translateY(-4px) rotate(-45deg)" : "none" }} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col pt-14 bg-[var(--background)] md:hidden">
          <nav className="flex flex-col px-6 py-10 gap-1">
            {links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-4 border-b border-[var(--border)] text-sm tracking-[0.06em] transition-colors duration-200"
                  style={{ color: active ? "var(--foreground)" : "var(--muted-color)" }}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="mailto:hrshuvo207@gmail.com"
              onClick={() => setOpen(false)}
              className="mt-8 text-sm tracking-[0.06em] text-[var(--color-accent)]"
            >
              hrshuvo207@gmail.com
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
