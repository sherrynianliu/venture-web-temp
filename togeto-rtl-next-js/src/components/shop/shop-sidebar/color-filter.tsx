'use client';

import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { selectSelectedColors } from '@/redux/selectors/product-filter-selector';
import {
  resetColors,
  setSelectedColor,
} from '@/redux/slices/product-filter-slice';
import { IProductDT } from '@/types/product-d-t';
import { productData } from '@/data/product-data';

interface ColorFilterProps {
  displayProducts: IProductDT[];
}

// All Color
const colors = ['Red', 'Dark Blue', 'Orange', 'Purple', 'Yellow', 'Green'];

const ColorFilter = ({ displayProducts }: ColorFilterProps) => {
  const dispatch = useAppDispatch();

  const selectedColors = useAppSelector(selectSelectedColors); // Selector to get data

  // Dispatch the action to display products by color
  const handleColorChange = useCallback(
    (color: string) => {
      dispatch(setSelectedColor(color));
    },
    [dispatch]
  );

  // Dispatch the action to display all colors products
  const handleAllColors = useCallback(() => {
    dispatch(resetColors());
  }, [dispatch]);

  return (
    <div className="it-shop-widget mb-50">
      <h3 className="it-shop-widget-title">Filter by Color</h3>
      <div className="it-shop-widget-content">
        <div className="it-shop-widget-checkbox-circle-list">
          <ul>
            <li>
              <div className="it-shop-widget-checkbox-circle">
                <input
                  type="checkbox"
                  id="all-colors"
                  checked={selectedColors.length === 0}
                  onChange={() => handleAllColors()}
                />
                <label htmlFor="all-colors">All Colors</label>
                <span className="it-shop-widget-checkbox-circle-self all-colors"></span>
              </div>
              <span className="it-shop-widget-checkbox-circle-number">
                {productData.length}
              </span>
            </li>
            {colors.map((color, i) => (
              <li key={i}>
                <div className="it-shop-widget-checkbox-circle">
                  <input
                    type="checkbox"
                    id={color}
                    checked={selectedColors.includes(color)}
                    onChange={() => handleColorChange(color)}
                  />
                  <label htmlFor={color}>{color}</label>
                  <span
                    className={`it-shop-widget-checkbox-circle-self ${color
                      .toLowerCase()
                      .replace(' ', '_')}`}
                  ></span>
                </div>
                <span className="it-shop-widget-checkbox-circle-number">
                  {
                    displayProducts.filter((product) => product.color === color)
                      .length
                  }
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ColorFilter;
