import React, { useEffect, useRef, ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'teal' | 'green';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
  style?: React.CSSProperties;
}

// MarketGlide color mapping using HSL values from design system
const glowColorMap = {
  blue: { base: 217, saturation: 91, lightness: 35, spread: 200 }, // Primary glow
  teal: { base: 189, saturation: 94, lightness: 43, spread: 200 }, // Accent
  green: { base: 142, saturation: 76, lightness: 36, spread: 200 }, // Success
};

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96'
};

const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'blue',
  size = 'md',
  width,
  height,
  customSize = false,
  style = {}
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;
      
      if (cardRef.current) {
        cardRef.current.style.setProperty('--x', x.toFixed(2));
        cardRef.current.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
        cardRef.current.style.setProperty('--y', y.toFixed(2));
        cardRef.current.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
      }
    };

    document.addEventListener('pointermove', syncPointer);
    return () => document.removeEventListener('pointermove', syncPointer);
  }, []);

  const { base, saturation, lightness, spread } = glowColorMap[glowColor];

  const getSizeClasses = () => {
    if (customSize) {
      return '';
    }
    return sizeMap[size];
  };

  const getInlineStyles = () => {
    const baseStyles: React.CSSProperties = {
      '--base': base,
      '--saturation': saturation,
      '--lightness': lightness,
      '--spread': spread,
      '--radius': '14',
      '--border': '2',
      '--backdrop': 'hsl(var(--card))',
      '--backup-border': 'hsl(var(--border))',
      '--size': '180',
      '--outer': '1',
      '--border-size': 'calc(var(--border, 2) * 1px)',
      '--spotlight-size': 'calc(var(--size, 180) * 1px)',
      '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
      '--bg-spot-opacity': '0.1',
      '--border-spot-opacity': '0.8',
      '--border-light-opacity': '0.4',
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--base) calc(var(--saturation) * 1%) calc(var(--lightness) * 1%) / var(--bg-spot-opacity, 0.1)), transparent
      )`,
      backgroundColor: 'var(--backdrop)',
      backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
      backgroundPosition: '50% 50%',
      backgroundAttachment: 'fixed',
      border: 'var(--border-size) solid var(--backup-border)',
      position: 'relative',
      touchAction: 'none',
    } as React.CSSProperties;

    if (width !== undefined) {
      baseStyles.width = typeof width === 'number' ? `${width}px` : width;
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === 'number' ? `${height}px` : height;
    }

    return baseStyles;
  };

  const beforeAfterStyles = `
    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-attachment: fixed;
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
    }
    
    [data-glow]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--base) calc(var(--saturation) * 1%) calc(var(--lightness) * 1%) / var(--border-spot-opacity, 0.8)), transparent 100%
      );
      filter: brightness(1.5);
    }
    
    [data-glow]::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(0 0% 100% / var(--border-light-opacity, 0.4)), transparent 100%
      );
    }
    
    [data-glow] [data-glow] {
      position: absolute;
      inset: 0;
      will-change: filter;
      opacity: var(--outer, 1);
      border-radius: calc(var(--radius) * 1px);
      border-width: calc(var(--border-size) * 20);
      filter: blur(calc(var(--border-size) * 10));
      background: none;
      pointer-events: none;
      border: none;
    }
    
    [data-glow] > [data-glow]::before {
      inset: -10px;
      border-width: 10px;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        style={{ ...getInlineStyles(), ...style }}
        className={`
          ${getSizeClasses()}
          ${!customSize ? 'aspect-[3/4]' : ''}
          rounded-2xl 
          relative 
          grid 
          shadow-large
          backdrop-blur-sm
          transition-all
          duration-300
          ${className}
        `}
      >
        <div ref={innerRef} data-glow></div>
        {children}
      </div>
    </>
  );
};

export { GlowCard };