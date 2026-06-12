import { IProductDT } from '@/types/product-d-t';
import { updatePrice } from './helper';

export const filterProducts = (
  products: IProductDT[],
  priceRange: [number, number] = [0, Infinity], // Default range for price (all products)
  selectedCategories: string[] = [], // Default to empty array for categories
  selectedColors: string[] = [], // Default to empty array for colors
  onSale: boolean = false, // Default to false for onSale filter
  inStock: boolean = false, // Default to false for inStock filter
  searchQuery: string = '' // Default to empty string for search query
): IProductDT[] => {
  let filteredProducts = products;

  // Filter by price range
  filteredProducts = filteredProducts.filter(
    (product) =>
      updatePrice(product) >= priceRange[0] &&
      updatePrice(product) <= priceRange[1]
  );

  // Filter by categories
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedCategories.includes(product.categories)
    );
  }

  // Filter by colors
  if (selectedColors.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedColors.includes(product.color)
    );
  }

  // Filter by "On Sale"
  if (onSale) {
    filteredProducts = filteredProducts.filter((product) =>
      product.hasDiscount?.includes('%')
    );
  }

  // Filter by "In Stock"
  if (inStock) {
    filteredProducts = filteredProducts.filter(
      (product) => !product.outOfStock
    );
  }

  // Filter by search query
  if (searchQuery.trim() !== '') {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return filteredProducts;
};
