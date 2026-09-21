"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/Reveal";

type ContactDetails = {
  phone: string;
  email: string;
  address: string;
  mapsUrl: string;
};

type ContactUi = {
  label: string;
  title: { line1: string; emphasis: string };
  copy: string;
  socialTitle: string;
  form: {
    subjectDefault: string;
    body: { nameLabel: string; emailLabel: string; fallbackMessage: string };
    placeholders: { name: string; email: string; subject: string; message: string };
    submit: string;
    sent: string;
  };
};

type Props = {
  contactDetails: ContactDetails;
  socialLinks: Array<{ label: string; href: string; value: string }>;
  ui: ContactUi;
};

export function ContactSection({ contactDetails, socialLinks, ui }: Props) {
  const [sent, setSent] = useState(false);
  const getLinkProps = (href: string) =>
    href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {};

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const subject = String(form.get("subject") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const mailto = new URL(`mailto:${contactDetails.email}`);
    mailto.searchParams.set("subject", subject || ui.form.subjectDefault);
    mailto.searchParams.set(
      "body",
      [
        `${ui.form.body.nameLabel}: ${name}`,
        `${ui.form.body.emailLabel}: ${email}`,
        "",
        message || ui.form.body.fallbackMessage,
      ].join("\n"),
    );

    window.location.href = mailto.toString();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="section">
      <div className="site-shell">
        <div className="contact-grid">
          <div className="contact-panel">
            <Reveal>
              <p className="section-label">{ui.label}</p>
            </Reveal>
            <Reveal delay="1">
              <h2 className="section-title">
                {ui.title.line1}
                {ui.title.emphasis ? (
                  <>
                    <br />
                    <em style={{ color: "var(--terracotta)" }}>{ui.title.emphasis}</em>
                  </>
                ) : null}
              </h2>
            </Reveal>
            <Reveal delay="2">
              <p className="section-copy">{ui.copy}</p>
            </Reveal>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-row">
                <input name="name" type="text" placeholder={ui.form.placeholders.name} required />
                <input name="email" type="email" placeholder={ui.form.placeholders.email} required />
              </div>
              <input name="subject" type="text" placeholder={ui.form.placeholders.subject} required />
              <textarea name="message" placeholder={ui.form.placeholders.message} required />
              <button className="button-primary" type="submit">
                {ui.form.submit}
              </button>
              {sent ? (
                <p className="section-copy" style={{ marginTop: 0 }}>
                  {ui.form.sent}
                </p>
              ) : null}
            </form>
          </div>

          <aside className="contact-socials" aria-labelledby="contact-socials-title">
            <Reveal delay="1">
              <p className="contact-socials-label" id="contact-socials-title">
                {ui.socialTitle}
              </p>
            </Reveal>
            <div className="social-links">
              {socialLinks.map((item) => (
                <a key={item.href} className="social-link" href={item.href} {...getLinkProps(item.href)}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
