import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Story {
  id: string;
  title: string;
  image: string;
  description?: string;
  category?: string;
}

interface StoriesCarouselProps {
  stories: Story[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

export const StoriesCarousel: React.FC<StoriesCarouselProps> = ({
  stories,
  autoPlay = false,
  autoPlayInterval = 3000,
  showDots = true,
  showArrows = true,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === stories.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, stories.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? stories.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === stories.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (stories.length === 0) return null;

  return (
    <div className={`relative w-full ${className}`}>
      {/* Main Story Display */}
      <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5">
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {stories.map((story, index) => (
            <div
              key={story.id}
              className="w-full flex-shrink-0 relative"
            >
              <div 
                className="w-full h-full bg-cover bg-center relative"
                style={{ 
                  backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url(${story.image})` 
                }}
              >
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-white">
                    {story.category && (
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-3">
                        {story.category}
                      </span>
                    )}
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {story.title}
                    </h3>
                    {story.description && (
                      <p className="text-white/90 text-sm md:text-base max-w-2xl">
                        {story.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showArrows && stories.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white"
              onClick={goToNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {showDots && stories.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {stories.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}

      {/* Thumbnail Strip */}
      <div className="mt-6 flex space-x-4 overflow-x-auto pb-2">
        {stories.map((story, index) => (
          <button
            key={story.id}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentIndex 
                ? 'ring-2 ring-primary scale-105' 
                : 'opacity-70 hover:opacity-100'
            }`}
            onClick={() => goToSlide(index)}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${story.image})` }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};