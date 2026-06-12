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
  children?: ServiceItem[];
};

export type PlaceholderPageData = SiteLink & {
  title: string;
  role: string;
  summary: string;
  cta: SiteLink;
  relatedLinks: SiteLink[];
};

export const routes = {
  home: "/",
  about: "/about/",
  brandClarification: "/brand/venture-electronics-vs-venture-pcb-pcba/",
  officialResources: "/official-resources/",
  companyOverview: "/about/company-overview/",
  news: "/about/news/",
  services: "/services/",
  pcba: "/services/pcb-assembly-pcba/",
  turnkey: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/",
  prototype: "/services/pcb-assembly-pcba/prototype-low-volume-pcba/",
  smtThtBga: "/services/pcb-assembly-pcba/smt-tht-bga-capabilities/",
  emsBoxBuild: "/services/ems-box-build/",
  pcbFabrication: "/services/pcb-fabrication/",
  componentSourcingBomReview: "/services/component-sourcing-bom-review/",
  qualityTesting: "/quality-testing/",
  testingQualityControl: "/quality-testing/testing-quality-control/",
  electricalTesting: "/quality-testing/electrical-testing/",
  productReliabilityTesting: "/quality-testing/product-reliability-testing/",
  testingInspectionEquipment: "/quality-testing/testing-inspection-equipment/",
  qualityManagementSystem: "/quality-testing/quality-management-system/",
  packagingLogistics: "/quality-testing/packaging-logistics/",
  engineeringSupport: "/engineering-support/",
  smtThtBgaProcessSupport: "/engineering-support/smt-tht-bga-process-support/",
  pcbTestFixtureSupport: "/engineering-support/pcb-test-fixture-support/",
  icProgrammingSupport: "/engineering-support/ic-programming-support/",
  industries: "/industries/",
  industrialElectronics: "/industries/industrial-electronics/",
  iotSmartDevices: "/industries/iot-smart-devices/",
  consumerElectronics: "/industries/consumer-electronics/",
  energyPowerElectronics: "/industries/energy-power-electronics/",
  automationControl: "/industries/automation-control/",
  communicationEquipment: "/industries/communication-equipment/",
  resources: "/resources/",
  faq: "/resources/faq/",
  blog: "/resources/blog/",
  guides: "/resources/guides/",
  downloads: "/resources/downloads/",
  catalog: "/resources/catalog/",
  glossary: "/resources/glossary/",
  caseStudies: "/resources/case-studies/",
  contact: "/contact/",
  requestQuote: "/request-a-quote/",
  thankYou: "/thank-you/",
  privacyPolicy: "/privacy-policy/",
  terms: "/terms/",
  sitemap: "/sitemap/",
};

export const sitemapLinks: SiteLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  {
    label: "Venture Electronics vs Venture PCB / Venture PCBA",
    href: "/brand/venture-electronics-vs-venture-pcb-pcba/",
  },
  { label: "Official Resources", href: "/official-resources/" },
  { label: "Company Overview", href: "/about/company-overview/" },
  { label: "News", href: "/about/news/" },
  { label: "Services", href: "/services/" },
  { label: "PCB Assembly / PCBA", href: "/services/pcb-assembly-pcba/" },
  { label: "Turnkey PCB Assembly", href: "/services/pcb-assembly-pcba/turnkey-pcb-assembly/" },
  { label: "Prototype & Low-volume PCBA", href: "/services/pcb-assembly-pcba/prototype-low-volume-pcba/" },
  { label: "SMT, THT & BGA Capabilities", href: "/services/pcb-assembly-pcba/smt-tht-bga-capabilities/" },
  { label: "EMS & Box Build", href: "/services/ems-box-build/" },
  { label: "PCB Fabrication", href: "/services/pcb-fabrication/" },
  { label: "Component Sourcing & BOM Review", href: "/services/component-sourcing-bom-review/" },
  { label: "Quality & Testing", href: "/quality-testing/" },
  { label: "Testing & Quality Control", href: "/quality-testing/testing-quality-control/" },
  { label: "Electrical Testing", href: "/quality-testing/electrical-testing/" },
  { label: "Product Reliability Testing", href: "/quality-testing/product-reliability-testing/" },
  { label: "Testing & Inspection Equipment", href: "/quality-testing/testing-inspection-equipment/" },
  { label: "Quality Management System", href: "/quality-testing/quality-management-system/" },
  { label: "Packaging & Logistics", href: "/quality-testing/packaging-logistics/" },
  { label: "Engineering", href: "/engineering-support/" },
  { label: "SMT, THT & BGA Process Support", href: "/engineering-support/smt-tht-bga-process-support/" },
  { label: "PCB Test Fixture Support", href: "/engineering-support/pcb-test-fixture-support/" },
  { label: "IC Programming Support", href: "/engineering-support/ic-programming-support/" },
  { label: "Industries", href: "/industries/" },
  { label: "Industrial Electronics", href: "/industries/industrial-electronics/" },
  { label: "IoT & Smart Devices", href: "/industries/iot-smart-devices/" },
  { label: "Consumer Electronics", href: "/industries/consumer-electronics/" },
  { label: "Energy & Power Electronics", href: "/industries/energy-power-electronics/" },
  { label: "Automation & Control", href: "/industries/automation-control/" },
  { label: "Communication Equipment", href: "/industries/communication-equipment/" },
  { label: "Resources", href: "/resources/" },
  { label: "FAQ", href: "/resources/faq/" },
  { label: "Blog", href: "/resources/blog/" },
  { label: "Guides", href: "/resources/guides/" },
  { label: "Downloads", href: "/resources/downloads/" },
  { label: "Catalog", href: "/resources/catalog/" },
  { label: "Glossary", href: "/resources/glossary/" },
  { label: "Case Studies", href: "/resources/case-studies/" },
  { label: "Contact", href: "/contact/" },
  { label: "Request a Quote", href: "/request-a-quote/" },
  { label: "Thank You", href: "/thank-you/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms", href: "/terms/" },
  { label: "Sitemap", href: "/sitemap/" },
];

const aboutLinks: NavItem[] = [
  { label: "About Venture Electronics", href: routes.about },
  { label: "Official Brand Resources", href: routes.officialResources },
];

const pcbaChildren: ServiceItem[] = [
  {
    label: "Turnkey PCB Assembly",
    href: routes.turnkey,
    role: "PCBA child route for full-process delivery",
    description: "Preview page for turnkey PCB assembly under PCB Assembly / PCBA.",
  },
  {
    label: "Prototype & Low-volume PCBA",
    href: routes.prototype,
    role: "PCBA child route for prototype and low-volume builds",
    description: "Preview page for prototype and low-volume PCBA under PCB Assembly / PCBA.",
  },
  {
    label: "SMT, THT & BGA Capabilities",
    href: routes.smtThtBga,
    role: "PCBA child route for assembly capability navigation",
    description: "Preview page for SMT, THT, and BGA capabilities under PCB Assembly / PCBA.",
  },
];

export const serviceHierarchy: ServiceItem[] = [
  {
    label: "PCB Assembly / PCBA",
    href: routes.pcba,
    role: "Primary service category and main conversion entry",
    description: "Preview page for the primary PCB Assembly / PCBA service route.",
    children: pcbaChildren,
  },
  {
    label: "EMS & Box Build",
    href: routes.emsBoxBuild,
    role: "System-level manufacturing service route",
    description: "Preview page for EMS and Box Build service navigation.",
  },
  {
    label: "PCB Fabrication",
    href: routes.pcbFabrication,
    role: "Supporting bare-board service route",
    description: "Preview page for PCB fabrication as a supporting service.",
  },
  {
    label: "Component Sourcing & BOM Review",
    href: routes.componentSourcingBomReview,
    role: "Supply-chain and engineering support service route",
    description: "Preview page for component sourcing and BOM review.",
  },
];

const qualityTestingLinks: NavItem[] = [
  { label: "Testing & Quality Control", href: routes.testingQualityControl },
  { label: "Electrical Testing", href: routes.electricalTesting },
  { label: "Product Reliability Testing", href: routes.productReliabilityTesting },
  { label: "Testing & Inspection Equipment", href: routes.testingInspectionEquipment },
  { label: "Quality Management System", href: routes.qualityManagementSystem },
  { label: "Packaging & Logistics", href: routes.packagingLogistics },
];

const engineeringSupportLinks: NavItem[] = [
  { label: "SMT, THT & BGA Process Support", href: routes.smtThtBgaProcessSupport },
  { label: "PCB Test Fixture Support", href: routes.pcbTestFixtureSupport },
  { label: "IC Programming Support", href: routes.icProgrammingSupport },
];

const industryLinks: NavItem[] = [
  { label: "Industrial Electronics", href: routes.industrialElectronics },
  { label: "IoT & Smart Devices", href: routes.iotSmartDevices },
  { label: "Consumer Electronics", href: routes.consumerElectronics },
  { label: "Energy & Power Electronics", href: routes.energyPowerElectronics },
  { label: "Automation & Control", href: routes.automationControl },
  { label: "Communication Equipment", href: routes.communicationEquipment },
];

const resourceLinks: NavItem[] = [
  { label: "FAQ", href: routes.faq },
  { label: "Blog", href: routes.blog },
  { label: "Guides", href: routes.guides },
  { label: "Downloads", href: routes.downloads },
  { label: "Catalog", href: routes.catalog },
  { label: "Glossary", href: routes.glossary },
  { label: "Case Studies", href: routes.caseStudies },
];

export const navItems: NavItem[] = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about, children: aboutLinks, requiresSelection: true },
  {
    label: "Services",
    href: routes.services,
    children: serviceHierarchy.map((service) => ({
      label: service.label,
      href: service.href,
      children: service.children?.map((child) => ({ label: child.label, href: child.href })),
    })),
  },
  { label: "Quality & Testing", href: routes.qualityTesting, children: qualityTestingLinks },
  { label: "Engineering", href: routes.engineeringSupport, children: engineeringSupportLinks },
  { label: "Industries", href: routes.industries, children: industryLinks },
  { label: "Resources", href: routes.resources, children: resourceLinks },
  { label: "Contact", href: routes.contact },
];

export const footerGroups: { title: string; links: SiteLink[] }[] = [
  { title: "About", links: aboutLinks },
  {
    title: "Services",
    links: serviceHierarchy.flatMap((service) => [
      { label: service.label, href: service.href },
      ...(service.children?.map((child) => ({ label: child.label, href: child.href })) ?? []),
    ]),
  },
  { title: "Quality & Testing", links: qualityTestingLinks },
  { title: "Engineering", links: engineeringSupportLinks },
  { title: "Industries", links: industryLinks },
  { title: "Resources", links: resourceLinks },
  {
    title: "Contact",
    links: [
      { label: "Contact", href: routes.contact },
      { label: "Request a Quote", href: routes.requestQuote },
      { label: "Thank You", href: routes.thankYou },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: routes.privacyPolicy },
      { label: "Terms", href: routes.terms },
      { label: "Sitemap", href: routes.sitemap },
    ],
  },
];

export const supportCapabilities = serviceHierarchy.slice(2);

function createPlaceholderPage(
  label: string,
  href: string,
  role: string,
  relatedLinks: SiteLink[],
): PlaceholderPageData {
  return {
    label,
    title: label,
    href,
    role,
    summary:
      "This page is included in the proposed site architecture. Detailed copy and evidence-backed content will be developed after Venture confirms the relevant facts, capabilities, and public-safe claims.",
    cta: { label: "Request a Quote", href: routes.requestQuote },
    relatedLinks,
  };
}

const topLevelLinks: SiteLink[] = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Services", href: routes.services },
  { label: "Quality & Testing", href: routes.qualityTesting },
  { label: "Engineering", href: routes.engineeringSupport },
  { label: "Industries", href: routes.industries },
  { label: "Resources", href: routes.resources },
  { label: "Contact", href: routes.contact },
];

export const placeholderPages = {
  home: createPlaceholderPage("Home", routes.home, "Homepage preview route for the proposed architecture.", [
    { label: "Services", href: routes.services },
    { label: "Quality & Testing", href: routes.qualityTesting },
    { label: "Request a Quote", href: routes.requestQuote },
  ]),
  about: createPlaceholderPage("About", routes.about, "About hub preview for company and authority routes.", aboutLinks),
  brandClarification: createPlaceholderPage(
    "Venture Electronics vs Venture PCB / Venture PCBA",
    routes.brandClarification,
    "Brand relationship preview under the About navigation group.",
    [
      { label: "About", href: routes.about },
      { label: "Official Resources", href: routes.officialResources },
      { label: "Contact", href: routes.contact },
    ],
  ),
  officialResources: createPlaceholderPage(
    "Official Resources",
    routes.officialResources,
    "Official online presence preview under the About navigation group.",
    [
      { label: "About", href: routes.about },
      { label: "Brand Clarification", href: routes.brandClarification },
      { label: "Contact", href: routes.contact },
    ],
  ),
  companyOverview: createPlaceholderPage(
    "Company Overview",
    routes.companyOverview,
    "Company overview preview under the About navigation group.",
    aboutLinks,
  ),
  news: createPlaceholderPage("News", routes.news, "News preview under the About navigation group.", aboutLinks),
  services: createPlaceholderPage("Services", routes.services, "Services hub preview for the service dropdown.", serviceHierarchy),
  pcba: createPlaceholderPage(
    "PCB Assembly / PCBA",
    routes.pcba,
    "Primary service preview with nested PCBA child routes.",
    pcbaChildren,
  ),
  turnkey: createPlaceholderPage("Turnkey PCB Assembly", routes.turnkey, "PCBA child route preview.", [
    { label: "PCB Assembly / PCBA", href: routes.pcba },
    { label: "Component Sourcing & BOM Review", href: routes.componentSourcingBomReview },
    { label: "Request a Quote", href: routes.requestQuote },
  ]),
  prototype: createPlaceholderPage("Prototype & Low-volume PCBA", routes.prototype, "PCBA child route preview.", [
    { label: "PCB Assembly / PCBA", href: routes.pcba },
    { label: "SMT, THT & BGA Capabilities", href: routes.smtThtBga },
    { label: "Request a Quote", href: routes.requestQuote },
  ]),
  smtThtBga: createPlaceholderPage("SMT, THT & BGA Capabilities", routes.smtThtBga, "PCBA child route preview.", [
    { label: "PCB Assembly / PCBA", href: routes.pcba },
    { label: "SMT, THT & BGA Process Support", href: routes.smtThtBgaProcessSupport },
    { label: "Request a Quote", href: routes.requestQuote },
  ]),
  emsBoxBuild: createPlaceholderPage("EMS & Box Build", routes.emsBoxBuild, "Service route preview.", [
    { label: "Services", href: routes.services },
    { label: "PCB Assembly / PCBA", href: routes.pcba },
    { label: "Request a Quote", href: routes.requestQuote },
  ]),
  pcbFabrication: createPlaceholderPage("PCB Fabrication", routes.pcbFabrication, "Service route preview.", [
    { label: "Services", href: routes.services },
    { label: "PCB Assembly / PCBA", href: routes.pcba },
    { label: "Request a Quote", href: routes.requestQuote },
  ]),
  componentSourcingBomReview: createPlaceholderPage(
    "Component Sourcing & BOM Review",
    routes.componentSourcingBomReview,
    "Service route preview.",
    [
      { label: "Services", href: routes.services },
      { label: "Turnkey PCB Assembly", href: routes.turnkey },
      { label: "Request a Quote", href: routes.requestQuote },
    ],
  ),
  qualityTesting: createPlaceholderPage(
    "Quality & Testing",
    routes.qualityTesting,
    "Quality and testing hub preview for the dropdown group.",
    qualityTestingLinks,
  ),
  testingQualityControl: createPlaceholderPage(
    "Testing & Quality Control",
    routes.testingQualityControl,
    "Quality and testing child route preview.",
    qualityTestingLinks,
  ),
  electricalTesting: createPlaceholderPage(
    "Electrical Testing",
    routes.electricalTesting,
    "Quality and testing child route preview.",
    qualityTestingLinks,
  ),
  productReliabilityTesting: createPlaceholderPage(
    "Product Reliability Testing",
    routes.productReliabilityTesting,
    "Quality and testing child route preview.",
    qualityTestingLinks,
  ),
  testingInspectionEquipment: createPlaceholderPage(
    "Testing & Inspection Equipment",
    routes.testingInspectionEquipment,
    "Quality and testing child route preview.",
    qualityTestingLinks,
  ),
  qualityManagementSystem: createPlaceholderPage(
    "Quality Management System",
    routes.qualityManagementSystem,
    "Quality and testing child route preview.",
    qualityTestingLinks,
  ),
  packagingLogistics: createPlaceholderPage(
    "Packaging & Logistics",
    routes.packagingLogistics,
    "Quality and testing child route preview.",
    qualityTestingLinks,
  ),
  engineeringSupport: createPlaceholderPage(
    "Engineering",
    routes.engineeringSupport,
    "Engineering support hub preview for the dropdown group.",
    engineeringSupportLinks,
  ),
  smtThtBgaProcessSupport: createPlaceholderPage(
    "SMT, THT & BGA Process Support",
    routes.smtThtBgaProcessSupport,
    "Engineering support child route preview.",
    engineeringSupportLinks,
  ),
  pcbTestFixtureSupport: createPlaceholderPage(
    "PCB Test Fixture Support",
    routes.pcbTestFixtureSupport,
    "Engineering support child route preview.",
    engineeringSupportLinks,
  ),
  icProgrammingSupport: createPlaceholderPage(
    "IC Programming Support",
    routes.icProgrammingSupport,
    "Engineering support child route preview.",
    engineeringSupportLinks,
  ),
  industries: createPlaceholderPage("Industries", routes.industries, "Draft industry label preview.", industryLinks),
  industrialElectronics: createPlaceholderPage(
    "Industrial Electronics",
    routes.industrialElectronics,
    "Draft industry label preview.",
    industryLinks,
  ),
  iotSmartDevices: createPlaceholderPage(
    "IoT & Smart Devices",
    routes.iotSmartDevices,
    "Draft industry label preview.",
    industryLinks,
  ),
  consumerElectronics: createPlaceholderPage(
    "Consumer Electronics",
    routes.consumerElectronics,
    "Draft industry label preview.",
    industryLinks,
  ),
  energyPowerElectronics: createPlaceholderPage(
    "Energy & Power Electronics",
    routes.energyPowerElectronics,
    "Draft industry label preview.",
    industryLinks,
  ),
  automationControl: createPlaceholderPage(
    "Automation & Control",
    routes.automationControl,
    "Draft industry label preview.",
    industryLinks,
  ),
  communicationEquipment: createPlaceholderPage(
    "Communication Equipment",
    routes.communicationEquipment,
    "Draft industry label preview.",
    industryLinks,
  ),
  resources: createPlaceholderPage("Resources", routes.resources, "Resources hub preview.", resourceLinks),
  faq: createPlaceholderPage("FAQ", routes.faq, "Resource child route preview.", resourceLinks),
  blog: createPlaceholderPage("Blog", routes.blog, "Resource child route preview.", resourceLinks),
  guides: createPlaceholderPage("Guides", routes.guides, "Resource child route preview.", resourceLinks),
  downloads: createPlaceholderPage("Downloads", routes.downloads, "Resource child route preview.", resourceLinks),
  catalog: createPlaceholderPage("Catalog", routes.catalog, "Resource child route preview.", resourceLinks),
  glossary: createPlaceholderPage("Glossary", routes.glossary, "Resource child route preview.", resourceLinks),
  caseStudies: createPlaceholderPage("Case Studies", routes.caseStudies, "Resource child route preview.", resourceLinks),
  contact: createPlaceholderPage("Contact", routes.contact, "Contact route preview.", [
    { label: "Request a Quote", href: routes.requestQuote },
    { label: "Services", href: routes.services },
    { label: "Resources", href: routes.resources },
  ]),
  requestQuote: createPlaceholderPage("Request a Quote", routes.requestQuote, "RFQ route preview.", [
    { label: "Contact", href: routes.contact },
    { label: "Services", href: routes.services },
    { label: "Thank You", href: routes.thankYou },
  ]),
  thankYou: createPlaceholderPage("Thank You", routes.thankYou, "Post-submit preview route.", [
    { label: "Home", href: routes.home },
    { label: "Services", href: routes.services },
    { label: "Contact", href: routes.contact },
  ]),
  privacyPolicy: createPlaceholderPage("Privacy Policy", routes.privacyPolicy, "Legal route preview.", topLevelLinks),
  terms: createPlaceholderPage("Terms", routes.terms, "Legal route preview.", topLevelLinks),
  sitemap: createPlaceholderPage("Sitemap", routes.sitemap, "Sitemap preview route.", sitemapLinks),
};
