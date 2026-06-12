'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface ProgressProps {
  itemClass?: string;
  value: string | number;
  delay?: number;
}

const ProgressItem = ({ itemClass, value, delay }: ProgressProps) => {
  const [width, setWidth] = useState<number>(0);
  const progressRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isVisible) {
        setWidth(typeof value === 'string' ? parseFloat(value) : value);
        window.removeEventListener('scroll', handleScroll);
      }
    }
  }, [value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
    }, delay || 1500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, delay]);

  const style = {
    width: `${width}%`,
    transition: 'width ease-in-out 1.5s',
  };

  return (
    <div
      className={itemClass ? itemClass : 'it-progress-bar'}
      ref={progressRef}
    >
      <div className="progress">
        <div className="progress-bar" style={style}>
          <span>{value ? value : '90'}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressItem;
