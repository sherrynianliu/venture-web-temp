"use client";

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { CTAButton } from "@/components/venture-site/site/CTAButton";
import { routes } from "@/components/venture-site/site-data";

const ROTATE_MS = 7000;

const slides = [
  {
    id: "pcba",
    bg: "/hero-pcba-smt.jpg",
    bgClass: "hero__bg--pcba",
    accent: "Turnkey PCB Assembly / PCBA and EMS Support for Electronics Projects",
    keywords: [
      "China-based manufacturing partner",
      "Turnkey-first PCB Assembly / PCBA",
      "BOM review",
      "Component sourcing",
      "PCB fabrication",
      "Assembly",
      "Testing",
    ],
    primary: { label: "Request a Quote", href: routes.requestQuote },
    secondary: { label: "Explore Turnkey PCBA", href: routes.pcba },
  },
  {
    id: "ems",
    bg: "/hero-ems-factory.jpg",
    bgClass: "hero__bg--ems",
    accent: "EMS & Box Build, From Assembled Boards to Finished Products",
    keywords: [
      "EMS & Box Build",
      "Final assembly",
      "Cable & harness assembly",
      "Functional testing",
      "Packaging",
      "Delivery support",
    ],
    primary: { label: "Request a Quote", href: routes.requestQuote },
    secondary: { label: "Explore EMS & Box Build", href: routes.emsBoxBuild },
  },
];

export function HomeHero() {
  const [active, setActive] = useState(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (reducedMotion.current) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, [active]);

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % slides.length);
  }, []);

  const slide = slides[active];

  return (
    <section className="hero" aria-labelledby="home-hero-title">
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`hero__bg ${s.bgClass} ${i === active ? "hero__bg--active" : ""}`}
          aria-hidden="true"
        />
      ))}
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />

      <div className="hero__inner">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-arrow" aria-hidden="true">
            →
          </span>
          Precision. Quality. Reliability.
        </p>

        <h1 id="home-hero-title">
          Venture Electronics <br />
          <span key={slide.id} className="hero__accent">
            {slide.accent}
          </span>
        </h1>

        <div className="hero__rule" aria-hidden="true" />

        <p key={`lead-${slide.id}`} className="hero__lead hero__lead--keywords">
          {slide.keywords.map((kw, i) => (
            <Fragment key={kw}>
              {i > 0 ? (
                <span className="hero__lead-sep" aria-hidden="true">
                  |
                </span>
              ) : null}
              <span className="hero__lead-kw">{kw}</span>
            </Fragment>
          ))}
        </p>

        <div key={`actions-${slide.id}`} className="hero__actions">
          <CTAButton href={slide.secondary.href}>{slide.secondary.label}</CTAButton>
        </div>
      </div>

      <button
        type="button"
        className="hero__arrow hero__arrow--prev"
        aria-label="Previous slide"
        onClick={prev}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M14.5 5.5 8 12l6.5 6.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        type="button"
        className="hero__arrow hero__arrow--next"
        aria-label="Next slide"
        onClick={next}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="m9.5 5.5 6.5 6.5-6.5 6.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <svg
        className="hero__wave"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="waveStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.0" />
            <stop offset="50%" stopColor="#4f8bff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ab6f04" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <path
          d="M0,72 C220,140 440,140 720,80 C1000,20 1220,20 1440,72 L1440,140 L0,140 Z"
          fill="#f4f7fa"
        />
        <path
          d="M0,68 C220,136 440,136 720,76 C1000,16 1220,16 1440,68"
          fill="none"
          stroke="url(#waveStroke)"
          strokeWidth="2"
        />
      </svg>
    </section>
  );
}
