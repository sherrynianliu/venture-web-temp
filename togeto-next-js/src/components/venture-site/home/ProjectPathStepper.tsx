import { routes } from "@/components/venture-site/site-data";

type StepIcon = "design" | "fabrication" | "bom" | "pcba" | "test" | "box";

type Step = {
  index: string;
  label: string;
  description: string;
  href: string;
  icon: StepIcon;
  tag?: string;
  variant?: "active" | "featured";
};

const steps: Step[] = [
  {
    index: "01",
    label: "Review project files / RFQ",
    description: "Gerber, BOM, CPL, Assembly drawing, quantity & testing requirements.",
    href: routes.requestQuote,
    icon: "design",
    tag: "Day 0",
  },
  {
    index: "02",
    label: "BOM Review & Component Sourcing",
    description: "Sourcing, MOQ & lifecycle checks.",
    href: routes.componentSourcingBomReview,
    icon: "bom",
    tag: "BOM",
    variant: "active",
  },
  {
    index: "03",
    label: "PCB Fabrication",
    description: "Bare-board fabrication coordination when scope requires it.",
    href: routes.pcbFabrication,
    icon: "fabrication",
    tag: "Boards",
  },
  {
    index: "04",
    label: "PCB Assembly / PCBA",
    description: "SMT · THT · BGA on PCBA line.",
    href: routes.pcba,
    icon: "pcba",
    tag: "PCBA",
  },
  {
    index: "05",
    label: "Testing & Quality Control",
    description: "AOI · ICT · functional · reliability.",
    href: routes.testingQualityControl,
    icon: "test",
    tag: "QC",
  },
  {
    index: "06",
    label: "EMS / Box Build / Delivery Support",
    description: "Assembly, packaging & logistics.",
    href: routes.emsBoxBuild,
    icon: "box",
    tag: "Premium",
    variant: "featured",
  },
];

function StepGlyph({ name }: { name: StepIcon }) {
  switch (name) {
    case "design":
      return (
        <svg className="project-path__step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="13" y2="17" />
        </svg>
      );
    case "fabrication":
      return (
        <svg className="project-path__step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <circle cx="8" cy="9" r="1" />
          <circle cx="16" cy="9" r="1" />
          <circle cx="8" cy="15" r="1" />
          <circle cx="16" cy="15" r="1" />
          <path d="M8 9h8M8 15h8M12 9v6" />
        </svg>
      );
    case "bom":
      return (
        <svg className="project-path__step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="9" y1="4" x2="9" y2="20" />
        </svg>
      );
    case "pcba":
      return (
        <svg className="project-path__step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8" cy="8" r="1.2" />
          <circle cx="16" cy="8" r="1.2" />
          <circle cx="8" cy="16" r="1.2" />
          <circle cx="16" cy="16" r="1.2" />
          <path d="M8 8h8M8 16h8M8 8v8M16 8v8" />
        </svg>
      );
    case "test":
      return (
        <svg className="project-path__step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    case "box":
      return (
        <svg className="project-path__step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
  }
}

export function ProjectPathStepper() {
  return (
    <div className="project-path-wrap">
      <section className="project-path" aria-labelledby="project-path-title">
        <header className="project-path__header">
          <div className="project-path__title-block">
            <p className="project-path__eyebrow">Typical project path</p>
            <h2 className="project-path__title" id="project-path-title">
              From design files to <em>finished assemblies</em> with one accountable partner.
            </h2>
          </div>
        </header>

        <div className="project-path__scroller">
          <ol className="project-path__steps">
            {steps.map((step) => (
              <li
                key={step.index}
                className={`project-path__step${
                  step.variant === "active" ? " project-path__step--active" : ""
                }${step.variant === "featured" ? " project-path__step--featured" : ""}`}
              >
                <span className="project-path__step-bullet" aria-hidden="true">
                  <StepGlyph name={step.icon} />
                </span>
                <span className="project-path__step-label">{step.label}</span>
                <span className="project-path__step-desc">{step.description}</span>
                {step.tag ? <span className="project-path__step-tag">{step.tag}</span> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
