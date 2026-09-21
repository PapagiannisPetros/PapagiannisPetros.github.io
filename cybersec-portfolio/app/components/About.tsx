export default function About() {
  return (
    <section className="section" id="about">
      <div className="section__inner about__grid">
        <div className="about__body">
          <p className="section__eyebrow">About</p>
          <h2 className="section__heading">
            I got into security by taking things apart, not by reading a textbook
          </h2>
          <p>
            My first real break was finding an auth bypass in a university
            portal at nineteen, reported through a channel that didn&rsquo;t
            technically exist yet. Since then I&rsquo;ve worked on both sides
            of the fence: red-team engagements that stress-test an
            organisation&rsquo;s assumptions, and the blue-team work of
            turning what I find into detections that actually fire.
          </p>
          <p>
            I care most about the unglamorous middle of security work &mdash;
            the identity misconfiguration nobody owns, the alert that gets
            muted because it&rsquo;s too noisy, the runbook that only lives
            in one person&rsquo;s head. Fixing those does more for an
            organisation than any single high-severity finding.
          </p>
          <p>
            Outside of client work I maintain a couple of open-source
            tooling projects, mentor newer engineers through a local CTF
            club, and write up interesting findings once the disclosure
            window closes.
          </p>
        </div>
        <div className="about__facts">
          <div className="about__fact">
            <p className="about__fact-label">Based in</p>
            <p className="about__fact-value">Berlin, DE &middot; remote-friendly</p>
          </div>
          <div className="about__fact">
            <p className="about__fact-label">Currently</p>
            <p className="about__fact-value">Senior Security Engineer, Northwind Cloud</p>
          </div>
          <div className="about__fact">
            <p className="about__fact-label">Specialising in</p>
            <p className="about__fact-value">Cloud &amp; identity, detection engineering</p>
          </div>
          <div className="about__fact">
            <p className="about__fact-label">Clearance</p>
            <p className="about__fact-value">Available on request</p>
          </div>
        </div>
      </div>
    </section>
  );
}
