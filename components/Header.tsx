"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header">
      <nav className={scrolled ? "scrolled" : ""} aria-label="Κύρια πλοήγηση">
        <a className="brand" href="#top">
          Ιεράπετρα
        </a>
        <div className="nav-links">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
