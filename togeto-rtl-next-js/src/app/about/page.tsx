import { Metadata } from 'next';
import AboutMain from '@/views/about/about';

export const metadata: Metadata = {
  title: 'Togeto - About Us Page',
};

const AboutPage = () => {
  return <AboutMain />;
};
export default AboutPage;
