'use client';

import { useState } from 'react';
import CheckoutForm from './checkout-form';
import CheckoutOrder from './checkout-order';

const CheckoutArea = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <section className="checkout-area pb-70">
      <div className="container">
        <form action="#">
          <div className="row">
            <div className="col-lg-6">
              <div className="checkbox-form">
                <h3>Billing Details</h3>
                {/* Checkout Form */}
                <CheckoutForm />
                {/* Checkout Form */}
                <div className="different-address">
                  <div className="ship-different-title">
                    <h3>
                      <label>Ship to a different address?</label>
                      <input
                        id="ship-box"
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                      />
                    </h3>
                  </div>

                  {isChecked && (
                    <div>
                      {/* Checkout Form */}
                      <CheckoutForm />
                    </div>
                  )}

                  <div className="order-notes">
                    <div className="checkout-form-list">
                      <label>Order Notes</label>
                      <textarea
                        id="checkout-mess"
                        cols={30}
                        rows={30}
                        placeholder="Notes about your order, e.g. special notes for delivery."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <CheckoutOrder />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default CheckoutArea;
