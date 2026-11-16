'use client';

import React, { useEffect, useRef, useState } from 'react';

/**
 * LazySection Component
 * ──────────────────────
 * Lazily reveals content as the user scrolls down for the first time.
 * Once revealed, the section stays visible permanently and will not
 * re-animate or unload when scrolling back up and down.
 */
export default function LazySection({
  children,
  id,
  className = '',
  style = {},
  threshold = 0.08,
  rootMargin = '0px 0px -50px 0px',
  delay = 0,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    // Fallback for environments without IntersectionObserver support
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing so the lazy load animation only runs once
          observer.unobserve(node);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return (
    <div
      ref={domRef}
      id={id}
      className={`lazy-section ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{
        ...(delay > 0 ? { transitionDelay: `${delay}ms` } : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
}

