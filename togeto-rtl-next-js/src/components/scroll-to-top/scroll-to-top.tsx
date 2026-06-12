'use client';

import { useEffect, useState } from 'react';

interface ScrollToTopProps {
  threshold?: number; // Optional scroll threshold
}

const ScrollToTop = ({ threshold = 200 }: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 200 pixels
    const toggleVisibility = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  return (
    <>
      {isVisible && (
        <button
          className="scroll-top scroll-to-target open"
          onClick={() => scrollToTop()}
          aria-label="Scroll to top"
        >
          <i className="far fa-angle-double-up"></i>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
