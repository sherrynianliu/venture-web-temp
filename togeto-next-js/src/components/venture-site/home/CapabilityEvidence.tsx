import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/components/venture-site/site/CTAButton";
import { routes } from "@/components/venture-site/site-data";

type CapIcon = "traceability" | "smt" | "inspection" | "test" | "coating" | "reliability";

type Cap = { icon: CapIcon; title: string; desc: string; href: string };

const left: Cap[] = [
  {
    icon: "traceability",
    title: "Smart SMD Manufacturing & Traceability",
    desc: "ERP, MES, and barcode-driven traceability support production visibility, quality tracking, and process improvement.",
    href: routes.pcba,
  },
  {
    icon: "smt",
    title: "SMT Placement & Soldering",
    desc: "High-speed SMT placement, leaded / lead-free reflow, nitrogen vacuum reflow, and wave soldering across a wide range of builds.",
    href: routes.smtThtBga,
  },
  {
    icon: "inspection",
    title: "SPI, AOI, FAI & X-Ray Inspection",
    desc: "Solder paste control, placement verification, and hidden-joint review with SPI, AOI, first article, and X-Ray inspection.",
    href: routes.testingQualityControl,
  },
];

const right: Cap[] = [
  {
    icon: "test",
    title: "Electrical, ICT & Functional Testing",
    desc: "Electrical performance, ICT / FCT, insulation impedance, voltage withstand, and leakage testing planned to product needs.",
    href: routes.electricalTesting,
  },
  {
    icon: "coating",
    title: "Cleaning, Coating & Protection",
    desc: "Aqueous cleaning, conformal coating, glue filling, depaneling, and UV laser marking for project-specific protection.",
    href: routes.engineeringSupport,
  },
  {
    icon: "reliability",
    title: "Reliability & Environmental Test Support",
    desc: "Thermal shock and programmable temperature / humidity testing for reliability validation or environmental stress review.",
    href: routes.productReliabilityTesting,
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

export function CapabilityEvidence() {
  return (
    <section className="cap" aria-labelledby="cap-title">
      <div className="cap__inner">
        <header className="cap__head">
          <p className="cap__eyebrow">Capabilities</p>
          <h2 id="cap-title" className="cap__title">
            Production and quality support behind each PCBA / EMS project
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
              src="/capabilities-machine.jpg"
              alt="Venture SMT placement and assembly equipment"
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
          <CTAButton href={routes.qualityTesting}>View Full Capability Matrix</CTAButton>
          <CTAButton href={routes.requestQuote} variant="secondary">
            Request Project Review
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
