import { useEffect, useRef, useState } from "react";

export default function FranchiseTestimonials() {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;

    const onMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
      // Prevent text selection while dragging
      e.preventDefault();
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll-fastness factor
      container.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    // Add event listeners to container for mousedown
    container.addEventListener("mousedown", onMouseDown);

    // Add global event listeners for mousemove and mouseup
    // This ensures dragging continues even when mouse leaves the container
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  const testimonials = [
    {
      id: 1,
      name: "Mr SHAHNAWAZ HUSSAIN",
      location: "Katihar",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      id: 2,
      name: "Poonam",
      location: "Mumbai",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      id: 3,
      name: "Mr Khurshid Alam",
      location: "Delhi",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      id: 4,
      name: "John Doe",
      location: "Bangalore",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      id: 5,
      name: "Jane Smith",
      location: "Chennai",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
  ];

  return (
    <section className="px-4 py-12 prevent-select">
      <div className="md:max-w-[75vw] mx-auto container">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-700">
              Franchise Owners Love Working With Us
            </h2>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="cursor-grab flex gap-4 overflow-x-auto custom-scrollbar pb-4"
        >
          <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #129349;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background-color: #f3f4f6;
          border-radius: 10px;
        }
      `}</style>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-full max-w-xs bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} - Franchise Owner`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
              <div className="p-4 bg-gray-50">
                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
