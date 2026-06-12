import Image from 'next/image';
import Link from 'next/link';
import { Calender, Message } from '@/components/svg';
import { IBlogDT } from '@/types/blog-d-t';

import blogImg from '@/assets/img/blog/blog-1-1.jpg';

interface BlogItemProps {
  blog: IBlogDT;
}

const BlogItemOne = ({ blog }: BlogItemProps) => {
  return (
    <div className="it-blog-item white-bg mb-30">
      <div className="it-blog-thumb">
        <Link href={`/blog-details-right-sidebar/${blog.id}`}>
          <Image
            className="w-100 image-height-auto"
            src={blog.image || blogImg}
            alt="blog-img"
            width={416}
            height={264}
          />
          <Image
            className="w-100 image-height-auto"
            src={blog.image || blogImg}
            alt="blog-img"
            width={416}
            height={264}
          />
        </Link>
      </div>
      <div className="it-blog-content gray-bg">
        <div className="it-blog-meta mb-20">
          <span>
            <Calender />
            {blog.publishedDate}
          </span>
          <span>
            <Message />
            Comments
          </span>
        </div>
        <h4 className="it-blog-title mb-25">
          <Link
            className="border-line-black"
            href={`/blog-details-right-sidebar/${blog.id}`}
          >
            {blog.title}
          </Link>
        </h4>
        <Link
          className="it-btn-sm"
          href={`/blog-details-right-sidebar/${blog.id}`}
        >
          <span>{blog.btnText || 'Discover More'}</span>
        </Link>
      </div>
    </div>
  );
};
export default BlogItemOne;
