export const navigation = [
  { href: "#about", label: "Προφίλ" },
  { href: "#experiences", label: "Επαγγελματική εμπειρία" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Εκπαίδευση" },
  { href: "#skills", label: "Δεξιότητες" },
  { href: "#contact", label: "Επικοινωνία" },
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
  { value: "HTB", label: "Πρακτική εκπαίδευση cybersecurity" },
  { value: "Sec+", label: "Υποψήφιος CompTIA Security+" },
  { value: "CEID", label: "Μηχανικών Η/Υ και Πληροφορικής" },
  { value: "2025+", label: "Εμπειρία σε software, AI και data systems" },
];

export const destinations = [
  {
    name: "UAV Cybersecurity",
    tag: "CEID · 2026",
    description:
      "Ανάλυση απειλών σε επικοινωνία, πλοήγηση, αισθητήρες και ground control στρατιωτικών UAV, μαζί με μέτρα προστασίας.",
    chips: ["Threat Modeling", "UAV", "Security Research", "Countermeasures"],
    image: images.code,
    featured: true,
  },
  {
    name: "Penetration Testing Lab",
    tag: "Personal · 2026 - ongoing",
    description:
      "Απομονωμένο VM lab με Kali και ευάλωτους στόχους για reconnaissance, scanning, exploitation και privilege escalation.",
    chips: ["Kali", "Nmap", "Burp Suite", "Metasploit"],
    image: images.security,
  },
  {
    name: "Kubernetes Forecasting",
    tag: "Academic Project · 2026",
    description:
      "End-to-end ML pipeline για πρόβλεψη πόρων Kubernetes με δεδομένα Prometheus και containerized deployment.",
    chips: ["Kubernetes", "Prometheus", "ML", "Containers"],
    image: images.systems,
  },
  {
    name: "AI Strategy & Data Utilization Study",
    tag: "Professional study · 2026",
    description:
      "Συμμετοχή σε μελέτη AI strategy και αξιοποίησης δεδομένων, με ανάλυση οργανωτικών αναγκών, υφιστάμενων δυνατοτήτων, AI use cases, data management practices, απαιτήσεων, action plans και μετρήσιμων KPIs.",
    chips: ["AI Strategy", "Data Utilization", "AI Use Cases", "KPIs", "AI Act"],
    image: images.data,
  },
  {
    name: "Social AI Forecasting Platform",
    tag: "Professional project · 2026",
    description:
      "Forecasting και analytics platform με KPI dashboards, correlation analysis, Prophet regressors, MySQL persistence, authentication και Docker deployment.",
    chips: ["Python", "Streamlit", "Prophet", "MySQL", "Docker"],
    image: images.ai,
  },
  {
    name: "Tender Comparator Platform",
    tag: "Professional project · 2026",
    description:
      "Πλατφόρμα σύγκρισης εγγράφων διαγωνισμών δικαιούχων με templates, εντοπισμό αποκλίσεων, εξαγωγή Markdown/PDF reports, ιστορικό ελέγχων και προαιρετικά Gemini summaries.",
    chips: ["Python", "Streamlit", "SQLite", "Gemini", "Reports"],
    image: images.lab,
  },
  {
    name: "Local RAG Chatbot Platform",
    tag: "Professional project · 2025",
    description:
      "Reusable RAG chatbot backends με bilingual UI, content-safety checks, chat history, metadata και Dockerized FastAPI/MySQL deployment.",
    chips: ["Python", "FastAPI", "Gemini", "RAG", "MySQL"],
    image: images.data,
  },
  {
    name: "AIoT Human Activity Recognition",
    tag: "Academic Project · 2026",
    description:
      "PAMAP2 activity-recognition workflow με MongoDB ingestion, signal preprocessing, windowing, feature engineering, σύγκριση sensor configurations και SVM/Random Forest μοντέλα.",
    chips: ["Python", "MongoDB", "scikit-learn", "Time-Series ML"],
    image: images.ai,
  },
  {
    name: "BigQuery Forecasting Pipeline",
    tag: "Professional project · 2025",
    description:
      "Airflow-ready forecasting scripts για BigQuery datasets, schema detection, time-series validation, ARIMA PLUS forecasts και Looker-ready views.",
    chips: ["Python", "Airflow", "BigQuery ML", "ARIMA PLUS"],
    image: images.ai,
  },
  {
    name: "Parallel Big Data Scaling",
    tag: "Academic Project · 2026",
    description:
      "Υλοποίηση standard και min-max scaling για μεγάλα binary datasets με serial C, SIMD, OpenMP και CUDA εκδόσεις, generated benchmarks και NumPy-based correctness checks.",
    chips: ["C", "CUDA", "SIMD", "OpenMP", "NumPy"],
    image: images.systems,
  },
  {
    name: "Data Mining IDS",
    tag: "Academic Project · 2026",
    description:
      "EDA και ML pipeline για intrusion detection με data cleaning, feature selection, binary attack detection και multiclass attack-family classification.",
    chips: ["Python", "scikit-learn", "Pandas", "Random Forest"],
    image: images.security,
  },
  {
    name: "Open Courses Aggregator",
    tag: "Academic Project · 2026",
    description:
      "Full-stack course-catalog aggregation και analytics platform με React frontend, Express API, MongoDB storage και Spark-based ML/analytics jobs.",
    chips: ["React", "TypeScript", "Express", "MongoDB", "PySpark"],
    image: images.systems,
  },
];

export const gallery = [
  { image: images.code, alt: "Χώρος εργασίας software development" },
  { image: images.security, alt: "Cybersecurity monitoring interface" },
  { image: images.ai, alt: "Απεικόνιση τεχνητής νοημοσύνης" },
  { image: images.data, alt: "Data analytics dashboard" },
  { image: images.systems, alt: "Server infrastructure" },
];

export const experiences = [
  {
    icon: "AI",
    title: "Software Engineer",
    period: "Ιουν 2025 - Δεκ 2025 · Ιουλ 2026 - σήμερα",
    periods: ["Ιουν 2025 - Δεκ 2025", "Ιουλ 2026 - σήμερα"],
    eyebrow: "Full-stack · AI · Data systems",
    description:
      "Συμμετοχή σε production-oriented εφαρμογές, AI/data studies, backend APIs, server-side logic, frontend integration, secure application development, data workflows και AI/LLM λειτουργίες.",
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
    title: "Τμήμα Μηχανικών Η/Υ και Πληροφορικής",
    period: "Οκτ 2022 - σήμερα",
    detail:
      "Πανεπιστήμιο Πατρών · Προπτυχιακές σπουδές, 5ο έτος. Κατεύθυνση: Cyber Security. Δευτερεύον αντικείμενο: Artificial Intelligence - Machine Learning.",
  },
  {
    title: "Hack The Box Academy",
    period: "2026 - σήμερα",
    detail:
      "Junior Cybersecurity Analyst Path και πρακτική εκπαίδευση με Nmap, Burp Suite, Metasploit και Linux environments.",
  },
  {
    title: "CompTIA Security+ (SY0-701)",
    period: "Σε εξέλιξη",
    detail:
      "Υποψήφιος, με προετοιμασία σε network security, IAM, risk management, cryptography και incident response.",
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
    ariaLabel: "Κύρια πλοήγηση",
    brand: "Petros Papagiannis",
  },
  hero: {
    imageAlt: "Χώρος εργασίας software engineering",
    slides: [images.hero, images.code, images.security, images.ai, images.systems],
    badge: "Cybersecurity · Software Engineering · AI",
    title: { primary: "Petros", emphasis: "Papagiannis" },
    subtitle:
      "Επίσημο portfolio για cybersecurity, secure software engineering, AI-driven systems και production-oriented software projects.",
    cta: "Δείτε έργα",
    contactCta: "Επικοινωνία",
  },
  about: {
    image: "/images/CVmeZOOM.jpg",
    imageAlt: "Πορτρέτο του Petros Papagiannis",
    label: "Προφίλ",
    title: { line1: "Σχετικά με εμένα ", emphasis: "", line2: "" },
    copy:
    " Είμαι ο Πέτρος Παπαγιάννης, φοιτητής 5ου έτους Μηχανικός Ηλεκτρονικών Υπολογιστών και Πληροφορικής στο Πανεπιστήμιο Πατρών, με κύρια εστίαση στην Κυβερνοασφάλεια, την Ασφαλή Ανάπτυξη Λογισμικού και την Τεχνητή Νοημοσύνη. Επαγγελματικά, έχω εργαστεί ως Software Engineer, συμμετέχοντας στην ανάπτυξη backend υπηρεσιών, AI-powered εφαρμογών και μελετών, RAG συστημάτων, data-driven πλατφορμών και εργαλείων αυτοματοποίησης. Η εμπειρία μου περιλαμβάνει σχεδιασμό εφαρμογών και APIs, διαχείριση δεδομένων, ανάπτυξη και deployment εφαρμογών, καθώς και ενσωμάτωση τεχνολογιών AI/LLM σε πραγματικά έργα. Παράλληλα, αναπτύσσω τις γνώσεις μου στην κυβερνοασφάλεια μέσα από hands-on penetration testing, vulnerability analysis, network και web security, καθώς και Linux-based security environments. Τα projects μου περιλαμβάνουν penetration-testing labs, IDS και machine learning, Kubernetes-based συστήματα και έρευνα στον χώρο της κυβερνοασφάλειας. Μου αρέσει να κατανοώ σε βάθος τον τρόπο λειτουργίας των συστημάτων, να εντοπίζω τρόπους βελτίωσης και ασφάλειάς τους και να δημιουργώ πρακτικές λύσεις που συνδυάζουν λογισμικό, τεχνητή νοημοσύνη και κυβερνοασφάλεια.",
    link: "Δείτε τα έργα",
  },
  destinations: {
    label: "Επιλεγμένα έργα",
    title: "Projects",
    closeLabel: "Κλείσιμο",
  },
  guide: {
    label: "Δεξιότητες",
    title: "Τεχνικό stack",
    copy:
      "Οι δεξιότητες είναι οργανωμένες όπως χρησιμοποιούνται στην πράξη: software engineering, AI/data, security και systems.",
    tabsAriaLabel: "Κατηγορίες δεξιοτήτων",
    closeLabel: "Κλείσιμο",
    fields: {
      hours: "Πλαίσιο",
      phone: "Εργαλεία",
      address: "Περιοχή",
      priceRange: "Επίπεδο",
    },
  },
  experiences: {
    label: "Εργασιακό Υπόβαθρο",
    title: "Επαγγελματική εμπειρία",
    copy:
      "Εμπειρία σε εφαρμογές παραγωγής, APIs, AI/LLM integrations και data pipelines, με συμμετοχή από το backend μέχρι το user-facing interface.",
    closeLabel: "Κλείσιμο",
  },
  travel: {
    label: "Εκπαίδευση",
    title: { line1: "Εκπαίδευση", line2: "και κατάρτιση" },
    educationTitle: "Education",
    trainingLabel: "Κατάρτιση",
    trainingTitle: "Training & Certificates",
    googleMaps: "GitHub",
    googleMapsUrl: "https://github.com/PapagiannisPetros",
    appleMaps: "Personal site",
    appleMapsUrl: "https://papagiannispetros.github.io",
    panelLabel: "Ακαδημαϊκό προφίλ",
    panelTitle: "Computer Engineering",
    highlights: [
      { value: "CEID", label: "Computer Engineering & Informatics" },
      { value: "AI/ML", label: "Δευτερεύον αντικείμενο σπουδών" },
      { value: "HTB", label: "Junior Cybersecurity Analyst Path" },
      { value: "Sec+", label: "Υποψήφιος CompTIA Security+ SY0-701" },
    ],
  },
  contact: {
    label: "Επικοινωνία",
    title: { line1: "Ας μιλήσουμε", emphasis: "" },
    copy:
      "Για cybersecurity projects, secure software engineering, AI applications ή ακαδημαϊκή συνεργασία, μπορείς να στείλεις μήνυμα απευθείας.",
    socialTitle: "Links & social",
    form: {
      subjectDefault: "Νέο μήνυμα από το personal website",
      body: {
        nameLabel: "Όνομα",
        emailLabel: "Email",
        fallbackMessage: "Θα ήθελα να επικοινωνήσουμε.",
      },
      placeholders: {
        name: "Όνομα",
        email: "Email",
        subject: "Θέμα",
        message: "Μήνυμά σας...",
      },
      submit: "Αποστολή",
      sent: "Δημιουργήθηκε draft email για αποστολή.",
    },
  },
  gallery: {
    ariaLabel: "Gallery επαγγελματικής κατεύθυνσης",
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
      "Security tooling, networking, penetration-testing methodology και βασικά security foundations από το CV.",
    image: images.security,
    groups: [
      {
        title: "Security",
        items: [
          {
            name: "Cybersecurity Tooling",
            description: "Nmap, Wireshark, Burp Suite και Metasploit για reconnaissance, traffic analysis, web testing και exploitation labs.",
            image: images.security,
          },
          {
            name: "Security Testing & Analysis",
            description: "Reconnaissance, enumeration, vulnerability analysis, penetration testing, threat modeling και IDS workflows.",
            image: images.lab,
          },
        ],
      },
      {
        title: "Foundations",
        items: [
          {
            name: "Networking & Protocols",
            description: "TCP/IP, DNS, DHCP, VLANs, VPN, TLS/SSL και Kafka/Redpanda protocol experience.",
            image: images.systems,
          },
          {
            name: "Cryptography & Security Foundations",
            description: "Hashing, symmetric/asymmetric cryptography, PKI και digital certificates.",
            image: images.security,
          },
          {
            name: "Operating Systems",
            description: "Linux environments όπως Ubuntu, Debian και Kali, μαζί με Windows και QEMU/KVM virtualization.",
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
      "Programming, backend APIs, web interfaces και delivery tooling για production-oriented projects.",
    image: images.code,
    groups: [
      {
        title: "Development",
        items: [
          {
            name: "Programming & Scripting",
            description: "Python, C, C++, Bash, PowerShell, PHP, JavaScript, TypeScript, C# και Java.",
            image: images.code,
          },
          {
            name: "Backend & APIs",
            description: "FastAPI, Node.js, Express, REST APIs, authentication και sessions.",
            image: images.systems,
          },
          {
            name: "Web & UI Technologies",
            description: "React, Next.js, Streamlit, HTML5, CSS3, Bootstrap και responsive interface work.",
            image: images.code,
          },
        ],
      },
      {
        title: "Delivery",
        items: [
          {
            name: "Platforms, DevOps & Tooling",
            description: "Git, GitHub, CI/CD pipelines, VS Code, Jupyter Notebook, Makefile και Vercel.",
            image: images.systems,
          },
          {
            name: "Academic Foundations & Systems Knowledge",
            description: "Data structures and algorithms, operating systems, computer networks, distributed systems και software engineering.",
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
      "AI/LLM systems, data science, databases, forecasting, big-data processing και analytics workflows.",
    image: images.ai,
    groups: [
      {
        title: "AI & ML",
        items: [
          {
            name: "AI/LLM Systems",
            description: "Gemini, RAG, prompting, input validation, abuse prevention και content privacy.",
            image: images.ai,
          },
          {
            name: "Data Science, ML & Forecasting",
            description: "PyTorch, scikit-learn, Pandas, NumPy, Prophet, BigQuery ML και ARIMA PLUS.",
            image: images.ai,
          },
          {
            name: "Mathematics for ML & AI",
            description: "Linear algebra, probability theory, statistics, optimization και calculus.",
            image: images.systems,
          },
        ],
      },
      {
        title: "Data",
        items: [
          {
            name: "Databases & Data Stores",
            description: "MySQL, SQLite, MongoDB και BigQuery για application data, analytics και project storage.",
            image: images.data,
          },
          {
            name: "Big Data, Streaming & Analytics",
            description: "Spark, PySpark, Spark Structured Streaming, Airflow, Looker και data visualization.",
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
      "Systems, parallel programming, cloud-native observability και algorithmic foundations από academic/project work.",
    image: images.systems,
    groups: [
      {
        title: "Systems",
        items: [
          {
            name: "Parallel, GPU & Systems Programming",
            description: "CUDA, SIMD, OpenMP, MPI, multithreading, POSIX Threads, IPC και system calls.",
            image: images.systems,
          },
          {
            name: "Cloud-Native & Observability",
            description: "Docker, Docker Compose, Kubernetes, Argo Workflows, Prometheus και Grafana.",
            image: images.systems,
          },
        ],
      },
      {
        title: "Algorithms",
        items: [
          {
            name: "Algorithms & Data Structures",
            description: "R-trees, k-d Trees, LSH, range queries και feature engineering.",
            image: images.systems,
          },
        ],
      },
    ],
  },
];
