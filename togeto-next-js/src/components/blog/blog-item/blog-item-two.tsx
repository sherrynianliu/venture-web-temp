'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { openModal } from '@/redux/slices/modal-slice';
import ModalVideoWrapper from '@/components/modal-video/modal-video';
import { VideoPlayTwo } from '@/components/svg';
import { IBlogDT } from '@/types/blog-d-t';

import blogImg from '@/assets/img/blog/details-1-3.jpg';

// Prop Types
interface BlogItemProps {
  blog: IBlogDT;
}

const BlogItemTwo = ({ blog }: BlogItemProps) => {
  const dispatch = useAppDispatch();

  // Handler for opening modal video
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(openModal('YoOG5H4603Y'));
  };

  // Swiper Slider Options
  const sliderOption: SwiperOptions = {
    speed: 1500,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: { delay: 2500 },
    navigation: {
      prevEl: '.postbox-arrow-prev',
      nextEl: '.postbox-arrow-next',
    },
  };

  return (
    <div className="postbox-thumb-box mb-60">
      {/* Modal Video Wrapper */}
      {blog?.hasModalVideo && <ModalVideoWrapper />}
      {/* Modal Video Wrapper */}

      {blog?.images ? (
        <div className="it-postbox-wrapper p-relative mb-40">
          <div className="swiper-container postbox-thumb-slider-active">
            <Swiper
              modules={[Autoplay, Navigation]}
              {...sliderOption}
              className="swiper-wrapper"
            >
              {blog?.images.map((image, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <div className="postbox-main-thumb">
                    <Image
                      className="image-height-auto"
                      src={image || blogImg}
                      alt="blog-image"
                      width={904}
                      height={460}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="postbox-slider-arrow-wrap">
            <button className="postbox-arrow-prev">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="postbox-arrow-next">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      ) : (
        <div className="postbox-main-thumb mb-40 p-relative">
          <Image
            className="image-height-auto"
            src={blog.image || blogImg}
            alt="blog-image"
            width={904}
            height={460}
          />
          {blog.hasModalVideo && (
            <Link
              className="postbox-video-btn popup-video ripple-white"
              href="#"
              onClick={handleLinkClick}
            >
              <VideoPlayTwo />
            </Link>
          )}
        </div>
      )}

      <div className="postbox-content-box">
        <div className="it-blog-meta mb-15">
          <span>
            <i className="fa-regular fa-user"></i>
            {blog.blogAuthor}
          </span>
          <span>
            <i className="fa-regular fa-calendar"></i>
            {blog.publishedDate}
          </span>
          <span>
            <i className="fa-regular fa-comment"></i>
            Comment ({blog.commentCount})
          </span>
        </div>
        <h4 className="postbox-title">
          <Link href={`/blog-details-right-sidebar/${blog.id}`}>
            {blog.title}
          </Link>
        </h4>
        <p className="mb-25">{blog.description}</p>
        <Link
          className="it-btn-orange"
          href={`/blog-details-right-sidebar/${blog.id}`}
        >
          {blog.btnText || 'More Details'}
        </Link>
      </div>
    </div>
  );
};
export default BlogItemTwo;
