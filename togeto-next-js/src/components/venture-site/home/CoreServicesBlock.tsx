import Image from "next/image";
import Link from "next/link";
import { routes } from "@/components/venture-site/site-data";

type Svc = {
  label: string;
  href: string;
  description: string;
  image: string;
  tag?: { label: string; variant?: "ems" };
};

const services: Svc[] = [
  {
    label: "PCB Assembly / PCBA",
    href: routes.pcba,
    description: "Assembled boards with BOM review and testing.",
    image: "/hero-pcba-smt.jpg",
    tag: { label: "Primary" },
  },
  {
    label: "EMS & Box Build",
    href: routes.emsBoxBuild,
    description: "Final assembly, packaging, and box build.",
    image: "/hero-ems-factory.jpg",
    tag: { label: "Box build", variant: "ems" },
  },
  {
    label: "Component Sourcing & BOM Review",
    href: routes.componentSourcingBomDfmReview,
    description: "Sourcing risk, alternatives, and DFM review.",
    image: "/hero-circuit-globe.jpg",
  },
  {
    label: "PCB Fabrication Support",
    href: routes.pcbFabricationSupport,
    description: "Bare-board coordination for PCBA projects.",
    image: "/identity-pcb-closeup.jpg",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function CoreServicesBlock() {
  return (
    <section className="core-services" aria-labelledby="core-services-title">
      <div className="core-services__inner">
        <div className="core-services__head">
          <p className="core-services__eyebrow">Core services</p>
          <h2 id="core-services-title" className="core-services__title">
            Where to start your <span className="accent">PCBA or EMS</span> project
          </h2>
          <p className="core-services__sub">
            PCB Assembly / PCBA is the primary entry. Choose the service path that fits your project scope.
          </p>
        </div>

        <div className="core-grid">
          {services.map((svc) => (
            <Link key={svc.href} href={svc.href} className="product-card">
              <div className="product-card__media">
                <Image
                  className="product-card__img"
                  src={svc.image}
                  alt=""
                  fill
                  sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1080px) 31vw, 185px"
                />
                {svc.tag ? (
                  <span
                    className={`product-card__tag${
                      svc.tag.variant === "ems" ? " product-card__tag--ems" : ""
                    }`}
                  >
                    {svc.tag.label}
                  </span>
                ) : null}
              </div>
              <div className="product-card__body">
                <h3 className="product-card__title">{svc.label}</h3>
                <p className="product-card__desc">{svc.description}</p>
                <span className="product-card__arrow" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
