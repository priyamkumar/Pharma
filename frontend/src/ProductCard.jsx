const ProductCard = ({ product }) => {
  const truncateText = (text, maxLength = 60) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 border border-gray-100">
      <div className="flex items-start gap-3 mb-3">
        <img
          src={product.images[0]?.url}
          alt={product.name}
          className="w-24 h-24 rounded-lg object-fit flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="text-xs text-[#129349] font-medium mb-1">
            {product.brand.toUpperCase()}
          </div>
          <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1">
            {product.name}
          </h3>
          <span
            className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
              product.category === "Tablets"
                ? "bg-blue-100 text-blue-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {product.category}
          </span>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-xs text-gray-600 mb-2" title={product.composition}>
          {truncateText(product.composition)}
        </p>
        <p className="text-xs text-gray-500">{product.packagingType}</p>
      </div>

      <div className="flex justify-between space-y-1">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">MRP:</span>
          <span className="text-sm font-semibold text-gray-900">
            ₹{product.pricing.mrp}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">PTR:</span>
          <span className="text-sm font-medium text-blue-600">
            ₹{product.pricing.ptr}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">PTS:</span>
          <span className="text-sm font-medium text-green-600">
            ₹{product.pricing.pts}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard