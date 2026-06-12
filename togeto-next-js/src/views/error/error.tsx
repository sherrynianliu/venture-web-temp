'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import Wrapper from '@/layouts/wrapper';

import errorImg from '@/assets/img/about/error.png';
import Breadcrumb from '@/components/bradcrumb/breadcrumb';
import { fadeAnimation, splitAnimation } from '@/utils/title-animation';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import Header from '@/layouts/headers/header';
import FooterTwo from '@/layouts/footers/footer-two';

// Props Type
type ErrorProps = {
  errorMessage?: string;
  onRetry?: () => void;
};

const ErrorMain = ({ errorMessage, onRetry }: ErrorProps) => {
  // GSAP animations
  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      splitAnimation();
    }, LOADING_ANIMATION_TIMEOUT);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <Header />

      <main>
        <Breadcrumb
          title={errorMessage ? 'Something Went Wrong' : '404 Error'}
          subtitle="Error"
        />

        {/* Error Area */}

        <div className="it-error-area pt-130 pb-125">
          <div className="container">
            {!errorMessage && (
              <div className="row justify-content-center">
                <div className="col-xxl-12 col-xl-7 col-lg-7 col-md-9">
                  <div
                    className="it-error-thumb text-center mb-120 wow animate__fadeInUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".3s"
                  >
                    <Image
                      className="image-height-auto"
                      src={errorImg}
                      alt="error-img"
                      width={1065}
                      height={583}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="row">
              <div className="col-12">
                <div className="it-error-content text-center">
                  <h5 className="it-section-title pb-40 it-split-text it-split-in-right">
                    {errorMessage
                      ? 'Something went wrong!'
                      : 'We’re Sorry Page Not Found'}
                  </h5>

                  {errorMessage && <p>{errorMessage}</p>}

                  <div
                    className="it-fade-anim"
                    data-fade-from="top"
                    data-ease="bounce"
                    data-delay=".5"
                  >
                    {onRetry ? (
                      <button onClick={onRetry} className="it-custom-btn">
                        Try Again
                      </button>
                    ) : (
                      <Link className="it-btn-orange" href="/">
                        <span>Back To Home Page</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Area */}
      </main>

      <FooterTwo />
    </Wrapper>
  );
};
export default ErrorMain;
