import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useProductStore } from '../store/productStore';

export default function NISPage() {
  const {products, fetchProducts} = useProductStore()
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const totalPages = Math.ceil(products.length / productsPerPage);
  
  // Calculate the products to display for the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Optional: scroll to top when page changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
  if (products.length === 0) fetchProducts();
}, []);

  return (
    <div className="md:max-w-[75vw] mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Now in Stock</h1>

        {/* Products Grid - Display only current page products */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {currentProducts.map((product) => (
            <Link key={product._id} to={`/products/${product._id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>

        {/* Show message if no products */}
        {currentProducts.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No products found.
          </div>
        )}

        {/* Pagination - Only show if more than one page */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}

        {/* Results Summary */}
        {products.length > 0 && (
          <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
            <div>
              Showing {startIndex + 1}-{Math.min(endIndex, products.length)} of {products.length} products
            </div>
            <div>
              Page {currentPage} of {totalPages}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}