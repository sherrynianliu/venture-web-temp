import { Metadata } from 'next';
import HomeFiveMain from '@/views/home-5/home-5';

export const metadata: Metadata = {
  title: 'Togeto - Home Five Page',
};

const HomeFivePage = () => {
  return <HomeFiveMain />;
};

export default HomeFivePage;
