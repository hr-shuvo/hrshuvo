export default function Loading() {
  return (
    <div className="pt-14 min-h-screen flex items-start">
      <div className="mx-auto max-w-7xl px-6 pt-32 sm:px-8 lg:px-12 w-full">
        <div className="border-t border-[var(--border)] pt-14 space-y-8 animate-pulse">
          <div className="h-4 w-24 bg-[var(--surface-alt)] rounded" />
          <div className="h-16 w-3/4 bg-[var(--surface-alt)] rounded" />
          <div className="h-4 w-1/2 bg-[var(--surface-alt)] rounded" />
        </div>
      </div>
    </div>
  );
}
