import { useState, useRef, useEffect } from 'react';

export default function DraggableCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDistance, setSwipeDistance] = useState(0);
  const carouselRef = useRef(null);
  
  const items = [
    {
      id: 1,
      title: "Mountain View",
      description: "Beautiful landscape with mountains and lakes",
      color: "bg-blue-500",
      image: "https://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg"
    },
    {
      id: 2,
      title: "Beach Paradise",
      description: "Tropical beach with palm trees and clear water",
      color: "bg-yellow-500",
      image: "https://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg"
    },
    {
      id: 3,
      title: "Desert Sunset",
      description: "Amazing sunset over sand dunes",
      color: "bg-orange-500",
      image: "https://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg"
    },
    {
      id: 4,
      title: "Forest Hike",
      description: "Dense forest trail with sunlight through trees",
      color: "bg-green-500",
      image: "https://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg"
    },
    {
      id: 5,
      title: "City Lights",
      description: "Urban skyline with colorful night lights",
      color: "bg-purple-500",
      image: "https://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg"
    }
  ];

  // Handle dragging/swiping
  const handleStart = (e) => {
    setIsSwiping(true);
    setStartX(e.type.includes('mouse') ? e.pageX : e.touches[0].pageX);
  };

  const handleMove = (e) => {
    if (!isSwiping) return;
    
    const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const distance = currentX - startX;
    setSwipeDistance(distance);
  };

  const handleEnd = () => {
    if (!isSwiping) return;
    
    const threshold = 100; // Minimum distance to trigger slide change
    
    if (swipeDistance < -threshold) {
      // Swiped left - go to next
      goToSlide((activeIndex + 1) % items.length);
    } else if (swipeDistance > threshold) {
      // Swiped right - go to previous
      goToSlide((activeIndex - 1 + items.length) % items.length);
    }
    
    // Reset swipe state
    setIsSwiping(false);
    setSwipeDistance(0);
  };

  // Navigate to a specific slide
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Auto-advance carousel (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto cursor-pointer">      
      {/* Carousel container */}
      <div 
        ref={carouselRef}
        className="relative w-full overflow-hidden rounded-lg cursor-grab"
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        style={{ touchAction: 'pan-y' }}
      >
        {/* Carousel track */}
        <div 
          className="flex transition-transform duration-300 ease-out h-64"
          style={{ 
            transform: `translateX(calc(-${activeIndex * 100}% + ${swipeDistance}px))`,
          }}
        >
          {items.map((item) => (
            <div 
              key={item.id}
              className={`flex-shrink-0 w-full h-full flex flex-col items-center justify-center text-white p-6`}
            >
             <img draggable={false} src={item.image} alt={item.title}/>
            </div>
          ))}
        </div>
      </div>
      
      {/* Pagination dots */}
      <div className="flex space-x-2 mt-16">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}