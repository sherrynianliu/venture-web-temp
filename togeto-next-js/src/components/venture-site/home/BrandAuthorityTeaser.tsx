import { CTAButton } from "@/components/venture-site/site/CTAButton";
import { routes } from "@/components/venture-site/site-data";

export function BrandAuthorityTeaser() {
  return (
    <section className="home-section home-section--white" aria-labelledby="brand-authority-title">
      <div className="home-section__inner teaser-row">
        <div>
          <p className="section-header__label">Brand and official resources</p>
          <h2 id="brand-authority-title">Which Venture Electronics website and contact details should buyers use?</h2>
          <p>
            Venture Electronics is the primary company brand. venture-mfg.com is the canonical main
            website, venture-pcba.com is a legacy PCBA-focused vertical asset, and
            info@venture-mfg.com is the confirmed inquiry email.
          </p>
        </div>

        <div className="teaser-actions">
          <CTAButton href={routes.officialResources} variant="secondary">
            View Official Resources
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
