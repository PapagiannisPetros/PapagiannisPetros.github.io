import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Petros Papagiannis",
  description:
    "Cybersecurity-oriented personal website του Petros Papagiannis: security research, software engineering, AI applications, projects και contact.",
  icons: {
    icon: "/images/petros_papagiannis_shield_pp_only.png",
    shortcut: "/images/petros_papagiannis_shield_pp_only.png",
    apple: "/images/petros_papagiannis_shield_pp_only.png",
  },
  openGraph: {
    title: "Petros Papagiannis",
    description:
      "Cybersecurity-oriented Computer Engineering profile με focus σε security research, secure software και AI-driven systems.",
    locale: "el_GR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  );
}
