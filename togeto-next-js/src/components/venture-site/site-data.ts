import { routes, sitemapLinks, type SiteLink } from "./site-routes";

export { routes, sitemapLinks };
export type { SiteLink };

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
  links?: SiteLink[];
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
  "Quantity and target schedule",
  "Testing plan, firmware, fixture, or acceptance criteria when available",
  "Packaging, labeling, delivery destination, and required shipping documents",
];

const qualityFlow = [
  "Test plan and quality requirements: confirm standards, methods, samples, fixtures, firmware, records and acceptance criteria.",
  "PCBA in-process inspection: apply relevant incoming, first-article, solder-paste, optical, visual or hidden-joint checks.",
  "PCBA electrical or functional testing: use the agreed board-level method where test points, fixtures, software and criteria are available.",
  "System-level functional testing for Box Build: check the assembled system according to approved mechanical, harness, firmware and functional requirements.",
  "Reliability testing as required: confirm conditions, samples, standards, acceptance thresholds and any external-laboratory boundary.",
  "Packing and logistics review: confirm labels, ESD or moisture handling, packaging, records and shipment requirements.",
];

const pageVisuals = {
  services: {
    src: "/assets/img/venture-old-site/factory/venture-electronics-factory-china-pcba-factory-1.jpg",
    alt: "Electronics production-floor context for manufacturing service selection",
    caption: "Manufacturing-service context across PCB assembly, EMS, sourcing, and fabrication support.",
  },
  pcba: {
    src: "/assets/img/venture-old-site/smt-assembly/venture-electronics-smt-assembly-high-volume-pcb-assembly-line-2.jpg",
    alt: "SMT PCB assembly detail for PCBA projects",
    caption: "PCB assembly visual for turnkey-first electronics manufacturing projects.",
  },
  ems: {
    src: "/assets/img/venture-old-site/box-build/venture-electronics-box-build-ems-box-build-assembly-3.jpg",
    alt: "Electronics assembly detail for EMS and box build project discussion",
    caption: "Production-floor context for assembly, testing, packaging, and delivery support.",
  },
  sourcing: {
    src: "/assets/img/venture-old-site/automation-control/venture-electronics-automation-control-controlled-impedance-pcb-3.jpg",
    alt: "PCB component detail for BOM and DFM review",
    caption: "Component and PCB detail for BOM review and sourcing discussion.",
  },
  fabrication: {
    src: "/assets/img/venture-old-site/pcb-fabrication/venture-electronics-pcb-fabrication-pcb-layer-stackup.jpg",
    alt: "PCB layer stack-up visual for fabrication coordination",
    caption: "Board-level visual for fabrication-to-assembly coordination.",
  },
  quality: {
    src: "/assets/img/venture-old-site/pcba-testing/venture-electronics-pcba-testing-boundary-scan-testing.png",
    alt: "PCBA inspection equipment used for quality planning context",
    caption: "Equipment context for quality and testing requirement discussions.",
  },
  about: {
    src: "/assets/img/venture-old-site/factory/venture-electronics-factory-pcba-manufacturing-floor.jpg",
    alt: "Electronics manufacturing-floor context for company and project-fit information",
    caption: "Manufacturing-floor context for Venture company and project-fit information.",
  },
  officialResources: {
    src: "/assets/img/venture-old-site/home/venture-electronics-home-pcb-manufacturing-service.jpg",
    alt: "PCB manufacturing service visual for official resource context",
    caption: "Official resources visual for brand and domain clarification.",
  },
  resources: {
    src: "/assets/img/venture-old-site/pcba-testing/venture-electronics-pcba-testing-pcb-assembly-visual-inspection.png",
    alt: "PCB assembly visual inspection used as buyer resource visual",
    caption: "Buyer resource visual for RFQ preparation and project planning.",
  },
  contact: {
    src: "/assets/img/venture-old-site/automation-control/venture-electronics-automation-control-ldi-machine.jpg",
    alt: "Electronics manufacturing equipment used for contact context",
    caption: "Production-floor context for Venture Electronics inquiry channels.",
  },
  requestQuote: {
    src: "/assets/img/venture-old-site/smt-assembly/venture-electronics-smt-assembly-high-volume-pcb-assembly-line-3.jpg",
    alt: "PCB assembly line used for RFQ preparation context",
    caption: "Production-line context for preparing a PCBA or EMS quote request.",
  },
  legal: {
    src: "/assets/img/venture-old-site/pcba-testing/venture-electronics-pcba-testing-pcba-quality-testing-2.jpg",
    alt: "PCB testing detail used as legal page visual context",
    caption: "Manufacturing context visual for utility pages.",
  },
  sitemap: {
    src: "/assets/img/venture-old-site/pcb-fabrication/venture-electronics-pcb-fabrication-12-layer-pcb-stackup.webp",
    alt: "PCB detail used for sitemap context",
    caption: "Board-level visual context for the Venture route map.",
  },
  thankYou: {
    src: "/assets/img/venture-old-site/box-build/venture-electronics-box-build-electronic-contract-manufacturing-1.png",
    alt: "PCB assembly context used for submission confirmation page",
    caption: "Production-line visual for contact confirmation.",
  },
} satisfies Record<string, PageVisual>;

export const pageData = {
  services: {
    label: "Services",
    href: routes.services,
    eyebrow: "Services overview",
    title: "Choose the right PCB Assembly, EMS or manufacturing-support path.",
    role: "Service overview for PCBA-first manufacturing inquiries.",
    summary:
      "PCB Assembly / PCBA is the primary service entry. EMS & Box Build applies when a project extends beyond an assembled board, while sourcing, BOM, DFM and PCB fabrication support help prepare the project for manufacturing review.",
    template: "service-conversion",
    visual: pageVisuals.services,
    sections: [
      {
        title: "How do Venture Electronics services connect within one project?",
        items: [
          "Start with the intended deliverable. An assembled board begins with PCB Assembly / PCBA; a more complete module or product may require EMS & Box Build.",
          "Define the files and supply model. Gerber, BOM, CPL, drawings, quantities and sourcing responsibilities shape the quotation.",
          "Resolve engineering and supply-chain questions. BOM review, approved alternatives, DFM/DFA and fabrication inputs should be settled before production.",
          "Confirm inspection, testing and delivery requirements. The quotation should state the agreed checks, records, packaging and delivery scope.",
        ],
        kind: "steps",
        featured: true,
      },
      {
        title: "What should buyers prepare before selecting a final service scope?",
        body:
          "The file set does not need to be perfect before the first conversation, but missing information may limit quotation accuracy or require follow-up.",
        items: [
          "Gerber or ODB++ files",
          "BOM with MPN, manufacturer, quantity and substitution rules",
          "CPL / pick-and-place data",
          "Assembly drawings, polarity notes and mechanical requirements",
          "Quantity and target schedule",
          "Test plan, fixture, firmware, golden sample or acceptance criteria when available",
          "Packaging, labeling and delivery requirements",
        ],
        kind: "checklist",
      },
    ],
    relatedLinks: serviceHierarchy,
    cta: { label: "Request a Quote", href: routes.requestQuote },
    secondaryCta: { label: "Explore PCB Assembly / PCBA", href: routes.pcba },
  },
  pcba: {
    label: "PCB Assembly / PCBA",
    href: routes.pcba,
    eyebrow: "PCB Assembly / PCBA",
    title: "PCB Assembly / PCBA with turnkey project coordination.",
    role: "From approved board files and BOM data to assembled boards, inspection and project-specific testing.",
    summary:
      "Venture Electronics supports SMT, through-hole and mixed PCB Assembly projects. Depending on the quotation, Turnkey PCBA may also coordinate PCB fabrication support, component sourcing, BOM and DFM review, inspection, testing, packaging and delivery requirements.",
    visual: pageVisuals.pcba,
    directAnswer: [
      "PCB Assembly is the buyer-readable service name; PCBA is the common abbreviation for the assembled circuit board and its manufacturing process.",
      "Turnkey PCBA is a delivery model, not a competing first-level service.",
    ],
    template: "service-conversion",
    sections: [
      {
        label: "Primary flow",
        title: "Which PCB Assembly delivery model fits your project?",
        body:
          "In every model, BOM revisions, alternative parts, test coverage and acceptance criteria remain controlled by the approved project documents.",
        items: [
          "Consigned assembly: the buyer supplies some or all components; assembly, incoming-material responsibilities, shortages, inspection and agreed testing are discussed.",
          "Partial turnkey: the buyer supplies designated or critical items; selected PCB or component coordination plus assembly and agreed checks are discussed.",
          "Full-turnkey discussion: approved design files and purchasing rules can support PCB fabrication support, BOM review, sourcing, assembly, project-specific testing, packaging and delivery coordination.",
        ],
        kind: "proof",
        featured: true,
      },
      {
        title: "What PCB Assembly methods and project types can be reviewed?",
        items: [
          "SMT assembly for surface-mount components and reflow workflows.",
          "Through-hole assembly for connectors, power components or parts requiring wave, selective or manual soldering discussion.",
          "Mixed SMT and through-hole assembly.",
          "Prototype and low-volume projects for engineering validation or staged production planning.",
          "BGA, LED, flex-board or other special assembly requirements reviewed from current files.",
        ],
        kind: "list",
      },
      {
        label: "RFQ inputs",
        title: "RFQ checklist for PCB Assembly / PCBA",
        items: [
          "Gerber or ODB++ files",
          "BOM with designators, quantity, MPN, manufacturer and substitution restrictions",
          "CPL / XY / pick-and-place data",
          "Assembly drawing with polarity, connector and special-process notes",
          "Quantity and target schedule",
          "Test plan, firmware, fixture information, golden sample or acceptance criteria when available",
          "Programming, coating, marking, packaging or label requirements when applicable",
          "Delivery destination and required shipping documents",
        ],
        kind: "checklist",
      },
    ],
    relatedLinks: [
      { label: "Component Sourcing, BOM & DFM Review", href: routes.componentSourcingBomDfmReview },
      { label: "Quality & Testing", href: routes.qualityTesting },
      { label: "EMS & Box Build", href: routes.emsBoxBuild },
    ],
    cta: { label: "Request a PCB Assembly Quote", href: routes.requestQuote },
    secondaryCta: { label: "View RFQ Checklist", href: routes.resources },
  },
  emsBoxBuild: {
    label: "EMS & Box Build",
    href: routes.emsBoxBuild,
    eyebrow: "Strategic service",
    title: "EMS & Box Build support for projects that extend beyond the PCBA.",
    role: "EMS and box-build support for projects that extend beyond board assembly.",
    summary:
      "EMS Manufacturing describes a broader electronics-manufacturing scope around an assembled board. Box Build is a specific integration path that may combine approved PCBAs with enclosure, cable or harness, mechanical parts, system checks, labeling, packaging and delivery requirements.",
    template: "strategic-service",
    visual: pageVisuals.ems,
    sections: [
      {
        title: "What can an EMS or Box Build scope include?",
        items: [
          "PCBA integration with enclosure, cabinet, connectors or mechanical components.",
          "Cable or harness discussion when drawings, connector specifications, routing and inspection requirements are available.",
          "System-level checks based on customer procedures, fixtures, firmware and acceptance criteria.",
          "Identification and packaging such as labels, serial numbers, packaging materials, accessories and shipment preparation when included in the quotation.",
        ],
        kind: "list",
        featured: true,
      },
      {
        title: "Required inputs for EMS or Box Build review",
        items: [
          "Approved PCBA files and board revision.",
          "Complete system BOM, including electronic, cable, mechanical and packaging items.",
          "Enclosure and mechanical drawings.",
          "Cable or harness drawings and connector requirements.",
          "Assembly sequence, torque or fastening notes where applicable.",
          "Firmware, configuration or programming requirements.",
          "System-level test steps, fixtures, samples and acceptance criteria.",
          "Label, serial-number, packaging and delivery instructions.",
        ],
        kind: "checklist",
      },
      {
        title: "What should be stabilized before an EMS project repeats?",
        items: [
          "Scope clarification: define the product form, PCBA status, enclosure, harness, test and packaging needs.",
          "Engineering review: identify electronic, mechanical, cable and test-interface risks.",
          "BOM and supply review: check availability, lifecycle, MOQ and approved alternatives across the system BOM.",
          "Prototype or pilot build: verify assembly order, fixtures, functional checks, labels and packaging.",
          "Repeat-production preparation: freeze approved revisions, material rules, assembly instructions, test requirements and records.",
        ],
        kind: "steps",
      },
    ],
    relatedLinks: [
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "Quality & Testing", href: routes.qualityTesting },
      { label: "Contact", href: routes.contact },
    ],
    cta: { label: "Discuss an EMS Project", href: routes.requestQuote },
    secondaryCta: { label: "View PCB Assembly / PCBA", href: routes.pcba },
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
    title: "Inspection and testing planned around each PCBA or EMS project.",
    role: "Quality and testing discussion point for PCBA and EMS project planning.",
    summary:
      "Quality planning should define what is checked, when it is checked, which method applies and what record or acceptance criterion is expected. The appropriate combination depends on the BOM, board design, product function, fixture, firmware and buyer requirements.",
    template: "quality-trust",
    visual: pageVisuals.quality,
    sections: [
      {
        title: "6-step quality and testing flow",
        body:
          "A board-only PCBA project may move from board-level testing directly to packing; a Box Build project may continue through system-level checks.",
        items: qualityFlow,
        kind: "steps",
        featured: true,
      },
      {
        title: "Test-scope inputs",
        items: [
          "Product and board revision.",
          "Gerber or ODB++, BOM, CPL and assembly drawings.",
          "Test plan and acceptance criteria.",
          "Firmware, software or programming requirements.",
          "Fixture or interface information.",
          "Golden sample or reference unit when applicable.",
          "Sampling or full-test expectation.",
          "Required report, photo or data fields.",
          "Applicable standards and required third-party involvement.",
        ],
        kind: "checklist",
      },
      {
        title: "Records and traceability requirements",
        body:
          "Project-level records may include file revision, BOM revision, material decisions, production batch, inspection result, test result, rework or deviation decision and shipment record. Higher traceability depth, such as unit serial numbers, barcode links, key-part batches or exported test data, must be confirmed by project.",
      },
      {
        title: "Reliability or environmental testing",
        items: [
          "Define the applicable standard, conditions, sample quantity and duration.",
          "Confirm fixtures, pass or fail criteria and report expectations.",
          "State whether Venture performs, coordinates or only prepares samples for an external laboratory.",
        ],
        kind: "list",
      },
    ],
    relatedLinks: [
      { label: "PCB Assembly / PCBA", href: routes.pcba },
      { label: "EMS & Box Build", href: routes.emsBoxBuild },
      { label: "Contact", href: routes.contact },
    ],
    cta: { label: "Share Testing Requirements", href: routes.requestQuote },
    secondaryCta: { label: "View PCB Assembly / PCBA", href: routes.pcba },
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
    title: "Official Venture Electronics brand, website and contact information.",
    role: "Official channels, domain context, and source-of-truth links.",
    summary:
      "This page clarifies Venture Electronics, venture-mfg.com, the legacy PCBA-focused asset, and the confirmed inquiry path so buyers can identify the right source of information.",
    template: "brand-authority",
    visual: pageVisuals.officialResources,
    sections: [
      {
        title: "Brand and entity source of truth",
        items: [
          "Primary brand: Venture Electronics.",
          "English entity: Venture Electronics Technology Ltd.",
          "Chinese entity: Wei Chi Technology Co., Ltd.",
          "Main service positioning: PCB Manufacturing, PCB Assembly and EMS Manufacturing partner.",
        ],
        kind: "facts",
        featured: true,
      },
      {
        title: "Domain relationship and confirmed contact route",
        items: [
          "venture-mfg.com is the canonical main website for company information, service pages, buyer resources and inquiries.",
          "venture-pcba.com is a legacy PCBA-focused vertical asset connected to Venture Electronics; it should not be treated as a separate company or the current main website.",
          "Email: info@venture-mfg.com.",
          "Telephone: +86 755 8529 6692.",
          "Fax: +86 755 2397 7408.",
          "Address: Building 36, Chentian Industrial Area, Xixiang, Bao an District, Shenzhen, GuangDong, China.",
        ],
        links: [
          { label: "Open venture-mfg.com", href: "https://www.venture-mfg.com/" },
          { label: "Open venture-pcba.com", href: "https://www.venture-pcba.com/" },
        ],
        kind: "facts",
      },
      {
        title: "How Venture handles other domains",
        body:
          "Only the domains and contact channels listed above should be treated as current public sources for Venture Electronics. If you encounter another Venture-related domain, confirm its role with Venture before citing it as an official website or sending project files through it.",
      },
      {
        title: "How to verify official information",
        items: [
          "Use the current main website and the email domain shown on this page.",
          "Check whether a service claim appears consistently on the relevant service page.",
          "Ask Venture to confirm the current channel before sharing sensitive files.",
          "Review certificate wording, entity name and scope before relying on a certificate for a regulated or project-specific requirement.",
          "Use the Request a Quote page for the current RFQ file and email route.",
        ],
        kind: "checklist",
      },
      {
        title: "Channels that should be confirmed before use",
        body:
          "Before sharing sensitive project files through a new channel, confirm the current account, file-transfer method, entity name and document version with Venture Electronics by email or phone.",
      },
    ],
    relatedLinks: [
      { label: "About Venture Electronics", href: routes.about },
      { label: "Resources", href: routes.resources },
      { label: "Sitemap", href: routes.sitemap },
    ],
    cta: { label: "Contact Venture Electronics", href: routes.contact },
    secondaryCta: { label: "Request a Quote", href: routes.requestQuote },
  },
  resources: {
    label: "Resources",
    href: routes.resources,
    eyebrow: "Buyer resources",
    title: "Prepare a clearer PCB Assembly, Turnkey PCBA or EMS inquiry.",
    role: "Buyer resources for RFQ preparation and project planning.",
    summary:
      "A useful RFQ identifies the current design files, BOM, quantity, delivery needs, sourcing restrictions, test requirements and customer-approval points. These resources help buyers organize that information before emailing Venture Electronics.",
    template: "resource",
    visual: pageVisuals.resources,
    sections: [
      {
        title: "Core RFQ files",
        items: [
          "Gerber or ODB++",
          "BOM with designators, MPN, manufacturer, quantity and substitution restrictions",
          "CPL / XY / pick-and-place data",
          "Assembly drawing and polarity notes",
        ],
        kind: "checklist",
        featured: true,
      },
      {
        title: "Project requirements to include",
        items: [
          "Quantity and target schedule",
          "PCB fabrication requirements when applicable",
          "Consigned, partial-turnkey or full-turnkey expectation",
          "Test plan, firmware, fixture, golden sample or acceptance criteria",
          "Programming, coating, marking, label, packaging or delivery requirements",
          "NDA or file-transfer requirements",
        ],
        kind: "checklist",
      },
      {
        title: "Additional EMS / Box Build information",
        items: [
          "System BOM",
          "Enclosure and mechanical drawings",
          "Cable or harness drawings",
          "Assembly instructions",
          "System-level test procedure",
          "Packaging and accessories list",
        ],
        kind: "checklist",
      },
      {
        title: "Buyer FAQ",
        items: [
          "What is the minimum information needed to start an RFQ? Gerber or ODB++, BOM, quantity and contact details are a useful starting point. CPL, drawings, testing and packaging information improve the quotation and engineering review.",
          "Do I need a complete test plan before contacting Venture? No. Share the test information already available and identify what remains open. A clearer test plan may still be required before final quotation or production.",
          "Can I request an NDA before sharing files? An NDA can be discussed by email. The signing entity, document version, scope and process should be confirmed before sensitive files are transferred.",
          "Does Venture have one standard MOQ? MOQ is reviewed from the board, BOM, material status, setup, project type and quantity. The website does not state one universal quantity rule.",
          "Can alternative components be proposed? Yes, availability or lifecycle risks may lead to candidate alternatives. Any alternative must be approved by the customer before use.",
        ],
        kind: "proof",
      },
      {
        title: "Approved catalog downloads",
        body:
          "These English catalog files are linked from the official Venture Electronics catalog page and can be used as current buyer reference downloads.",
        links: [
          {
            label: "(EN) Venture Electronics EMS Catalog PDF",
            href: "https://www.venture-mfg.com/wp-content/uploads/2023/09/EN-Venture-Electronics-EMS-Catalog-2023-09-new-1.pdf",
          },
          {
            label: "(EN) Venture Electronics PCB Solution PDF",
            href: "https://www.venture-mfg.com/wp-content/uploads/2023/09/EN-Venture-Electronics-PCB-Solution-09-1.pdf",
          },
        ],
      },
    ],
    relatedLinks: [
      { label: "Official Resources", href: routes.officialResources },
      { label: "Contact", href: routes.contact },
      { label: "Request a Quote", href: routes.requestQuote },
    ],
    cta: { label: "Request a Quote", href: routes.requestQuote },
    secondaryCta: { label: "Contact Venture Electronics", href: routes.contact },
  },
  contact: {
    label: "Contact",
    href: routes.contact,
    eyebrow: "Contact",
    title: "Contact Venture Electronics.",
    role: "Confirmed inquiry channels and company contact details.",
    summary:
      "Use Contact for company questions, official-channel verification and early project discussion. Use Request a Quote when Gerber, BOM, CPL, drawings, quantity or testing requirements are ready to send.",
    template: "contact-rfq",
    visual: pageVisuals.contact,
    sections: [
      {
        title: "Confirmed contact channels",
        items: [
          "Email: info@venture-mfg.com.",
          "Phone: +86 755 8529 6692.",
          "Fax: +86 755 2397 7408.",
          "Address: Building 36, Chentian Industrial Area, Xixiang, Bao an District, Shenzhen, GuangDong, China.",
          "Current main website: venture-mfg.com.",
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
          "Ask which files or requirements are needed for an early PCB Assembly, EMS, sourcing or fabrication discussion.",
        ],
        kind: "list",
      },
    ],
    relatedLinks: [
      { label: "Request a Quote", href: routes.requestQuote },
      { label: "Services", href: routes.services },
      { label: "Resources", href: routes.resources },
    ],
    cta: { label: "Email Venture Electronics", href: "mailto:info@venture-mfg.com" },
    secondaryCta: { label: "Request a Quote", href: routes.requestQuote },
    showRelatedLinks: false,
  },
  requestQuote: {
    label: "Request a Quote",
    href: routes.requestQuote,
    eyebrow: "RFQ",
    title: "Request a PCB Assembly, EMS, sourcing or fabrication quote.",
    role: "RFQ action page for PCBA, EMS, sourcing, and fabrication inquiries.",
    summary:
      "Email the project files and requirements to info@venture-mfg.com. Venture Electronics reviews the available information, identifies missing inputs and confirms the quotation scope before procurement or production begins.",
    template: "contact-rfq",
    visual: pageVisuals.requestQuote,
    sections: [
      {
        title: "Core RFQ files",
        items: quoteChecklist,
        kind: "checklist",
        featured: true,
      },
      {
        title: "Project-type additions",
        items: [
          "PCB Assembly / Turnkey PCBA: state whether the project is consigned, partial-turnkey or full-turnkey; include special packages, programming, coating, marking and test expectations.",
          "EMS & Box Build: add the system BOM, enclosure and mechanical drawings, cable or harness details, assembly instructions, system-test method, labels, accessories and packaging requirements.",
          "Component Sourcing / BOM / DFM: identify no-substitution parts, approved-vendor rules, lifecycle or availability concerns, compliance requirements and the review output needed.",
          "PCB Fabrication Support: add the stack-up, material, thickness, copper, impedance, surface finish, panelization, hole or via requirements and downstream assembly constraints.",
        ],
        kind: "list",
      },
      {
        title: "Email, NDA and large files",
        body:
          "Recommended email subject: RFQ - [Company] - [Project Name]. Include company, contact person, project type, quantity, target schedule and delivery destination. For sensitive files, NDA discussion or large attachments, start by email and ask for the preferred transfer method before sending the full package. RFQ communication is handled by email, so please wait for the Venture team to confirm receipt and next steps.",
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
    cta: { label: "Email RFQ Files", href: "mailto:info@venture-mfg.com?subject=Venture%20Electronics%20RFQ" },
    secondaryCta: { label: "Contact First", href: routes.contact },
    showRelatedLinks: false,
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
    title: "HTML Sitemap",
    role: "Utility page listing public Venture Electronics website pages.",
    summary: "Use this directory to find the current public Venture Electronics website pages.",
    template: "resource",
    visual: pageVisuals.sitemap,
    sections: [
      {
        title: "Public route list",
        links: sitemapLinks,
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
    title: "Continue your Venture Electronics inquiry.",
    role: "Private confirmation route.",
    summary:
      "The current RFQ process uses email. Open Request a Quote for the file checklist and the confirmed info@venture-mfg.com inquiry route.",
    template: "contact-rfq",
    visual: pageVisuals.thankYou,
    sections: [
      {
        title: "Current RFQ route",
        body:
          "No website form submission is active in this release, so this route stays hidden and noindex until a real form workflow exists.",
        links: [
          { label: "Open Request a Quote", href: routes.requestQuote },
          { label: "Return Home", href: routes.home },
        ],
      },
    ],
    relatedLinks: [],
    noIndex: true,
    showHeroHeader: false,
    showHeroVisual: false,
    showRelatedLinks: false,
  },
} satisfies Record<string, PageData>;
