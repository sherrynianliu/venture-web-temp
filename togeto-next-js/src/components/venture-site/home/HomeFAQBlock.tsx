import Image from "next/image";
import Link from "next/link";
import { routes } from "@/components/venture-site/site-data";

const questions = [
  {
    question: "What files are needed for a PCB Assembly quote?",
    answer:
      "Start with Gerber or ODB++ files, a BOM, CPL or pick-and-place data, an assembly drawing, the required quantity and any testing requirements. Packaging, target schedule and special-process notes help define the quotation scope.",
  },
  {
    question: "What is the difference between PCB Assembly, PCBA and Turnkey PCBA?",
    answer:
      "PCB Assembly is the buyer-readable service name, while PCBA is the common abbreviation for the assembled circuit board. Turnkey PCBA describes a broader delivery model that may coordinate PCB fabrication support, BOM review, component sourcing, assembly and project-specific testing.",
  },
  {
    question: "Can Venture Electronics help source components?",
    answer:
      "Venture can review the BOM, check availability and lifecycle risks, and discuss sourcing options. Any alternative component must be reviewed against the design requirements and approved by the customer before use.",
  },
  {
    question: "Can testing be included before delivery?",
    answer:
      "Inspection or testing can be discussed according to the product, fixture availability, firmware, test procedure and buyer acceptance criteria. Not every project uses the same combination of AOI, X-ray, ICT, FCT or functional testing.",
  },
  {
    question: "When does a project need EMS or Box Build support?",
    answer:
      "EMS or Box Build becomes relevant when the project extends beyond an assembled board into an enclosure, cable or wire harness, mechanical parts, system-level checks, labeling, packaging or delivery preparation.",
  },
];

export function HomeFAQBlock() {
  return (
    <section className="home-faq" aria-labelledby="home-faq-title">
      <div className="home-faq__inner">
        <header className="home-faq__head">
          <p className="home-faq__eyebrow">Buyer questions</p>
          <h2 id="home-faq-title" className="home-faq__title">
            Answers to common <span className="accent">PCBA &amp; EMS</span> planning questions
          </h2>
        </header>

        <div className="home-faq__body">
          <div className="home-faq__list">
            {questions.map((item, i) => (
              <details className="faq-item" key={item.question} open={i === 0}>
                <summary className="faq-item__q">
                  <span>{item.question}</span>
                  <span className="faq-item__icon" aria-hidden="true" />
                </summary>
                <div className="faq-item__a">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}

            <Link href={routes.resources} className="home-faq__more">
              View all buyer resources
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="home-faq__media">
            <Image
              src="/assets/img/venture-old-site/pcba-testing/venture-electronics-pcba-testing-manual-visual-inspection-of-pcb.png"
              alt="Manual PCB inspection used for buyer resource context"
              className="home-faq__img"
              width={1200}
              height={675}
              sizes="(max-width: 860px) calc(100vw - 48px), 46vw"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
