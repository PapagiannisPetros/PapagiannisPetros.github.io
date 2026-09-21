import Image from "next/image";
import { Reveal } from "@/components/Reveal";

type Props = {
  ui: {
    image: string;
    imageAlt: string;
    label: string;
    title: { line1: string; emphasis: string; line2: string };
    copy: string;
    link: string;
  };
};

export function AboutSection({ ui }: Props) {
  const isRemoteImage = ui.image.startsWith("http://") || ui.image.startsWith("https://");

  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-visual">
          <Image
            src={ui.image}
            alt={ui.imageAlt}
            fill
            unoptimized={isRemoteImage}
            className="about-image"
          />
        </div>
        <div className="about-content">
          <div className="section-header">
            <Reveal>
              <p className="section-label">{ui.label}</p>
            </Reveal>
            <Reveal delay="1">
              <h2 className="section-title about-title">
                {ui.title.line1}
                {ui.title.emphasis ? <> <em>{ui.title.emphasis}</em></> : null}
                {ui.title.line2 ? (
                  <>
                    <br />
                    {ui.title.line2}
                  </>
                ) : null}
              </h2>
            </Reveal>
            <Reveal delay="2">
              <p className="section-copy about-copy">{ui.copy}</p>
            </Reveal>
            <Reveal delay="3">
              <a href="#projects" className="eyebrow-link">
                {ui.link}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
