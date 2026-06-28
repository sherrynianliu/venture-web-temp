import Image from "next/image";
import Link from "next/link";
import { homeFaqs, routes } from "@/components/venture-site/site-data";

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
            {homeFaqs.map((item, i) => (
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
              src="/faq-smt-line.jpg"
              alt="SMT production line equipment for buyer resource context"
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
