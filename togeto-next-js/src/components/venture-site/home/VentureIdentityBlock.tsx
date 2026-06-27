import Image from "next/image";
import { ventureImages } from "@/components/venture-site/image-manifest";
import { CTAButton } from "@/components/venture-site/site/CTAButton";
import { routes } from "@/components/venture-site/site-data";

const identityFeatures = [
  "PCB and assembly coordination",
  "BOM and component sourcing review",
  "DFM / DFA feedback before production",
  "Project-specific inspection and testing planning",
  "Prototype, low-volume and repeat-production discussion",
  "EMS and Box Build scope review",
];

export function VentureIdentityBlock() {
  const identityImage = ventureImages.factoryVisit05;

  return (
    <section className="identity" aria-labelledby="venture-identity-title">
      <div className="identity__inner">
        <figure className="identity__media">
          <Image
            className="identity__media-img"
            src={identityImage.src}
            alt={identityImage.alt}
            fill
            sizes="(max-width: 900px) calc(100vw - 48px), 600px"
          />
          <span className="identity__media-chip">
            <span className="identity__media-chip-dot" />
            Factory visit context
          </span>
        </figure>

        <div className="identity__content">
          <p className="identity__eyebrow">Who Venture Electronics is</p>
          <h2 id="venture-identity-title" className="identity__title">
            What kind of manufacturing partner is{" "}
            <span className="identity__accent">Venture Electronics</span>?
          </h2>
          <p className="identity__lead">
            Venture Electronics organizes electronics manufacturing projects around approved files,
            buyer decisions and a clearly defined quotation. The company supports board fabrication,
            PCB Assembly, PCBA, sourcing, testing and broader EMS discussions without presenting
            every production resource or certificate as an owned in-house capability.
          </p>
        </div>

        <div className="identity__bottom">
          <div className="identity__bottom-left identity__bottom-left--full">
            <ul className="identity-features">
              {identityFeatures.map((feature) => (
                <li className="identity-feature" key={feature}>
                  <span className="identity-feature__check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="identity__actions">
              <CTAButton href={routes.about}>
                About Venture Electronics
                <span aria-hidden="true" className="cta-arrow">→</span>
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
