import { Metadata } from 'next';
import { blogData } from '@/data/blog-data';
import BlogDetailsRightSidebarMain from '@/views/blog-details/blog-details-right-sidebar';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const blog = blogData.find((blog) => String(blog.id) === params.id);
  return {
    title: blog ? `Togeto - ${blog.title}` : 'Togeto - Blog Not Found',
  };
}

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    id: String(blog.id),
  }));
}

export default function BlogDetailsRightSidebarPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = blogData.find((blog) => String(blog.id) === params.id);
  return blog ? (
    <BlogDetailsRightSidebarMain blog={blog} />
  ) : (
    <div className="text-center pt-100">
      Blog not found with id: {params.id}
    </div>
  );
}
