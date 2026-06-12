import Link from 'next/link';

interface CartTotalProps {
  clearCart: () => void;
  cartTotal: number;
}

const CartTotal = ({ clearCart, cartTotal }: CartTotalProps) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="coupon-all">
            <div className="coupon">
              <input
                id="coupon_code"
                className="input-text mb-20"
                name="coupon_code"
                readOnly
                placeholder="Coupon code"
                type="text"
              />
              <button
                className="it-btn-orange mb-20"
                name="apply_coupon"
                type="submit"
              >
                <span>Apply coupon</span>
              </button>
            </div>
            <div className="coupon2">
              <button
                className="it-btn-orange mb-20"
                onClick={() => clearCart()}
              >
                <span>Clear Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-md-5 ">
          <div className="cart-page-total">
            <h2>Cart totals</h2>
            <ul className="mb-20">
              <li>
                Subtotal <span>${cartTotal.toFixed(2)}</span>
              </li>
              <li>
                Total <span>${cartTotal.toFixed(2)}</span>
              </li>
            </ul>
            <Link className="it-btn-orange" href="/checkout">
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartTotal;
