import Link from 'next/link';
import Image from 'next/image';
import { RightArrow } from '../svg';
import { IBlogDT } from '@/types/blog-d-t';
import { blogData } from '@/data/blog-data';

import blogImg from '@/assets/img/blog/sidebar-1-1.jpg';

const categoryData = [
  'Road Freight Services',
  'Maritime transportation',
  'Intermodal Shipping',
  'Air Transport',
  'Ocean Freight',
  'Logistic Service',
];

const Sidebar = () => {
  // Function to convert the date string to a Date object for comparison
  const sortByPublishedDate = (blog1: IBlogDT, blog2: IBlogDT): number => {
    const dateA = blog1.publishedDate
      ? new Date(blog1.publishedDate)
      : new Date(0);
    const dateB = blog2.publishedDate
      ? new Date(blog2.publishedDate)
      : new Date(0);
    return dateB.getTime() - dateA.getTime();
  };

  // Sort the blogs
  const recentBlogs = blogData.sort(sortByPublishedDate).slice(0, 4);
  return (
    <div className="sidebar-right">
      <div className="sidebar-widget mb-55">
        <h4 className="sidebar-widget-title mb-35">Search here:</h4>
        <div className="sidebar-search-box p-relative">
          <div className="sidebar-search-input">
            <input type="text" placeholder="Search here" />
          </div>
          <div className="sidebar-search-button">
            <button type="submit">
              <i className="fa-sharp fa-light fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="sidebar-widget mb-55">
        <h4 className="sidebar-widget-title mb-35">Post Category:</h4>
        {categoryData.map((item, i) => (
          <Link key={i} href="#">
            <div
              className={`sidebar-widget-list mb-10 ${i === 1 ? 'active' : ''}`}
            >
              {item}
              <span>
                <RightArrow />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="sidebar-widget mb-55">
        <h4 className="sidebar-widget-title mb-35">recent post:</h4>
        <div className="sidebar-widget-content">
          <div className="sidebar-widget-post">
            {recentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="rc-post mb-30 d-flex align-items-center"
              >
                <div className="rc-post-thumb mr-20">
                  <Link href={`/blog-details-right-sidebar/${blog.id}`}>
                    <Image
                      className="image-height-auto"
                      src={blog.image || blogImg}
                      alt="blog-img"
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
                <div className="rc-post-content">
                  <div className="rc-meta">
                    <h3 className="rc-post-title">
                      <Link href={`/blog-details-right-sidebar/${blog.id}`}>
                        {blog.title}
                      </Link>
                    </h3>
                    <span>{blog.publishedDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sidebar-widget">
        <div className="sideba-widge-title-box">
          <h3 className="sidebar-widget-title sm-border mb-35">Popular Tags</h3>
        </div>
        <div className="sidebar-widget-content">
          <div className="tagcloud">
            <a href="#">Ocean Transport</a>
            <a href="#">Road Transport</a>
            <a href="#">Road Transport</a>
            <a href="#">Logistics</a>
            <a href="#">Packeging</a>
            <a href="#">Train Transport</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
