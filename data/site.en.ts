import type { GuideCategory } from "@/data/site";
import { guideCategories as elGuideCategories } from "@/data/site";

export const navigation = [
  { href: "#about", label: "Area" },
  { href: "#destinations", label: "Destinations" },
  { href: "#guide", label: "Guide" },
  { href: "#experiences", label: "Experiences" },
  { href: "#travel", label: "Getting here" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "3,500", label: "Years of history" },
  { value: "300+", label: "Sunny days" },
  { value: "1", label: "Southernmost city in Europe" },
  { value: "15km", label: "Coastline & nearby beaches" },
];

export const destinations = [
  {
    name: "Xrysi (Gaidouronisi)",
    tag: "Island day trip",
    description:
      "A small uninhabited island with a cedar forest and turquoise waters — a Caribbean-like scene in the Libyan Sea.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chrissi%20Island%20pathway%20to%20Golden%20Beach-embuck.jpg",
    featured: true,
  },
  {
    name: "Palia poli Ierapetras",
    tag: "Historic center",
    description:
      "The Venetian Kales Fortress, narrow alleys, low houses, and walks where history meets the sea.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kales%20fortress%20Ierapetra%2C%20including%20Greek%20flag.JPG",
  },
  {
    name: "Myrtos",
    tag: "Seaside village",
    description:
      "A peaceful village with dark pebbles, a relaxed pace, and one of the most beloved beaches in southern Crete.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Myrtos%20beach%20in%20Lasithi%2001.JPG",
  },
  {
    name: "Faraggi Sarakinas",
    tag: "Hiking",
    description:
      "Narrow, dramatic, and cool even in summer — ideal for a short but impressive walk.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sarakina%20Gorge%2C%20Ierapetra%2C%20Crete.jpg",
  },
  {
    name: "Makrys Gialos",
    tag: "Seaside escape",
    description:
      "A favorite spot with a long sandy beach, shallow waters, and an easy summer vibe — ideal for families.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Makrigialos%20beach%20lasithi.jpg",
  },
  {
    name: "Koufonisi",
    tag: "Exotic excursion",
    description:
      "A small island with golden shores, crystal-clear waters, and a sense of isolation that feels truly far away.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Koufonisi%20Aerial%20Photo.jpg",
  },
  {
    name: "Kavousi",
    tag: "Village & History",
    description:
      "A historic village known for its monumental olive tree and a beautiful route into the surrounding countryside.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Monumental%20Olive%20tree%20near%20Kavousi%20%28Crete%29%2002.jpg",
  },
  {
    name: "Agia Fotia",
    tag: "Beach",
    description:
      "A calm beach with clear water and a natural setting, for those who want an easy, quieter swim by the sea.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Agia%20Fotia%20Beach%20by%20Evangelos%20Mpikakis.jpg",
  },
];

export const gallery = [
  { image: "/images/gallery-1.webp", alt: "Turquoise waters of southern Crete" },
  { image: "/images/gallery-2.webp", alt: "Rocky landscape near Ierapetra" },
  { image: "/images/gallery-3.webp", alt: "Seaside stroll in Crete" },
  { image: "/images/gallery-4.webp", alt: "View over a natural landscape of southern Crete" },
  { image: "/images/gallery-5.webp", alt: "Summer drive into the Cretan countryside" },
];

export const experiences = [
  {
    icon: "⛵",
    title: "Xrysi day trip",
    description:
      "Daily boats from the port to Gaidouronisi — snorkeling, cedar trees, and total calm.",
  },
  {
    icon: "🏰",
    title: "History & archaeology",
    description:
      "Kales Fortress, the old town, and traces of Venetian, Ottoman, and Roman presence — all within easy reach.",
  },
  {
    icon: "🫒",
    title: "Rural life",
    description:
      "Greenhouses, olive groves, local markets, and producers that give Ierapetra its unique rhythm.",
  },
  {
    icon: "🐟",
    title: "Gastronomy",
    description:
      "Fresh fish at the harbor, local pies, Cretan olive oil, and flavors that stay simple and authentic.",
  },
];

export const travelInfo = [
  {
    title: "Heraklion Airport (HER)",
    detail:
      "About 1 hour by road — the closest international airport with connections across Europe.",
  },
  {
    title: "Ierapetra Port",
    detail: "Departure point for Xrysi Island and a key hub of the town’s seaside life.",
  },
  {
    title: "By road from Heraklion",
    detail:
      "About 1.5 hours via the southern coastal route, with beautiful views over the Libyan Sea.",
  },
];

export const contactDetails = {
  phone: "+30 28420 22000",
  email: "info@ierapetra-escape.gr",
  address: "Paraliaki Ierapetras, Kriti 722 00",
  mapsUrl: "https://maps.google.com/?q=Ierapetra+Crete",
};

export const ui = {
  header: {
    ariaLabel: "Main navigation",
    brand: "IeraTrip",
  },
  hero: {
    imageAlt: "Panoramic view of Ierapetra",
    badge: "South Crete · 35°01′N",
    title: { primary: "Ierapetra", emphasis: "Trip" },
    subtitle: "Where the Libyan Sea meets Europe’s southernmost city",
    cta: "Explore",
  },
  about: {
    imageAlt: "Mediterranean landscape of southern Crete",
    label: "The spirit of the place",
    title: { line1: "The", emphasis: "last", line2: "untamed Crete" },
    copy:
      "Ierapetra blends the light of the Libyan Sea with authentic Cretan everyday life and destinations that still feel real — not overcrowded.",
    link: "Discover destinations",
  },
  destinations: {
    label: "Worth the trip",
    title: "Explore the area",
  },
  guide: {
    label: "Interactive menu",
    title: "Ierapetra Guide",
    copy:
      "Choose a category and tap any spot to see a short description and photo in a pop-up.",
    tabsAriaLabel: "Guide categories",
    closeLabel: "Close",
    fields: {
      hours: "Hours",
      phone: "Phone",
      address: "Address",
      priceRange: "Price range",
    },
  },
  experiences: {
    label: "What to do",
    title: "Experiences that stay with you",
  },
  travel: {
    label: "Where we are",
    title: { line1: "Ierapetra,", line2: "South Crete" },
    googleMaps: "Google Maps",
    appleMaps: "Apple Maps",
    googleMapsUrl: "https://maps.google.com/?q=Ierapetra+Crete",
    appleMapsUrl: "https://maps.apple.com/?q=35.0119,25.7423",
    iframeTitle: "Map of Ierapetra",
    iframeSrc: "https://maps.google.com/maps?q=Ierapetra+Crete&output=embed&z=12",
  },
  contact: {
    label: "Contact",
    title: { line1: "Plan your", emphasis: "trip" },
    copy:
      "Our team is ready to help with accommodation, recommendations, and general information about Ierapetra.",
    form: {
      subjectDefault: "New inquiry from the website",
      body: {
        nameLabel: "Name",
        emailLabel: "Email",
        fallbackMessage: "I would like more information.",
      },
      placeholders: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Your message...",
      },
      submit: "Send",
      sent: "An email draft was created for sending.",
    },
    meta: {
      phone: { label: "Phone", copy: "Direct contact for information." },
      email: { label: "Email", copy: "Main contact point for the brand." },
      location: {
        label: "Location",
        value: "Ierapetra, Crete",
      },
    },
  },
  gallery: {
    ariaLabel: "Travel gallery",
  },
  footer: {
    brand: "Ierapetra Escape",
    subtitle: "South Crete, Greece",
    copy:
      "Premium tourism website, ideal for promoting a destination, boutique accommodations, or a local travel brand.",
    copyright: "© 2026 Ierapetra Escape",
  },
};

export const guideCategories: GuideCategory[] = [
  {
    id: "food-drink",
    label: "Food & Drink",
    intro: "Cafés, restaurants, tavernas, and nightlife — organized in a handy menu.",
    groupTitles: ["Cafés", "Restaurants", "Tavernas", "Nightlife", "fast food", "take away"],
  },
  {
    id: "beaches",
    label: "Seas",
    intro: "Beaches and coasts for a quick, well-organized sea guide.",
    groupTitles: ["Beaches"],
  },
  {
    id: "areas",
    label: "Villages",
    intro:
      "Villages and nearby spots around Ierapetra for short trips, walks, and a more authentic local feel.",
    groupTitles: ["Villages"],
  },
  {
    id: "attractions",
    label: "Attractions",
    intro: "Fortress, museums, monuments, and historic sights to explore.",
    groupTitles: ["Attractions"],
  },
  {
    id: "activities",
    label: "Activities",
    intro: "Water sports, trips, gorges, and experiences to plan your exploration.",
    groupTitles: ["What to do"],
  },
  {
    id: "services",
    label: "Services",
    intro: "Practical options for health, shopping, self-care, sports, and transport.",
    groupTitles: ["Services"],
  },
].map((override) => {
  const base =
    elGuideCategories.find((category) => category.id === override.id) ?? elGuideCategories[0];
  const withEnglishStructure: GuideCategory = {
    ...base,
    label: override.label,
    intro: override.intro,
    groups: base.groups.map((group, index) => ({
      ...group,
      title: override.groupTitles[index] ?? group.title,
    })),
  };

  const hasGreek = (value: string) => /[Α-Ωα-ωάέήίόύώϊϋΐΰ]/.test(value);
  const toGreeklish = (value: string) =>
    value
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/Α/g, "A")
      .replace(/Β/g, "V")
      .replace(/Γ/g, "G")
      .replace(/Δ/g, "D")
      .replace(/Ε/g, "E")
      .replace(/Ζ/g, "Z")
      .replace(/Η/g, "I")
      .replace(/Θ/g, "Th")
      .replace(/Ι/g, "I")
      .replace(/Κ/g, "K")
      .replace(/Λ/g, "L")
      .replace(/Μ/g, "M")
      .replace(/Ν/g, "N")
      .replace(/Ξ/g, "X")
      .replace(/Ο/g, "O")
      .replace(/Π/g, "P")
      .replace(/Ρ/g, "R")
      .replace(/Σ/g, "S")
      .replace(/Τ/g, "T")
      .replace(/Υ/g, "Y")
      .replace(/Φ/g, "F")
      .replace(/Χ/g, "X")
      .replace(/Ψ/g, "Ps")
      .replace(/Ω/g, "O")
      .replace(/α/g, "a")
      .replace(/β/g, "v")
      .replace(/γ/g, "g")
      .replace(/δ/g, "d")
      .replace(/ε/g, "e")
      .replace(/ζ/g, "z")
      .replace(/η/g, "i")
      .replace(/θ/g, "th")
      .replace(/ι/g, "i")
      .replace(/κ/g, "k")
      .replace(/λ/g, "l")
      .replace(/μ/g, "m")
      .replace(/ν/g, "n")
      .replace(/ξ/g, "x")
      .replace(/ο/g, "o")
      .replace(/π/g, "p")
      .replace(/ρ/g, "r")
      .replace(/σ/g, "s")
      .replace(/ς/g, "s")
      .replace(/τ/g, "t")
      .replace(/υ/g, "y")
      .replace(/φ/g, "f")
      .replace(/χ/g, "x")
      .replace(/ψ/g, "ps")
      .replace(/ω/g, "o");

  return {
    ...withEnglishStructure,
    groups: withEnglishStructure.groups.map((group) => ({
      ...group,
      items: group.items.map((item) => ({
        ...item,
        name: hasGreek(item.name) ? toGreeklish(item.name) : item.name,
        hours: item.hours && hasGreek(item.hours) ? toGreeklish(item.hours) : item.hours,
        description:
          item.description && hasGreek(item.description) ? toGreeklish(item.description) : item.description,
      })),
    })),
  };
});
