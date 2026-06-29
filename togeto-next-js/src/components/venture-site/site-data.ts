import { routes, sitemapLinks, type SiteLink } from "./site-routes";
import {
  CONTACT_CHANNELS,
  type DomainGovernanceGroup,
  type NavItem,
  type PageData,
  type PageFAQ,
  type PageVisual,
  type ServiceItem,
} from "./content";

export { routes, sitemapLinks };
export type {
  ContentTable,
  ContentTableColumn,
  ContentTableRow,
  DomainGovernanceGroup,
  DomainGovernanceRecord,
  NavItem,
  PageData,
  PageEvidenceImageGroup,
  PageFAQ,
  PageSection,
  PageVisual,
  QuickAnswerRow,
  ServiceItem,
} from "./content";
export type { SiteLink };

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
    question: "What files are needed for a PCB Assembly quote?",
    answer:
      "Gerber or ODB++, BOM, CPL, assembly drawing, quantity, testing requirements, and delivery expectations are the main RFQ inputs.",
  },
  {
    question: "Can I start an RFQ without a complete test plan?",
    answer:
      "Yes, but Venture may ask for fixture, firmware, acceptance criteria, or test procedure details before confirming testing scope.",
  },
  {
    question: "Can Venture review BOM alternatives?",
    answer:
      "Alternatives can be discussed when sourcing or lifecycle risk appears, but buyer approval is required before substitution.",
  },
  {
    question: "How should I send large Gerber, BOM, or CPL packages?",
    answer:
      "Start by email and ask for the preferred transfer method before sending sensitive or large files.",
  },
  {
    question: "Does Venture provide a standard schedule for every project?",
    answer:
      "Schedule is reviewed by project because BOM availability, complexity, quantity, and testing scope vary.",
  },
  {
    question: "What should be included for EMS / Box Build review?",
    answer:
      "System BOM, enclosure drawings, cable or harness details, functional test method, labels, packaging, and delivery requirements should be shared when available.",
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

const qualityTestingFaqs: PageFAQ[] = [
  {
    question: "Can Venture provide X-Ray inspection?",
    answer:
      "X-Ray inspection can be discussed for BGA, QFN, hidden-joint, or other risk areas when the package list and acceptance requirements are clear.",
  },
  {
    question: "Does every project include ICT or FCT?",
    answer:
      "No. ICT, FCT, and functional testing depend on test points, fixture availability, firmware, procedure, quantity, and acceptance criteria.",
  },
  {
    question: "What should buyers provide for functional testing?",
    answer:
      "Provide the test procedure, firmware or configuration, fixture information, golden sample if available, and pass/fail criteria.",
  },
  {
    question: "Can reliability testing be arranged?",
    answer:
      "Reliability or environmental testing should be discussed by standard, condition, sample count, duration, and report requirement.",
  },
  {
    question: "What inspection records can be discussed?",
    answer:
      "Inspection and test records should follow the agreed production, inspection, testing, and shipment scope.",
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
    seoTitle: "Venture Electronics Services | PCB Assembly, PCBA, EMS & Manufacturing Support",
    metaDescription:
      "Compare Venture Electronics service paths for PCB Assembly, Turnkey PCBA, EMS & Box Build, component sourcing, BOM review, PCB fabrication support, and quality testing.",
    role: "Service overview for PCBA-first manufacturing inquiries.",
    summary:
      "PCB Assembly / PCBA is the primary service entry. EMS & Box Build applies when a project extends beyond an assembled board, while sourcing, BOM, DFM and PCB fabrication support help prepare the project for manufacturing review.",
    template: "service-conversion",
    visual: pageVisuals.services,
    sections: [
      {
        title: "How Venture services fit together",
        body:
          "PCB Assembly / PCBA is the main buyer entry point. Turnkey PCBA is a delivery model. EMS & Box Build is a higher manufacturing scope. PCB Fabrication, Component Sourcing, BOM / DFM Review, and Quality & Testing support the project around the agreed scope.",
        table: {
          columns: [
            { key: "goal", label: "Buyer goal" },
            { key: "start", label: "Recommended starting page" },
            { key: "support", label: "Supporting capability" },
            { key: "prepare", label: "What to prepare" },
          ],
          rows: [
            {
              goal: "Need assembled boards",
              start: "PCB Assembly / PCBA",
              support: "BOM / DFM / Testing",
              prepare: "Gerber or ODB++, BOM, CPL, assembly notes",
            },
            {
              goal: "Need supplier-managed sourcing",
              start: "Component Sourcing & BOM Review",
              support: "Customer-approved alternatives",
              prepare: "BOM rules, no-substitution parts, approved vendors",
            },
            {
              goal: "Need bare-board-to-assembly coordination",
              start: "PCB Fabrication Support",
              support: "Stack-up, material, finish, panelization",
              prepare: "Gerber, stack-up, material and finish requirements",
            },
            {
              goal: "Need product-level assembly",
              start: "EMS & Box Build",
              support: "System BOM, enclosure, cable/harness, FCT",
              prepare: "System files, assembly instructions, packaging requirements",
            },
            {
              goal: "Need quality planning",
              start: "Quality & Testing",
              support: "Test procedure, fixture, records",
              prepare: "Acceptance criteria, firmware, golden sample, report requirements",
            },
          ],
        },
        kind: "content-table",
        featured: true,
      },
      {
        title: "What we intentionally keep consolidated",
        body:
          "Detailed material, stack-up, testing, engineering, and industry questions are handled through the relevant service pages, buyer resources, and quote-preparation guidance so buyers can find the right starting point without navigating many narrow pages.",
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
    seoTitle: "PCB Assembly / PCBA Services | Venture Electronics Turnkey PCBA",
    metaDescription:
      "Prepare a PCB Assembly or Turnkey PCBA RFQ with Venture Electronics, including assembly scope, BOM review, sourcing model, inspection, testing, packaging, and project schedule boundaries.",
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
        title: "PCB Assembly capability review",
        body:
          "Use this table to prepare a practical PCB Assembly / PCBA discussion. Final scope, schedule, and testing depend on the project files, BOM availability, quantity, and agreed inspection requirements.",
        table: {
          columns: [
            { key: "area", label: "Capability area" },
            { key: "scope", label: "Typical review scope" },
            { key: "confirm", label: "Buyer should confirm" },
          ],
          rows: [
            {
              area: "Assembly types",
              scope: "SMT, through-hole, and mixed assembly",
              confirm: "Board design, component package, assembly drawing",
            },
            {
              area: "Component packages",
              scope: "Passive parts, BGA/QFN/QFP, connectors, terminals",
              confirm: "BOM, MPN, package, polarity notes",
            },
            {
              area: "Supply model",
              scope: "Consigned, partial-turnkey, and full-turnkey discussion",
              confirm: "Buyer-supplied parts and sourcing rules",
            },
            {
              area: "File requirements",
              scope: "Gerber or ODB++, BOM, CPL, assembly drawing",
              confirm: "Revision control and approved files",
            },
            {
              area: "Testing",
              scope: "AOI, X-Ray, ICT/FCT, or functional testing when applicable",
              confirm: "Fixture, firmware, test method, acceptance criteria",
            },
            {
              area: "Packaging",
              scope: "ESD, labels, shipment requirements",
              confirm: "Delivery destination and document needs",
            },
            {
              area: "Schedule",
              scope: "Reviewed by project",
              confirm: "BOM availability, complexity, test scope, and quantity",
            },
          ],
        },
        kind: "content-table",
        featured: true,
      },
      {
        title: "PCB Assembly delivery models",
        items: [
          "Consigned assembly: buyer supplies selected or all parts and Venture reviews the assembly, inspection, and testing scope around the supplied materials.",
          "Partial turnkey: buyer and Venture split sourcing responsibility based on approved sourcing rules and project risk.",
          "Full turnkey discussion: Venture can review bare-board support, sourcing, assembly, inspection, testing, packaging, and delivery around approved files.",
        ],
        kind: "list",
      },
      {
        title: "Assembly process overview",
        items: [
          "File review: Gerber or ODB++, BOM, CPL, assembly drawing, quantity, and delivery expectations.",
          "BOM review: MPN completeness, lifecycle risk, MOQ, lead-time risk, and substitution restrictions.",
          "Material readiness: buyer-supplied, Venture-sourced, or mixed supply model confirmed before build.",
          "Assembly: SMT, through-hole, or mixed assembly according to approved files and process requirements.",
          "Inspection and testing: SPI, AOI, X-Ray, ICT/FCT, or functional testing when applicable and agreed.",
          "Packaging and delivery: ESD, labels, shipment documents, and destination requirements confirmed by project.",
        ],
        kind: "steps",
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
        title: "Schedule boundary",
        body:
          "PCBA schedule should be reviewed by project. Timing depends on BOM availability, part arrival, board complexity, quantity, process requirements, testing scope, and buyer approvals.",
      },
      {
        title: "PCB Assembly FAQ",
        kind: "faq",
      },
    ],
    faqs: pcbaFaqs,
    evidenceImages: [
      {
        title: "PCB Assembly process context",
        images: ["smtPickAndPlace", "waveSoldering"],
        afterSectionIndex: 1,
      },
      {
        title: "Inspection context for PCBA review",
        images: ["aoiInspection", "firstArticleInspection"],
        afterSectionIndex: 4,
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
    directAnswer: [
      "EMS & Box Build is a fit when the buyer can define system-level inputs such as the system BOM, enclosure, cable or harness details, functional test expectations, labels, packaging, and delivery requirements.",
    ],
    sections: [
      {
        title: "EMS & Box Build scope",
        body:
          "EMS Manufacturing describes a broader electronics manufacturing scope around an assembled board. Box Build becomes relevant when the project includes enclosure, cable or harness, mechanical parts, system-level testing, labels, packaging, or delivery preparation.",
        table: {
          columns: [
            { key: "item", label: "EMS / Box Build item" },
            { key: "meaning", label: "What it means" },
            { key: "input", label: "Buyer input" },
          ],
          rows: [
            {
              item: "PCBA integration",
              meaning: "Assembled boards integrated into a larger unit",
              input: "Approved PCBA files and revision",
            },
            {
              item: "Enclosure / mechanical parts",
              meaning: "Housing, panels, fasteners, mechanical constraints",
              input: "Drawings and material notes",
            },
            {
              item: "Cable / harness",
              meaning: "Cable routing, connectors, harness drawings",
              input: "Cable drawings and connector specs",
            },
            {
              item: "System-level test",
              meaning: "Functional check of assembled unit",
              input: "Firmware, fixture, test procedure",
            },
            {
              item: "Label / serial / packaging",
              meaning: "Identification and shipment preparation",
              input: "Label rules and packaging standard",
            },
            {
              item: "Delivery support",
              meaning: "Shipment and document discussion",
              input: "Destination, Incoterms, documents",
            },
          ],
        },
        kind: "content-table",
        featured: true,
      },
      {
        title: "When EMS & Box Build is a fit",
        body:
          "EMS & Box Build should be reviewed after the buyer can define the system BOM, mechanical requirements, cable or harness details, functional test expectations, and packaging needs. If these inputs are not ready, the project may first begin as a PCBA or prototype review.",
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
        title: "BOM risk review",
        body:
          "BOM and DFM review helps reduce sourcing and manufacturing risk before assembly. Venture can review BOM completeness, availability, MOQ, lifecycle risk, package questions, customer-approved alternatives, and DFM / DFA items that may affect fabrication, assembly, or testing.",
        table: {
          columns: [
            { key: "risk", label: "BOM risk" },
            { key: "why", label: "Why it matters" },
            { key: "action", label: "Buyer action" },
          ],
          rows: [
            {
              risk: "Missing MPN / manufacturer",
              why: "Hard to quote accurately",
              action: "Provide approved MPN and manufacturer",
            },
            {
              risk: "Obsolete or long-lead parts",
              why: "May delay sourcing",
              action: "Allow alternative review",
            },
            {
              risk: "No-substitution components",
              why: "Must be protected",
              action: "Mark clearly in BOM",
            },
            {
              risk: "Package mismatch",
              why: "Can affect assembly footprint",
              action: "Confirm footprint and package",
            },
            {
              risk: "MOQ constraints",
              why: "Affects cost and schedule",
              action: "Confirm acceptable quantity",
            },
            {
              risk: "Compliance requirement",
              why: "Affects sourcing and documentation",
              action: "State project requirement early",
            },
          ],
        },
        kind: "content-table",
        featured: true,
      },
      {
        title: "Alternative approval flow",
        body:
          "Venture Electronics does not replace parts without buyer approval. When availability or lifecycle risk appears, candidate alternatives may be discussed, but the buyer should approve any substitution before procurement or assembly.",
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
        title: "Fabrication inputs for assembly-ready boards",
        body:
          "PCB Fabrication Support helps align bare-board requirements with downstream assembly, inspection, testing, and delivery needs. It supports the PCBA and turnkey assembly workflow rather than acting as a separate low-cost PCB-only platform.",
        table: {
          columns: [
            { key: "input", label: "Input" },
            { key: "why", label: "Why it matters" },
          ],
          rows: [
            { input: "Gerber / ODB++", why: "Board production and review" },
            { input: "Stack-up", why: "Layer structure, impedance, manufacturability" },
            { input: "Material", why: "Thermal, mechanical, and electrical requirements" },
            { input: "Copper weight", why: "Current capacity and fabrication process" },
            { input: "Surface finish", why: "Solderability and shelf-life" },
            { input: "Panelization", why: "Assembly efficiency and handling" },
            { input: "Fiducials / test points", why: "SMT, AOI, and test planning" },
            { input: "Special requirements", why: "Via-in-pad, impedance, mask, marking, finish" },
          ],
        },
        kind: "content-table",
        featured: true,
      },
      {
        title: "Why fabrication topics stay consolidated",
        body:
          "Material, stack-up, and process questions are handled as fabrication inputs and buyer guidance within the assembly-ready workflow, so buyers can prepare the right information without navigating separate narrow topic pages.",
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
    seoTitle: "Quality & Testing for PCBA and EMS Projects | Venture Electronics",
    metaDescription:
      "Review Venture Electronics quality and testing planning for PCBA and EMS projects, including SPI, AOI, X-Ray, ICT/FCT, functional testing, FAI, records, and buyer inputs.",
    role: "Quality and testing discussion point for PCBA and EMS project planning.",
    summary:
      "Inspection and testing scope depends on the product, files, fixture, firmware, standards, acceptance criteria, sample plan, and records required for the project.",
    template: "quality-trust",
    visual: pageVisuals.quality,
    directAnswer: [
      "Venture can discuss inspection and testing methods such as SPI, AOI, X-Ray, ICT/FCT, functional testing, FAI, and reliability or environmental testing when the project requirements and acceptance criteria are clear.",
    ],
    sections: [
      {
        title: "Inspection and testing methods",
        body:
          "The right method depends on product risk, component package, test points, firmware, fixtures, standards, and buyer acceptance criteria.",
        table: {
          columns: [
            { key: "method", label: "Method / equipment" },
            { key: "checks", label: "What it helps check" },
            { key: "applies", label: "When it applies" },
            { key: "input", label: "Buyer input needed" },
          ],
          rows: [
            {
              method: "SPI",
              checks: "Solder paste volume and position",
              applies: "SMT process control",
              input: "Board and stencil requirements",
            },
            {
              method: "AOI",
              checks: "Component placement, polarity, and solder quality",
              applies: "SMT / assembly inspection",
              input: "Acceptance criteria if special",
            },
            {
              method: "Visual inspection",
              checks: "Assembly workmanship and visible issues",
              applies: "General assembly review",
              input: "Workmanship or cosmetic requirements",
            },
            {
              method: "X-Ray",
              checks: "Hidden solder joints and BGA/QFN risks",
              applies: "BGA, QFN, and hidden joints",
              input: "Package list and risk areas",
            },
            {
              method: "ICT / FCT",
              checks: "Electrical or functional verification",
              applies: "Project-specific testing",
              input: "Fixture, firmware, test procedure",
            },
            {
              method: "FAI",
              checks: "First article verification",
              applies: "New build / NPI",
              input: "Approved sample or criteria",
            },
            {
              method: "Reliability / environmental testing",
              checks: "Stress or environmental behavior",
              applies: "If required by project",
              input: "Standard, sample count, and conditions",
            },
          ],
        },
        kind: "content-table",
        featured: true,
      },
      {
        title: "6-step quality and testing flow",
        body:
          "A board-only PCBA project may move from board-level testing directly to packing; a Box Build project may continue through system-level checks.",
        items: qualityFlow,
        kind: "steps",
      },
      {
        title: "Test scope inputs buyers should prepare",
        items: [
          "Product revision and approved BOM.",
          "CPL / pick-and-place file and assembly drawing.",
          "Test plan, firmware, fixture, or golden sample when functional testing is needed.",
          "Acceptance criteria, sample plan, reporting requirements, and applicable standards.",
          "Special handling, programming, coating, marking, packaging, or shipment requirements.",
        ],
        kind: "checklist",
      },
      {
        title: "Records and traceability discussion",
        items: [
          "Inspection and test records should match the agreed project scope.",
          "Barcode, serial number, lot, or process traceability should be confirmed before production if required.",
          "Special report formats, customer forms, or external-lab requirements should be shared during RFQ review.",
        ],
        kind: "facts",
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
      {
        title: "Quality & Testing FAQ",
        kind: "faq",
      },
    ],
    faqs: qualityTestingFaqs,
    evidenceImages: [
      {
        title: "Inspection and testing process context",
        images: ["firstArticleInspection", "aoiInspection", "finishedProductFunctionTest"],
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
    title: "About Venture Electronics",
    seoTitle: "About Venture Electronics | PCB Assembly, PCBA & EMS Manufacturing Partner in China",
    metaDescription:
      "Venture Electronics is a China-based PCB Manufacturing, PCB Assembly and EMS manufacturing partner supporting PCBA, turnkey coordination, component sourcing, testing, and box build project review.",
    role:
      "China-based PCB Manufacturing, PCB Assembly and EMS manufacturing partner for project-based electronics manufacturing.",
    summary:
      "Venture Electronics supports electronics buyers with PCB Manufacturing, PCB Assembly / PCBA, turnkey coordination, component sourcing, testing discussion, and EMS / Box Build support.",
    template: "brand-authority",
    visual: pageVisuals.about,
    directAnswer: [
      "Venture Electronics organizes manufacturing discussions around real project files, BOM requirements, sourcing rules, inspection needs, and delivery expectations rather than fixed platform-style production promises.",
    ],
    sections: [
      {
        title: "Company facts",
        body:
          "Use these facts for current public company context and inquiry routing.",
        table: {
          columns: [
            { key: "field", label: "Field" },
            { key: "wording", label: "Public wording" },
          ],
          rows: [
            { field: "Brand", wording: "Venture Electronics" },
            { field: "English entity", wording: "Venture Electronics Technology Ltd" },
            { field: "Current official main website", wording: CONTACT_CHANNELS.currentMainDomain },
            {
              field: "Main positioning",
              wording: "PCB Manufacturing, PCB Assembly and EMS Manufacturing partner",
            },
            { field: "Main inquiry email", wording: CONTACT_CHANNELS.generalEmail },
            { field: "Phone", wording: CONTACT_CHANNELS.phone },
            { field: "Location", wording: CONTACT_CHANNELS.location },
            {
              field: "Official domain clarification",
              wording: "See Official Websites, Domains & Company Entities",
            },
          ],
        },
        kind: "content-table",
        featured: true,
      },
      {
        title: "Who we are",
        body:
          "Venture Electronics helps electronics buyers organize PCB Manufacturing, PCB Assembly / PCBA, component sourcing, testing, and EMS-related manufacturing requirements into a clear project scope. Many buyers begin with a board-level need such as PCB Assembly or Turnkey PCBA. Some projects later extend into EMS or Box Build when the scope includes enclosures, cable or harness requirements, system-level checks, labels, packaging, and delivery preparation. Venture reviews available project files, identifies missing inputs, clarifies sourcing and testing requirements, and helps define a manufacturable quotation scope before procurement or production starts.",
      },
      {
        title: "What Venture supports",
        body:
          "Venture service pages are organized by buyer need so sourcing, engineering, and quality teams can choose the right starting point.",
        table: {
          columns: [
            { key: "need", label: "Buyer need" },
            { key: "support", label: "Venture support" },
            { key: "notes", label: "Notes" },
          ],
          rows: [
            {
              need: "PCB Assembly / PCBA",
              support: "SMT, through-hole, mixed assembly, and turnkey discussion",
              notes: "Primary buyer-facing service entry",
            },
            {
              need: "PCB Manufacturing / Fabrication",
              support: "Bare-board requirements, Gerber, stack-up, finish, and material inputs",
              notes: "Supports the PCBA workflow",
            },
            {
              need: "Component Sourcing & BOM Review",
              support: "Availability, lifecycle, MOQ, and customer-approved alternatives",
              notes: "Alternatives require buyer approval",
            },
            {
              need: "DFM / DFA Review",
              support: "Manufacturing questions before procurement or assembly",
              notes: "Does not guarantee risk-free design",
            },
            {
              need: "Quality & Testing",
              support: "AOI, SPI, X-Ray, ICT/FCT, or functional testing as project requires",
              notes: "Scope depends on fixtures, firmware, standards, and acceptance criteria",
            },
            {
              need: "EMS & Box Build",
              support: "Enclosure, cable/harness, system checks, labels, packaging, and delivery support",
              notes: "For projects beyond board assembly",
            },
          ],
        },
        kind: "content-table",
      },
      {
        title: "How Venture works with buyers",
        items: [
          "Start with available files: send Gerber or ODB++, BOM, CPL, assembly drawings, quantity, delivery expectations, and testing requirements when available.",
          "Review manufacturing and sourcing questions: Venture reviews board files, BOM completeness, sourcing risks, DFM/DFA questions, approved alternatives, and project-specific requirements.",
          "Confirm the quotation scope: quotation scope should clarify supply model, approved alternatives, inspection or testing scope, packaging, delivery, and special requirements.",
          "Build, inspect, and document according to the agreed scope: production, inspection, testing, and shipment records should follow approved project requirements.",
          "Keep communication through the current official website and confirmed Venture Electronics contact channels.",
        ],
        kind: "steps",
      },
      {
        title: "Project fit",
        body:
          "Use this table to choose the most practical starting point before sending files.",
        table: {
          columns: [
            { key: "project", label: "Project type" },
            { key: "fit", label: "Good fit when" },
          ],
          rows: [
            {
              project: "PCB Assembly / PCBA",
              fit: "Use when the main deliverable is assembled boards built from approved board files, BOM, CPL, and assembly notes.",
            },
            {
              project: "Turnkey PCBA",
              fit: "Use when sourcing rules, approved alternatives, and customer approval boundaries are clear.",
            },
            {
              project: "EMS / Box Build",
              fit: "Use when board assembly extends into enclosure, cable/harness, labeling, system testing, packaging, or delivery support.",
            },
          ],
        },
        kind: "content-table",
      },
      {
        title: "How quality scope is confirmed",
        body:
          "Quality planning depends on the product, board design, BOM, fixture availability, firmware, acceptance criteria, and records required by the buyer.",
        table: {
          columns: [
            { key: "topic", label: "Topic" },
            { key: "discussion", label: "How Venture discusses it" },
            { key: "buyer", label: "What buyers should confirm" },
          ],
          rows: [
            {
              topic: "Certificates",
              discussion: "Certificate details are confirmed by entity, scope, and validity.",
              buyer: "Required standard, supplier registration need, and document version.",
            },
            {
              topic: "Compliance requirements",
              discussion: "Compliance needs are discussed by project requirement and available evidence.",
              buyer: "Required document, test method, market, and acceptance criteria.",
            },
            {
              topic: "Schedule",
              discussion: "Schedule is reviewed by project.",
              buyer: "BOM status, quantity, test scope, approvals, and target delivery.",
            },
            {
              topic: "Quantity",
              discussion: "Quantity is reviewed by BOM, setup, material, and project scope.",
              buyer: "Target quantity, pilot needs, repeat-build expectation, and material constraints.",
            },
            {
              topic: "Testing",
              discussion: "Testing is planned according to agreed project scope.",
              buyer: "Fixture, firmware, acceptance criteria, and report requirement.",
            },
            {
              topic: "References",
              discussion: "Project references or customer names are used only when authorized.",
              buyer: "Whether public reference use is allowed for the project.",
            },
          ],
        },
        kind: "content-table",
      },
      {
        title: "Official websites, domains and company entity clarification",
        body:
          "Venture Electronics uses venture-mfg.com as its current official main website. Some older, vertical, redirected, reserved, or related-company domains may still appear online or in business records.",
        links: [
          {
            label: "View Official Websites, Domains & Company Entities",
            href: routes.officialResources,
          },
        ],
      },
    ],
    evidenceImages: [
      {
        title: "Production and buyer review context",
        images: ["factoryVisit03", "smtPickAndPlace"],
        afterSectionIndex: 2,
      },
      {
        title: "Inspection context",
        images: ["firstArticleInspection", "aoiInspection"],
        afterSectionIndex: 5,
      },
    ],
    relatedLinks: [
      { label: "Official Websites, Domains & Company Entities", href: routes.officialResources },
      { label: "Services", href: routes.services },
      { label: "RFQ Checklist", href: routes.resources },
    ],
    cta: { label: "Request a Quote", href: routes.requestQuote },
    secondaryCta: { label: "View RFQ Checklist", href: routes.resources },
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
        title: "RFQ checklist",
        body:
          "A useful RFQ identifies current design files, BOM, quantity, delivery needs, sourcing restrictions, testing requirements, and customer-approval points.",
        table: {
          columns: [
            { key: "file", label: "File / information" },
            { key: "why", label: "Why it helps" },
          ],
          rows: [
            { file: "Gerber / ODB++", why: "Board fabrication and assembly review" },
            { file: "BOM", why: "Component sourcing and risk review" },
            { file: "CPL / XY file", why: "SMT placement preparation" },
            { file: "Assembly drawing", why: "Polarity, connector, and mechanical notes" },
            { file: "Quantity", why: "Material planning and quotation scope" },
            { file: "Testing requirement", why: "Fixture, firmware, and acceptance planning" },
            { file: "Packaging / delivery", why: "Labels, ESD, destination, and document needs" },
            { file: "NDA / large file note", why: "Safe transfer path before sharing sensitive files" },
          ],
        },
        kind: "content-table",
        featured: true,
      },
      {
        title: "Core RFQ files",
        items: [
          "Gerber or ODB++",
          "BOM with designators, MPN, manufacturer, quantity and substitution restrictions",
          "CPL / XY / pick-and-place data",
          "Assembly drawing and polarity notes",
        ],
        kind: "checklist",
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
        kind: "faq",
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
          CONTACT_CHANNELS.rfqEmail === CONTACT_CHANNELS.generalEmail
            ? `Email / RFQ: ${CONTACT_CHANNELS.rfqEmail}.`
            : `RFQ files: ${CONTACT_CHANNELS.rfqEmail}.`,
          ...(CONTACT_CHANNELS.rfqEmail === CONTACT_CHANNELS.generalEmail
            ? []
            : [`General inquiry: ${CONTACT_CHANNELS.generalEmail}.`]),
          `Phone: ${CONTACT_CHANNELS.phone}.`,
          `Fax: ${CONTACT_CHANNELS.fax}.`,
          `Address: ${CONTACT_CHANNELS.address}.`,
          `Current main website: ${CONTACT_CHANNELS.currentMainDomain}.`,
        ],
        kind: "facts",
        featured: true,
      },
      {
        title: "Choose the right contact path",
        body:
          "Use Contact for company questions, channel verification, and early project discussion before files are ready. When Gerber, BOM, CPL, drawings, quantities, or testing requirements are ready, move to Request a Quote.",
        table: {
          columns: [
            { key: "type", label: "Inquiry type" },
            { key: "path", label: "Recommended path" },
          ],
          rows: [
            { type: "General company question", path: "Email Venture Electronics" },
            { type: "RFQ with files", path: "Request a Quote / email file package" },
            { type: "Large files or NDA", path: "Start by email and confirm transfer method" },
            { type: "Domain verification", path: "Official Websites, Domains & Company Entities page" },
            { type: "Testing or quality questions", path: "Share test plan or acceptance criteria" },
            { type: "EMS / Box Build discussion", path: "Share system BOM, enclosure, cable, and test information" },
          ],
        },
        kind: "content-table",
      },
      {
        title: "General inquiry fit",
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
        title: "First-launch email workflow",
        body:
          "This first-launch RFQ page does not upload files directly. Please email Gerber, BOM, CPL, drawings or other sensitive files through the confirmed Venture Electronics contact channel.",
        featured: true,
      },
      {
        title: "Core RFQ files",
        items: quoteChecklist,
        kind: "checklist",
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
