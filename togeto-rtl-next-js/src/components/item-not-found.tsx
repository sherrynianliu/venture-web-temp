import Link from 'next/link';

interface IProps {
  title?: string;
  subtitle?: string;
}

const ItemNotFound = ({ title, subtitle }: IProps) => {
  return (
    <div className="it-error-area pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="it-error-box text-center">
              <div className="it-error-content">
                <h4 className="it-section-title pb-30 it-split-text it-split-in-right">
                  {title || 'Your Cart is Empty!'}
                </h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      subtitle ||
                      `But it doesn&apos;t have to stay that way. <br /> Browse our
                        collection and find something you love!`,
                  }}
                ></p>

                <div
                  className="it-error-button it-fade-anim"
                  data-fade-from="top"
                  data-ease="bounce"
                  data-delay=".5"
                >
                  <Link className="it-btn-orange mt-30" href="/shop-sidebar">
                    <span>Back to Shop</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemNotFound;
