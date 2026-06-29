"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/primitives/ThemeToggle";

const links = [
  { label: "Journey",      href: "/journey"      },
  { label: "Projects",     href: "/projects"     },
  { label: "Experience",   href: "/experience"   },
  { label: "Education",    href: "/education"    },
  { label: "Architecture", href: "/architecture" },
  { label: "Philosophy",   href: "/philosophy"   },
  { label: "Contact",      href: "/contact"      },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 bg-[var(--background)]/90 backdrop-blur-md"
        aria-label="Site navigation"
        style={{ borderBottom: "1px solid color-mix(in srgb, var(--border) 50%, transparent)" }}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-serif text-base font-medium tracking-tight text-[var(--foreground)] hover:text-[var(--muted-color)] transition-colors duration-200"
            aria-label="Shuvo — home"
          >
            Shuvo
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-xs tracking-[0.08em] transition-colors duration-200 py-1"
                  style={{ color: active ? "var(--foreground)" : "var(--muted-color)" }}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{ background: "var(--color-accent)" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1 text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className="block w-5 h-px bg-current transition-transform duration-200"
                style={{ transform: open ? "translateY(4px) rotate(45deg)" : "none" }}
              />
              <span
                className="block w-5 h-px bg-current transition-opacity duration-200"
                style={{ opacity: open ? 0 : 1 }}
              />
              <span
                className="block w-5 h-px bg-current transition-transform duration-200"
                style={{ transform: open ? "translateY(-4px) rotate(-45deg)" : "none" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-14 bg-[var(--background)] md:hidden"
          aria-label="Mobile navigation"
        >
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
