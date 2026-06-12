import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  priceRange: [number, number];
  selectedCategories: string[];
  selectedColors: string[];
  onSale: boolean;
  inStock: boolean;
  searchQuery: string;
}

const initialState: FilterState = {
  priceRange: [10, 200],
  selectedCategories: [],
  selectedColors: [],
  onSale: false,
  inStock: false,
  searchQuery: '',
};

const productFilterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // Reducer to set the price range for filtering products
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },

    // Reducer to set selected categories for filtering products
    setSelectedCategories(state, action) {
      state.selectedCategories = action.payload;
    },

    // Reducer to set selected colors for filtering products
    setSelectedColor(state, action) {
      state.selectedColors = action.payload;
    },
    // Reducer to toggle onSale filter
    setOnSale: (state, action: PayloadAction<boolean>) => {
      state.onSale = action.payload;
    },
    // Reducer to in stock filter
    setInStock: (state, action: PayloadAction<boolean>) => {
      state.inStock = action.payload;
    },
    // Reducer to set searching filter
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },

    // Reducer to reset categories filter
    resetCategories(state) {
      state.selectedCategories = [];
    },
    // Reducer to reset price range
    resetPriceRange(state) {
      state.priceRange = [10, 200];
    },
    // Reducer to reset color filter
    resetColors(state) {
      state.selectedColors = [];
    },

    // Resets all filters to initial state
    resetFilters: () => initialState,
  },
});

export const {
  setPriceRange,
  setSelectedCategories,
  setSelectedColor,
  setOnSale,
  setInStock,
  setSearchQuery,
  resetCategories,
  resetPriceRange,
  resetColors,
  resetFilters,
} = productFilterSlice.actions;

export default productFilterSlice.reducer;
