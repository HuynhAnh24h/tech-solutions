import { useEffect, useRef, useState } from 'react';

const useScrollFadeIn = (animation = 'fade-up', delay = 0, duration = 0.8) => {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const style = {
    animation: visible
      ? `${animation} ${duration}s ease-out forwards`
      : 'none',
    animationDelay: `${delay}s`,
    opacity: 0,
  };

  return { ref: elementRef, style };
};

export default useScrollFadeIn;
