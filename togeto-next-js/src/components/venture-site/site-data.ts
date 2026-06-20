export type SiteLink = {
  label: string;
  href: string;
};

export type NavItem = SiteLink & {
  children?: NavItem[];
  requiresSelection?: boolean;
};

export type ServiceItem = SiteLink & {
  role: string;
  description: string;
};

export type PageSection = {
  label?: string;
  title: string;
  body?: string;
  items?: string[];
  kind?: "list" | "steps" | "checklist" | "facts" | "proof";
  featured?: boolean;
};

export type PageVisual = {
  src: string;
  alt: string;
  caption?: string;
};

export type PageData = SiteLink & {
  eyebrow: string;
  title: string;
  role: string;
  summary: string;
  visual: PageVisual;
  directAnswer?: string[];
  template: "service-conversion" | "strategic-service" | "supporting-capability" | "quality-trust" | "brand-authority" | "resource" | "contact-rfq" | "legal";
  sections: PageSection[];
  relatedLinks: SiteLink[];
  cta?: SiteLink;
  secondaryCta?: SiteLink;
  showHeroHeader?: boolean;
  showHeroVisual?: boolean;
  showRelatedLinks?: boolean;
  noIndex?: boolean;
};

export const routes = {
  home: "/",
  services: "/services/",
  pcba: "/services/pcb-assembly-pcba/",
  emsBoxBuild: "/services/ems-box-build/",
  componentSourcingBomDfmReview: "/services/component-sourcing-bom-dfm-review/",
  pcbFabricationSupport: "/services/pcb-fabrication-support/",
  qualityTesting: "/quality-testing/",
  about: "/about/",
  officialResources: "/official-resources/",
  resources: "/resources/",
  contact: "/contact/",
  requestQuote: "/request-a-quote/",
  insights: "/insights/",
  privacyPolicy: "/privacy-policy/",
  terms: "/terms/",
  sitemap: "/sitemap/",
  thankYou: "/thank-you/",
} as const;

export const sitemapLinks: SiteLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
  { label: "EMS & Box Build", href: "/services/ems-box-build/" },
  {
    label: "Component Sourcing, BOM & DFM Review",
    href: "/services/component-sourcing-bom-dfm-review/",
  },
  { label: "PCB Fabrication Support", href: "/services/pcb-fabrication-support/" },
  { label: "Quality & Testing", href: "/quality-testing/" },
  { label: "About Venture Electronics", href: "/about/" },
  { label: "Official Resources", href: "/official-resources/" },
  { label: "Resources", href: "/resources/" },
  { label: "Contact", href: "/contact/" },
  { label: "Request a Quote", href: "/request-a-quote/" },
  { label: "Insights", href: "/insights/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms", href: "/terms/" },
  { label: "Sitemap", href: "/sitemap/" },
];

export const serviceHierarchy: ServiceItem[] = [
  {
    label: "PCB Assembly / PCBA",
    href: routes.pcba,
    role: "Primary conversion service",
    description:
      "Main PCB Assembly / PCBA service path for assembled boards, BOM review, sourcing coordination, assembly, and testing discussion.",
  },
  {
    label: "EMS & Box Build",
    href: routes.emsBoxBuild,
    role: "Higher-level manufacturing support",
    description:
      "Explains how PCBA projects can extend into final assembly, cable or harness discussion, functional testing, packaging, and delivery support.",
  },
  {
    label: "Component Sourcing, BOM & DFM Review",
    href: routes.componentSourcingBomDfmReview,
    role: "Supply-chain and engineering support",
    description:
      "BOM risk, availability, MOQ, lifecycle, customer-approved alternatives, and DFM/DFA review as support for turnkey PCBA.",
  },
  {
    label: "PCB Fabrication Support",
    href: routes.pcbFabricationSupport,
    role: "Supporting bare-board workflow",
    description:
      "Gerber, stack-up, material, finish, and fabrication-to-assembly coordination for assembly-ready board projects.",
  },
];

const aboutLinks: NavItem[] = [
  { label: "About Venture Electronics", href: routes.about },
  { label: "Official Resources", href: routes.officialResources },
];

const resourceLinks: NavItem[] = [
  { label: "Resources / FAQ", href: routes.resources },
  { label: "Insights", href: routes.insights },
  { label: "Official Resources", href: routes.officialResources },
];

export const navItems: NavItem[] = [
  { label: "Home", href: routes.home },
  {
    label: "Services",
    href: routes.services,
    children: serviceHierarchy.map((service) => ({ label: service.label, href: service.href })),
  },
  { label: "Quality & Testing", href: routes.qualityTesting },
  { label: "About", href: routes.about, children: aboutLinks },
  { label: "Resources", href: routes.resources, children: resourceLinks },
  { label: "Contact", href: routes.contact },
];

export const footerGroups: { title: string; links: SiteLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "EMS & Box Build", href: routes.emsBoxBuild },
      {
        label: "Component Sourcing, BOM & DFM Review",
        href: routes.componentSourcingBomDfmReview,
      },
      { label: "Quality & Testing", href: routes.qualityTesting },
      { label: "PCB Fabrication Support", href: routes.pcbFabricationSupport },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Venture Electronics", href: routes.about },
      { label: "Brand & Official Resources", href: routes.officialResources },
      { label: "Contact", href: routes.contact },
      { label: "Request a Quote", href: routes.requestQuote },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: routes.resources },
      { label: "RFQ Preparation", href: routes.requestQuote },
      { label: "Insights", href: routes.insights },
      { label: "Official Resources", href: routes.officialResources },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: routes.privacyPolicy },
      { label: "Terms of Use", href: routes.terms },
      { label: "Sitemap", href: routes.sitemap },
    ],
  },
];

const quoteChecklist = [
  "Gerber or ODB++ files",
  "BOM with MPN, manufacturer, quantity, and substitution rules",
  "CPL / Pick-and-Place data",
  "Assembly drawing and polarity notes",
  "Quantity, target schedule, and packaging needs",
  "Testing plan, firmware, fixture, or acceptance criteria when available",
];

const qualityFlow = [
  "Test Plan & Quality Requirements",
  "PCBA In-process Inspection",
  "PCBA Electrical / Functional Testing",
  "Box Build order: System-level Functional Testing",
  "Reliability Testing Capabilities, as required",
  "Packing & Logistics",
];

const pageVisuals = {
  services: {
    src: "/hero-circuit-globe.jpg",
    alt: "Electronics manufacturing service overview",
    caption: "Service overview across PCB assembly, EMS, sourcing, and fabrication support.",
  },
  pcba: {
    src: "/hero-pcba-smt.jpg",
    alt: "SMT PCB assembly line for PCBA projects",
    caption: "PCB assembly visual for turnkey-first electronics manufacturing projects.",
  },
  ems: {
    src: "/hero-ems-factory.jpg",
    alt: "EMS production floor for box build projects",
    caption: "EMS production visual for assembly, testing, packaging, and delivery support.",
  },
  sourcing: {
    src: "/identity-pcb-closeup.jpg",
    alt: "PCB and component detail for BOM review",
    caption: "Component and PCB detail for BOM review and sourcing discussion.",
  },
  fabrication: {
    src: "/factory-3.jpg",
    alt: "PCB fabrication and assembly coordination detail",
    caption: "Board-level visual for fabrication-to-assembly coordination.",
  },
  quality: {
    src: "/capabilities-machine.jpg",
    alt: "Testing and inspection equipment for PCBA quality review",
    caption: "Inspection and testing visual for quality requirement discussions.",
  },
  about: {
    src: "/identity-smt-floor.jpg",
    alt: "Venture Electronics manufacturing floor",
    caption: "Manufacturing floor visual for Venture company context.",
  },
  officialResources: {
    src: "/venture-catalog.webp",
    alt: "Venture Electronics official resource visual",
    caption: "Official resources visual for brand and domain clarification.",
  },
  resources: {
    src: "/faq-smt-line.jpg",
    alt: "SMT line used as buyer resource visual",
    caption: "Buyer resource visual for RFQ preparation and project planning.",
  },
  contact: {
    src: "/factory-4.jpg",
    alt: "Assembled board inspection for Venture contact page",
    caption: "Contact visual for Venture Electronics inquiry channels.",
  },
  requestQuote: {
    src: "/factory-1.jpg",
    alt: "Assembled board inspection before RFQ review",
    caption: "Inspection visual for preparing a PCBA or EMS quote request.",
  },
  insights: {
    src: "/hero-assembly-robots.jpg",
    alt: "Electronics assembly automation for technical insights",
    caption: "Assembly visual for technical guides and buyer resources.",
  },
  legal: {
    src: "/factory-5.jpg",
    alt: "Automated assembly equipment used as legal page visual context",
    caption: "Manufacturing context visual for utility pages.",
  },
  sitemap: {
    src: "/hero-circuit-globe.jpg",
    alt: "Circuit globe visual for sitemap overview",
    caption: "Site structure visual for the Venture route map.",
  },
  thankYou: {
    src: "/factory-2.jpg",
    alt: "SMT assembly line used for submission confirmation page",
    caption: "Production-line visual for contact confirmation.",
  },
} satisfies Record<string, PageVisual>;

export const pageData = {
  services: {
    label: "Services",
    href: routes.services,
    eyebrow: "Services overview",
    title: "PCB Assembly, EMS, sourcing, and fabrication support in one clear service path.",
    role: "Service overview for PCBA-first manufacturing inquiries.",
    summary:
      "Use this page to choose the right starting point for a PCB Assembly, EMS, sourcing, DFM, testing, or PCB fabrication support inquiry.",
    template: "service-conversion",
    visual: pageVisuals.services,
    sections: [
      {
        title: "Service selection matrix",
        body:
          "PCB Assembly / PCBA is the main service entry. EMS & Box Build applies when a board-level project extends into final assembly, while sourcing, DFM review, quality, and fabrication support help prepare the project for manufacturing review.",
        items: serviceHierarchy.map((service) => `${service.label}: ${service.description}`),
        kind: "list",
        featured: true,
      },
      {
        title: "How the service pages connect",
        items: [
          "Start with PCB Assembly / PCBA when the core need is assembled boards.",
          "Use EMS & Box Build when the project includes enclosure, harness, packaging, or system-level assembly discussion.",
          "Use sourcing, BOM, DFM, fabrication, and testing pages to prepare clearer files and acceptance requirements before quoting.",
        ],
        kind: "steps",
      },
    ],
    relatedLinks: serviceHierarchy,
    cta: { label: "Request a Quote", href: routes.requestQuote },
  },
  pcba: {
    label: "PCB Assembly / PCBA",
    href: routes.pcba,
    eyebrow: "PCB Assembly / PCBA",
    title: "PCB Assembly / PCBA for turnkey-first electronics manufacturing projects.",
    role: "Turnkey PCBA, SMT, through-hole, sourcing, and testing coordination.",
    summary:
      "This page organizes delivery models, RFQ files, assembly scope, and testing discussion for buyers preparing a PCBA project.",
    visual: pageVisuals.pcba,
    directAnswer: [
      "Use PCB Assembly as the buyer-readable service label and keep PCBA as the industry abbreviation.",
      "Use Turnkey PCBA as a delivery mode covering PCB fabrication coordination, component sourcing, assembly, testing discussion, and delivery support when the project scope confirms it.",
    ],
    template: "service-conversion",
    sections: [
      {
        label: "Primary flow",
        title: "Delivery models for PCBA projects",
        body:
          "Turnkey PCBA can coordinate PCB fabrication, BOM review, component sourcing, assembly, testing discussion, packaging, and delivery support under one project scope when the files and requirements are confirmed.",
        items: [
          "SMT, THT, mixed assembly, BGA, prototype, and low-volume needs can be reviewed against the board files and BOM.",
          "Component substitutions require customer approval before procurement or assembly proceeds.",
          "Testing coverage depends on the product structure, fixture, firmware, and acceptance criteria.",
        ],
        kind: "proof",
        featured: true,
      },
      {
        label: "RFQ inputs",
        title: "Quote file checklist",
        items: quoteChecklist,
        kind: "checklist",
      },
      {
        label: "Assembly and testing",
        title: "Scope confirmed during quote review",
        items: [
          "Assembly process and inspection checkpoints are reviewed against Gerber or ODB++, BOM, CPL, drawings, and polarity notes.",
          "Testing scope is confirmed from customer-provided fixtures, firmware, test steps, standards, and acceptance criteria.",
          "Packaging, labeling, and delivery requirements should be included when they affect handling or project records.",
        ],
        kind: "list",
      },
    ],
    relatedLinks: [
      { label: "Component Sourcing, BOM & DFM Review", href: routes.componentSourcingBomDfmReview },
      { label: "Quality & Testing", href: routes.qualityTesting },
      { label: "EMS & Box Build", href: routes.emsBoxBuild },
    ],
    cta: { label: "Request a Quote", href: routes.requestQuote },
    secondaryCta: { label: "View Services", href: routes.services },
  },
  emsBoxBuild: {
    label: "EMS & Box Build",
    href: routes.emsBoxBuild,
    eyebrow: "Strategic service",
    title: "EMS & Box Build extends PCBA into broader project manufacturing support.",
    role: "EMS and box-build support for projects that extend beyond board assembly.",
    summary:
      "EMS and Box Build covers project-based support around PCBA, enclosures, cable or wire harness discussion, functional testing, packaging, and delivery requirements.",
    template: "strategic-service",
    visual: pageVisuals.ems,
    sections: [
      {
        title: "Scope to discuss by project",
        items: [
          "PCBA integration with enclosure, cabinet, connectors, wire harness, or mechanical parts.",
          "System-level functional testing when the customer provides test steps and acceptance criteria.",
          "Packaging, labeling, serial number, and logistics requirements when confirmed in the RFQ.",
        ],
        kind: "list",
        featured: true,
      },
      {
        title: "Project fit and required inputs",
        items: [
          "System-level assembly scope is confirmed from drawings, mechanical requirements, harness details, test steps, and acceptance criteria.",
          "Software, RF, safety, retail packaging, and fulfillment requirements should be stated clearly so Venture can confirm whether they fit the project.",
          "Cable or harness work can be discussed when drawings, connector requirements, and inspection expectations are provided.",
        ],
        kind: "checklist",
      },
    ],
    relatedLinks: [
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "Quality & Testing", href: routes.qualityTesting },
      { label: "Contact", href: routes.contact },
    ],
    cta: { label: "Discuss EMS Scope", href: routes.requestQuote },
  },
  componentSourcingBomDfmReview: {
    label: "Component Sourcing, BOM & DFM Review",
    href: routes.componentSourcingBomDfmReview,
    eyebrow: "Supporting capability",
    title: "Component sourcing, BOM risk review, and DFM feedback for PCBA projects.",
    role: "BOM review, sourcing risk, and DFM/DFA support for turnkey PCBA.",
    summary:
      "Sourcing and engineering review helps reduce RFQ risk before assembly by checking BOM completeness, availability, approved alternatives, and DFM questions.",
    template: "supporting-capability",
    visual: pageVisuals.sourcing,
    sections: [
      {
        title: "What this support covers",
        items: [
          "BOM field completeness, MPN, manufacturer, package, quantity, and substitution restrictions.",
          "Availability, MOQ, lead-time, lifecycle, and long-lead risk review.",
          "Customer-approved alternatives and DFM/DFA findings before procurement or assembly.",
        ],
        kind: "checklist",
        featured: true,
      },
      {
        title: "Alternative approval process",
        items: [
          "Venture reviews BOM risk and flags availability, MOQ, lifecycle, lead-time, or package questions before procurement.",
          "Alternative components are shared for customer review when substitution is possible.",
          "Approved alternatives, no-substitution items, and sourcing restrictions should be captured before assembly proceeds.",
        ],
        kind: "steps",
      },
      {
        title: "Review outputs",
        items: [
          "BOM completeness notes",
          "Availability and lead-time concerns",
          "DFM or DFA questions that affect fabrication, assembly, or testing",
          "Customer-approved alternative component list when applicable",
        ],
        kind: "list",
      },
    ],
    relatedLinks: [
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "Contact", href: routes.contact },
      { label: "Resources", href: routes.resources },
    ],
    cta: { label: "Send BOM for Review", href: routes.requestQuote },
  },
  pcbFabricationSupport: {
    label: "PCB Fabrication Support",
    href: routes.pcbFabricationSupport,
    eyebrow: "Supporting capability",
    title: "PCB fabrication support for PCBA and turnkey assembly workflows.",
    role: "Bare-board coordination support for assembly-ready PCB projects.",
    summary:
      "PCB fabrication support helps align bare-board requirements with downstream assembly, testing, and delivery needs.",
    template: "supporting-capability",
    visual: pageVisuals.fabrication,
    sections: [
      {
        title: "Inputs to collect",
        items: [
          "Gerber or ODB++ files",
          "Stack-up, material, copper weight, impedance, surface finish, and panelization requirements",
          "Assembly constraints that affect pad design, fiducials, via-in-pad, and test points",
        ],
        kind: "checklist",
        featured: true,
      },
      {
        title: "Fabrication-to-assembly review outputs",
        items: [
          "Board file or stack-up questions that may affect assembly readiness.",
          "Material, finish, copper weight, impedance, and panelization notes to confirm before fabrication.",
          "Pad design, fiducial, via-in-pad, and test-point issues that affect assembly or inspection.",
          "Questions that should be resolved before the project moves into PCBA review.",
        ],
        kind: "list",
      },
    ],
    relatedLinks: [
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "Component Sourcing, BOM & DFM Review", href: routes.componentSourcingBomDfmReview },
      { label: "Quality & Testing", href: routes.qualityTesting },
    ],
    cta: { label: "Start Fabrication Review", href: routes.requestQuote },
  },
  qualityTesting: {
    label: "Quality & Testing",
    href: routes.qualityTesting,
    eyebrow: "Quality page",
    title: "Quality and testing flow for PCBA and EMS projects.",
    role: "Quality and testing discussion point for PCBA and EMS project planning.",
    summary:
      "This page explains inspection, electrical or functional testing, reliability discussions, and packing or logistics review for PCBA and EMS projects.",
    template: "quality-trust",
    visual: pageVisuals.quality,
    sections: [
      {
        title: "6-step quality and testing flow",
        items: qualityFlow,
        kind: "steps",
        featured: true,
      },
      {
        title: "Testing methods to describe as project-dependent",
        items: [
          "IQC, FAI, SPI, AOI, X-ray, visual inspection, ICT, FCT, and PCBA functional testing.",
          "Box Build system-level checks when mechanical, harness, firmware, and acceptance criteria are supplied.",
          "Reliability testing discussion only when project requirements and evidence support it.",
        ],
        kind: "list",
      },
      {
        title: "How testing scope is confirmed",
        items: [
          "Electrical or functional tests depend on the product structure, firmware, fixtures, standards, and customer acceptance criteria.",
          "Reliability or environmental tests are reviewed when the project defines the method, sample needs, and acceptance threshold.",
          "Inspection and records can be discussed during quote review so the expected deliverables are clear before production.",
        ],
        kind: "checklist",
      },
    ],
    relatedLinks: [
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "EMS & Box Build", href: routes.emsBoxBuild },
      { label: "Contact", href: routes.contact },
    ],
    cta: { label: "Share Testing Requirements", href: routes.requestQuote },
  },
  about: {
    label: "About Venture Electronics",
    href: routes.about,
    eyebrow: "Company",
    title: "Venture Electronics is a China-based PCB Manufacturing, PCB Assembly and EMS manufacturing partner.",
    role: "Company context for Venture Electronics and its manufacturing focus.",
    summary:
      "Venture Electronics supports PCB Manufacturing, PCB Assembly, EMS, sourcing, testing, and project-based manufacturing discussions for electronics buyers.",
    template: "brand-authority",
    visual: pageVisuals.about,
    sections: [
      {
        title: "Company and contact details",
        items: [
          "Brand: Venture Electronics.",
          "Entity: Venture Electronics Technology Ltd / Wei Chi Technology Co., Ltd.",
          "Current main site: venture-mfg.com.",
          "Main inquiry email: info@venture-mfg.com.",
          "Phone: +86 755 8529 6692.",
          "Address: Building 36, Chentian Industrial Area, Xixiang, Bao an District, Shenzhen, Guangdong, China.",
        ],
        kind: "facts",
        featured: true,
      },
      {
        title: "How Venture works with buyers",
        items: [
          "Review project files and requirements before confirming scope.",
          "Coordinate PCB fabrication, sourcing, assembly, testing, and delivery needs around the approved quote.",
          "Clarify official channels through venture-mfg.com and the confirmed inquiry email.",
        ],
        kind: "steps",
      },
    ],
    relatedLinks: [
      { label: "Official Resources", href: routes.officialResources },
      { label: "Services", href: routes.services },
      { label: "Contact", href: routes.contact },
    ],
    cta: { label: "View Services", href: routes.services },
    secondaryCta: { label: "Official Resources", href: routes.officialResources },
  },
  officialResources: {
    label: "Official Resources",
    href: routes.officialResources,
    eyebrow: "Brand and official resources",
    title: "Official Venture Electronics resources and domain relationship.",
    role: "Official channels, domain context, and source-of-truth links.",
    summary:
      "This page clarifies Venture Electronics, venture-mfg.com, the legacy PCBA-focused asset, and the confirmed inquiry path so buyers can identify the right source of information.",
    template: "brand-authority",
    visual: pageVisuals.officialResources,
    sections: [
      {
        title: "Current public relationship",
        items: [
          "venture-mfg.com is the current official main site.",
          "venture-pcba.com is a legacy PCBA-focused asset connected to Venture Electronics history.",
          "info@venture-mfg.com is the confirmed inquiry email for current buyer communication.",
          "Use the contact page when you need to verify the right channel before sharing project files.",
        ],
        kind: "facts",
        featured: true,
      },
      {
        title: "Why this page exists",
        body:
          "Multiple Venture-related domains can be useful when their roles are explicit. They become risky when buyers cannot tell which page, email, or channel is current.",
      },
    ],
    relatedLinks: [
      { label: "About Venture Electronics", href: routes.about },
      { label: "Resources", href: routes.resources },
      { label: "Sitemap", href: routes.sitemap },
    ],
    cta: { label: "Contact", href: routes.contact },
  },
  resources: {
    label: "Resources",
    href: routes.resources,
    eyebrow: "Resources",
    title: "Buyer FAQ and RFQ preparation resources.",
    role: "Buyer resources for RFQ preparation and project planning.",
    summary:
      "Resources help buyers prepare clearer PCBA, EMS, sourcing, fabrication, and testing inquiries before sending files for quote review.",
    template: "resource",
    visual: pageVisuals.resources,
    sections: [
      {
        title: "RFQ preparation essentials",
        items: [
          "Gerber or ODB++ files, BOM, CPL, and assembly drawings.",
          "Quantity, target schedule, packaging needs, and delivery expectations.",
          "Testing requirements, firmware, fixtures, standards, or acceptance criteria when available.",
          "Sourcing restrictions, approved alternatives, and no-substitution parts.",
        ],
        kind: "checklist",
        featured: true,
      },
      {
        title: "Where to go next",
        items: [
          "Use Request a Quote when your project files are ready.",
          "Use Contact for general questions or channel verification.",
          "Use Insights for buyer education and technical planning topics.",
        ],
        kind: "list",
      },
    ],
    relatedLinks: [
      { label: "Insights", href: routes.insights },
      { label: "Official Resources", href: routes.officialResources },
      { label: "Contact", href: routes.contact },
    ],
    cta: { label: "View Insights", href: routes.insights },
    secondaryCta: { label: "Request a Quote", href: routes.requestQuote },
  },
  contact: {
    label: "Contact",
    href: routes.contact,
    eyebrow: "Contact",
    title: "Contact Venture Electronics.",
    role: "Confirmed inquiry channels and company contact details.",
    summary:
      "Use this page to reach Venture Electronics or confirm the right inquiry path before preparing a full PCBA, EMS, sourcing, or fabrication RFQ.",
    template: "contact-rfq",
    visual: pageVisuals.contact,
    sections: [
      {
        title: "Confirmed contact channels",
        items: [
          "Email: info@venture-mfg.com.",
          "Phone: +86 755 8529 6692.",
          "Address: Building 36, Chentian Industrial Area, Xixiang, Bao an District, Shenzhen, Guangdong, China.",
        ],
        kind: "facts",
        featured: true,
      },
      {
        title: "General inquiry fit",
        body:
          "Use Contact for company questions, channel verification, and early project discussion before files are ready. When Gerber, BOM, CPL, drawings, quantities, or testing requirements are ready, move to Request a Quote.",
        items: [
          "Verify official Venture Electronics contact information.",
          "Ask whether a project type fits before sending detailed files.",
          "Use the RFQ page for file checklist, NDA, large-file, and quote-preparation guidance.",
        ],
        kind: "list",
      },
    ],
    relatedLinks: [
      { label: "Request a Quote", href: routes.requestQuote },
      { label: "Services", href: routes.services },
      { label: "Resources", href: routes.resources },
    ],
    cta: { label: "Request a Quote", href: routes.requestQuote },
    secondaryCta: { label: "Email info@venture-mfg.com", href: "mailto:info@venture-mfg.com" },
  },
  requestQuote: {
    label: "Request a Quote",
    href: routes.requestQuote,
    eyebrow: "RFQ",
    title: "Request a PCBA, EMS, sourcing, or fabrication quote.",
    role: "RFQ action page for PCBA, EMS, sourcing, and fabrication inquiries.",
    summary:
      "Use this page to prepare project files and send a PCBA, EMS, sourcing, or fabrication quote request by email.",
    template: "contact-rfq",
    visual: pageVisuals.requestQuote,
    sections: [
      {
        title: "What to prepare",
        items: quoteChecklist,
        kind: "checklist",
        featured: true,
      },
      {
        title: "Confirmed contact route",
        items: [
          "Email project details to info@venture-mfg.com.",
          "Include company name, contact person, project type, quantity, target schedule, and delivery expectations.",
          "For large files, NDA discussion, or sensitive documents, start by email and ask for the preferred transfer method.",
        ],
        kind: "facts",
      },
      {
        title: "What happens next",
        items: [
          "Venture reviews the files and checks whether the project scope is clear enough for quoting.",
          "The team may ask for missing BOM fields, drawings, test steps, sourcing restrictions, or packaging requirements.",
          "Quoted scope, substitutions, testing, schedule, and delivery details should be confirmed before procurement or assembly starts.",
        ],
        kind: "steps",
      },
    ],
    relatedLinks: [
      { label: "Contact", href: routes.contact },
      { label: "Services", href: routes.services },
      { label: "Resources", href: routes.resources },
    ],
    cta: { label: "Email info@venture-mfg.com", href: "mailto:info@venture-mfg.com" },
  },
  insights: {
    label: "Insights",
    href: routes.insights,
    eyebrow: "Insights",
    title: "Insights for PCBA, turnkey assembly, sourcing, and EMS planning.",
    role: "Technical guides and buyer education for PCBA and EMS planning.",
    summary:
      "Insights collects practical buyer education for PCBA quote preparation, turnkey assembly, sourcing, testing, and EMS planning.",
    template: "resource",
    visual: pageVisuals.insights,
    sections: [
      {
        title: "Buyer education topics",
        items: [
          "PCBA quote preparation and checklist articles.",
          "Turnkey PCBA, sourcing, BOM risk, and DFM topics.",
          "EMS and Box Build planning guides.",
          "Quality and testing explainers tied to project requirements.",
        ],
        kind: "list",
        featured: true,
      },
      {
        title: "How insights support RFQ planning",
        items: [
          "Help buyers prepare clearer files before requesting a quote.",
          "Explain tradeoffs such as turnkey versus consigned assembly.",
          "Point readers back to the relevant service page or RFQ checklist.",
        ],
        kind: "steps",
      },
    ],
    relatedLinks: [
      { label: "Resources", href: routes.resources },
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "Official Resources", href: routes.officialResources },
    ],
    cta: { label: "Open Resources", href: routes.resources },
  },
  privacyPolicy: {
    label: "Privacy Policy",
    href: routes.privacyPolicy,
    eyebrow: "Legal",
    title: "Privacy Policy.",
    role: "How Venture Electronics handles inquiry information.",
    summary:
      "This policy explains how Venture Electronics handles information submitted through email inquiries and website contact links.",
    template: "legal",
    visual: pageVisuals.legal,
    sections: [
      {
        title: "Information you provide",
        items: [
          "Name, company, email, phone number, and message details.",
          "Project files, RFQ details, BOM information, drawings, specifications, and testing requirements that you choose to send.",
          "Communication records needed to respond to your inquiry and discuss project scope.",
        ],
        kind: "list",
        featured: true,
      },
      {
        title: "How information is used",
        items: [
          "Respond to inquiries and quote requests.",
          "Review project scope, technical files, sourcing requirements, and testing expectations.",
          "Maintain business records related to buyer communication and project review.",
        ],
        kind: "list",
      },
      {
        title: "Contact for privacy questions",
        body:
          "For privacy questions related to Venture Electronics inquiries, contact info@venture-mfg.com.",
      },
    ],
    relatedLinks: [],
    showHeroHeader: false,
    showHeroVisual: false,
    showRelatedLinks: false,
  },
  terms: {
    label: "Terms",
    href: routes.terms,
    eyebrow: "Legal",
    title: "Terms of Use.",
    role: "Website use and RFQ discussion terms.",
    summary:
      "These terms explain basic website use and how information on the site relates to project discussions with Venture Electronics.",
    template: "legal",
    visual: pageVisuals.legal,
    sections: [
      {
        title: "Website information",
        items: [
          "Website content is provided for general information about Venture Electronics services.",
          "Service descriptions do not create a fixed manufacturing commitment until project scope and quotation terms are confirmed.",
          "Capabilities, testing, substitutions, delivery, and packaging depend on the files and requirements reviewed for each project.",
        ],
        kind: "list",
        featured: true,
      },
      {
        title: "RFQ and project scope",
        items: [
          "Quotes should be based on confirmed files, quantities, specifications, acceptance criteria, and delivery requirements.",
          "Component substitutions require customer approval before procurement or assembly proceeds.",
          "Confidential or large files should be shared only through the channel agreed during the inquiry.",
        ],
        kind: "list",
      },
      {
        title: "Contact",
        body:
          "For questions about website use or RFQ communication, contact info@venture-mfg.com.",
      },
    ],
    relatedLinks: [],
    showHeroHeader: false,
    showHeroVisual: false,
    showRelatedLinks: false,
  },
  sitemap: {
    label: "Sitemap",
    href: routes.sitemap,
    eyebrow: "Sitemap",
    title: "HTML Sitemap.",
    role: "Utility page listing public Venture Electronics website pages.",
    summary: "Use this page to find Venture Electronics service, quality, resource, contact, and legal pages.",
    template: "resource",
    visual: pageVisuals.sitemap,
    sections: [
      {
        title: "Public route list",
        items: sitemapLinks.map((link) => `${link.label} - ${link.href}`),
        kind: "list",
        featured: true,
      },
    ],
    relatedLinks: [],
    showHeroHeader: false,
    showHeroVisual: false,
    showRelatedLinks: false,
  },
  thankYou: {
    label: "Thank You",
    href: routes.thankYou,
    eyebrow: "Confirmation",
    title: "Thank you.",
    role: "Private confirmation route.",
    summary:
      "This confirmation route is not part of the public navigation.",
    template: "contact-rfq",
    visual: pageVisuals.thankYou,
    sections: [
      {
        title: "Confirmation options",
        items: [
          "Return to the homepage.",
          "Review service pages.",
          "Open RFQ preparation resources.",
        ],
        kind: "steps",
      },
    ],
    relatedLinks: [
      { label: "Home", href: routes.home },
      { label: "Services", href: routes.services },
      { label: "Resources", href: routes.resources },
    ],
    noIndex: true,
    showHeroHeader: false,
    showHeroVisual: false,
    showRelatedLinks: false,
  },
} satisfies Record<string, PageData>;
