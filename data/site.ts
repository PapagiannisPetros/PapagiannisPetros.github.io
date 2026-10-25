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
  { value: "HTB", label: "2 πιστοποιητικά κατάρτισης" },
  { value: "Cisco", label: "Junior Cybersecurity Analyst · Σε εξέλιξη" },
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
    name: "Linux Defense Lab",
    tag: "Ακαδημαϊκό έργο · 2026 - σήμερα",
    description:
      "Debian VM lab για Linux hardening, αμυντική παρακολούθηση και ελέγχους ασφάλειας δικτύου. Εστίαση σε firewalling, SSH hardening, ανάλυση logs και ασφάλεια υπηρεσιών με iptables, nftables, tcpdump, fail2ban και auditd.",
    chips: ["Debian", "Linux Hardening", "SOC", "Firewalling", "Logging", "Monitoring"],
    image: images.lab,
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
    period: "2026 | Ολοκληρώθηκε — Αποκτήθηκαν πιστοποιητικά",
    detail: "",
    paths: [
      {
        title: "Junior Cybersecurity Analyst",
        detail: "Enumeration, αξιολόγηση ευπαθειών, exploitation με Metasploit και privilege escalation.",
      },
      {
        title: "SOC Analyst",
        detail: "Διερεύνηση σε SIEM (Splunk, Elastic Stack), IDS/IPS (Suricata, Snort), ανάλυση δικτύου (Zeek, Wireshark), threat hunting, digital forensics και incident handling.",
      },
    ],
  },
  {
    title: "Cisco Networking Academy",
    period: "2026 - σήμερα · Σε εξέλιξη",
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
      "Παρακολούθηση ασφάλειας, ανίχνευση απειλών, incident response, security testing, systems και AI/ML.",
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
    trainingTitle: "Πιστοποιήσεις & Κατάρτιση",
    googleMaps: "GitHub",
    googleMapsUrl: "https://github.com/PapagiannisPetros",
    appleMaps: "Personal site",
    appleMapsUrl: "https://papagiannispetros.github.io",
    panelLabel: "Ακαδημαϊκό προφίλ",
    panelTitle: "Computer Engineering",
    highlights: [
      { value: "CEID", label: "Computer Engineering & Informatics" },
      { value: "AI/ML", label: "Δευτερεύον αντικείμενο σπουδών" },
      { value: "HTB", label: "Junior Cybersecurity Analyst & SOC Analyst · Ολοκληρώθηκαν" },
      { value: "Cisco", label: "Junior Cybersecurity Analyst · Σε εξέλιξη" },
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
    label: "Defensive Security",
    intro: "Παρακολούθηση ασφάλειας, ανίχνευση απειλών, διαχείριση περιστατικών, ψηφιακή εγκληματολογία και ανάλυση κακόβουλου λογισμικού.",
    image: images.security,
    groups: [
      {
        title: "SIEM & Security Monitoring",
        items: [
          {
            name: "Splunk (SPL)",
            description: "Διερεύνηση συμβάντων SIEM και αναζητήσεις ασφαλείας με SPL.",
            image: images.security,
          },
          {
            name: "Elastic Stack · Kibana · KQL",
            description: "Παρακολούθηση ασφάλειας και διερεύνηση logs με Kibana και KQL.",
            image: images.security,
          },
          {
            name: "Wazuh · Alert Triage",
            description: "Παρακολούθηση ασφάλειας και αξιολόγηση ειδοποιήσεων.",
            image: images.security,
          },
        ],
      },
      {
        title: "Threat Hunting & Detection",
        items: [
          {
            name: "MITRE ATT&CK · IOC/TTP Analysis",
            description: "Threat hunting με δείκτες παραβίασης και ανάλυση τακτικών, τεχνικών και διαδικασιών επιτιθέμενων.",
            image: images.security,
          },
          {
            name: "YARA · Sigma",
            description: "Ανάπτυξη και επικύρωση κανόνων ανίχνευσης.",
            image: images.security,
          },
        ],
      },
      {
        title: "Network Analysis & Defense",
        items: [
          {
            name: "Wireshark · tcpdump · TShark",
            description: "Καταγραφή πακέτων και ανάλυση PCAP.",
            image: images.security,
          },
          {
            name: "Zeek · Suricata · Snort",
            description: "Ανάλυση δικτυακής κίνησης και παρακολούθηση IDS/IPS.",
            image: images.security,
          },
          {
            name: "iptables · NAT",
            description: "Κανόνες firewall και μετάφραση διευθύνσεων δικτύου.",
            image: images.security,
          },
        ],
      },
      {
        title: "Windows & Active Directory Security",
        items: [
          {
            name: "Windows Event Logs · Sysmon · ETW",
            description: "Τηλεμετρία ασφάλειας Windows και ανάλυση συμβάντων.",
            image: images.security,
          },
          {
            name: "Kerberos · NTLM",
            description: "Πρωτόκολλα αυθεντικοποίησης και ανίχνευση επιθέσεων σε Active Directory.",
            image: images.security,
          },
          {
            name: "Credential Dumping · Lateral Movement",
            description: "Ανάλυση δραστηριότητας υποκλοπής διαπιστευτηρίων και πλευρικής μετακίνησης.",
            image: images.security,
          },
        ],
      },
      {
        title: "Incident Handling & Reporting",
        items: [
          {
            name: "Containment · IOC Enrichment",
            description: "Περιορισμός περιστατικών και εμπλουτισμός δεικτών παραβίασης.",
            image: images.security,
          },
          {
            name: "TheHive · VirusTotal",
            description: "Διαχείριση περιστατικών και διερεύνηση δεικτών.",
            image: images.security,
          },
          {
            name: "Incident Timelines · Evidence-Based Reporting",
            description: "Ανασύνθεση χρονολογίου περιστατικών και τεκμηρίωση ευρημάτων με αποδεικτικά στοιχεία.",
            image: images.security,
          },
        ],
      },
      {
        title: "Digital Forensics",
        items: [
          {
            name: "Disk & Memory Analysis",
            description: "Διερεύνηση δίσκου και μνήμης με συσχέτιση τεκμηρίων Windows.",
            image: images.security,
          },
          {
            name: "FTK Imager · KAPE",
            description: "Λήψη εικόνων δίσκου και συλλογή ψηφιακών τεκμηρίων.",
            image: images.security,
          },
          {
            name: "Velociraptor · Volatility 3",
            description: "Συλλογή τεκμηρίων από endpoints και ανάλυση μνήμης.",
            image: images.security,
          },
        ],
      },
      {
        title: "Malware & Script Analysis",
        items: [
          {
            name: "Static/Dynamic Analysis · PE Inspection",
            description: "Στατική και δυναμική ανάλυση κακόβουλου λογισμικού και εξέταση αρχείων PE.",
            image: images.security,
          },
          {
            name: "Ghidra · x64dbg · Procmon",
            description: "Reverse engineering, debugging και ανάλυση δραστηριότητας διεργασιών.",
            image: images.security,
          },
          {
            name: "JavaScript Deobfuscation",
            description: "Αποκωδικοποίηση και ανάλυση συγκεκαλυμμένου κώδικα JavaScript.",
            image: images.security,
          },
        ],
      },
    ],
  },
  {
    id: "foundations",
    label: "Security Foundations",
    intro: "Έλεγχοι ασφάλειας, λειτουργικά συστήματα, εικονικοποίηση, δίκτυα και κρυπτογραφία.",
    image: images.lab,
    groups: [
      {
        title: "Security Testing",
        items: [
          {
            name: "Burp Suite · Metasploit",
            description: "Έλεγχος ασφάλειας web εφαρμογών και ελεγχόμενο exploitation.",
            image: images.lab,
          },
          {
            name: "Reconnaissance · Enumeration",
            description: "Συλλογή πληροφοριών και απαρίθμηση hosts και υπηρεσιών.",
            image: images.lab,
          },
          {
            name: "Vulnerability Assessment · Exploitation · Privilege Escalation",
            description: "Αξιολόγηση ευπαθειών, exploitation και κλιμάκωση προνομίων σε εργαστηριακά περιβάλλοντα.",
            image: images.lab,
          },
        ],
      },
      {
        title: "Operating Systems & Virtualization",
        items: [
          {
            name: "Linux · Ubuntu · Debian · Kali",
            description: "Περιβάλλοντα Linux για ελέγχους ασφάλειας και αμυντικά εργαστήρια.",
            image: images.lab,
          },
          {
            name: "Windows · QEMU/KVM",
            description: "Περιβάλλοντα Windows και εργαστήρια εικονικών μηχανών με QEMU/KVM.",
            image: images.lab,
          },
        ],
      },
      {
        title: "Networking & Protocols",
        items: [
          {
            name: "TCP/IP · DNS · DHCP",
            description: "Δικτυακή επικοινωνία, επίλυση ονομάτων και ρύθμιση hosts.",
            image: images.lab,
          },
          {
            name: "HTTP/S · SMB · LDAP",
            description: "Πρωτόκολλα web, διαμοιρασμού αρχείων και υπηρεσιών καταλόγου.",
            image: images.lab,
          },
          {
            name: "VLANs · VPN · TLS",
            description: "Δικτυακή τμηματοποίηση, εικονικά ιδιωτικά δίκτυα και κρυπτογραφημένη μεταφορά.",
            image: images.lab,
          },
        ],
      },
      {
        title: "Cryptography & Authentication",
        items: [
          {
            name: "Hashing · Symmetric/Asymmetric Cryptography",
            description: "Hashing και αρχές συμμετρικής και ασύμμετρης κρυπτογραφίας.",
            image: images.lab,
          },
          {
            name: "PKI · Digital Certificates · AD CS",
            description: "Υποδομή δημόσιου κλειδιού, ψηφιακά πιστοποιητικά και Active Directory Certificate Services.",
            image: images.lab,
          },
        ],
      },
    ],
  },
  {
    id: "systems",
    label: "Systems & DevOps",
    intro: "Παράλληλος προγραμματισμός, containers, workflows παράδοσης και παρατηρησιμότητα.",
    image: images.systems,
    groups: [
      {
        title: "Parallel & Systems Programming",
        items: [
          {
            name: "CUDA · SIMD",
            description: "Επιτάχυνση GPU και διανυσματικοί υπολογισμοί.",
            image: images.systems,
          },
          {
            name: "OpenMP · MPI",
            description: "Παράλληλος προγραμματισμός κοινής μνήμης και κατανεμημένων συστημάτων.",
            image: images.systems,
          },
          {
            name: "Multithreading · POSIX Threads · IPC",
            description: "Νήματα, συγχρονισμός και επικοινωνία μεταξύ διεργασιών.",
            image: images.systems,
          },
        ],
      },
      {
        title: "Containers, DevOps & Observability",
        items: [
          {
            name: "Docker · Kubernetes",
            description: "Εφαρμογές σε containers και ενορχήστρωση containers.",
            image: images.systems,
          },
          {
            name: "Argo Workflows · CI/CD",
            description: "Ενορχήστρωση workflows και συνεχής ενσωμάτωση και παράδοση.",
            image: images.systems,
          },
          {
            name: "Prometheus · Grafana",
            description: "Συλλογή μετρικών, παρακολούθηση και dashboards.",
            image: images.systems,
          },
          {
            name: "Git · GitHub · Makefile",
            description: "Έλεγχος εκδόσεων, συνεργασία και αυτοματοποίηση build.",
            image: images.systems,
          },
        ],
      },
    ],
  },
  {
    id: "ai-data",
    label: "AI & ML",
    intro: "Συστήματα LLM, μηχανική μάθηση, κατανεμημένη επεξεργασία και προβλέψεις.",
    image: images.ai,
    groups: [
      {
        title: "LLM Systems & AI/ML",
        items: [
          {
            name: "Gemini · RAG · Prompting",
            description: "Ενσωμάτωση LLM, παραγωγή με ανάκτηση πληροφορίας και σχεδιασμός prompts.",
            image: images.ai,
          },
          {
            name: "PyTorch · scikit-learn",
            description: "Μοντέλα μηχανικής μάθησης, ταξινόμηση και πειραματισμός.",
            image: images.ai,
          },
          {
            name: "PySpark",
            description: "Κατανεμημένη επεξεργασία δεδομένων και workflows μηχανικής μάθησης.",
            image: images.ai,
          },
          {
            name: "Prophet · ARIMA PLUS",
            description: "Πρόβλεψη χρονοσειρών για analytics και KPIs.",
            image: images.ai,
          },
        ],
      },
    ],
  },
];
