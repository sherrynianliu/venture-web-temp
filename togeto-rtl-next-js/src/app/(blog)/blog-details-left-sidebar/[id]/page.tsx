import { Metadata } from 'next';
import { blogData } from '@/data/blog-data';
import BlogDetailsLeftSidebarMain from '@/views/blog-details/blog-details-left-sidebar';

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

export default function BlogDetailsLeftSidebarPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = blogData.find((blog) => String(blog.id) === params.id);
  return blog ? (
    <BlogDetailsLeftSidebarMain blog={blog} />
  ) : (
    <div className="text-center pt-100">
      Blog not found with id: {params.id}
    </div>
  );
}
