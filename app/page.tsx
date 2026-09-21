"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { GuideSection } from "@/components/sections/GuideSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { TravelSection } from "@/components/sections/TravelSection";
import * as el from "@/data/site";
import * as en from "@/data/site.en";

type Lang = "el" | "en";

function getLangFromCookie(): Lang | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|; )lang=([^;]+)/);
  const value = match ? decodeURIComponent(match[1] ?? "") : "";
  if (value === "el") return "el";
  if (value === "en") return "en";
  return null;
}

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("el");

  useEffect(() => {
    const cookieLang = getLangFromCookie();
    if (cookieLang) setLang(cookieLang);
  }, []);

  const site = lang === "en" ? en : el;

  return (
    <>
      <Header
        navigation={site.navigation}
        ui={site.ui.header}
        lang={lang}
        onLangChange={setLang}
      />
      <main>
        <HeroSection ui={site.ui.hero} />
        <AboutSection ui={site.ui.about} />
        <ExperiencesSection experiences={site.experiences} ui={site.ui.experiences} />
        <DestinationsSection destinations={site.destinations} ui={site.ui.destinations} />
        <TravelSection travelInfo={site.travelInfo} ui={site.ui.travel} />
        <GuideSection guideCategories={site.guideCategories} ui={site.ui.guide} />
        <ContactSection
          contactDetails={site.contactDetails}
          socialLinks={site.socialLinks}
          ui={site.ui.contact}
        />
      </main>
      <Footer socialLinks={site.socialLinks} ui={site.ui.footer} />
    </>
  );
}
