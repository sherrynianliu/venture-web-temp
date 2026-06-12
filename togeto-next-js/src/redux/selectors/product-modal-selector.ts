import { RootState } from '../rootReducer';

// Selector to get the `isOpen` state
export const selectIsModalOpen = (state: RootState) =>
  state.productModal.isOpen;

// Selector to get the `productData` state
export const selectProductData = (state: RootState) =>
  state.productModal.productData;
