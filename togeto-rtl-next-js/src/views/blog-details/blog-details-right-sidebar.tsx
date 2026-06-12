'use client';

import { useGSAP } from '@gsap/react';
import { splitAnimation } from '@/utils/title-animation';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import Breadcrumb from '@/components/bradcrumb/breadcrumb';
import FooterTwo from '@/layouts/footers/footer-two';
import Header from '@/layouts/headers/header';
import Wrapper from '@/layouts/wrapper';
import { IBlogDT } from '@/types/blog-d-t';
import BlogDetailsRightSidebarArea from '@/components/blog/blog-details/blog-details-right-sidebar-area';

interface BlogDetailsProps {
  blog: IBlogDT;
}

const BlogDetailsRightSidebarMain = ({ blog }: BlogDetailsProps) => {
  // GSAP animations
  useGSAP(() => {
    const timer = setTimeout(() => {
      splitAnimation();
    }, LOADING_ANIMATION_TIMEOUT);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <Header />

      <main>
        <Breadcrumb title={blog?.title} subtitle="Blog Details" />
        <BlogDetailsRightSidebarArea blog={blog} />
      </main>

      <FooterTwo />
    </Wrapper>
  );
};
export default BlogDetailsRightSidebarMain;
