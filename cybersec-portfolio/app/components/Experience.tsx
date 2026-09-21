const roles = [
  {
    period: "2023 — Now",
    role: "Senior Security Engineer",
    org: "Northwind Cloud",
    desc: "Own detection engineering for a fleet of 400+ services. Rebuilt the alerting pipeline to cut false positives by 60%, and lead quarterly red-team exercises against production.",
  },
  {
    period: "2020 — 2023",
    role: "Security Consultant",
    org: "Fenwick & Grey Security",
    desc: "Delivered penetration tests and cloud security reviews for fintech and healthcare clients. Built the firm's internal cloud attack-path methodology, later adopted firm-wide.",
  },
  {
    period: "2018 — 2020",
    role: "SOC Analyst II",
    org: "Meridian Systems",
    desc: "Triaged and investigated alerts across EDR, SIEM and cloud logs. Wrote detection content that reduced mean time to triage from 40 minutes to under 8.",
  },
  {
    period: "2016 — 2018",
    role: "Junior Security Analyst",
    org: "Meridian Systems",
    desc: "Started on the vulnerability management team, coordinating patch cycles across a mixed on-prem and cloud environment for 2,000+ endpoints.",
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section__inner">
        <p className="section__eyebrow">Experience</p>
        <h2 className="section__heading">Where I&rsquo;ve worked</h2>
        <div>
          {roles.map((r) => (
            <div className="timeline__item" key={r.role + r.period}>
              <div className="timeline__period">{r.period}</div>
              <div>
                <h3 className="timeline__role">{r.role}</h3>
                <p className="timeline__org">{r.org}</p>
                <p className="timeline__desc">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
