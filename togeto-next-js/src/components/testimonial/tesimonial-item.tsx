import Image from 'next/image';
import { ITestimonialDT } from '@/types/testimonial-d-t';
import { CircleTwo, Quote, Star } from '../svg';

import avatarImg from '@/assets/img/testimonial/avata-1-1.png';

interface TestimonialProps {
  testimonial: ITestimonialDT;
  itemClass?: string;
}

const TestimonialItem = ({ testimonial, itemClass }: TestimonialProps) => {
  return (
    <div className={itemClass || 'it-testimonial-2-item-wrap'}>
      <div className="it-testimonial-2-item">
        <div className="it-testimonial-2-ratting mb-25">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <span key={starIndex}>
              <Star />
            </span>
          ))}
        </div>
        <div className="it-testimonial-text">
          <p className="mb-20">{testimonial.description}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="it-testimonial-avatar-wrap d-flex align-items-center">
            <div className="it-testimonial-avatar z-index-1 mr-20 d-lg-inline-block p-relative">
              <Image
                className="image-height-auto"
                src={testimonial.avatar || avatarImg}
                alt={testimonial.author}
                width={100}
                height={100}
              />
              <div className="it-testimonial-avatar-shape">
                <CircleTwo />
              </div>
            </div>
            <div className="it-testimonial-avatar-info">
              <h5 className="it-testimonial-avatar-name">
                {testimonial.author}
              </h5>
              <span>{testimonial.designation}</span>
            </div>
          </div>
          <span className="it-testimonial-quote">
            <Quote />
          </span>
        </div>
      </div>
    </div>
  );
};
export default TestimonialItem;
