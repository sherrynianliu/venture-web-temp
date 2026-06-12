'use client';

import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { addItemToCart } from '@/redux/slices/cart-slice';
import { toggleWishlistItem } from '@/redux/slices/wishlist-slice';
import { toggleCompareItem } from '@/redux/slices/compare-slice';
import { closeProductModal } from '@/redux/slices/product-modal-slice';
import { selectIsProductInWishlist } from '@/redux/selectors/wishlist-selectors';
import { selectIsProductInCompare } from '@/redux/selectors/compare-selector';
import { IProductDT } from '@/types/product-d-t';
import { updatePrice } from '@/utils/helper';
import { Compare, Question, WishlistTwo } from '../svg';

const ProductModalContent = ({ product }: { product: IProductDT }) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(1);

  // Selector to get if product exists in wishlist
  const isProductInWishlist = useAppSelector((state) =>
    product?.id !== undefined
      ? selectIsProductInWishlist(state, product.id)
      : false
  );

  // Selector to get if product exists in compare
  const isProductInCompare = useAppSelector((state) =>
    product?.id !== undefined
      ? selectIsProductInCompare(state, product.id)
      : false
  );

  // Set quantity to 1 when component mounts
  useEffect(() => {
    setQuantity(1);
  }, [product]);

  // Handler to increase quantity
  const handleIncrement = () => setQuantity((prev) => prev + 1);

  // Handler to decrease quantity
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Handler to add item in the cart
  const handleAddToCart = () => {
    if (product) {
      dispatch(addItemToCart({ product: product, quantity }));
      handleCloseModal();
      setQuantity(1);
    }
  };

  // Handler to toggle item from wishlist
  const handleToggleWishlist = () => dispatch(toggleWishlistItem(product));

  // Handler to toggle item from Compare
  const handleToggleCompare = () => dispatch(toggleCompareItem(product));

  // Handler for closing the Modal
  const handleCloseModal = useCallback(() => {
    dispatch(closeProductModal());
  }, [dispatch]);

  return (
    <div className="it-product-details-wrapper">
      <button
        type="button"
        className="it-product-modal-close-btn"
        onClick={handleCloseModal}
      >
        <i className="fa-regular fa-xmark"></i>
      </button>
      <h3 className="it-product-details-title">{product?.title}</h3>
      <div className="it-product-details-inventory d-flex align-items-center mb-10">
        <span>{product?.outOfStock ? 'Out Of Stock' : 'In Stock'}</span>
        <span>({product?.reviewCount} Reviews)</span>
      </div>
      <p>A Screen Everyone Will Love: Whether your family is streaming...</p>
      <div className="it-product-details-price-wrapper mb-20">
        {product?.hasDiscount && (
          <span className="old-price">${product.price.toFixed(2)}</span>
        )}
        <span className="new-price">
          ${Math.round(updatePrice(product)).toFixed(2)}
        </span>
      </div>
      <div className="quantity-controls d-flex align-items-center">
        <button onClick={handleDecrement}>-</button>
        <input type="text" value={quantity} readOnly />
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleAddToCart}>Add To Cart</button>
      </div>
      <div>
        <button onClick={handleToggleCompare}>
          <Compare /> {isProductInCompare ? 'Compared' : 'Compare'}
        </button>
        <button onClick={handleToggleWishlist}>
          <WishlistTwo />{' '}
          {isProductInWishlist ? 'Remove Wishlist' : 'Add Wishlist'}
        </button>
        <button>
          <Question /> Ask a question
        </button>
      </div>
    </div>
  );
};

export default ProductModalContent;
