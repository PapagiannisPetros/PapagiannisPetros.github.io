import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-visual">
          <Image
            src="/images/about.webp"
            alt="Μεσογειακό τοπίο της νότιας Κρήτης"
            fill
            className="about-image"
          />
        </div>
        <div className="about-content">
          <div className="section-header">
            <Reveal>
              <p className="section-label">Η Ψυχή του Τόπου</p>
            </Reveal>
            <Reveal delay="1">
              <h2 className="section-title">
                Η <em>τελευταία</em>
                <br />
                αδάμαστη Κρήτη
              </h2>
            </Reveal>
            <Reveal delay="2">
              <p className="section-copy">
                Η Ιεράπετρα συνδυάζει το φως του Λιβυκού, αυθεντική κρητική
                καθημερινότητα και προορισμούς που παραμένουν αληθινοί αντί για
                υπερφορτωμένοι.
              </p>
            </Reveal>
            <Reveal delay="3">
              <a href="#destinations" className="eyebrow-link">
                Ανακαλύψτε τους προορισμούς
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
