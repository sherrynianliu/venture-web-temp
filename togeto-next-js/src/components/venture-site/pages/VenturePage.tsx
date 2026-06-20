import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/components/venture-site/site/CTAButton";
import type { PageData, PageSection } from "@/components/venture-site/site-data";
import { PageEnhancements } from "./PageEnhancements";

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
      </div>
    </section>
  );
}

function RfqPlaceholder() {
  return (
    <div className="stage3-panel stage3-panel--quiet" aria-labelledby="rfq-placeholder-title">
      <h2 id="rfq-placeholder-title">RFQ form placeholder</h2>
      <p>
        The public form is intentionally not connected to CRM, email automation, uploads, or a
        database in this PR.
      </p>
      <form className="contact-form" aria-label="Request a quote visual placeholder">
        <div className="form-grid">
          <div className="field">
            <label htmlFor="rfq-name">Name</label>
            <input id="rfq-name" name="name" placeholder="Your name" type="text" />
          </div>
          <div className="field">
            <label htmlFor="rfq-email">Email</label>
            <input id="rfq-email" name="email" placeholder="name@company.com" type="email" />
          </div>
          <div className="field">
            <label htmlFor="rfq-company">Company</label>
            <input id="rfq-company" name="company" placeholder="Company name" type="text" />
          </div>
          <div className="field">
            <label htmlFor="rfq-service">Project type</label>
            <select id="rfq-service" name="service" defaultValue="">
              <option value="" disabled>
                Select project type
              </option>
              <option>PCB Assembly / PCBA</option>
              <option>EMS & Box Build</option>
              <option>Component Sourcing / BOM / DFM</option>
              <option>PCB Fabrication Support</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="rfq-message">Project notes</label>
          <textarea
            id="rfq-message"
            name="message"
            placeholder="Board files, BOM status, quantity, testing requirements, and target schedule."
          />
        </div>
        <button className="subscribe__btn" type="button">
          Placeholder only
        </button>
      </form>
    </div>
  );
}

export function VenturePage({ page }: { page: PageData }) {
  return (
    <main className="page-shell page-shell--with-enhancements">
      <div className="site-footer__inner stage3-main-wrap">
        <article className={`stage3-page stage3-page--${page.template}`}>
          <header className="stage3-hero stage3-hero--with-visual">
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

            <figure className="stage3-visual">
              <Image
                src={page.visual.src}
                alt={page.visual.alt}
                width={720}
                height={860}
                sizes="(max-width: 860px) 100vw, 38vw"
                priority={page.href === "/services/pcb-assembly-pcba/"}
              />
              {page.visual.caption ? <figcaption>{page.visual.caption}</figcaption> : null}
            </figure>
          </header>

          {page.sections.map((section, index) => (
            <PageSectionBlock key={`${section.title}-${index}`} section={section} index={index} />
          ))}
        </article>
      </div>

      <PageEnhancements page={page} />

      <div className="site-footer__inner stage3-tail-wrap">
        <article className={`stage3-page stage3-page--tail stage3-page--${page.template}`}>
          {page.href === "/request-a-quote/" ? <RfqPlaceholder /> : null}

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

          {page.placeholderNote ? (
            <aside className="stage3-note" aria-label="Placeholder note">
              <h2>Current placeholder boundary</h2>
              <p>{page.placeholderNote}</p>
            </aside>
          ) : null}
        </article>
      </div>
    </main>
  );
}
