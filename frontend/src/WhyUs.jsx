import React from "react";

export default function WhyUs() {
  return (
    <section className="py-12">
      <div className="container md:max-w-[75vw] mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-700 mb-8">
          Why Choose Suave Healthcare
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-l-4 border-[#129349] pl-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#ddfbe9] p-2 rounded-full text-[#129349]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Unmatched Quality & Compliance
                </h3>
                <p className="text-gray-600">
                  Our state-of-the-art manufacturing plant, compliant with EU
                  PICS and UKMHRA GMP standards, ensures the highest quality
                  products, meeting rigorous industry requirements and
                  safeguarding our customers' well-being.
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-[#129349] pl-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#ddfbe9] p-2 rounded-full text-[#129349]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Comprehensive Product Portfolio
                </h3>
                <p className="text-gray-600">
                  With over 1500 products spanning 11+ divisions, our diverse
                  portfolio caters to a wide range of therapeutic segments,
                  providing ample opportunities for our pharma franchise, PCD
                  franchise, and pharma PCD franchise partners.
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-[#129349] pl-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#ddfbe9] p-2 rounded-full text-[#129349]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Competitive Pricing & Support
                </h3>
                <p className="text-gray-600">
                  Our in-house manufacturing capability allows us to offer
                  competitive pricing, ensuring our distributors stay ahead of
                  the competition. We also provide extensive marketing support
                  through promotional materials and dedicated account managers.
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-[#129349] pl-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#ddfbe9] p-2 rounded-full text-[#129349]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Cutting-Edge Digital Solutions
                </h3>
                <p className="text-gray-600">
                  Our advanced mobile application streamlines the ordering
                  process, payments, ledger access, complaint resolution, and
                  more, empowering our partners to manage their business with
                  ease and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
