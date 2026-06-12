'use client';

import { useState } from 'react';
import { useAppSelector } from '@/hooks/redux-hooks';
import useIsClient from '@/hooks/use-is-client';
import {
  selectCartItems,
  selectCartTotal,
} from '@/redux/selectors/cart-selector';
import { faqDataThree } from '@/data/faq-data';
import { updatePrice } from '@/utils/helper';
import { IProductDT } from '@/types/product-d-t';
import FaqItemTwo from '../faq/faq-item/faq-item-two';

const CheckoutOrder = () => {
  const cartItems = useAppSelector(selectCartItems); // Selector to get cart items
  const cartTotal = useAppSelector(selectCartTotal); // Selector to get get cart total
  const [shippingCost, setShippingCost] = useState<number>(0);
  const isClient = useIsClient();

  const orderTotal = cartTotal + shippingCost;

  // handler for calculating shipping cost
  const handleShippingChange = (cost: number) => {
    setShippingCost(cost);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="your-order mb-30 ">
      <h3>Your order</h3>
      <div className="your-order-table table-responsive">
        <table>
          <thead>
            <tr>
              <th className="product-name">Product</th>
              <th className="product-total">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((item) => (
              <tr key={item.id} className="cart_item">
                <td className="product-name">
                  {item.title}{' '}
                  <strong className="product-quantity">
                    {' '}
                    × {item.quantity}
                  </strong>
                </td>
                <td className="product-total">
                  <span className="amount">
                    $
                    {(
                      Math.round(updatePrice(item as IProductDT)) *
                      item.quantity
                    ).toFixed(2)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="cart-subtotal">
              <th>Cart Subtotal</th>
              <td>
                <span className="amount">${cartTotal.toFixed(2)}</span>
              </td>
            </tr>
            <tr className="shipping">
              <th>Shipping</th>
              <td>
                <ul>
                  <li>
                    <input
                      type="radio"
                      name="shipping"
                      onChange={() => handleShippingChange(7)}
                    />
                    <label>
                      Flat Rate: <span className="amount">$7.00</span>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="shipping"
                      onChange={() => handleShippingChange(0)}
                    />
                    <label>Free Shipping:</label>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="order-total">
              <th>Order Total</th>
              <td>
                <strong>
                  <span className="amount">${orderTotal.toFixed(2)}</span>
                </strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="payment-method">
        <FaqItemTwo faqs={faqDataThree} />
        <div className="order-button-payment mt-20">
          <button
            className="it-btn-orange d-flex justify-content-center align-items-center"
            type="submit"
          >
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};
export default CheckoutOrder;
