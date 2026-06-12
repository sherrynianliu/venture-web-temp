import Link from "next/link";
import { footerGroups, routes, type SiteLink } from "@/components/venture-site/site-data";

const solutions: SiteLink[] = [
  { label: "PCB Assembly / PCBA", href: routes.pcba },
  { label: "Turnkey PCB Assembly", href: routes.turnkey },
  { label: "EMS & Box Build", href: routes.emsBoxBuild },
  { label: "Component Sourcing & BOM Review", href: routes.componentSourcingBomReview },
  { label: "Testing & Quality Control", href: routes.testingQualityControl },
  { label: "PCB Fabrication", href: routes.pcbFabrication },
];

const company: SiteLink[] = [
  { label: "About Venture", href: routes.about },
  { label: "Venture Electronics vs Venture PCB / PCBA", href: routes.brandClarification },
  { label: "Official Resources", href: routes.officialResources },
  { label: "Contact", href: routes.contact },
];

const resources: SiteLink[] = [
  { label: "Services", href: routes.services },
  { label: "Quality & Testing", href: routes.qualityTesting },
  { label: "Engineering Support", href: routes.engineeringSupport },
  { label: "FAQ", href: routes.faq },
  { label: "Request a Quote", href: routes.requestQuote },
];

const legal = footerGroups.find((group) => group.title === "Legal")?.links ?? [];

type Social = { name: string; href: string };

// VK / LinkedIn / YouTube confirmed by Venture. Facebook URL pending.
const socials: Social[] = [
  { name: "Facebook", href: "#" },
  { name: "YouTube", href: "https://www.youtube.com/@VentureElectronics" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/venture-mfg.com/" },
  { name: "VK", href: "https://vk.com/venturepcb" },
];

function SocialGlyph({ name }: { name: string }) {
  switch (name) {
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M23 12s0-3.17-.4-4.69a2.5 2.5 0 0 0-1.77-1.77C19.32 5.13 12 5.13 12 5.13s-7.32 0-8.83.41A2.5 2.5 0 0 0 1.4 7.31C1 8.83 1 12 1 12s0 3.17.4 4.69a2.5 2.5 0 0 0 1.77 1.77c1.51.41 8.83.41 8.83.41s7.32 0 8.83-.41a2.5 2.5 0 0 0 1.77-1.77C23 15.17 23 12 23 12zM9.75 15.27V8.73L15.5 12l-5.75 3.27z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2zM8.08 18.34H5.16V9.4h2.92v8.94zM6.62 8.2a1.69 1.69 0 1 1 0-3.39 1.69 1.69 0 0 1 0 3.39zm11.72 10.14h-2.91v-4.35c0-1.04-.02-2.37-1.45-2.37-1.45 0-1.67 1.13-1.67 2.3v4.42H9.4V9.4h2.79v1.22h.04a3.06 3.06 0 0 1 2.76-1.51c2.95 0 3.5 1.94 3.5 4.46v4.77z" />
        </svg>
      );
    case "VK":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.16 16.94c-5.46 0-8.86-3.74-9-9.94h2.74c.1 4.55 2.16 6.5 3.76 6.9V7h2.58v3.94c1.6-.17 3.28-1.98 3.84-3.94h2.58c-.43 2.42-2.24 4.23-3.53 4.97 1.29.6 3.35 2.18 4.14 4.97h-2.84c-.61-1.92-2.14-3.4-4.19-3.6v3.6h-.31z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="footer-top">
          <div className="footer-cta">
            <p className="footer-cta__eyebrow">Let&apos;s work together</p>
            <p className="footer-cta__title">Start your PCBA or EMS project with Venture.</p>
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
                Building 36, Chentian Industrial Area, Xixiang, Bao&apos;an District, Shenzhen,
                Guangdong, China
              </span>
            </a>
            <a className="footer-contact__item" href="tel:+86075585296692">
              <span className="footer-contact__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span>+86-0755-8529 6692</span>
            </a>
            <a className="footer-contact__item" href="mailto:info@venture-mfg.com">
              <span className="footer-contact__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <span>info@venture-mfg.com</span>
            </a>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/venture-logo.png" alt="Venture Electronics" className="footer-logo" />
            <p className="footer-brand__desc">
              A China-based PCBA and EMS manufacturing partner — turnkey-first PCB assembly,
              component sourcing, testing, and box build support.
            </p>
            <div className="footer-social">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="footer-social__link"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialGlyph name={social.name} />
                </a>
              ))}
            </div>
          </div>

          <nav className="footer-col" aria-label="Solutions">
            <h2 className="footer-col__title">Solutions</h2>
            <ul>
              {solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Company">
            <h2 className="footer-col__title">Company</h2>
            <ul>
              {company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Resources">
            <h2 className="footer-col__title">Resources</h2>
            <ul>
              {resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 Venture Electronics Technology Ltd. All rights reserved.
          </p>
          <ul className="footer-legal">
            {legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="footer-disclaimer">
          This preview uses public-safe draft wording. Final website content will be completed after
          Venture confirms public facts, capabilities, certifications, official channels, and
          evidence-backed claims.
        </p>
      </div>
    </footer>
  );
}
