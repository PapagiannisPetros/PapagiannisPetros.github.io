export default function Nav() {
  return (
    <header className="nav">
      <a className="nav__mark" href="#top">
        Dana Kessler
      </a>
      <nav className="nav__links" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#focus">Focus</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Work</a>
        <a href="#certifications">Certifications</a>
      </nav>
      <a className="nav__cta" href="#contact">
        Get in touch
      </a>
    </header>
  );
}
