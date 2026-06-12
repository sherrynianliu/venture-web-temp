'use client';

import usePaginate from '@/hooks/use-paginate';
import Pagination from '@/components/ui/pagination';
import ShopItem from '../shop-item';
import { IProductDT } from '@/types/product-d-t';

interface ProductGridProps {
  products: IProductDT[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  // Custom Hook For Pagination
  const { currentItems, handlePageClick, pageCount } = usePaginate(products, 6);
  return (
    <div className="col-xl-8 col-lg-8">
      <div className="it-product-inner-right">
        <div className="row gx-35">
          {currentItems.map((product) => (
            <div key={product.id} className="col-lg-6 col-md-6 mb-35">
              <ShopItem product={product} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="it-pagination mt-50">
              <Pagination
                handlePageClick={handlePageClick}
                pageCount={pageCount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductGrid;
