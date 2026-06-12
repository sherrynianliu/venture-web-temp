import { RootState } from '../rootReducer';

// Selector to get all items in the cart
export const selectCartItems = (state: RootState) => state.cart.items;

// Selector to get the total amount in the cart
export const selectCartTotal = (state: RootState) => state.cart.totalAmount;

// Selector to check if a product is in the cart
export const selectIsProductInCart = (
  state: RootState,
  id: string | number
): boolean => {
  return state.cart.items.some((item) => item.id === id);
};
