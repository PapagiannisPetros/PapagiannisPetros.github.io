import Image from "next/image";
import { Reveal } from "@/components/Reveal";

type Destination = {
  name: string;
  tag: string;
  description: string;
  image: string;
  featured?: boolean;
};

type Props = {
  destinations: Destination[];
  ui: { label: string; title: string };
};

export function DestinationsSection({ destinations, ui }: Props) {
  return (
    <section id="destinations" className="section">
      <div className="site-shell">
        <div className="section-header">
          <Reveal>
            <p className="section-label">{ui.label}</p>
          </Reveal>
          <Reveal delay="1">
            <h2 className="section-title">{ui.title}</h2>
          </Reveal>
        </div>

        <div className="destination-grid">
          {destinations.map((destination, index) => (
            <Reveal
              key={destination.name}
              delay={String(Math.min((index % 3) + 1, 3)) as "1" | "2" | "3"}
            >
              <article
                className={`destination-card ${
                  destination.featured ? "destination-featured" : ""
                }`}
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  unoptimized={destination.image.startsWith("http")}
                  className="destination-image"
                />
                <div className="destination-content">
                  <p className="destination-tag">{destination.tag}</p>
                  <h3 className="destination-title">{destination.name}</h3>
                  <p className="destination-copy">{destination.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
