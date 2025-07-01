import React, { useEffect, useState } from "react";
import { ArrowRight, Eye } from "lucide-react";
import { useProductStore } from "../store/productStore";
import { useNavigate } from "react-router-dom";
import GradientCircularProgress from "./Loader";

const ProductsSample = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredViewAll, setHoveredViewAll] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { productsLoading, products, fetchProducts } = useProductStore();
  const navigate = useNavigate();

  const designOptions = [
    {
      bgGradient: "bg-gradient-to-br from-blue-800 via-blue-600 to-indigo-500",
      decorativeElements: "💊",
    },
    {
      bgGradient: "bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-400",
      decorativeElements: "🔬",
    },
    {
      bgGradient:
        "bg-gradient-to-br from-green-600 via-emerald-500 to-teal-400",
      decorativeElements: "🌿",
    },
    {
      bgGradient:
        "bg-gradient-to-br from-violet-600 via-indigo-500 to-blue-400",
      decorativeElements: "⚕️",
    },
  ];
  const displayProducts = products.slice(0, 4).map((product, index) => ({
    ...product,
    ...designOptions[index % designOptions.length],
  }));
  const handleMouseMove = (e, cardId) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    setMousePosition({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleViewAllClick = () => {
    navigate("/products");
  };

  useEffect(() => {
    if (products.length === 0) fetchProducts();
  }, []);

  return productsLoading ? (
    <GradientCircularProgress />
  ) : (
    <div className="py-12 bg-[#ddfbe9] prevent-select">
      <div className="md:max-w-[75vw] mx-auto px-4">
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {displayProducts.map((product) => (
            <div
              key={product._id}
              className={`relative rounded-3xl p-8 transition-all duration-500 ease-out transform-gpu overflow-hidden bg-[#129349] ${
                hoveredCard === product._id
                  ? "scale-105 shadow-2xl"
                  : "shadow-xl"
              }`}
              style={{
                transform:
                  hoveredCard === product._id
                    ? `perspective(1000px) rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg) scale(1.05)`
                    : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
                transformStyle: "preserve-3d",
                minHeight: "280px",
              }}
              onMouseMove={(e) => handleMouseMove(e, product._id)}
              onMouseEnter={() => handleMouseEnter(product._id)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Background decorative elements */}
              <div className="absolute top-4 right-4 text-4xl opacity-20">
                {product.decorativeElements}
              </div>

              {/* Floating geometric shapes */}
              <div className="absolute top-8 right-12 w-8 h-8 bg-white/10 rounded-lg rotate-45 opacity-60"></div>
              <div className="absolute bottom-12 left-8 w-6 h-6 bg-white/15 rounded-full opacity-50"></div>
              <div className="absolute top-16 right-20 w-4 h-4 bg-white/20 rounded-sm rotate-12 opacity-40"></div>

              {/* Brand Name and MRP */}
              <div className="relative z-10 mb-6">
                <h2 className="text-white text-3xl font-bold tracking-wide mb-2">
                  {product.name}
                </h2>
                <p className="text-white/90 text-lg font-medium">
                  MRP : ₹{product.pricing.mrp}
                </p>
              </div>

              {/* Product Image Container */}
              <div className="relative flex justify-center items-center h-40 mb-6">
                <div
                  className={`transition-all duration-500 ease-out ${
                    hoveredCard === product._id
                      ? "transform -translate-y-3 scale-110"
                      : ""
                  }`}
                >
                  <img
                    src={product.images[0].url}
                    alt={product.name}
                    className="w-48 h-48 object-fit drop-shadow-2xl"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23ffffff;stop-opacity:0.3" /><stop offset="100%" style="stop-color:%23ffffff;stop-opacity:0.1" /></linearGradient></defs><rect width="300" height="200" fill="url(%23grad)" rx="12"/><text x="50%" y="45%" font-family="Arial" font-size="16" fill="%23ffffff" text-anchor="middle" opacity="0.8">${product.name}</text><text x="50%" y="60%" font-family="Arial" font-size="12" fill="%23ffffff" text-anchor="middle" opacity="0.6">Product Image</text></svg>`;
                    }}
                  />
                </div>
              </div>

              {/* Arrow Button */}
              <div className="absolute bottom-8 left-8">
                <button
                  className={`cursor-pointer bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-300 ease-out hover:bg-white/30 border border-white/20 ${
                    hoveredCard === product._id
                      ? "transform rotate-12 translate-x-2 scale-110 bg-white/30"
                      : ""
                  }`}
                  onClick={() => navigate(`/products/${product._id}`)}
                >
                  <ArrowRight size={24} className="text-white" />
                </button>
              </div>

              {/* Glossy overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-3xl"></div>

              {/* Enhanced hover glow */}
              {hoveredCard === product._id && (
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-white/5 to-transparent pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button
            onClick={handleViewAllClick}
            onMouseEnter={() => setHoveredViewAll(true)}
            onMouseLeave={() => setHoveredViewAll(false)}
            className={`cursor-pointer group relative overflow-hidden bg-[#129349] text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-500 ease-out shadow-xl hover:shadow-2xl ${
              hoveredViewAll ? "transform scale-105 -translate-y-1" : ""
            }`}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>

            {/* Animated background overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent transition-all duration-500 ${
                hoveredViewAll ? "translate-x-0" : "-translate-x-full"
              }`}
            ></div>

            {/* Button content */}
            <div className="relative flex items-center space-x-3">
              <Eye
                size={24}
                className={`transition-all duration-300 ${
                  hoveredViewAll ? "rotate-12 scale-110" : ""
                }`}
              />
              <span>View All Products</span>
              <ArrowRight
                size={20}
                className={`transition-all duration-300 ${
                  hoveredViewAll ? "translate-x-2" : ""
                }`}
              />
            </div>

            {/* Floating particles effect */}
            <div className="absolute top-2 right-8 w-2 h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse"></div>
            <div className="absolute bottom-3 left-12 w-1.5 h-1.5 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse delay-150"></div>
            <div className="absolute top-4 left-20 w-1 h-1 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-600 group-hover:animate-pulse delay-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsSample;
