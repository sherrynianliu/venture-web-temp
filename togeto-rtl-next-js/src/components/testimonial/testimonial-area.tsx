import { testimonialDataThree } from '@/data/testimonial-data';
import TestimonialItem from './tesimonial-item';

const TestimonialArea = () => {
  return (
    <div className="it-testimonial-2-area it-testimonial-2-style-2 p-relative z-index-1 pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="it-section-title-box text-center pb-70">
              <h4 className="it-section-title it-split-text it-split-in-right">
                What our clients say <br />
                about our service
              </h4>
            </div>
          </div>
        </div>
        <div className="row gx-35">
          {testimonialDataThree.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className="col-lg-6 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay={`${0.3 + 0.2 * i}s`}
            >
              <TestimonialItem
                itemClass="it-testimonial-2-item-wrap mb-35"
                testimonial={testimonial}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TestimonialArea;
