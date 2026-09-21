const projects = [
  {
    title: "roleprobe",
    desc: "An open-source CLI that maps effective AWS IAM permissions across accounts and flags privilege-escalation paths before an attacker finds them.",
    meta: "900+ stars",
  },
  {
    title: "Credential stuffing at scale — a write-up",
    desc: "A public breakdown of how a mid-sized SaaS company's login flow was probed for weeks before detection, and the three changes that would have caught it on day one.",
    meta: "Research",
  },
  {
    title: "Detection pack for cloud identity abuse",
    desc: "A maintained set of detection rules for common identity-based attack patterns across AWS and GCP, built from real incident post-mortems.",
    meta: "Community pack",
  },
  {
    title: "Internal red team playbook",
    desc: "A structured methodology for cloud-focused red-team engagements, now used as the assessment standard at Northwind Cloud.",
    meta: "Methodology",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section__inner">
        <p className="section__eyebrow">Selected work</p>
        <h2 className="section__heading">Things I&rsquo;ve built or broken</h2>
        <div className="projects__list">
          {projects.map((p) => (
            <div className="project" key={p.title}>
              <div>
                <h3 className="project__title">{p.title}</h3>
                <p className="project__desc">{p.desc}</p>
              </div>
              <div className="project__meta">{p.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
