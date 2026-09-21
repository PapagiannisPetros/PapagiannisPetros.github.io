import { Reveal } from "@/components/Reveal";

type TravelItem = {
  title: string;
  period: string;
  detail: string;
};

type Props = {
  travelInfo: TravelItem[];
  ui: {
    label: string;
    educationTitle: string;
    trainingLabel: string;
    trainingTitle: string;
  };
};

function EducationTrack({
  items,
}: {
  items: TravelItem[];
}) {
  return (
    <ol className="education-track">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={String(Math.min(index + 1, 3)) as "1" | "2" | "3"}>
          <li>
            <span className="education-index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <span className="education-period">{item.period}</span>
              <strong>{item.title}</strong>
              <span className="education-detail">{item.detail}</span>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

export function TravelSection({ travelInfo, ui }: Props) {
  const educationItems = travelInfo.filter((_, index) => index === 0 || index === 3);
  const trainingItems = travelInfo.filter((_, index) => index === 1 || index === 2);

  return (
    <section id="education" className="education-section">
      <div className="travel-grid">
        <div className="travel-content">
          <div className="section-header">
            <Reveal>
              <p className="section-label">{ui.label}</p>
            </Reveal>
            <Reveal delay="1">
              <h2 className="section-title">{ui.educationTitle}</h2>
            </Reveal>
          </div>

          <div className="education-column">
            <EducationTrack items={educationItems} />
          </div>
        </div>

        <div className="travel-content training-content">
          <div className="section-header">
            <Reveal>
              <p className="section-label">{ui.trainingLabel}</p>
            </Reveal>
            <Reveal delay="1">
              <h2 className="section-title">{ui.trainingTitle}</h2>
            </Reveal>
          </div>

          <div className="education-column training-column">
            <EducationTrack items={trainingItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
