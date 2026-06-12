import Sidebar from '../sidebar';
import PostboxWrapper from './postbox-wrapper';
import { IBlogDT } from '@/types/blog-d-t';

interface BlogDetailsProps {
  blog: IBlogDT;
}

const BlogDetailsRightSidebarArea = ({ blog }: BlogDetailsProps) => {
  return (
    <div className="postbox-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <PostboxWrapper blog={blog} />
          </div>
          <div className="col-xl-3 col-lg-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogDetailsRightSidebarArea;
