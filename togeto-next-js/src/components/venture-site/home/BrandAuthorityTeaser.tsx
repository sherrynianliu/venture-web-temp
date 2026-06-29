import { CTAButton } from "@/components/venture-site/site/CTAButton";
import { routes } from "@/components/venture-site/site-data";
import { CONTACT_CHANNELS } from "@/components/venture-site/content/contact-channels";

export function BrandAuthorityTeaser() {
  return (
    <section className="home-section home-section--white" aria-labelledby="brand-authority-title">
      <div className="home-section__inner teaser-row">
        <div>
          <p className="section-header__label">Brand and official resources</p>
          <h2 id="brand-authority-title">Which Venture Electronics website and contact details should buyers use?</h2>
          <p>
            venture-mfg.com is the current official main website. The official resources page
            separates the current website from legacy, associated, historical, reserved and
            non-official domains; {CONTACT_CHANNELS.rfqEmail} is the RFQ email.
          </p>
        </div>

        <div className="teaser-actions">
          <CTAButton href={routes.officialResources} variant="secondary">
            View Official Websites, Domains & Company Entities
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
