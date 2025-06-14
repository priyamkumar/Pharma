import { ChevronRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="py-8 px-4">
      <div className="md:max-w-[75vw] mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          {" "}
          {/* Breadcrumb */}
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="flex-1 space-y-6">
              <nav className="flex items-center space-x-2 text-sm text-gray-600">
                <span
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Home
                </span>
                <ChevronRight className="w-4 h-4" />
                <span className="font-bold text-blue-800">Privacy Policy</span>
              </nav>
              <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Suave Healthcare Privacy Policy
              </h1>

              {/* Table of Contents */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Table of Contents
                </h2>
                <ol className="space-y-2">
                  <li>
                    <button
                      onClick={() => scrollToSection("privacy-policy")}
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                    >
                      1. Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("disclaimer-policy")}
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                    >
                      2. Disclaimer Policy
                    </button>
                  </li>
                </ol>
              </div>

              {/* Horizontal Divider */}
              <hr className="border-b border-gray-300 mb-8" />

              {/* Main Content */}
              <div className="space-y-8">
                {/* Privacy Policy Section */}
                <section id="privacy-policy">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Privacy Policy
                  </h2>

                  <div className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        1. Personal Information
                      </h3>
                      <p className="text-gray-700 leading-relaxed pl-4">
                        We collect and store personal information that you
                        voluntarily provide to us when using our healthcare
                        services. This information may include your name,
                        contact details, medical history, and other relevant
                        health information necessary to provide you with quality
                        healthcare services. We are committed to protecting your
                        personal information and maintaining the highest
                        standards of data security and privacy protection.
                      </p>
                    </div>

                    {/* Cookies */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        2. Cookies
                      </h3>
                      <p className="text-gray-700 leading-relaxed pl-4">
                        Our website uses cookies to enhance your user experience
                        and provide personalized content. By continuing to use
                        our website, you consent to our use of cookies. These
                        cookies help us understand how you interact with our
                        services and allow us to improve our website
                        functionality and user experience.
                      </p>
                    </div>

                    {/* Confidentiality */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        3. Confidentiality
                      </h3>
                      <p className="text-gray-700 leading-relaxed pl-4">
                        All confidentiality terms and conditions are governed by
                        our Franchise Agreement. We maintain strict
                        confidentiality protocols to protect your sensitive
                        health information and ensure compliance with applicable
                        healthcare privacy regulations. Your trust is paramount
                        to our healthcare services, and we are committed to
                        maintaining the confidentiality of all patient
                        information.
                      </p>
                    </div>

                    {/* Data Deletion Policy */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        4. Data Deletion Policy
                      </h3>
                      <div className="pl-4 space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            • Request Account Deletion:
                          </h4>
                          <p className="text-gray-700 leading-relaxed pl-4">
                            To request deletion of your account and associated
                            data, please send an email to our privacy team with
                            your account details and deletion request. Include
                            your full name, registered email address, and
                            clearly state your intention to delete your account.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            • Processing Time:
                          </h4>
                          <p className="text-gray-700 leading-relaxed pl-4">
                            We will acknowledge your deletion request within 5
                            business days of receipt. Your account and
                            associated data will be processed for deletion
                            within 30 days of acknowledgment, subject to any
                            legal or regulatory requirements.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            • Data Retention:
                          </h4>
                          <p className="text-gray-700 leading-relaxed pl-4">
                            Some data may be retained for legal, regulatory, or
                            legitimate business purposes as required by
                            applicable laws and healthcare regulations. We will
                            only retain the minimum necessary information for
                            the required retention period.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Disclaimer Policy Section */}
                <section id="disclaimer-policy" className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Disclaimer Policy
                  </h2>

                  <div className="space-y-6">
                    {/* General Disclaimer */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        1. General Disclaimer
                      </h3>
                      <p className="text-gray-700 leading-relaxed pl-4">
                        The information provided on this website is for general
                        informational purposes only and should not be considered
                        as professional advice.
                      </p>
                    </div>

                    {/* Product Liability */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        2. Product Liability
                      </h3>
                      <p className="text-gray-700 leading-relaxed pl-4">
                        Suave Healthcare Pvt. Ltd. does not assume any
                        responsibility for consequences arising from the use of
                        our products.
                      </p>
                    </div>

                    {/* External Links */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        3. External Links
                      </h3>
                      <p className="text-gray-700 leading-relaxed pl-4">
                        Our website may contain links to external sites; we are
                        not responsible for the content or privacy policies of
                        these sites.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
