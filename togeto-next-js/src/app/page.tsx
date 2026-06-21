import { Metadata } from 'next';
import HomeSixMain from '@/views/home-6/home-6';

const title = 'Venture Electronics | PCB Assembly, PCBA & EMS Manufacturing Partner';
const description =
  'China-based PCB Manufacturing, PCB Assembly and EMS manufacturing partner with turnkey PCBA, sourcing, testing, and box build support.';
const homeCanonical = 'https://www.venture-mfg.com/';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: homeCanonical,
  },
  openGraph: {
    title,
    description,
    url: homeCanonical,
    siteName: 'Venture Electronics',
    type: 'website',
  },
};

export default function Home() {
  return <HomeSixMain />;
}
