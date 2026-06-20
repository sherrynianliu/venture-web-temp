import type { Metadata } from 'next';
import type { CSSProperties, ReactNode } from 'react';
import './globals.scss';
import './(homes)/home-6/venture-exact.css';
import './(homes)/home-6/venture-overrides.css';
import StoreProvider from './store-provider';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} style={ventureFontVariables}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
