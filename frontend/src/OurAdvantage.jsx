import React from "react";
import Trusted from "./Trusted";
import { Link } from "react-router-dom";

export default function OurAdvantage() {
  return (
    <section className="py-12">
      <div className="container md:max-w-[75vw] mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-700 mb-8">
          Suave Healthcare Advantage
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border-l-4 border-[#129349] pl-6">
            <h3 className="font-bold text-gray-800 mb-2">
              Fast & Reliable Order Processing
            </h3>
            <p className="text-gray-600 mb-2">
              Experience same-day order dispatch and instant updates on billing,
              dispatch, and tracking through email, SMS, and WhatsApp, ensuring
              a smooth and hassle-free experience for our partners.
            </p>
            <Link to="/about" className="text-gray-700 font-medium">
              Know More &gt;&gt;
            </Link>
          </div>

          <div className="border-l-4 border-[#129349] pl-6">
            <h3 className="font-bold text-gray-800 mb-2">
              Wide Range of Promotional Inputs
            </h3>
            <p className="text-gray-600 mb-2">
              We offer a variety of promotional materials, such as LBL, visual
              aids, pens, keychains, MR shirts, laptop bags, and doctor gifts,
              to help our partners effectively promote their business.
            </p>
            <Link to="/about" className="text-gray-700 font-medium">
              Know More &gt;&gt;
            </Link>
          </div>

          <div className="border-l-4 border-[#129349] pl-6">
            <h3 className="font-bold text-gray-800 mb-2">
              Dedicated Account Management
            </h3>
            <p className="text-gray-600 mb-2">
              Each partner benefits from a dedicated account manager who assists
              with all their needs, complaints, and inquiries, providing
              personalized support and ensuring complete satisfaction.
            </p>
            <Link to="/about" className="text-gray-700 font-medium">
              Know More &gt;&gt;
            </Link>
          </div>

          <div className="border-l-4 border-[#129349] pl-6">
            <h3 className="font-bold text-gray-800 mb-2">
              Automatic Payment System
            </h3>
            <p className="text-gray-600 mb-2">
              Our automatic payment system enables faster order dispatch and
              seamless transactions, allowing our partners to focus on what
              matters most – growing their business.
            </p>
            <Link to="/about" className="text-gray-700 font-medium">
              Know More &gt;&gt;
            </Link>
          </div>
        </div>
        <Trusted/>
      </div>
    </section>
  );
}
