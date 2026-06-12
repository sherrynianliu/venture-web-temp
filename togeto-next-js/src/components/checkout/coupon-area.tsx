'use client';

import { useState } from 'react';

const CouponArea = () => {
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
  const [showCoupon, setShowCoupon] = useState<boolean>(false);

  return (
    <section className="coupon-area pt-100 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="coupon-accordion">
              <h3>
                Returning customer?{' '}
                <span
                  id="showlogin"
                  onClick={() => setShowLoginForm(!showLoginForm)}
                >
                  Click here to login
                </span>
              </h3>
              <div
                id="checkout-login"
                className={
                  showLoginForm ? 'coupon-content d-block' : 'coupon-content'
                }
              >
                <div className="coupon-info">
                  <p className="coupon-text">
                    Quisque gravida turpis sit amet nulla posuere lacinia. Cras
                    sed est sit amet ipsum luctus.
                  </p>
                  <form action="#">
                    <p className="form-row-first">
                      <label>
                        Username or email <span className="required">*</span>
                      </label>
                      <input type="text" />
                    </p>
                    <p className="form-row-last">
                      <label>
                        Password <span className="required">*</span>
                      </label>
                      <input type="text" />
                    </p>
                    <p className="form-row">
                      <button className="it-btn-orange">
                        View All Services
                      </button>
                      <label>
                        <input type="checkbox" />
                        Remember me
                      </label>
                    </p>
                    <p className="lost-password">
                      <a href="#">Lost your password?</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="coupon-accordion">
              <h3>
                Have a coupon?{' '}
                <span
                  id="showcoupon"
                  onClick={() => setShowCoupon(!showCoupon)}
                >
                  Click here to enter your code
                </span>
              </h3>
              <div
                id="checkout_coupon"
                className={
                  showCoupon
                    ? 'coupon-checkout-content d-block'
                    : 'coupon-checkout-content'
                }
              >
                <div className="coupon-info">
                  <form action="#">
                    <p className="checkout-coupon">
                      <input type="text" placeholder="Coupon Code" />
                      <button className="it-btn-orange" type="submit">
                        Apply Coupon
                      </button>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CouponArea;
