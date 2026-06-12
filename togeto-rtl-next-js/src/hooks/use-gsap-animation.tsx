'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from '@/plugins';

gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimations = () => {
  useGSAP(() => {
    if (typeof window === 'undefined') return;

    // Store animations and ScrollTriggers for cleanup
    const animations: gsap.core.Timeline[] = [];
    const scrollTriggers: ScrollTrigger[] = [];

    const animateElement = (
      selector: string,
      fromVars: gsap.TweenVars,
      toVars: gsap.TweenVars
    ) => {
      const element = document.querySelector(selector);
      if (!element) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: selector,
          start: 'top 70%',
          end: 'bottom 0%',
          scrub: 2,
        },
      });

      tl.fromTo(selector, fromVars, toVars);
      animations.push(tl);
      scrollTriggers.push(tl.scrollTrigger as ScrollTrigger);
    };

    // Hero Image Pinning
    const heroThumb = document.querySelector('.it-hero-thumb-wrap');
    if (heroThumb) {
      const pinTrigger = ScrollTrigger.create({
        trigger: '.it-hero-thumb-wrap',
        start: 'top 65',
        end: 'bottom 0%',
        pin: '.it-hero-thumb',
        pinSpacing: false,
      });

      scrollTriggers.push(pinTrigger);
    }

    // Apply animations
    animateElement(
      '.plan-down',
      { x: 200, y: -80 },
      { x: -100, y: 0, duration: 1.6 }
    );
    animateElement(
      '.plan-down2',
      { x: -200, y: -80 },
      { x: 100, y: 0, duration: 1.6 }
    );
    animateElement('.truck', { x: 0 }, { x: 200, duration: 1.2 });
    animateElement('.train', { x: 0 }, { x: -100, duration: 1.2 });
    animateElement('.ship', { x: 100 }, { x: -100, duration: 1.2 });

    // Zoom Image Effect
    const zoomSelectors = ['.zoom-img img', '.big-img-zoom img'];

    zoomSelectors.forEach((selector) => {
      const zoomImg = document.querySelector(selector);
      if (zoomImg) {
        const zoomTl = gsap
          .timeline({
            scrollTrigger: {
              trigger: selector,
              scrub: 2,
            },
          })
          .fromTo(selector, { scale: 1 }, { scale: 1.5, duration: 0.5 });

        animations.push(zoomTl);
        scrollTriggers.push(zoomTl.scrollTrigger as ScrollTrigger);
      }
    });

    // Cleanup animations on unmount
    return () => {
      animations.forEach((tl) => tl.kill());
      scrollTriggers.forEach((trigger) => trigger?.kill());
      ScrollTrigger.refresh();
    };
  }, []);
};
