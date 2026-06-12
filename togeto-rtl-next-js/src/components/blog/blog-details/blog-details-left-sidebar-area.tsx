import { IBlogDT } from '@/types/blog-d-t';
import Sidebar from '../sidebar';
import PostboxWrapper from './postbox-wrapper';

interface BlogDetailsProps {
  blog: IBlogDT;
}

const BlogDetailsLeftSidebarArea = ({ blog }: BlogDetailsProps) => {
  return (
    <div className="postbox-area postbox-left-style pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <Sidebar />
          </div>
          <div className="col-xl-9 col-lg-8">
            <PostboxWrapper blog={blog} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogDetailsLeftSidebarArea;
