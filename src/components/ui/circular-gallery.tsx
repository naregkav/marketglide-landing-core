import React, { useState, useEffect, useRef, HTMLAttributes } from 'react';
import { cn } from "@/lib/utils";
import { useSmootherScroll } from '@/hooks/useSmootherScroll';

// Define the type for a single gallery item
export interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string; 
    text: string;
    pos?: string;
    by: string;
  };
}

// Define the props for the CircularGallery component
interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  /** Controls how far the items are from the center. */
  radius?: number;
  /** Controls the speed of auto-rotation when not scrolling. */
  autoRotateSpeed?: number;
  /** Parent section ref for scroll detection */
  sectionRef?: React.RefObject<HTMLElement>;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 600, autoRotateSpeed = 0.01, sectionRef, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [autoRotationOffset, setAutoRotationOffset] = useState(0);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const lastScrollRotation = useRef(0);
    
    // Use section-specific scroll detection if sectionRef is provided
    const { springRotation } = sectionRef 
      ? useSmootherScroll(sectionRef, { tension: 80, friction: 35 })
      : { springRotation: null };

    // Effect to handle scroll-based rotation with section detection
    useEffect(() => {
      if (springRotation) {
        // Use section-based smooth rotation
        const unsubscribe = springRotation.on('change', (latest) => {
          setIsScrolling(true);
          const scrollRotation = latest * 720; // Two full rotations through the section
          setRotation(scrollRotation + autoRotationOffset);
          lastScrollRotation.current = scrollRotation;
          
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }
          
          scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
          }, 200);
        });
        
        return unsubscribe;
      } else {
        // Fallback to global scroll for backward compatibility
        const handleScroll = () => {
          setIsScrolling(true);
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }

          const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
          const scrollRotation = scrollProgress * 360;
          setRotation(scrollRotation + autoRotationOffset);
          lastScrollRotation.current = scrollRotation;

          scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
          }, 150);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
          window.removeEventListener('scroll', handleScroll);
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }
        };
      }
    }, [springRotation, autoRotationOffset]);

    // Effect for smooth auto-rotation when not scrolling
    useEffect(() => {
      const autoRotate = () => {
        if (!isScrolling) {
          setAutoRotationOffset(prev => prev + autoRotateSpeed);
          setRotation(lastScrollRotation.current + autoRotationOffset);
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current = requestAnimationFrame(autoRotate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isScrolling, autoRotateSpeed, autoRotationOffset]);

    const anglePerItem = 360 / items.length;
    
    return (
      <div
        ref={ref}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn("relative w-full h-full flex items-center justify-center", className)}
        style={{ perspective: '2000px' }}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
            const opacity = Math.max(0.3, 1 - (normalizedAngle / 180));

            return (
              <div
                key={item.photo.url} 
                role="group"
                aria-label={item.common}
                className="absolute w-[300px] h-[400px]"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: '-150px',
                  marginTop: '-200px',
                  opacity: opacity,
                  transition: 'opacity 0.3s linear'
                }}
              >
                <div className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden group border border-border bg-card/70 dark:bg-card/30 backdrop-blur-lg">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h2 className="text-xl font-bold">{item.common}</h2>
                    <em className="text-sm italic opacity-80">{item.binomial}</em>
                    <p className="text-xs mt-2 opacity-70">Photo by: {item.photo.by}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };