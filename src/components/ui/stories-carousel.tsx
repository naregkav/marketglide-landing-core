import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
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
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((prevIndex) => 
            prevIndex === stories.length - 1 ? 0 : prevIndex + 1
          );
          return 0;
        }
        return prev + (100 / (autoPlayInterval / 50));
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [isPlaying, autoPlayInterval, stories.length]);

  useEffect(() => {
    setProgress(0);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? stories.length - 1 : currentIndex - 1);
    setProgress(0);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === stories.length - 1 ? 0 : currentIndex + 1);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (stories.length === 0) return null;

  return (
    <div className={`relative w-full ${className}`}>
      {/* Progress Bar */}
      {isPlaying && (
        <div className="absolute top-0 left-0 right-0 z-20 h-1 bg-white/20 backdrop-blur-sm">
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Main Story Display */}
      <div className="relative h-80 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
        <div 
          className="flex transition-all duration-700 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {stories.map((story, index) => (
            <div
              key={story.id}
              className="w-full flex-shrink-0 relative"
            >
              <div 
                className="w-full h-full bg-cover bg-center relative transform transition-all duration-700"
                style={{ 
                  backgroundImage: `url(${story.image})`,
                  transform: index === currentIndex ? 'scale(1)' : 'scale(1.05)'
                }}
              >
                {/* Premium Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
                
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-3xl animate-pulse" />
                  <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-accent/30 to-transparent blur-3xl animate-pulse delay-1000" />
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                  <div className="transform transition-all duration-500 ease-out">
                    {story.category && (
                      <div className="mb-4">
                        <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white shadow-lg">
                          <div className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse" />
                          {story.category}
                        </span>
                      </div>
                    )}
                    
                    <h3 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
                      <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                        {story.title}
                      </span>
                    </h3>
                    
                    {story.description && (
                      <p className="text-white/90 text-base md:text-lg max-w-3xl leading-relaxed backdrop-blur-sm bg-black/20 p-4 rounded-lg border border-white/10">
                        {story.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Navigation Controls */}
        <div className="absolute top-6 right-6 z-10 flex space-x-3">
          {/* Play/Pause Button */}
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 bg-black/20 backdrop-blur-md border border-white/20 hover:bg-black/30 text-white shadow-lg transition-all duration-300 hover:scale-105"
            onClick={togglePlayPause}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
          </Button>
        </div>

        {/* Premium Navigation Arrows */}
        {showArrows && stories.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/20 backdrop-blur-md border border-white/20 hover:bg-black/30 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-x-1"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-7 w-7" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/20 backdrop-blur-md border border-white/20 hover:bg-black/30 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:translate-x-1"
              onClick={goToNext}
            >
              <ChevronRight className="h-7 w-7" />
            </Button>
          </>
        )}
      </div>

      {/* Enhanced Dots Indicator */}
      {showDots && stories.length > 1 && (
        <div className="flex justify-center mt-8 space-x-3">
          {stories.map((_, index) => (
            <button
              key={index}
              className={`relative transition-all duration-500 rounded-full ${
                index === currentIndex 
                  ? 'w-12 h-3 bg-gradient-to-r from-primary to-accent shadow-lg' 
                  : 'w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-125'
              }`}
              onClick={() => goToSlide(index)}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Premium Thumbnail Strip */}
      <div className="mt-10 relative">
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {stories.map((story, index) => (
            <button
              key={story.id}
              className={`group flex-shrink-0 relative transition-all duration-500 ${
                index === currentIndex 
                  ? 'scale-110' 
                  : 'scale-100 hover:scale-105'
              }`}
              onClick={() => goToSlide(index)}
            >
              <div className={`w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden shadow-lg transition-all duration-500 ${
                index === currentIndex 
                  ? 'ring-3 ring-primary shadow-2xl shadow-primary/25' 
                  : 'opacity-60 hover:opacity-90 ring-1 ring-white/20'
              }`}>
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${story.image})` }}
                />
                <div className={`absolute inset-0 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-t from-primary/30 to-transparent' 
                    : 'bg-black/20 group-hover:bg-black/10'
                }`} />
              </div>
              
              {/* Active Indicator */}
              {index === currentIndex && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary animate-pulse shadow-lg" />
              )}
              
              {/* Category Label */}
              {story.category && (
                <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-xs font-medium transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary text-white opacity-100' 
                    : 'bg-muted text-muted-foreground opacity-0 group-hover:opacity-80'
                }`}>
                  {story.category}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};