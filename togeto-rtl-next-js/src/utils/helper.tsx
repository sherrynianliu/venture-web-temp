import { IProductDT } from '@/types/product-d-t';

// Define CartItem type (union of IProductDT or IProgramDT with quantity)
export type CartItem = IProductDT & { quantity: number };

// Function to update price based on badge title
export const updatePrice = (product: IProductDT): number => {
  const price = product?.hasDiscount?.includes('%')
    ? (product?.price * (1 - parseFloat(product?.hasDiscount) / 100)).toFixed(2)
    : product?.price;

  return parseFloat(price as string); // Ensure that price is parsed to a number
};

// Function to calculate total amount for cart slice
export const calculateTotalAmount = (items: CartItem[]): number => {
  const total = items.reduce(
    (sum, item) =>
      sum + Math.round(updatePrice(item as IProductDT)) * item.quantity,
    0
  );

  return total;
};
