import Sidebar from '../sidebar';
import BlogContent from './blog-content';

const BlogLeftSidebarArea = () => {
  return (
    <div className="postbox-area postbox-left-style pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <Sidebar />
          </div>
          <div className="col-xl-9 col-lg-8">
            <BlogContent />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogLeftSidebarArea;
