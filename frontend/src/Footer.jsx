import React, { useState } from "react";
import { Facebook, Youtube, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="md:max-w-[75vw] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white mb-2">
                Suave Healthcare
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Looking into the future of healthcare
              </p>
            </div>

            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-colors">
                <Facebook size={16} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 cursor-pointer transition-colors">
                <Youtube size={16} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 cursor-pointer transition-colors">
                <Twitter size={16} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 cursor-pointer transition-colors">
                <Instagram size={16} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                <Mail size={16} className="text-white" />
              </div>
            </div>
          </div>

          {/* Overview Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Overview</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/franchise"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Become Partner
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/ptr-pts-calculator"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  PTR & PTS Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/t&c"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Bci Bearing, Vill. Lower Ambota Sector-5 Parwanoo Teh. Kasauli
                  Distt. Solan (HP)- 173220{" "}
                </p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">
                  <span className="font-medium">Phone:</span> 9215262669,
                  9056888801, 9218563669
                </p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">
                  <span className="font-medium">Business Hours:</span>
                  <br />
                  Mon–Sat: 9AM to 6PM
                </p>
              </div>
            </div>
          </div>

          {/* Business Enquiry Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-2">
              Business Enquiry
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Request a callback to get more information about becoming a
              Partner
            </p>

            <div className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-100 text-gray-900 rounded text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#129349]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-100 text-gray-900 rounded text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#129349]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-100 text-gray-900 rounded text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#129349]"
              />
              <button
                onClick={handleSubmit}
                className="cursor-pointer w-full bg-[#129349] hover:bg-[#015c30] text-white font-medium py-2 px-4 rounded text-sm transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
