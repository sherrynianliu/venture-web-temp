'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { resetFilters } from '@/redux/slices/product-filter-slice';

const ItemNotFound = () => {
  const dispatch = useAppDispatch();

  // Dispatch the action to reset all filters
  const handleResetFilters = useCallback(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  return (
    <div className="col-xl-8 col-lg-8">
      <div className="it-product-inner-right">
        <div className="it-error-content text-center pt-120 pb-100">
          <h5 className="it-error-title">
            Sorry! Could not find the product you were looking For!!!
          </h5>
          <p className="mb-25">
            Please check if you have misspelt something or try searching with
            other words.
          </p>
          <Link
            className="it-btn-theme mr-30"
            href="#"
            onClick={handleResetFilters}
          >
            <button className="it-btn-orange">Continue Shopping</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ItemNotFound;
