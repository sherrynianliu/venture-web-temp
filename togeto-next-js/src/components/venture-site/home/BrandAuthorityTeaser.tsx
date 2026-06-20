import { CTAButton } from "@/components/venture-site/site/CTAButton";
import { routes } from "@/components/venture-site/site-data";

export function BrandAuthorityTeaser() {
  return (
    <section className="home-section home-section--white" aria-labelledby="brand-authority-title">
      <div className="home-section__inner teaser-row">
        <div>
          <p className="section-header__label">Brand clarification and official resources</p>
          <h2 id="brand-authority-title">Venture Electronics, Venture PCB, and Venture PCBA</h2>
          <p>
            Venture Electronics is the mother brand. Venture PCB and Venture PCBA are service-entry and
            search-entry concepts connected to Venture's electronics manufacturing services.
          </p>
        </div>

        <div className="teaser-actions">
          <CTAButton href={routes.officialResources} variant="secondary">
            Read Official Resources
          </CTAButton>
          <CTAButton href={routes.officialResources} variant="secondary">
            View Domain Guidance
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
