import { combineReducers } from 'redux';
import headerReducer from './slices/header-slice';
import modalReducer from './slices/modal-slice';
import cartReducer from './slices/cart-slice';
import productModalReducer from './slices/product-modal-slice';
import wishlistReducer from './slices/wishlist-slice';
import compareReducer from './slices/compare-slice';
import productSortReducer from './slices/product-sort-slice';
import productFilterReducer from './slices/product-filter-slice';

const rootReducer = combineReducers({
  header: headerReducer,
  modal: modalReducer,
  cart: cartReducer,
  productModal: productModalReducer,
  wishlist: wishlistReducer,
  compare: compareReducer,
  sort: productSortReducer,
  filters: productFilterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
