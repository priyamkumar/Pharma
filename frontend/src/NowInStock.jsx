import { useEffect, useRef, useState } from "react";

export default function ProductScrollableList() {
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

  // Sample product data based on the image
  const products = [
    {
      id: 1,
      name: "SILDOVIB 8",
      description: "SILODOSIN 8mg. IP",
      price: "₹230",
      image:
        "https://vibcarethumbnail.s3.ap-south-1.amazonaws.com/23182BrandImage1.webp?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=75c21f81a8d6c967dc60d5dc8a6e0ae27290790043caa198372057198ef13d4a",
    },
    {
      id: 2,
      name: "TOUXJEM SYRUP (WOMC)",
      description: "DEXTROMETHORPHAN HYD",
      price: "₹101",
      image:
        "https://vibcarethumbnail.s3.ap-south-1.amazonaws.com/23182BrandImage1.webp?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=75c21f81a8d6c967dc60d5dc8a6e0ae27290790043caa198372057198ef13d4a",
    },
    {
      id: 3,
      name: "TOUXJEM SYRUP (WOMC)",
      description: "DEXTROMETHORPHAN HYD",
      price: "₹101",
      image:
        "https://vibcarethumbnail.s3.ap-south-1.amazonaws.com/23182BrandImage1.webp?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=75c21f81a8d6c967dc60d5dc8a6e0ae27290790043caa198372057198ef13d4a",
    },
    {
      id: 4,
      name: "KOZYVIB PLUS",
      description: "BECLOMETHASONE 0.025",
      price: "₹109",
      image:
        "https://vibcarethumbnail.s3.ap-south-1.amazonaws.com/23182BrandImage1.webp?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=75c21f81a8d6c967dc60d5dc8a6e0ae27290790043caa198372057198ef13d4a",
    },
    {
      id: 5,
      name: "SILDOVIB 8",
      description: "SILODOSIN 8mg. IP",
      price: "₹230",
      image:
        "https://vibcarethumbnail.s3.ap-south-1.amazonaws.com/23182BrandImage1.webp?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=75c21f81a8d6c967dc60d5dc8a6e0ae27290790043caa198372057198ef13d4a",
    },
    {
      id: 6,
      name: "TOUXJEM SYRUP (WOMC)",
      description: "DEXTROMETHORPHAN HYD",
      price: "₹101",
      image:
        "https://vibcarethumbnail.s3.ap-south-1.amazonaws.com/23182BrandImage1.webp?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=75c21f81a8d6c967dc60d5dc8a6e0ae27290790043caa198372057198ef13d4a",
    },
  ];

  return (
    <div className="md:max-w-[75vw] mx-auto px-4 py-6 prevent-select">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-700">Now in Stock</h2>
        <a href="#" className="text-[#129349] font-medium text-xl">
          View All
        </a>{" "}
      </div>

      {/* Products scrollable container with native scrollbar */}
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

        {products.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer min-w-[280px] flex-shrink-0 bg-[#ddfbe9] rounded-lg p-6"
          >
            <div className="h-48 flex items-center justify-center mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
                draggable={false}
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold mb-1">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">
                {product.description}
              </p>
              <p className="text-sm">
                <span className="text-gray-500">MRP : </span>
                <span className="text-blue-500">{product.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
