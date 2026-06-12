import Image from "next/image";
import Link from "next/link";
import { routes } from "@/components/venture-site/site-data";

const questions = [
  {
    question: "What files are needed for a quote?",
    answer:
      "Gerber files, BOM, CPL, assembly drawing, quantity, testing requirements, and project timeline help Venture review the RFQ clearly.",
  },
  {
    question: "What is turnkey PCBA?",
    answer:
      "Turnkey PCBA can include BOM review, component sourcing coordination, PCB fabrication coordination, assembly, testing discussion, and delivery support.",
  },
  {
    question: "Can Venture source components?",
    answer:
      "Component sourcing can be discussed as part of turnkey PCBA or EMS planning, with customer approval for substitutions and alternates.",
  },
  {
    question: "Can testing be included before delivery?",
    answer:
      "Testing such as AOI, ICT, functional, or reliability checks can be discussed and planned as part of the PCBA or EMS scope.",
  },
  {
    question: "What is the difference between PCBA and EMS?",
    answer:
      "PCBA focuses on assembled circuit boards. EMS and box build can extend into broader final assembly, testing, packaging, and delivery support.",
  },
];

export function HomeFAQBlock() {
  return (
    <section className="home-faq" aria-labelledby="home-faq-title">
      <div className="home-faq__inner">
        <header className="home-faq__head">
          <p className="home-faq__eyebrow">Buyer questions</p>
          <h2 id="home-faq-title" className="home-faq__title">
            Answers to common <span className="accent">PCBA &amp; EMS</span> questions
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

            <Link href={routes.faq} className="home-faq__more">
              View all FAQs
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="home-faq__media">
            <Image
              src="/faq-smt-line.jpg"
              alt="Illustration of a PCB assembly / SMT production line"
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
