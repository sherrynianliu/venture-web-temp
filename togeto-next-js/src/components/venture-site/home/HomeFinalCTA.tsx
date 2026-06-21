import Link from "next/link";
import { routes } from "@/components/venture-site/site-data";

export function HomeFinalCTA() {
  return (
    <section className="final-cta" aria-labelledby="home-final-cta-title">
      <div className="final-cta__overlay" aria-hidden="true" />
      <div className="final-cta__inner">
        <div className="final-cta__text">
          <h2 id="home-final-cta-title" className="final-cta__title">
            Prepare your PCB Assembly or EMS project for review.
          </h2>
          <p className="final-cta__desc">
            Share the available Gerber or ODB++, BOM, CPL, assembly drawings, quantity and testing
            requirements so Venture Electronics can identify missing inputs and discuss the
            appropriate manufacturing scope.
          </p>
        </div>
        <div className="subscribe" aria-label="Request a Venture Electronics quote">
          <Link href={routes.requestQuote} className="subscribe__btn">
            Request a Quote
          </Link>
          <Link href={routes.resources} className="catalog__btn">
            View RFQ Checklist
          </Link>
        </div>
      </div>
    </section>
  );
}
