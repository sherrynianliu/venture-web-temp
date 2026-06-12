'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { selectSortOrder } from '@/redux/selectors/product-sort-selector';
import {
  resetSortOrder,
  setSortOrder,
} from '@/redux/slices/product-sort-slice';

// Type for Sort Options
type SortOrder =
  | 'default'
  | 'low-to-high'
  | 'high-to-low'
  | 'new-added'
  | 'on-sale';

const SORT_OPTIONS: { label: string; value: SortOrder }[] = [
  { label: 'Default Sorting', value: 'default' },
  { label: 'Low to High', value: 'low-to-high' },
  { label: 'High to Low', value: 'high-to-low' },
  { label: 'New Added', value: 'new-added' },
  { label: 'On Sale', value: 'on-sale' },
];

const CustomSelect = () => {
  const dispatch = useAppDispatch();
  const sortOrder = useAppSelector(selectSortOrder);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Reset sort order to default when this component mounts
  useEffect(() => {
    dispatch(resetSortOrder());
  }, [dispatch]);

  // Memoized sort options
  const sortOptions = useMemo(() => SORT_OPTIONS, []);

  const handleSelect = (option: SortOrder) => {
    dispatch(setSortOrder(option));
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="custom-select-wrapper" ref={dropdownRef}>
      <button
        className="custom-select-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {sortOptions.find((opt) => opt.value === sortOrder)?.label ||
          'Default Sorting'}
        <span className="custom-arrow">▼</span>
      </button>

      {isOpen && (
        <ul className="custom-dropdown-menu">
          {sortOptions.map((option) => (
            <li
              key={option.value}
              className={`custom-dropdown-item ${
                sortOrder === option.value ? 'custom-selected' : ''
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
