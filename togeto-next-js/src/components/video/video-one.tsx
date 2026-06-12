'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { openModal } from '@/redux/slices/modal-slice';
import ModalVideoWrapper from '../modal-video/modal-video';
import { VideoPlay } from '../svg';

import videoImg from '@/assets/img/video/video-4.jpg';

const VideoOne = () => {
  const dispatch = useAppDispatch();

  // Handler for opening modal video
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(openModal('YoOG5H4603Y'));
  };
  return (
    <div className="it-video-area black-bg pt-130 pb-130">
      {/* Modal Video Wrapper */}
      <ModalVideoWrapper />
      {/* Modal Video Wrapper */}

      <div className="container">
        <div className="mb-60">
          <div className="row">
            <div className="col-lg-6">
              <div className="it-section-title-box">
                <h4 className="it-section-title text-white it-split-text it-split-in-right">
                  Revolutionizing Sustainable Rail Freight
                </h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="it-video-text text-lg-end it-text-anim">
                <p className="mb-0">
                  Our mission is to provide reliable, <br />
                  efficient, and eco-friendly train transport <br />
                  connecting people and businesses seamlessly
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div
              className="it-video-wrap p-relative wow img-anim-top"
              data-wow-duration="1.5s"
              data-wow-delay="0.1"
            >
              <div className="it-video-thumb">
                <Image
                  className="image-height-auto"
                  src={videoImg}
                  alt="video-img"
                  width={1320}
                  height={496}
                />
              </div>
              <div className="it-video-icon">
                <Link
                  href="#"
                  className="popup-video ripple-white"
                  onClick={handleLinkClick}
                >
                  <span>
                    <VideoPlay />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoOne;
