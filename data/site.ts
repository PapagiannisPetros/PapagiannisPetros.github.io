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
  { label: "Spotify", href: "https://open.spotify.com/user/313dibgyp2m6l5h5xfowjvlrhizq?si=c375ee2af1024477", value: "Petros Papagiannis" },
  { label: "Instagram", href: "https://www.instagram.com/papagiannis._._", value: "@papagiannis._._" },
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
      "Πρακτικά security skills οργανωμένα σε εργαλεία, testing methodology, network foundations και security fundamentals.",
    image: images.security,
    groups: [
      {
        title: "Offensive Tools",
        items: [
          {
            name: "Nmap",
            description: "Host discovery, service enumeration και network reconnaissance.",
            image: images.security,
          },
          {
            name: "Burp Suite",
            description: "Web application testing, proxy inspection και request manipulation.",
            image: images.security,
          },
          {
            name: "Metasploit",
            description: "Controlled exploitation practice μέσα σε isolated lab environments.",
            image: images.lab,
          },
          {
            name: "Wireshark",
            description: "Packet capture, protocol inspection και traffic analysis.",
            image: images.systems,
          },
        ],
      },
      {
        title: "Testing Methods",
        items: [
          {
            name: "Reconnaissance",
            description: "Structured target profiling πριν από βαθύτερο technical testing.",
            image: images.security,
          },
          {
            name: "Vulnerability Analysis",
            description: "Εντοπισμός, validation και prioritization αδυναμιών σε systems και apps.",
            image: images.lab,
          },
          {
            name: "Penetration Testing",
            description: "Hands-on testing workflow από enumeration μέχρι reporting.",
            image: images.security,
          },
          {
            name: "Threat Modeling",
            description: "Χαρτογράφηση attack paths, assets, trust boundaries και countermeasures.",
            image: images.systems,
          },
        ],
      },
      {
        title: "Foundations",
        items: [
          {
            name: "TCP/IP",
            description: "Core networking model για analysis, routing και troubleshooting.",
            image: images.systems,
          },
          {
            name: "TLS / SSL",
            description: "Secure transport concepts, certificates και encrypted communication.",
            image: images.security,
          },
          {
            name: "Cryptography",
            description: "Hashing, symmetric/asymmetric crypto, PKI και digital certificates.",
            image: images.security,
          },
          {
            name: "Linux / Kali",
            description: "Security-oriented Linux environments με QEMU/KVM virtualization.",
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
      "Languages, APIs, web interfaces και engineering workflow για production-oriented projects.",
    image: images.code,
    groups: [
      {
        title: "Languages",
        items: [
          {
            name: "Python",
            description: "Backend services, automation, data workflows και ML experiments.",
            image: images.code,
          },
          {
            name: "TypeScript / JavaScript",
            description: "Frontend interfaces, API integrations και full-stack application logic.",
            image: images.code,
          },
          {
            name: "C / C++",
            description: "Systems-oriented programming, performance work και academic foundations.",
            image: images.systems,
          },
          {
            name: "Bash / PowerShell",
            description: "Scripting, local automation και developer workflow utilities.",
            image: images.lab,
          },
        ],
      },
      {
        title: "Application",
        items: [
          {
            name: "FastAPI",
            description: "Python APIs, service endpoints και model-serving backends.",
            image: images.systems,
          },
          {
            name: "Node.js / Express",
            description: "REST APIs, server-side logic και session-based applications.",
            image: images.systems,
          },
          {
            name: "React / Next.js",
            description: "Component-based interfaces, routing και production web delivery.",
            image: images.code,
          },
          {
            name: "Streamlit",
            description: "Γρήγορα dashboards και data applications για professional workflows.",
            image: images.data,
          },
        ],
      },
      {
        title: "Delivery",
        items: [
          {
            name: "Git / GitHub",
            description: "Version control, collaboration και project history management.",
            image: images.systems,
          },
          {
            name: "CI/CD",
            description: "Automated checks και deployment-oriented engineering workflows.",
            image: images.systems,
          },
          {
            name: "Testing & Documentation",
            description: "Validation, handoff notes και maintainable project documentation.",
            image: images.code,
          },
          {
            name: "Vercel",
            description: "Static και frontend deployment για web projects.",
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
      "LLM integration, machine learning, analytics και data infrastructure από professional και academic projects.",
    image: images.ai,
    groups: [
      {
        title: "LLM Systems",
        items: [
          {
            name: "Gemini",
            description: "LLM integration για chatbots, summaries και AI-assisted workflows.",
            image: images.ai,
          },
          {
            name: "RAG",
            description: "Retrieval-augmented generation με metadata και knowledge-base context.",
            image: images.data,
          },
          {
            name: "Prompting",
            description: "Instruction design, task framing και ασφαλέστερες model interactions.",
            image: images.ai,
          },
          {
            name: "Input Validation",
            description: "Abuse prevention, privacy-aware handling και ασφαλέστερα AI interfaces.",
            image: images.security,
          },
        ],
      },
      {
        title: "ML & Analytics",
        items: [
          {
            name: "PyTorch",
            description: "Model experimentation και ML pipeline work.",
            image: images.ai,
          },
          {
            name: "scikit-learn",
            description: "Classification, feature selection και time-series ML workflows.",
            image: images.ai,
          },
          {
            name: "Pandas / NumPy",
            description: "Data cleaning, transformation, validation και numerical processing.",
            image: images.data,
          },
          {
            name: "Prophet / ARIMA PLUS",
            description: "Forecasting workflows για KPI και time-series datasets.",
            image: images.systems,
          },
        ],
      },
      {
        title: "Data Platforms",
        items: [
          {
            name: "MySQL / SQLite",
            description: "Relational storage για applications, chat history και audit workflows.",
            image: images.data,
          },
          {
            name: "MongoDB",
            description: "Document storage για analytics και sensor-data projects.",
            image: images.data,
          },
          {
            name: "BigQuery",
            description: "Cloud analytics, forecasting views και schema-aware data processing.",
            image: images.data,
          },
          {
            name: "Spark / PySpark",
            description: "Big-data processing και analytics pipelines.",
            image: images.systems,
          },
          {
            name: "Airflow / Looker",
            description: "Workflow orchestration και analytics-ready reporting views.",
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
      "Cloud-native deployment, observability, parallel programming και algorithmic foundations.",
    image: images.systems,
    groups: [
      {
        title: "Cloud Native",
        items: [
          {
            name: "Docker",
            description: "Containerized application packaging και local deployment workflows.",
            image: images.systems,
          },
          {
            name: "Kubernetes",
            description: "Container orchestration και resource-usage forecasting projects.",
            image: images.systems,
          },
          {
            name: "Prometheus / Grafana",
            description: "Metrics collection, monitoring data και dashboard observability.",
            image: images.data,
          },
          {
            name: "Argo Workflows",
            description: "DAG-based workflow execution για ML και systems pipelines.",
            image: images.systems,
          },
        ],
      },
      {
        title: "Parallel",
        items: [
          {
            name: "CUDA",
            description: "GPU acceleration για numerical processing και scaling workloads.",
            image: images.systems,
          },
          {
            name: "OpenMP / MPI",
            description: "Shared-memory και distributed parallel programming patterns.",
            image: images.systems,
          },
          {
            name: "SIMD",
            description: "Vectorized computation για performance-oriented data processing.",
            image: images.code,
          },
          {
            name: "POSIX Threads",
            description: "Threading, synchronization και low-level process coordination.",
            image: images.systems,
          },
        ],
      },
      {
        title: "Algorithms",
        items: [
          {
            name: "R-trees",
            description: "Spatial indexing για multidimensional data structures.",
            image: images.systems,
          },
          {
            name: "k-d Trees / LSH",
            description: "Similarity search, multidimensional lookup και range-query foundations.",
            image: images.systems,
          },
          {
            name: "Feature Engineering",
            description: "Μετατροπή raw signals και datasets σε model-ready features.",
            image: images.systems,
          },
        ],
      },
    ],
  },
];
