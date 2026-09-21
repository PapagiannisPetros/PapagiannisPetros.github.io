"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";

type Destination = {
  name: string;
  tag: string;
  description: string;
  image: string;
  chips?: string[];
  images?: string[];
  featured?: boolean;
};

type Props = {
  destinations: Destination[];
  ui: { label: string; title: string; closeLabel: string };
};

export function DestinationsSection({ destinations, ui }: Props) {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (!selectedDestination) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedDestination(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedDestination]);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [selectedDestination]);

  const selectedImages = selectedDestination?.images?.length
    ? selectedDestination.images
    : selectedDestination
      ? [selectedDestination.image]
      : [];
  const selectedImage =
    selectedImages[Math.min(selectedImageIndex, Math.max(selectedImages.length - 1, 0))] ?? "";

  return (
    <>
      <section id="projects" className="section projects-section">
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
                <button
                  type="button"
                  className={`destination-card ${
                    destination.featured ? "destination-featured" : ""
                  }`}
                  onClick={() => setSelectedDestination(destination)}
                >
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    unoptimized={destination.image.startsWith("http")}
                    className="destination-image"
                  />
                  <div className="destination-content">
                    <div className="destination-kicker">
                      <p className="destination-tag">{destination.tag}</p>
                      <span className="destination-status">Case file</span>
                    </div>
                    <h3 className="destination-title">{destination.name}</h3>
                    <p className="destination-copy">{destination.description}</p>
                    {destination.chips?.length ? (
                      <span className="destination-chips">
                        {destination.chips.slice(0, 4).map((chip) => (
                          <span key={chip}>{chip}</span>
                        ))}
                      </span>
                    ) : null}
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selectedDestination ? (
        <div
          className="guide-modal-backdrop"
          role="presentation"
          onClick={() => setSelectedDestination(null)}
        >
          <div
            className="guide-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="destination-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="guide-modal-close"
              aria-label={ui.closeLabel}
              onClick={() => setSelectedDestination(null)}
            >
              ×
            </button>

            <div className="guide-modal-media">
              <Image
                src={selectedImage}
                alt={selectedDestination.name}
                fill
                unoptimized={selectedImage.startsWith("http")}
                className="guide-modal-image"
              />
              {selectedImages.length > 1 ? (
                <div className="guide-modal-slider" aria-label="Φωτογραφίες">
                  <button
                    type="button"
                    aria-label="Προηγούμενη φωτογραφία"
                    onClick={() =>
                      setSelectedImageIndex((current) =>
                        current === 0 ? selectedImages.length - 1 : current - 1,
                      )
                    }
                  >
                    ‹
                  </button>
                  <span>
                    {selectedImageIndex + 1}/{selectedImages.length}
                  </span>
                  <button
                    type="button"
                    aria-label="Επόμενη φωτογραφία"
                    onClick={() =>
                      setSelectedImageIndex((current) =>
                        current === selectedImages.length - 1 ? 0 : current + 1,
                      )
                    }
                  >
                    ›
                  </button>
                </div>
              ) : null}
            </div>

            <div className="guide-modal-copy">
              <p className="guide-modal-tag">{selectedDestination.tag}</p>
              <h3 id="destination-modal-title">{selectedDestination.name}</h3>
              <p>{selectedDestination.description}</p>
              {selectedDestination.chips?.length ? (
                <ul className="destination-modal-chips">
                  {selectedDestination.chips.map((chip) => (
                    <li key={chip}>{chip}</li>
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
