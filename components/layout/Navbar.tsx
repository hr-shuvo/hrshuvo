"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "ABOUT",      alt: "BIO",    href: "/about"      },
  { label: "EXPERTISE",  alt: "SKILLS", href: "/expertise"  },
  { label: "EXPERIENCE", alt: "JOBS",   href: "/experience" },
  { label: "PROJECTS",   alt: "WORK",   href: "/projects"   },
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

          {/* Desktop nav — right aligned */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 text-sm tracking-[0.08em] py-1 group transition-opacity duration-200 hover:opacity-100"
                  style={{ color: "var(--foreground)", opacity: active ? 1 : 0.5, fontWeight: active ? 600 : 400 }}
                >
                  <span
                    className={`transition-opacity duration-200 ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  >
                    [
                  </span>
                  <span
                    className="inline-block overflow-hidden align-middle"
                    style={{ height: "1em" }}
                  >
                    <span
                      className={`flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${active ? "-translate-y-1/2" : "group-hover:-translate-y-1/2"}`}
                      style={{ height: "2em" }}
                    >
                      <span className="block leading-none text-center" style={{ height: "1em" }}>{link.label}</span>
                      <span className="block leading-none text-center" style={{ height: "1em" }}>{link.alt}</span>
                    </span>
                  </span>
                  <span
                    className={`transition-opacity duration-200 ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  >
                    ]
                  </span>
                </Link>
              );
            })}
          </nav>

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
          </nav>
        </div>
      )}
    </>
  );
}
