import { Metadata } from 'next';
import ShopDetailsMain from '@/views/shop-details/shop-details';
import { productData } from '@/data/product-data';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const shop = productData.find((shop) => String(shop.id) === params.id);
  return {
    title: shop ? `Togeto - ${shop.title}` : 'Togeto - Service Not Found',
  };
}

export async function generateStaticParams() {
  return productData.map((shop) => ({
    id: String(shop.id),
  }));
}

export default function ShopDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const shop = productData.find((shop) => String(shop.id) === params.id);
  return shop ? (
    <ShopDetailsMain product={shop} />
  ) : (
    <div className="text-center pt-100">
      Product not found with ID: {params.id}
    </div>
  );
}
