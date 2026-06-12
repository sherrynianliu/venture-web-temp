import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export function CTAButton({ href, children, variant = "primary", className = "" }: CTAButtonProps) {
  return (
    <Link className={`cta-button cta-button--${variant} ${className}`.trim()} href={href}>
      {children}
    </Link>
  );
}
