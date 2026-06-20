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

export type PageData = SiteLink & {
  eyebrow: string;
  title: string;
  role: string;
  summary: string;
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
  { label: "Request a Quote", href: routes.requestQuote },
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
      { label: "Contact / Request a Quote", href: routes.requestQuote },
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

export const pageData = {
  services: {
    label: "Services",
    href: routes.services,
    eyebrow: "Services overview",
    title: "PCB Assembly, EMS, sourcing, and fabrication support in one clear service path.",
    role: "Services route page aligned to the approved sitemap.",
    summary:
      "This page explains the first-release service hierarchy. PCBA is the main buyer entry, EMS & Box Build is the broader manufacturing support layer, and sourcing, DFM, testing, and PCB fabrication remain supporting capabilities.",
    template: "service-conversion",
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
    eyebrow: "Sample service page",
    title: "PCB Assembly / PCBA for turnkey-first electronics manufacturing projects.",
    role: "Primary conversion page and visual sample for the first review.",
    summary:
      "This sample page shows how a PCBA service page can organize turnkey delivery, RFQ files, assembly scope, testing discussion, and claim boundaries without turning every process term into a separate route.",
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
    cta: { label: "Request PCBA Review", href: routes.requestQuote },
    secondaryCta: { label: "View Services", href: routes.services },
    placeholderNote: "PCBA page is the first visual sample. Copy is intentionally partial and public-safe.",
  },
  emsBoxBuild: {
    label: "EMS & Box Build",
    href: routes.emsBoxBuild,
    eyebrow: "Strategic service",
    title: "EMS & Box Build extends PCBA into broader project manufacturing support.",
    role: "Higher-level service page skeleton.",
    summary:
      "EMS and Box Build should describe project-based support around PCBA, enclosures, cable or wire harness discussion, functional testing, packaging, and delivery requirements.",
    template: "strategic-service",
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
      { label: "Request a Quote", href: routes.requestQuote },
    ],
    cta: { label: "Discuss EMS Scope", href: routes.requestQuote },
    placeholderNote: defaultPlaceholderNote,
  },
  componentSourcingBomDfmReview: {
    label: "Component Sourcing, BOM & DFM Review",
    href: routes.componentSourcingBomDfmReview,
    eyebrow: "Supporting capability",
    title: "Component sourcing, BOM risk review, and DFM feedback for PCBA projects.",
    role: "Supply-chain and engineering support page skeleton.",
    summary:
      "This page should show how sourcing and engineering review reduce RFQ risk before assembly, without promising universal inventory or unilateral substitutions.",
    template: "supporting-capability",
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
      { label: "Request a Quote", href: routes.requestQuote },
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
    role: "Bare-board support page skeleton.",
    summary:
      "PCB fabrication is explained as a supporting capability for PCB Assembly and Turnkey PCBA, not as a collection of old material, stack-up, or design-layout long-tail pages.",
    template: "supporting-capability",
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
    role: "Single quality page skeleton, not a test subdirectory.",
    summary:
      "The first release keeps quality and testing on one page. It explains inspection, electrical or functional testing, reliability discussions, and packing/logistics without overclaiming coverage.",
    template: "quality-trust",
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
      { label: "Request a Quote", href: routes.requestQuote },
    ],
    cta: { label: "Share Testing Requirements", href: routes.requestQuote },
    placeholderNote: defaultPlaceholderNote,
  },
  about: {
    label: "About Venture Electronics",
    href: routes.about,
    eyebrow: "Company",
    title: "Venture Electronics is a China-based PCB Manufacturing, PCB Assembly and EMS manufacturing partner.",
    role: "Company overview page skeleton.",
    summary:
      "About should read like a normal company page. It confirms basic identity and project fit, then links to official resources for brand and domain clarification.",
    template: "brand-authority",
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
      { label: "Request a Quote", href: routes.requestQuote },
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
    role: "Brand and official resources page skeleton.",
    summary:
      "This page clarifies Venture Electronics, venture-mfg.com, the in-progress GEO site, and the legacy PCBA-focused asset so buyers and AI systems do not treat them as conflicting entities.",
    template: "brand-authority",
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
    cta: { label: "Request a Quote", href: routes.requestQuote },
    placeholderNote: defaultPlaceholderNote,
  },
  resources: {
    label: "Resources",
    href: routes.resources,
    eyebrow: "Resources",
    title: "Buyer FAQ, quote checklist, downloads, and content entry.",
    role: "Resources hub skeleton.",
    summary:
      "Resources should help buyers prepare better RFQs. Blog and long-form content will live in Insights rather than an old archive migration.",
    template: "resource",
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
      { label: "Request a Quote", href: routes.requestQuote },
    ],
    cta: { label: "View Insights", href: routes.insights },
    secondaryCta: { label: "Request a Quote", href: routes.requestQuote },
    placeholderNote: defaultPlaceholderNote,
  },
  requestQuote: {
    label: "Request a Quote",
    href: routes.requestQuote,
    eyebrow: "RFQ",
    title: "Request a PCBA, EMS, sourcing, or fabrication review.",
    role: "RFQ page skeleton without CRM integration.",
    summary:
      "This page defines the RFQ path and file expectations. The form is a visual placeholder only in this PR; formal submission workflow remains future scope.",
    template: "contact-rfq",
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
      { label: "Services", href: routes.services },
      { label: "Resources", href: routes.resources },
      { label: "Thank You", href: routes.thankYou },
    ],
    cta: { label: "Email info@venture-mfg.com", href: "mailto:info@venture-mfg.com" },
    placeholderNote: "No CRM, upload workflow, email automation, or Supabase integration is included in this PR.",
  },
  insights: {
    label: "Insights",
    href: routes.insights,
    eyebrow: "Insights",
    title: "Future blog and insight hub for PCBA, turnkey assembly, sourcing, and EMS topics.",
    role: "Content update entry skeleton.",
    summary:
      "Insights is the future weekly content entry. This first PR creates the route and sample structure only; it does not scrape, migrate, or rewrite old blog content.",
    template: "resource",
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
    title: "Privacy Policy placeholder.",
    role: "Utility page skeleton.",
    summary:
      "This route exists for launch readiness and visual review. Final legal language should be reviewed by the client before publication.",
    template: "legal",
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
      { label: "Request a Quote", href: routes.requestQuote },
    ],
    placeholderNote: "Legal copy is placeholder only and not final legal advice.",
  },
  terms: {
    label: "Terms",
    href: routes.terms,
    eyebrow: "Legal",
    title: "Terms of Use placeholder.",
    role: "Utility page skeleton.",
    summary:
      "This route exists for launch readiness and visual review. Final legal terms should be reviewed by the client before publication.",
    template: "legal",
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
      { label: "Request a Quote", href: routes.requestQuote },
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
    role: "Noindex post-submit utility page skeleton.",
    summary:
      "This page is reserved for future RFQ or contact submission confirmation. It is not part of the primary navigation.",
    template: "contact-rfq",
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
