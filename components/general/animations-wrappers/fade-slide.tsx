"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type FadeSlidePropsT = {
  children: ReactNode;
  duration?: number;
  y?: number;
};

/**
 * Workaround: Safari skips Framer Motion's initial mount animation
 * (opacity + translateY) — the element jumps to its final state instead
 * of animating. Using plain CSS transitions + a forced reflow avoids
 * the issue entirely since the browser compositor handles them natively.
 */
export function FadeSlide({ children, duration = 0.5, y = 50 }: FadeSlidePropsT) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Force browser to commit the initial hidden state before transitioning
    void el.offsetHeight;

    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
      }}
    >
      {children}
    </div>
  );
}
