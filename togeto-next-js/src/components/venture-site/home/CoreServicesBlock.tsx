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
    description:
      "Assembled boards using SMT, through-hole or mixed assembly, with delivery-model, BOM, inspection and test-scope review.",
    image: "/assets/img/venture-old-site/smt-assembly/venture-electronics-smt-assembly-high-volume-pcb-assembly-line-1.jpg",
    tag: { label: "Primary" },
  },
  {
    label: "EMS & Box Build",
    href: routes.emsBoxBuild,
    description:
      "Project-based support when approved PCBAs extend into final assembly, cable or harness, mechanical, functional-check, labeling or packaging needs.",
    image: "/assets/img/venture-old-site/box-build/venture-electronics-box-build-ems-box-build-assembly-2.jpg",
    tag: { label: "Box build", variant: "ems" },
  },
  {
    label: "Component Sourcing & BOM Review",
    href: routes.componentSourcingBomDfmReview,
    description:
      "BOM completeness, availability, lifecycle, MOQ risk, customer-approved alternatives and manufacturability questions before production.",
    image: "/assets/img/venture-old-site/communication-equipment/venture-electronics-communication-equipment-rf-pcb-4.png",
  },
  {
    label: "PCB Fabrication Support",
    href: routes.pcbFabricationSupport,
    description:
      "Bare-board file, stack-up, material, finish and assembly-readiness coordination for PCB Assembly or Turnkey PCBA projects.",
    image: "/assets/img/venture-old-site/pcb-fabrication/venture-electronics-pcb-fabrication-12-layer-pcb-stackup-2.webp",
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
    <section id="core-services" className="core-services" aria-labelledby="core-services-title">
      <div className="core-services__inner">
        <div className="core-services__head">
          <p className="core-services__eyebrow">Core services</p>
          <h2 id="core-services-title" className="core-services__title">
            Which Venture Electronics service fits your project?
          </h2>
          <p className="core-services__sub">
            Start with the deliverable you need. The four service routes below explain the primary board-level service, the broader system-level path and the engineering or supply-chain support around them.
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
                  sizes="(max-width: 680px) calc(100vw - 48px), (max-width: 1080px) 46vw, 25vw"
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
