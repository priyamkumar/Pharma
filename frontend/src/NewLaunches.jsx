import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function NewLaunches() {
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

  return (
    <section className="py-12 bg-gray-50 prevent-select">
      <div className="container md:max-w-[75vw] mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-700">New Launches</h2>
          <Link
            to="/products"
            className="text-[#129349] font-medium text-xl hover:text-[#015c30]"
          >
            View All
          </Link>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto custom-scrollbar pb-4"
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
          {[
            {
              name: "VOLVIB AQ INJ",
              desc: "DICLOFENAC SODIUM 75",
              price: "₹150",
            },
            {
              name: "VOLJEM AQ INJ",
              desc: "DICLOFENAC SODIUM 75",
              price: "₹150",
            },
            {
              name: "DYDROVIB 10",
              desc: "DYDROGESTERONE 10mg",
              price: "₹639",
            },
            {
              name: "BROXOVIC LS JUNIOR SYRUP (WOMC)",
              desc: "AMBROXOL 15mg. IP +",
              price: "₹75",
            },
            {
              name: "DYDROVIB 10",
              desc: "DYDROGESTERONE 10mg",
              price: "₹639",
            },
            {
              name: "BROXOVIC LS JUNIOR SYRUP (WOMC)",
              desc: "AMBROXOL 15mg. IP +",
              price: "₹75",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="cursor-pointer flex-shrink-0 bg-[#ddfbe9] rounded-lg p-6"
            >
              <div className="bg-[#ddfbe9] p-6 flex justify-center">
                <img
                  src={`https://vibcarethumbnail.s3.ap-south-1.amazonaws.com/23182BrandImage1.webp?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=75c21f81a8d6c967dc60d5dc8a6e0ae27290790043caa198372057198ef13d4a`}
                  alt={product.name}
                  className="h-32 object-contain"
                  draggable={false}
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.desc}</p>
                <p className="text-[#129349] font-medium">
                  MRP : {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
