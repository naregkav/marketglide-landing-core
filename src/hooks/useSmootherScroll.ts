import { useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

// Custom easing functions for smoother animations
const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);
const easeInOutQuart = (t: number): number => 
  t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

export interface SmoothScrollOptions {
  tension?: number;
  friction?: number;
  mass?: number;
  easing?: (t: number) => number;
}

export function useSmootherScroll(
  targetRef: RefObject<HTMLElement>,
  options: SmoothScrollOptions = {}
) {
  const {
    tension = 120,
    friction = 40,
    mass = 1,
    easing = easeInOutQuart
  } = options;

  // Get scroll progress for this specific section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // Apply custom easing to scroll progress
  const easedProgress = useTransform(scrollYProgress, [0, 1], [0, 1], {
    ease: easing
  });

  // Create spring-based motion values for smoother animations
  const springX = useSpring(easedProgress, { 
    stiffness: tension,
    damping: friction,
    mass
  });

  const springRotation = useSpring(easedProgress, { 
    stiffness: tension * 0.8,
    damping: friction * 1.2,
    mass: mass * 1.1
  });

  return {
    scrollYProgress: easedProgress,
    springX,
    springRotation,
    rawProgress: scrollYProgress
  };
}