import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.scss';
import StoreProvider from './store-provider';

// Site-wide typography: IBM Plex Sans (matches the Venture / Home 06 design)
const ibmPlexBody = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--it-ff-body',
});

const ibmPlexHeading = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--it-ff-heading',
});

export const metadata: Metadata = {
  title: 'Venture Electronics — Turnkey PCBA & EMS',
  description:
    'China-based PCBA and EMS manufacturing partner — turnkey PCB assembly, component sourcing, testing, and box build support.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        suppressHydrationWarning={true}
        className={`${ibmPlexBody.variable} ${ibmPlexHeading.variable}`}
      >
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
