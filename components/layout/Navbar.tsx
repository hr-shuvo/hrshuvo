import Link from "next/link";
import { ThemeToggle } from "@/components/primitives/ThemeToggle";

const links = [
  { label: "Journey", href: "#journey" },
  { label: "Ezdu", href: "#ezdu" },
  { label: "Projects", href: "#projects" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl"
      aria-label="Site navigation"
      style={{ borderColor: "color-mix(in srgb, var(--border) 40%, transparent)" }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-[var(--foreground)] hover:text-[var(--foreground)]/80 transition-colors"
          aria-label="Shuvo — home"
        >
          Shuvo
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--muted-color)] hover:text-[var(--foreground)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full bg-[var(--foreground)] px-4 py-1.5 text-sm font-medium text-[var(--background)] hover:opacity-80 transition-opacity"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </header>
  );
}
