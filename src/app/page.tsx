import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ResultsSection } from "@/components/results-section";
import { ProjectsSection } from "@/components/projects-section";
import { ConnectSection } from "@/components/connect-section";
import { ResourceFooter } from "@/components/resource-footer";
import { PersonJsonLd } from "@/components/json-ld";

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ResultsSection />
        <ProjectsSection />
        <ConnectSection />
      </main>
      <ResourceFooter currentSlug="" />
    </>
  );
}
