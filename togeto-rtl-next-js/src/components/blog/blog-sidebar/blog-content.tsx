'use client';

import usePaginate from '@/hooks/use-paginate';
import BlogItemTwo from '../blog-item/blog-item-two';
import Pagination from '@/components/ui/pagination';
import { blogDataTwo } from '@/data/blog-data';

const BlogContent = () => {
  // Custom Hook For Pagination
  const { currentItems, handlePageClick, pageCount } = usePaginate(
    blogDataTwo,
    4
  );

  return (
    <div className="postbox-details-wrapper">
      {currentItems.map((blog) => (
        <BlogItemTwo key={blog.id} blog={blog} />
      ))}

      <div className="it-pagination mt-80">
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
      </div>
    </div>
  );
};
export default BlogContent;
