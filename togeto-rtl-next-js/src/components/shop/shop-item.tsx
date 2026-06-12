'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { openProductModal } from '@/redux/slices/product-modal-slice';
import { selectIsProductInCart } from '@/redux/selectors/cart-selector';
import { selectIsProductInWishlist } from '@/redux/selectors/wishlist-selectors';
import { selectIsProductInCompare } from '@/redux/selectors/compare-selector';
import { addItemToCart } from '@/redux/slices/cart-slice';
import { toggleWishlistItem } from '@/redux/slices/wishlist-slice';
import { toggleCompareItem } from '@/redux/slices/compare-slice';
import { updatePrice } from '@/utils/helper';
import { IProductDT } from '@/types/product-d-t';
import { Compare, QuicView, Wishlist } from '../svg';

interface ShopProps {
  product: IProductDT;
}

const ShopItem = ({ product }: ShopProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const isProductInCart = useAppSelector((state) =>
    selectIsProductInCart(state, product.id)
  ); // selector to check if the product is in Cart
  const isProductInWishlist = useAppSelector((state) =>
    selectIsProductInWishlist(state, product.id)
  ); // selector to check if the product is in Wishlist
  const isProductInCompare = useAppSelector((state) =>
    selectIsProductInCompare(state, product.id)
  ); // selector to check if the product is in Compare

  // Dispatch the action to get Product Modal data
  const handleOpenModal = () => {
    dispatch(openProductModal(product));
  };

  // Dispatch action to add item to cart with initial quantity of 1
  const handleAddToCart = (product: IProductDT, quantity: number = 1) => {
    dispatch(addItemToCart({ product, quantity }));
  };

  // Handler to Navigate to the cart page
  const handleViewCart = () => {
    router.push('/cart');
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
    <div className="it-product-item p-relative">
      <div className="it-product-thumb-box">
        <div className="it-product-thumb fix p-relative">
          <Image
            className="image-height-auto"
            src={product.image}
            alt={product.title}
            width={420}
            height={335}
          />
          <div className="it-product-action-2 it-shop-action-blackStyle">
            <div className="it-product-action-item-2">
              <button
                type="button"
                className="it-product-action-btn-2 it-product-quick-view-btn"
                onClick={handleOpenModal}
              >
                <QuicView />
                <span className="it-product-tooltip it-product-tooltip-right">
                  Quick View
                </span>
              </button>
              <button
                type="button"
                className={`it-product-action-btn-2 it-product-add-to-wishlist-btn ${
                  isProductInWishlist ? 'active' : ''
                }`}
                onClick={() => handleToggleWishlist(product)}
              >
                <Wishlist />
                <span className="it-product-tooltip it-product-tooltip-right">
                  {isProductInWishlist
                    ? 'Remove From Wishlist'
                    : 'Add To Wishlist'}
                </span>
              </button>
              <button
                type="button"
                className={`it-product-action-btn-2 it-product-add-to-compare-btn ${
                  isProductInCompare ? 'active' : ''
                }`}
                onClick={() => handleToggleCompare(product)}
              >
                <Compare />
                <span className="it-product-tooltip it-product-tooltip-right">
                  {isProductInCompare
                    ? 'Remove from Compare'
                    : 'Add To Compare'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="it-product-content">
        <div className="mb-25">
          <div className="it-product-ratting mb-20 d-flex justify-content-between align-items-center">
            <span className="it-product-ammount">{product.quality}</span>
            <span className="it-product-rating">
              {Array.from({ length: product.rating }).map((_, starIndex) => (
                <span key={starIndex}>
                  <i className="fa-solid fa-star"></i>
                </span>
              ))}
              (0{product.rating})
            </span>
          </div>
          <h3 className="it-product-title">
            <Link
              href={`/shop-details/${product.id}`}
              className="border-line-black"
            >
              {product.title}
            </Link>
          </h3>
          <div className="it-product-price mb-20">
            {!product.isNew && (
              <span className="it-product-amount">
                ${product.price.toFixed(2)}
              </span>
            )}
            <span>${Math.round(updatePrice(product)).toFixed(2)}</span>
          </div>
        </div>
        <div className="it-product-btn">
          <button
            className="it-btn-sm"
            onClick={() => {
              if (isProductInCart) {
                handleViewCart();
              } else {
                handleAddToCart(product);
              }
            }}
          >
            <span>
              {isProductInCart ? 'View Cart' : product.btnText || 'Add To Cart'}
              <i className="fa-regular fa-cart-shopping"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ShopItem;
