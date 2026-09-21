const certs = [
  { name: "OSCP", meta: "Offensive Security · 2019" },
  { name: "AWS Certified Security — Specialty", meta: "Amazon Web Services · 2022" },
  { name: "GCIH", meta: "GIAC Incident Handler · 2021" },
  { name: "CISSP", meta: "ISC2 · 2023" },
];

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="section__inner">
        <p className="section__eyebrow">Certifications</p>
        <h2 className="section__heading">Credentials</h2>
        <div className="certs__list">
          {certs.map((c) => (
            <div className="cert" key={c.name}>
              <p className="cert__name">{c.name}</p>
              <p className="cert__meta">{c.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
