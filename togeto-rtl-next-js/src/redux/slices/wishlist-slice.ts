import { IProductDT } from '@/types/product-d-t';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

interface WishlistState {
  items: IProductDT[];
}

const initialState: WishlistState = {
  items:
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('wishlistItems') || '[]')
      : [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    // Reducer to add or remove item to/from Wishlist
    toggleWishlistItem: (state, action: PayloadAction<IProductDT>) => {
      // Check if the product with the same id already exists in the wishlist
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (itemExists) {
        // Remove the product from the wishlist
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        toast.info(`${action.payload.title} removed from Wishlist.`, {
          position: 'top-center',
        });
      } else {
        // Add the new product to the wishlist
        state.items.push(action.payload);
        toast.success(`${action.payload.title} added to Wishlist!`, {
          position: 'top-center',
        });
      }

      if (typeof window !== 'undefined') {
        localStorage.setItem('wishlistItems', JSON.stringify(state.items)); // Update local storage
      }
    },
  },
});

export const { toggleWishlistItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
