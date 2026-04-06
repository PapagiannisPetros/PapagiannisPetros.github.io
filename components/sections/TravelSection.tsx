import { Reveal } from "@/components/Reveal";
import { travelInfo } from "@/data/site";

export function TravelSection() {
  return (
    <section id="travel">
      <div className="travel-grid">
        <div className="travel-content">
          <div className="section-header">
            <Reveal>
              <p className="section-label">Πού βρισκόμαστε</p>
            </Reveal>
            <Reveal delay="1">
              <h2 className="section-title">
                Ιεράπετρα,
                <br />
                Νότια Κρήτη
              </h2>
            </Reveal>
          </div>

          <ul className="travel-list">
            {travelInfo.map((item, index) => (
              <Reveal
                key={item.title}
                delay={String(Math.min(index + 1, 3)) as "1" | "2" | "3"}
              >
                <li>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="travel-actions">
            <a
              className="button-primary"
              href="https://maps.google.com/?q=Ιεράπετρα+Κρήτη"
              target="_blank"
              rel="noreferrer"
            >
              Google Maps
            </a>
            <a
              className="button-secondary"
              href="https://maps.apple.com/?q=35.0119,25.7423"
              target="_blank"
              rel="noreferrer"
            >
              Apple Maps
            </a>
          </div>
        </div>

        <div className="travel-map">
          <iframe
            src="https://maps.google.com/maps?q=Ιεράπετρα+Κρήτη&output=embed&z=12"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Χάρτης Ιεράπετρας"
          />
        </div>
      </div>
    </section>
  );
}
