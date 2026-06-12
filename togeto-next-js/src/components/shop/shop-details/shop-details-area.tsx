'use client';

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { selectIsProductInCompare } from '@/redux/selectors/compare-selector';
import { selectIsProductInWishlist } from '@/redux/selectors/wishlist-selectors';
import { addItemToCart } from '@/redux/slices/cart-slice';
import { toggleCompareItem } from '@/redux/slices/compare-slice';
import { toggleWishlistItem } from '@/redux/slices/wishlist-slice';
import { IProductDT } from '@/types/product-d-t';
import { updatePrice } from '@/utils/helper';
import DetailsTabArea from './details-tab-area';
import ImageTab from './image-tab';
import SocialBox from '@/components/social/social-box';

interface ShopDetailsProps {
  product: IProductDT;
}

const ShopDetailsArea = ({ product }: ShopDetailsProps) => {
  const {
    title = 'Unknown Product',
    hasDiscount = '',
    price = 0,
    reviewCount = 0,
    tag = 'No Tag',
    categories = 'No category',
    images = [],
    btnText = 'Add to Cart',
  } = product || {};

  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();
  const isProductInWishlist = useAppSelector((state) =>
    selectIsProductInWishlist(state, product.id)
  ); // selector to check if the product is in Wishlist
  const isProductInCompare = useAppSelector((state) =>
    selectIsProductInCompare(state, product.id)
  ); // selector to check if the product is in Wishlist

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
    <div className="it-shop-details__area pt-120 pb-120">
      <div className="container">
        <div className="it-shop-details__top-wrap mb-120">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <ImageTab images={images} />
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="it-shop-details__right-wrap">
                <h3 className="it-shop-details__title-sm mb-30">{title}</h3>
                <div className="it-shop-details__price d-flex align-items-center">
                  {hasDiscount && (
                    <del className="mr-20">
                      ${Math.round(price * quantity).toFixed(2)}
                    </del>
                  )}{' '}
                  <span>
                    ${(Math.round(updatePrice(product)) * quantity).toFixed(2)}
                  </span>
                  <div className="it-shop-details__ratting">
                    <i className="flaticon-star"></i>
                    <span>({reviewCount} Customer reviews)</span>
                  </div>
                </div>
                <div className="it-shop-details__quantity-wrap">
                  <div className="it-shop-details__quantity-box d-flex align-items-center mb-30">
                    <div className="it-shop-details__quantity">
                      <div
                        className="cart-minus"
                        onClick={() => handleDecrement()}
                      >
                        <i className="fal fa-minus"></i>
                      </div>
                      <input
                        type="text"
                        id="quantity"
                        min="1"
                        value={quantity}
                        readOnly
                      />
                      <div
                        className="cart-plus"
                        onClick={() => handleIncrement()}
                      >
                        <i className="fal fa-plus"></i>
                      </div>
                    </div>
                    <div className="it-shop-details__btn">
                      <button
                        className="it-btn-orange"
                        onClick={handleAddToCart}
                      >
                        <span>{btnText}</span>
                      </button>
                    </div>
                  </div>
                  <div className="it-shop-details__text pb-10">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the <br /> majority have suffered
                      alteration in some form, by injected humour, or <br />{' '}
                      randomised words which don’t look even slightly
                      believable. If you are going to <br /> use a passage of
                      Lorem Ipsum, you need to be sure there isn’t anything{' '}
                      <br /> embarrassing hidden in the middle of text.
                    </p>
                  </div>
                  <div className="it-shop-details__icon mb-40">
                    <button
                      type="button"
                      className={isProductInWishlist ? 'active' : ''}
                      onClick={() => handleToggleWishlist(product)}
                    >
                      <i className="fa-light fa-heart"></i>
                    </button>
                    <button
                      type="button"
                      className={isProductInCompare ? 'active' : ''}
                      onClick={() => handleToggleCompare(product)}
                    >
                      <i className="fa-sharp fa-light fa-arrows-repeat"></i>
                    </button>
                  </div>
                  <div className="it-shop-details__Category pb-35">
                    <span>
                      <i>Categories:</i> {categories}
                    </span>
                    <span>
                      <i>Tags:</i> {tag}
                    </span>
                  </div>
                  <div className="it-shop-details__social">
                    <SocialBox />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <DetailsTabArea />
        </div>
      </div>
    </div>
  );
};
export default ShopDetailsArea;
