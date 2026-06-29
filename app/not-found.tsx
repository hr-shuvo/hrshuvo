import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-sm text-[var(--muted-color)]">404</p>
      <h1 className="text-4xl font-semibold text-[var(--foreground)]">
        Page not found.
      </h1>
      <p className="max-w-sm text-[var(--muted-color)]">
        This page doesn&apos;t exist. But the rest of the portfolio does.
      </p>
      <Link
        href="/"
        className="rounded-full bg-[var(--foreground)] px-6 py-2.5 text-sm font-medium text-[var(--background)] hover:opacity-80 transition-opacity"
      >
        Back to home
      </Link>
    </div>
  );
}
