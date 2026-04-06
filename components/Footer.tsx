import { contactDetails, navigation } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="footer-shell">
          <div>
            <div className="footer-brand">Ierapetra Escape</div>
            <div className="footer-subtitle">Νότια Κρήτη, Ελλάδα</div>
            <p className="footer-copy">
              Premium tourism website, ιδανικό για την προβολή προορισμού, boutique καταλυμάτων ή τοπικού travel brand.
            </p>
          </div>
          <div className="footer-nav">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="footer-copy">
            <div>{contactDetails.phone}</div>
            <div>{contactDetails.email}</div>
            <div>© 2026 Ierapetra Escape</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
