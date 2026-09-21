export const navigation = [
  { href: "#about", label: "Profile" },
  { href: "#experiences", label: "Professional Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education & Training" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const images = {
  hero: "/images/hero-cybersecurity-ai-generated.png",
  systems:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=85",
  code:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=85",
  security:
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1800&q=85",
  data:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85",
  ai:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=85",
  lab:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85",
};

export const stats = [
  { value: "HTB", label: "Hands-on cybersecurity training" },
  { value: "Sec+", label: "CompTIA Security+ candidate" },
  { value: "8.58/10", label: "Current CEID grade" },
  { value: "2025", label: "Software, AI and data systems experience" },
];

export const destinations = [
  {
    name: "AI-Driven BI Assistant",
    tag: "SMARTS · 2025",
    description:
      "NLQ-based BI chatbot using LLMs to query dashboards and generate real-time visual insights.",
    chips: ["NLQ", "LLMs", "Dashboards", "Analytics"],
    image: images.ai,
    featured: true,
  },
  {
    name: "Context-Aware RAG Chatbot",
    tag: "SMARTS · 2025",
    description:
      "RAG-based chatbot with vector embeddings for context-aware answers, recommendations and real-time retrieval across domain-specific knowledge bases.",
    chips: ["RAG", "Embeddings", "Retrieval", "Knowledge Base"],
    image: images.lab,
  },
  {
    name: "ML Forecasting Pipeline",
    tag: "SMARTS · 2025",
    description:
      "Time-series ML pipeline with Airflow orchestration, BigQuery, preprocessing, training and automated forecasting.",
    chips: ["Airflow", "BigQuery", "Time Series", "Forecasting"],
    image: images.data,
  },
  {
    name: "Kubernetes Resource Prediction",
    tag: "Academic Project · 2026",
    description:
      "End-to-end ML pipeline for Kubernetes resource forecasting using Prometheus time-series data and containerized deployment.",
    chips: ["Kubernetes", "Prometheus", "ML", "Containers"],
    image: images.systems,
  },
  {
    name: "Virtualized Penetration Testing Lab",
    tag: "Personal · 2026 - ongoing",
    description:
      "Isolated VM-based lab with Kali and vulnerable targets for reconnaissance, scanning, exploitation and privilege escalation.",
    chips: ["Kali", "Nmap", "Burp Suite", "Metasploit"],
    image: images.security,
  },
  {
    name: "Cybersecurity Survey in Military UAV Systems",
    tag: "CEID · 2026",
    description:
      "Analysis of UAV threats across communication, navigation, sensors and ground control, with practical countermeasures.",
    chips: ["Threat Modeling", "UAV", "Security Research", "Countermeasures"],
    image: images.code,
  },
  {
    name: "Public Services Chatbot",
    tag: "SMARTS · 2025",
    description:
      "NLQ/CAG conversational system with analytics and automated knowledge base updates for accurate responses.",
    chips: ["NLQ", "CAG", "Analytics", "Automation"],
    image: images.ai,
  },
  {
    name: "Additional Academic & Software Projects",
    tag: "CEID · Personal",
    description:
      "Multi-Dimensional Indexing with k-d trees and LSH, Open Courses Aggregator with React/PySpark, Thesis Management System with Node.js/MySQL and UniBook Python desktop app.",
    chips: ["React", "PySpark", "Node.js", "Python"],
    image: images.code,
  },
];

export const gallery = [
  { image: images.code, alt: "Software development workspace" },
  { image: images.security, alt: "Cybersecurity monitoring interface" },
  { image: images.ai, alt: "Artificial intelligence visualisation" },
  { image: images.data, alt: "Data analytics dashboard" },
  { image: images.systems, alt: "Server infrastructure" },
];

export const experiences = [
  {
    icon: "AI",
    title: "Software Engineer · S.M.A.R.T.S. IKE",
    period: "Jun 2025 - Dec 2025",
    eyebrow: "Full-stack · AI · Data systems",
    description:
      "At S.M.A.R.T.S. IKE, worked on production-oriented software engineering, combining backend APIs, server-side logic, frontend integrations and responsive UI with scalable architecture, data workflows and AI-driven features.",
    highlights: [
      "Backend APIs",
      "Scalable architecture",
      "RAG / NLQ",
      "ETL / DAG workflows",
      "ML forecasting",
      "UI/UX",
    ],
    image: images.code,
  },
];

export const travelInfo = [
  {
    title: "Computer Engineering & Informatics Department",
    period: "Oct 2022 - ongoing",
    detail:
      "University of Patras · Undergraduate. Current Grade: 8.58/10. Admitted 4th via Panhellenic Exams with 17,850/20,000. In-depth study: Cyber Security. Subsidiary subject: AI - Machine Learning.",
  },
  {
    title: "Hack The Box Academy",
    period: "2026 - ongoing",
    detail:
      "Junior Cybersecurity Analyst Path & hands-on training using Nmap, Burp Suite, Metasploit and Linux environments.",
  },
  {
    title: "CompTIA Security+ (SY0-701)",
    period: "In progress",
    detail:
      "Candidate, preparing across network security, IAM, risk management, cryptography and incident response.",
  },
  {
    title: "School Education",
    period: "Sep 2016 - Jun 2022",
    detail:
      "High School, Kozani · Secondary School Leaving Certificate, Grade 20/20. Middle School, Kozani · Grade 20/20.",
  },
];

export const contactDetails = {
  phone: "+30 6981810174",
  email: "petros.t.papagiannis@gmail.com",
  address: "Patra, Greece",
  mapsUrl: "https://maps.google.com/?q=Patra+Greece",
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/PapagiannisPetros", value: "@PapagiannisPetros" },
  { label: "LinkedIn", href: "https://gr.linkedin.com/in/petros-papagiannis-04655a292", value: "petros-papagiannis" },
  { label: "Instagram", href: "https://www.instagram.com/papagiannispetros", value: "@papagiannispetros" },
  { label: "Spotify", href: "https://open.spotify.com", value: "Spotify" },
  { label: "Personal site", href: "https://papagiannispetros.github.io", value: "papagiannispetros.github.io" },
  { label: "Email", href: "mailto:petros.t.papagiannis@gmail.com", value: "petros.t.papagiannis@gmail.com" },
];

export const ui = {
  header: {
    ariaLabel: "Main navigation",
    brand: "Petros Papagiannis",
  },
  hero: {
    imageAlt: "Abstract software engineering workspace",
    slides: [images.hero, images.code, images.security, images.ai, images.systems],
    badge: "Cybersecurity · Software Engineering · AI",
    title: { primary: "Petros", emphasis: "Papagiannis" },
    subtitle:
      "Personal portfolio for cybersecurity, secure software engineering, AI-driven systems and hands-on security research.",
    cta: "View projects",
    contactCta: "Contact",
  },
  about: {
    image: "/images/CVmeZOOM.jpg",
    imageAlt: "Petros Papagiannis portrait",
    label: "Profile",
    title: { line1: "About", emphasis: "Petros Papagiannis", line2: "" },
    copy:
      "I am a Computer Engineering undergraduate at CEID, University of Patras, focused on cybersecurity. I am interested in understanding how systems work beneath the surface, where they become vulnerable and how they can be designed more securely from the start. I work on hands-on penetration testing, vulnerability analysis, threat modeling and security research, building practical experience through Hack The Box training, isolated VM labs and tools such as Kali Linux, Nmap, Burp Suite and Metasploit. At the same time, my experience in full-stack development, data pipelines and AI-driven applications helps me view security in the real context of a product: from APIs and infrastructure to user experience and data flows. My goal is to grow as an engineer who combines clean implementation, technical curiosity and a security-first mindset.",
    link: "Explore projects",
  },
  destinations: {
    label: "Selected work",
    title: "Projects",
    closeLabel: "Close",
  },
  guide: {
    label: "Skill map",
    title: "Technical stack",
    copy:
      "Skills are grouped by how they are used in practice: engineering, AI/data, security and systems.",
    tabsAriaLabel: "Skill categories",
    closeLabel: "Close",
    fields: {
      hours: "Context",
      phone: "Tools",
      address: "Area",
      priceRange: "Level",
    },
  },
  experiences: {
    label: "Work background",
    title: "Professional experience",
    copy:
      "My professional experience at S.M.A.R.T.S. IKE focused on production applications, APIs, AI/LLM integrations, data pipelines and practical feature delivery from the backend to the user-facing interface.",
    closeLabel: "Close",
  },
  travel: {
    label: "Education",
    title: { line1: "Education", line2: "and training" },
    educationTitle: "Education",
    trainingLabel: "Training",
    trainingTitle: "Training & Certificates",
    googleMaps: "GitHub",
    googleMapsUrl: "https://github.com/PapagiannisPetros",
    appleMaps: "Personal site",
    appleMapsUrl: "https://papagiannispetros.github.io",
    panelLabel: "Academic profile",
    panelTitle: "Computer Engineering",
    highlights: [
      { value: "8.58/10", label: "Current grade, University of Patras" },
      { value: "4th", label: "Admission ranking via Panhellenic Exams" },
      { value: "HTB", label: "Junior Cybersecurity Analyst Path, ongoing" },
      { value: "Sec+", label: "CompTIA Security+ SY0-701 candidate" },
    ],
  },
  contact: {
    label: "Contact",
    title: { line1: "Let's talk", emphasis: "" },
    copy:
      "For cybersecurity projects, secure software engineering, AI applications or academic collaboration, send a direct message.",
    socialTitle: "Links & social",
    form: {
      subjectDefault: "New message from personal website",
      body: {
        nameLabel: "Name",
        emailLabel: "Email",
        fallbackMessage: "I would like to get in touch.",
      },
      placeholders: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Your message...",
      },
      submit: "Send",
      sent: "Email draft created for sending.",
    },
  },
  gallery: {
    ariaLabel: "Professional focus gallery",
  },
  footer: {
    brand: "Petros Papagiannis",
    subtitle: "Cybersecurity · Software Engineering · AI",
    copyright: "© 2026 Petros Papagiannis. All rights reserved.",
  },
};

export type GuideItem = {
  name: string;
  hours?: string;
  phone?: string;
  address?: string;
  priceRange?: string;
  description?: string;
  image?: string;
  images?: string[];
};

export type GuideGroup = {
  title: string;
  items: GuideItem[];
};

export type GuideCategory = {
  id: string;
  label: string;
  intro: string;
  image: string;
  groups: GuideGroup[];
};

export const guideCategories: GuideCategory[] = [
  {
    id: "engineering",
    label: "Software Engineering",
    intro:
      "Full-stack applications, APIs, responsive interfaces and products built with clean architecture.",
    image: images.code,
    groups: [
      {
        title: "Frontend",
        items: [
          {
            name: "React / TypeScript",
            description: "Dynamic interfaces, UI integration, usability testing and responsive experiences.",
            image: images.code,
          },
          {
            name: "HTML5 / CSS3 / Bootstrap",
            description: "Clean structure, polished styling and fast prototyping for web projects.",
            image: images.code,
          },
        ],
      },
      {
        title: "Backend",
        items: [
          {
            name: "Node.js / PHP / Python",
            description: "Backend APIs, server-side logic, runtime environments and database integration.",
            image: images.systems,
          },
          {
            name: "Databases",
            description: "MySQL, SQLite and MongoDB for structured application data and project storage.",
            image: images.data,
          },
        ],
      },
    ],
  },
  {
    id: "ai-data",
    label: "AI & Data",
    intro:
      "LLM-powered products, RAG/NLQ systems, ML forecasting and data pipelines from ingestion to visualization.",
    image: images.ai,
    groups: [
      {
        title: "LLMs",
        items: [
          {
            name: "GPT / Gemini integration",
            description: "Conversational AI, prompt engineering, fine-tuning, RAG and real-time retrieval.",
            image: images.ai,
          },
          {
            name: "NLQ systems",
            description: "Natural-language querying for dashboards, analytics and public-services knowledge bases.",
            image: images.data,
          },
        ],
      },
      {
        title: "Machine Learning",
        items: [
          {
            name: "TensorFlow / PyTorch / scikit-learn",
            description: "ML workflows with Pandas, NumPy, forecasting and model experimentation.",
            image: images.ai,
          },
          {
            name: "Airflow / BigQuery / PySpark",
            description: "ETL pipelines, DAG workflows, big data processing and automated forecasting.",
            image: images.data,
          },
        ],
      },
    ],
  },
  {
    id: "security",
    label: "Cybersecurity",
    intro:
      "Hands-on security training focused on reconnaissance, vulnerability analysis, exploitation and secure foundations.",
    image: images.security,
    groups: [
      {
        title: "Offensive tooling",
        items: [
          {
            name: "Nmap / Burp Suite / Metasploit",
            description: "Enumeration, web testing, exploitation labs and practical attack lifecycle.",
            image: images.security,
          },
          {
            name: "Kali Linux labs",
            description: "Isolated VM environments with vulnerable targets for hands-on practice.",
            image: images.lab,
          },
        ],
      },
      {
        title: "Foundations",
        items: [
          {
            name: "Network security",
            description: "TCP/IP, DNS, DHCP, VLANs, VPN, TLS/SSL and threat modeling.",
            image: images.systems,
          },
          {
            name: "Cryptography",
            description: "Hashing, symmetric/asymmetric cryptography, PKI and digital certificates.",
            image: images.security,
          },
        ],
      },
    ],
  },
  {
    id: "systems",
    label: "Systems",
    intro:
      "Computer engineering fundamentals across operating systems, distributed systems, parallelism, concurrency and DevOps tooling.",
    image: images.systems,
    groups: [
      {
        title: "Low-level & parallel",
        items: [
          {
            name: "C / C++ / Java / C#",
            description: "Programming foundations with systems thinking and a strong academic background.",
            image: images.code,
          },
          {
            name: "MPI / OpenMP / POSIX Threads",
            description: "Parallelism, multithreading, shared-memory parallelism and process coordination.",
            image: images.systems,
          },
        ],
      },
      {
        title: "Platforms",
        items: [
          {
            name: "Linux / Docker / CI/CD",
            description: "Ubuntu, Debian, Kali, Git, GitHub, Docker and deployment workflows.",
            image: images.lab,
          },
          {
            name: "Kubernetes / Prometheus / Grafana",
            description: "Containerized systems, monitoring data and resource prediction pipelines.",
            image: images.systems,
          },
        ],
      },
    ],
  },
];
