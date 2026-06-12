'use client';

import { useEffect } from 'react';

// Props type declaration
type RevealBGAnimProps = {
  revealItemRef: React.RefObject<HTMLDivElement>;
  revealBgIndex: number; // Index of the child element to move
};

const useRevealBgAnim = ({
  revealItemRef,
  revealBgIndex,
}: RevealBGAnimProps) => {
  useEffect(() => {
    const itemElement = revealItemRef.current;
    if (!itemElement) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = itemElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const bgElement = itemElement.children[revealBgIndex] as HTMLElement;
      if (bgElement) {
        bgElement.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    itemElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      itemElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, [revealItemRef, revealBgIndex]); // Dependencies
};

export default useRevealBgAnim;
