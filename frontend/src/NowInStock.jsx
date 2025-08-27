import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProductStore } from '../store/productStore';
import GradientCircularProgress from "./Loader";

export default function ProductScrollableList() {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const navigate = useNavigate();
  const { productsLoading, products, fetchProducts } = useProductStore();
  let displayProducts = products
    ? products.filter((a) => a.inStock === true).slice(0, 10)
    : [];

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

  useEffect(() => {
    if (products.length === 0) fetchProducts();
  }, []);

  return (
    <div className="md:max-w-[75vw] mx-auto px-4 py-6 prevent-select">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-700">Now in Stock</h2>
        <Link to="/now-in-stock" className="text-[#129349] font-medium text-xl">
          View All
        </Link>{" "}
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

        {productsLoading ? (
          <div className="flex justify-center items-center w-full min-h-[200px]">
            <GradientCircularProgress />
          </div>
        ) : (
          displayProducts.map((product) => (
            <div
              key={product._id}
              className="cursor-pointer min-w-[280px] flex-shrink-0 bg-[#ddfbe9] rounded-lg p-6"
              onClick={() => navigate(`/pharma-products/${product._id}`)}
            >
              <div className="h-48 flex items-center justify-center mb-4">
                <img
                  src={product.images[0]?.url}
                  alt={product.name}
                  className="w-40 h-40 object-fit rounded-lg"
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
                  <span className="text-[#129349]">{product.pricing.mrp}</span>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
