import { Metadata } from 'next';
import './venture-exact.css';
import './venture-overrides.css';
import HomeSixMain from '@/views/home-6/home-6';

export const metadata: Metadata = {
  title: 'Venture Electronics — Turnkey PCBA & EMS',
};

const HomeSixPage = () => {
  return <HomeSixMain />;
};

export default HomeSixPage;
