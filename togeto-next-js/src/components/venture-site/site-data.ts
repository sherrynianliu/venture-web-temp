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
      "PCB Assembly is the buyer-readable service name. PCBA usually refers to the assembled circuit board and the manufacturing result. Turnkey PCBA is a delivery model where Venture can review fabrication support, BOM, sourcing, assembly, inspection, testing, packaging and delivery around approved project files.",
  },
  {
    question: "What files are needed for a PCB Assembly quote?",
    answer:
      "The main RFQ inputs are Gerber or ODB++, BOM, CPL or pick-and-place data, assembly drawing, board revision, quantity, supply model, test expectation, packaging requirement and delivery destination. Fixture, firmware or golden-sample details should be shared when testing is expected.",
  },
  {
    question: "Can consigned, partial-turnkey, and full-turnkey projects be reviewed?",
    answer:
      "Yes. The quotation should define which materials are buyer-supplied, which items Venture reviews or sources, and what inspection or testing scope applies.",
  },
  {
    question: "Can Venture help source components for PCBA?",
    answer:
      "Component sourcing can be reviewed as part of a PCBA or Turnkey PCBA scope. Buyers should identify no-substitution parts, approved manufacturers or distributors, lifecycle concerns, documentation needs and who approves alternatives.",
  },
  {
    question: "Can alternatives be proposed when parts are difficult to source?",
    answer:
      "Candidate alternatives may be discussed when a BOM has missing data, lifecycle risk, long availability or package questions. Alternatives should be reviewed against design, firmware, compliance and performance requirements and approved by the buyer before use.",
  },
  {
    question: "Can Venture review DFM or DFA before assembly?",
    answer:
      "DFM and DFA questions can be reviewed from Gerber or ODB++, BOM, CPL, assembly drawing, panelization, stack-up, component package, polarity notes, test access and mechanical constraints. The review helps clarify manufacturing inputs before procurement or assembly starts.",
  },
  {
    question: "Does every PCB Assembly project include X-Ray, ICT or FCT?",
    answer:
      "No. Inspection and testing depend on component package, test points, fixture availability, firmware, test procedure, quantity, acceptance criteria and quotation scope. X-Ray, ICT, FCT and functional testing should be defined by project.",
  },
  {
    question: "What affects a PCB Assembly schedule?",
    answer:
      "Schedule is reviewed by project because BOM availability, buyer-supplied material status, board complexity, quantity, process requirements, inspection, testing, packaging and buyer approvals can all affect timing.",
  },
  {
    question: "Can coating, programming, marking or labeling be included?",
    answer:
      "Project-specific add-ons such as conformal coating, potting, IC programming, firmware loading, labels, serial numbers, markings and packaging can be reviewed when the buyer provides material, keep-out areas, firmware, label rules and acceptance criteria.",
  },
  {
    question: "When does PCBA become EMS or Box Build?",
    answer:
      "The project usually moves from PCBA to EMS or Box Build when the deliverable extends beyond assembled boards into enclosure, cable or harness, mechanical integration, firmware or configuration, system-level checks, labels, accessories, packaging or delivery preparation.",
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
  {
    question: "Can Venture review enclosure assembly as part of Box Build?",
    answer:
      "Enclosure assembly can be reviewed when the buyer provides mechanical drawings, material notes, fastening or torque requirements, mounting constraints, assembly sequence and acceptance criteria. Design ownership and change authority should be clarified before quoting.",
  },
  {
    question: "Can cable or harness work be included in EMS scope?",
    answer:
      "Cable, harness and connector-routing requirements can be reviewed inside an EMS or Box Build scope when drawings, pinout, connector specifications, routing requirements and inspection rules are available.",
  },
  {
    question: "What is needed for system-level testing?",
    answer:
      "System-level testing usually needs a test procedure, fixture or interface, firmware or configuration state, golden sample when available, pass/fail criteria, report requirement and a clear definition of what the finished unit must prove.",
  },
  {
    question: "Can firmware, IC programming or configuration be included?",
    answer:
      "Firmware loading, IC programming or configuration can be reviewed when the buyer provides files, version control, security handling rules and verification method. Data handling and IP controls should be confirmed by project.",
  },
  {
    question: "Can packaging, labels or accessories be included?",
    answer:
      "Packaging, labels, serial numbers, accessories, manuals, cartons, trays and shipment documents can be included when they are defined in the system BOM, label rules, packaging standard and delivery requirement.",
  },
  {
    question: "Does every EMS project include functional testing?",
    answer:
      "No. Functional testing depends on the agreed test method, fixture, firmware, sample availability, acceptance criteria and quote scope. A Box Build page should not imply that every system receives the same testing method.",
  },
  {
    question: "What affects EMS or Box Build timing?",
    answer:
      "Timing depends on PCBA readiness, system BOM completeness, sourcing status, enclosure and mechanical files, cable or harness inputs, firmware, fixtures, packaging and buyer approval cycles.",
  },
  {
    question: "Can NDA or secure file transfer be discussed before system files are shared?",
    answer:
      "Yes. For sensitive EMS files, start by email and ask for NDA or file-transfer requirements before sending full system BOM, firmware, mechanical files or product documentation.",
  },
];

const sourcingFaqs: PageFAQ[] = [
  {
    question: "What should be included in a BOM for PCBA review?",
    answer:
      "A useful BOM should include designator, quantity, manufacturer, MPN, package, description, approved alternatives, no-substitution notes, lifecycle concerns and any documentation or compliance requirement that affects sourcing.",
  },
  {
    question: "Can Venture propose component alternatives?",
    answer:
      "Candidate alternatives can be discussed when availability, lifecycle, MOQ, package or documentation risk appears. The buyer should approve alternatives before procurement or assembly.",
  },
  {
    question: "Can Venture use alternatives without approval?",
    answer:
      "No. Substitution should not happen automatically. Buyer approval is required before using an alternative component, especially for no-substitution parts, firmware-sensitive parts or parts tied to certification or performance.",
  },
  {
    question: "What is DFM / DFA review?",
    answer:
      "DFM / DFA review looks for manufacturing and assembly questions from Gerber, BOM, CPL, stack-up, panelization, footprint, polarity, test access, mechanical constraints and special-process requirements.",
  },
  {
    question: "What files help a BOM and DFM review?",
    answer:
      "Gerber or ODB++, BOM, CPL, assembly drawing, stack-up, mechanical drawings, test expectations, firmware or programming notes and packaging rules help the review become more useful.",
  },
  {
    question: "Can DFM review happen before a full quote?",
    answer:
      "Early DFM questions can be discussed before a full quote when the buyer has enough files to identify practical manufacturing risks. Final quotation still depends on complete files, BOM and scope.",
  },
  {
    question: "What happens if the BOM contains obsolete or long-availability parts?",
    answer:
      "The review may flag sourcing risk, ask for buyer guidance, or discuss candidate alternatives. The buyer should decide whether to approve alternatives, revise the design, provide consigned parts or adjust schedule expectations.",
  },
  {
    question: "How does sourcing affect project timing?",
    answer:
      "Sourcing can affect timing through availability, MOQ, supplier response, documentation needs, buyer approvals and part arrival. Timing should be reviewed by project instead of treated as a fixed default.",
  },
  {
    question: "Can buyers consign components?",
    answer:
      "Yes. Consigned or mixed sourcing can be reviewed. The quotation should define which parts are buyer-supplied, incoming-material handling expectations, shortage responsibility and replacement rules.",
  },
  {
    question: "What are no-substitution parts?",
    answer:
      "No-substitution parts are components the buyer does not want changed without explicit approval because they may affect function, firmware, certification, sourcing policy or product performance.",
  },
];

const fabricationFaqs: PageFAQ[] = [
  {
    question: "What files are needed for PCB Fabrication Support?",
    answer:
      "Useful inputs include Gerber or ODB++, stack-up, material requirement, board thickness, copper weight, surface finish, panelization preference, impedance or special requirements and the assembly or test constraints that matter downstream.",
  },
  {
    question: "Is PCB Fabrication Support separate from PCB Assembly?",
    answer:
      "It is a support layer for the PCBA and Turnkey PCBA workflow. The page should help buyers prepare assembly-ready boards rather than position Venture as a low-cost PCB-only platform.",
  },
  {
    question: "Can Venture coordinate bare boards and assembly together?",
    answer:
      "Bare-board coordination can be reviewed when the buyer wants board fabrication inputs aligned with sourcing, assembly, inspection, testing, packaging and delivery requirements.",
  },
  {
    question: "What stack-up information should be provided?",
    answer:
      "Provide layer count, dielectric structure, thickness, impedance needs, material preference and any controlled requirements that affect fabrication, performance or assembly handling.",
  },
  {
    question: "What surface finish should I choose?",
    answer:
      "Surface finish should be selected by project requirement, solderability, shelf-life, component package, fine-pitch needs and downstream assembly conditions. The choice should be confirmed during quotation.",
  },
  {
    question: "Why does panelization matter?",
    answer:
      "Panelization affects SMT handling, fiducials, rails, tooling holes, depanelization, AOI, test fixture access, label placement and packaging. It should be reviewed before board production and assembly.",
  },
  {
    question: "Can Venture review flex or rigid-flex boards?",
    answer:
      "Flex or rigid-flex requirements can be reviewed when the buyer provides board files, stack-up, bend areas, stiffener requirements, handling notes and acceptance criteria. Exact capability should be confirmed by project.",
  },
  {
    question: "Are exact PCB capability specs fixed on the website?",
    answer:
      "No. Exact layer count, tolerance, material, finish and special-process values should be confirmed from current project files and quotation scope before being treated as production commitments.",
  },
  {
    question: "How does PCB fabrication affect testing?",
    answer:
      "Board decisions can affect test points, fixture access, impedance, reliability, solderability and inspection. Fabrication inputs should be aligned with Quality & Testing expectations before final quotation.",
  },
  {
    question: "When should I start with PCBA instead?",
    answer:
      "Start with PCB Assembly / PCBA when the main deliverable is assembled boards and fabrication is only one support layer inside a turnkey quotation.",
  },
];

const servicesFaqs: PageFAQ[] = [
  {
    question: "Which Venture service should I start with if I need assembled boards?",
    answer:
      "Start with PCB Assembly / PCBA. If the project also needs sourcing, testing, packaging or delivery support, those requirements can be reviewed inside the PCBA quotation scope.",
  },
  {
    question: "Is Turnkey PCBA a separate service from PCB Assembly?",
    answer:
      "Turnkey PCBA is a delivery model under PCB Assembly / PCBA. It may include PCB fabrication support, BOM review, component sourcing, assembly, inspection, testing, packaging and delivery coordination when agreed in the quote.",
  },
  {
    question: "When does a project become EMS or Box Build?",
    answer:
      "A project usually moves into EMS or Box Build when the scope extends beyond assembled boards into enclosure, cable or harness, mechanical parts, system checks, labels, packaging or delivery preparation.",
  },
  {
    question: "Can Venture help with component sourcing and BOM risk?",
    answer:
      "Yes. Venture can review BOM completeness, availability, lifecycle risk, MOQ, package questions and candidate alternatives. Any substitution must be approved by the buyer before use.",
  },
  {
    question: "Does every project include the same tests?",
    answer:
      "No. Testing depends on board design, fixture availability, firmware, test procedure, acceptance criteria, quantity and project risk.",
  },
  {
    question: "Why does the new site not rebuild all old material, stack-up and industry pages?",
    answer:
      "The first-launch site keeps the service structure clear. Old topics are consolidated into service pages, Resources, FAQ and quote-preparation guidance unless a topic has enough evidence to support a dedicated page.",
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
    question: "What quality information should I send with a PCBA RFQ?",
    answer:
      "Send the current design revision, BOM, CPL, assembly drawing, quantity, test expectations, acceptance criteria, reporting needs, firmware or fixture information when available.",
  },
  {
    question: "Does every PCB Assembly project include AOI, X-Ray, ICT and FCT?",
    answer:
      "No. AOI, X-Ray, ICT, FCT and functional testing are selected according to component package, test access, fixture availability, firmware, procedure, quantity, risk and agreed quotation scope.",
  },
  {
    question: "When is X-Ray inspection useful?",
    answer:
      "X-Ray inspection is commonly discussed for BGA, QFN, hidden-joint or bottom-terminated components where solder joints cannot be fully checked visually.",
  },
  {
    question: "What is needed for ICT or FCT?",
    answer:
      "ICT or FCT usually requires test access, fixture or interface information, firmware or configuration, test procedure, golden sample when available, and pass/fail criteria.",
  },
  {
    question: "Can Venture discuss first article inspection?",
    answer:
      "Yes. FAI can be discussed for new builds, revision changes or NPI review to verify the first assembled unit before continuing the build.",
  },
  {
    question: "Can Venture help with functional testing for EMS or Box Build?",
    answer:
      "Functional testing can be reviewed when the system BOM, firmware, enclosure, cable or harness, test steps, fixture, labels and acceptance criteria are available.",
  },
  {
    question: "Can cleaning or conformal coating be included?",
    answer:
      "Cleaning, conformal coating or potting should be discussed with material, area, keep-out zones, process, inspection and acceptance requirements.",
  },
  {
    question: "Can reliability testing be arranged?",
    answer:
      "Reliability or environmental testing should be discussed by standard, condition, sample count, duration, acceptance criteria and whether internal or external testing is required.",
  },
  {
    question: "What traceability records can be discussed?",
    answer:
      "Records may include file revision, BOM revision, material decisions, inspection result, test result, batch, serial number, label, packaging and shipment information depending on the agreed scope.",
  },
  {
    question: "Does Venture have all compliance certifications for every project?",
    answer:
      "No. Certification and compliance wording must be reviewed by exact entity, scope, document and project requirement. Do not assume every project carries every certificate.",
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
      "Venture Electronics organizes PCB Assembly, Turnkey PCBA, EMS & Box Build, Component Sourcing, BOM / DFM Review, PCB Fabrication Support, and Quality & Testing around the buyer's intended deliverable. The page helps buyers choose the right starting point before sending RFQ files.",
    template: "service-conversion",
    visual: pageVisuals.services,
    directAnswer: [
      "Start with PCB Assembly / PCBA when the required deliverable is assembled boards.",
      "Use EMS & Box Build when the project extends beyond the PCBA into enclosure, cable or harness, mechanical parts, labeling, packaging, or system-level testing.",
      "Use Component Sourcing, BOM / DFM Review, PCB Fabrication Support, and Quality & Testing as support layers that help define the quotation and manufacturing scope.",
    ],
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
              goal: "Need prototype / NPI PCBA review",
              start: "PCB Assembly / PCBA",
              support: "DFM / BOM review, test plan discussion, first article review",
              prepare: "Current revision, Gerber or ODB++, BOM, CPL, assembly notes, target build quantity",
            },
            {
              goal: "Need low-volume or medium-volume PCBA",
              start: "PCB Assembly / PCBA",
              support: "Turnkey sourcing discussion, inspection, testing and packaging",
              prepare: "Approved files, quantity range, supply model, test expectations",
            },
            {
              goal: "Need turnkey PCB Assembly",
              start: "PCB Assembly / PCBA",
              support: "PCB fabrication support, component sourcing, inspection, testing, packaging",
              prepare: "Supply model, no-substitution parts, approved alternatives, test expectations",
            },
            {
              goal: "Need box build or system assembly",
              start: "EMS & Box Build",
              support: "PCBA, enclosure, cable or harness, system-level test, labels, packaging",
              prepare: "System BOM, enclosure drawings, cable drawings, assembly instructions, test steps",
            },
            {
              goal: "Need BOM risk reduction before quoting",
              start: "Component Sourcing, BOM & DFM Review",
              support: "Availability, lifecycle, MOQ, package match, approved alternatives",
              prepare: "BOM with MPN, manufacturer, quantity, no-substitution rules, approved vendor rules",
            },
            {
              goal: "Need bare-board and assembly coordination",
              start: "PCB Fabrication Support + PCB Assembly / PCBA",
              support: "Stack-up, material, finish, panelization, fiducials, test points",
              prepare: "Gerber, stack-up, material, finish and downstream assembly constraints",
            },
            {
              goal: "Need DFM / DFA / engineering review",
              start: "Component Sourcing, BOM & DFM Review",
              support: "Gerber, BOM, stack-up, polarity, fiducials, panelization and assembly questions",
              prepare: "Current files, known risks, special packages, mechanical or test constraints",
            },
            {
              goal: "Need quality or test planning",
              start: "Quality & Testing",
              support: "SPI, AOI, FAI, X-Ray, ICT/FCT, functional test, records",
              prepare: "Acceptance criteria, firmware, golden sample, report requirements",
            },
            {
              goal: "Need conformal coating, potting, labeling, packaging or programming add-ons",
              start: "PCB Assembly / PCBA or EMS & Box Build",
              support: "IC programming, coating, potting, labels, serial numbers, ESD packaging",
              prepare: "Material, keep-out areas, firmware, label rules, packaging and inspection method",
            },
          ],
        },
        kind: "content-table",
        featured: true,
      },
      {
        title: "Start from the deliverable, not from a keyword",
        body:
          "Many electronics buyers use overlapping terms such as PCB Assembly, PCBA, Turnkey PCBA, EMS, Electronics Manufacturing, Contract Manufacturing, Box Build, Component Sourcing, Testing, DFM, and PCB Fabrication. Venture uses these terms inside one service structure so buyers can begin from the deliverable they need instead of choosing from a long list of old SEO keywords.",
      },
      {
        title: "Service paths by buyer situation",
        body:
          "Use this table when the buyer knows the project situation but is not sure which Venture page to start from.",
        table: {
          columns: [
            { key: "situation", label: "Buyer situation" },
            { key: "start", label: "Start with" },
            { key: "why", label: "Why this is the right entry" },
            { key: "next", label: "Likely next question" },
          ],
          rows: [
            {
              situation: "I have Gerber, BOM and CPL and need assembled boards.",
              start: "PCB Assembly / PCBA",
              why: "The deliverable is board-level assembly.",
              next: "Supply model, test method, packaging, schedule boundary.",
            },
            {
              situation: "I need Venture to help source components.",
              start: "Component Sourcing, BOM & DFM Review",
              why: "The project depends on sourcing rules, lifecycle risk, MOQ and approved alternatives.",
              next: "No-substitution parts and customer approval process.",
            },
            {
              situation: "I need bare boards and assembly coordinated together.",
              start: "PCB Fabrication Support + PCB Assembly / PCBA",
              why: "Fabrication inputs affect assembly yield, panelization, test points and downstream handling.",
              next: "Stack-up, material, finish, impedance, panelization, fiducials.",
            },
            {
              situation: "I need the PCBA installed into a complete device or module.",
              start: "EMS & Box Build",
              why: "The project now includes mechanical, cable, label, system-test or packaging scope.",
              next: "System BOM, enclosure files, cable drawings, firmware, packaging.",
            },
            {
              situation: "I am not sure what testing is needed.",
              start: "Quality & Testing",
              why: "Testing scope depends on fixture, firmware, test points and acceptance criteria.",
              next: "AOI, X-Ray, ICT/FCT, functional test, reporting.",
            },
            {
              situation: "I need a first prototype before repeat builds.",
              start: "PCB Assembly / PCBA",
              why: "Prototype / NPI starts with file review, BOM review, first article and test planning.",
              next: "Design revision, build quantity, DFM/DFA risks, acceptance criteria.",
            },
          ],
        },
        kind: "content-table",
      },
      {
        title: "What each service owns",
        body:
          "Each service page should own one buyer question. Supporting capabilities appear where they help the quote and manufacturing decision.",
        table: {
          columns: [
            { key: "service", label: "Service page" },
            { key: "owns", label: "Owns" },
            { key: "doesNotOwn", label: "Does not own" },
          ],
          rows: [
            {
              service: "PCB Assembly / PCBA",
              owns: "Assembly scope, supply model, RFQ inputs, board-level process, inspection and testing discussion.",
              doesNotOwn: "A full EMS system scope unless enclosure, cable, label or system-test requirements are included.",
            },
            {
              service: "EMS & Box Build",
              owns: "PCBA integration into enclosure, cable/harness, mechanical parts, system-level checks, labels, packaging and delivery support.",
              doesNotOwn: "Unverified complete consumer-product certification or universal end-user fulfillment.",
            },
            {
              service: "Component Sourcing, BOM & DFM Review",
              owns: "BOM completeness, sourcing risk, lifecycle risk, MOQ, package match, customer-approved alternatives and DFM/DFA questions.",
              doesNotOwn: "Unauthorized substitution or a promise that every component is available.",
            },
            {
              service: "PCB Fabrication Support",
              owns: "Gerber, stack-up, material, thickness, copper, impedance, surface finish and assembly-ready board requirements.",
              doesNotOwn: "A low-cost PCB-only platform positioning or dozens of thin material/stack-up pages.",
            },
            {
              service: "Quality & Testing",
              owns: "Inspection method, test inputs, fixture/firmware dependency, acceptance criteria, records and traceability discussion.",
              doesNotOwn: "A universal promise that every project uses every test method.",
            },
          ],
        },
        kind: "content-table",
      },
      {
        title: "Supporting capabilities that should not become confusing top-level pages",
        body:
          "Venture can discuss SMT, through-hole, BGA, IC programming, conformal coating, electronic potting, test fixtures, labeling, packaging, repair, reverse engineering and logistics when they are part of an approved project scope. They should be handled as capability modules inside PCBA, EMS, Quality, Resources or future expansion pages rather than rebuilt as many thin first-launch pages.",
        items: [
          "SMT, through-hole, mixed assembly and BGA belong under PCB Assembly / PCBA.",
          "Solder paste printing, SPI, FAI, AOI, X-Ray, ICT and FCT belong under process and Quality & Testing content.",
          "Component sourcing, BOM review, lifecycle risk and approved alternatives belong under Component Sourcing, BOM & DFM Review.",
          "Conformal coating, potting, IC programming, labels and packaging should be handled as project-specific add-ons.",
          "Wire or cable harness topics stay under EMS / Box Build until Venture confirms public priority and evidence.",
          "Industry pages should remain scenario-level unless Venture has approved case studies or customer-safe examples.",
        ],
        kind: "list",
      },
      {
        title: "What buyers should prepare before service selection",
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
      {
        title: "How old-site topics map into the new service structure",
        body:
          "Older Venture websites include useful public vocabulary such as PCB materials, layer stack-up, DFM/DFA, NPI, SMT, through-hole, BGA, PCBA testing, conformal coating, electronic potting, IC programming, test fixtures, wire harness, packaging and logistics. The new site consolidates these topics into service pages and RFQ guidance so buyers see one clear manufacturing path.",
        table: {
          columns: [
            { key: "oldTopic", label: "Old-site topic" },
            { key: "newLocation", label: "Where it belongs now" },
            { key: "reason", label: "Reason" },
          ],
          rows: [
            {
              oldTopic: "SMT, through-hole, mixed assembly, BGA",
              newLocation: "PCB Assembly / PCBA",
              reason: "These are assembly-process details inside board-level manufacturing.",
            },
            {
              oldTopic: "PCB materials, layer stack-up, impedance, surface finish",
              newLocation: "PCB Fabrication Support",
              reason: "They shape assembly-ready board review rather than separate first-launch pages.",
            },
            {
              oldTopic: "Component sourcing, lifecycle, approved alternatives",
              newLocation: "Component Sourcing, BOM & DFM Review",
              reason: "They affect quotation, procurement and customer approval.",
            },
            {
              oldTopic: "SPI, AOI, X-Ray, ICT, FCT, Boundary scan",
              newLocation: "Quality & Testing",
              reason: "They are selected according to risk, access, fixture, firmware and acceptance criteria.",
            },
            {
              oldTopic: "Conformal coating, potting, IC programming, labels, packaging",
              newLocation: "Project-specific add-ons under PCBA or EMS",
              reason: "They should be scoped during quotation rather than presented as universal defaults.",
            },
          ],
        },
        kind: "content-table",
      },
      {
        title: "Service scope boundaries",
        body:
          "The Services page should be useful without overpromising. Venture is a project-based PCBA and EMS manufacturing partner, not an instant-price standard-product platform.",
        items: [
          "Lead time is reviewed by project because BOM availability, board complexity, quantity, test scope and buyer approvals vary.",
          "MOQ or quantity fit is reviewed by BOM, setup, material, project scope and repeat-build expectation.",
          "Testing scope is not universal; AOI, X-Ray, ICT, FCT, functional testing, reliability testing and reports depend on the agreed project requirements.",
          "Certificate or compliance wording must be tied to confirmed entity, scope, document version and project requirement.",
          "Named customer references, cases and sensitive industry examples require publication permission.",
          "Sensitive regulated segments should not be used as public target-industry wording without approved evidence and client confirmation.",
        ],
        kind: "checklist",
      },
      {
        title: "Services FAQ",
        kind: "faq",
      },
    ],
    faqs: servicesFaqs,
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
      "PCB Assembly is the buyer-readable service name, while PCBA refers to the assembled circuit board and the manufacturing result.",
      "Turnkey PCBA is Venture Electronics' main delivery model for many board-level projects: it may coordinate PCB fabrication support, BOM review, component sourcing, assembly, inspection, testing, packaging and delivery around approved project files.",
      "The right PCBA scope depends on the buyer's files, BOM, sourcing rules, test expectations, quantity, packaging needs and delivery requirements.",
    ],
    template: "service-conversion",
    sections: [
      {
        title: "What PCB Assembly / PCBA means for Venture Electronics",
        body:
          "For Venture Electronics, PCB Assembly / PCBA is not only the soldering step. It is the buyer-facing entry point for turning approved board files and BOM data into assembled boards with a defined supply model, assembly process, inspection method, testing expectation, packaging requirement and delivery path. Buyers may begin with prototype PCBA, low-volume PCBA, turnkey PCB assembly, consigned assembly or partial-turnkey assembly. The quotation should clarify what Venture reviews, what the buyer supplies, which alternatives require approval, and which inspection or test records are expected before production starts. This page is written for engineering, purchasing and quality teams that need to understand the board-level scope before sending Gerber, BOM, CPL, drawings or test requirements.",
        featured: true,
      },
      {
        title: "PCB Assembly delivery models",
        body:
          "The same PCBA page should support different supply models. Buyers should make the supply model clear before quotation because it affects sourcing responsibility, material risk, shortage handling, incoming inspection, assembly sequencing and schedule.",
        table: {
          columns: [
            { key: "model", label: "Delivery model" },
            { key: "meaning", label: "What it means" },
            { key: "buyerInput", label: "Buyer should provide" },
            { key: "boundary", label: "Boundary" },
          ],
          rows: [
            {
              model: "Consigned assembly",
              meaning:
                "The buyer supplies some or all materials and Venture reviews assembly, incoming-material handling, inspection and testing scope.",
              buyerInput:
                "Buyer-supplied part list, shipment status, BOM, board files, assembly drawing and test expectations.",
              boundary: "Material shortages, part condition and replacement rules must be clarified.",
            },
            {
              model: "Partial turnkey",
              meaning:
                "The buyer supplies designated or sensitive items while Venture may source approved boards or components.",
              buyerInput: "No-substitution parts, approved vendors, buyer-supplied items and sourcing restrictions.",
              boundary: "Alternatives must be approved before procurement or assembly.",
            },
            {
              model: "Full turnkey PCBA discussion",
              meaning:
                "Venture may coordinate PCB fabrication support, BOM review, component sourcing, assembly, inspection, testing, packaging and delivery around approved files.",
              buyerInput:
                "Gerber or ODB++, BOM, CPL, assembly drawing, quantity, target schedule, test plan and packaging needs.",
              boundary: "Final scope depends on BOM availability, project complexity and buyer approvals.",
            },
            {
              model: "Prototype / NPI PCBA",
              meaning:
                "Early builds used to validate design, BOM, assembly process, test method and manufacturability before repeat production.",
              buyerInput: "Current revision, prototype quantity, engineering notes, DFM concerns and acceptance criteria.",
              boundary: "Prototype results may lead to design, BOM, fixture or process changes.",
            },
            {
              model: "Low-volume or medium-volume PCBA",
              meaning:
                "Project-based repeat builds where sourcing, inspection, testing and records should be stabilized.",
              buyerInput: "Repeat forecast, approved revisions, sourcing rules, quality requirements and packaging instructions.",
              boundary: "Material availability and test scope still affect timing and cost.",
            },
          ],
        },
        kind: "content-table",
      },
      {
        title: "Assembly methods and project types",
        body:
          "Venture can review common PCB Assembly requirements from current project files. The method should be selected from the board design, component package, soldering process, inspection needs and test requirements.",
        table: {
          columns: [
            { key: "method", label: "Assembly area" },
            { key: "use", label: "Used for" },
            { key: "buyerInput", label: "Buyer input" },
          ],
          rows: [
            {
              method: "SMT assembly",
              use: "Surface-mount components, reflow workflows, fine-pitch packages and high-density boards.",
              buyerInput: "Gerber/ODB++, BOM, CPL, assembly drawing, polarity and package notes.",
            },
            {
              method: "Through-hole assembly",
              use:
                "Connectors, power parts, terminals, mechanical-stress components or parts requiring wave, selective or manual soldering discussion.",
              buyerInput: "Assembly notes, soldering requirement, mechanical constraints and inspection criteria.",
            },
            {
              method: "Mixed assembly",
              use: "Boards that combine SMT and through-hole processes.",
              buyerInput: "Process sequence requirements, component package list and special handling notes.",
            },
            {
              method: "BGA / QFN / hidden-joint assembly",
              use: "Packages where solder joints are not fully visible after assembly.",
              buyerInput: "Package list, risk areas and X-Ray or inspection expectations.",
            },
            {
              method: "Flex or rigid-flex assembly",
              use: "Flexible or rigid-flex boards requiring handling, fixture and process review.",
              buyerInput: "Board type, panelization, handling requirements and bend-area notes.",
            },
            {
              method: "Programming, coating, labeling or packaging add-ons",
              use: "Project-specific steps added to the approved PCBA scope.",
              buyerInput: "Firmware, coating area, label rules, packaging standard and acceptance criteria.",
            },
          ],
        },
        kind: "content-table",
      },
      {
        title: "How Turnkey PCBA connects fabrication, sourcing, assembly and testing",
        body:
          "Turnkey PCBA should be understood as a coordinated delivery model. It does not make every support topic a separate top-level service, but it connects the necessary support layers around the board-level deliverable.",
        items: [
          "PCB Fabrication Support helps align Gerber, stack-up, material, surface finish, panelization and assembly constraints before the board enters assembly.",
          "Component Sourcing and BOM Review helps identify MPN gaps, lifecycle risk, MOQ issues, package mismatch, approved-vendor rules and substitution restrictions.",
          "DFM / DFA review helps identify manufacturability questions related to spacing, polarity, fiducials, panelization, tooling, test points, connector height or mechanical constraints.",
          "Assembly turns approved files and material decisions into assembled boards using SMT, through-hole or mixed process planning.",
          "Quality & Testing defines SPI, AOI, FAI, X-Ray, ICT/FCT, functional testing or reporting requirements when applicable.",
          "Packaging and delivery requirements should be defined before shipment, especially when ESD, label, serial number or document rules apply.",
        ],
        kind: "steps",
      },
      {
        title: "PCB Assembly capability review",
        body:
          "Use this table to prepare a practical PCB Assembly / PCBA discussion. Final scope, schedule, and testing depend on the project files, BOM availability, quantity, supply model and agreed inspection requirements.",
        table: {
          columns: [
            { key: "area", label: "Capability area" },
            { key: "scope", label: "Typical review scope" },
            { key: "confirm", label: "Buyer should confirm" },
          ],
          rows: [
            {
              area: "Assembly types",
              scope: "SMT, through-hole, mixed assembly, prototype / NPI and repeat-build discussion",
              confirm: "Board design, component package, assembly drawing and target quantity",
            },
            {
              area: "Component packages",
              scope: "Passive parts, BGA/QFN/QFP, fine-pitch ICs, connectors, terminals and mechanical-stress parts",
              confirm: "BOM, MPN, package, footprint, polarity notes and package risk",
            },
            {
              area: "Supply model",
              scope: "Consigned, partial-turnkey and full-turnkey discussion",
              confirm: "Buyer-supplied parts, approved vendors, sourcing rules and no-substitution parts",
            },
            {
              area: "File requirements",
              scope: "Gerber or ODB++, BOM, CPL, assembly drawing, revision notes and special process instructions",
              confirm: "Revision control and approved production files",
            },
            {
              area: "Testing",
              scope: "SPI, FAI, AOI, X-Ray, ICT/FCT or functional testing when applicable",
              confirm: "Fixture, firmware, test method, golden sample, report format and acceptance criteria",
            },
            {
              area: "Packaging",
              scope: "ESD, moisture handling, labels, serial numbers, trays, cartons and shipment requirements",
              confirm: "Delivery destination, document needs and customer packaging rules",
            },
            {
              area: "Schedule",
              scope: "Reviewed by project after files, BOM and testing scope are understood",
              confirm: "BOM availability, complexity, test scope, quantity and buyer approval cycle",
            },
          ],
        },
        kind: "content-table",
      },
      {
        title: "BOM and component sourcing relationship",
        body:
          "PCBA quotation quality depends heavily on BOM quality. Venture can review BOM completeness, availability, lifecycle risk, MOQ, package match and candidate alternatives, but alternatives should not be used without customer approval.",
        table: {
          columns: [
            { key: "bomItem", label: "BOM item" },
            { key: "why", label: "Why it matters" },
            { key: "buyerRule", label: "Buyer rule to provide" },
          ],
          rows: [
            {
              bomItem: "MPN and manufacturer",
              why: "Missing or unclear part numbers can lead to quote inaccuracy or sourcing risk.",
              buyerRule: "Provide approved MPN and manufacturer whenever possible.",
            },
            {
              bomItem: "Designator and quantity",
              why: "Assembly and sourcing need exact placement and count information.",
              buyerRule: "Keep BOM aligned with CPL and assembly drawing.",
            },
            {
              bomItem: "No-substitution parts",
              why: "Some components affect certification, function, firmware or customer approval.",
              buyerRule: "Mark no-substitution parts clearly.",
            },
            {
              bomItem: "Approved alternatives",
              why: "Alternatives can reduce availability or lifecycle risk when accepted.",
              buyerRule: "Define who can approve alternatives and how approval is recorded.",
            },
            {
              bomItem: "Package and footprint",
              why: "Package mismatch can create assembly or footprint problems.",
              buyerRule: "Confirm package, footprint and polarity for critical components.",
            },
          ],
        },
        kind: "content-table",
      },
      {
        title: "Assembly process overview",
        body:
          "The assembly process should be read as a project workflow, not a fixed list of universal steps. A prototype PCBA, mixed-technology board, BGA-heavy board, consigned build or full turnkey build may require different preparation and records.",
        items: [
          "File review: Gerber or ODB++, BOM, CPL, assembly drawing, revision, quantity and delivery expectations are checked for quotation readiness.",
          "BOM review: MPN completeness, lifecycle risk, MOQ, availability, approved alternatives and no-substitution rules are clarified before procurement.",
          "Material readiness: buyer-supplied, Venture-sourced or mixed supply model is confirmed before build planning.",
          "Assembly preparation: stencil, panel, process sequence, package risk, polarity and special handling requirements are reviewed.",
          "Assembly: SMT, through-hole or mixed assembly is performed according to approved files and process requirements.",
          "Inspection and testing: SPI, FAI, AOI, X-Ray, ICT/FCT or functional testing are selected when applicable and agreed.",
          "Packaging and delivery: ESD handling, labels, serial numbers, shipment documents and destination requirements are confirmed by project.",
        ],
        kind: "steps",
      },
      {
        title: "Inspection and testing dependency",
        body:
          "Testing is not a fixed checkbox. The right inspection and test method depends on component package, board risk, test points, fixture availability, firmware, test procedure, acceptance criteria and required records.",
        table: {
          columns: [
            { key: "method", label: "Method" },
            { key: "usedFor", label: "Used for" },
            { key: "neededInput", label: "Needed input" },
          ],
          rows: [
            {
              method: "SPI",
              usedFor: "Solder paste print control before placement.",
              neededInput: "Stencil and critical paste area requirements if applicable.",
            },
            {
              method: "FAI",
              usedFor: "First article setup and new-build verification.",
              neededInput: "Approved files, assembly drawing, polarity and acceptance criteria.",
            },
            {
              method: "AOI",
              usedFor: "Component placement, polarity and visible solder inspection.",
              neededInput: "Critical components and workmanship criteria.",
            },
            {
              method: "X-Ray",
              usedFor: "Hidden solder joints such as BGA, QFN or bottom-terminated packages.",
              neededInput: "Package list, risk areas and inspection expectations.",
            },
            {
              method: "ICT / FCT",
              usedFor: "Electrical or functional verification.",
              neededInput: "Fixture, firmware, test procedure, golden sample and pass/fail criteria.",
            },
            {
              method: "Functional test",
              usedFor: "Board or system behavior under powered operation.",
              neededInput: "Configuration, firmware, test steps and acceptance criteria.",
            },
          ],
        },
        kind: "content-table",
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
        title: "Schedule boundary and quantity fit",
        body:
          "PCBA schedule and quantity fit should be reviewed by project. Timing depends on BOM availability, part arrival, board complexity, quantity, process requirements, testing scope, packaging needs and buyer approvals. Quantity also affects sourcing, setup, fixture decisions, inspection sampling, packaging and repeat-build planning. Venture should not be presented as an instant standard-product platform; quotation scope should be confirmed from the current files and buyer requirements.",
      },
      {
        title: "When to move from PCBA to EMS & Box Build",
        body:
          "A buyer should move from the PCB Assembly / PCBA page to EMS & Box Build when the deliverable extends beyond assembled boards.",
        items: [
          "The PCBA must be installed into an enclosure, cabinet, module or mechanical frame.",
          "Cable or harness drawings, connector routing or mechanical assembly instructions are part of the project.",
          "Firmware, system configuration or final functional test is required at product or module level.",
          "Labels, serial numbers, accessories, manuals, packaging or shipment preparation must be included.",
          "The buyer needs one quotation scope covering board-level and system-level work.",
        ],
        kind: "list",
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
      "EMS Manufacturing is the broader electronics manufacturing scope around an assembled board.",
      "Box Build is the integration path where approved PCBAs may be combined with enclosure, cable or harness, mechanical parts, firmware or configuration, system-level checks, labels, packaging and delivery preparation.",
      "The right EMS scope depends on the system BOM, mechanical drawings, cable drawings, firmware, test method, labels, packaging and buyer acceptance criteria.",
    ],
    sections: [
      {
        title: "When a PCBA project becomes EMS or Box Build",
        body:
          "A project usually moves beyond PCB Assembly / PCBA when the required deliverable is no longer only an assembled board. EMS or Box Build becomes relevant when the project needs mechanical integration, cable or harness work, enclosure installation, firmware or configuration, system-level testing, labels, packaging, accessories or delivery preparation. This page is for buyers who already understand the board-level requirement and now need to define how the PCBA becomes a module, product subassembly or shipment-ready unit.",
        items: [
          "The assembled PCBA must be installed into an enclosure, cabinet, module or larger system.",
          "The project includes cable, harness, connector routing, switch, display, sensor or mechanical installation requirements.",
          "The buyer needs system-level functional checks, firmware loading or configuration before shipment.",
          "Labels, serial numbers, packaging, manuals, accessories or shipment documentation are part of the quoted deliverable.",
          "The buyer wants one project scope that connects PCBA, sourcing, mechanical assembly, testing and delivery support.",
        ],
        kind: "list",
        featured: true,
      },
      {
        title: "EMS & Box Build scope matrix",
        body:
          "Use this matrix to decide whether the project is still board-level PCBA or should be reviewed as EMS / Box Build. Each row should be tied to buyer files, acceptance criteria and quotation scope.",
        table: {
          columns: [
            { key: "scopeArea", label: "Scope area" },
            { key: "whatItMeans", label: "What it means" },
            { key: "buyerInput", label: "Buyer input" },
            { key: "boundary", label: "Boundary" },
          ],
          rows: [
            {
              scopeArea: "PCBA integration",
              whatItMeans: "Approved assembled boards are installed into a larger module, enclosure or system.",
              buyerInput: "Approved PCBA files, board revision, mounting notes and handling requirements.",
              boundary: "PCBA must be stable enough for integration review.",
            },
            {
              scopeArea: "Enclosure and mechanical parts",
              whatItMeans: "Mechanical parts, housing, panels, fasteners or cabinet details are included.",
              buyerInput: "Mechanical drawings, CAD files, torque notes, material requirements and assembly sequence.",
              boundary: "Design responsibility must be clarified before quoting.",
            },
            {
              scopeArea: "Cable or harness",
              whatItMeans: "Cable routing, harness drawing, connectors or wire assembly are part of the build.",
              buyerInput: "Cable drawings, connector specifications, pinout, routing and inspection requirement.",
              boundary: "Wire / cable assembly should remain scoped inside EMS unless elevated later.",
            },
            {
              scopeArea: "Firmware / configuration",
              whatItMeans: "The unit requires firmware loading, IC programming, configuration or software setup.",
              buyerInput: "Firmware version, programming file, security rules and verification method.",
              boundary: "Data handling and IP controls should be confirmed.",
            },
            {
              scopeArea: "System-level testing",
              whatItMeans: "The final module or product is checked beyond board-level inspection.",
              buyerInput: "Test procedure, fixture, golden sample, acceptance criteria and report requirement.",
              boundary: "Testing is quoted by agreed procedure, not assumed universally.",
            },
            {
              scopeArea: "Labels and packaging",
              whatItMeans: "Labels, serial numbers, accessories, manuals, packing materials or shipment prep are included.",
              buyerInput: "Label content, packaging standard, accessory list and destination.",
              boundary: "Retail packaging or fulfillment claims require specific approval.",
            },
          ],
        },
        kind: "content-table",
      },
      {
        title: "Required inputs for EMS or Box Build review",
        body:
          "EMS review needs more than Gerber and BOM. A complete system-level RFQ should include electronic, mechanical, cable, test and packaging information. If these inputs are not ready, the project may first begin as a PCBA, prototype or NPI review before the full EMS scope is confirmed.",
        items: [
          "Approved PCBA files, board revision, BOM and assembly drawing.",
          "Complete system BOM covering electronic, mechanical, cable, packaging and accessory items.",
          "Enclosure, cabinet, panel, bracket or mechanical drawings.",
          "Cable or harness drawings, connector requirements, pinout and routing requirements.",
          "Assembly sequence, fastening, torque, thermal, sealing or special handling notes.",
          "Firmware, programming, configuration or software setup requirements.",
          "System-level test method, fixtures, golden sample and pass/fail criteria.",
          "Label, serial number, accessory, packaging, manual and shipment document requirements.",
        ],
        kind: "checklist",
      },
      {
        title: "How EMS connects PCBA, sourcing, mechanics and testing",
        body:
          "EMS is valuable because it connects multiple workstreams that would otherwise be discussed separately. The board-level assembly still matters, but the buyer also needs to define mechanical constraints, cable routing, firmware, test interfaces, packaging, labels and records. A useful EMS quote should clarify which items Venture reviews, performs, coordinates or receives from the buyer. It should also separate board-level acceptance from system-level acceptance so purchasing, engineering and quality teams understand the handoff.",
        items: [
          "PCBA readiness: the assembled board revision, BOM and board-level quality scope should be stable enough for integration.",
          "Sourcing readiness: electronic, mechanical, cable and packaging items should be listed in a system BOM with clear ownership.",
          "Mechanical readiness: enclosure files, fastener notes, clearance, thermal and handling requirements should be available.",
          "Cable readiness: harness drawings, connector requirements, routing, continuity and inspection expectations should be defined.",
          "Testing readiness: fixture, firmware, golden sample, acceptance criteria and report format should be agreed before repeat builds.",
        ],
        kind: "steps",
      },
      {
        title: "System-level testing and configuration",
        body:
          "A Box Build project often needs testing beyond board-level AOI or PCBA inspection. The quotation should define what the finished unit must do, what test fixture or interface is available, which firmware or configuration is used, and what record proves acceptance.",
        table: {
          columns: [
            { key: "testArea", label: "Test or configuration area" },
            { key: "purpose", label: "Purpose" },
            { key: "buyerInput", label: "Buyer input" },
          ],
          rows: [
            {
              testArea: "Power-on check",
              purpose: "Confirm basic system power behavior after integration.",
              buyerInput: "Voltage, current limits, indicator behavior and safety requirements.",
            },
            {
              testArea: "Firmware / configuration",
              purpose: "Load or verify the required software or device state.",
              buyerInput: "Firmware file, version, configuration steps and verification method.",
            },
            {
              testArea: "Functional test",
              purpose: "Confirm the finished module or product performs required operations.",
              buyerInput: "Test procedure, golden sample, fixture or interface, pass/fail criteria.",
            },
            {
              testArea: "Cable / connector check",
              purpose: "Confirm routing, pinout, connection and mechanical installation.",
              buyerInput: "Cable drawings, connector list, inspection points and continuity rules.",
            },
            {
              testArea: "Label / serial verification",
              purpose: "Confirm identification, traceability or customer record requirements.",
              buyerInput: "Label content, barcode format, serial rule and data record requirement.",
            },
          ],
        },
        kind: "content-table",
      },
      {
        title: "Packaging, labeling and delivery preparation",
        body:
          "Packaging and delivery support should be defined as part of the quote when the buyer needs more than assembled boards in ESD packaging.",
        items: [
          "ESD or moisture-sensitive handling requirements.",
          "Unit labels, serial numbers, barcode labels or customer part numbers.",
          "Accessories, cable sets, manuals or inserts.",
          "Protective packaging, foam, cartons, trays or custom packaging materials.",
          "Shipment destination, shipping documents, incoterms and delivery requirements.",
          "Any customer-specific packing instruction or photo/report requirement.",
        ],
        kind: "checklist",
      },
      {
        title: "Pilot build and repeat-build stabilization",
        body:
          "EMS and Box Build projects benefit from a stabilization step before repeat orders. The first build should not only prove that the board powers on; it should clarify assembly order, fixture access, label placement, cable routing, packaging, records and buyer approval points.",
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
        title: "EMS & Box Build boundaries",
        body:
          "EMS & Box Build should be presented as a project-based manufacturing scope, not a universal promise of complete finished-product certification, global fulfillment or fully integrated production for every product type.",
        items: [
          "Do not imply that every EMS project includes software development, safety testing, RF testing or retail fulfillment.",
          "Do not claim end-user-ready certification unless the project and evidence support it.",
          "Do not promise guaranteed timing before system BOM, mechanical files, sourcing status and test scope are reviewed.",
          "Do not use named customer references, product images or named cases without authorization.",
          "State clearly whether Venture performs, coordinates or reviews each scope item by project.",
        ],
        kind: "proof",
      },
      {
        title: "EMS and Box Build FAQ",
        kind: "faq",
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
    directAnswer: [
      "Component sourcing and BOM review help identify quote risk before procurement or assembly begins.",
      "DFM / DFA review helps buyers and Venture discuss manufacturability questions from Gerber, BOM, CPL, stack-up, panelization, footprint, polarity, test access and assembly constraints.",
      "Any component alternative must be reviewed against the design requirements and approved by the customer before use.",
    ],
    sections: [
      {
        title: "Why BOM and DFM review matter before PCBA",
        body:
          "A PCBA quote is only as clear as the files and sourcing rules behind it. BOM gaps, obsolete parts, package mismatches, no-substitution parts, lifecycle risk, MOQ issues, missing CPL data, unclear polarity or test-access problems can delay quotation or create manufacturing risk. Venture uses BOM and DFM review to clarify the project before procurement or assembly starts. This page is for buyers who need a more reliable quotation discussion before committing to component purchase, PCB fabrication or assembly.",
        featured: true,
      },
      {
        title: "BOM risk review matrix",
        body:
          "Use this table to prepare a BOM that can support a clearer quote and sourcing review. The point is not to promise that every sourcing issue can be solved, but to make risk visible before it becomes a production blocker.",
        table: {
          columns: [
            { key: "risk", label: "BOM risk" },
            { key: "why", label: "Why it matters" },
            { key: "buyerInput", label: "Buyer input" },
            { key: "reviewAction", label: "Review action" },
          ],
          rows: [
            {
              risk: "Missing MPN / manufacturer",
              why: "Sourcing and quote accuracy depend on exact part identification.",
              buyerInput: "Approved manufacturer and MPN.",
              reviewAction: "Flag missing fields and ask for confirmation.",
            },
            {
              risk: "Obsolete or long-availability part",
              why: "May affect schedule, cost and repeat production.",
              buyerInput: "Lifecycle priority, acceptable alternatives and last-buy rules.",
              reviewAction: "Identify sourcing risk and candidate alternative discussion.",
            },
            {
              risk: "No-substitution part",
              why: "Some parts affect certification, firmware, function or customer approval.",
              buyerInput: "Mark no-substitution parts clearly.",
              reviewAction: "Protect no-substitution rules during sourcing review.",
            },
            {
              risk: "Package or footprint mismatch",
              why: "Can cause assembly or board-fit issues.",
              buyerInput: "Package, footprint and datasheet for critical items.",
              reviewAction: "Raise DFM/DFA or footprint questions.",
            },
            {
              risk: "MOQ or price-break issue",
              why: "Small or medium-volume projects can be affected by sourcing constraints.",
              buyerInput: "Target quantity, pilot quantity and repeat forecast.",
              reviewAction: "Discuss sourcing and quantity implications.",
            },
            {
              risk: "Compliance requirement",
              why: "Parts or materials may need project-specific documentation.",
              buyerInput: "Required standard, market, document type and acceptance rule.",
              reviewAction: "Review availability of evidence; do not assume universal compliance.",
            },
          ],
        },
        kind: "content-table",
      },
      {
        title: "Component sourcing rules buyers should define",
        body:
          "Before asking Venture to source components, buyers should define which parts are flexible and which are controlled. These rules help purchasing, engineering and quality teams avoid accidental substitutions or unclear approval chains.",
        items: [
          "Which components are no-substitution parts.",
          "Which manufacturers or distributors are approved.",
          "Whether equivalent parts can be proposed for review.",
          "Whether lifecycle, availability, price, country of origin or documentation requirements matter.",
          "Who approves alternative components and how that approval is recorded.",
          "Whether buyer-supplied, Venture-sourced or mixed sourcing will be used.",
        ],
        kind: "checklist",
      },
      {
        title: "Customer-approved alternative flow",
        body:
          "Venture Electronics does not replace parts without buyer approval. Alternatives are a review output, not an automatic procurement decision.",
        items: [
          "BOM review identifies missing data, obsolete parts, long-availability items or sourcing risk.",
          "Candidate alternatives may be proposed with manufacturer, MPN, package, electrical or mechanical notes when available.",
          "Buyer reviews the candidate against design, firmware, certification and performance requirements.",
          "Approved alternatives are recorded before procurement or assembly.",
          "No-substitution parts remain protected unless the buyer explicitly changes the rule.",
        ],
        kind: "steps",
      },
      {
        title: "DFM / DFA review areas",
        body:
          "DFM and DFA review help identify manufacturing and assembly questions before build. The review does not guarantee that every design risk is removed, but it helps buyers resolve practical manufacturing inputs before quoting, sourcing or assembly.",
        table: {
          columns: [
            { key: "area", label: "Review area" },
            { key: "questions", label: "Typical questions" },
            { key: "buyerInput", label: "Buyer input" },
          ],
          rows: [
            {
              area: "Gerber / ODB++",
              questions: "Are layer data, solder mask, silkscreen, drill and outline information clear?",
              buyerInput: "Current Gerber or ODB++ package and revision.",
            },
            {
              area: "CPL / placement",
              questions: "Are coordinates, rotation, polarity and designators aligned with BOM and drawings?",
              buyerInput: "CPL / XY file, assembly drawing and polarity notes.",
            },
            {
              area: "Panelization",
              questions: "Does the panel support assembly, handling, fiducials and depanelization?",
              buyerInput: "Panel preference, breakaway method and edge constraints.",
            },
            {
              area: "Fiducials and test points",
              questions: "Are inspection and testing access points adequate?",
              buyerInput: "Test strategy, fixture needs and acceptance criteria.",
            },
            {
              area: "Component height and mechanical constraints",
              questions: "Could connectors, heatsinks, enclosures or cables affect assembly?",
              buyerInput: "Mechanical drawings, height limits and enclosure notes.",
            },
            {
              area: "Special processes",
              questions: "Are coating, potting, programming, cleaning, labeling or packaging requirements clear?",
              buyerInput: "Material, keep-out areas, firmware, labels and packaging rules.",
            },
          ],
        },
        kind: "content-table",
      },
      {
        title: "How BOM / DFM review improves RFQ quality",
        body:
          "BOM and DFM review improves RFQ quality by making assumptions explicit. It helps Venture identify whether the buyer expects consigned, partial-turnkey or full-turnkey support; whether components have sourcing constraints; whether board files match placement data; and whether testing or special processes should be priced early. This does not replace buyer engineering approval, but it creates a clearer discussion before procurement and assembly.",
        items: [
          "BOM completeness notes, including missing MPN, manufacturer, designator or package data.",
          "Availability and sourcing concerns that may affect quote, timing or repeat production.",
          "DFM or DFA questions that affect fabrication, assembly, inspection or testing.",
          "Customer-approved alternative component list when applicable.",
          "Open questions that should be resolved before PCB fabrication or assembly begins.",
        ],
        kind: "list",
      },
      {
        title: "Review output and quote assumptions to confirm",
        body:
          "A useful BOM / DFM review should leave the buyer with clear next actions, not a vague technical note. Before the quotation is treated as ready, the buyer and Venture should align the assumptions that affect sourcing, assembly, inspection, testing and repeat-build planning.",
        items: [
          "Which BOM lines are quote-ready and which lines still need MPN, manufacturer, package, lifecycle or approved-source clarification.",
          "Which parts are buyer-supplied, which parts may be Venture-sourced, and which parts need written approval before purchase.",
          "Which DFM or DFA questions affect PCB fabrication, assembly sequence, polarity, panelization, fixture access, cleaning, coating or packaging.",
          "Which alternatives are only candidates for review, and which alternatives have been formally approved for procurement.",
          "Which quotation assumptions should be rechecked if the design revision, quantity, target market, compliance need or testing requirement changes.",
          "Which open questions must be resolved before Venture starts procurement, fabrication coordination, assembly planning or test-fixture discussion.",
        ],
        kind: "checklist",
      },
      {
        title: "What this page does not promise",
        body:
          "BOM and DFM review improves project clarity, but it should not be written as a guarantee that all risks disappear.",
        items: [
          "It does not promise that every component is available.",
          "It does not authorize substitutions without customer approval.",
          "It does not guarantee project timing before sourcing status is reviewed.",
          "It does not replace customer engineering approval.",
          "It does not publish distributor, compliance or authenticity claims without evidence.",
        ],
        kind: "proof",
      },
      {
        title: "BOM & DFM Review FAQ",
        kind: "faq",
      },
    ],
    faqs: sourcingFaqs,
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
    directAnswer: [
      "PCB Fabrication Support helps align bare-board requirements with downstream PCB Assembly, inspection, testing and delivery needs.",
      "Use this page when Gerber, stack-up, material, surface finish, panelization or board constraints must be reviewed before PCBA.",
      "Exact fabrication capability values should be confirmed from current files, specifications and quotation scope before being treated as final production commitments.",
    ],
    sections: [
      {
        title: "PCB Fabrication Support for assembly-ready boards",
        body:
          "Venture Electronics discusses PCB Fabrication Support as part of the PCBA and turnkey assembly workflow. The goal is to help the buyer align bare-board files, materials, stack-up, surface finish, panelization and special requirements with downstream assembly, inspection, testing and packaging. This page should not read like a low-cost PCB-only instant-quote platform. It should help buyers prepare fabrication inputs that affect the assembled board.",
        featured: true,
      },
      {
        title: "Fabrication inputs buyers should provide",
        body:
          "The more complete the fabrication input package is, the easier it is to review assembly readiness and quote scope. These inputs should be reviewed together with BOM, CPL, assembly drawing, testing requirement and packaging expectation.",
        table: {
          columns: [
            { key: "input", label: "Fabrication input" },
            { key: "why", label: "Why it matters" },
            { key: "assemblyImpact", label: "Assembly impact" },
          ],
          rows: [
            {
              input: "Gerber or ODB++",
              why: "Defines copper, solder mask, silkscreen, drill, outline and layer data.",
              assemblyImpact: "Controls placement, fiducials, pad design and inspection readiness.",
            },
            {
              input: "Stack-up",
              why: "Defines layer structure, dielectric, impedance and design intent.",
              assemblyImpact: "May affect board thickness, warpage, signal performance and test planning.",
            },
            {
              input: "Material",
              why: "Affects thermal, electrical and mechanical behavior.",
              assemblyImpact: "Can influence soldering process, reliability and application fit.",
            },
            {
              input: "Board thickness and copper weight",
              why: "Affects fabrication process, current capacity and mechanical strength.",
              assemblyImpact: "Can affect connector fit, thermal behavior and assembly handling.",
            },
            {
              input: "Surface finish",
              why: "Affects solderability, shelf life and component compatibility.",
              assemblyImpact: "Important for fine-pitch, BGA, lead-free or special assembly needs.",
            },
            {
              input: "Panelization",
              why: "Affects production handling, SMT efficiency and depanelization.",
              assemblyImpact: "Needs fiducials, rails, breakaway method and component clearance review.",
            },
            {
              input: "Impedance or special requirements",
              why: "May affect fabrication process and test expectations.",
              assemblyImpact: "Should be aligned before assembly and functional validation.",
            },
          ],
        },
        kind: "content-table",
      },
      {
        title: "How fabrication decisions affect PCB Assembly",
        body:
          "Bare-board decisions can affect assembly yield, inspection, testing and packaging. Venture's fabrication support should help buyers identify these questions before board production and assembly begin.",
        items: [
          "Surface finish can affect solderability and fine-pitch assembly suitability.",
          "Panelization can affect SMT handling, fiducials, rails, tooling holes and depanelization stress.",
          "Board thickness and copper weight can affect thermal behavior, connector fit and mechanical handling.",
          "Stack-up and material can affect impedance, reliability, warpage and application requirements.",
          "Fiducials, test points and keep-out areas can affect AOI, ICT/FCT, fixture access and inspection.",
          "Special processes such as via-in-pad, controlled impedance, flex or rigid-flex construction should be reviewed before quotation.",
        ],
        kind: "list",
      },
      {
        title: "Board capability categories to review",
        body:
          "The current public website contains detailed PCB capability categories, but exact numeric ranges should be confirmed from the current project files and quotation scope before being treated as production commitments.",
        table: {
          columns: [
            { key: "category", label: "Category" },
            { key: "review", label: "What to review" },
            { key: "buyerInput", label: "Buyer input" },
          ],
          rows: [
            {
              category: "Board type",
              review: "Rigid, flex, rigid-flex, aluminum or special board type.",
              buyerInput: "Board files, stack-up and application requirement.",
            },
            {
              category: "Layer count and stack-up",
              review: "Layer structure, dielectric, impedance and thickness.",
              buyerInput: "Stack-up drawing and impedance requirement.",
            },
            {
              category: "Material and thermal needs",
              review: "FR-4, high-Tg, aluminum, high-frequency or other material needs.",
              buyerInput: "Material requirement or performance target.",
            },
            {
              category: "Copper and finish",
              review: "Copper weight, surface finish and solderability requirements.",
              buyerInput: "Copper requirement and finish preference.",
            },
            {
              category: "Mechanical constraints",
              review: "Outline, slots, holes, connector fit, panel and depanelization.",
              buyerInput: "Mechanical drawing and panel preference.",
            },
            {
              category: "Special requirements",
              review: "Impedance, via-in-pad, controlled drill, special mask, marking or testing.",
              buyerInput: "Specification, tolerance and acceptance criteria.",
            },
          ],
        },
        kind: "content-table",
      },
      {
        title: "Panelization and assembly preparation",
        body:
          "Panelization should be reviewed before assembly because it affects SMT efficiency, handling, inspection and depanelization.",
        items: [
          "Confirm whether the buyer provides panelized Gerber or expects panelization support.",
          "Review fiducials, tooling holes, rails, breakaway tabs or V-score requirements.",
          "Check component clearance near edges, connectors or mechanical features.",
          "Confirm how the panel will be separated after assembly.",
          "Align panel design with AOI, test fixture, labeling, packaging and final delivery requirements.",
        ],
        kind: "checklist",
      },
      {
        title: "Fabrication-to-assembly review flow",
        items: [
          "Review Gerber or ODB++, stack-up, material, thickness, finish and special requirements.",
          "Check whether panelization, fiducials, test points and keep-out areas support assembly and inspection.",
          "Confirm supply model: buyer-provided boards, Venture-supported fabrication, or full turnkey discussion.",
          "Review BOM and assembly drawing together with fabrication inputs.",
          "Confirm inspection, testing, packaging and delivery requirements before final quotation.",
        ],
        kind: "steps",
      },
      {
        title: "What stays consolidated instead of becoming thin pages",
        body:
          "Venture's older sites include many material, brand, stack-up and process pages. The first-launch GEO site should keep those topics consolidated unless a topic has enough verified evidence and buyer value for a future dedicated page.",
        items: [
          "Material brand pages should not be recreated as first-launch standalone pages.",
          "Layer-count stack-up topics should be treated as fabrication inputs unless a strong buyer resource page is planned.",
          "Design-layout topics should stay inside DFM/DFA or engineering review unless Venture confirms a separate public priority.",
          "Industry pages should remain scenario-level unless real cases or evidence are approved.",
        ],
        kind: "list",
      },
      {
        title: "PCB Fabrication Support boundaries",
        body:
          "This page should help buyers prepare better board inputs without over-positioning Venture as a low-cost instant PCB platform.",
        items: [
          "Exact fabrication specs should be confirmed from current project files and quotation scope.",
          "Do not publish unsupported layer count, capacity, delivery timing or tolerance claims.",
          "Do not imply every board type, material or special process is available for every project.",
          "Do not separate fabrication from assembly context when the buyer's main need is Turnkey PCBA.",
          "Use the page to support PCBA readiness, not to rebuild the old SEO materials library.",
        ],
        kind: "proof",
      },
      {
        title: "PCB Fabrication Support FAQ",
        kind: "faq",
      },
    ],
    faqs: fabricationFaqs,
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
    title: "Quality & Testing for PCB Assembly, PCBA and EMS projects.",
    seoTitle: "Quality & Testing for PCB Assembly, PCBA and EMS | Venture Electronics",
    metaDescription:
      "Plan PCB Assembly, PCBA and EMS inspection and testing with Venture Electronics, including IQC, SPI, FAI, AOI, X-Ray, ICT/FCT, functional testing, cleaning, reliability testing, records and traceability boundaries.",
    role:
      "Quality planning, inspection methods, testing inputs and records for project-based PCB Assembly and EMS manufacturing.",
    summary:
      "Venture Electronics plans quality and testing around each project's design files, BOM, components, assembly process, fixture availability, firmware, standards, acceptance criteria, reporting needs and delivery requirements.",
    template: "quality-trust",
    visual: pageVisuals.quality,
    directAnswer: [
      "Quality & Testing should define what is checked, when it is checked, which method applies, what buyer input is required, and what record or report is expected.",
      "Not every project uses every inspection or test method. SPI, FAI, AOI, X-Ray, ICT, FCT, functional testing, reliability testing and final inspection are selected according to project risk and agreed scope.",
    ],
    sections: [
      {
        title: "Quality planning across the project lifecycle",
        body:
          "A useful quality plan connects the design revision, BOM, sourcing rules, assembly process, inspection points, test method, records and shipment requirements. This page helps buyers prepare the information Venture needs before confirming inspection or testing scope.",
        table: {
          columns: [
            { key: "stage", label: "Stage" },
            { key: "qualityQuestion", label: "Quality question" },
            { key: "buyerInput", label: "Buyer input" },
            { key: "possibleOutput", label: "Possible output" },
          ],
          rows: [
            {
              stage: "File and BOM review",
              qualityQuestion: "Are the approved design files and BOM complete enough for quote and build review?",
              buyerInput: "Gerber or ODB++, BOM, CPL, assembly drawing, revision and special notes.",
              possibleOutput: "Missing-input list, BOM questions, DFM/DFA notes, sourcing-risk questions.",
            },
            {
              stage: "Incoming material / IQC",
              qualityQuestion: "Which components, boards, or buyer-supplied materials need incoming checks?",
              buyerInput: "Approved vendor rules, no-substitution parts, certificates or inspection requirements.",
              possibleOutput: "Incoming check scope, shortage or exception questions, material decision records.",
            },
            {
              stage: "SMT preparation",
              qualityQuestion: "How should solder paste and placement readiness be checked?",
              buyerInput: "Stencil, paste, component package risk, board finish, process notes.",
              possibleOutput: "SPI, first article, line setup verification or process-control notes.",
            },
            {
              stage: "In-process inspection",
              qualityQuestion: "Which visual or machine inspection methods apply during assembly?",
              buyerInput: "Acceptance criteria, critical components, package list, polarity and orientation notes.",
              possibleOutput: "FAI, AOI, X-Ray, visual inspection or rework decision records.",
            },
            {
              stage: "Electrical / functional testing",
              qualityQuestion: "What should the assembled board or system prove before delivery?",
              buyerInput: "Test points, firmware, fixture, test procedure, golden sample and pass/fail criteria.",
              possibleOutput: "ICT, FCT, functional test, programming or test-report requirement.",
            },
            {
              stage: "Final inspection and shipment",
              qualityQuestion: "What records, labels, packaging and shipment checks are required?",
              buyerInput: "Label rules, serial number needs, ESD packaging, delivery documents and report format.",
              possibleOutput: "Final inspection record, packaging confirmation and shipment documentation.",
            },
          ],
        },
        kind: "content-table",
        featured: true,
      },
      {
        title: "Inspection and testing method matrix",
        body:
          "The right method depends on product risk, component package, test points, firmware, fixtures, standards, and buyer acceptance criteria.",
        table: {
          columns: [
            { key: "method", label: "Method" },
            { key: "checks", label: "What it helps check" },
            { key: "when", label: "When it applies" },
            { key: "input", label: "Buyer input needed" },
          ],
          rows: [
            {
              method: "IQC / incoming material check",
              checks: "Material identity, quantity, package condition and incoming exceptions.",
              when: "Before production when parts, boards or buyer-supplied materials arrive.",
              input: "Approved vendors, no-substitution list, incoming inspection or certificate needs.",
            },
            {
              method: "SPI",
              checks: "Solder paste volume, alignment and print condition.",
              when: "SMT process control after solder paste printing.",
              input: "Stencil requirements, board finish and critical paste areas if applicable.",
            },
            {
              method: "FAI",
              checks: "First article setup, placement accuracy, polarity and assembly readiness.",
              when: "New build, revision change, first production setup or NPI review.",
              input: "Approved files, assembly drawing, polarity notes and acceptance criteria.",
            },
            {
              method: "AOI",
              checks: "Component placement, polarity, visible solder defects and assembly consistency.",
              when: "Post-reflow or assembly inspection where optical inspection is appropriate.",
              input: "Critical component list, special workmanship criteria and board revision.",
            },
            {
              method: "X-Ray",
              checks: "Hidden solder joints such as BGA, QFN or bottom-terminated components.",
              when: "When hidden-joint risk exists or buyer requires X-Ray inspection.",
              input: "Package list, risk areas, sample plan and acceptance criteria.",
            },
            {
              method: "Manual Visual Inspection",
              checks: "Workmanship, visible solder joints, cleanliness, cosmetic or mechanical issues.",
              when: "Final visual review or project-specific workmanship checks.",
              input: "Cosmetic criteria, workmanship standard, sample or photo requirements.",
            },
            {
              method: "Electrical Testing / bare-board test",
              checks: "Continuity, shorts, opens and board-level electrical integrity before assembly.",
              when: "Bare-board or fabrication-support scope where electrical test is required.",
              input: "Netlist, fabrication requirement and acceptance criteria.",
            },
            {
              method: "ICT",
              checks: "Component presence, orientation, solder shorts, opens and electrical parameters.",
              when: "When test points, fixture and program are available or can be developed.",
              input: "Test points, fixture, test program, BOM and pass/fail limits.",
            },
            {
              method: "FCT / functional test",
              checks: "Board or system behavior under powered operation.",
              when: "When firmware, fixture, procedure and acceptance criteria are available.",
              input: "Firmware, configuration, fixture, golden sample, test steps and pass/fail criteria.",
            },
            {
              method: "Boundary scan",
              checks: "Digital interconnects on compatible ICs where physical probing is limited.",
              when: "High-density boards or BGA-related designs that support boundary scan.",
              input: "Device support, design files, test access and procedure.",
            },
            {
              method: "Programming / configuration",
              checks: "Firmware, IC programming or configuration state before test or shipment.",
              when: "When the build requires programmed devices or configured systems.",
              input: "Firmware version, programming file, security requirements and verification method.",
            },
            {
              method: "Cleaning / residue control",
              checks: "Flux residues, contamination and cleanliness before coating or shipment.",
              when: "When process, coating, reliability or buyer cleanliness requirements require it.",
              input: "Cleaning standard, material compatibility and inspection method.",
            },
            {
              method: "Reliability / environmental testing",
              checks: "Performance under defined temperature, humidity, cycling, vibration or stress conditions.",
              when: "Only when the project defines standard, sample count, condition and report need.",
              input: "Standard, test condition, sample quantity, duration and acceptance criteria.",
            },
          ],
        },
        kind: "content-table",
      },
      {
        title: "Buyer inputs required for test planning",
        body:
          "Venture can discuss testing earlier, but final test scope is clearer when the buyer shares the files, procedure and criteria behind the expected result.",
        table: {
          columns: [
            { key: "input", label: "Buyer input" },
            { key: "why", label: "Why it matters" },
            { key: "example", label: "Example" },
          ],
          rows: [
            {
              input: "Current board and BOM revision",
              why: "Testing must match the revision being built.",
              example: "Gerber/ODB++, BOM, CPL, assembly drawing, revision notes.",
            },
            {
              input: "Critical components and risk areas",
              why: "Inspection priority depends on package risk and product risk.",
              example: "BGA, QFN, fine-pitch ICs, connectors, polarity-sensitive parts.",
            },
            {
              input: "Fixture and test access",
              why: "ICT and FCT depend on physical/electrical access.",
              example: "Test points, fixture files, test interface, cable or harness requirement.",
            },
            {
              input: "Firmware or software",
              why: "Functional test often depends on firmware state or configuration.",
              example: "Programming file, firmware version, setup instructions.",
            },
            {
              input: "Acceptance criteria",
              why: "The team needs pass/fail rules before confirming testing scope.",
              example: "Voltage/current range, LED behavior, communication response, functional steps.",
            },
            {
              input: "Report requirements",
              why: "The quotation should define what records or exported data are needed.",
              example: "Photos, test log, serial number, batch record, customer form.",
            },
            {
              input: "Special standards or market requirements",
              why: "Compliance language must match evidence and scope.",
              example: "Project-specific standard, customer inspection checklist, external lab requirement.",
            },
          ],
        },
        kind: "content-table",
      },
      {
        title: "Records and traceability discussion",
        body:
          "Traceability should be defined by project. A simple PCBA order may need basic revision and inspection records, while a more demanding EMS project may require stronger material, serial number, batch, test-data or shipment records.",
        table: {
          columns: [
            { key: "record", label: "Record type" },
            { key: "canInclude", label: "May include" },
            { key: "confirm", label: "Confirm before production" },
          ],
          rows: [
            {
              record: "File and revision record",
              canInclude: "Gerber/ODB++ revision, BOM revision, CPL revision, drawing revision.",
              confirm: "Which file revision controls the build.",
            },
            {
              record: "Material decision record",
              canInclude: "Approved alternatives, shortages, substitutions, no-substitution parts.",
              confirm: "Who approves alternatives and how approval is recorded.",
            },
            {
              record: "Inspection record",
              canInclude: "FAI, AOI, X-Ray, visual inspection, rework or deviation notes.",
              confirm: "Required inspection method and reporting format.",
            },
            {
              record: "Test record",
              canInclude: "ICT/FCT/functional result, firmware version, fixture ID, pass/fail result.",
              confirm: "Whether exported test data or customer form is required.",
            },
            {
              record: "Traceability record",
              canInclude: "Batch, lot, barcode, serial number, key component batch, shipment record.",
              confirm: "Whether unit-level or batch-level traceability is needed.",
            },
            {
              record: "Packaging and shipment record",
              canInclude: "ESD packaging, label, destination, shipping documents.",
              confirm: "Destination, packaging, label and document needs.",
            },
          ],
        },
        kind: "content-table",
      },
      {
        title: "PCBA cleaning, coating and special-process boundaries",
        body:
          "Cleaning, conformal coating, potting, programming, labeling and packaging can affect both quality planning and quotation scope. These items should be confirmed early when they apply.",
        items: [
          "Cleaning requirements should state residue, process, material compatibility and inspection expectations.",
          "Conformal coating should define material, coating area, keep-out areas, masking, thickness and inspection method.",
          "Potting or glue-filling requirements should define material, curing, coverage, thermal and mechanical needs.",
          "Programming or IC configuration should define firmware version, programming file, security handling and verification method.",
          "Labeling or serial-number requirements should define label content, location, barcode or customer record needs.",
          "Packaging requirements should define ESD, moisture, mechanical protection, accessories, manuals and shipment documents.",
        ],
        kind: "checklist",
      },
      {
        title: "Reliability and environmental testing boundaries",
        body:
          "Reliability or environmental testing should not be written as a blanket default. It must be planned from the required standard, condition, sample quantity, duration, acceptance criteria and whether the test is performed internally, coordinated externally or supported through sample preparation.",
        table: {
          columns: [
            { key: "test", label: "Test area" },
            { key: "confirm", label: "What to confirm" },
            { key: "boundary", label: "Public wording boundary" },
          ],
          rows: [
            {
              test: "Temperature / humidity",
              confirm: "Condition, duration, sample quantity, report format.",
              boundary: "Discuss by project; do not imply every PCBA uses environmental testing.",
            },
            {
              test: "Thermal shock / cycling",
              confirm: "Temperature range, cycle count, dwell time, acceptance criteria.",
              boundary: "Use only when the project requirement is defined.",
            },
            {
              test: "Vibration or mechanical stress",
              confirm: "Standard, fixture, product state, pass/fail criteria.",
              boundary: "Requires clear test method and sample plan.",
            },
            {
              test: "External laboratory involvement",
              confirm: "Who performs test, who owns report, applicable standard.",
              boundary: "State external-lab boundary when not performed directly.",
            },
          ],
        },
        kind: "content-table",
      },
      {
        title: "Certificate and compliance boundaries",
        body:
          "Venture-owned ISO 9001:2015 and UL Product iQ evidence can be discussed only by exact entity, document, scope and validity. Other compliance requirements should be reviewed by project and should not be written as Venture-held certifications unless evidence is approved.",
        items: [
          "Do not present unverified workmanship, environmental, automotive, social-audit, medical, or market-compliance requirements as Venture-held qualifications.",
          "Do not turn partner-factory certificates into Venture Electronics qualifications.",
          "UL Product iQ evidence should not be expanded into a broad claim that every PCBA or EMS project is UL certified.",
          "Medical can be discussed only as a non-certified, project-assessed scenario unless suitable certification evidence is provided.",
          "Regulated or sensitive market wording should remain excluded unless the customer approves evidence-backed public wording.",
        ],
        kind: "checklist",
      },
      {
        title: "What Quality & Testing does not promise",
        body:
          "This page should increase trust without creating unsupported guarantees.",
        items: [
          "It does not promise that each project includes all inspection or test methods.",
          "It does not promise universal ICT, FCT, X-Ray, reliability testing or full system testing.",
          "It does not publish fixed response timing, guaranteed delivery timing, fixed quantity rules, capacity or headcount claims.",
          "It does not publish named customer references, testimonials or named cases without authorization.",
          "It does not replace a project-specific quality plan, inspection plan, test procedure or quotation scope.",
        ],
        kind: "proof",
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
