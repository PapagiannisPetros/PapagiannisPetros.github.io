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
  { value: "8.58/10", label: "Τρέχων βαθμός στο CEID" },
  { value: "2025", label: "Εμπειρία σε software, AI και data" },
];

export const destinations = [
  {
    name: "AI Βοηθός BI",
    tag: "SMARTS · 2025",
    description:
      "BI chatbot με φυσική γλώσσα και LLMs για ερωτήσεις σε dashboards και παραγωγή οπτικών insights σε πραγματικό χρόνο.",
    chips: ["NLQ", "LLMs", "Dashboards", "Analytics"],
    image: images.ai,
    featured: true,
  },
  {
    name: "RAG Chatbot",
    tag: "SMARTS · 2025",
    description:
      "Chatbot με RAG και vector embeddings για απαντήσεις με βάση το πλαίσιο, προτάσεις και ανάκτηση γνώσης σε πραγματικό χρόνο.",
    chips: ["RAG", "Embeddings", "Retrieval", "Knowledge Base"],
    image: images.lab,
  },
  {
    name: "ML Forecasting",
    tag: "SMARTS · 2025",
    description:
      "Pipeline χρονοσειρών με Airflow, BigQuery, προεπεξεργασία, εκπαίδευση μοντέλων και αυτοματοποιημένες προβλέψεις.",
    chips: ["Airflow", "BigQuery", "Time Series", "Forecasting"],
    image: images.data,
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
    name: "Penetration Testing Lab",
    tag: "Personal · 2026 - ongoing",
    description:
      "Απομονωμένο VM lab με Kali και ευάλωτους στόχους για reconnaissance, scanning, exploitation και privilege escalation.",
    chips: ["Kali", "Nmap", "Burp Suite", "Metasploit"],
    image: images.security,
  },
  {
    name: "UAV Cybersecurity",
    tag: "CEID · 2026",
    description:
      "Ανάλυση απειλών σε επικοινωνία, πλοήγηση, αισθητήρες και ground control στρατιωτικών UAV, μαζί με μέτρα προστασίας.",
    chips: ["Threat Modeling", "UAV", "Security Research", "Countermeasures"],
    image: images.code,
  },
  {
    name: "Public Services Chatbot",
    tag: "SMARTS · 2025",
    description:
      "Conversational system με NLQ/CAG, analytics και αυτοματοποιημένες ενημερώσεις knowledge base για ακριβείς απαντήσεις.",
    chips: ["NLQ", "CAG", "Analytics", "Automation"],
    image: images.ai,
  },
  {
    name: "Άλλα έργα",
    tag: "CEID · Personal",
    description:
      "Multi-Dimensional Indexing με k-d trees και LSH, Open Courses Aggregator με React/PySpark, Thesis Management System με Node.js/MySQL και UniBook desktop app σε Python.",
    chips: ["React", "PySpark", "Node.js", "Python"],
    image: images.code,
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
    title: "Software Engineer · S.M.A.R.T.S.",
    period: "Jun 2025 - Dec 2025",
    eyebrow: "Full-stack · AI · Data systems",
    description:
      "Στη S.M.A.R.T.S. IKE εργάστηκα σε εφαρμογές παραγωγής, συνδυάζοντας backend APIs, server-side logic, frontend integrations και responsive UI με scalable architecture, data workflows και AI-driven λειτουργίες.",
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
    title: "Τμήμα Μηχανικών Η/Υ και Πληροφορικής",
    period: "Οκτ 2022 - σήμερα",
    detail:
      "Πανεπιστήμιο Πατρών · Προπτυχιακές σπουδές. Τρέχων βαθμός: 8.58/10. Εισαγωγή 4ος μέσω Πανελλαδικών με 17,850/20,000. Κατεύθυνση: Cyber Security. Δευτερεύον αντικείμενο: AI - Machine Learning.",
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
  {
    title: "Σχολική εκπαίδευση",
    period: "Σεπ 2016 - Ιουν 2022",
    detail:
      "Λύκειο, Κοζάνη · απολυτήριο 20/20. Γυμνάσιο, Κοζάνη · βαθμός 20/20.",
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
    ariaLabel: "Κύρια πλοήγηση",
    brand: "Petros Papagiannis",
  },
  hero: {
    imageAlt: "Χώρος εργασίας software engineering",
    slides: [images.hero, images.code, images.security, images.ai, images.systems],
    badge: "Cybersecurity · Software Engineering · AI",
    title: { primary: "Petros", emphasis: "Papagiannis" },
    subtitle:
      "Προσωπικό portfolio για cybersecurity, secure software engineering, AI-driven systems και hands-on security research.",
    cta: "Δείτε έργα",
    contactCta: "Επικοινωνία",
  },
  about: {
    image: "/images/CVmeZOOM.jpg",
    imageAlt: "Πορτρέτο του Petros Papagiannis",
    label: "Προφίλ",
    title: { line1: "Ποιος είναι ο", emphasis: "Petros Papagiannis", line2: "" },
    copy:
      "Είμαι προπτυχιακός φοιτητής Μηχανικών Η/Υ και Πληροφορικής στο Πανεπιστήμιο Πατρών, με κατεύθυνση το cybersecurity. Με ενδιαφέρει να καταλαβαίνω πώς λειτουργούν τα συστήματα κάτω από την επιφάνεια, πού εμφανίζουν αδυναμίες και πώς μπορούν να σχεδιαστούν με μεγαλύτερη ασφάλεια από την αρχή. Ασχολούμαι με penetration testing, vulnerability analysis, threat modeling και security research, χτίζοντας πρακτική εμπειρία μέσα από Hack The Box training, απομονωμένα VM labs και εργαλεία όπως Kali Linux, Nmap, Burp Suite και Metasploit. Παράλληλα, η εμπειρία μου σε full-stack development, data pipelines και AI-driven applications με βοηθά να βλέπω την ασφάλεια μέσα στο πραγματικό πλαίσιο ενός προϊόντος: από τα APIs και το infrastructure μέχρι το user experience και τα data flows. Στόχος μου είναι να εξελίσσομαι ως engineer που μπορεί να συνδυάζει καθαρή υλοποίηση, τεχνική περιέργεια και security-first τρόπο σκέψης.",
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
      "Στη S.M.A.R.T.S. IKE εργάστηκα σε εφαρμογές παραγωγής, APIs, AI/LLM integrations και data pipelines, με συμμετοχή από το backend μέχρι το user-facing interface.",
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
      { value: "8.58/10", label: "Τρέχων βαθμός, Πανεπιστήμιο Πατρών" },
      { value: "4ος", label: "Σειρά εισαγωγής μέσω Πανελλαδικών" },
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
    id: "engineering",
    label: "Software Engineering",
    intro:
      "Full-stack εφαρμογές, APIs, responsive interfaces και προϊόντα με καθαρή αρχιτεκτονική.",
    image: images.code,
    groups: [
      {
        title: "Frontend",
        items: [
          {
            name: "React / TypeScript",
            description: "Δυναμικά interfaces, UI integration, usability testing και responsive εμπειρίες.",
            image: images.code,
          },
          {
            name: "HTML5 / CSS3 / Bootstrap",
            description: "Καθαρή δομή, προσεγμένο styling και γρήγορο prototyping για web projects.",
            image: images.code,
          },
        ],
      },
      {
        title: "Backend",
        items: [
          {
            name: "Node.js / PHP / Python",
            description: "Backend APIs, server-side logic, runtime environments και σύνδεση με βάσεις δεδομένων.",
            image: images.systems,
          },
          {
            name: "Databases",
            description: "MySQL, SQLite και MongoDB για structured application data και project storage.",
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
      "LLM-powered προϊόντα, RAG/NLQ συστήματα, ML forecasting και data pipelines από ingestion μέχρι visualization.",
    image: images.ai,
    groups: [
      {
        title: "LLMs",
        items: [
          {
            name: "GPT / Gemini integration",
            description: "Conversational AI, prompt engineering, fine-tuning, RAG και ανάκτηση σε πραγματικό χρόνο.",
            image: images.ai,
          },
          {
            name: "NLQ systems",
            description: "Ερωτήματα φυσικής γλώσσας για dashboards, analytics και knowledge bases δημόσιων υπηρεσιών.",
            image: images.data,
          },
        ],
      },
      {
        title: "Machine Learning",
        items: [
          {
            name: "TensorFlow / PyTorch / scikit-learn",
            description: "ML workflows με Pandas, NumPy, forecasting και πειραματισμό μοντέλων.",
            image: images.ai,
          },
          {
            name: "Airflow / BigQuery / PySpark",
            description: "ETL pipelines, DAG workflows, big data processing και αυτοματοποιημένο forecasting.",
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
      "Πρακτική εκπαίδευση security με έμφαση σε reconnaissance, vulnerability analysis, exploitation και secure foundations.",
    image: images.security,
    groups: [
      {
        title: "Offensive tools",
        items: [
          {
            name: "Nmap / Burp Suite / Metasploit",
            description: "Enumeration, web testing, exploitation labs και πρακτικός κύκλος επίθεσης.",
            image: images.security,
          },
          {
            name: "Kali Linux labs",
            description: "Απομονωμένα VM environments με vulnerable targets για πρακτική εξάσκηση.",
            image: images.lab,
          },
        ],
      },
      {
        title: "Foundations",
        items: [
          {
            name: "Network security",
            description: "TCP/IP, DNS, DHCP, VLANs, VPN, TLS/SSL και threat modeling.",
            image: images.systems,
          },
          {
            name: "Cryptography",
            description: "Hashing, symmetric/asymmetric cryptography, PKI και digital certificates.",
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
      "Βασικές γνώσεις computer engineering σε OS, distributed systems, parallelism, concurrency και DevOps tooling.",
    image: images.systems,
    groups: [
      {
        title: "Low-level & parallel",
        items: [
          {
            name: "C / C++ / Java / C#",
            description: "Programming foundations με systems thinking και ισχυρό ακαδημαϊκό υπόβαθρο.",
            image: images.code,
          },
          {
            name: "MPI / OpenMP / POSIX Threads",
            description: "Parallelism, multithreading, shared-memory parallelism και process coordination.",
            image: images.systems,
          },
        ],
      },
      {
        title: "Platforms",
        items: [
          {
            name: "Linux / Docker / CI/CD",
            description: "Ubuntu, Debian, Kali, Git, GitHub, Docker και deployment workflows.",
            image: images.lab,
          },
          {
            name: "Kubernetes / Prometheus / Grafana",
            description: "Containerized systems, monitoring data και pipelines πρόβλεψης πόρων.",
            image: images.systems,
          },
        ],
      },
    ],
  },
];
