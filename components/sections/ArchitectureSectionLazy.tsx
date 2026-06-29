"use client";

import dynamic from "next/dynamic";

const ArchitectureSection = dynamic(
  () =>
    import("@/components/sections/ArchitectureSection").then(
      (m) => m.ArchitectureSection
    ),
  { ssr: false }
);

export function ArchitectureSectionLazy() {
  return <ArchitectureSection />;
}
