import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const endNum = parseInt(end);
      if (start === endNum) return;

      let totalMilisecondsStep = Math.max(duration * 1000 / endNum, 1);
      
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === endNum) clearInterval(timer);
      }, totalMilisecondsStep);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}
