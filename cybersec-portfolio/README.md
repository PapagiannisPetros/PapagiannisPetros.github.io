# Cybersecurity Engineer — Personal Portfolio

Next.js 14 (App Router) + React + TypeScript, με 100% custom CSS (χωρίς frameworks όπως Tailwind/Bootstrap).

## Εκκίνηση

```bash
npm install
npm run dev
```

Άνοιξε το http://localhost:3000

## Build για production

```bash
npm run build
npm start
```

## Τι να προσαρμόσεις

Όλο το περιεχόμενο (όνομα, ρόλος, εμπειρία, projects, πιστοποιήσεις, στοιχεία επικοινωνίας) βρίσκεται
απευθείας μέσα στα components — δεν υπάρχει CMS. Τα σημαντικότερα αρχεία:

- `app/components/Hero.tsx` — όνομα, τίτλος, στατιστικά, το "live log" panel
- `app/components/About.tsx` — βιογραφικό κείμενο και γρήγορα στοιχεία
- `app/components/Focus.tsx` — ομάδες δεξιοτήτων
- `app/components/Experience.tsx` — timeline εργασιακής εμπειρίας
- `app/components/Projects.tsx` — επιλεγμένα projects / write-ups
- `app/components/Certifications.tsx` — πιστοποιήσεις
- `app/components/Contact.tsx` — email, LinkedIn, GitHub, PGP key, resume link
- `app/layout.tsx` — τίτλος σελίδας (`<title>`) και meta description
- `app/globals.css` — όλα τα design tokens (χρώματα, γραμματοσειρές) στην κορυφή του αρχείου, μέσα στο `:root`

## Design

- **Χρώματα:** ζεστό, ήρεμο μπεζ φόντο (paper), βαθύ πράσινο-πεύκο ως κύριο accent, μια απαλή πινελιά μπρούτζινου (brass) για μικρές λεπτομέρειες.
- **Γραμματοσειρές:** Fraunces (κομψοί, italic τίτλοι) και Work Sans (κείμενο) — φορτώνονται μέσω `next/font/google`, οπότε χρειάζεται σύνδεση στο internet στο build/dev.
- **Layout:** καθαρή, editorial διάταξη με άφθονο λευκό χώρο, λεπτές διαχωριστικές γραμμές αντί για κάρτες με σκιές, και ένα απλό, ήσυχο emblem στο hero.
- Χωρίς "hacker"/terminal στοιχεία — γενικό, επαγγελματικό, κομψό ύφος.

## Deploy

Το project είναι έτοιμο για Vercel, Netlify ή οποιοδήποτε Node hosting. Σε Vercel:

```bash
npx vercel
```
