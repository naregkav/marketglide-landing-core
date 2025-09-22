'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  HTMLMotionProps,
  motion,
  MotionValue,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import { useSmootherScroll } from '@/hooks/useSmootherScroll';

interface ScrollXCarouselContextValue {
  scrollYProgress: MotionValue<number>;
  springX: MotionValue<number>;
}

const ScrollXCarouselContext =
  React.createContext<ScrollXCarouselContextValue | null>(null);

function useScrollXCarousel() {
  const context = React.useContext(ScrollXCarouselContext);
  if (!context) {
    throw new Error('useScrollXCarousel must be used within a ScrollXCarousel');
  }
  return context;
}

export function ScrollXCarousel({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress, springX } = useSmootherScroll(carouselRef, {
    tension: 100,
    friction: 30,
    mass: 0.8
  });
  
  return (
    <ScrollXCarouselContext.Provider value={{ scrollYProgress, springX }}>
      <div
        ref={carouselRef}
        className={cn('relative w-screen max-w-full', className)}
        {...props}
      >
        {children}
      </div>
    </ScrollXCarouselContext.Provider>
  );
}

export function ScrollXCarouselContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('sticky overflow-hidden w-full top-0 left-0', className)}
      {...props}
    />
  );
}

export function ScrollXCarouselWrap({
  className,
  style,
  xRange = ['-0%', '-80%'],
  ...props
}: HTMLMotionProps<'div'> & { xRange?: unknown[] }) {
  const { springX } = useScrollXCarousel();
  
  // Apply progressive easing to the transform range
  const x = useTransform(springX, [0, 1], xRange);
  
  // Add subtle parallax effect to individual cards
  const y = useTransform(springX, [0, 1], ['0px', '-20px']);

  return (
    <motion.div
      className={cn('w-fit', className)}
      style={{ x, y, ...style }}
      {...props}
    />
  );
}

export function ScrollXCarouselProgress({
  className,
  style,
  progressStyle,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { progressStyle?: string }) {
  const { scrollYProgress } = useScrollXCarousel();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  return (
    <div className={cn('max-w-screen overflow-hidden', className)} {...props}>
      <motion.div
        className={cn('origin-left', progressStyle)}
        style={{ scaleX, ...style }}
      />
    </div>
  );
}