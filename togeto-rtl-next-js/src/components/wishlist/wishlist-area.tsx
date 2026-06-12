'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { addItemToCart } from '@/redux/slices/cart-slice';
import { selectWishlistItems } from '@/redux/selectors/wishlist-selectors';
import { toggleWishlistItem } from '@/redux/slices/wishlist-slice';
import { updatePrice } from '@/utils/helper';
import { IProductDT } from '@/types/product-d-t';
import ItemNotFound from '../item-not-found';

const WishlistArea = () => {
  const products = useAppSelector(selectWishlistItems); // Selector to get items from wishlist
  const [isClient, setIsClient] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  // Dispatch the action to remove item from wishlist
  const handleToggleWishlist = (product: IProductDT) => {
    dispatch(toggleWishlistItem(product));
  };

  // Dispatch action to add item to cart with initial quantity of 1
  const handleAddToCart = (product: IProductDT, quantity: number = 1) => {
    dispatch(addItemToCart({ product, quantity }));
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {products.length === 0 ? (
        <ItemNotFound
          title="Your Wishlist is Empty!"
          subtitle="But it doesn't have to stay that way. 
                    <br /> Browse our collection and find something you love!"
        />
      ) : (
        <section className="cart-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="#">
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Images</th>
                          <th className="cart-product-name">Product</th>
                          <th className="product-price">Unit Price</th>
                          <th className="product-subtotal">Add To Cart</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product) => (
                          <tr key={product.id}>
                            <td className="product-thumbnail">
                              <Link href={`/shop-details/${product.id}`}>
                                <Image
                                  className="image-height-auto"
                                  src={product.image}
                                  alt={product.title}
                                />
                              </Link>
                            </td>
                            <td className="product-name">
                              <Link href={`/shop-details/${product.id}`}>
                                {product.title}
                              </Link>
                            </td>
                            <td className="product-price">
                              <span className="amount">
                                ${Math.round(updatePrice(product)).toFixed(2)}
                              </span>
                            </td>
                            <td className="product-subtotal">
                              <button
                                type="button"
                                className="it-btn-sm"
                                onClick={() => handleAddToCart(product)}
                              >
                                <span>Add to Cart</span>
                              </button>
                            </td>
                            <td className="product-remove">
                              <button
                                type="button"
                                onClick={() => handleToggleWishlist(product)}
                              >
                                <i className="fa fa-times"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default WishlistArea;
