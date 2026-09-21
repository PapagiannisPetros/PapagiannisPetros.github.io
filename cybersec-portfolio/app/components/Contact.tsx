export default function Contact() {
  return (
    <section className="section contact" id="contact" style={{ borderBottom: "none" }}>
      <div className="section__inner contact__inner">
        <p className="section__eyebrow">Contact</p>
        <h2 className="contact__heading">
          Have a security problem worth a second pair of eyes?
        </h2>
        <a className="contact__email" href="mailto:dana@example.com">
          dana@example.com
        </a>
        <div className="contact__channels">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          <a href="/dana-kessler-cv.pdf">Resume (PDF)</a>
          <a href="https://keys.openpgp.org" target="_blank" rel="noreferrer noopener">
            PGP key
          </a>
        </div>
      </div>
    </section>
  );
}
