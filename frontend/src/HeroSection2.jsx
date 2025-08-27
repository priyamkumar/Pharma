import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEnquiryStore } from "../store/enquiryStore";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();
  const { setIsEnquiryModalOpen } = useEnquiryStore();

  const slides = [
    {
      id: 1,
      image: "https://picsum.photos/1920/1080?random=1",
      highlight: "Why Choose Us",
      heading:
        "Suave Healthcare: Trusted by Over 1,000 Healthcare Entrepreneurs",
      subtext:
        "With 20+ years of excellence, Suave Healthcare is your trusted pharma partner. ISO & WHO-GMP certified, we offer top-quality products and unmatched support.",
      textPosition: "right",
      cta: {
        text: "Partner With Us Today",
        action: () => setIsEnquiryModalOpen(true),
      },
    },
    {
      id: 2,
      image: "https://picsum.photos/1920/1080?random=2",
      highlight: "Pharma Products",
      heading: "Explore Our WHO-GMP Certified Pharma Products",
      subtext:
        "Over 850 premium pharma products, including tablets, capsules, syrups, and injections, all manufactured in certified GMP facilities to ensure the highest standards of quality.",
      textPosition: "left",
      cta: {
        text: "Explore Our Product Portfolio",
        action: () => navigate("/pharma-products"),
      },
    },
    {
      id: 3,
      image: "https://picsum.photos/1920/1080?random=3",
      highlight: "PCD Pharma Franchise",
      heading: "Partner with India's Leading PCD Pharma Company",
      subtext:
        "Start your pharma franchise with Suave Healthcare. Get full support, a wide product range, and access to an extensive network for business growth.",
      textPosition: "right",
      cta: {
        text: "Start Your Franchise Journey",
        action: () => navigate("/pcd-pharma-franchise"),
      },
    },
    {
      id: 4,
      image: "https://picsum.photos/1920/1080?random=4",
      highlight: "Third-Party Manufacturing",
      heading: "Reliable Third-Party Manufacturing Solutions",
      subtext:
        "We offer tailored contract manufacturing services, ensuring high-quality tablets, capsules, syrups, and injections with on-time delivery.",
      textPosition: "left",
      cta: {
        text: "Request a Manufacturing Quote",
        action: () => setIsEnquiryModalOpen(true),
      },
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
    <div className="relative w-full h-screen sm:h-[90vh] overflow-hidden bg-gray-900">
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
                backgroundColor: "#4a5568",
              }}
            >
              {/* Mobile-first overlay - always dark on mobile, position-based on desktop */}
              <div
                className={`absolute inset-0 bg-black/70 sm:bg-black/60 ${
                  slide.textPosition === "left"
                    ? "lg:bg-gradient-to-r lg:from-black/80 lg:via-black/60 lg:to-transparent"
                    : "lg:bg-gradient-to-l lg:from-black/80 lg:via-black/60 lg:to-transparent"
                }`}
              ></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-20 h-full flex items-center">
              <div className="w-full max-w-7xl mx-auto px-16 sm:px-20 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-full lg:min-h-0">
                  {/* Mobile: Always center content with arrow clearance, Desktop: Position based on textPosition */}
                  <div
                    className={`text-white text-center sm:text-left ${
                      slide.textPosition === "left"
                        ? "lg:col-start-1 lg:pr-12"
                        : "lg:col-start-2 lg:pl-12"
                    }`}
                  >
                    <div className="space-y-4 sm:space-y-6">
                      {/* Highlighted Word */}
                      <div className="inline-block">
                        <span className="bg-[#129349] text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 rounded-lg shadow-lg leading-tight">
                          {slide.highlight}
                        </span>
                      </div>

                      {/* Main Heading */}
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white drop-shadow-2xl">
                        {slide.heading}
                      </h1>

                      {/* Subtext */}
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto sm:mx-0 drop-shadow">
                        {slide.subtext}
                      </p>

                      {/* Call to Action Button */}
                      <div className="pt-2 sm:pt-4">
                        <button
                          onClick={slide.cta.action}
                          className="cursor-pointer bg-[#129349] hover:bg-[#0f7a3a] text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-all duration-300 inline-flex items-center gap-2 hover:shadow-lg transform hover:scale-105"
                        >
                          {slide.cta.text}
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Positioned with more clearance */}
      <button
        onClick={prevSlide}
        className="hidden sm:block cursor-pointer absolute left-4 sm:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-black" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden sm:block cursor-pointer absolute right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-black" />
      </button>

      {/* Mobile Navigation Arrows - Only visible on mobile, positioned at bottom */}
      <div className="absolute bottom-16 sm:hidden left-1/2 transform -translate-x-1/2 z-30 flex gap-4">
        <button
          onClick={prevSlide}
          className="cursor-pointer bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-black" />
        </button>
        <button
          onClick={nextSlide}
          className="cursor-pointer bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-black" />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`cursor-pointer w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
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
