import { Metadata } from 'next';
import WishlistMain from '@/views/wishlist/wishlist';

export const metadata: Metadata = {
  title: 'Togeto - Wishlist Page',
};

const WishlistPage = () => {
  return <WishlistMain />;
};
export default WishlistPage;
