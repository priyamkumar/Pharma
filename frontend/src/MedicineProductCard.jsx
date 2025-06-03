import { useEnquiry } from "../context/EnquiryContext";

const MedicineProductCard = () => {
  const { setIsEnquiryModalOpen } = useEnquiry();

  return (
    <div className="my-20 md:max-w-[75vw] mx-auto bg-white rounded-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-1/3 p-6 flex items-center justify-center">
          <div className="w-full max-w-xs">
            <div className="rounded-lg aspect-square flex items-center justify-center">
              <div className="text-center text-gray-500">
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
          <h1 className="text-2xl font-bold text-gray-900 mb-3">ABLOVIB N</h1>

          {/* Composition */}
          <div className="mb-4">
            <span className="font-bold text-gray-800">Composition: </span>
            <span className="text-gray-700">
              N-ACETYLCYSTEINE 600mg. IP + ACEBROPHYLLINE 100mg. IP
            </span>
          </div>

          {/* Company */}
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gray-300 rounded mr-3 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-600">GM</span>
            </div>
            <span className="text-gray-800 font-medium">GENVIMAX</span>
          </div>

          {/* Tag */}
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              Tablets
            </span>
          </div>

          {/* Packaging Type */}
          <div className="mb-4">
            <span className="font-bold text-gray-800">Packaging Type: </span>
            <span className="text-gray-700">Alu Alu | 10×10</span>
          </div>

          {/* Pricing */}
          <div className="mb-4 space-y-1">
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">MRP:</span>
              <span
                className="text-lg font-medium"
                style={{ color: "#129349" }}
              >
                ₹207
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">PTR:</span>
              <span className="text-lg font-bold text-gray-900">₹147.86</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">PTS:</span>
              <span className="text-lg font-bold text-gray-900">₹133.07</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              ABLOVIB N is an effective combination medication used for
              respiratory conditions. It combines the mucolytic properties of
              N-Acetylcysteine with the bronchodilator effects of Acebrophylline
              to provide comprehensive respiratory support...
              <span className="text-blue-600 cursor-pointer hover:underline ml-1">
                Read More
              </span>
            </p>
          </div>

          {/* Composition Section Again */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Composition:</h3>
            <p className="text-gray-700 text-sm">
              N-ACETYLCYSTEINE 600mg. IP + ACEBROPHYLLINE 100mg. IP
            </p>
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
