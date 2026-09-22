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
  { value: "CEID", label: "Computer Engineering & Informatics" },
  { value: "2025+", label: "Software, AI and data systems experience" },
];

export const destinations = [
  {
    name: "Social AI Forecasting Platform",
    tag: "Professional project · 2026",
    description:
      "Forecasting and analytics platform with KPI dashboards, correlation analysis, Prophet regressors, MySQL persistence, authentication and Docker deployment.",
    chips: ["Python", "Streamlit", "Prophet", "MySQL", "Docker"],
    image: images.ai,
    featured: true,
  },
  {
    name: "Tender Comparator Platform",
    tag: "Professional project · 2026",
    description:
      "Document comparison platform for tender files and templates, detecting deviations, tracking audit history and exporting Markdown/PDF reports.",
    chips: ["Python", "Streamlit", "SQLite", "Gemini", "Reports"],
    image: images.lab,
  },
  {
    name: "Local RAG Chatbot Platform",
    tag: "Professional project · 2025",
    description:
      "Reusable RAG chatbot backends with bilingual UI, content-safety checks, chat history, metadata and Dockerized FastAPI/MySQL deployment.",
    chips: ["Python", "FastAPI", "Gemini", "RAG", "MySQL"],
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
    name: "BigQuery Forecasting Pipeline",
    tag: "Professional project · 2025",
    description:
      "Airflow-ready forecasting scripts for BigQuery datasets, schema detection, time-series validation, ARIMA PLUS forecasts and Looker-ready views.",
    chips: ["Python", "Airflow", "BigQuery ML", "ARIMA PLUS"],
    image: images.ai,
  },
  {
    name: "Traffic Streaming Pipeline",
    tag: "Academic Project · 2026",
    description:
      "Streaming traffic-simulation pipeline producing UXsim vehicle events to Redpanda, processing them with Spark Structured Streaming, storing them in MongoDB and exposing them through FastAPI.",
    chips: ["Python", "Kafka", "Spark", "MongoDB", "FastAPI"],
    image: images.code,
  },
  {
    name: "eduScout - Open Courses Aggregator",
    tag: "Academic Project · 2026",
    description:
      "Full-stack course-catalog aggregation and analytics platform with a React frontend, Express API, MongoDB storage and Spark-based ML/analytics jobs.",
    chips: ["React", "TypeScript", "Express", "MongoDB", "PySpark"],
    image: images.systems,
  },
  {
    name: "Data Mining IDS",
    tag: "Academic Project · 2026",
    description:
      "EDA and ML pipeline for intrusion detection with data cleaning, feature selection, binary attack detection and multiclass attack-family classification.",
    chips: ["Python", "scikit-learn", "Pandas", "Random Forest"],
    image: images.security,
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
    title: "Software Engineer",
    period: "Jun 2025 - Dec 2025 · Jul 2026 - ongoing",
    eyebrow: "Full-stack · AI · Data systems",
    description:
      "Contributed to production-oriented applications across backend APIs, server-side logic, frontend integration, secure application development, data workflows and AI/LLM features.",
    highlights: [
      "Backend APIs",
      "Database/API design",
      "RAG / NLQ systems",
      "ETL pipelines",
      "ML forecasting",
      "Authentication & logging",
      "Docker/Linux deployment",
    ],
    image: images.code,
  },
  {
    icon: "TA",
    title: "Teaching Assistant",
    period: "Oct 2024 - Feb 2025",
    eyebrow: "Differential Equations · Applied Mathematics",
    description:
      "Supported lectures, problem-solving sessions and student guidance for a university-level applied mathematics course.",
    highlights: [
      "Lecture support",
      "Problem solving",
      "Student support",
      "Coursework preparation",
      "Assessment assistance",
    ],
    image: images.systems,
  },
  {
    icon: "LAB",
    title: "Lab Instructor",
    period: "Oct 2024 - Jun 2025",
    eyebrow: "Mathematical Foundations in Computer Science",
    description:
      "Delivered labs on algorithmic thinking, logic and proofs, guiding exercises and assessing student submissions.",
    highlights: ["Algorithms", "Logic", "Proofs", "Lab delivery", "Student feedback"],
    image: images.lab,
  },
];

export const travelInfo = [
  {
    title: "Computer Engineering & Informatics Department",
    period: "Oct 2022 - ongoing",
    detail:
      "University of Patras · Undergraduate, 5th year. In-depth study: Cyber Security. Subsidiary subject: Artificial Intelligence - Machine Learning.",
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
      "Secondary education in Kozani with emphasis on mathematics, physics and chemistry.",
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
      "Official portfolio for cybersecurity, secure software engineering, AI-driven systems and production-oriented software projects.",
    cta: "View projects",
    contactCta: "Contact",
  },
  about: {
    image: "/images/CVmeZOOM.jpg",
    imageAlt: "Petros Papagiannis portrait",
    label: "Profile",
    title: { line1: "About", emphasis: "Petros Papagiannis", line2: "" },
    copy:
      "I am a Computer Engineering undergraduate at CEID, University of Patras, focused on cybersecurity, secure software engineering and AI-driven systems. My experience spans backend services, data-driven applications, production-oriented tools, authentication, logging, deployment hygiene, data handling and reliability. I am also developing practical experience in penetration testing, vulnerability analysis, Linux environments, networking, web security and security tooling through structured training and isolated labs. My goal is to build reliable systems with clean architecture, technical precision and a security-first mindset.",
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
      "Professional experience focused on production applications, APIs, AI/LLM integrations, data pipelines and practical feature delivery from the backend to the user-facing interface.",
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
      { value: "CEID", label: "Computer Engineering & Informatics" },
      { value: "AI/ML", label: "Subsidiary academic subject" },
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
