const groups = [
  {
    title: "Offensive assessment",
    desc: "Simulating a motivated attacker against real infrastructure, not a checklist.",
    tags: ["Web & API pentesting", "Cloud attack paths", "Social engineering", "Red team ops"],
  },
  {
    title: "Detection & response",
    desc: "Turning attacker behaviour into signal, and signal into a runbook someone can follow at 3am.",
    tags: ["SIEM engineering", "Threat hunting", "Incident response", "Rule writing"],
  },
  {
    title: "Cloud & identity",
    desc: "Most breaches now start with a misconfigured role, not a zero-day.",
    tags: ["AWS / GCP hardening", "Least-privilege IAM", "Secrets management", "Infra reviews"],
  },
  {
    title: "Application security",
    desc: "Working with engineering teams so fixes land before release, not after an audit.",
    tags: ["Threat modelling", "Secure code review", "Pipeline security", "Static & dynamic testing"],
  },
];

export default function Focus() {
  return (
    <section className="section" id="focus">
      <div className="section__inner">
        <p className="section__eyebrow">Focus</p>
        <h2 className="section__heading">Where I spend most of my time</h2>
        <div className="focus__grid">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="focus__block-title">{group.title}</h3>
              <p className="focus__block-desc">{group.desc}</p>
              <ul className="focus__tags">
                {group.tags.map((tag) => (
                  <li className="focus__tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
