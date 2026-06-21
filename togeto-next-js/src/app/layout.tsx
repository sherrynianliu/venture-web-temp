import type { Metadata, Viewport } from 'next';
import type { CSSProperties, ReactNode } from 'react';

const siteBaseUrl = new URL('https://www.venture-mfg.com');
const siteTitle = 'Venture Electronics | PCB Assembly, PCBA & EMS Manufacturing Partner';
const siteDescription =
  'Venture Electronics is a China-based PCB Manufacturing, PCB Assembly and EMS manufacturing partner supporting PCBA, sourcing, testing, box build, and RFQ review.';

const ventureFontVariables = {
  '--it-ff-body':
    '"IBM Plex Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
  '--it-ff-heading':
    '"IBM Plex Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
} as CSSProperties;

export const metadata: Metadata = {
  metadataBase: siteBaseUrl,
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: '/',
    siteName: 'Venture Electronics',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const ventureStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.venture-mfg.com/#organization',
      name: 'Venture Electronics',
      legalName: 'Venture Electronics Technology Ltd',
      url: 'https://www.venture-mfg.com/',
      email: 'info@venture-mfg.com',
      telephone: '+86-755-85296692',
      address: {
        '@type': 'PostalAddress',
        streetAddress: "Building 36, Chentian Industrial Area, Xixiang, Bao'an District",
        addressLocality: 'Shenzhen',
        addressRegion: 'Guangdong',
        addressCountry: 'CN',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.venture-mfg.com/#website',
      name: 'Venture Electronics',
      url: 'https://www.venture-mfg.com/',
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ventureStructuredData).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body suppressHydrationWarning={true} style={ventureFontVariables}>
        {children}
      </body>
    </html>
  );
}
