import { routes, sitemapLinks, type SiteLink } from "./site-routes";
import type { VentureImageId } from "./image-manifest";
import { CONTACT_CHANNELS } from "./content/contact-channels";

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

export type QuickAnswerRow = {
  question: string;
  answer: string;
  href?: string;
};

export type PageSection = {
  anchorId?: string;
  label?: string;
  title: string;
  body?: string;
  items?: string[];
  quickAnswers?: QuickAnswerRow[];
  faqItems?: PageFAQ[];
  domainRecords?: DomainGovernanceRecord[];
  links?: SiteLink[];
  kind?:
    | "list"
    | "steps"
    | "checklist"
    | "facts"
    | "proof"
    | "domain-cards"
    | "domain-table"
    | "quick-answer"
    | "faq";
  featured?: boolean;
};

export type PageVisual = {
  src: string;
  alt: string;
  caption?: string;
};

export type PageEvidenceImageGroup = {
  title: string;
  images: VentureImageId[];
  afterSectionIndex: number;
};

export type PageFAQ = {
  question: string;
  answer: string;
};

export type DomainGovernanceRecord = {
  domain: string;
  href?: string;
  currentRole: string;
  howItIsUsed: string;
  buyerGuidance: string;
  safePublicInquiries: string;
};

export type DomainGovernanceGroup = {
  title: string;
  domains: DomainGovernanceRecord[];
};

export type PageData = SiteLink & {
  eyebrow: string;
  title: string;
  seoTitle?: string;
  metaDescription?: string;
  role: string;
  summary: string;
  visual: PageVisual;
  directAnswer?: string[];
  template: "service-conversion" | "strategic-service" | "supporting-capability" | "quality-trust" | "brand-authority" | "resource" | "contact-rfq" | "legal";
  sections: PageSection[];
  faqs?: PageFAQ[];
  evidenceImages?: PageEvidenceImageGroup[];
  relatedLinks: SiteLink[];
  cta?: SiteLink;
  secondaryCta?: SiteLink;
  heroDensity?: "standard" | "compact";
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
  { label: "Official Websites, Domains & Company Entities", href: routes.officialResources },
];

const resourceLinks: NavItem[] = [
  { label: "Resources / FAQ", href: routes.resources },
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
      { label: "Official Websites, Domains & Company Entities", href: routes.officialResources },
      { label: "Contact", href: routes.contact },
      { label: "Request a Quote", href: routes.requestQuote },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: routes.resources },
      { label: "RFQ Preparation", href: routes.requestQuote },
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

const formatFaqItem = (faq: PageFAQ) => `${faq.question} ${faq.answer}`;

const pcbaFaqs: PageFAQ[] = [
  {
    question: "What is the difference between PCB Assembly, PCBA, and Turnkey PCBA?",
    answer:
      "PCB Assembly is the service name, PCBA is the assembled board, and Turnkey PCBA means Venture can discuss PCB fabrication support, sourcing, assembly, inspection, testing, packaging, and delivery around approved project files.",
  },
  {
    question: "What files are needed for a PCB Assembly quote?",
    answer:
      "Gerber or ODB++, BOM, CPL, assembly drawings, quantity, testing expectations, and delivery requirements are the main RFQ inputs.",
  },
  {
    question: "Can consigned, partial-turnkey, and full-turnkey projects be reviewed?",
    answer:
      "Yes. The quotation should define which materials are buyer-supplied, which items Venture reviews or sources, and what inspection or testing scope applies.",
  },
];

const emsFaqs: PageFAQ[] = [
  {
    question: "When does a PCB Assembly project become EMS or Box Build?",
    answer:
      "A project usually moves into EMS or Box Build when the scope extends beyond assembled boards into enclosure, cable or harness, mechanical parts, system testing, labeling, packaging, or delivery preparation.",
  },
  {
    question: "What extra inputs are needed for EMS review?",
    answer:
      "System BOM, enclosure drawings, cable or harness drawings, assembly notes, firmware or configuration requirements, system-level test steps, labels, packaging, and accessories should be shared when available.",
  },
];

const resourcesFaqs: PageFAQ[] = [
  {
    question: "What is the minimum information needed to start an RFQ?",
    answer:
      "Gerber or ODB++, BOM, quantity and contact details are a useful starting point. CPL, drawings, testing and packaging information improve the quotation and engineering review.",
  },
  {
    question: "Do I need a complete test plan before contacting Venture?",
    answer:
      "No. Share the test information already available and identify what remains open. A clearer test plan may still be required before final quotation or production.",
  },
  {
    question: "Can I request an NDA before sharing files?",
    answer:
      "An NDA can be discussed by email. The signing entity, document version, scope and process should be confirmed before sensitive files are transferred.",
  },
  {
    question: "Does Venture have one standard MOQ?",
    answer:
      "MOQ is reviewed from the board, BOM, material status, setup, project type and quantity. The website does not state one universal quantity rule.",
  },
  {
    question: "Can alternative components be proposed?",
    answer:
      "Yes, availability or lifecycle risks may lead to candidate alternatives. Any alternative must be approved by the customer before use.",
  },
];

const requestQuoteFaqs: PageFAQ[] = [
  {
    question: "Is file upload required for the first-launch RFQ flow?",
    answer:
      "No. The first launch uses email. Buyers can send the available RFQ package or start by email to confirm the preferred transfer method for large or sensitive files.",
  },
  {
    question: "Which email should receive RFQ files?",
    answer:
      `Send RFQ files, project details, and general company or channel questions to ${CONTACT_CHANNELS.rfqEmail}.`,
  },
  {
    question: "What should the RFQ email include?",
    answer:
      "Include company name, contact person, project type, quantity, target schedule, delivery expectations, and the current file package.",
  },
];

const officialResourcesFaqs: PageFAQ[] = [
  {
    question: "Which Venture Electronics website should buyers use?",
    answer:
      "venture-mfg.com is the current official main website for Venture Electronics buyer information, service pages, and contact routing.",
  },
  {
    question: "Is venture-pcba.com still connected to Venture Electronics?",
    answer:
      "venture-pcba.com is a legacy PCBA-focused vertical asset connected to Venture Electronics, but it should not be treated as the current official main website.",
  },
  {
    question: "Why does Venture Electronics have several domains?",
    answer:
      "Some domains are current, some are legacy or supporting assets, and some are historical, reserved, or listed to prevent confusion with non-official websites.",
  },
  {
    question: "Can buyers send RFQ files through old or redirected domains?",
    answer:
      "No. Buyers should use venture-mfg.com and confirmed Venture Electronics contact channels for current inquiries and RFQ file routing.",
  },
  {
    question: "Is venturepcb.com owned by Venture Electronics?",
    answer:
      "No. venturepcb.com is not owned or operated by Venture Electronics and should not be used for Venture Electronics inquiries.",
  },
  {
    question: "How can I verify a Venture-related website before sharing files?",
    answer:
      "Start from venture-mfg.com, check this domain map, or contact Venture Electronics through the email and phone number shown on this website before sharing Gerber files, BOMs, drawings, or confidential project documents.",
  },
];

export const domainGovernanceGroups: DomainGovernanceGroup[] = [
  {
    title: "Current official main website",
    domains: [
      {
        domain: "venture-mfg.com",
        href: CONTACT_CHANNELS.currentMainWebsite,
        currentRole: "Venture Electronics' current official main website.",
        howItIsUsed:
          "Company information, service pages, buyer resources, and inquiry routing.",
        buyerGuidance:
          "Use this website and the contact details shown here for current Venture Electronics communication.",
        safePublicInquiries:
          "Yes - use the current Venture Electronics contact path on venture-mfg.com.",
      },
    ],
  },
  {
    title: "Legacy / vertical web assets",
    domains: [
      {
        domain: "venture-pcba.com",
        href: "https://venture-pcba.com/",
        currentRole:
          "A legacy PCBA-focused website connected to Venture Electronics.",
        howItIsUsed:
          "It may still appear in older PCBA references and contains PCBA-related content.",
        buyerGuidance:
          "It is not the current main website. Use venture-mfg.com for the latest company information and inquiries.",
        safePublicInquiries:
          "Use the current venture-mfg.com contact path for new public inquiries.",
      },
    ],
  },
  {
    title: "Venture-owned or associated web assets",
    domains: [
      {
        domain: "pcb-supplier.com",
        href: "https://pcb-supplier.com/",
        currentRole:
          "Venture-owned / associated web asset. Not the current official main Venture Electronics website.",
        howItIsUsed:
          "It may appear as a Venture-owned or Venture-associated website asset.",
        buyerGuidance:
          "Use venture-mfg.com for official Venture Electronics information and inquiries unless Venture confirms a specific role for this site.",
        safePublicInquiries:
          "Use venture-mfg.com for current public inquiries unless Venture confirms a public inquiry role.",
      },
      {
        domain: "v-cst.com",
        currentRole: "Related company / registry-linked asset.",
        howItIsUsed:
          "It may appear in company or registry information connected with the broader business structure.",
        buyerGuidance:
          "It is not the current buyer-facing Venture Electronics website unless Venture confirms a specific purpose.",
        safePublicInquiries:
          "No - use the current venture-mfg.com contact path until the relationship is confirmed.",
      },
    ],
  },
  {
    title: "Historical email / redirected domains",
    domains: [
      {
        domain: "venturegroup-mfg.com",
        currentRole: "Historical email or redirected domain asset.",
        howItIsUsed:
          "It may appear in older communication records or redirects.",
        buyerGuidance:
          "Do not send new RFQ files through this domain. Use venture-mfg.com and confirmed contact details.",
        safePublicInquiries:
          "No - use the current venture-mfg.com contact path for public inquiries.",
      },
      {
        domain: "venturegroup-mfg.net",
        currentRole: "Historical email or redirected domain asset.",
        howItIsUsed:
          "It may appear in older communication records or redirects.",
        buyerGuidance:
          "Do not send new RFQ files through this domain. Use venture-mfg.com and confirmed contact details.",
        safePublicInquiries:
          "No - use the current venture-mfg.com contact path for public inquiries.",
      },
      {
        domain: "uni-venture.com",
        currentRole:
          "Historical JV or old email-related asset, not the current public website.",
        howItIsUsed:
          "It may appear in older joint-venture or email-related references.",
        buyerGuidance:
          "Do not cite it as the current Venture Electronics website or send new RFQs through it.",
        safePublicInquiries:
          "No - use the current venture-mfg.com contact path for public inquiries.",
      },
    ],
  },
  {
    title: "Registered / reserved / unused / candidate domains",
    domains: [
      {
        domain: "venture-pcb.com",
        currentRole: "Registered / unused.",
        howItIsUsed: "Not used as a public inquiry website.",
        buyerGuidance:
          "Do not use this domain for current Venture Electronics inquiries.",
        safePublicInquiries:
          "No - use the current venture-mfg.com contact path for public inquiries.",
      },
      {
        domain: "ventureems.com",
        currentRole: "Registered / candidate.",
        howItIsUsed: "Not used as the current official website.",
        buyerGuidance:
          "Do not use this domain for current Venture Electronics inquiries.",
        safePublicInquiries:
          "No - use the current venture-mfg.com contact path for public inquiries.",
      },
      {
        domain: "venture-ems.com",
        currentRole: "Registered / candidate.",
        howItIsUsed: "Not used as the current official website.",
        buyerGuidance:
          "Do not use this domain for current Venture Electronics inquiries.",
        safePublicInquiries:
          "No - use the current venture-mfg.com contact path for public inquiries.",
      },
      {
        domain: "venturepcba.com",
        currentRole: "Not active / to verify.",
        howItIsUsed: "Not the same as venture-pcba.com.",
        buyerGuidance:
          "Do not use this domain for inquiries unless Venture confirms a public role.",
        safePublicInquiries:
          "No - use the current venture-mfg.com contact path for public inquiries.",
      },
    ],
  },
  {
    title: "Not Venture-owned / not official",
    domains: [
      {
        domain: "venturepcb.com",
        currentRole: "Not Venture-owned / not official.",
        howItIsUsed:
          "This domain is not owned or operated by Venture Electronics.",
        buyerGuidance:
          "venturepcb.com is not owned or operated by Venture Electronics and should not be used for Venture Electronics inquiries.",
        safePublicInquiries:
          "No - do not send Venture Electronics inquiries through this domain.",
      },
    ],
  },
];

export const homeFaqs: PageFAQ[] = [
  {
    question: "What files are needed for a PCB Assembly quote?",
    answer:
      "Start with Gerber or ODB++ files, a BOM, CPL or pick-and-place data, an assembly drawing, the required quantity and any testing requirements. Packaging, target schedule and special-process notes help define the quotation scope.",
  },
  {
    question: "What is the difference between PCB Assembly, PCBA and Turnkey PCBA?",
    answer:
      "PCB Assembly is the buyer-readable service name, while PCBA is the common abbreviation for the assembled circuit board. Turnkey PCBA describes a broader delivery model that may coordinate PCB fabrication support, BOM review, component sourcing, assembly and project-specific testing.",
  },
  {
    question: "Can Venture Electronics help source components?",
    answer:
      "Venture can review the BOM, check availability and lifecycle risks, and discuss sourcing options. Any alternative component must be reviewed against the design requirements and approved by the customer before use.",
  },
  {
    question: "Can testing be included before delivery?",
    answer:
      "Inspection or testing can be discussed according to the product, fixture availability, firmware, test procedure and buyer acceptance criteria. Not every project uses the same combination of AOI, X-ray, ICT, FCT or functional testing.",
  },
  {
    question: "When does a project need EMS or Box Build support?",
    answer:
      "EMS or Box Build becomes relevant when the project extends beyond an assembled board into an enclosure, cable or wire harness, mechanical parts, system-level checks, labeling, packaging or delivery preparation.",
  },
];

const pageVisuals = {
  services: {
    src: "/identity-smt-floor.jpg",
    alt: "SMT production floor used for electronics manufacturing service context",
    caption: "Manufacturing-service context across PCB assembly, EMS, sourcing, and fabrication support.",
  },
  pcba: {
    src: "/hero-pcba-smt.jpg",
    alt: "SMT PCB assembly line for PCBA projects",
    caption: "PCB assembly visual for turnkey-first electronics manufacturing projects.",
  },
  ems: {
    src: "/hero-ems-factory.jpg",
    alt: "Electronics production floor for EMS and box build project discussion",
    caption: "Production-floor context for assembly, testing, packaging, and delivery support.",
  },
  sourcing: {
    src: "/identity-pcb-closeup.jpg",
    alt: "PCB and component detail for BOM review",
    caption: "Component and PCB detail for BOM review and sourcing discussion.",
  },
  fabrication: {
    src: "/factory-4.jpg",
    alt: "PCB fabrication and assembly coordination detail",
    caption: "Board-level visual for fabrication-to-assembly coordination.",
  },
  quality: {
    src: "/capabilities-machine.jpg",
    alt: "Production equipment used for PCBA quality planning context",
    caption: "Equipment context for quality and testing requirement discussions.",
  },
  about: {
    src: "/identity-smt-floor.jpg",
    alt: "Electronics manufacturing floor used for Venture company context",
    caption: "Manufacturing-floor context for Venture company and project-fit information.",
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
    src: "/factory-2.jpg",
    alt: "SMT production floor used for Venture contact context",
    caption: "Production-floor context for Venture Electronics inquiry channels.",
  },
  requestQuote: {
    src: "/factory-1.jpg",
    alt: "SMT production line used for RFQ preparation context",
    caption: "Production-line context for preparing a PCBA or EMS quote request.",
  },
  legal: {
    src: "/factory-5.jpg",
    alt: "Automated assembly equipment used as legal page visual context",
    caption: "Manufacturing context visual for utility pages.",
  },
  sitemap: {
    src: "/identity-pcb-closeup.jpg",
    alt: "PCB detail used for sitemap context",
    caption: "Board-level visual context for the Venture route map.",
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
      {
        title: "PCB Assembly FAQ",
        items: pcbaFaqs.map(formatFaqItem),
        kind: "proof",
      },
    ],
    faqs: pcbaFaqs,
    evidenceImages: [
      {
        title: "PCB Assembly process context",
        images: ["smtPickAndPlace", "waveSoldering"],
        afterSectionIndex: 1,
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
      {
        title: "EMS and Box Build FAQ",
        items: emsFaqs.map(formatFaqItem),
        kind: "proof",
      },
    ],
    faqs: emsFaqs,
    evidenceImages: [
      {
        title: "EMS and Box Build process context",
        images: ["boxBuildAssembly", "finishedProductFunctionTest"],
        afterSectionIndex: 0,
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
    evidenceImages: [
      {
        title: "Inspection and testing process context",
        images: ["firstArticleInspection", "aoiInspection"],
        afterSectionIndex: 0,
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
        title: "Official websites, domains and company entities",
        body:
          "Venture Electronics uses venture-mfg.com as its current official main website. Some older, vertical, redirected, reserved, or related-company domains may still appear online or in business records. See the Official Websites, Domains & Company Entities page for the current domain asset map.",
        links: [
          {
            label: "View Official Websites & Domain Asset Map",
            href: routes.officialResources,
          },
        ],
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
    evidenceImages: [
      {
        title: "Factory visit and production review context",
        images: ["factoryVisit03", "factoryVisit04"],
        afterSectionIndex: 1,
      },
    ],
    relatedLinks: [
      { label: "Official Websites, Domains & Company Entities", href: routes.officialResources },
      { label: "Services", href: routes.services },
      { label: "Contact", href: routes.contact },
    ],
    cta: { label: "View Services", href: routes.services },
    secondaryCta: { label: "Official Websites, Domains & Company Entities", href: routes.officialResources },
  },
  officialResources: {
    label: "Official Websites, Domains & Company Entities",
    href: routes.officialResources,
    eyebrow: "Brand and official resources",
    title: "Official Websites, Domains & Company Entities",
    seoTitle: "Official Venture Electronics Websites, Domains & Company Entities",
    metaDescription:
      "Verify Venture Electronics' current official website, legacy PCBA-focused domain assets, related domain roles, and safe inquiry contact paths.",
    role: "Buyer guide to Venture Electronics websites and contact channels.",
    summary:
      "Venture Electronics uses several websites and domain assets for different purposes. This page explains which website is the current official source, which domains are historical or supporting assets, and which channels buyers should use for inquiries.",
    template: "brand-authority",
    visual: pageVisuals.officialResources,
    heroDensity: "compact",
    showHeroVisual: false,
    directAnswer: [
      "For current Venture Electronics company information, services, buyer resources, and RFQ communication, use venture-mfg.com and the contact details shown on this website.",
    ],
    sections: [
      {
        title: "Quick answer",
        body:
          "Use this table before choosing a Venture Electronics website, sending files, or citing a domain.",
        quickAnswers: [
          {
            question: "Current official main website",
            answer: CONTACT_CHANNELS.currentMainDomain,
            href: CONTACT_CHANNELS.currentMainWebsite,
          },
          {
            question: "PCBA legacy / vertical asset",
            answer: CONTACT_CHANNELS.legacyPcbaDomain,
            href: "https://venture-pcba.com/",
          },
          {
            question: "Main inquiry path",
            answer: CONTACT_CHANNELS.rfqEmail,
            href: `mailto:${CONTACT_CHANNELS.rfqEmail}`,
          },
          {
            question: "Not Venture-owned domain",
            answer: "venturepcb.com",
          },
          {
            question: "Where to check domain roles",
            answer: "This page",
          },
        ],
        links: [
          { label: "Current Website", href: "#current-website" },
          { label: "Legacy Assets", href: "#legacy-assets" },
          { label: "Associated Sites", href: "#associated-sites" },
          { label: "Historical Domains", href: "#historical-domains" },
          { label: "Reserved Domains", href: "#reserved-domains" },
          { label: "Not Official", href: "#not-official" },
          { label: "Verification", href: "#verification" },
          { label: "FAQ", href: "#faq" },
        ],
        kind: "quick-answer",
        featured: true,
      },
      {
        title: "Review status and source basis",
        items: [
          "Last reviewed: 2026-06-28.",
          "This page is maintained as the current Venture Electronics domain and official-asset guide.",
          "Domain roles may change; buyers should use venture-mfg.com and confirmed Venture Electronics contact channels for current inquiries.",
        ],
        kind: "facts",
      },
      {
        title: "Company entity and inquiry source of truth",
        items: [
          "Primary brand: Venture Electronics.",
          "English entity: Venture Electronics Technology Ltd.",
          "Main service positioning: PCB Manufacturing, PCB Assembly and EMS Manufacturing partner.",
          `Current official main website: ${CONTACT_CHANNELS.currentMainDomain}.`,
          `RFQ email: ${CONTACT_CHANNELS.rfqEmail}.`,
          `General inquiry email: ${CONTACT_CHANNELS.generalEmail}.`,
          `Phone: ${CONTACT_CHANNELS.phone}.`,
          `Fax: ${CONTACT_CHANNELS.fax}.`,
          `Address: ${CONTACT_CHANNELS.address}.`,
          "For legal-entity, registry, contract, or file-transfer questions, contact Venture Electronics before sharing project documents.",
        ],
        kind: "facts",
      },
      {
        title: "How buyers should use this domain list",
        body:
          "Use this page to check which web address is current, which assets are legacy or reserved, and where a buyer should safely send project files. Some listed domains are intentionally plain text because they should not be treated as active public inquiry channels. Only venture-mfg.com and confirmed Venture Electronics contact emails should be used as the default public inquiry path.",
        links: [
          { label: "Open venture-mfg.com", href: CONTACT_CHANNELS.currentMainWebsite },
          { label: "Request a Quote", href: routes.requestQuote },
          { label: "Contact Venture Electronics", href: routes.contact },
        ],
      },
      ...domainGovernanceGroups.map((group) => ({
        anchorId:
          group.title === "Current official main website"
            ? "current-website"
            : group.title === "Legacy / vertical web assets"
              ? "legacy-assets"
              : group.title === "Venture-owned or associated web assets"
                ? "associated-sites"
                : group.title === "Historical email / redirected domains"
                  ? "historical-domains"
                  : group.title === "Registered / reserved / unused / candidate domains"
                    ? "reserved-domains"
                    : "not-official",
        title: group.title,
        domainRecords: group.domains,
        kind:
          group.title === "Registered / reserved / unused / candidate domains"
            ? ("domain-table" as const)
            : ("domain-cards" as const),
      })),
      {
        anchorId: "verification",
        title: "How to choose the right Venture Electronics contact channel",
        items: [
          "For current company information, services, and RFQ communication, start from venture-mfg.com.",
          "If you see an older Venture-related domain, check its role on this page before sending files.",
          "Do not send Gerber files, BOMs, drawings, or confidential project documents through historical, reserved, candidate, or unconfirmed domains.",
          "When in doubt, contact Venture Electronics through the email and phone number shown on this website.",
        ],
        kind: "checklist",
      },
      {
        anchorId: "faq",
        title: "FAQ",
        faqItems: officialResourcesFaqs,
        kind: "faq",
      },
    ],
    faqs: officialResourcesFaqs,
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
        items: resourcesFaqs.map(formatFaqItem),
        kind: "proof",
      },
      {
        title: "Approved catalog downloads",
        body:
          "These English catalog files are linked from the official Venture Electronics catalog page and can be used as current buyer reference downloads.",
        links: [
          {
            label: "(EN) Venture Electronics EMS Catalog PDF",
            href: "/assets/downloads/venture/EN-Venture-Electronics-EMS-Catalog-2023-09-new-1.pdf",
          },
          {
            label: "(EN) Venture Electronics PCB Solution PDF",
            href: "/assets/downloads/venture/EN-Venture-Electronics-PCB-Solution-09-1.pdf",
          },
        ],
      },
    ],
    faqs: resourcesFaqs,
    relatedLinks: [
      { label: "Official Websites, Domains & Company Entities", href: routes.officialResources },
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
          `RFQ files: ${CONTACT_CHANNELS.rfqEmail}.`,
          `General inquiry: ${CONTACT_CHANNELS.generalEmail}.`,
          `Phone: ${CONTACT_CHANNELS.phone}.`,
          `Fax: ${CONTACT_CHANNELS.fax}.`,
          `Address: ${CONTACT_CHANNELS.address}.`,
          `Current main website: ${CONTACT_CHANNELS.currentMainDomain}.`,
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
    cta: { label: "Email Venture Electronics", href: `mailto:${CONTACT_CHANNELS.generalEmail}` },
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
      `Email the project files and requirements to ${CONTACT_CHANNELS.rfqEmail}. Venture Electronics reviews the available information, identifies missing inputs and confirms the quotation scope before procurement or production begins.`,
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
          `Email RFQ files and project details to ${CONTACT_CHANNELS.rfqEmail}.`,
          `Use ${CONTACT_CHANNELS.generalEmail} for general company or official-channel questions.`,
          "Include company name, contact person, project type, quantity, target schedule, and delivery expectations.",
          "For large files, NDA discussion, or sensitive documents, start by email and ask for the preferred transfer method.",
        ],
        kind: "facts",
      },
      {
        title: "RFQ email FAQ",
        items: requestQuoteFaqs.map(formatFaqItem),
        kind: "proof",
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
    faqs: requestQuoteFaqs,
    relatedLinks: [
      { label: "Contact", href: routes.contact },
      { label: "Services", href: routes.services },
      { label: "Resources", href: routes.resources },
    ],
    cta: { label: "Prepare RFQ Email", href: routes.requestQuote },
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
      `The current RFQ process uses email. Open Request a Quote for the file checklist and the confirmed ${CONTACT_CHANNELS.rfqEmail} RFQ route.`,
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
