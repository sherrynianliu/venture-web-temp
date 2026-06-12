import { Metadata } from 'next';
import CheckoutMain from '@/views/checkout/checkout';

export const metadata: Metadata = {
  title: 'Togeto - Checkout Page',
};

const CheckoutPage = () => {
  return <CheckoutMain />;
};

export default CheckoutPage;
