import { Reveal } from "@/components/Reveal";

type Experience = {
  icon: string;
  title: string;
  description: string;
};

type Props = {
  experiences: Experience[];
  ui: { label: string; title: string };
};

export function ExperiencesSection({ experiences, ui }: Props) {
  return (
    <section id="experiences" className="section experiences-section">
      <div className="site-shell">
        <div className="section-header">
          <Reveal>
            <p className="section-label">{ui.label}</p>
          </Reveal>
          <Reveal delay="1">
            <h2 className="section-title" style={{ color: "white" }}>
              {ui.title}
            </h2>
          </Reveal>
        </div>

        <div className="experiences-grid">
          {experiences.map((experience, index) => (
            <Reveal
              key={experience.title}
              delay={String(Math.min(index, 3)) as "0" | "1" | "2" | "3"}
            >
              <article className="experience-card">
                <span className="experience-icon" aria-hidden="true">
                  {experience.icon}
                </span>
                <h3 className="experience-title">{experience.title}</h3>
                <p className="experience-copy">{experience.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
