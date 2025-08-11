import React from "react";
import { Pill, Handshake, Factory } from "lucide-react";
import { Link } from "react-router-dom";

const OfferingSection = () => {
  const offerings = [
    {
      icon: Pill,
      title: "Pharma Products",
      description:
        "Explore our WHO-GMP certified portfolio, including high-quality tablets, capsules, syrups, injections, and more. Whether for general, cardiac, diabetic, or dermatological needs, our range covers all your healthcare requirements.",
      link: "products",
    },
    {
      icon: Handshake,
      title: "PCD Pharma Franchise",
      description:
        " Partner with Suave Healthcare, India's leading PCD pharma company. We offer exclusive franchise opportunities with full support, including marketing tools and a diverse product range to guarantee your success.",
      link: "franchise",
    },
    {
      icon: Factory,
      title: "Third-Party Manufacturing",
      description:
        "Trust Suave Healthcare for third-party manufacturing solutions. Our contract manufacturing services include tablets, capsules, syrups, and injections. Our GMP-certified units ensure the highest quality and timely delivery.",
      link: "contact",
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-[75vw] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Comprehensive Pharma Solutions
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Discover our WHO-GMP certified products, PCD franchise
            opportunities, and trusted third-party manufacturing services.{" "}
          </p>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border-t-4 border-[#129349] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Icon and Title */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#129349] to-[#0f7a3a] rounded-xl flex items-center justify-center shadow-lg mr-4">
                  <offering.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-xl text-gray-900">
                  {offering.title}
                </h3>
              </div>
              {/* Card Description */}
              <p className="text-base text-gray-600 mb-6 flex-grow leading-relaxed">
                {offering.description}
              </p>
              {/* Learn More Link */}
              <Link
                to={`/${offering.link}`}
                className="inline-flex items-center justify-center bg-[#129349] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#015c30] transition-colors duration-200 mt-auto"
              >
                Learn more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingSection;