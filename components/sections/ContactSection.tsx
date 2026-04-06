"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { contactDetails } from "@/data/site";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "rate">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const subject = String(form.get("subject") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const website = String(form.get("website") ?? "");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_CONTACT_FORM_API_KEY || "",
        },
        body: JSON.stringify({ name, email, subject, message, website }),
      });

      if (res.status === 429) {
        setStatus("rate");
        return;
      }
      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="site-shell">
        <div className="contact-grid">
          <div className="contact-panel">
            <Reveal>
              <p className="section-label">Επικοινωνία</p>
            </Reveal>
            <Reveal delay="1">
              <h2 className="section-title">
                Σχεδιάστε το
                <br />
                <em style={{ color: "var(--terracotta)" }}>ταξίδι σας</em>
              </h2>
            </Reveal>
            <Reveal delay="2">
              <p className="section-copy">
                Η ομάδα μας είναι έτοιμη να βοηθήσει με διαμονή, προτάσεις και
                γενικές πληροφορίες για την Ιεράπετρα.
              </p>
            </Reveal>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-row">
                <input name="name" type="text" placeholder="Όνομα" required />
                <input name="email" type="email" placeholder="Email" required />
              </div>
              <input name="subject" type="text" placeholder="Θέμα" required />
              <textarea name="message" placeholder="Μήνυμά σας..." required />
              <input
                name="website"
                type="text"
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                style={{ display: "none" }}
              />
              <button className="button-primary" type="submit">
                {status === "sending" ? "Αποστολή..." : "Αποστολή"}
              </button>
              {status === "success" ? (
                <p className="section-copy" style={{ marginTop: 0 }}>
                  Το μήνυμα στάλθηκε επιτυχώς.
                </p>
              ) : null}
              {status === "rate" ? (
                <p className="section-copy" style={{ marginTop: 0 }}>
                  Στέλνεις πολύ γρήγορα μηνύματα. Περίμενε λίγο και δοκίμασε ξανά.
                </p>
              ) : null}
              {status === "error" ? (
                <p className="section-copy" style={{ marginTop: 0 }}>
                  Υπήρξε πρόβλημα στην αποστολή. Προσπάθησε ξανά.
                </p>
              ) : null}
            </form>
          </div>

          <div className="contact-meta">
            <article className="meta-card">
              <p className="meta-card-label">Τηλέφωνο</p>
              <p className="meta-card-value">{contactDetails.phone}</p>
              <p className="meta-card-copy">Άμεση επικοινωνία για πληροφορίες.</p>
            </article>
            <article className="meta-card">
              <p className="meta-card-label">Email</p>
              <p className="meta-card-value">{contactDetails.email}</p>
              <p className="meta-card-copy">Κεντρικό σημείο επικοινωνίας του brand.</p>
            </article>
            <article className="meta-card">
              <p className="meta-card-label">Τοποθεσία</p>
              <p className="meta-card-value">Ιεράπετρα, Κρήτη</p>
              <p className="meta-card-copy">
                <a href={contactDetails.mapsUrl} target="_blank" rel="noreferrer">
                  {contactDetails.address}
                </a>
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
