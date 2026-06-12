import { RootState } from '../rootReducer';

// Selector to get the selected price range for filtering products
export const selectPriceRange = (state: RootState) => state.filters.priceRange;

// Selector to get the selected categories for filtering products
export const selectSelectedCategories = (state: RootState) =>
  state.filters.selectedCategories;

// Selector to get the selected color for filtering products
export const selectSelectedColors = (state: RootState) =>
  state.filters.selectedColors;

// Selector to determine if the 'On Sale' filter is active
export const selectOnSale = (state: RootState) => state.filters.onSale;

// Selector to determine if the 'In Stock' filter is active
export const selectInStock = (state: RootState) => state.filters.inStock;

// Selector to get selected product
export const selectSearchQuery = (state: RootState) =>
  state.filters.searchQuery;
