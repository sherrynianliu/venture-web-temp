import { Metadata } from 'next';
import HomeSixMain from '@/views/home-6/home-6';
import { homeFaqs } from '@/components/venture-site/site-data';
import { buildHomeStructuredData } from '@/components/venture-site/schema/structured-data';
import { StructuredData } from '@/components/venture-site/schema/StructuredData';

const title = 'Venture Electronics | PCB Assembly, PCBA & EMS Manufacturing Partner';
const description =
  'China-based PCB Manufacturing, PCB Assembly and EMS manufacturing partner with turnkey PCBA, sourcing, testing, and box build support.';
const homeCanonical = 'https://www.venture-mfg.com/';
const homeStructuredData = buildHomeStructuredData({
  title,
  description,
  faqs: homeFaqs,
});

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
  return (
    <>
      <StructuredData data={homeStructuredData} />
      <HomeSixMain />
    </>
  );
}
