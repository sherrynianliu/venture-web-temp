'use client';

import { useCallback, useEffect, useState } from 'react';
import usePaginate from '@/hooks/use-paginate';
import ProductCustomSelect from '../select/product-sort-select';
import { selectSortOrder } from '@/redux/selectors/product-sort-selector';
import { useAppSelector } from '@/hooks/redux-hooks';
import { sortProducts } from '@/utils/sorting';
import Pagination from '../ui/pagination';
import ShopItem from './shop-item';
import { IProductDT } from '@/types/product-d-t';
import { productData } from '@/data/product-data';

const ShopArea = () => {
  const [sortedProducts, setSortedProducts] = useState<IProductDT[]>([]);
  const sortOrder = useAppSelector(selectSortOrder); // Use the selector to get the sortOrder

  // Memoize the sortProducts function call
  const sortedData = useCallback(
    () => sortProducts(productData, sortOrder),
    [sortOrder]
  );

  // Custom Hook For Pagination
  const { currentItems, handlePageClick, pageCount } = usePaginate(
    sortedProducts,
    6
  );

  // Update sorted products whenever sortOrder or products change
  useEffect(() => {
    setSortedProducts(sortedData());
  }, [sortedData]);

  return (
    <div className="it-product-2-area it-product-inner-style-3 pt-130 pb-130">
      <div className="container">
        <div className="tp-product-top pb-80">
          <div className="row">
            <div className="col-12">
              <div className="it-product-top-wrap d-flex justify-content-between align-items-center">
                <div className="it-product-text">
                  <span>Showing all {sortedProducts.length} results</span>
                </div>
                <div className="it-product-filter-box">
                  <div className="it-product-filter p-relative text-md-end">
                    <ProductCustomSelect />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-35">
          {currentItems.map((product, i) => (
            <div
              key={i}
              className="col-lg-4 col-md-6 mb-35 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay={`${0.3 + 0.2 * i}s`}
            >
              <ShopItem product={product} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="it-pagination text-center mt-50">
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
export default ShopArea;
