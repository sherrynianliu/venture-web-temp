import { Metadata } from 'next';
import FaqMain from '@/views/faq/faq';

export const metadata: Metadata = {
  title: 'Togeto - Faq Page',
};

const FaqPage = () => {
  return <FaqMain />;
};
export default FaqPage;
