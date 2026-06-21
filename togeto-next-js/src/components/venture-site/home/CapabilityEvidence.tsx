import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/components/venture-site/site/CTAButton";
import { routes } from "@/components/venture-site/site-data";

type CapIcon = "traceability" | "smt" | "inspection" | "test" | "coating" | "reliability";

type Cap = { icon: CapIcon; title: string; desc: string; href: string };

const left: Cap[] = [
  {
    icon: "traceability",
    title: "Files and Revision Alignment",
    desc: "Keep Gerber, BOM, CPL, drawings and test requirements on the approved revision before quotation and production review.",
    href: routes.pcba,
  },
  {
    icon: "smt",
    title: "Assembly-process Planning",
    desc: "Review SMT, through-hole, mixed assembly, polarity and special-handling requirements against the project files.",
    href: routes.pcba,
  },
  {
    icon: "inspection",
    title: "Inspection Checkpoints",
    desc: "Discuss FAI, SPI, AOI, visual inspection or X-ray where the board and package risks support them.",
    href: routes.qualityTesting,
  },
];

const right: Cap[] = [
  {
    icon: "test",
    title: "Electrical or Functional Checks",
    desc: "Define ICT, FCT or product-specific tests from the available test plan, fixtures, firmware and acceptance criteria.",
    href: routes.qualityTesting,
  },
  {
    icon: "coating",
    title: "BOM and Approved Alternatives",
    desc: "Record sourcing restrictions and customer approval before any candidate substitution is used.",
    href: routes.qualityTesting,
  },
  {
    icon: "reliability",
    title: "Records and Reliability Requirements",
    desc: "Confirm required reports, traceability depth, samples, standards and any external-laboratory role before the scope is finalized.",
    href: routes.qualityTesting,
  },
];

function CapGlyph({ name }: { name: CapIcon }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "traceability":
      return (
        <svg {...common}>
          <circle cx="18" cy="5" r="2.4" />
          <circle cx="6" cy="12" r="2.4" />
          <circle cx="18" cy="19" r="2.4" />
          <path d="m8.1 10.8 7.8-4.6M8.1 13.2l7.8 4.6" />
        </svg>
      );
    case "smt":
      return (
        <svg {...common}>
          <rect x="7" y="7" width="10" height="10" rx="1.5" />
          <path d="M10 7V4M14 7V4M10 17v3M14 17v3M7 10H4M7 14H4M17 10h3M17 14h3" />
        </svg>
      );
    case "inspection":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="m20.5 20.5-3.7-3.7M8 11h6M11 8v6" />
        </svg>
      );
    case "test":
      return (
        <svg {...common}>
          <path d="M3 12h4l3 7 4-15 3 8h4" />
        </svg>
      );
    case "coating":
      return (
        <svg {...common}>
          <path d="M12 3s6 5.6 6 10a6 6 0 0 1-12 0c0-4.4 6-10 6-10z" />
        </svg>
      );
    case "reliability":
      return (
        <svg {...common}>
          <path d="M14 14.6V5a2 2 0 1 0-4 0v9.6a4 4 0 1 0 4 0z" />
        </svg>
      );
  }
}

function Feature({ cap }: { cap: Cap }) {
  return (
    <Link href={cap.href} className="cap-feature">
      <span className="cap-feature__icon" aria-hidden="true">
        <CapGlyph name={cap.icon} />
      </span>
      <h3 className="cap-feature__title">{cap.title}</h3>
      <p className="cap-feature__desc">{cap.desc}</p>
    </Link>
  );
}

type CapabilityEvidenceProps = {
  eyebrow?: string;
  title?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CapabilityEvidence({
  eyebrow = "Project readiness and quality planning",
  title = "What quality and testing information should be defined before production?",
  primaryLabel = "View Quality & Testing",
  primaryHref = routes.qualityTesting,
  secondaryLabel = "Request Project Review",
  secondaryHref = routes.requestQuote,
}: CapabilityEvidenceProps = {}) {
  return (
    <section className="cap" aria-labelledby="cap-title">
      <div className="cap__inner">
        <header className="cap__head">
          <p className="cap__eyebrow">{eyebrow}</p>
          <h2 id="cap-title" className="cap__title">
            {title}
          </h2>
        </header>

        <div className="cap__layout">
          <div className="cap__col cap__col--left">
            {left.map((cap) => (
              <Feature key={cap.title} cap={cap} />
            ))}
          </div>

          <div className="cap__media">
            <Image
              src="/assets/img/venture-old-site/pcba-testing/venture-electronics-pcba-testing-aoi-pcb-inspection.png"
              alt="AOI inspection equipment used for PCBA quality planning context"
              className="cap__media-img"
              width={768}
              height={960}
              sizes="(max-width: 900px) 340px, 28vw"
            />
          </div>

          <div className="cap__col cap__col--right">
            {right.map((cap) => (
              <Feature key={cap.title} cap={cap} />
            ))}
          </div>
        </div>

        <div className="cap__actions">
          <CTAButton href={primaryHref}>{primaryLabel}</CTAButton>
          <CTAButton href={secondaryHref} variant="secondary">
            {secondaryLabel}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
