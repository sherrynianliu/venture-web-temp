import { IProductDT } from '@/types/product-d-t';
import { calculateTotalAmount } from '@/utils/helper';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// Define CartItem type (union of Product and Program types)
type CartItem = IProductDT & { quantity: number };

// Define CartState type
interface CartState {
  items: CartItem[];
  totalAmount: number;
}

// Load cart items from local storage (client-side only)
const loadCartItems = (): CartItem[] => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('cartItems') || '[]');
  }
  return [];
};

// Load total cart amount (client-side only)
const loadTotalAmount = (): number => {
  const items = loadCartItems();
  return calculateTotalAmount(items);
};

// Initial state
const initialState: CartState = {
  items: loadCartItems(),
  totalAmount: loadTotalAmount(),
};

// Helper function to recalculate total amount and update local storage
const updateCart = (state: CartState) => {
  state.totalAmount = calculateTotalAmount(state.items);
  if (typeof window !== 'undefined') {
    localStorage.setItem('cartItems', JSON.stringify(state.items));
  }
};

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Reducer to add item in cart
    addItemToCart: (
      state,
      action: PayloadAction<{ product: IProductDT; quantity?: number }>
    ) => {
      const { product, quantity = 1 } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        // Increment quantity of the existing item
        existingItem.quantity += quantity;
        toast.success(
          `${product.title} quantity updated to ${existingItem.quantity}!`,
          { position: 'top-center' }
        );
      } else {
        // Add new item with specified quantity
        const updatedProduct = { ...product, quantity };
        state.items.push(updatedProduct);
        toast.success(`${product.title} added to Cart!`, {
          position: 'top-center',
        });
      }

      // Update the cart in local storage
      updateCart(state);
    },

    //Reducer to remove item from cart
    removeItemFromCart: (
      state,
      action: PayloadAction<{ id: number; title: string }>
    ) => {
      const { id, title } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      toast.info(`${title} removed from Cart.`, { position: 'top-center' });

      updateCart(state);
    },

    // Reducer to increment quantity of item in cart
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload); // Find by id
      if (item) {
        item.quantity += 1;
        toast.success(`${item.title} quantity increased to ${item.quantity}.`, {
          position: 'top-center',
        });
        updateCart(state);
      }
    },

    // Reducer to decrement quantity of item in cart
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload); // Find by id
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        toast.info(`${item.title} quantity decreased to ${item.quantity}.`, {
          position: 'top-center',
        });
        updateCart(state);
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
        toast.info(`${item.title} removed from Cart.`, {
          position: 'top-center',
        });
        updateCart(state);
      }
    },

    //Reducer to clear cart
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('cartItems');
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
