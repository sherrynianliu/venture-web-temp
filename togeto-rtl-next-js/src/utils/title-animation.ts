import gsap from 'gsap';

import { ScrollTrigger, SplitText } from '@/plugins';

gsap.registerPlugin(ScrollTrigger, SplitText);

// Split Animation
export const splitAnimation = (): void => {
  const elements = document.querySelectorAll('.it-split-text');

  if (elements.length === 0) return;

  elements.forEach((el) => {
    const element = el as HTMLElement;

    // Initialize SplitText
    const split = new SplitText(element, {
      type: 'lines,words,chars',
      linesClass: 'it-split-line',
    });

    gsap.set(element, { perspective: 400 });

    // Set initial animation states based on classes
    if (element.classList.contains('it-split-in-right')) {
      gsap.set(split.chars, {
        opacity: 0,
        x: 50,
        ease: 'Back.easeOut',
      });
    }

    if (element.classList.contains('it-split-in-left')) {
      gsap.set(split.chars, {
        opacity: 0,
        x: -50,
        ease: 'circ.out',
      });
    }

    if (element.classList.contains('it-split-in-up')) {
      gsap.set(split.chars, {
        opacity: 0,
        y: 80,
        ease: 'circ.out',
      });
    }

    if (element.classList.contains('it-split-in-down')) {
      gsap.set(split.chars, {
        opacity: 0,
        y: -80,
        ease: 'circ.out',
      });
    }

    // Create the animation
    gsap.to(split.chars, {
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
      },
      x: 0,
      y: 0,
      rotateX: 0,
      scale: 1,
      opacity: 1,
      duration: 0.8,
      stagger: 0.02,
    });
  });
};

// Text Animation
export const textAnimation = (): void => {
  const splitTextLines = gsap.utils.toArray<HTMLElement>('.it-text-anim p');

  splitTextLines.forEach((splitTextLine) => {
    if (!splitTextLine) return;

    // Ensure GSAP clears initial inline styles to avoid conflicts
    gsap.set(splitTextLine, { clearProps: 'all', opacity: 1 });

    // Split text into lines using GSAP SplitText plugin
    const itemSplitted = new SplitText(splitTextLine, { type: 'lines' });

    gsap.set(splitTextLine, { perspective: 400 }); // Adds 3D effect

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: 'top 90%',
        end: 'bottom 60%',
        scrub: false,
        markers: false,
        toggleActions: 'play none none none',
      },
    });

    // Animate each line
    tl.from(itemSplitted.lines, {
      opacity: 0, // Start with opacity 0
      rotationX: -80,
      y: 20, // Slight upward movement for better effect
      duration: 1,
      force3D: true,
      transformOrigin: 'top center -50',
      stagger: 0.1,
    });
  });
};

// Fade Animation
export const fadeAnimation = (): void => {
  const fadeElements = document.querySelectorAll<HTMLElement>('.it-fade-anim');

  fadeElements.forEach((item) => {
    const fadeOffset = parseFloat(item.dataset.fadeOffset || '50');
    const duration = parseFloat(item.dataset.duration || '1.5');
    const fadeFrom = item.dataset.fadeFrom || 'bottom';
    const delay = parseFloat(item.dataset.delay || '0.3');
    const ease = item.dataset.ease || 'power3.out';

    const fromVars: gsap.TweenVars = { opacity: 0 };
    const toVars: gsap.TweenVars = {
      opacity: 1,
      duration,
      ease,
      delay,
      scrollTrigger: {
        trigger: item,
        start: 'top 85%', // Adjust the trigger point
        toggleActions: 'play none none none',
      },
    };

    // Directional offset setup
    if (fadeFrom === 'top') fromVars.y = -fadeOffset;
    else if (fadeFrom === 'bottom') fromVars.y = fadeOffset;
    else if (fadeFrom === 'left') fromVars.x = -fadeOffset;
    else if (fadeFrom === 'right') fromVars.x = fadeOffset;

    toVars.x = 0; // Reset x
    toVars.y = 0; // Reset y

    gsap.fromTo(item, fromVars, toVars);
  });
};
