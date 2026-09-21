type SocialLink = { label: string; href: string; value: string };
type FooterUi = { brand: string; subtitle: string; copyright: string };

type Props = {
  socialLinks: SocialLink[];
  ui: FooterUi;
};

function SocialIcon({ label }: { label: string }) {
  const icon = label.toLowerCase();
  const commonProps = {
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  if (icon.includes("github")) {
    return (
      <svg {...commonProps}>
        <path
          d="M12 2.5c-5.25 0-9.5 4.25-9.5 9.5 0 4.2 2.72 7.76 6.5 9.02.48.08.65-.2.65-.46v-1.62c-2.64.58-3.2-1.13-3.2-1.13-.43-1.08-1.05-1.37-1.05-1.37-.86-.58.06-.57.06-.57.95.07 1.45.98 1.45.98.84 1.44 2.2 1.02 2.74.78.08-.6.33-1.02.6-1.25-2.1-.24-4.32-1.05-4.32-4.68 0-1.03.37-1.88.98-2.54-.1-.24-.42-1.21.09-2.5 0 0 .8-.26 2.62.97A9.1 9.1 0 0 1 12 5.31c.8 0 1.61.11 2.38.32 1.82-1.23 2.62-.97 2.62-.97.51 1.29.19 2.26.09 2.5.61.66.98 1.51.98 2.54 0 3.64-2.22 4.44-4.34 4.67.34.29.65.87.65 1.76v2.43c0 .26.17.55.66.46A9.51 9.51 0 0 0 21.5 12c0-5.25-4.25-9.5-9.5-9.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (icon.includes("linkedin")) {
    return (
      <svg {...commonProps}>
        <path d="M6.7 9.2h-3v10.1h3V9.2Z" fill="currentColor" />
        <path d="M5.2 4.3a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z" fill="currentColor" />
        <path
          d="M16.2 8.95c-1.62 0-2.6.88-3 1.5V9.2h-2.9v10.1h3v-5.02c0-1.32.25-2.6 1.9-2.6 1.6 0 1.62 1.5 1.62 2.68v4.94h3v-5.57c0-2.72-.58-4.78-3.62-4.78Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (icon.includes("instagram")) {
    return (
      <svg {...commonProps}>
        <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="2" />
        <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (icon.includes("spotify")) {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="9" fill="currentColor" />
        <path
          d="M7.5 9.15c3.35-.82 6.3-.46 9.02 1.08M8.1 12.05c2.62-.58 5.15-.28 7.28.94M8.72 14.82c1.86-.38 3.62-.2 5.15.58"
          stroke="var(--sea)"
          strokeLinecap="round"
          strokeWidth="1.55"
        />
      </svg>
    );
  }

  if (icon.includes("email")) {
    return (
      <svg {...commonProps}>
        <rect x="3.8" y="6" width="16.4" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="m5 7.5 7 5 7-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <circle cx="12" cy="12" r="8.4" stroke="currentColor" strokeWidth="2" />
      <path d="M4 12h16M12 3.6c2.2 2.2 3.3 5 3.3 8.4s-1.1 6.2-3.3 8.4M12 3.6c-2.2 2.2-3.3 5-3.3 8.4s1.1 6.2 3.3 8.4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  );
}

export function Footer({ socialLinks, ui }: Props) {
  const getLinkProps = (href: string) =>
    href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="footer-shell">
          <div className="footer-heading">
            <div className="footer-brand">{ui.brand}</div>
            <div className="footer-subtitle">{ui.subtitle}</div>
          </div>
          <div className="footer-socials">
            {socialLinks.map((item) => (
              <a
                key={item.href}
                className="footer-social-link"
                href={item.href}
                aria-label={`${item.label}: ${item.value}`}
                {...getLinkProps(item.href)}
              >
                <span className="footer-social-icon">
                  <SocialIcon label={item.label} />
                </span>
                <span className="footer-social-copy">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </span>
              </a>
            ))}
          </div>
          <p className="footer-copy">{ui.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
