import { IProductDT } from '../types/product-d-t';
import { updatePrice } from './helper';

// Function to sort products based on the selected sort order
export const sortProducts = (
  products: IProductDT[],
  sortOrder: string
): IProductDT[] => {
  switch (sortOrder) {
    case 'low-to-high':
      // Sort products from low to high price, breaking ties by comparing titles
      return [...products].sort((a, b) => {
        const priceA = updatePrice(a);
        const priceB = updatePrice(b);
        return priceA !== priceB
          ? priceA - priceB
          : a.title.localeCompare(b.title);
      });

    case 'high-to-low':
      // Sort products from high to low price, breaking ties by comparing titles
      return [...products].sort((a, b) => {
        const priceA = updatePrice(a);
        const priceB = updatePrice(b);
        return priceA !== priceB
          ? priceB - priceA
          : a.title.localeCompare(b.title);
      });

    case 'new-added':
      // Filter and sort only products marked as 'new'
      return [...products]
        .filter((product) => product.isNew)
        .sort((a, b) => a.title.localeCompare(b.title));

    case 'on-sale':
      // Filter and sort only products marked with a 'sale' badge
      return [...products]
        .filter((product) => product.hasDiscount?.includes('%'))
        .sort((a, b) => a.title.localeCompare(b.title));

    default:
      // Return products as-is if no sort order is specified
      return products;
  }
};
