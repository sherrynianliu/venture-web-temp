import Image from 'next/image';
import ShopReviewForm from '@/components/form/shop-review-form';

import avatarImg1 from '@/assets/img/testimonial/avata-1-2.png';
import avatarImg2 from '@/assets/img/testimonial/avata-1-3.png';

const reviewData = [
  {
    id: 1,
    author: 'Kenneth M. Fulford',
    avatar: avatarImg1,
    description: `There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some 
                  <br /> form, by injected humour, or randomised words which
                  don't look.`,
    rating: 4,
    commentedTime: '25 Sep 2025',
  },
  {
    id: 2,
    author: 'Martha S. Gorman',
    avatar: avatarImg2,
    description: `There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some 
                  <br /> form, by injected humour, or randomised words which
                  don't look.`,
    rating: 3,
    commentedTime: '25 Nov 2024',
  },
];

const DetailsTabReview = () => {
  return (
    <div className="product-details-review">
      <div className="latest-comments mb-55">
        <ul>
          {reviewData.map((item) => (
            <li key={item.id}>
              <div className="comments-box d-flex">
                <div className="comments-avatar mr-25">
                  <Image
                    className="image-height-auto"
                    src={item.avatar}
                    alt={item.author}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="comments-text">
                  <div className="avatar-name">
                    <b>{item.author}</b>
                  </div>
                  <div className="comments-top d-sm-flex align-items-center mb-5">
                    <div className="comments-date mr-20">
                      <span>{item.commentedTime}</span>
                    </div>
                    <div className="user-rating">
                      <ul>
                        {Array.from({ length: item.rating }).map(
                          (_, starIndex) => (
                            <li key={starIndex}>
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                  <p
                    className="m-0"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="row">
        <div className="col-lg-7">
          <div className="product-details-comment">
            <div className="comment-title mb-20">
              <h3>Add a review</h3>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
            </div>
            <div className="comment-rating mb-20 d-flex">
              <span>Overall Your rating *</span>
              <ul>
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <li key={starIndex}>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="comment-input-box">
              <ShopReviewForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsTabReview;
