export type SiteLink = {
  label: string;
  href: string;
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
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms", href: "/terms/" },
  { label: "Sitemap", href: "/sitemap/" },
];
