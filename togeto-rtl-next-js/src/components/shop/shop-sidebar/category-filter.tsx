'use client';

import { useCallback, useState } from 'react';
import { useAppDispatch } from '@/hooks/redux-hooks';
import {
  resetCategories,
  setSelectedCategories,
} from '@/redux/slices/product-filter-slice';
import { IProductDT } from '@/types/product-d-t';
import { productData } from '@/data/product-data';

// Props Type
interface CategoryFilterProps {
  displayProducts: IProductDT[];
}

// All categories data
const categoryData = [
  'Travel Bag',
  'Hand Bag',
  'Surprise Box',
  'Packaging Box',
  'Mystery Box',
];

const CategoryFilter = ({ displayProducts }: CategoryFilterProps) => {
  const dispatch = useAppDispatch();

  const [activeCategory, setActiveCategory] =
    useState<string>('all-categories');

  // Dispatch the action to display products by category
  const handleCategoryChange = useCallback(
    (category: string) => {
      dispatch(setSelectedCategories(category));
      setActiveCategory(category);
    },
    [dispatch]
  );

  // Dispatch the action to display all categories products
  const handleAllCategories = useCallback(() => {
    dispatch(resetCategories());
    setActiveCategory('all-categories');
  }, [dispatch]);

  return (
    <div className="it-shop-widget mb-50">
      <h3 className="it-shop-widget-title">Product categories</h3>

      <div className="it-shop-widget-content">
        <div className="it-shop-widget-categories">
          <ul>
            <li>
              <button
                className={
                  activeCategory === 'all-categories'
                    ? 'category-btn active'
                    : 'category-btn'
                }
                onClick={() => handleAllCategories()}
              >
                All categories <span>{productData.length}</span>
              </button>
            </li>
            {categoryData.map((category, index) => (
              <li key={index}>
                <button
                  className={
                    activeCategory === category
                      ? 'category-btn active'
                      : 'category-btn'
                  }
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}{' '}
                  <span>
                    {
                      displayProducts.filter(
                        (product) => product.categories === category
                      ).length
                    }
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CategoryFilter;
