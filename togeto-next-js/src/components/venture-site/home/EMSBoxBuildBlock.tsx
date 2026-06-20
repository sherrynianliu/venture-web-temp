import { Fragment } from "react";
import { CTAButton } from "@/components/venture-site/site/CTAButton";
import { SectionHeader } from "@/components/venture-site/shared/SectionHeader";
import { routes } from "@/components/venture-site/site-data";

type FlowIcon = "pcba" | "test" | "assembly" | "box" | "delivery";

type Step = { label: string; icon: FlowIcon; tone?: "blue" | "amber" | "amber-solid" };

const steps: Step[] = [
  { label: "PCBA", icon: "pcba", tone: "blue" },
  { label: "Testing", icon: "test" },
  { label: "Final assembly", icon: "assembly" },
  { label: "Box build", icon: "box", tone: "amber" },
  { label: "Delivery support", icon: "delivery", tone: "amber-solid" },
];

function FlowGlyph({ name }: { name: FlowIcon }) {
  switch (name) {
    case "pcba":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="6" width="12" height="12" rx="1.5" />
          <rect x="10" y="10" width="4" height="4" rx="0.5" />
          <path d="M9 1.8v3M15 1.8v3M9 19.2v3M15 19.2v3M1.8 9h3M1.8 15h3M19.2 9h3M19.2 15h3" />
        </svg>
      );
    case "test":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 11.1V12a9.5 9.5 0 1 1-5.6-8.7" />
          <path d="M21.5 4 12 13.5l-2.8-2.8" />
        </svg>
      );
    case "assembly":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 2.5 7 12 12l9.5-5L12 2z" />
          <path d="M2.5 12 12 17l9.5-5" />
          <path d="M2.5 17 12 22l9.5-5" />
        </svg>
      );
    case "box":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <path d="M3.3 7 12 12l8.7-5" />
          <path d="M12 22V12" />
        </svg>
      );
    case "delivery":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1.8 5h11.7v9.5H1.8z" />
          <path d="M13.5 8.5h3.7l3 3v3h-6.7z" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>
      );
  }
}

export function EMSBoxBuildBlock() {
  return (
    <section className="home-section home-section--dark" aria-labelledby="ems-box-build-title">
      <div className="home-section__inner">
        <SectionHeader
          label="Strategic capability"
          title="Beyond PCBA: EMS & Box Build Support"
          intro="For projects that go beyond board assembly, Venture can support a broader electronics manufacturing workflow involving PCBA, sourcing coordination, testing, final assembly, and box build-related project follow-through."
        />
        <div className="dark-panel">
          <div className="ems-flow" role="list" aria-label="EMS and box build workflow">
            {steps.map((step, i) => (
              <Fragment key={step.label}>
                <div
                  role="listitem"
                  className={`ems-flow__step${step.tone ? ` ems-flow__step--${step.tone}` : ""}`}
                >
                  <span className="ems-flow__node" aria-hidden="true">
                    <FlowGlyph name={step.icon} />
                  </span>
                  <span className="ems-flow__label">{step.label}</span>
                </div>
                {i < steps.length - 1 ? (
                  <span className="ems-flow__arrow" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </Fragment>
            ))}
          </div>

          <p className="dark-panel__note">
            EMS & Box Build can extend an assembled-board project into final assembly, packaging,
            testing discussion, and delivery support when the project scope requires it.
          </p>
          <div className="section-actions">
            <CTAButton href={routes.emsBoxBuild}>View EMS & Box Build</CTAButton>
            <CTAButton href={routes.requestQuote} variant="dark">
              Discuss an EMS or Box Build Project
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
