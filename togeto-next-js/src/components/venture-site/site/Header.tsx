"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, routes, type NavItem } from "@/components/venture-site/site-data";
import { CTAButton } from "./CTAButton";

function NavigationChildren({ items, nested = false }: { items: NavItem[]; nested?: boolean }) {
  return (
    <ul className={nested ? "nav-submenu" : "nav-menu"}>
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
          {item.children ? <NavigationChildren items={item.children} nested /> : null}
        </li>
      ))}
    </ul>
  );
}

type HeaderProps = {
  variant?: "glass" | "solid";
};

export function Header({ variant = "glass" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const solid = variant === "solid" || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${solid ? " site-header--scrolled" : " site-header--glass"}`}>
      <div className="site-header__inner">
        <Link className="brand-mark" href={routes.home} aria-label="Venture Electronics home">
          {/* The homepage opens in glass mode over the hero; inner pages use
              solid mode from first paint so the logo and navigation stay readable. */}
          <Image
            className="brand-mark__logo"
            src={solid ? "/venture-logo-color.png" : "/venture-logo.png"}
            alt="Venture Electronics — PCBA · EMS · Box Build"
            width={233}
            height={66}
            priority
          />
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const triggerContent = (
                <>
                  {item.label}
                  {hasChildren ? (
                    <span className="nav-caret" aria-hidden="true">
                      +
                    </span>
                  ) : null}
                </>
              );

              return (
                <li className="nav-item" key={item.href}>
                  {item.requiresSelection ? (
                    <button className="nav-trigger" type="button" aria-haspopup="true">
                      {triggerContent}
                    </button>
                  ) : (
                    <Link
                      className={hasChildren ? "nav-trigger" : "nav-link"}
                      href={item.href}
                      aria-haspopup={hasChildren ? "true" : undefined}
                    >
                      {triggerContent}
                    </Link>
                  )}
                  {item.children ? <NavigationChildren items={item.children} /> : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <CTAButton className="header-cta" href={routes.requestQuote}>
          <span className="header-cta__dot" aria-hidden="true" />
          Request a Quote
        </CTAButton>
      </div>
    </header>
  );
}
