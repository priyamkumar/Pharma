import { useEnquiry } from "../context/EnquiryContext";
import Loader from "./Loader";

const MedicineProductCard = ({ product, loading }) => {
  const { setIsEnquiryModalOpen } = useEnquiry();
  return loading || !product ? (
    <Loader />
  ) : (
    <div className="my-20 md:max-w-[75vw] mx-auto bg-white rounded-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-1/3 p-6 flex items-center justify-center">
          <div className="w-full max-w-xs">
            <div className="rounded-lg aspect-square flex items-center justify-center overflow-hidden">
              {product.images && product.images.length > 0 ? (
                <img
                  src={product.images[0].url}
                  alt={product.name}
                  className="w-full h-full object-fit rounded-lg"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
              ) : null}
              <div
                className="text-center text-gray-500"
                style={{
                  display:
                    product.images && product.images.length > 0
                      ? "none"
                      : "block",
                }}
              >
                <div className="text-4xl mb-2">💊</div>
                <div className="text-sm">Product Image</div>
                <div className="text-xs text-gray-400">Blister Pack & Box</div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="md:w-2/3 p-6 flex flex-col">
          {/* Product Name */}
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            {product.name}
          </h1>

          {/* Composition */}
          <div className="mb-4">
            <span className="font-bold text-gray-800">Composition: </span>
            <span className="text-gray-700">{product.composition}</span>
          </div>

          {/* Company */}
          <div className="flex items-center mb-4">
            <span className="text-gray-800 font-medium">{product.brand}</span>
          </div>

          {/* Tag */}
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          {/* Packaging Type */}
          <div className="mb-4">
            <span className="font-bold text-gray-800">Packaging Type: </span>
            <span className="text-gray-700">
              {product.packagingType} | {product.packSize}
            </span>
          </div>

          {/* Pricing */}
          <div className="mb-4 space-y-1">
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">MRP:</span>
              <span
                className="text-lg font-medium"
                style={{ color: "#129349" }}
              >
                ₹{product.pricing.mrp}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">PTR:</span>
              <span className="text-lg font-bold text-gray-900">
                ₹{product.pricing.ptr}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">PTS:</span>
              <span className="text-lg font-bold text-gray-900">
                ₹{product.pricing.pts}
              </span>
            </div>
          </div>

          {/* Description */}
          {product.shortDescription && (
            <div className="mb-4">
              <p className="text-gray-700 text-sm leading-relaxed">
                {product.shortDescription}
                <span className="text-blue-600 cursor-pointer hover:underline ml-1">
                  Read More
                </span>
              </p>
            </div>
          )}

          {/* Composition Section Again */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Composition:</h3>
            <p className="text-gray-700 text-sm">{product.composition}</p>
          </div>

          {/* Action Button */}
          <button
            className="cursor-pointer w-full py-3 px-4 text-white font-medium rounded-lg transition-colors duration-200 hover:opacity-90"
            style={{ backgroundColor: "#129349" }}
            onClick={() => setIsEnquiryModalOpen(true)}
          >
            Send Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineProductCard;
