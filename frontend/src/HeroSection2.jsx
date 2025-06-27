import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: "https://picsum.photos/1920/1080?random=1",
      highlight: "Trust.",
      heading: "Built over decades.",
      subtext:
        "Earning confidence through consistent quality and patient-first values.",
      textPosition: "right", // Text on left
    },
    {
      id: 2,
      image: "https://picsum.photos/1920/1080?random=2",
      highlight: "Care.",
      heading: "Empowering patients.",
      subtext: "Dedicated to delivering compassionate healthcare globally.",
      textPosition: "left", // Text on right
    },
    {
      id: 3,
      image: "https://picsum.photos/1920/1080?random=3",
      highlight: "Innovation.",
      heading: "Driven by science.",
      subtext: "Transforming treatment through cutting-edge research.",
      textPosition: "right", // Text on left
    },
    {
      id: 4,
      image: "https://picsum.photos/1920/1080?random=4",
      highlight: "Excellence.",
      heading: "Global standards, local impact.",
      subtext:
        "Combining international expertise with deep regional understanding.",
      textPosition: "left", // Text on right
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full h-[85vh] overflow-hidden bg-gray-900">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundColor: "#4a5568", // Fallback color
              }}
            >
              {/* Dynamic overlay based on text position */}
              <div
                className={`absolute inset-0 ${
                  slide.textPosition === "left"
                    ? "bg-gradient-to-r from-black/80 via-black/60 to-transparent"
                    : "bg-gradient-to-l from-black/80 via-black/60 to-transparent"
                }`}
              ></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-20 h-full flex items-center">
              <div className="w-full max-w-[75vw] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Dynamic content positioning */}
                  {slide.textPosition === "left" ? (
                    <>
                      {/* Left side - Content */}
                      <div className="lg:pr-8 text-white">
                        <div className="space-y-6">
                          {/* Highlighted Word */}
                          <div className="inline-block">
                            <span className="bg-[#129349] text-white font-bold text-2xl sm:text-3xl lg:text-4xl px-4 py-2 rounded-lg shadow-lg">
                              {slide.highlight}
                            </span>
                          </div>

                          {/* Main Heading */}
                          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl">
                            {slide.heading}
                          </h1>

                          {/* Subtext */}
                          <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl drop-shadow">
                            {slide.subtext}
                          </p>
                        </div>
                      </div>
                      {/* Right side - empty */}
                      <div className="hidden lg:block"></div>
                    </>
                  ) : (
                    <>
                      {/* Left side - empty */}
                      <div className="hidden lg:block"></div>
                      {/* Right side - Content */}
                      <div className="lg:pl-8 text-white">
                        <div className="space-y-6">
                          {/* Highlighted Word */}
                          <div className="inline-block">
                            <span className="bg-[#129349] text-white font-bold text-2xl sm:text-3xl lg:text-4xl px-4 py-2 rounded-lg shadow-lg">
                              {slide.highlight}
                            </span>
                          </div>

                          {/* Main Heading */}
                          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl">
                            {slide.heading}
                          </h1>

                          {/* Subtext */}
                          <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl drop-shadow">
                            {slide.subtext}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="cursor-pointer absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-gray-300 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>

      <button
        onClick={nextSlide}
        className="cursor-pointer absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-gray-300 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>

      {/* Pagination Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20 z-30">
        <div
          className="h-full bg-[#129349] transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;
