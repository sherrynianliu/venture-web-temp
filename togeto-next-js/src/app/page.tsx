import { Metadata } from 'next';
import HomeSixMain from '@/views/home-6/home-6';

export const metadata: Metadata = {
  title: 'Venture Electronics | PCB Assembly, PCBA & EMS Manufacturing Partner',
  description:
    'China-based PCB Manufacturing, PCB Assembly and EMS manufacturing partner with turnkey PCBA, sourcing, testing, and box build support.',
};

export default function Home() {
  return <HomeSixMain />;
}
