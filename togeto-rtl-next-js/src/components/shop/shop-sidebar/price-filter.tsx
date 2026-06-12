'use client';

import { useCallback } from 'react';
import Slider from 'rc-slider';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { selectPriceRange } from '@/redux/selectors/product-filter-selector';
import {
  resetPriceRange,
  setPriceRange,
} from '@/redux/slices/product-filter-slice';
import 'rc-slider/assets/index.css';

const PriceFilter = () => {
  const dispatch = useAppDispatch();

  const priceRange = useAppSelector(selectPriceRange); // selector for filtering products

  // Dispatch the action to display products by price range
  const handleRangeChange = useCallback(
    (value: number | number[]) => {
      if (Array.isArray(value) && value.length === 2) {
        dispatch(setPriceRange([value[0], value[1]] as [number, number]));
      }
    },
    [dispatch]
  );

  // Reset price range slider
  const resetRange = useCallback(() => {
    dispatch(resetPriceRange());
  }, [dispatch]);

  return (
    <div className="it-shop-widget mb-55">
      <h3 className="it-shop-widget-title no-border">Price Filter</h3>
      <div className="it-shop-widget-content">
        <div className="it-shop-widget-filter">
          <div id="slider-range" className="mb-10">
            <Slider
              range
              min={0}
              max={300}
              value={priceRange}
              onChange={handleRangeChange}
              styles={{
                track: {
                  backgroundColor: '#ef5d3c',
                },
                handle: {
                  borderColor: '#ef5d3c',
                },
              }}
            />
          </div>
          <div className="it-shop-widget-filter-info d-flex align-items-center justify-content-between">
            <span>
              ${priceRange[0]} - ${priceRange[1]}
            </span>
            <button
              className="it-shop-widget-filter-btn"
              type="button"
              onClick={() => resetRange()}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
