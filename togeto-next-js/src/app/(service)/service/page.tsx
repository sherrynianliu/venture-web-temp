import { Metadata } from 'next';
import ServiceMain from '@/views/service/service';

export const metadata: Metadata = {
  title: 'Togeto - Service Page',
};

const ServicePage = () => {
  return <ServiceMain />;
};
export default ServicePage;
