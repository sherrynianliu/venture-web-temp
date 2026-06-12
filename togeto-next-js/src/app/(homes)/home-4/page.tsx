import { Metadata } from 'next';
import HomeFourMain from '@/views/home-4/home-4';

export const metadata: Metadata = {
  title: 'Togeto - Home Four Page',
};

const HomeFourPage = () => {
  return <HomeFourMain />;
};

export default HomeFourPage;
