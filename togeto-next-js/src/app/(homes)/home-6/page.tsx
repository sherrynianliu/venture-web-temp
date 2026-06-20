import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Venture Electronics — Turnkey PCBA & EMS',
  robots: { index: false, follow: true },
};

const HomeSixPage = () => redirect('/');

export default HomeSixPage;
