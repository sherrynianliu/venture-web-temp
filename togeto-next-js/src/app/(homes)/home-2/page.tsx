import { Metadata } from 'next';
import HomeTwoMain from '@/views/home-2/home-2';

export const metadata: Metadata = {
  title: 'Togeto - Home Two Page',
};

const HomeTwoPage = () => {
  return <HomeTwoMain />;
};
export default HomeTwoPage;
