'use client';

import { useEffect } from 'react';

/**
 * Layers the existing WOW.js scroll-reveal motion onto the verbatim Venture
 * section markup WITHOUT editing the ported components. It tags a curated set
 * of elements with `wow animate__…` (+ staggered `data-wow-delay`) on mount,
 * so the classes are present in the DOM before `Wrapper` initialises WOW.js
 * after the preloader. The final, settled design is unchanged — only the
 * entrance animates, preserving the exact reference look.
 *
 * Safe because every Venture section component is static (no state); only the
 * isolated hero slider re-renders, so React never reconciles these nodes and
 * the injected classes persist.
 */

type RevealGroup = { sel: string; anim?: string; stagger?: number };

const GROUPS: RevealGroup[] = [
  { sel: '.core-services__head' },
  { sel: '.core-grid .product-card', stagger: 0.08 },

  { sel: '.identity__content' },
  { sel: '.identity-feature', stagger: 0.06 },
  { sel: '.identity__stat', anim: 'animate__fadeInRight' },

  { sel: '.cap__head' },
  { sel: '.cap-feature', stagger: 0.08 },
  { sel: '.cap__media', anim: 'animate__fadeIn' },

  { sel: '.project-path__header' },
  { sel: '.project-path__step', stagger: 0.07 },

  { sel: '.catalog__text' },
  { sel: '.catalog__media', anim: 'animate__fadeInRight' },

  { sel: '.factory__head' },

  { sel: '.home-section--dark .section-header' },
  { sel: '.dark-panel' },

  { sel: '.teaser-row > *', stagger: 0.1 },

  { sel: '.home-blog__intro' },
  { sel: '.home-blog__cards .blog-card', stagger: 0.1 },

  { sel: '.home-faq__head' },
  { sel: '.faq-item', stagger: 0.06 },

  { sel: '.final-cta__inner' },
];

export function useVentureReveals() {
  useEffect(() => {
    const root = document.querySelector('.venture-site');
    if (!root) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    GROUPS.forEach(({ sel, anim = 'animate__fadeInUp', stagger }) => {
      root.querySelectorAll<HTMLElement>(sel).forEach((el, i) => {
        el.classList.add('wow', anim);
        el.dataset.wowDuration = '0.9s';
        if (stagger) el.dataset.wowDelay = `${(i % 6) * stagger}s`;
      });
    });
  }, []);
}
