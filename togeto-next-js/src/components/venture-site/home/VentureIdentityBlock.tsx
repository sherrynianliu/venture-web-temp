import { CTAButton } from "@/components/venture-site/site/CTAButton";
import { routes } from "@/components/venture-site/site-data";

const identityFeatures = [
  "Sourcing coordination",
  "DFM and BOM review support",
  "Testing and quality planning",
  "Human project ownership",
  "Small-to-medium volume support",
  "EMS and box build project coordination",
];

export function VentureIdentityBlock() {
  return (
    <section className="identity" aria-labelledby="venture-identity-title">
      <div className="identity__inner">
        <div className="identity__media" aria-hidden="true">
          <span className="identity__media-chip">
            <span className="identity__media-chip-dot" />
            PCBA · EMS · Box build
          </span>
        </div>

        <div className="identity__content">
          <p className="identity__eyebrow">Who Venture Electronics is</p>
          <h2 id="venture-identity-title" className="identity__title">
            A PCBA-first manufacturing partner under the{" "}
            <span className="identity__accent">Venture Electronics</span> company brand.
          </h2>
          <p className="identity__lead">
            Venture Electronics supports PCBA, EMS, box build, and component sourcing discussions,
            with sourcing coordination, DFM / BOM review, testing and quality planning, human
            project ownership, and small-to-medium volume support.
          </p>
        </div>

        <div className="identity__bottom">
          <div className="identity__bottom-left">
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
                Know more
                <span aria-hidden="true" className="cta-arrow">→</span>
              </CTAButton>
              <div className="identity__avatars" aria-label="Example buyer categories for industrial, IoT and energy projects">
                <span>VE</span>
                <span>OEM</span>
                <span>IoT</span>
                <button type="button" className="identity__avatar-add" aria-label="See partner list">
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="identity__stat" role="figure" aria-label="DFM and BOM review turnaround">
            <div className="identity__stat-panel">
              <div className="identity__stat-info">
                <span className="identity__stat-eyebrow">Engineering turnaround</span>
                <span className="identity__stat-value">
                  DFM
                </span>
                <span className="identity__stat-label">DFM &amp; BOM review</span>
              </div>
              <span className="identity__stat-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="15" y="15" width="18" height="18" rx="2.5" />
                  <rect x="21" y="21" width="6" height="6" rx="1" />
                  <line x1="20" y1="15" x2="20" y2="10" />
                  <line x1="24" y1="15" x2="24" y2="10" />
                  <line x1="28" y1="15" x2="28" y2="10" />
                  <line x1="20" y1="33" x2="20" y2="38" />
                  <line x1="24" y1="33" x2="24" y2="38" />
                  <line x1="28" y1="33" x2="28" y2="38" />
                  <line x1="15" y1="20" x2="10" y2="20" />
                  <line x1="15" y1="24" x2="10" y2="24" />
                  <line x1="15" y1="28" x2="10" y2="28" />
                  <line x1="33" y1="20" x2="38" y2="20" />
                  <line x1="33" y1="24" x2="38" y2="24" />
                  <line x1="33" y1="28" x2="38" y2="28" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
