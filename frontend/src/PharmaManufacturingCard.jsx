import React from "react";
import { useEnquiry } from "../context/EnquiryContext";

const PharmaManufacturingCard = () => {
  const { setIsEnquiryModalOpen } = useEnquiry();
  return (
    <section className="py-12">
      <div className="flex justify-center items-center bg-white">
        <div className="bg-[#ddfbe9] rounded-xl p-8 text-center max-w-xl w-full shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Excellence in Third-Party Pharma Manufacturing
          </h2>
          <p className="text-gray-700 mb-6">
            Unleash your product potential with our high-tech facilities
          </p>
          <button
            className="cursor-pointer bg-[#129349] hover:bg-[#015c30] text-white font-semibold py-3 px-6 rounded-md text-lg w-full md:w-auto"
            onClick={() => setIsEnquiryModalOpen(true)}
          >
            Request Manufacturing Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default PharmaManufacturingCard;
