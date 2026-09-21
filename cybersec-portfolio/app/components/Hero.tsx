export default function Hero() {
  return (
    <section className="hero" id="top">
      <div>
        <p className="hero__eyebrow">Security engineer</p>
        <h1 className="hero__name">Dana Kessler</h1>
        <p className="hero__role">
          Breaking things on purpose, then closing the gap before anyone else finds it
        </p>
        <p className="hero__statement">
          I spend half my week thinking like an attacker and the other half
          building the detections, guardrails and fixes that keep that
          attacker out. Currently focused on cloud identity, detection
          engineering and secure-by-default infrastructure.
        </p>
        <div className="hero__actions">
          <a className="hero__button" href="#projects">
            See my work
          </a>
          <a className="hero__button hero__button--ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero__mark" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 22 L166 46 V96 C166 138 138 168 100 180 C62 168 34 138 34 96 V46 Z"
            stroke="#33544a"
            strokeWidth="1.5"
          />
          <path
            d="M100 46 L148 63 V96 C148 128 128 150 100 160 C72 150 52 128 52 96 V63 Z"
            stroke="#a97d4b"
            strokeWidth="1"
          />
          <circle cx="100" cy="100" r="4" fill="#33544a" />
        </svg>
      </div>
    </section>
  );
}
