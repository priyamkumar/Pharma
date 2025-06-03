import { useEffect, useRef, useState } from "react";

export default function PromotionalInputs() {
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

  const items = [
    {
      name: "Bag",
      image:
        "https://vibcare.co.in/wp-content/uploads/2023/06/20220531_133645-removebg-preview.webp",
    },
    {
      name: "Wall Clock",
      image:
        "https://vibcare.co.in/wp-content/uploads/2023/06/Wall_Clock-removebg-preview.webp",
    },
    {
      name: "Calendar",
      image:
        "https://vibcare.co.in/wp-content/uploads/2023/06/calendar-removebg-preview.webp",
    },
    {
      name: "Coaster",
      image:
        "https://vibcare.co.in/wp-content/uploads/2023/06/Coaster-removebg-preview.webp",
    },
    {
      name: "Cotton Dispenser",
      image:
        "https://vibcare.co.in/wp-content/uploads/2023/06/Cotton_Dispenser-removebg-preview.webp",
    },
    {
      name: "Table Clock",
      image:
        "https://vibcare.co.in/wp-content/uploads/2023/06/Desk_Clock-removebg-preview.webp",
    },
    {
      name: "Table Clock",
      image:
        "https://vibcare.co.in/wp-content/uploads/2023/06/Desk_Clock-removebg-preview.webp",
    },
    {
      name: "Table Clock",
      image:
        "https://vibcare.co.in/wp-content/uploads/2023/06/Desk_Clock-removebg-preview.webp",
    },
    {
      name: "Table Clock",
      image:
        "https://vibcare.co.in/wp-content/uploads/2023/06/Desk_Clock-removebg-preview.webp",
    },
    {
      name: "Table Clock",
      image:
        "https://vibcare.co.in/wp-content/uploads/2023/06/Desk_Clock-removebg-preview.webp",
    },
    {
      name: "Table Clock",
      image:
        "https://vibcare.co.in/wp-content/uploads/2023/06/Desk_Clock-removebg-preview.webp",
    },
  ];
  return (
    <section className="py-12 bg-[#ddfbe9] prevent-select">
      <div className="container md:max-w-[75vw] mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-700 mb-8">
          Promotional inputs
        </h2>

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
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-[#ddfbe9] rounded-lg p-6"
            >
              <div className="bg-white rounded-lg p-4 mb-2 shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain mx-auto scale-180"
                  draggable={false}
                />
              </div>
              <span className="text-gray-700 font-medium text-center">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
