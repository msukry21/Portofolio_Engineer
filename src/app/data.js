/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://skillicons.dev (Skill Icons to show skills)

:root {
  --background: 18 24 32;
  --foreground: 225 228 232;
  --muted: 120 130 145;
  --accent: 0 229 255; #00E5FF
}

*/

// ============================================================
// PROJECTS — EPCC Engineering Projects
// ============================================================

export const projectsData = [
  {
    id: 1,
    slug: "berau-coal-mining",
    name: "Berau Coal Mining EPCC",
    description:
      "Multi-discipline EPCC for coal mining facility — SLD, control architecture, I/O list, load list, BOQ & RFQ",
    date: "2025-06-01",
    sector: "Mining",
    disciplines: ["Electrical", "Instrument", "Control"],
    role: "Designer & Engineer",
    company: "PT Bukaka Teknik Utama Tbk",
    demoLink: null,
    details: {
      overview:
        "Multi-discipline EPCC engineering package for a coal mining facility operated by Berau Coal. The project covered electrical power distribution, instrumentation systems, and control system architecture from tender through detailed design phase.",
      scope: [
        "Electrical power distribution system design including medium and low voltage networks",
        "Single Line Diagram (SLD) development for the entire mining facility",
        "Control system architecture design — PLC-based with SCADA integration",
        "Instrument I/O list preparation and field device specification",
        "Electrical and instrument load list and cable schedule",
        "Bill of Quantity (BOQ) and Request for Quotation (RFQ) packages for procurement",
      ],
      deliverables: [
        "Single Line Diagram (SLD)",
        "Control System Architecture",
        "Instrument I/O List",
        "Electrical Load List",
        "Bill of Quantity (BOQ)",
        "RFQ Packages",
      ],
      tools: ["AutoCAD", "Microsoft Excel", "ETAP"],
    },
  },
  {
    id: 2,
    slug: "pertamina-epcc-tender",
    name: "Pertamina EPCC Tender",
    description:
      "Tender-phase engineering for upstream oil & gas facility — BOQ preparation and RFQ package development",
    date: "2025-03-01",
    sector: "Oil & Gas",
    disciplines: ["Electrical", "Instrument"],
    role: "Designer & Engineer",
    company: "PT Bukaka Teknik Utama Tbk",
    demoLink: null,
    details: {
      overview:
        "Tender-phase engineering support for Pertamina's upstream oil & gas EPCC project. Responsible for preparing electrical and instrumentation packages including bill of quantities and request for quotation documents aligned with owner specifications.",
      scope: [
        "Review of owner's technical specifications and scope of work",
        "Electrical and instrument material takeoff from reference documents",
        "BOQ preparation following contractor format requirements",
        "RFQ package development for vendor bid solicitation",
        "Cross-checking quantities against P&ID and equipment lists",
      ],
      deliverables: [
        "Bill of Quantity (BOQ)",
        "RFQ Packages",
        "Material Takeoff Summary",
      ],
      tools: ["Microsoft Excel", "AutoCAD"],
    },
  },
  {
    id: 3,
    slug: "power-plant-tender",
    name: "Power Plant — Tender Phase",
    description:
      "Front-end engineering and tender documentation for power generation facility",
    date: "2025-04-01",
    sector: "Power Generation",
    disciplines: ["Electrical"],
    role: "Designer & Engineer",
    company: "PT Bukaka Teknik Utama Tbk",
    demoLink: null,
    details: {
      overview:
        "Front-end engineering and tender documentation for a power generation facility. Focused on electrical system design covering power distribution, protection coordination, and equipment specification during the tender bidding phase.",
      scope: [
        "Electrical system concept design and sizing",
        "Power distribution scheme and voltage level selection",
        "Preliminary equipment specification for transformers, switchgear, and MCC",
        "Tender documentation and cost estimation support",
      ],
      deliverables: [
        "Preliminary SLD",
        "Equipment Sizing Summary",
        "Tender Technical Documents",
      ],
      tools: ["AutoCAD", "Microsoft Excel", "ETAP"],
    },
  },
  {
    id: 4,
    slug: "antam-gold-processing",
    name: "ANTAM Gold Processing Plant",
    description:
      "EPCC engineering for gold processing and refining plant — manufacturer-side electrical & automation design",
    date: "2025-02-01",
    sector: "Manufacturing",
    disciplines: ["Electrical", "Automation"],
    role: "Electrical Automation Engineer",
    company: "PT Pratama Abadi Industri",
    demoLink: null,
    details: {
      overview:
        "Manufacturer-side EPCC engineering for ANTAM's gold processing and refining plant. Handled electrical power system design and industrial automation for processing equipment, working directly from the manufacturer's engineering team.",
      scope: [
        "Electrical system design for gold processing equipment and plant utilities",
        "Automation system design for process control and monitoring",
        "Motor control and variable speed drive specification",
        "Panel design and wiring for control and power distribution",
        "On-site commissioning support and startup assistance",
      ],
      deliverables: [
        "Electrical Schematic Drawings",
        "Panel Layout & Wiring Diagrams",
        "Automation System Configuration",
        "Commissioning Reports",
      ],
      tools: ["AutoCAD", "PLC Programming Software", "Microsoft Excel"],
    },
  },
  {
    id: 5,
    slug: "biofarma-mep",
    name: "Bio Farma — Hangar & Building MEP",
    description:
      "Mechanical, electrical, and plumbing engineering for hangar and building construction",
    date: "2025-08-01",
    sector: "Infrastructure",
    disciplines: ["Electrical"],
    role: "Designer & Engineer",
    company: "PT Bukaka Teknik Utama Tbk",
    demoLink: null,
    details: {
      overview:
        "MEP (Mechanical, Electrical, and Plumbing) engineering for Bio Farma's hangar and building construction project. Responsible for the electrical discipline covering power distribution, lighting, grounding, and small power systems.",
      scope: [
        "Electrical power distribution design for building and hangar facilities",
        "Lighting design and lux level calculations",
        "Grounding and lightning protection system",
        "Small power and socket outlet layout",
        "Cable routing and tray sizing",
      ],
      deliverables: [
        "Electrical SLD",
        "Lighting Layout",
        "Power Layout",
        "Grounding System Drawing",
        "BOQ",
      ],
      tools: ["AutoCAD", "Microsoft Excel"],
    },
  },
  {
    id: 6,
    slug: "smib-simulation",
    name: "SMIB Power System Simulation",
    description:
      "Final project — Single Machine Infinite Bus power system stability analysis and web-based simulation",
    date: "2024-01-01",
    sector: "Academic",
    disciplines: ["Electrical"],
    role: "Researcher",
    company: "Universitas Andalas",
    demoLink: "https://smib-muhammad-sukrys-projects.vercel.app/",
    details: {
      overview:
        "Undergraduate final project at Universitas Andalas (Electrical Engineering). Developed a web-based simulation tool for Single Machine Infinite Bus (SMIB) power system stability analysis. The application allows users to model generator dynamics, simulate transient stability, and visualize system response to disturbances in real-time through an interactive browser interface.",
      scope: [
        "Mathematical modeling of single machine infinite bus power system",
        "Transient stability analysis and swing equation simulation",
        "Web-based interactive simulation interface development",
        "Real-time visualization of power angle, frequency, and voltage response",
        "Deployment as a publicly accessible web application",
      ],
      deliverables: [
        "Web-based SMIB Simulation Tool",
        "Final Project Report / Thesis",
        "Technical Presentation",
      ],
      tools: ["JavaScript", "Next.js", "Vercel", "MATLAB"],
    },
  },
  {
    id: 7,
    slug: "destro-iot",
    name: "Desain Teknik Elektro (DESTRO)",
    description:
      "IoT-based electrical design application — academic project combining electrical engineering with embedded systems",
    date: "2023-07-10",
    sector: "Academic",
    disciplines: ["Electrical", "Automation"],
    role: "Designer",
    company: "Universitas Andalas",
    demoLink:
      "https://muhammadsukry.wordpress.com/2024/10/09/desain-teknik-elektro-destro/",
    details: {
      overview:
        "Academic project exploring the intersection of electrical engineering and IoT (Internet of Things). Designed and implemented an IoT-based electrical system application that demonstrates embedded sensor integration, data acquisition, and remote monitoring concepts.",
      scope: [
        "Electrical system design with IoT sensor integration",
        "Embedded system programming for data acquisition",
        "Communication protocol implementation for remote monitoring",
        "Documentation and technical write-up",
      ],
      deliverables: [
        "IoT Application Prototype",
        "Technical Documentation",
        "Project Blog Post",
      ],
      tools: ["Arduino / Embedded Platform", "IoT Protocols", "WordPress"],
    },
  },
];

// ============================================================
// NAVIGATION BUTTONS
// ============================================================

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  {
    label: "Certifications",
    link: "/certifications",
    icon: "certifications",
    newTab: false,
  },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/msukry21",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-sukry-71a743172/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Curriculum Vitae",
    link: "/CV_Muhammad Sukry_Engineer.pdf",
    icon: "resume",
    newTab: true,
  },
];

// ============================================================
// ABOUT — Profile, Experience Stats, Skills by Discipline
// ============================================================

export const profileData = {
  name: "Muhammad Sukry",
  title: "EPCC Engineer",
  subtitle: "Electrical, Instrument, Control & Automation System Designer",
  bio: `EPCC engineer with hands-on experience designing electrical, instrumentation, control, and automation systems across oil & gas, mining, power generation, manufacturing, and infrastructure sectors. Currently working at PT Bukaka Teknik Utama Tbk as an Electrical Engineer, handling multi-discipline engineering from tender and FEED through detailed design. Previously delivered electrical automation engineering at a manufacturing facility. Graduated from Universitas Andalas (Electrical Engineering, 2024). Every deliverable is built on one principle: accuracy first, efficiency always.`,
  location: "Indonesia",
};

export const experienceStats = [
  { value: "2+", label: "Years of Engineering Experience" },
  { value: "4", label: "Engineering Disciplines" },
  { value: "7+", label: "Projects Delivered" },
  { value: "5", label: "Industry Sectors" },
];

// ============================================================
// WORK EXPERIENCE
// ============================================================

export const experienceData = [
  {
    company: "PT Bukaka Teknik Utama Tbk",
    role: "Electrical Engineer",
    period: "Nov 2025 — Present",
    type: "EPC Contractor",
    highlights: [
      "Multi-discipline EPCC engineering across oil & gas, mining, power, and infrastructure",
      "Tender documentation: BOQ, RFQ, technical specifications",
      "Detailed design: SLD, load list, control architecture, I/O list",
    ],
  },
  {
    company: "PT Pratama Abadi Industri",
    role: "Electrical Automation Engineer",
    period: "Jan 2025 — Nov 2025",
    type: "Owner / Manufacturer",
    highlights: [
      "Electrical and automation system design for manufacturing operations",
      "Equipment specification and vendor coordination",
      "On-site commissioning and startup support",
    ],
  },
  {
    company: "Universitas Andalas",
    role: "B.Eng. Electrical Engineering",
    period: "2020 — 2024",
    type: "Education",
    highlights: [
      "Final project: Single Machine Infinite Bus (SMIB) power system simulation",
      "Core focus: Power systems, control systems, instrumentation",
    ],
  },
];

// ============================================================
// SKILLS — Organized by Engineering Discipline
// ============================================================

export const skillCategories = [
  {
    title: "Electrical Design",
    skills: [
      "Single Line Diagram (SLD)",
      "Load Analysis & Load List",
      "Cable Sizing & Selection",
      "Voltage Drop Calculation",
      "Short Circuit Analysis",
      "Power System Protection",
      "Grounding & Lightning Protection",
      "Lighting & Small Power",
      "Motor Control Center (MCC)",
      "Switchgear & Switchboard",
    ],
  },
  {
    title: "Instrumentation",
    skills: [
      "Instrument Index & Datasheet",
      "Instrument I/O List",
      "Hook-up Drawing & Detail",
      "Instrument Selection & Specification",
      "Loop Diagram & Wiring",
      "Junction Box Layout",
      "Calibration & Loop Check",
    ],
  },
  {
    title: "Control & Automation",
    skills: [
      "Control System Architecture",
      "PLC / DCS / SCADA Programming",
      "Cause & Effect Diagram",
      "I/O List & Allocation",
      "Interlock & Shutdown Logic",
      "HMI Design & Configuration",
      "Network Architecture",
      "FAT / SAT Procedures",
    ],
  },
  {
    title: "Project Delivery",
    skills: [
      "Bill of Quantity (BOQ)",
      "Request for Quotation (RFQ)",
      "Technical Specification Writing",
      "Technical Bid Evaluation (TBE)",
      "Vendor Document Review",
      "Interdiscipline Coordination",
      "Project Management Fundamentals",
    ],
  },
];

// Software & tools icons (skillicons.dev format)
// Only using icons confirmed available on skillicons.dev
export const softwareSkills =
  "py,matlab,vscode,git,github,js,nextjs,react,tailwind,figma,postgres,mysql";

// Additional tools displayed as text (not available on skillicons.dev)
export const additionalTools = [
  { name: "AutoCAD", level: "Intermediate" },
  { name: "ETAP", level: "Intermediate" },
  { name: "Microsoft Excel", level: "Advanced" },
  { name: "Microsoft PowerPoint", level: "Advanced" },
  { name: "Microsoft Word", level: "Intermediate" },
  { name: "MATLAB / Simulink", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
  { name: "PLC Programming", level: "Intermediate" },
  { name: "SCADA Configuration", level: "Intermediate" },
];

// ============================================================
// CERTIFICATIONS & TRAINING
// ============================================================

export const certificationsData = [
  {
    id: 1,
    name: "Electrical & ETAP Power System Course",
    issuer: "Naiq Derajat",
    date: "2025-01-01",
    category: "technical",
    credentialLink: "#",
  },
  {
    id: 2,
    name: "Instrument, PLC & SCADA Program",
    issuer: "Instrument Control System Academy",
    date: "2023-01-01",
    category: "technical",
    status: "Ongoing",
    credentialLink: "#",
  },
  {
    id: 3,
    name: "Industrial Automation Bootcamp",
    issuer: "Udemy",
    date: "2025-01-01",
    category: "technical",
    credentialLink: "#",
  },
  {
    id: 4,
    name: "From Zero to Hero — Electrical Engineering",
    issuer: "Udemy",
    date: "2025-01-01",
    category: "technical",
    credentialLink: "#",
  },
  {
    id: 5,
    name: "Process and Instrument Control",
    issuer: "Udemy",
    date: "2025-01-01",
    category: "technical",
    credentialLink: "#",
  },
  {
    id: 6,
    name: "Basic Instrumentation",
    issuer: "Training Center",
    date: "2024-01-01",
    category: "technical",
    credentialLink: "#",
  },
  {
    id: 7,
    name: "Basic Project Management",
    issuer: "Training Center",
    date: "2024-01-01",
    category: "management",
    credentialLink: "#",
  },
  {
    id: 8,
    name: "Microsoft Office Specialist — Excel",
    issuer: "Microsoft",
    date: "2024-01-01",
    category: "software",
    credentialLink: "#",
  },
];

// ============================================================
// SECTORS — Industries worked in
// ============================================================

export const sectors = [
  "Oil & Gas",
  "Mining",
  "Power Generation",
  "Manufacturing",
  "Infrastructure",
];
