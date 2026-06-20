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
  placeholderNote?: string;
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
  { label: "Thank You", href: "/thank-you/" },
];

export const serviceHierarchy: ServiceItem[] = [
  {
    label: "PCB Assembly / PCBA",
    href: routes.pcba,
    role: "Primary conversion service",
    description:
      "Main PCB Assembly / PCBA route. Turnkey PCBA, SMT, THT, BGA, prototype, and low-volume notes live inside this page for the first release.",
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
      "Gerber, stack-up, material, finish, and fabrication-to-assembly coordination without migrating old material or stack-up long-tail pages.",
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
      { label: "Quote Checklist", href: routes.resources },
      { label: "Downloads / Catalog", href: routes.resources },
      { label: "Blog / Insights", href: routes.insights },
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

const defaultPlaceholderNote =
  "Placeholder content: this first PR establishes route, navigation, and review structure. Final public copy should be written after Venture confirms capabilities, evidence, certifications, official channels, and reusable claims.";

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
    alt: "Venture Electronics official resource preview",
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
    alt: "Electronics assembly automation for future insights",
    caption: "Assembly visual for future technical guides and buyer resources.",
  },
  legal: {
    src: "/factory-5.jpg",
    alt: "Automated assembly equipment used as legal page visual context",
    caption: "Manufacturing context visual for utility pages.",
  },
  sitemap: {
    src: "/hero-circuit-globe.jpg",
    alt: "Circuit globe visual for sitemap overview",
    caption: "Site structure visual for the first-release Venture route map.",
  },
  thankYou: {
    src: "/factory-2.jpg",
    alt: "SMT assembly line used for submission confirmation page",
    caption: "Production-line visual for future contact confirmation flow.",
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
      "This page explains the first-release service hierarchy. PCBA is the main buyer entry, EMS & Box Build is the broader manufacturing support layer, and sourcing, DFM, testing, and PCB fabrication remain supporting capabilities.",
    template: "service-conversion",
    visual: pageVisuals.services,
    sections: [
      {
        title: "First-release service structure",
        body:
          "The public sitemap stays shallow. Turnkey PCBA and common process terms are sections inside the core pages, not separate indexed routes in this PR.",
        items: serviceHierarchy.map((service) => `${service.label}: ${service.description}`),
        kind: "list",
        featured: true,
      },
      {
        title: "What is intentionally not expanded",
        items: [
          "No separate industry pages in this round.",
          "No material, stack-up, SMT, BGA, ICT, FCT, or reliability subdirectories.",
          "No old SEO blog archive migration.",
        ],
        kind: "proof",
      },
    ],
    relatedLinks: serviceHierarchy,
    cta: { label: "Request a Quote", href: routes.requestQuote },
    placeholderNote: defaultPlaceholderNote,
  },
  pcba: {
    label: "PCB Assembly / PCBA",
    href: routes.pcba,
    eyebrow: "PCB Assembly / PCBA",
    title: "PCB Assembly / PCBA for turnkey-first electronics manufacturing projects.",
    role: "Turnkey PCBA, SMT, through-hole, sourcing, and testing coordination.",
    summary:
      "This page organizes turnkey delivery, RFQ files, assembly scope, testing discussion, and claim boundaries without turning every process term into a separate route.",
    visual: pageVisuals.pcba,
    directAnswer: [
      "Use PCB Assembly as the buyer-readable service label and keep PCBA as the industry abbreviation.",
      "Use Turnkey PCBA as a delivery mode covering PCB fabrication coordination, component sourcing, assembly, testing discussion, and delivery support when the project scope confirms it.",
    ],
    template: "service-conversion",
    sections: [
      {
        label: "Primary flow",
        title: "Turnkey PCBA belongs inside the main PCBA page",
        body:
          "Turnkey is a project delivery mode, not a competing first-level service. The page should explain how PCB fabrication, BOM review, sourcing, assembly, testing, and packaging can be coordinated under one project record.",
        items: [
          "SMT, THT, mixed assembly, BGA, prototype, and low-volume references stay as page sections.",
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
        label: "Claim boundary",
        title: "What the final copy still needs before publication",
        items: [
          "Latest PCBA capability sheet before publishing BGA pitch, package size, production-line count, or capacity numbers.",
          "Testing report samples before promising a fixed report format or coverage level.",
          "Approved public cases or images before adding customer proof.",
        ],
        kind: "proof",
      },
    ],
    relatedLinks: [
      { label: "Component Sourcing, BOM & DFM Review", href: routes.componentSourcingBomDfmReview },
      { label: "Quality & Testing", href: routes.qualityTesting },
      { label: "EMS & Box Build", href: routes.emsBoxBuild },
    ],
    cta: { label: "Request a Quote", href: routes.requestQuote },
    secondaryCta: { label: "View Services", href: routes.services },
    placeholderNote: "Draft PCBA copy is intentionally partial and public-safe until final capabilities and evidence are confirmed.",
  },
  emsBoxBuild: {
    label: "EMS & Box Build",
    href: routes.emsBoxBuild,
    eyebrow: "Strategic service",
    title: "EMS & Box Build extends PCBA into broader project manufacturing support.",
    role: "EMS and box-build support for projects that extend beyond board assembly.",
    summary:
      "EMS and Box Build should describe project-based support around PCBA, enclosures, cable or wire harness discussion, functional testing, packaging, and delivery requirements.",
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
        title: "Boundary for the first release",
        items: [
          "Do not imply unlimited system integration.",
          "Do not claim software, RF, safety, retail packaging, or global fulfillment capabilities without evidence.",
          "Cable Assembly can be mentioned as future or project-level support, not a separate main route yet.",
        ],
        kind: "proof",
      },
    ],
    relatedLinks: [
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "Quality & Testing", href: routes.qualityTesting },
      { label: "Contact", href: routes.contact },
    ],
    cta: { label: "Discuss EMS Scope", href: routes.requestQuote },
    placeholderNote: defaultPlaceholderNote,
  },
  componentSourcingBomDfmReview: {
    label: "Component Sourcing, BOM & DFM Review",
    href: routes.componentSourcingBomDfmReview,
    eyebrow: "Supporting capability",
    title: "Component sourcing, BOM risk review, and DFM feedback for PCBA projects.",
    role: "BOM review, sourcing risk, and DFM/DFA support for turnkey PCBA.",
    summary:
      "This page should show how sourcing and engineering review reduce RFQ risk before assembly, without promising universal inventory or unilateral substitutions.",
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
        title: "Public claim limits",
        items: [
          "Do not write that all parts are in stock.",
          "Do not write that all substitutions are available.",
          "Do not write that incoming inspection guarantees absolute authenticity detection.",
        ],
        kind: "proof",
      },
    ],
    relatedLinks: [
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "Contact", href: routes.contact },
      { label: "Resources", href: routes.resources },
    ],
    cta: { label: "Send BOM for Review", href: routes.requestQuote },
    placeholderNote: defaultPlaceholderNote,
  },
  pcbFabricationSupport: {
    label: "PCB Fabrication Support",
    href: routes.pcbFabricationSupport,
    eyebrow: "Supporting capability",
    title: "PCB fabrication support for PCBA and turnkey assembly workflows.",
    role: "Bare-board coordination support for assembly-ready PCB projects.",
    summary:
      "PCB fabrication is explained as a supporting capability for PCB Assembly and Turnkey PCBA, not as a collection of old material, stack-up, or design-layout long-tail pages.",
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
        title: "Scope that stays out of this PR",
        items: [
          "No separate PCB materials pages.",
          "No layer stack-up page set.",
          "No PCB design layout migration.",
          "No unsupported numeric fabrication capability table until a current sheet is confirmed.",
        ],
        kind: "proof",
      },
    ],
    relatedLinks: [
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "Component Sourcing, BOM & DFM Review", href: routes.componentSourcingBomDfmReview },
      { label: "Quality & Testing", href: routes.qualityTesting },
    ],
    cta: { label: "Start Fabrication Review", href: routes.requestQuote },
    placeholderNote: defaultPlaceholderNote,
  },
  qualityTesting: {
    label: "Quality & Testing",
    href: routes.qualityTesting,
    eyebrow: "Quality page",
    title: "Quality and testing flow for PCBA and EMS projects.",
    role: "Quality and testing discussion point for PCBA and EMS project planning.",
    summary:
      "The first release keeps quality and testing on one page. It explains inspection, electrical or functional testing, reliability discussions, and packing/logistics without overclaiming coverage.",
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
        title: "Language to avoid",
        items: [
          "No zero-defect or 100% guarantee language.",
          "No IPC Class 3, medical-grade, IATF, RoHS, REACH, or BSCI certification claims without Venture-owned evidence.",
          "No full traceability system claim until records, system scope, and report samples are confirmed.",
        ],
        kind: "proof",
      },
    ],
    relatedLinks: [
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "EMS & Box Build", href: routes.emsBoxBuild },
      { label: "Contact", href: routes.contact },
    ],
    cta: { label: "Share Testing Requirements", href: routes.requestQuote },
    placeholderNote: defaultPlaceholderNote,
  },
  about: {
    label: "About Venture Electronics",
    href: routes.about,
    eyebrow: "Company",
    title: "Venture Electronics is a China-based PCB Manufacturing, PCB Assembly and EMS manufacturing partner.",
    role: "Company context for Venture Electronics and its manufacturing focus.",
    summary:
      "About should read like a normal company page. It confirms basic identity and project fit, then links to official resources for brand and domain clarification.",
    template: "brand-authority",
    visual: pageVisuals.about,
    sections: [
      {
        title: "Public-safe company facts",
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
        title: "Evidence boundary",
        items: [
          "Do not publish Since 2010 or 15+ years without public-use approval.",
          "Do not publish employee count, factory size, capacity, line count, or customer logos without evidence.",
          "Use manufacturing partner and project-based manufacturing support, not all-in-house factory language.",
        ],
        kind: "proof",
      },
    ],
    relatedLinks: [
      { label: "Official Resources", href: routes.officialResources },
      { label: "Services", href: routes.services },
      { label: "Contact", href: routes.contact },
    ],
    cta: { label: "View Services", href: routes.services },
    secondaryCta: { label: "Official Resources", href: routes.officialResources },
    placeholderNote: defaultPlaceholderNote,
  },
  officialResources: {
    label: "Official Resources",
    href: routes.officialResources,
    eyebrow: "Brand and official resources",
    title: "Official Venture Electronics resources and domain relationship.",
    role: "Official channels, domain context, and source-of-truth links.",
    summary:
      "This page clarifies Venture Electronics, venture-mfg.com, the in-progress GEO site, and the legacy PCBA-focused asset so buyers and AI systems do not treat them as conflicting entities.",
    template: "brand-authority",
    visual: pageVisuals.officialResources,
    sections: [
      {
        title: "Current public relationship",
        items: [
          "venture-mfg.com is the current official main site.",
          "The new GEO-driven site is still in progress until launch.",
          "venture-pcba.com is a legacy PCBA-focused asset that is maintained but not updated.",
          "LinkedIn, Facebook, YouTube, WhatsApp, and WeChat require final customer confirmation before being listed as official channels.",
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
    placeholderNote: defaultPlaceholderNote,
  },
  resources: {
    label: "Resources",
    href: routes.resources,
    eyebrow: "Resources",
    title: "Buyer FAQ, quote checklist, downloads, and content entry.",
    role: "Buyer resources for RFQ preparation and project planning.",
    summary:
      "Resources should help buyers prepare better RFQs. Blog and long-form content will live in Insights rather than an old archive migration.",
    template: "resource",
    visual: pageVisuals.resources,
    sections: [
      {
        title: "First-release resources",
        items: [
          "FAQ preview for common PCBA and EMS buyer questions.",
          "Quote checklist covering Gerber, BOM, CPL, assembly drawings, test requirements, and logistics notes.",
          "Downloads / Catalog placeholder until final customer files are confirmed.",
          "Blog / Insights entry for future weekly content.",
        ],
        kind: "checklist",
        featured: true,
      },
      {
        title: "Not included yet",
        items: [
          "No complex download center.",
          "No old blog archive scrape.",
          "No empty article category set.",
        ],
        kind: "proof",
      },
    ],
    relatedLinks: [
      { label: "Insights", href: routes.insights },
      { label: "Official Resources", href: routes.officialResources },
      { label: "Contact", href: routes.contact },
    ],
    cta: { label: "View Insights", href: routes.insights },
    secondaryCta: { label: "Request a Quote", href: routes.requestQuote },
    placeholderNote: defaultPlaceholderNote,
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
        title: "When to use Request a Quote",
        body:
          "Use the RFQ action when you are ready to share project files, quantities, testing requirements, and schedule expectations for review.",
        items: quoteChecklist,
        kind: "checklist",
      },
    ],
    relatedLinks: [
      { label: "Request a Quote", href: routes.requestQuote },
      { label: "Services", href: routes.services },
      { label: "Resources", href: routes.resources },
    ],
    cta: { label: "Request a Quote", href: routes.requestQuote },
    secondaryCta: { label: "Email info@venture-mfg.com", href: "mailto:info@venture-mfg.com" },
    placeholderNote: defaultPlaceholderNote,
  },
  requestQuote: {
    label: "Request a Quote",
    href: routes.requestQuote,
    eyebrow: "RFQ",
    title: "Request a PCBA, EMS, sourcing, or fabrication quote.",
    role: "RFQ action page for PCBA, EMS, sourcing, and fabrication inquiries.",
    summary:
      "This page defines the RFQ path and file expectations. The form is a visual placeholder only in this PR; formal submission workflow remains future scope.",
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
          "Primary inquiry email: info@venture-mfg.com.",
          "Phone: +86 755 8529 6692.",
          "Fax can remain a secondary field when detailed contact blocks are needed.",
        ],
        kind: "facts",
      },
    ],
    relatedLinks: [
      { label: "Contact", href: routes.contact },
      { label: "Services", href: routes.services },
      { label: "Resources", href: routes.resources },
    ],
    cta: { label: "Email info@venture-mfg.com", href: "mailto:info@venture-mfg.com" },
    placeholderNote: "No CRM, upload workflow, email automation, or Supabase integration is included in this PR.",
  },
  insights: {
    label: "Insights",
    href: routes.insights,
    eyebrow: "Insights",
    title: "Future blog and insight hub for PCBA, turnkey assembly, sourcing, and EMS topics.",
    role: "Future content hub for technical guides and buyer education.",
    summary:
      "Insights is the future weekly content entry. This first PR creates the route and sample structure only; it does not scrape, migrate, or rewrite old blog content.",
    template: "resource",
    visual: pageVisuals.insights,
    sections: [
      {
        title: "Initial content lanes",
        items: [
          "PCBA quote preparation and checklist articles.",
          "Turnkey PCBA, sourcing, BOM risk, and DFM topics.",
          "EMS and Box Build boundary explainers.",
          "Quality and testing explainers tied to evidence-backed capabilities.",
        ],
        kind: "list",
        featured: true,
      },
      {
        title: "Publishing boundary",
        items: [
          "No old blog archive migration.",
          "No unverified industry case studies.",
          "No high-claim technical articles until facts and evidence are confirmed.",
        ],
        kind: "proof",
      },
    ],
    relatedLinks: [
      { label: "Resources", href: routes.resources },
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "Official Resources", href: routes.officialResources },
    ],
    cta: { label: "Open Resources", href: routes.resources },
    placeholderNote: defaultPlaceholderNote,
  },
  privacyPolicy: {
    label: "Privacy Policy",
    href: routes.privacyPolicy,
    eyebrow: "Legal",
    title: "Privacy Policy.",
    role: "Legal utility page awaiting final client-reviewed policy language.",
    summary:
      "This route exists for launch readiness and visual review. Final legal language should be reviewed by the client before publication.",
    template: "legal",
    visual: pageVisuals.legal,
    sections: [
      {
        title: "Current placeholder coverage",
        items: [
          "Contact form and RFQ data collection language to be confirmed.",
          "Analytics, cookie, file upload, and CRM language to be finalized when integrations are known.",
          "Retention, processor, jurisdiction, and contact rights language remain future legal review items.",
        ],
        kind: "proof",
      },
    ],
    relatedLinks: [
      { label: "Terms of Use", href: routes.terms },
      { label: "Sitemap", href: routes.sitemap },
      { label: "Contact", href: routes.contact },
    ],
    placeholderNote: "Legal copy is placeholder only and not final legal advice.",
  },
  terms: {
    label: "Terms",
    href: routes.terms,
    eyebrow: "Legal",
    title: "Terms of Use.",
    role: "Legal utility page awaiting final client-reviewed terms language.",
    summary:
      "This route exists for launch readiness and visual review. Final legal terms should be reviewed by the client before publication.",
    template: "legal",
    visual: pageVisuals.legal,
    sections: [
      {
        title: "Current placeholder coverage",
        items: [
          "Website information and RFQ discussion are not a fixed manufacturing commitment.",
          "Project scope, testing, substitutions, delivery, and packaging must be confirmed per quotation.",
          "Final terms should address uploads, confidentiality, governing terms, and limitation language.",
        ],
        kind: "proof",
      },
    ],
    relatedLinks: [
      { label: "Privacy Policy", href: routes.privacyPolicy },
      { label: "Sitemap", href: routes.sitemap },
      { label: "Contact", href: routes.contact },
    ],
    placeholderNote: "Legal copy is placeholder only and not final legal advice.",
  },
  sitemap: {
    label: "Sitemap",
    href: routes.sitemap,
    eyebrow: "Sitemap",
    title: "Venture GEO first-release HTML sitemap.",
    role: "Utility page listing the approved public route set.",
    summary: "This sitemap lists only the routes included in the first-round lean site shell.",
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
    relatedLinks: [
      { label: "Home", href: routes.home },
      { label: "Services", href: routes.services },
      { label: "Resources", href: routes.resources },
    ],
    placeholderNote: defaultPlaceholderNote,
  },
  thankYou: {
    label: "Thank You",
    href: routes.thankYou,
    eyebrow: "Confirmation",
    title: "Thank you.",
    role: "Post-submit confirmation page reserved for future form integration.",
    summary:
      "This page is reserved for future RFQ or contact submission confirmation. It is not part of the primary navigation.",
    template: "contact-rfq",
    visual: pageVisuals.thankYou,
    sections: [
      {
        title: "Future behavior",
        items: [
          "Confirm successful submission.",
          "Tell buyers what files or details may be requested next.",
          "Route users back to Services, Resources, or Home.",
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
    placeholderNote: "No form integration is included in this PR.",
  },
} satisfies Record<string, PageData>;
