import React from "react";
import { Link } from "react-router-dom";

const OurOffering = () => {
  const offerings = [
    {
      title: "Products",
      description:
        "Browse our wide range of innovative and reliable products tailored to meet the needs of customers across various industries.",
      link: "pharma-products",
    },
    {
      title: "Franchise",
      description:
        "Join our growing network and become a part of a trusted brand. Learn how our franchise model empowers partners for mutual success.",
      link: "pcd-pharma-franchise",
    },
    {
      title: "About Us",
      description:
        "Discover our journey, mission, and the values that drive us to deliver excellence in everything we do.",
      link: "about",
    },
    {
      title: "Contact Us",
      description:
        "Have questions or need support? Reach out to our team—we're here to help you with anything you need.",
      link: "contact",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-[75vw] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Offering
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the pillars of our services and what we stand for
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border-t-4 border-[#129349] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Card Title */}
              <h3 className="font-semibold text-xl text-gray-900 mb-4">
                {offering.title}
              </h3>

              {/* Card Description */}
              <p className="text-base text-gray-600 mb-6 flex-grow leading-relaxed">
                {offering.description}
              </p>

              {/* Learn More Link */}
              <Link
                to={offering.link}
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

export default OurOffering;