import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { GalleryStrip } from "@/components/sections/GalleryStrip";
import { GuideSection } from "@/components/sections/GuideSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { TravelSection } from "@/components/sections/TravelSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsStrip />
        <AboutSection />
        <DestinationsSection />
        <GuideSection />
        <GalleryStrip />
        <ExperiencesSection />
        <TravelSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
