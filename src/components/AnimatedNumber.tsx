import React, { useEffect, useRef, useState } from 'react';

interface AnimatedNumberProps {
  value: number;
  duration?: number; // ms
  className?: string;
  suffix?: string;
  animate?: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 1200, className = '', suffix = '', animate = true }) => {
  const [display, setDisplay] = useState(animate ? 0 : value);
  const raf = useRef<number>();
  const start = useRef<number>();
  const from = useRef<number>(0);

  useEffect(() => {
    if (!animate) {
      setDisplay(0);
      return;
    }
    from.current = display;
    const animateFn = (timestamp: number) => {
      if (!start.current) start.current = timestamp;
      const progress = Math.min((timestamp - start.current) / duration, 1);
      const current = Math.floor(from.current + (value - from.current) * progress);
      setDisplay(current);
      if (progress < 1) {
        raf.current = requestAnimationFrame(animateFn);
      } else {
        setDisplay(value);
        start.current = undefined;
      }
    };
    raf.current = requestAnimationFrame(animateFn);
    return () => raf.current && cancelAnimationFrame(raf.current);
    // eslint-disable-next-line
  }, [value, animate]);

  return <span className={className}>{display}{suffix}</span>;
};

export default AnimatedNumber;
