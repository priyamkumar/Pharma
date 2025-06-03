import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TermsAndConditions() {
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState({
    terms: false,
    refund: false,
    payment: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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
                <span className="font-bold text-blue-800">
                  Terms and Conditions
                </span>
              </nav>
              <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  Suave Healthcare Policies
                </h1>
                <p className="text-lg text-gray-600 font-medium">
                  [Terms and Conditions]
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Table of Contents
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button
                    onClick={() => scrollToSection("terms-section")}
                    className="cursor-pointer text-left p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200 group"
                  >
                    <span className="text-blue-700 font-semibold group-hover:text-blue-800">
                      1. Terms and Conditions
                    </span>
                  </button>
                  <button
                    onClick={() => scrollToSection("refund-section")}
                    className="cursor-pointer text-left p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors duration-200 group"
                  >
                    <span className="text-green-700 font-semibold group-hover:text-green-800">
                      2. Refund & Cancellation Policy
                    </span>
                  </button>
                  <button
                    onClick={() => scrollToSection("payment-section")}
                    className="cursor-pointer text-left p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors duration-200 group"
                  >
                    <span className="text-purple-700 font-semibold group-hover:text-purple-800">
                      3. Payment Flow
                    </span>
                  </button>
                </div>
              </div>

              {/* Policy Sections */}
              <div className="space-y-6">
                {/* Terms and Conditions */}
                <div
                  id="terms-section"
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection("terms")}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h2 className="text-2xl font-bold text-gray-900">
                      Terms and Conditions
                    </h2>
                    {openSections.terms ? (
                      <ChevronUp className="h-6 w-6 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-500" />
                    )}
                  </button>

                  {openSections.terms && (
                    <div className="px-6 pb-6 border-t border-gray-200">
                      <div className="space-y-6 pt-6">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-3">
                            1. General Terms
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            By accessing and using Suave Healthcare services,
                            you agree to be bound by these terms and conditions.
                            These terms apply to all users of our healthcare
                            platform, including patients, healthcare providers,
                            and any other parties accessing our services. We
                            reserve the right to modify these terms at any time
                            with prior notice to our users.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-3">
                            2. Service Agreement
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            Our healthcare services are provided subject to
                            availability and in accordance with applicable
                            medical regulations. Users must provide accurate and
                            complete information when using our services. We
                            maintain the right to refuse service or terminate
                            accounts that violate our terms or applicable laws.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-3">
                            3. User Responsibilities
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            Users are responsible for maintaining the
                            confidentiality of their account information and for
                            all activities that occur under their account. You
                            must notify us immediately of any unauthorized use
                            of your account or any other breach of security.
                            Users must comply with all applicable laws and
                            regulations when using our services.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-3">
                            4. Limitation of Liability
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            Suave Healthcare shall not be liable for any
                            indirect, incidental, special, consequential, or
                            punitive damages resulting from the use of our
                            services. Our liability is limited to the maximum
                            extent permitted by applicable law and shall not
                            exceed the amount paid by the user for the specific
                            service in question.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Refund and Cancellation Policy */}
                <div
                  id="refund-section"
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection("refund")}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h2 className="text-2xl font-bold text-gray-900">
                      Refund and Cancellation Policy
                    </h2>
                    {openSections.refund ? (
                      <ChevronUp className="h-6 w-6 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-500" />
                    )}
                  </button>

                  {openSections.refund && (
                    <div className="px-6 pb-6 border-t border-gray-200">
                      <div className="space-y-6 pt-6">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-3">
                            1. Cancellation Policy
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            Appointments can be cancelled up to 24 hours before
                            the scheduled time without any charges.
                            Cancellations made within 24 hours of the
                            appointment may be subject to a cancellation fee.
                            Emergency cancellations will be reviewed on a
                            case-by-case basis and may be exempt from fees.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-3">
                            2. Refund Eligibility
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            Refunds are available for services not yet rendered
                            and for technical issues that prevent service
                            delivery. Refund requests must be submitted within
                            30 days of the original transaction. Medical
                            consultations that have been completed are generally
                            not eligible for refunds unless there were
                            significant service failures.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-3">
                            3. Processing Time
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            Approved refunds will be processed within 5-7
                            business days and will be credited back to the
                            original payment method. In some cases, it may take
                            additional time for the refund to appear in your
                            account depending on your financial institution's
                            processing times.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-3">
                            4. Dispute Resolution
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            If you have concerns about charges or services,
                            please contact our customer support team first. We
                            are committed to resolving issues fairly and
                            promptly. For unresolved disputes, we offer
                            mediation services through approved third-party
                            providers.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Payment Flow */}
                <div
                  id="payment-section"
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection("payment")}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h2 className="text-2xl font-bold text-gray-900">
                      Payment Flow
                    </h2>
                    {openSections.payment ? (
                      <ChevronUp className="h-6 w-6 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-500" />
                    )}
                  </button>

                  {openSections.payment && (
                    <div className="px-6 pb-6 border-t border-gray-200">
                      <div className="space-y-6 pt-6">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-3">
                            1. Payment Methods
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            We accept various payment methods including credit
                            cards, debit cards, digital wallets, and bank
                            transfers. All payments are processed through
                            secure, encrypted channels to ensure your financial
                            information remains protected. Insurance payments
                            and reimbursements are also supported where
                            applicable.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-3">
                            2. Payment Processing
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            Payments are typically processed immediately upon
                            confirmation. For appointment bookings, payment
                            authorization occurs at the time of booking, with
                            the actual charge processed either at the time of
                            service or according to our billing cycle. Failed
                            payments will result in service suspension until
                            payment issues are resolved.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-3">
                            3. Billing and Invoicing
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            Detailed invoices are provided for all services and
                            can be accessed through your account portal.
                            Invoices include service descriptions, dates,
                            provider information, and payment details. Monthly
                            statements are available for users with recurring
                            services or subscription plans.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-3">
                            4. Security and Compliance
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            All payment transactions are secured using
                            industry-standard encryption and comply with PCI DSS
                            requirements. We do not store complete credit card
                            information on our servers. Payment data is handled
                            by certified payment processors who maintain the
                            highest security standards and regulatory
                            compliance.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
