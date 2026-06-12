import Sidebar from '../sidebar';
import BlogContent from './blog-content';

const BlogRightSidebarArea = () => {
  return (
    <div className="postbox-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <BlogContent />
          </div>
          <div className="col-xl-3 col-lg-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogRightSidebarArea;
