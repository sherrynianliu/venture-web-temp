'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { toast } from 'react-toastify';
import {
  selectCartItems,
  selectCartTotal,
} from '@/redux/selectors/cart-selector';
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeItemFromCart,
} from '@/redux/slices/cart-slice';
import { IProductDT } from '@/types/product-d-t';
import { updatePrice } from '@/utils/helper';
import CartTotal from './cart-total';

import productImg from '@/assets/img/shop/shop-sm-1-1.png';
import ItemNotFound from '../item-not-found';

const CartArea = () => {
  const dispatch = useAppDispatch();
  const [isClient, setIsClient] = useState<boolean>(false);

  const cartItems = useAppSelector(selectCartItems); // Selector to get cart item
  const cartTotal = useAppSelector(selectCartTotal); // Selector to get cart total

  // Dispatch the action to increase the quantity
  const handleIncrement = (id: number) => {
    dispatch(incrementQuantity(id));
  };

  // Dispatch the action to decrease the quantity
  const handleDecrement = (id: number) => {
    dispatch(decrementQuantity(id));
  };

  // Dispatch the action to remove all products from cart
  const handleRemove = (id: number, title: string) => {
    dispatch(
      removeItemFromCart({
        id: id,
        title: title,
      })
    );
  };

  // Dispatch the action to remove all products from cart
  const handleClearCart = () => {
    if (typeof window !== 'undefined') {
      const confirmed = window.confirm(
        'Are you sure you want to clear the cart?'
      );
      if (confirmed) {
        dispatch(clearCart());
        toast.success('Cart cleared successfully!', { position: 'top-center' });
      }
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {cartItems.length === 0 ? (
        <ItemNotFound />
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
                          <th className="product-quantity">Quantity</th>
                          <th className="product-subtotal">Total</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr key={item.id}>
                            <td className="product-thumbnail">
                              <Link href={`/shop-details/${item.id}`}>
                                <Image
                                  src={item.image || productImg}
                                  alt={item.title}
                                  width={44}
                                  height={48}
                                  style={{ height: 'auto' }}
                                />
                              </Link>
                            </td>
                            <td className="product-name">
                              <Link href={`/shop-details/${item.id}`}>
                                {item.title}
                              </Link>
                            </td>
                            <td className="product-price">
                              <span className="amount">
                                $
                                {Math.round(
                                  updatePrice(item as IProductDT)
                                ).toFixed(2)}
                              </span>
                            </td>
                            <td className="product-quantity">
                              <span
                                className="it-cart-minus cart-minus"
                                onClick={() => handleDecrement(item.id)}
                              >
                                -
                              </span>
                              <input
                                className="cart-input"
                                type="text"
                                value={item.quantity}
                                readOnly
                              />
                              <span
                                className="it-cart-plus cart-plus"
                                onClick={() => handleIncrement(item.id)}
                              >
                                +
                              </span>
                            </td>
                            <td className="product-subtotal">
                              <span className="amount">
                                $
                                {(
                                  Math.round(updatePrice(item as IProductDT)) *
                                  item.quantity
                                ).toFixed(2)}
                              </span>
                            </td>
                            <td className="product-remove">
                              <a
                                href="#"
                                onClick={() =>
                                  handleRemove(item.id, item.title)
                                }
                              >
                                <i className="fa fa-times"></i>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <CartTotal
                    cartTotal={cartTotal}
                    clearCart={handleClearCart}
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default CartArea;
