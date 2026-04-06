import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function HeroSection() {
  return (
    <section id="top">
      <div className="hero-grid">
        <div className="hero-panel">
          <Image
            src="/images/hero.webp"
            alt="Πανοραμική άποψη της Ιεράπετρας"
            fill
            priority
            className="hero-image"
          />
          <div className="hero-copy">
            <Reveal>
              <div className="hero-badge">Νότια Κρήτη · 35°01′N</div>
            </Reveal>
            <Reveal delay="1">
              <h1 className="hero-title">
                Ιεράπετρα
                <br />
                <em>Escape</em>
              </h1>
            </Reveal>
            <Reveal delay="2">
              <p className="hero-subtitle">
                Όπου το Λιβυκό συναντά τη νοτιότερη πόλη της Ευρώπης
              </p>
            </Reveal>
            <Reveal delay="3">
              <div className="hero-actions">
                <a className="button-primary" href="#destinations">
                  Εξερεύνηση
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
