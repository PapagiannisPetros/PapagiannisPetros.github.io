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
    name: "Cybersecurity Survey in Military UAV Systems",
    tag: "CEID · 2026",
    description:
      "Analysis of UAV threats across communication, navigation, sensors and ground control, with practical countermeasures.",
    chips: ["Threat Modeling", "UAV", "Security Research", "Countermeasures"],
    image: images.code,
    featured: true,
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
    name: "Kubernetes Resource Prediction",
    tag: "Academic Project · 2026",
    description:
      "End-to-end ML pipeline for Kubernetes resource forecasting using Prometheus time-series data and containerized deployment.",
    chips: ["Kubernetes", "Prometheus", "ML", "Containers"],
    image: images.systems,
  },
  {
    name: "AI Strategy & Data Utilization Study",
    tag: "Professional study · 2026",
    description:
      "Contributed to an AI strategy and data utilization study, analyzing organizational needs, current-state capabilities, AI use cases, data management practices and requirements to support strategic planning, action plans and measurable KPIs.",
    chips: ["AI Strategy", "Data Utilization", "AI Use Cases", "KPIs", "AI Act"],
    image: images.data,
  },
  {
    name: "Social AI Forecasting Platform",
    tag: "Professional project · 2026",
    description:
      "Forecasting and analytics platform with KPI dashboards, correlation analysis, Prophet regressors, MySQL persistence, authentication and Docker deployment.",
    chips: ["Python", "Streamlit", "Prophet", "MySQL", "Docker"],
    image: images.ai,
  },
  {
    name: "Tender Comparator Platform",
    tag: "Professional project · 2026",
    description:
      "Platform for comparing beneficiary tender documents against templates, detecting deviations, exporting Markdown/PDF reports, tracking audit history and generating optional Gemini summaries.",
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
    name: "AIoT Human Activity Recognition",
    tag: "Academic Project · 2026",
    description:
      "PAMAP2 activity-recognition workflow with MongoDB ingestion, signal preprocessing, windowing, feature engineering, sensor-configuration comparison and SVM/Random Forest models.",
    chips: ["Python", "MongoDB", "scikit-learn", "Time-Series ML"],
    image: images.ai,
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
    name: "Parallel Big Data Scaling",
    tag: "Academic Project · 2026",
    description:
      "Standard and min-max scaling for large binary datasets using serial C, SIMD, OpenMP and CUDA versions, with generated benchmarks and NumPy-based correctness checks.",
    chips: ["C", "CUDA", "SIMD", "OpenMP", "NumPy"],
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
  {
    name: "Open Courses Aggregator",
    tag: "Academic Project · 2026",
    description:
      "Full-stack course-catalog aggregation and analytics platform with a React frontend, Express API, MongoDB storage and Spark-based ML/analytics jobs.",
    chips: ["React", "TypeScript", "Express", "MongoDB", "PySpark"],
    image: images.systems,
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
    periods: ["Jun 2025 - Dec 2025", "Jul 2026 - ongoing"],
    eyebrow: "Full-stack · AI · Data systems",
    description:
      "Contributed to production-oriented applications, AI/data studies, backend APIs, server-side logic, frontend integration, secure application development, data workflows and AI/LLM features.",
    highlights: [
      "Backend APIs",
      "Database/API design",
      "RAG / NLQ systems",
      "ETL pipelines",
      "AI strategy studies",
      "ML forecasting",
      "Authentication & logging",
      "Docker/Linux deployment",
    ],
    image: images.code,
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
  { label: "Spotify", href: "https://open.spotify.com/user/313dibgyp2m6l5h5xfowjvlrhizq?si=c375ee2af1024477", value: "Petros Papagiannis" },
  { label: "Instagram", href: "https://www.instagram.com/papagiannis._._", value: "@papagiannis._._" },
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
    title: { line1: "About me", emphasis: "", line2: "" },
    copy:
    "I’m Petros Papagiannis, a 5th-year Computer Engineering & Informatics student at the University of Patras, with a primary focus on Cybersecurity, Secure Software Engineering, and Artificial Intelligence. Professionally, I have worked as a Software Engineer, contributing to the development of backend services, AI-powered applications and studies, RAG systems, data-driven platforms, and automation tools. My experience includes application and API design, data management, application development and deployment, as well as integrating AI/LLM technologies into real-world projects. Alongside my professional experience, I am developing my cybersecurity expertise through hands-on penetration testing, vulnerability analysis, network and web security, and Linux-based security environments. My projects include penetration-testing labs, IDS and machine learning, Kubernetes-based systems, and cybersecurity research. I enjoy understanding how systems work at a deeper level, identifying ways to improve and secure them, and building practical solutions that bring together software engineering, artificial intelligence, and cybersecurity.",
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
    id: "security",
    label: "Cybersecurity",
    intro:
      "Practical security skills grouped by tooling, testing methodology, network foundations and security fundamentals.",
    image: images.security,
    groups: [
      {
        title: "Offensive Tools",
        items: [
          {
            name: "Nmap",
            description: "Host discovery, service enumeration and network reconnaissance.",
            image: images.security,
          },
          {
            name: "Burp Suite",
            description: "Web application testing, proxy inspection and request manipulation.",
            image: images.security,
          },
          {
            name: "Metasploit",
            description: "Controlled exploitation practice inside isolated lab environments.",
            image: images.lab,
          },
          {
            name: "Wireshark",
            description: "Packet capture, protocol inspection and traffic analysis.",
            image: images.systems,
          },
        ],
      },
      {
        title: "Testing Methods",
        items: [
          {
            name: "Reconnaissance",
            description: "Structured target profiling before deeper technical testing.",
            image: images.security,
          },
          {
            name: "Vulnerability Analysis",
            description: "Finding, validating and prioritizing weaknesses in systems and apps.",
            image: images.lab,
          },
          {
            name: "Penetration Testing",
            description: "Hands-on testing workflow from enumeration to reporting.",
            image: images.security,
          },
          {
            name: "Threat Modeling",
            description: "Mapping attack paths, assets, trust boundaries and countermeasures.",
            image: images.systems,
          },
        ],
      },
      {
        title: "Foundations",
        items: [
          {
            name: "TCP/IP",
            description: "Core networking model for analysis, routing and troubleshooting.",
            image: images.systems,
          },
          {
            name: "TLS / SSL",
            description: "Secure transport concepts, certificates and encrypted communication.",
            image: images.security,
          },
          {
            name: "Cryptography",
            description: "Hashing, symmetric/asymmetric crypto, PKI and digital certificates.",
            image: images.security,
          },
          {
            name: "Linux / Kali",
            description: "Security-oriented Linux environments with QEMU/KVM virtualization.",
            image: images.lab,
          },
        ],
      },
    ],
  },
  {
    id: "engineering",
    label: "Software Engineering",
    intro:
      "Languages, APIs, web interfaces and engineering workflow used across production-oriented projects.",
    image: images.code,
    groups: [
      {
        title: "Languages",
        items: [
          {
            name: "Python",
            description: "Backend services, automation, data workflows and ML experiments.",
            image: images.code,
          },
          {
            name: "TypeScript / JavaScript",
            description: "Frontend interfaces, API integrations and full-stack application logic.",
            image: images.code,
          },
          {
            name: "C / C++",
            description: "Systems-oriented programming, performance work and academic foundations.",
            image: images.systems,
          },
          {
            name: "Bash / PowerShell",
            description: "Scripting, local automation and developer workflow utilities.",
            image: images.lab,
          },
        ],
      },
      {
        title: "Application",
        items: [
          {
            name: "FastAPI",
            description: "Python APIs, service endpoints and model-serving backends.",
            image: images.systems,
          },
          {
            name: "Node.js / Express",
            description: "REST APIs, server-side logic and session-based applications.",
            image: images.systems,
          },
          {
            name: "React / Next.js",
            description: "Component-based interfaces, routing and production web delivery.",
            image: images.code,
          },
          {
            name: "Streamlit",
            description: "Fast dashboards and data applications for professional workflows.",
            image: images.data,
          },
        ],
      },
      {
        title: "Delivery",
        items: [
          {
            name: "Git / GitHub",
            description: "Version control, collaboration and project history management.",
            image: images.systems,
          },
          {
            name: "CI/CD",
            description: "Automated checks and deployment-oriented engineering workflows.",
            image: images.systems,
          },
          {
            name: "Testing & Documentation",
            description: "Validation, handoff notes and maintainable project documentation.",
            image: images.code,
          },
          {
            name: "Vercel",
            description: "Static and frontend deployment for web projects.",
            image: images.code,
          },
        ],
      },
    ],
  },
  {
    id: "ai-data",
    label: "AI & Data",
    intro:
      "LLM integration, machine learning, analytics and data infrastructure from professional and academic projects.",
    image: images.ai,
    groups: [
      {
        title: "LLM Systems",
        items: [
          {
            name: "Gemini",
            description: "LLM integration for chatbots, summaries and AI-assisted workflows.",
            image: images.ai,
          },
          {
            name: "RAG",
            description: "Retrieval-augmented generation with metadata and knowledge-base context.",
            image: images.data,
          },
          {
            name: "Prompting",
            description: "Instruction design, task framing and safer model interactions.",
            image: images.ai,
          },
          {
            name: "Input Validation",
            description: "Abuse prevention, privacy-aware handling and safer AI interfaces.",
            image: images.security,
          },
        ],
      },
      {
        title: "ML & Analytics",
        items: [
          {
            name: "PyTorch",
            description: "Model experimentation and ML pipeline work.",
            image: images.ai,
          },
          {
            name: "scikit-learn",
            description: "Classification, feature selection and time-series ML workflows.",
            image: images.ai,
          },
          {
            name: "Pandas / NumPy",
            description: "Data cleaning, transformation, validation and numerical processing.",
            image: images.data,
          },
          {
            name: "Prophet / ARIMA PLUS",
            description: "Forecasting workflows for KPI and time-series datasets.",
            image: images.systems,
          },
        ],
      },
      {
        title: "Data Platforms",
        items: [
          {
            name: "MySQL / SQLite",
            description: "Relational storage for applications, chat history and audit workflows.",
            image: images.data,
          },
          {
            name: "MongoDB",
            description: "Document storage for analytics and sensor-data projects.",
            image: images.data,
          },
          {
            name: "BigQuery",
            description: "Cloud analytics, forecasting views and schema-aware data processing.",
            image: images.data,
          },
          {
            name: "Spark / PySpark",
            description: "Big-data processing and analytics pipelines.",
            image: images.systems,
          },
          {
            name: "Airflow / Looker",
            description: "Workflow orchestration and analytics-ready reporting views.",
            image: images.data,
          },
        ],
      },
    ],
  },
  {
    id: "systems",
    label: "Systems",
    intro:
      "Cloud-native deployment, observability, parallel programming and algorithmic foundations.",
    image: images.systems,
    groups: [
      {
        title: "Cloud Native",
        items: [
          {
            name: "Docker",
            description: "Containerized application packaging and local deployment workflows.",
            image: images.systems,
          },
          {
            name: "Kubernetes",
            description: "Container orchestration and resource-usage forecasting projects.",
            image: images.systems,
          },
          {
            name: "Prometheus / Grafana",
            description: "Metrics collection, monitoring data and dashboard observability.",
            image: images.data,
          },
          {
            name: "Argo Workflows",
            description: "DAG-based workflow execution for ML and systems pipelines.",
            image: images.systems,
          },
        ],
      },
      {
        title: "Parallel",
        items: [
          {
            name: "CUDA",
            description: "GPU acceleration for numerical processing and scaling workloads.",
            image: images.systems,
          },
          {
            name: "OpenMP / MPI",
            description: "Shared-memory and distributed parallel programming patterns.",
            image: images.systems,
          },
          {
            name: "SIMD",
            description: "Vectorized computation for performance-oriented data processing.",
            image: images.code,
          },
          {
            name: "POSIX Threads",
            description: "Threading, synchronization and low-level process coordination.",
            image: images.systems,
          },
        ],
      },
      {
        title: "Algorithms",
        items: [
          {
            name: "R-trees",
            description: "Spatial indexing for multidimensional data structures.",
            image: images.systems,
          },
          {
            name: "k-d Trees / LSH",
            description: "Similarity search, multidimensional lookup and range-query foundations.",
            image: images.systems,
          },
          {
            name: "Feature Engineering",
            description: "Transforming raw signals and datasets into model-ready features.",
            image: images.systems,
          },
        ],
      },
    ],
  },
];
