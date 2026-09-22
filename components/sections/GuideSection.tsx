"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import type { GuideCategory } from "@/data/site";

type Props = {
  guideCategories: GuideCategory[];
  ui: {
    label: string;
    title: string;
    copy: string;
    tabsAriaLabel: string;
    closeLabel: string;
    fields: {
      hours: string;
      phone: string;
      address: string;
      priceRange: string;
    };
  };
};

export function GuideSection({ guideCategories, ui }: Props) {
  const [activeCategoryId, setActiveCategoryId] = useState(guideCategories[0]?.id ?? "");
  const activeCategory =
    guideCategories.find((category) => category.id === activeCategoryId) ?? guideCategories[0];
  const [activeGroupTitle, setActiveGroupTitle] = useState(activeCategory?.groups[0]?.title ?? "");

  useEffect(() => {
    setActiveGroupTitle(activeCategory?.groups[0]?.title ?? "");
  }, [activeCategoryId, activeCategory]);

  const activeGroup =
    activeCategory?.groups.find((group) => group.title === activeGroupTitle) ??
    activeCategory?.groups[0];

  if (!activeCategory) {
    return null;
  }

  const skillCount = activeCategory.groups.reduce((total, group) => total + group.items.length, 0);
  const revealDelays: Array<"0" | "1" | "2" | "3"> = ["0", "1", "2", "3"];

  return (
    <section id="skills" className="section skills-section">
      <div className="site-shell">
        <div className="section-header">
          <Reveal>
            <p className="section-label">{ui.label}</p>
          </Reveal>
          <Reveal delay="1">
            <h2 className="section-title">{ui.title}</h2>
          </Reveal>
          <Reveal delay="2">
            <p className="section-copy">{ui.copy}</p>
          </Reveal>
        </div>

        <Reveal className="skills-console">
          <div className="skills-tabs" role="tablist" aria-label={ui.tabsAriaLabel}>
            {guideCategories.map((category, index) => (
              <button
                key={category.id}
                type="button"
                className={`skills-tab ${category.id === activeCategory.id ? "active" : ""}`}
                onClick={() => setActiveCategoryId(category.id)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {category.label}
              </button>
            ))}
          </div>

          <div className="skills-workspace">
            <aside className="skills-category-panel">
              <p className="skills-kicker">{activeCategory.label}</p>
              <h3>{activeCategory.label}</h3>
              <p>{activeCategory.intro}</p>
              <div className="skills-metrics" aria-label="Skill category metrics">
                <span>
                  <strong>{activeCategory.groups.length}</strong>
                  tracks
                </span>
                <span>
                  <strong>{skillCount}</strong>
                  skills
                </span>
              </div>
            </aside>

            <div className="skills-browser">
              <div className="skills-subtabs" aria-label="Skill groups">
                {activeCategory.groups.map((group) => (
                  <button
                    key={group.title}
                    type="button"
                    className={`skills-subtab ${group.title === activeGroup?.title ? "active" : ""}`}
                    onClick={() => setActiveGroupTitle(group.title)}
                  >
                    {group.title}
                  </button>
                ))}
              </div>

              <div className="skills-detail-grid">
                <div className="skills-items-grid">
                  {activeGroup?.items.map((item, index) => (
                    <Reveal
                      key={`${activeGroup.title}-${item.name}`}
                      delay={revealDelays[index % revealDelays.length]}
                    >
                      <article className="skills-item-card">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <strong>{item.name}</strong>
                        <p>{item.description}</p>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
