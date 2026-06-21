import { Metadata } from 'next';
import HomeSixMain from '@/views/home-6/home-6';
import { routes } from '@/components/venture-site/site-data';

const title = 'Venture Electronics | PCB Assembly, PCBA & EMS Manufacturing Partner';
const description =
  'China-based PCB Manufacturing, PCB Assembly and EMS manufacturing partner with turnkey PCBA, sourcing, testing, and box build support.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: routes.home,
  },
  openGraph: {
    title,
    description,
    url: routes.home,
    siteName: 'Venture Electronics',
    type: 'website',
  },
};

export default function Home() {
  return <HomeSixMain />;
}
