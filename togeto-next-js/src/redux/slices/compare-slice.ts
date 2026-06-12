import { IProductDT } from '@/types/product-d-t';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

interface CompareState {
  items: IProductDT[];
}

const initialState: CompareState = {
  items:
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('compareItems') || '[]')
      : [],
};

const compareSlice = createSlice({
  name: 'compare',
  initialState,
  reducers: {
    // Reducer to add or remove item to/from compare
    toggleCompareItem: (state, action: PayloadAction<IProductDT>) => {
      // Check if the product with the same id already exists in the compare
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (itemExists) {
        // Remove the product from the compare
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        toast.info(`${action.payload.title} removed from Compare!`, {
          position: 'top-center',
        });
      } else {
        // Add the new product to the compare
        state.items.push(action.payload);
        toast.success(`${action.payload.title} added to Compare!`, {
          position: 'top-center',
        });
      }

      if (typeof window !== 'undefined') {
        localStorage.setItem('compareItems', JSON.stringify(state.items)); // Update local storage
      }
    },

    //Reducer to clear compare
    clearCompare: (state) => {
      state.items = [];
      localStorage.removeItem('compareItems'); // Save updated state to localStorage
    },
  },
});

export const { toggleCompareItem, clearCompare } = compareSlice.actions;
export default compareSlice.reducer;
