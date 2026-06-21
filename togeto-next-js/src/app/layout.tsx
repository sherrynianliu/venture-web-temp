import type { Metadata, Viewport } from 'next';
import type { CSSProperties, ReactNode } from 'react';

const ventureFontVariables = {
  '--it-ff-body':
    '"IBM Plex Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
  '--it-ff-heading':
    '"IBM Plex Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
} as CSSProperties;

export const metadata: Metadata = {
  title: 'Venture Electronics | PCB Assembly, PCBA & EMS Manufacturing Partner',
  description:
    'Venture Electronics is a China-based PCB Manufacturing, PCB Assembly and EMS manufacturing partner supporting PCBA, sourcing, testing, box build, and RFQ review.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="stylesheet" href="/venture-static/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/venture-static/vendor/animate.min.css" />
        <link rel="stylesheet" href="/venture-static/vendor/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/venture-static/vendor/modal-video.min.css" />
        <link rel="stylesheet" href="/assets/css/theme-main.css" />
        <link rel="stylesheet" href="/venture-static/venture-exact.css" />
        <link rel="stylesheet" href="/venture-static/venture-overrides.css" />
      </head>
      <body suppressHydrationWarning={true} style={ventureFontVariables}>
        {children}
      </body>
    </html>
  );
}
