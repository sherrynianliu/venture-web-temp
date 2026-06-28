import { routes, serviceHierarchy, type PageData, type PageFAQ, type SiteLink } from "../site-data";

const siteBaseUrl = "https://www.venture-mfg.com";
const organizationId = `${siteBaseUrl}/#organization`;
const websiteId = `${siteBaseUrl}/#website`;

export const serviceSchemaPages: string[] = [
  routes.pcba,
  routes.emsBoxBuild,
  routes.componentSourcingBomDfmReview,
  routes.pcbFabricationSupport,
  routes.qualityTesting,
];

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdObject
  | JsonLdValue[];

export type JsonLdObject = {
  [key: string]: JsonLdValue;
};

export type PageStructuredData = {
  "@context": "https://schema.org";
  "@graph": JsonLdObject[];
};

export type HomeStructuredDataInput = {
  title: string;
  description: string;
  faqs: PageFAQ[];
};

function absoluteUrl(href: string) {
  return new URL(href, `${siteBaseUrl}/`).toString();
}

function pageId(page: SiteLink, suffix: string) {
  return `${absoluteUrl(page.href)}#${suffix}`;
}

function serviceParentCrumb(page: PageData): SiteLink[] {
  if (!page.href.startsWith("/services/") || page.href === routes.services) return [];

  return [{ label: "Services", href: routes.services }];
}

function buildBreadcrumbSchema(page: PageData): JsonLdObject {
  const crumbs: SiteLink[] = [
    { label: "Home", href: routes.home },
    ...serviceParentCrumb(page),
    { label: page.label, href: page.href },
  ];

  const uniqueCrumbs = crumbs.filter(
    (crumb, index) => index === 0 || crumb.href !== crumbs[index - 1].href,
  );

  return {
    "@type": "BreadcrumbList",
    "@id": pageId(page, "breadcrumb"),
    itemListElement: uniqueCrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: absoluteUrl(crumb.href),
    })),
  };
}

function buildWebPageSchema(page: PageData): JsonLdObject {
  return {
    "@type": "WebPage",
    "@id": pageId(page, "webpage"),
    url: absoluteUrl(page.href),
    name: page.title,
    description: page.summary,
    isPartOf: { "@id": websiteId },
    publisher: { "@id": organizationId },
  };
}

function isServiceSchemaPage(page: PageData) {
  return serviceSchemaPages.includes(page.href);
}

function relatedServiceLinks(page: PageData) {
  const serviceHrefs = new Set(serviceHierarchy.map((service) => service.href));

  return page.relatedLinks
    .filter((link) => serviceHrefs.has(link.href))
    .map((link) => ({ "@id": `${absoluteUrl(link.href)}#service` }));
}

function buildServiceSchema(page: PageData): JsonLdObject | null {
  if (!isServiceSchemaPage(page)) return null;

  const serviceSchema: JsonLdObject = {
    "@type": "Service",
    "@id": pageId(page, "service"),
    name: page.label,
    serviceType: page.label,
    description: page.summary,
    provider: { "@id": organizationId },
    areaServed: "Worldwide",
    url: absoluteUrl(page.href),
  };

  const relatedServices = relatedServiceLinks(page);
  if (relatedServices.length) {
    serviceSchema.isRelatedTo = relatedServices;
  }

  return serviceSchema;
}

function buildQuestionSchema(faq: PageFAQ): JsonLdObject {
  return {
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  };
}

export function buildHomeStructuredData({
  title,
  description,
  faqs,
}: HomeStructuredDataInput): PageStructuredData {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${siteBaseUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${siteBaseUrl}/`,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${siteBaseUrl}/#webpage`,
        url: `${siteBaseUrl}/`,
        name: title,
        description,
        isPartOf: { "@id": websiteId },
        publisher: { "@id": organizationId },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteBaseUrl}/#faq`,
        mainEntity: faqs.map(buildQuestionSchema),
      },
    ],
  };
}

function buildFaqPageSchema(page: PageData): JsonLdObject | null {
  if (!page.faqs?.length) return null;

  return {
    "@type": "FAQPage",
    "@id": pageId(page, "faq"),
    mainEntity: page.faqs.map(buildQuestionSchema),
  };
}

export function buildPageStructuredData(page: PageData): PageStructuredData {
  const graph: JsonLdObject[] = [
    buildBreadcrumbSchema(page),
    buildWebPageSchema(page),
  ];

  const serviceSchema = buildServiceSchema(page);
  if (serviceSchema) graph.push(serviceSchema);

  const faqPageSchema = buildFaqPageSchema(page);
  if (faqPageSchema) graph.push(faqPageSchema);

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
