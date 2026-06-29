import Link from "next/link";
import { routes } from "@/components/venture-site/site-data";

const buyerRows = [
  {
    challenge: "Unsure whether the project is PCBA or EMS",
    support: "Service structure explains board-level and system-level scope.",
  },
  {
    challenge: "BOM has sourcing or lifecycle risk",
    support: "BOM review and approved-alternative discussion before procurement.",
  },
  {
    challenge: "Testing requirements are unclear",
    support: "Quality & Testing explains what inputs are needed.",
  },
  {
    challenge: "Multiple Venture domains appear online",
    support: "Official Websites, Domains & Company Entities explains which channels to use.",
  },
  {
    challenge: "RFQ files are incomplete",
    support: "Resources and Request a Quote explain what to prepare.",
  },
];

export function HomeBuyerPathBlock() {
  return (
    <section className="home-section home-section--white buyer-path" aria-labelledby="buyer-path-title">
      <div className="home-section__inner buyer-path__inner">
        <div className="buyer-path__intro">
          <p className="section-header__label">Buyer path</p>
          <h2 id="buyer-path-title">A clearer path from PCB files to assembled electronics</h2>
          <p>
            Venture Electronics supports project-based PCB Assembly, PCBA and EMS manufacturing
            discussions. Buyers often come with Gerber files, BOMs, incomplete sourcing questions,
            test requirements, or a product-level assembly goal. The website is organized to help
            them find the right starting point before sending an RFQ.
          </p>
          <div className="buyer-path__actions">
            <Link href={routes.services}>View services</Link>
            <Link href={routes.requestQuote}>Prepare RFQ</Link>
          </div>
        </div>

        <div className="buyer-path__table" role="table" aria-label="Buyer challenges and Venture support">
          {buyerRows.map((row) => (
            <div className="buyer-path__row" role="row" key={row.challenge}>
              <div role="cell">
                <span>Buyer challenge</span>
                <strong>{row.challenge}</strong>
              </div>
              <div role="cell">
                <span>Venture support</span>
                <p>{row.support}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
