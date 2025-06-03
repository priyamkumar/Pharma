import React from "react";

export default function Trusted() {
  return (
    <>
      <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Leading the Way in Pharma Franchise Innovation
      </h3>

      <div className="flex flex-wrap justify-center gap-16">
        <div className="text-center">
          <div className="text-[#129349] mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h4 className="font-bold text-xl text-gray-800">100%</h4>
          <p className="text-gray-600">Genuine Products</p>
        </div>

        <div className="text-center">
          <div className="text-[#129349] mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h4 className="font-bold text-xl text-gray-800">Secure</h4>
          <p className="text-gray-600">Payments</p>
        </div>

        <div className="text-center">
          <div className="text-[#129349] mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <h4 className="font-bold text-xl text-gray-800">24 × 7</h4>
          <p className="text-gray-600">Customer Support</p>
        </div>
      </div>
    </>
  );
}
