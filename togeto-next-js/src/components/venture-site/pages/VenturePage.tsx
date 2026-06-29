import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { CTAButton } from "@/components/venture-site/site/CTAButton";
import { routes, type PageData, type PageSection } from "@/components/venture-site/site-data";
import { buildPageStructuredData } from "@/components/venture-site/schema/structured-data";
import { StructuredData } from "@/components/venture-site/schema/StructuredData";
import { EvidenceImageBlock } from "./EvidenceImageBlock";
import { PageEnhancements } from "./PageEnhancements";
import { RfqEmailComposer } from "./RfqEmailComposer";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:");
}

function getExternalAnchorProps(href: string) {
  const isMailto = href.startsWith("mailto:");

  if (isMailto) {
    return {};
  }

  return {
    target: "_blank",
    rel: "noopener noreferrer",
  };
}

function getDomainCardModifier(record: NonNullable<PageSection["domainRecords"]>[number]) {
  const safety = record.safePublicInquiries.toLowerCase();

  if (safety.startsWith("yes")) return "stage3-domain-card--safe";
  if (safety.startsWith("use ")) return "stage3-domain-card--route";
  return "stage3-domain-card--caution";
}

function QuickAnswerTable({ rows }: { rows: NonNullable<PageSection["quickAnswers"]> }) {
  return (
    <div className="stage3-quick-answer">
      <table>
        <thead>
          <tr>
            <th scope="col">Question</th>
            <th scope="col">Official answer</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.question}>
              <th scope="row">{row.question}</th>
              <td>
                {row.href ? (
                  isExternalHref(row.href) ? (
                    <a href={row.href} {...getExternalAnchorProps(row.href)}>
                      {row.answer}
                    </a>
                  ) : (
                    <Link href={row.href}>{row.answer}</Link>
                  )
                ) : (
                  row.answer
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DomainRecordCards({ records }: { records: NonNullable<PageSection["domainRecords"]> }) {
  return (
    <div className="stage3-domain-grid">
      {records.map((record) => (
        <article
          className={`stage3-domain-card ${getDomainCardModifier(record)}`}
          key={record.domain}
        >
          <div className="stage3-domain-card__top">
            <span className="stage3-domain-card__label">Domain</span>
            <h3>
              {record.href ? (
                <a href={record.href} target="_blank" rel="noopener noreferrer">
                  {record.domain}
                </a>
              ) : (
                record.domain
              )}
            </h3>
          </div>
          <dl className="stage3-domain-card__details">
            <div>
              <dt>What it is</dt>
              <dd>{record.currentRole}</dd>
            </div>
            <div>
              <dt>How it is used</dt>
              <dd>{record.howItIsUsed}</dd>
            </div>
            <div>
              <dt>Buyer guidance</dt>
              <dd>{record.buyerGuidance}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}

function DomainRecordTable({ records }: { records: NonNullable<PageSection["domainRecords"]> }) {
  return (
    <div className="stage3-domain-table">
      <table>
        <thead>
          <tr>
            <th scope="col">Domain</th>
            <th scope="col">Status</th>
            <th scope="col">Buyer guidance</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.domain}>
              <th scope="row">{record.domain}</th>
              <td>{record.currentRole}</td>
              <td>{record.buyerGuidance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PageFaqList({ faqs }: { faqs: NonNullable<PageSection["faqItems"]> }) {
  return (
    <div className="stage3-page-faq">
      {faqs.map((faq, index) => (
        <details className="stage3-page-faq__item" key={faq.question} open={index === 0}>
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

function SectionItems({ section }: { section: PageSection }) {
  if (section.kind === "quick-answer" && section.quickAnswers?.length) {
    return <QuickAnswerTable rows={section.quickAnswers} />;
  }

  if (section.kind === "domain-cards" && section.domainRecords?.length) {
    return <DomainRecordCards records={section.domainRecords} />;
  }

  if (section.kind === "domain-table" && section.domainRecords?.length) {
    return <DomainRecordTable records={section.domainRecords} />;
  }

  if (section.kind === "faq" && section.faqItems?.length) {
    return <PageFaqList faqs={section.faqItems} />;
  }

  if (!section.items?.length) return null;

  if (section.kind === "steps") {
    return (
      <ol className="stage3-steps">
        {section.items.map((item, index) => (
          <li key={item}>
            <span className="stage3-steps__index">{String(index + 1).padStart(2, "0")}</span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    );
  }

  if (section.kind === "checklist") {
    return (
      <ul className="stage3-checklist">
        {section.items.map((item) => (
          <li key={item}>
            <span className="stage3-checklist__mark" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (section.kind === "facts") {
    return (
      <ul className="stage3-facts">
        {section.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (section.kind === "proof") {
    return (
      <ul className="stage3-proof">
        {section.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="stage3-list">
      {section.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function SectionLinks({ section }: { section: PageSection }) {
  if (!section.links?.length) return null;

  return (
    <div className="stage3-section-links">
      {section.links.map((link) =>
        isExternalHref(link.href) ? (
          <a
            key={link.href}
            href={link.href}
            {...getExternalAnchorProps(link.href)}
          >
            {link.label}
          </a>
        ) : (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ),
      )}
    </div>
  );
}

function PageSectionBlock({ section, index }: { section: PageSection; index: number }) {
  const sectionId = section.anchorId ?? `section-${index}`;

  return (
    <section
      className={`stage3-section${section.featured ? " stage3-section--featured" : ""}`}
      id={sectionId}
      aria-labelledby={`${sectionId}-title`}
    >
      <div className="stage3-section__head">
        <h2 id={`${sectionId}-title`}>{section.title}</h2>
      </div>
      <div className="stage3-section__body">
        {section.body ? <p>{section.body}</p> : null}
        <SectionItems section={section} />
        <SectionLinks section={section} />
      </div>
    </section>
  );
}

function PageHero({ page, showHeroVisual }: { page: PageData; showHeroVisual: boolean }) {
  const heroClass = [
    "stage3-hero",
    showHeroVisual ? "stage3-hero--with-visual" : "",
    page.heroDensity === "compact" ? "stage3-hero--compact" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={heroClass}>
      <div className="stage3-hero__content">
        <h1>{page.title}</h1>
        <p className="stage3-role">{page.role}</p>
        <p className="stage3-direct-answer">{page.summary}</p>

        {page.directAnswer?.length ? (
          <div className="stage3-answer">
            {page.directAnswer.map((answer) => (
              <p key={answer}>{answer}</p>
            ))}
          </div>
        ) : null}

        {(page.cta || page.secondaryCta) ? (
          <div className="stage3-actions">
            {page.cta ? <CTAButton href={page.cta.href}>{page.cta.label}</CTAButton> : null}
            {page.secondaryCta ? (
              <CTAButton href={page.secondaryCta.href} variant="secondary">
                {page.secondaryCta.label}
              </CTAButton>
            ) : null}
          </div>
        ) : null}
      </div>

      {showHeroVisual ? (
        <figure className="stage3-visual">
          <Image
            src={page.visual.src}
            alt={page.visual.alt}
            width={720}
            height={860}
            sizes="(max-width: 860px) 100vw, 38vw"
            priority={page.href === routes.pcba}
          />
          {page.visual.caption ? <figcaption>{page.visual.caption}</figcaption> : null}
        </figure>
      ) : null}
    </header>
  );
}

function PlainPageHeader({ page }: { page: PageData }) {
  return (
    <header className="stage3-plain-header">
      <h1>{page.title}</h1>
      <p className="stage3-role">{page.role}</p>
      <p className="stage3-direct-answer">{page.summary}</p>
    </header>
  );
}

export function VenturePage({ page }: { page: PageData }) {
  const showHeroHeader = page.showHeroHeader !== false;
  const showHeroVisual = page.showHeroVisual !== false;
  const showRelatedLinks = page.showRelatedLinks !== false && page.relatedLinks.length > 0;
  const evidenceImages = page.evidenceImages ?? [];
  const structuredData = buildPageStructuredData(page);

  return (
    <main className="page-shell page-shell--with-enhancements">
      <StructuredData data={structuredData} />
      <div className="site-footer__inner stage3-main-wrap">
        <article className={`stage3-page stage3-page--${page.template}`}>
          {showHeroHeader ? (
            <PageHero page={page} showHeroVisual={showHeroVisual} />
          ) : (
            <PlainPageHeader page={page} />
          )}

          {page.sections.map((section, index) => (
            <Fragment key={`${section.title}-${index}`}>
              <PageSectionBlock section={section} index={index} />
              {evidenceImages
                .filter((group) => group.afterSectionIndex === index)
                .map((group) => (
                  <EvidenceImageBlock key={group.title} title={group.title} images={group.images} />
                ))}
            </Fragment>
          ))}
        </article>
      </div>

      <PageEnhancements page={page} />

      <div className="site-footer__inner stage3-tail-wrap">
        <article className={`stage3-page stage3-page--tail stage3-page--${page.template}`}>
          {page.href === routes.requestQuote ? <RfqEmailComposer /> : null}

          {showRelatedLinks ? (
            <section className="stage3-related-section" aria-labelledby="related-title">
              <h2 id="related-title">Related pages</h2>
              <div className="stage3-related">
                {page.relatedLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </article>
      </div>
    </main>
  );
}
