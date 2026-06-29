import { HeroSection } from "@/components/sections/HeroSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { EzduSection } from "@/components/sections/EzduSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <JourneySection />
      <EzduSection />
      <ProjectsSection />
      <PhilosophySection />
      <ContactSection />
    </>
  );
}
