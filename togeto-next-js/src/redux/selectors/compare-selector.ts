import { RootState } from '../rootReducer';

// Selector to get all the items in the wishlist
export const selectCompareItems = (state: RootState) => state.compare.items;

// Selector to check if a product is in the wishlist
export const selectIsProductInCompare = (
  state: RootState,
  id: number | string
): boolean => {
  return state.compare.items.some((item) => item.id === id);
};
