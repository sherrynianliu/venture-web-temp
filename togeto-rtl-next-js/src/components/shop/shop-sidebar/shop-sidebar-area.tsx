'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import {
  selectInStock,
  selectOnSale,
  selectPriceRange,
  selectSearchQuery,
  selectSelectedCategories,
  selectSelectedColors,
} from '@/redux/selectors/product-filter-selector';
import { resetFilters } from '@/redux/slices/product-filter-slice';
import { filterProducts } from '@/utils/filtering';
import { IProductDT } from '@/types/product-d-t';
import SearchBar from '@/components/shop/shop-sidebar/searchbar';
import ItemNotFound from './item-not-found';
import ProductGrid from './product-grid';
import CategoryFilter from './category-filter';
import PriceFilter from './price-filter';
import ProductStatusFilter from './product-status-filter';
import ColorFilter from './color-filter';
import BrandFilter from './brand-filter';
import PopularTag from './popular-tag';
import { productData } from '@/data/product-data';

const ShopSidebarArea = () => {
  const [displayProducts, setDisplayProducts] = useState<IProductDT[]>([]);
  const dispatch = useAppDispatch();

  // All selector for filtering products
  const priceRange = useAppSelector(selectPriceRange);
  const selectedCategories = useAppSelector(selectSelectedCategories);
  const selectedColors = useAppSelector(selectSelectedColors);
  const onSale = useAppSelector(selectOnSale);
  const inStock = useAppSelector(selectInStock);
  const searchQuery = useAppSelector(selectSearchQuery);

  // Filtering and sorting products whenever the sort order or filter change
  useEffect(() => {
    const filteredProducts = filterProducts(
      productData,
      priceRange,
      selectedCategories,
      selectedColors,
      onSale,
      inStock,
      searchQuery
    );
    setDisplayProducts(filteredProducts);
  }, [
    priceRange,
    selectedCategories,
    selectedColors,
    onSale,
    inStock,
    searchQuery,
  ]);

  // Reset filters on component mount
  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  return (
    <div className="it-product-2-area it-product-inner-style-3 pt-130 pb-130">
      <div className="container">
        <div className="row">
          {/* <!-- shop sidebar area end --> */}
          <div className="col-xl-4 col-lg-4">
            <div className="it-shop-sidebar">
              {/* Search Filter */}
              <SearchBar />

              {/* Product Category Filter */}
              <CategoryFilter displayProducts={displayProducts} />

              {/* Pricing Filter */}
              <PriceFilter />

              {/* Product Status filter */}
              <ProductStatusFilter />

              {/* Color Filtering */}
              <ColorFilter displayProducts={displayProducts} />

              {/* Brand Filter */}
              <BrandFilter />

              {/* Popular Tags */}
              <PopularTag />
            </div>
          </div>
          {/* <!-- shop sidebar area end --> */}

          {displayProducts.length === 0 ? (
            <ItemNotFound /> // Product Not Found Message
          ) : (
            <ProductGrid products={displayProducts} /> //Filtered Products
          )}
        </div>
      </div>
    </div>
  );
};
export default ShopSidebarArea;
