import Link from "next/link";
import { footerGroups, routes, type SiteLink } from "@/components/venture-site/site-data";

const contactLinks: SiteLink[] = [
  { label: "+86 755 8529 6692", href: "tel:+86075585296692" },
  { label: "info@venture-mfg.com", href: "mailto:info@venture-mfg.com" },
  { label: "Request a Quote", href: routes.requestQuote },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="footer-top">
          <div className="footer-cta">
            <p className="footer-cta__eyebrow">Let's work together</p>
            <p className="footer-cta__title">Start your PCBA or EMS project with Venture.</p>
            <Link className="footer-cta__btn" href={routes.requestQuote}>
              Request a Quote
            </Link>
          </div>

          <div className="footer-contact">
            <a
              className="footer-contact__item"
              href="https://maps.google.com/?q=Chentian+Industrial+Area+Xixiang+Bao%27an+Shenzhen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="footer-contact__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span>
                Building 36, Chentian Industrial Area, Xixiang, Bao'an District, Shenzhen,
                Guangdong, China
              </span>
            </a>
            {contactLinks.map((link) => (
              <Link key={link.href} className="footer-contact__item" href={link.href}>
                <span className="footer-contact__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16v16H4z" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/venture-logo.png" alt="Venture Electronics" className="footer-logo" />
            <p className="footer-brand__desc">
              China-based PCB Manufacturing, PCB Assembly and EMS manufacturing partner.
              Public wording remains evidence-bounded until final facts are confirmed.
            </p>
          </div>

          {footerGroups.slice(0, 3).map((group) => (
            <nav className="footer-col" aria-label={group.title} key={group.title}>
              <h2 className="footer-col__title">{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 Venture Electronics Technology Ltd. All rights reserved.
          </p>
          <ul className="footer-legal">
            {footerGroups
              .find((group) => group.title === "Legal")
              ?.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
          </ul>
        </div>

        <p className="footer-disclaimer">
          This preview uses public-safe draft wording. Final website content should be completed
          after Venture confirms capabilities, certifications, official channels, and
          evidence-backed claims.
        </p>
      </div>
    </footer>
  );
}
