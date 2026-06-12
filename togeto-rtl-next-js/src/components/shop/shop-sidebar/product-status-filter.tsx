'use client';

import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import {
  selectInStock,
  selectOnSale,
} from '@/redux/selectors/product-filter-selector';
import { setInStock, setOnSale } from '@/redux/slices/product-filter-slice';

const ProductStatusFilter = () => {
  const dispatch = useAppDispatch();

  // Selectors to get the status of product
  const onSale = useAppSelector(selectOnSale);
  const inStock = useAppSelector(selectInStock);

  // Dispatch the action to display on sale products
  const handleOnSaleToggle = useCallback(() => {
    dispatch(setOnSale(!onSale));
    dispatch(setInStock(false));
  }, [dispatch, onSale]);

  // Dispatch the action to display in stock products
  const handleInStockToggle = useCallback(() => {
    dispatch(setInStock(!inStock));
    dispatch(setOnSale(false));
  }, [dispatch, inStock]);

  return (
    <div className="it-shop-widget mb-50">
      <h3 className="it-shop-widget-title">Product Status</h3>
      <ul>
        <li className="list-unstyled">
          <input
            type="checkbox"
            checked={onSale}
            onChange={handleOnSaleToggle}
          />
          <label>On Sale</label>
        </li>
        <li className="list-unstyled">
          <input
            type="checkbox"
            checked={inStock}
            onChange={handleInStockToggle}
          />
          <label>In Stock</label>
        </li>
      </ul>
    </div>
  );
};

export default ProductStatusFilter;
