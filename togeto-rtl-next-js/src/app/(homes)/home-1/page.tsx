import { Metadata } from 'next';
import HomeMain from '@/views/home-1/home-1';

export const metadata: Metadata = {
  title: 'Saasty - Home Main',
};

const Home = () => {
  return <HomeMain />;
};
export default Home;
