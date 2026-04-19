import Image from "next/image";
import { Reveal } from "@/components/Reveal";

type Props = {
  ui: {
    imageAlt: string;
    badge: string;
    title: { primary: string; emphasis: string };
    subtitle: string;
    cta: string;
  };
};

export function HeroSection({ ui }: Props) {
  return (
    <section id="top">
      <div className="hero-grid">
        <div className="hero-panel">
          <Image
            src="/images/hero.webp"
            alt={ui.imageAlt}
            fill
            priority
            className="hero-image"
          />
          <div className="hero-copy">
            <Reveal>
              <div className="hero-badge">{ui.badge}</div>
            </Reveal>
            <Reveal delay="1">
              <h1 className="hero-title">
                {ui.title.primary}
                <br />
                <em>{ui.title.emphasis}</em>
              </h1>
            </Reveal>
            <Reveal delay="2">
              <p className="hero-subtitle">{ui.subtitle}</p>
            </Reveal>
            <Reveal delay="3">
              <div className="hero-actions">
                <a className="button-primary" href="#destinations">
                  {ui.cta}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
