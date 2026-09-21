"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";

type Experience = {
  icon: string;
  title: string;
  period?: string;
  eyebrow?: string;
  description: string;
  highlights?: string[];
  image: string;
};

type Props = {
  experiences: Experience[];
  ui: { label: string; title: string; copy?: string; closeLabel: string };
};

function isRemoteImage(src: string) {
  return src.startsWith("http://") || src.startsWith("https://");
}

export function ExperiencesSection({ experiences, ui }: Props) {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  useEffect(() => {
    if (!selectedExperience) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedExperience(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedExperience]);

  return (
    <>
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
            {ui.copy ? (
              <Reveal delay="2">
                <p className="section-copy experiences-intro">{ui.copy}</p>
              </Reveal>
            ) : null}
          </div>

          <div
            className={`experience-timeline${
              experiences.length === 1 ? " experience-timeline-single" : ""
            }`}
          >
            {experiences.map((experience, index) => (
              <Reveal
                key={experience.title}
                delay={String(Math.min(index, 3)) as "0" | "1" | "2" | "3"}
              >
                <button
                  type="button"
                  className="experience-card"
                  onClick={() => setSelectedExperience(experience)}
                >
                  <span className="experience-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="experience-icon" aria-hidden="true">
                    {experience.icon}
                  </span>
                  <span className="experience-meta">
                    {experience.period}
                    {experience.eyebrow ? ` · ${experience.eyebrow}` : ""}
                  </span>
                  <h3 className="experience-title">{experience.title}</h3>
                  <p className="experience-copy">{experience.description}</p>
                  {experience.highlights?.length ? (
                    <span className="experience-highlights">
                      {experience.highlights.slice(0, 3).map((highlight) => (
                        <span key={highlight}>{highlight}</span>
                      ))}
                    </span>
                  ) : null}
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selectedExperience ? (
        <div
          className="guide-modal-backdrop"
          role="presentation"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            className="guide-modal experience-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="experience-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="guide-modal-close"
              aria-label={ui.closeLabel}
              onClick={() => setSelectedExperience(null)}
            >
              ×
            </button>

            <div className="guide-modal-media">
              <Image
                src={selectedExperience.image}
                alt={selectedExperience.title}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                unoptimized={isRemoteImage(selectedExperience.image)}
                className="guide-modal-image experience-modal-image"
              />
            </div>

            <div className="guide-modal-copy">
              <p className="guide-modal-tag">{ui.label}</p>
              <h3 id="experience-modal-title">{selectedExperience.title}</h3>
              {selectedExperience.period ? (
                <p className="experience-modal-meta">{selectedExperience.period}</p>
              ) : null}
              <p>{selectedExperience.description}</p>
              {selectedExperience.highlights?.length ? (
                <ul className="experience-modal-list">
                  {selectedExperience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
