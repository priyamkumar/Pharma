import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../store/productStore";

export default function SimilarProducts({ currentProduct }) {
  const navigate = useNavigate();
  const { productsLoading, products, fetchProducts } = useProductStore();
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentProduct) {
      setLoading(true);
      setError(null);

      try {
        // Fetch products if not already loaded
        if (products.length === 0 && !productsLoading) {
          fetchProducts();
          return;
        }

        // Filter similar products based on therapeutic and category
        const similar = products.filter(
          (product) =>
            product._id !== currentProduct._id &&
            (product.therapeutic === currentProduct.therapeutic ||
              product.category === currentProduct.category)
        );

        // Limit to 4 products with fallback to other products if needed
        const finalSimilar =
          similar.length >= 4
            ? similar.slice(0, 4)
            : products
                .filter((p) => p._id !== currentProduct._id)
                .slice(0, 4 - similar.length)
                .concat(similar);

        setSimilarProducts(finalSimilar);
      } catch (err) {
        setError("Failed to load similar products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  }, [currentProduct, products, productsLoading, fetchProducts]);

  if (loading || productsLoading) {
    return (
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Similar Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
            >
              <div className="aspect-square bg-gray-200 animate-pulse" />
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-16 text-center py-8 text-red-500">
        Error loading similar products: {error}
      </div>
    );
  }

  return (
    <div>
      {similarProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Similar Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate(`/pharma-products/${product._id}`)}
              >
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <img
                    src={
                      product.images[0]?.url ||
                      "https://via.placeholder.com/300?text=No+Image"
                    }
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-primary font-medium mt-2">
                    ₹{product.pricing.mrp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
