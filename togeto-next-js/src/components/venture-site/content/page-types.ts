import type { VentureImageId } from "../image-manifest";
import type { SiteLink } from "../site-routes";

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

export type ContentTableColumn = {
  key: string;
  label: string;
};

export type ContentTableRow = Record<string, string>;

export type ContentTable = {
  columns: ContentTableColumn[];
  rows: ContentTableRow[];
  caption?: string;
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

export type PageSection = {
  anchorId?: string;
  label?: string;
  title: string;
  body?: string;
  items?: string[];
  table?: ContentTable;
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
    | "content-table"
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
