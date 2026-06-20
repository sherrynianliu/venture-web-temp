import Link from "next/link";
import { routes } from "@/components/venture-site/site-data";

export function CatalogBanner() {
  return (
    <section className="catalog" aria-labelledby="catalog-title">
      <div className="catalog__inner">
        <div className="catalog__text">
          <h2 id="catalog-title" className="catalog__title">
            Download Your <span className="catalog__free">FREE</span>
            <br />
            PCB &amp; Assembly Catalog
          </h2>
          <p className="catalog__desc">
            Get the PCB &amp; Assembly catalog online today — one reference covering Venture&apos;s
            PCBA, EMS, component sourcing, and testing capabilities.
          </p>
          <Link href={routes.resources} className="catalog__btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            Download Catalog
          </Link>
        </div>

        <div className="catalog__media" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/venture-catalog.webp" alt="" className="catalog__img" />
        </div>
      </div>
    </section>
  );
}
