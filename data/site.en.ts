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
  { value: "HTB", label: "2 training certificates earned" },
  { value: "Cisco", label: "Junior Cybersecurity Analyst · Ongoing" },
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
    name: "Linux Defense Lab",
    tag: "Academic Project · 2026 - ongoing",
    description:
      "Debian VM lab for Linux hardening, defensive monitoring and network security controls. Focused on firewalling, SSH hardening, log analysis and service security using iptables, nftables, tcpdump, fail2ban and auditd.",
    chips: ["Debian", "Linux Hardening", "SOC", "Firewalling", "Logging", "Monitoring"],
    image: images.lab,
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
    period: "2026 | Completed — Certificates Earned",
    detail: "",
    paths: [
      {
        title: "Junior Cybersecurity Analyst",
        detail: "Enumeration, vulnerability assessment, exploitation with Metasploit and privilege escalation.",
      },
      {
        title: "SOC Analyst",
        detail: "SIEM investigations (Splunk, Elastic Stack), IDS/IPS (Suricata, Snort), network analysis (Zeek, Wireshark), threat hunting, digital forensics and incident handling.",
      },
    ],
  },
  {
    title: "Cisco Networking Academy",
    period: "2026 - ongoing",
    detail: "Junior Cybersecurity Analyst",
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
      "Security monitoring, threat detection, incident response, security testing, systems and AI/ML.",
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
    trainingTitle: "Certifications & Training",
    googleMaps: "GitHub",
    googleMapsUrl: "https://github.com/PapagiannisPetros",
    appleMaps: "Personal site",
    appleMapsUrl: "https://papagiannispetros.github.io",
    panelLabel: "Academic profile",
    panelTitle: "Computer Engineering",
    highlights: [
      { value: "CEID", label: "Computer Engineering & Informatics" },
      { value: "AI/ML", label: "Subsidiary academic subject" },
      { value: "HTB", label: "Junior Cybersecurity Analyst & SOC Analyst · Completed" },
      { value: "Cisco", label: "Junior Cybersecurity Analyst · Ongoing" },
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
    label: "Defensive Security",
    intro: "Security monitoring, threat detection, incident handling, digital forensics and malware analysis.",
    image: images.security,
    groups: [
      {
        title: "SIEM & Security Monitoring",
        items: [
          {
            name: "Splunk (SPL)",
            description: "SIEM investigations and security event queries using SPL.",
            image: images.security,
          },
          {
            name: "Elastic Stack · Kibana · KQL",
            description: "Security monitoring and log investigation with Kibana and KQL.",
            image: images.security,
          },
          {
            name: "Wazuh · Alert Triage",
            description: "Security monitoring and alert assessment.",
            image: images.security,
          },
        ],
      },
      {
        title: "Threat Hunting & Detection",
        items: [
          {
            name: "MITRE ATT&CK · IOC/TTP Analysis",
            description: "Threat hunting through indicators of compromise and attacker tactics, techniques and procedures.",
            image: images.security,
          },
          {
            name: "YARA · Sigma",
            description: "Detection rule development and validation.",
            image: images.security,
          },
        ],
      },
      {
        title: "Network Analysis & Defense",
        items: [
          {
            name: "Wireshark · tcpdump · TShark",
            description: "Packet capture and PCAP analysis.",
            image: images.security,
          },
          {
            name: "Zeek · Suricata · Snort",
            description: "Network traffic analysis and IDS/IPS monitoring.",
            image: images.security,
          },
          {
            name: "iptables · NAT",
            description: "Firewall rules and network address translation.",
            image: images.security,
          },
        ],
      },
      {
        title: "Windows & Active Directory Security",
        items: [
          {
            name: "Windows Event Logs · Sysmon · ETW",
            description: "Windows security telemetry and event analysis.",
            image: images.security,
          },
          {
            name: "Kerberos · NTLM",
            description: "Authentication protocols and Active Directory attack detection.",
            image: images.security,
          },
          {
            name: "Credential Dumping · Lateral Movement",
            description: "Analysis of credential dumping and lateral movement activity.",
            image: images.security,
          },
        ],
      },
      {
        title: "Incident Handling & Reporting",
        items: [
          {
            name: "Containment · IOC Enrichment",
            description: "Incident containment and enrichment of indicators of compromise.",
            image: images.security,
          },
          {
            name: "TheHive · VirusTotal",
            description: "Incident handling and indicator investigation.",
            image: images.security,
          },
          {
            name: "Incident Timelines · Evidence-Based Reporting",
            description: "Reconstructing incident timelines and documenting findings with evidence.",
            image: images.security,
          },
        ],
      },
      {
        title: "Digital Forensics",
        items: [
          {
            name: "Disk & Memory Analysis",
            description: "Disk and memory investigations with Windows artifact correlation.",
            image: images.security,
          },
          {
            name: "FTK Imager · KAPE",
            description: "Disk imaging and forensic artifact collection.",
            image: images.security,
          },
          {
            name: "Velociraptor · Volatility 3",
            description: "Endpoint forensic collection and memory analysis.",
            image: images.security,
          },
        ],
      },
      {
        title: "Malware & Script Analysis",
        items: [
          {
            name: "Static/Dynamic Analysis · PE Inspection",
            description: "Static and dynamic malware analysis and Portable Executable inspection.",
            image: images.security,
          },
          {
            name: "Ghidra · x64dbg · Procmon",
            description: "Reverse engineering, debugging and process activity analysis.",
            image: images.security,
          },
          {
            name: "JavaScript Deobfuscation",
            description: "Deobfuscation and analysis of JavaScript code.",
            image: images.security,
          },
        ],
      },
    ],
  },
  {
    id: "foundations",
    label: "Security Foundations",
    intro: "Security testing, operating systems, virtualization, networking and cryptography.",
    image: images.lab,
    groups: [
      {
        title: "Security Testing",
        items: [
          {
            name: "Burp Suite · Metasploit",
            description: "Web application security testing and controlled exploitation.",
            image: images.lab,
          },
          {
            name: "Reconnaissance · Enumeration",
            description: "Reconnaissance and enumeration of hosts and services.",
            image: images.lab,
          },
          {
            name: "Vulnerability Assessment · Exploitation · Privilege Escalation",
            description: "Vulnerability assessment, exploitation and privilege escalation in lab environments.",
            image: images.lab,
          },
        ],
      },
      {
        title: "Operating Systems & Virtualization",
        items: [
          {
            name: "Linux · Ubuntu · Debian · Kali",
            description: "Linux operating systems for security testing and defensive lab work.",
            image: images.lab,
          },
          {
            name: "Windows · QEMU/KVM",
            description: "Windows environments and virtual machine labs using QEMU/KVM.",
            image: images.lab,
          },
        ],
      },
      {
        title: "Networking & Protocols",
        items: [
          {
            name: "TCP/IP · DNS · DHCP",
            description: "Network communication, name resolution and host configuration.",
            image: images.lab,
          },
          {
            name: "HTTP/S · SMB · LDAP",
            description: "Web, file sharing and directory service protocols.",
            image: images.lab,
          },
          {
            name: "VLANs · VPN · TLS",
            description: "Network segmentation, virtual private networks and encrypted transport.",
            image: images.lab,
          },
        ],
      },
      {
        title: "Cryptography & Authentication",
        items: [
          {
            name: "Hashing · Symmetric/Asymmetric Cryptography",
            description: "Hashing and symmetric and asymmetric cryptographic concepts.",
            image: images.lab,
          },
          {
            name: "PKI · Digital Certificates · AD CS",
            description: "Public key infrastructure, digital certificates and Active Directory Certificate Services.",
            image: images.lab,
          },
        ],
      },
    ],
  },
  {
    id: "systems",
    label: "Systems & DevOps",
    intro: "Parallel programming, containers, delivery workflows and observability.",
    image: images.systems,
    groups: [
      {
        title: "Parallel & Systems Programming",
        items: [
          {
            name: "CUDA · SIMD",
            description: "GPU acceleration and vectorized computation.",
            image: images.systems,
          },
          {
            name: "OpenMP · MPI",
            description: "Shared-memory and distributed parallel programming.",
            image: images.systems,
          },
          {
            name: "Multithreading · POSIX Threads · IPC",
            description: "Threading, synchronization and inter-process communication.",
            image: images.systems,
          },
        ],
      },
      {
        title: "Containers, DevOps & Observability",
        items: [
          {
            name: "Docker · Kubernetes",
            description: "Containerized applications and container orchestration.",
            image: images.systems,
          },
          {
            name: "Argo Workflows · CI/CD",
            description: "Workflow orchestration and continuous integration and delivery.",
            image: images.systems,
          },
          {
            name: "Prometheus · Grafana",
            description: "Metrics collection, monitoring and dashboards.",
            image: images.systems,
          },
          {
            name: "Git · GitHub · Makefile",
            description: "Version control, collaboration and build automation.",
            image: images.systems,
          },
        ],
      },
    ],
  },
  {
    id: "ai-data",
    label: "AI & ML",
    intro: "LLM systems, machine learning, distributed processing and forecasting.",
    image: images.ai,
    groups: [
      {
        title: "LLM Systems & AI/ML",
        items: [
          {
            name: "Gemini · RAG · Prompting",
            description: "LLM integration, retrieval-augmented generation and prompt design.",
            image: images.ai,
          },
          {
            name: "PyTorch · scikit-learn",
            description: "Machine learning models, classification and experimentation.",
            image: images.ai,
          },
          {
            name: "PySpark",
            description: "Distributed data processing and machine learning workflows.",
            image: images.ai,
          },
          {
            name: "Prophet · ARIMA PLUS",
            description: "Time-series forecasting for analytics and KPI workflows.",
            image: images.ai,
          },
        ],
      },
    ],
  },
];
