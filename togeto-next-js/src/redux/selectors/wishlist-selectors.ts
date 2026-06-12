import { RootState } from '../rootReducer';

// Selector to get all the items in the wishlist
export const selectWishlistItems = (state: RootState) => state.wishlist.items;

// Selector to check if a product is in the wishlist
export const selectIsProductInWishlist = (
  state: RootState,
  id: number | string
): boolean => {
  return state.wishlist.items.some((item) => item.id === id);
};
