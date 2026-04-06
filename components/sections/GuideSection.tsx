"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { guideCategories } from "@/data/site";

type GuideItem = (typeof guideCategories)[number]["groups"][number]["items"][number];

const imageByCategory: Record<string, string> = {
  "Φαγητό & Ποτό": "/images/guide-food.webp",
  Θάλασσες: "/images/guide-beaches.webp",
  Περιοχές: "/images/guide-areas.webp",
  Δραστηριότητες: "/images/guide-activities.webp",
  Υπηρεσίες: "/images/guide-services.webp",
};

function isRemoteImage(src: string) {
  return src.startsWith("http://") || src.startsWith("https://");
}

export function GuideSection() {
  const [activeCategoryId, setActiveCategoryId] = useState(guideCategories[0]?.id ?? "");
  const activeCategory =
    guideCategories.find((category) => category.id === activeCategoryId) ?? guideCategories[0];
  const [activeGroupTitle, setActiveGroupTitle] = useState(activeCategory?.groups[0]?.title ?? "");
  const [selectedItem, setSelectedItem] = useState<
    { item: GuideItem; categoryLabel: string; groupTitle: string } | null
  >(null);

  useEffect(() => {
    setActiveGroupTitle(activeCategory?.groups[0]?.title ?? "");
  }, [activeCategoryId, activeCategory]);

  useEffect(() => {
    if (!selectedItem) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedItem]);

  const activeGroup =
    activeCategory?.groups.find((group) => group.title === activeGroupTitle) ??
    activeCategory?.groups[0];

  const revealDelays: Array<"0" | "1" | "2" | "3"> = ["0", "1", "2", "3"];

  const featuredImage = useMemo(() => {
    if (!selectedItem) return "";
    return (
      selectedItem.item.image ??
      imageByCategory[selectedItem.categoryLabel] ??
      activeCategory.image
    );
  }, [activeCategory.image, selectedItem]);

  if (!activeCategory) {
    return null;
  }

  return (
    <>
      <section id="guide" className="section guide-section">
        <div className="site-shell">
          <div className="section-header">
            <Reveal>
              <p className="section-label">Interactive menu</p>
            </Reveal>
            <Reveal delay="1">
              <h2 className="section-title">Οδηγός Ιεράπετρας</h2>
            </Reveal>
            <Reveal delay="2">
              <p className="section-copy">
                Διάλεξε κατηγορία και πάτησε σε όποιο σημείο σε ενδιαφέρει για να δεις
                γρήγορα μικρό κείμενο και φωτογραφία σε pop-up.
              </p>
            </Reveal>
          </div>

          <div className="guide-layout">
            <Reveal className="guide-panel">
              <div className="guide-tabs" role="tablist" aria-label="Κατηγορίες οδηγού">
                {guideCategories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    className={`guide-tab ${category.id === activeCategory.id ? "active" : ""}`}
                    onClick={() => setActiveCategoryId(category.id)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              <div className="guide-hero">
                <div className="guide-hero-copy">
                  <p className="guide-kicker">{activeCategory.label}</p>
                  <h3>{activeCategory.label}</h3>
                  <p>{activeCategory.intro}</p>
                </div>
                <div className="guide-hero-image-wrap">
                  <Image
                    src={activeCategory.image}
                    alt={activeCategory.label}
                    fill
                    unoptimized={isRemoteImage(activeCategory.image)}
                    className="guide-hero-image"
                  />
                </div>
              </div>

              <div className="guide-subtabs" aria-label="Υποκατηγορίες">
                {activeCategory.groups.map((group) => (
                  <button
                    key={group.title}
                    type="button"
                    className={`guide-subtab ${group.title === activeGroup?.title ? "active" : ""}`}
                    onClick={() => setActiveGroupTitle(group.title)}
                  >
                    {group.title}
                  </button>
                ))}
              </div>

              <div className="guide-items-grid">
                {activeGroup?.items.map((item, index) => (
                  <Reveal
                    key={`${activeGroup.title}-${item.name}`}
                    delay={revealDelays[index % revealDelays.length]}
                  >
                    <button
                      type="button"
                      className="guide-item-card"
                      onClick={() =>
                        setSelectedItem({
                          item,
                          categoryLabel: activeCategory.label,
                          groupTitle: activeGroup.title,
                        })
                      }
                    >
                      <span className="guide-item-meta">{activeGroup.title}</span>
                      <strong>{item.name}</strong>
                      <span>{item.description}</span>
                    </button>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {selectedItem ? (
        <div
          className="guide-modal-backdrop"
          role="presentation"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="guide-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="guide-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="guide-modal-close"
              aria-label="Κλείσιμο"
              onClick={() => setSelectedItem(null)}
            >
              ×
            </button>

            <div className="guide-modal-media">
              <Image
                src={featuredImage}
                alt={selectedItem.item.name}
                fill
                unoptimized={isRemoteImage(featuredImage)}
                className="guide-modal-image"
              />
            </div>

            <div className="guide-modal-copy">
              <p className="guide-modal-tag">
                {selectedItem.categoryLabel} • {selectedItem.groupTitle}
              </p>
              <h3 id="guide-modal-title">{selectedItem.item.name}</h3>
              <p>{selectedItem.item.description}</p>
              {selectedItem.item.hours ? (
                <div className="guide-modal-info">
                  <span>Ωράριο</span>
                  <strong>{selectedItem.item.hours}</strong>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
