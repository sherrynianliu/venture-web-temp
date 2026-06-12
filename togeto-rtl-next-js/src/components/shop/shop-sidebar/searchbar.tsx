'use client';

import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { selectSearchQuery } from '@/redux/selectors/product-filter-selector';
import { setSearchQuery } from '@/redux/slices/product-filter-slice';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector(selectSearchQuery); // Selector to get search query data

  // Dispatch the action to display products by search input query
  const handleSearchQueryChange = useCallback(
    (query: string) => {
      dispatch(setSearchQuery(query));
    },
    [dispatch]
  );
  return (
    <div className="it-blog-sidebar-search p-relative mb-55">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => handleSearchQueryChange(e.target.value)}
      />
      <button>
        <i className="fal fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
