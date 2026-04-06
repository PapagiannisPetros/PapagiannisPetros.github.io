import { Reveal } from "@/components/Reveal";
import { experiences } from "@/data/site";

export function ExperiencesSection() {
  return (
    <section id="experiences" className="section experiences-section">
      <div className="site-shell">
        <div className="section-header">
          <Reveal>
            <p className="section-label">Τι να κάνετε</p>
          </Reveal>
          <Reveal delay="1">
            <h2 className="section-title" style={{ color: "white" }}>
              Εμπειρίες που μένουν
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
