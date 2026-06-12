'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import ScrollToTop from '@/components/scroll-to-top/scroll-to-top';
import Preloader from '@/components/preloader/preloader';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import { ToastContainer } from 'react-toastify';

// Bootstrap JS import (Client-side only)
if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap.bundle.min');
}

// Props Type
interface WrapperProps {
  children: React.ReactNode;
  scrollBackToTop?: boolean;
}

const Wrapper = ({ children, scrollBackToTop = true }: WrapperProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const pathname = usePathname();

  // Dynamically import WOW.js (Client-side only)
  const loadWowJs = useCallback(() => {
    if (typeof window !== 'undefined') {
      import('wowjs').then(({ WOW }) => {
        requestAnimationFrame(() => {
          const wow = new WOW({
            live: false,
            animateClass: 'animate__animated',
          });
          wow.init();
        });
      });
    }
  }, []);

  // Handle loading state with a timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      loadWowJs(); // Initialize WOW.js after preloader finishes
    }, LOADING_ANIMATION_TIMEOUT);

    return () => clearTimeout(timer);
  }, [pathname, loadWowJs]);

  return (
    <>
      {/* Preloader */}
      {isLoading && (
        <div role="status" aria-live="polite">
          <Preloader />
        </div>
      )}

      {/* Content */}
      <div className={isLoading ? 'content-hidden' : 'content-visible'}>
        {children}
        {scrollBackToTop && <ScrollToTop threshold={200} />}
        <ToastContainer />
      </div>
    </>
  );
};

export default Wrapper;
