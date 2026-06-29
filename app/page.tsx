import { HeroSection } from "@/components/sections/HeroSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { BuildingSection } from "@/components/sections/BuildingSection";
import { EzduSection } from "@/components/sections/EzduSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ArchitectureSectionLazy } from "@/components/sections/ArchitectureSectionLazy";
import { BeyondSection } from "@/components/sections/BeyondSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <JourneySection />
      <BuildingSection />
      <EzduSection />
      <PhilosophySection />
      <ProjectsSection />
      <ArchitectureSectionLazy />
      <BeyondSection />
      <ContactSection />
    </>
  );
}
