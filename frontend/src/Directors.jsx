import { useEffect, useRef, useState } from "react";

const DirectorsSection = () => {
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
  const directors = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar Sharma",
      title: "CEO & Founder",
      description:
        "Dr. Rajesh Kumar Sharma, a visionary leader with over 25 years of experience in pharmaceutical innovation, founded Suave Healthcare with a mission to make quality healthcare accessible to all. As the Chief Executive Officer, Dr. Sharma focuses on strategic planning, research & development, and ensuring the highest standards of pharmaceutical excellence. His leadership and pioneering insights have been instrumental in establishing Suave Healthcare as a trusted name in the industry, while maintaining our commitment to integrity and patient-centric care.",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      id: 2,
      name: "Siddharth Singhal",
      title: "MD, Co-Founder",
      description:
        "Siddharth Singhal, an accomplished business leader with an MBA from Manchester University, co-founded Suave Healthcare with a vision to revolutionize the pharmaceutical industry. As the Managing Director, Siddharth focuses on charting the company's growth trajectory, planning its future course, and ensuring a strong ethical foundation and positive working culture. His leadership and strategic insights have been instrumental in steering Suave Healthcare towards unparalleled success, while staying true to its core values.",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      id: 3,
      name: "Dr. Priya Mehta",
      title: "Director of Research & Development",
      description:
        "Dr. Priya Mehta brings over 20 years of expertise in pharmaceutical research and product development to Suave Healthcare. With a Ph.D. in Pharmaceutical Sciences from IIT Delhi, she leads our R&D initiatives and ensures that all our products meet international quality standards. Her innovative approach to drug formulation and her commitment to scientific excellence have resulted in numerous breakthrough products that have transformed patient care across various therapeutic segments.",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
  ];

  return (
    <div className="md:max-w-[75vw] mx-auto px-6 py-12 prevent-select">
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

      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Meet Our Directors
        </h2>
        <div
          className="h-1 w-32 bg-green-500 rounded-full mx-auto"
        ></div>
      </div>

      {/* Directors Carousel */}
      <div ref={scrollContainerRef} className="cursor-grab overflow-x-auto custom-scrollbar pb-4">
        <div className="flex gap-8 min-w-max">
          {directors.map((director, index) => (
            <div key={director.id} className="flex-shrink-0 w-[800px]">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Director Image */}
                <div className="flex-shrink-0 lg:w-80">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    {/* Director Photo */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-500 to-green-700"></div>
                    <div className="relative z-10 p-4">
                      <div className="rounded-2xl h-96 overflow-hidden">
                        <img
                          src={director.image}
                          alt={director.name}
                          className="w-full h-full object-cover"
                          draggable="false"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Director Information */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {director.description}
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                      {director.name}
                    </h3>
                    <p className="text-lg font-semibold text-green-600">
                      {director.title}
                    </p>
                  </div>

                  {/* Achievement Tags */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      Leadership Excellence
                    </span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      Strategic Vision
                    </span>
                    <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      Innovation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DirectorsSection;
