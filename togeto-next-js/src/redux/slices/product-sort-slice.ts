import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the slice's state
interface ProductState {
  sortOrder: string;
}

// Define the initial state using the ProductState interface
const initialState: ProductState = {
  sortOrder: 'default',
};

const productSortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    // Reducer to set sort order based on selected option
    setSortOrder(state, action: PayloadAction<string>) {
      state.sortOrder = action.payload;
    },
    // Reducer to reset sort order
    resetSortOrder(state) {
      state.sortOrder = 'default';
    },
  },
});

// Export actions
export const { setSortOrder, resetSortOrder } = productSortSlice.actions;

// Export reducer
export default productSortSlice.reducer;
