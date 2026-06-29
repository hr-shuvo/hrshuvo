import Link from "next/link";
import { ThemeToggle } from "@/components/primitives/ThemeToggle";

const links = [
  { label: "Story",    href: "#journey"    },
  { label: "Ezdu",     href: "#ezdu"       },
  { label: "Projects", href: "#projects"   },
  { label: "Thinking", href: "#philosophy" },
  { label: "Contact",  href: "#contact"    },
];

export function Navbar() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-50 bg-[var(--background)]/90 backdrop-blur-md"
      aria-label="Site navigation"
      style={{ borderBottom: "1px solid color-mix(in srgb, var(--border) 50%, transparent)" }}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-serif text-base font-medium tracking-tight text-[var(--foreground)] hover:text-[var(--foreground)]/70 transition-colors"
          aria-label="Shuvo — home"
        >
          Shuvo
        </Link>

        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.08em] text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
