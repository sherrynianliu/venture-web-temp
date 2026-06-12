import Link from 'next/link';
import BlogItemOne from './blog-item/blog-item-one';
import { blogDataOne } from '@/data/blog-data';

const BlogOne = () => {
  return (
    <div id="blog" className="it-blog-area pt-130 pb-100">
      <div className="container">
        <div className="it-blog-top-wrap pb-65">
          <div className="row align-items-end">
            <div className="col-xl-5 col-lg-6">
              <div className="it-section-title-box">
                <h4 className="it-section-title it-split-text it-split-in-right">
                  Read Some <span>News</span>
                </h4>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div
                className="it-blog-btn text-lg-end it-fade-anim"
                data-fade-from="top"
                data-ease="bounce"
                data-delay=".5"
              >
                <Link className="it-btn-orange" href="/blog">
                  <span>View All News </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {blogDataOne
            .map((blog, i) => (
              <div
                key={blog.id}
                className="col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay={`${0.3 + 0.2 * i}s`}
              >
                <BlogItemOne blog={blog} />
              </div>
            ))
            .slice(0, 3)}
        </div>
      </div>
    </div>
  );
};
export default BlogOne;
