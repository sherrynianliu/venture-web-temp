'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import {
  selectIsModalOpen,
  selectProductData,
} from '@/redux/selectors/product-modal-selector';
import { closeProductModal } from '@/redux/slices/product-modal-slice';
import { addItemToCart } from '@/redux/slices/cart-slice';
import { toggleWishlistItem } from '@/redux/slices/wishlist-slice';
import { selectIsProductInWishlist } from '@/redux/selectors/wishlist-selectors';
import { toggleCompareItem } from '@/redux/slices/compare-slice';
import { selectIsProductInCompare } from '@/redux/selectors/compare-selector';
import { IProductDT } from '@/types/product-d-t';
import { updatePrice } from '@/utils/helper';
import { CompareTwo, Question, WishlistTwo } from '../svg';

const ProductModalDetails = () => {
  const isModalOpen = useAppSelector(selectIsModalOpen);
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();

  const product = useAppSelector(selectProductData);

  const isProductInWishlist = useAppSelector((state) =>
    product?.id !== undefined
      ? selectIsProductInWishlist(state, product.id)
      : false
  ); // selector to check if the product is in Wishlist
  const isProductInCompare = useAppSelector((state) =>
    product?.id !== undefined
      ? selectIsProductInCompare(state, product.id)
      : false
  ); // selector to check if the product is in Wishlist

  //Reset quantity to 1 when component mount and product changes
  useEffect(() => {
    setQuantity(1);
  }, [isModalOpen]);

  // handler to increment quantity
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  // handler to Decrement quantity
  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Handler to add item to cart
  const handleAddToCart = () => {
    if (product) {
      dispatch(addItemToCart({ product: product, quantity }));
      dispatch(closeProductModal());
      setQuantity(1);
    }
  };

  // Dispatch action to add item to wishlist
  const handleToggleWishlist = (product: IProductDT) => {
    dispatch(toggleWishlistItem(product));
  };

  // Dispatch action to add item to Compare
  const handleToggleCompare = (product: IProductDT) => {
    dispatch(toggleCompareItem(product));
  };
  return (
    <div className="it-product-details-wrapper">
      <h3 className="it-product-details-title">{product?.title}</h3>
      <div className="it-product-details-inventory d-flex align-items-center mb-10">
        <div className="it-product-details-stock mb-10">
          <span>{product?.outOfStock ? 'Out Of Stock' : 'In Stock'}</span>
        </div>
        <div className="it-product-details-rating-wrapper d-flex align-items-center mb-10">
          <div className="it-product-details-rating">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <span key={starIndex}>
                <i className="fa-solid fa-star"></i>
              </span>
            ))}
          </div>
          <div className="it-product-details-reviews">
            <span>({product?.reviewCount} Reviews)</span>
          </div>
        </div>
      </div>
      <p>
        A Screen Everyone Will Love: Whether your family is streaming or video
        chatting with friends tablet A8... <span>See more</span>
      </p>

      <div className="it-product-details-price-wrapper mb-20">
        {product?.hasDiscount && (
          <span className="it-product-details-price old-price">
            ${product.price.toFixed(2)}
          </span>
        )}{' '}
        <span className="it-product-details-price new-price">
          ${Math.round(updatePrice(product as IProductDT)).toFixed(2)}
        </span>
      </div>

      <div className="it-product-details-action-wrapper">
        <h3 className="it-product-details-action-title">Quantity</h3>
        <div className="it-product-details-action-item-wrapper d-flex align-items-center">
          <div className="it-product-details-quantity">
            <div className="it-shop-details__quantity mb-15">
              <div className="cart-minus" onClick={() => handleDecrement()}>
                <i className="fal fa-minus"></i>
              </div>
              <input
                type="text"
                id="quantity"
                min="1"
                value={quantity}
                readOnly
              />
              <div className="cart-plus" onClick={() => handleIncrement()}>
                <i className="fal fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="it-shop-details__btn ml-30 mb-15 w-100">
            <button
              className="it-btn-orange w-100 d-flex justify-content-center"
              onClick={() => handleAddToCart()}
            >
              Add To Cart
            </button>
          </div>
        </div>
        <button className="it-btn-black w-100 d-flex justify-content-center">
          Buy Now
        </button>
      </div>
      <div className="it-product-details-action-sm">
        <button
          type="button"
          className={`it-product-details-action-sm-btn ${
            isProductInCompare ? 'active' : ''
          }`}
          onClick={() => handleToggleCompare(product as IProductDT)}
        >
          <CompareTwo />
          {isProductInCompare ? 'Compared' : 'Compare'}
        </button>
        <button
          type="button"
          className={`it-product-details-action-sm-btn ${
            isProductInWishlist ? 'active' : ''
          }`}
          onClick={() => handleToggleWishlist(product as IProductDT)}
        >
          <WishlistTwo />
          {isProductInWishlist ? 'Remove Wishlist' : 'Add Wishlist'}
        </button>
        <button type="button" className="it-product-details-action-sm-btn">
          <Question />
          Ask a question
        </button>
      </div>
    </div>
  );
};
export default ProductModalDetails;
