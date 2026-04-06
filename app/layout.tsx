import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ierapetra Escape | Νότια Κρήτη",
  description:
    "Στατικό premium tourism site για την Ιεράπετρα με προορισμούς, εμπειρίες, χάρτη και στοιχεία επικοινωνίας.",
  openGraph: {
    title: "Ierapetra Escape | Νότια Κρήτη",
    description:
      "Ανακαλύψτε την Ιεράπετρα μέσα από ένα premium static travel website έτοιμο για deploy στο Vercel.",
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
