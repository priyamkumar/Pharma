const ProductInfoLayout = ({ product }) => {
  return (
    <div className="bg-white font-sans">
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Section Title */}
          <h2 className="text-2xl font-bold text-gray-900">
            About the product
          </h2>

          {/* Description Section */}
          {product.fullDescription && (
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.fullDescription}
              </p>
            </div>
          )}

          {/* Indication Section */}
          {product.indication && (
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-900">Indication</h3>
              <p className="text-gray-700">{product.indication}</p>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="my-15 space-y-6">
          {/* Side Effects Section */}
          {product.sideEffects && (
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-900">
                Side Effects
              </h3>
              <p className="text-gray-600">{product.sideEffects}</p>
            </div>
          )}

          {/* Important Notice Section */}
          {product.importantNotice && (
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-900">
                Important Notice
              </h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-md">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {product.importantNotice}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {product.ztorageCondition && (
        <div className="bg-[#ddfbe9] text-[#129349] rounded-lg shadow-md p-6 border-l-4 transition-shadow duration-300 hover:shadow-lg">
          (
          <div className="space-y-3">
            {/* Header/Title */}
            <h2 className="text-xl font-semibold text-gray-900">
              Storage Condition
            </h2>

            {/* Body Text */}
            <p className="text-gray-800 leading-relaxed">
              Product details for storage condition Product details for storage
              condition Product details for storage condition Product details
              for storage condition. Store in a cool, dry place away from direct
              sunlight and moisture. Keep the temperature between 15°C to 25°C
              for optimal preservation. Ensure the container is tightly closed
              after each use to maintain product integrity and prevent
              contamination.
            </p>
          </div>
          )
        </div>
      )}
    </div>
  );
};

export default ProductInfoLayout;
