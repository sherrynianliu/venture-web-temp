import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { CTAButton } from "@/components/venture-site/site/CTAButton";
import { routes, type PageData, type PageSection } from "@/components/venture-site/site-data";
import { buildPageStructuredData } from "@/components/venture-site/schema/structured-data";
import { StructuredData } from "@/components/venture-site/schema/StructuredData";
import { EvidenceImageBlock } from "./EvidenceImageBlock";
import { PageEnhancements } from "./PageEnhancements";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:");
}

function SectionItems({ section }: { section: PageSection }) {
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
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
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
  return (
    <section
      className={`stage3-section${section.featured ? " stage3-section--featured" : ""}`}
      aria-labelledby={`section-${index}`}
    >
      <div className="stage3-section__head">
        <h2 id={`section-${index}`}>{section.title}</h2>
      </div>
      <div className="stage3-section__body">
        {section.body ? <p>{section.body}</p> : null}
        <SectionItems section={section} />
        <SectionLinks section={section} />
      </div>
    </section>
  );
}

function RfqMailtoPanel() {
  return (
    <div className="stage3-panel stage3-panel--quiet" aria-labelledby="rfq-mailto-title">
      <h2 id="rfq-mailto-title">Send your RFQ package by email</h2>
      <p>
        Email Gerber or ODB++, BOM, CPL, drawings, quantity, testing needs, and schedule details to
        the Venture Electronics team for project review.
      </p>
      <div className="stage3-actions">
        <CTAButton href="mailto:support@venture-mfg.com?subject=Venture%20Electronics%20RFQ">
          Email support@venture-mfg.com
        </CTAButton>
        <CTAButton href={routes.contact} variant="secondary">
          Contact first
        </CTAButton>
      </div>
      <p>
        For sensitive files, NDA discussion, or large attachments, start by email and ask for the
        preferred transfer method.
      </p>
    </div>
  );
}

function PageHero({ page, showHeroVisual }: { page: PageData; showHeroVisual: boolean }) {
  return (
    <header className={`stage3-hero${showHeroVisual ? " stage3-hero--with-visual" : ""}`}>
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
          {page.href === routes.requestQuote ? <RfqMailtoPanel /> : null}

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
