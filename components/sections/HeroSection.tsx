"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";

type Props = {
  ui: {
    imageAlt: string;
    slides: string[];
    badge: string;
    title: { primary: string; emphasis: string };
    subtitle: string;
    cta: string;
    contactCta?: string;
  };
};

function isRemoteImage(src: string) {
  return src.startsWith("http://") || src.startsWith("https://");
}

type TerminalEntry = {
  command: string;
  output: string;
};

const terminalEntries: TerminalEntry[] = [
  { command: "id -un && hostnamectl --static", output: "petros.papagiannis @ security-lab" },
  {
    command: "grep -E \"(cyber|secure|ai)\" /opt/profile/focus.yml",
    output: "cybersecurity, secure software, ai-driven systems",
  },
  {
    command: "jq -r '.experience[] | select(.role==\"Software Engineer\") | .scope[]'",
    output: "backend APIs, AI/data studies, RAG, forecasting, deployment",
  },
  {
    command: "find ./projects -maxdepth 2 -type f -name '*.case' | sort | head -4",
    output: "UAV security, pentest lab, Kubernetes ML, AI strategy",
  },
  {
    command: "nmap -sV --top-ports 25 skills.local/cybersecurity",
    output: "nmap, burp, metasploit, wireshark, threat modeling",
  },
  {
    command: "python -m skills.query --track ai-data --format compact",
    output: "gemini, RAG, pytorch, scikit-learn, bigquery, airflow",
  },
  {
    command: "kubectl get stack systems -o custom-columns=TOOLS:.spec.tools",
    output: "docker, kubernetes, prometheus, cuda, openmp, r-trees",
  },
  {
    command: "awk -F: '/current|focus|minor/{print $2}' ./education/ceid.profile",
    output: "CEID University of Patras, cybersecurity focus, AI/ML",
  },
  {
    command: "htb academy progress --path jca | tail -n 2",
    output: "Hack The Box path, CompTIA Security+ candidate",
  },
  {
    command: "curl -s portfolio.local/links | jq '.public[]'",
    output: "github, linkedin, portfolio, spotify, instagram",
  },
  {
    command: "systemctl --user status learning.service building.service hardening.service",
    output: "learning, building, hardening",
  },
];

export function HeroSection({ ui }: Props) {
  const heroSlides = ui.slides.length ? ui.slides : ["/images/hero.jpg"];
  const heroImage = heroSlides[0];
  const [visibleEntries, setVisibleEntries] = useState<TerminalEntry[]>([]);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");

  useEffect(() => {
    const entry = terminalEntries[typingIndex] ?? terminalEntries[0];
    const command = entry.command;

    if (typedCommand.length < command.length) {
      const timer = window.setTimeout(() => {
        setTypedCommand(command.slice(0, typedCommand.length + 1));
      }, 24);

      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setVisibleEntries((current) => [...current, entry].slice(-3));
      setTypedCommand("");
      setTypingIndex((current) => (current + 1) % terminalEntries.length);
    }, 850);

    return () => window.clearTimeout(timer);
  }, [typedCommand, typingIndex]);

  return (
    <section className="hero-panel" id="top">
      <div className="hero-ambient" aria-hidden="true">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          unoptimized={isRemoteImage(heroImage)}
          className="hero-image"
        />
      </div>

      <div className="hero-layout site-shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal>
              <div className="hero-badge">{ui.badge}</div>
            </Reveal>
            <Reveal delay="1">
              <h1 className="hero-title">
                {ui.title.primary}
                <br />
                <em>{ui.title.emphasis}</em>
              </h1>
            </Reveal>
            <Reveal delay="2">
              <p className="hero-subtitle">{ui.subtitle}</p>
            </Reveal>
            <Reveal delay="3">
              <div className="hero-actions">
                <a className="button-primary" href="#projects">
                  {ui.cta}
                </a>
                <a className="button-secondary hero-contact-link" href="#contact">
                  {ui.contactCta ?? "Contact"}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="hero-mark" aria-hidden="true">
            <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M110 22 L181 48 V101 C181 148 151 185 110 198 C69 185 39 148 39 101 V48 Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M110 47 L159 65 V102 C159 134 139 160 110 171 C81 160 61 134 61 102 V65 Z"
                stroke="currentColor"
                strokeOpacity="0.62"
                strokeWidth="1"
              />
              <path d="M85 116 V82 H113 C128 82 137 90 137 103 C137 116 128 124 113 124 H99" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M99 137 V116 H116 C130 116 139 124 139 137 C139 150 130 158 116 158 H85" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="110" cy="110" r="5" fill="currentColor" />
            </svg>
          </div>
        </div>

        <div className="hero-terminal" aria-label={ui.imageAlt}>
          <div className="hero-terminal-bar">
            <span />
            <span />
            <span />
            <strong>petros@security-lab</strong>
          </div>
          <div className="hero-terminal-body">
            <div className="hero-terminal-watermark" aria-hidden="true">
              <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M110 22 L181 48 V101 C181 148 151 185 110 198 C69 185 39 148 39 101 V48 Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M110 47 L159 65 V102 C159 134 139 160 110 171 C81 160 61 134 61 102 V65 Z"
                  stroke="currentColor"
                  strokeOpacity="0.62"
                  strokeWidth="1"
                />
                <circle cx="110" cy="110" r="5" fill="currentColor" />
              </svg>
            </div>
            <p className="hero-terminal-status">
              <span />
              live reconnaissance
            </p>
            <div className="hero-terminal-lines" aria-live="polite">
              <div className="terminal-column-label">command</div>
              <div className="terminal-column-label">output</div>
              {visibleEntries.map((entry, index) => (
                <div className="terminal-row" key={`${entry.command}-${index}`}>
                  <p className="terminal-line terminal-command">
                    <span>$</span>
                    {entry.command}
                  </p>
                  <p className="terminal-line terminal-output">
                    <span>-&gt;</span>
                    {entry.output}
                  </p>
                </div>
              ))}
              <div className="terminal-row">
                <p className="terminal-line terminal-command">
                  <span>$</span>
                  {typedCommand}
                  <i />
                </p>
                <p className="terminal-line terminal-output terminal-output-pending">
                  <span>-&gt;</span>
                  waiting...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
