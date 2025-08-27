import React from "react";
import Trusted from "./Trusted";
import { Link } from "react-router-dom";
import { useEnquiryStore } from "../store/enquiryStore";

export default function OurAdvantage() {
  const { setIsEnquiryModalOpen } = useEnquiryStore();
  return (
    <section className="py-12">
      <div className="container max-w-[75vw] mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-700 mb-8">
          Start or Expand Your Pharma Business with Confidence
        </h2>
        <p className="text-base text-gray-600 leading-relaxed mb-8">
          Suave Healthcare offers outstanding opportunities for entrepreneurs to
          establish or expand their pharma business through:{" "}
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border-l-4 border-[#129349] pl-6">
            <h3 className="font-bold text-gray-800 mb-2">
              Monopoly-Based PCD Pharma Franchise Opportunities
            </h3>
            <p className="text-gray-600 mb-2">
              Build your pharma business with minimal investment, high returns,
              and exclusive access to our diverse product range.
            </p>
          </div>

          <div className="border-l-4 border-[#129349] pl-6">
            <h3 className="font-bold text-gray-800 mb-2">
              Customized Third-Party Manufacturing Services
            </h3>
            <p className="text-gray-600 mb-2">
              Tailored contract manufacturing solutions, ensuring top-quality
              products and timely delivery. Benefit from our expertise in
              product development and production efficiency.
            </p>
          </div>
        </div>
        <p className="text-base text-gray-600 leading-relaxed mb-8">
          Partner with Suave Healthcare to leverage our established network,
          high-quality products, and full support for long-term business
          success.
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-10 mb-12">
          <Link
            to="/pcd-pharma-franchise"
            className="flex-1 bg-[#129349] hover:bg-[#0d7a3a] text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 text-center"
          >
            Become a Franchise Partner
          </Link>
          <button
            onClick={() => setIsEnquiryModalOpen(true)}
            className="cursor-pointer flex-1 bg-white text-[#129349] border-2 border-[#129349] font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:bg-[#f0fdf4] text-center"
          >
            Request a Manufacturing Quote
          </button>
        </div>

        {/* <Trusted /> */}
      </div>
    </section>
  );
}
