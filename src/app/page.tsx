import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ResultsSection } from "@/components/results-section";
import { VideoSection } from "@/components/video-section";
import { ConnectSection } from "@/components/connect-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ResultsSection />
        <VideoSection />
        <ConnectSection />
      </main>
    </>
  );
}
