import { useEffect, useState } from "react";
import { Search, X, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useProductStore } from '../store/productStore';

export default function SearchModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  
  const {products, fetchProducts} = useProductStore();

  useEffect(() => {
    if (products.length === 0) fetchProducts();
  }, []);

  const openSearch = () => {
    setIsVisible(true);
  };

  const closeSearch = () => {
    setIsVisible(false);
    setSearchValue("");
    setFilteredProducts([]);
    setShowResults(false);
  };

  const clearInput = () => {
    setSearchValue("");
    setFilteredProducts([]);
    setShowResults(false);
  };

  const executeSearch = () => {
    if (searchValue.trim()) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredProducts(filtered);
      setShowResults(true);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    // Real-time search as user types
    if (value.trim()) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(value.toLowerCase()) ||
          product.brand.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
      setShowResults(true);
    } else {
      setFilteredProducts([]);
      setShowResults(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeSearch();
    } else if (e.key === "Enter") {
      executeSearch();
    }
  };

  return (
    <div className="relative">
      {/* Search Icon Button */}
      <button
        onClick={openSearch}
        className="cursor-pointer p-3 rounded-full bg-[#129349] text-white hover:bg-[#015c30] transition-colors duration-200 shadow-lg"
        aria-label="Open search"
      >
        <Search size={20} />
      </button>

      {/* Search Modal Overlay */}
      {isVisible && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex items-start justify-center pt-20 z-50"
          onClick={closeSearch}
        >
          <div className="w-full max-w-2xl mx-4">
            {/* Search Container */}
            <div
              className="bg-white rounded-lg shadow-xl transform transition-all duration-200 ease-out"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Input Section */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={searchValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Search products by name or category..."
                    className="w-full pl-4 pr-20 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                    autoFocus
                  />

                  {/* Clear Button */}
                  <button
                    onClick={clearInput}
                    className="cursor-pointer absolute right-2 p-2 rounded-full hover:bg-gray-100 transition-colors duration-150"
                    aria-label="Clear search"
                  >
                    <X size={18} className="text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Search Results Section */}
              {showResults && (
                <div className="max-h-96 overflow-y-auto">
                  {filteredProducts.length > 0 ? (
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-gray-600 mb-3">
                        Found {filteredProducts.length} product
                        {filteredProducts.length !== 1 ? "s" : ""}
                      </h3>
                      <div className="space-y-2">
                        {filteredProducts.map((product) => (
                          <div
                            key={product._id}
                            onClick={() => {
                              navigate(`/products/${product._id}`);
                              closeSearch();
                            }}
                            className="cursor-pointer flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-150 border border-gray-100"
                          >
                            <div className="flex-shrink-0 mr-3">
                              <Package className="w-8 h-8 text-gray-400" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">
                                {product.name}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {product.brand}
                              </p>
                            </div>
                            <div className="text-right">
                              <span className="font-semibold text-gray-900">
                                {product.mrp}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 text-center">
                      <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        No products found
                      </h3>
                      <p className="text-gray-500">
                        Try searching with different keywords or check the
                        spelling.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Default state when no search */}
              {!showResults && (
                <div className="p-8 text-center">
                  <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Search Products
                  </h3>
                  <p className="text-gray-500">
                    Start typing to search through our product catalog
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}