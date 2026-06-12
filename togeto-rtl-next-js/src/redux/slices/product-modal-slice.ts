import { IProductDT } from '@/types/product-d-t';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductModalState {
  isOpen: boolean;
  productData: IProductDT | null;
}

// Initial state for the modal
const initialState: ProductModalState = {
  isOpen: false,
  productData: null,
};

const productModalSlice = createSlice({
  name: 'productModal',
  initialState,
  reducers: {
    // Reducer to open modal and set product data
    openProductModal: (state, action: PayloadAction<IProductDT>) => {
      state.isOpen = true;
      state.productData = action.payload;
    },

    // Reducer to close modal and clear product data
    closeProductModal: (state) => {
      state.isOpen = false;
      state.productData = null;
    },
  },
});

// Export actions and reducer
export const { openProductModal, closeProductModal } =
  productModalSlice.actions;

export default productModalSlice.reducer;
