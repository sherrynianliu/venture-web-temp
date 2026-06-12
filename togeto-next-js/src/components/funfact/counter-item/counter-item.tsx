'use client';

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
  start: number;
  end: number;
  duration: number;
  counterSuffix?: string;
}

const Counter = ({ start, end, duration, counterSuffix }: CounterProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={ref} role="status" aria-live="polite">
      {inView ? <CountUp start={start} end={end} duration={duration} /> : start}
      {counterSuffix && counterSuffix}
    </div>
  );
};

export default Counter;
