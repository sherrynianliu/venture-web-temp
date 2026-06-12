import { blogDataOne } from '@/data/blog-data';
import BlogItemOne from './blog-item/blog-item-one';

const BlogArea = () => {
  return (
    <div className="it-blog-area p-relative pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6">
            <div className="it-section-title-box text-center mb-65">
              <h4 className="it-section-title it-split-text it-split-in-right">
                Read All Our <br />
                Logistics Blogs
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {blogDataOne.map((blog, i) => (
            <div
              key={blog.id}
              className="col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay={`${0.3 + 0.2 * i}s`}
            >
              <BlogItemOne blog={blog} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="it-blog-btn text-center mt-40 it-fade-anim"
              data-fade-from="top"
              data-ease="bounce"
              data-delay=".5"
            >
              <a className="it-btn-orange" href="#">
                <span>View All News </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogArea;
