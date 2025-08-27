import {
  ChevronRight,
  Users,
  ShieldCheck,
  Shield,
  ChevronDown,
  Award,
  Pill,
  Droplets,
  Syringe,
  Heart,
  Tablet,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEnquiryStore } from "../store/enquiryStore";
import SEO from "./SEO";
import WhyUs from "./WhyUs";
import { useState, useEffect } from "react";

function Landing() {
  const navigate = useNavigate();
  const { setIsEnquiryModalOpen } = useEnquiryStore();
  return (
    <div className="px-4">
      {/* Main Content Section */}
      <div className="md:max-w-[75vw] container mx-auto py-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8 animate-fade-in">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <span
                className="hover:text-blue-600 transition-colors cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home
              </span>
              <ChevronRight className="w-4 h-4" />
              <span className="font-bold text-blue-800">
                Third Party Manufacturing
              </span>
            </nav>

            {/* Headline */}
            <h1 className="text-4xl lg:text-4xl font-bold leading-tight">
              Reliable Third-Party Pharma Manufacturing in India
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Suave Healthcare is one of India’s most trusted names in{" "}
              <span className="font-bold">
                third-party pharmaceutical manufacturing
              </span>
              . With <span className="font-bold">20+ years of expertise</span>{" "}
              and{" "}
              <span className="font-bold">
                WHO-GMP & ISO 9001:2008 certified facilities, we deliver
                high-quality, affordable, and timely pharma manufacturing
                solutions.
              </span>{" "}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Whether you need{" "}
              <span className="font-bold">
                tablets, capsules, syrups, injections, or ointments
              </span>
              , our advanced units are equipped to handle your requirements with{" "}
              <span className="font-bold">precision, compliance, and care</span>
              .
            </p>
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsEnquiryModalOpen(true)}
                className="cursor-pointer px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50"
                style={{ backgroundColor: "#129349" }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#0f7a3c")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#129349")
                }
              >
                Request a Manufacturing Quote
              </button>
              <button
                onClick={() => setIsEnquiryModalOpen(true)}
                className="cursor-pointer px-8 py-4 bg-transparent hover:bg-green-50 text-green-700 font-semibold border-2 border-green-600 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50"
                style={{ borderColor: "#129349", color: "#129349" }}
              >
                <Users className="w-5 h-5 inline mr-2" />
                Talk to Our Team
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="text-sm text-gray-500 border-t border-gray-200 pt-4">
              <span className="font-medium">✓ GMP-compliant</span> •
              <span className="font-medium"> On-time delivery</span> •
              <span className="font-medium"> Pan-India logistics</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-green-800 shadow-sm">
                <Award className="w-4 h-4 mr-2 text-green-600" />
                20+ Years
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-green-800 shadow-sm">
                <ShieldCheck className="w-4 h-4 mr-2 text-green-600" />
                WHO-GMP Certified
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-green-800 shadow-sm">
                <Award className="w-4 h-4 mr-2 text-green-600" />
                ISO 9001:2008
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-green-100 to-white rounded-3xl p-8 shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-green-200 rounded-2xl opacity-60 transform rotate-12"></div>
              <div className="absolute bottom-8 left-6 w-12 h-12 bg-green-300 rounded-xl opacity-40 transform -rotate-6"></div>

              {/* Main illustration area */}
              <div className="relative z-10 space-y-6">
                {/* Mock medication bottles and boxes */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg shadow-md p-4 border border-green-200">
                    <div
                      className="w-full h-16 bg-gradient-to-b from-green-600 to-green-700 rounded-md mb-2 flex items-center justify-center"
                      style={{ backgroundColor: "#129349" }}
                    >
                      <Tablet className="w-8 h-8 text-white" />
                    </div>
                    <div className="h-2 bg-gray-200 rounded mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4 border border-green-200">
                    <div className="w-full h-16 bg-gradient-to-b from-green-500 to-green-600 rounded-md mb-2 flex items-center justify-center">
                      <Droplets className="w-8 h-8 text-white" />
                    </div>
                    <div className="h-2 bg-gray-200 rounded mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4 border border-green-200">
                    <div className="w-full h-16 bg-gradient-to-b from-green-400 to-green-500 rounded-md mb-2 flex items-center justify-center">
                      <Pill className="w-8 h-8 text-white" />
                    </div>
                    <div className="h-2 bg-gray-200 rounded mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                  </div>

                  {/* Decorative corners */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-yellow-200"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-yellow-200"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-yellow-200"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-yellow-200"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-md p-6 border border-green-200">
                <div className="flex items-center justify-center mb-3">
                  <Syringe className="w-12 h-12 text-green-600" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-green-200">
                <div className="flex items-center justify-center mb-3">
                  <Heart className="w-12 h-12 text-green-600" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded"></div>
                  <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg border border-green-200">
              <ShieldCheck className="w-6 h-6 text-green-600" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg border border-green-200">
              <Award className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

const ManufacturingCapabilities = () => {
  const navigate = useNavigate();

  const capabilities = [
    {
      title: "Tablets & Capsules",
      description: "General health, cardiac, diabetic, gynae, derma, ayurvedic",
      icon: "💊",
    },
    {
      title: "Syrups & Suspensions",
      description: "Pediatric care, antibiotics, nutritional supplements",
      icon: "🧴",
    },
    {
      title: "Injectables",
      description: "High-quality sterile formulations for critical care",
      icon: "💉",
    },
    {
      title: "Ointments & Creams",
      description: "Skin care, derma, and specialty treatments",
      icon: "🧴✨",
    },
    {
      title: "Soft Gelatins & Drops",
      description: "Eye drops, ear drops, and specialty softgels",
      icon: "👁️",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="md:max-w-[75vw] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            What We Manufacture
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full mt-2"
              style={{ backgroundColor: "#129349" }}
            ></div>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mt-8">
            We provide complete contract manufacturing services across multiple
            dosage forms and therapeutic categories:
          </p>
        </div>

        {/* Manufacturing Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out p-8 border-t-4 group cursor-pointer"
              style={{ borderTopColor: "#129349" }}
              role="article"
              aria-label={`Manufacturing capability: ${capability.title}`}
            >
              <div className="text-center">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>

              {/* Subtle accent line */}
              <div
                className="w-16 h-0.5 mx-auto mt-6 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                style={{ backgroundColor: "#129349" }}
              ></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button
            onClick={() => navigate("/pharma-products")}
            className="cursor-pointer px-8 py-4 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-opacity-50 text-lg"
            style={{
              backgroundColor: "#129349",
              focusRingColor: "#129349",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#0f7a3c";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#129349";
            }}
            aria-label="Explore our complete product portfolio"
          >
            Explore Full Product Portfolio
          </button>

          <p className="text-sm text-gray-500 mt-4 font-medium">
            Trusted by healthcare brands across India.
          </p>
        </div>
      </div>
    </section>
  );
};

function ManufacturingProcess() {
  const [isVisible, setIsVisible] = useState(false);
  const { setIsEnquiryModalOpen } = useEnquiryStore();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    {
      number: 1,
      icon: "📝",
      title: "Share Your Requirements",
      description: "Tell us your product needs & quantity.",
    },
    {
      number: 2,
      icon: "🏭",
      title: "Production & Quality Check",
      description:
        "WHO-GMP compliant manufacturing with strict QC at every stage.",
    },
    {
      number: 3,
      icon: "📦",
      title: "Packaging & Delivery",
      description: "Leak-proof packaging and on-time dispatch across India.",
    },
  ];

  return (
    <section
      className={`py-16 px-4 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-labelledby="process-heading"
    >
      <div className="md:max-w-[75vw] mx-auto">
        {/* Main Heading */}
        <h2
          id="process-heading"
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          How Our Manufacturing Process Works
          <span className="block text-2xl md:text-3xl lg:text-4xl mt-2">
            (3 Simple Steps)
          </span>
          <div
            className="w-32 h-1 mx-auto mt-4 rounded-full"
            style={{ backgroundColor: "#129349" }}
          ></div>
        </h2>

        {/* Steps Container */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative group transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
              }}
            >
              {/* Connection Line (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-12 h-0.5 bg-gray-200 z-0 transform translate-x-0">
                  <div
                    className="h-full transition-all duration-1000 delay-1000 origin-left"
                    style={{
                      backgroundColor: "#129349",
                      transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                    }}
                  ></div>
                </div>
              )}

              {/* Step Card */}
              <div
                className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 group-hover:border-opacity-30 z-10"
                style={{
                  borderColor: index === 1 ? "#129349" : undefined,
                  borderWidth: index === 1 ? "2px" : "2px",
                }}
              >
                {/* Step Number Badge */}
                <div
                  className="absolute -top-4 left-8 w-8 h-8 rounded-full text-white text-lg font-bold flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: "#129349" }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-6xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: "#129349" }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <p
          className={`text-center text-lg md:text-xl text-gray-700 font-light italic mt-16 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-700 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          It's that simple—you focus on growing your brand, we handle the
          manufacturing.
        </p>

        {/* CTA Button */}
        <div
          className={`text-center transition-all duration-700 delay-1200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <button
            onClick={() => setIsEnquiryModalOpen(true)}
            className="cursor-pointer px-8 py-4 text-white font-semibold text-lg rounded-full shadow-2xl hover:shadow-3xl active:scale-95 transform transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-200 focus:ring-opacity-50"
            style={{
              backgroundColor: "#129349",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#0d7a3a";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#129349";
            }}
            aria-label="Get a manufacturing quote for your products"
          >
            Get a Manufacturing Quote
          </button>
        </div>
      </div>
    </section>
  );
}

function QualityComplianceSection() {
  const complianceItems = [
    "WHO-GMP & ISO 9001:2008 compliance",
    "Strict multi-stage quality testing",
    "Safe, attractive, and tamper-proof packaging",
    "Government regulations & pharma industry guidelines",
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Decorative border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#129349] to-transparent"></div>

      <div className="max-w-3xl mx-auto relative">
        {/* Decorative illustration placeholder for desktop */}
        <div className="hidden lg:block absolute -right-20 top-8 opacity-10">
          <Shield className="w-48 h-48 text-[#129349]" />
        </div>

        {/* Main content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            Commitment to Quality & Compliance
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#129349] rounded-full"></div>
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
            <div className="w-full h-full bg-[#129349] rounded-full transform translate-x-16 -translate-y-16"></div>
          </div>

          <p className="text-lg md:text-xl text-gray-700 text-center mb-10 font-medium leading-relaxed">
            At Suave Healthcare, quality comes first. Every batch is produced
            under:
          </p>

          <ul className="space-y-6 mb-10">
            {complianceItems.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 group hover:text-[#129349] transition-colors duration-200 transform hover:translate-x-2 transition-transform"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-[#129349] group-hover:scale-110 transition-transform duration-200" />
                </div>
                <span className="text-gray-700 text-lg font-medium leading-relaxed group-hover:text-[#129349]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-xl text-gray-800 text-center font-semibold italic leading-relaxed">
              This ensures every product leaving our facility is safe,
              effective, and market-ready.
            </p>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#129349] to-transparent opacity-20"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 opacity-20">
          <div className="w-8 h-8 bg-[#129349] rounded-full"></div>
        </div>
        <div className="absolute -right-4 bottom-1/4 opacity-20">
          <div className="w-6 h-6 bg-[#129349] rounded-full"></div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 transform -translate-x-32 translate-y-32">
        <div className="w-full h-full bg-[#129349] rounded-full"></div>
      </div>
    </section>
  );
}

function ManufacturingBenefits() {
  const benefits = [
    {
      emoji: "💰",
      title: "Cost-Effective Production",
      description: "Reduce infrastructure & overhead expenses",
    },
    {
      emoji: "📦",
      title: "Bulk & Flexible Orders",
      description: "Manufacture as per your business needs",
    },
    {
      emoji: "⏱️",
      title: "Quick Turnaround Time",
      description: "Efficient production & fast delivery",
    },
    {
      emoji: "🔬",
      title: "Custom Formulations",
      description: "Support for new product development",
    },
    {
      emoji: "🤝",
      title: "Trusted Partnership",
      description: "Transparent process, long-term collaboration",
    },
  ];

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-green-50"
      aria-label="Third-party manufacturing benefits"
    >
      <div className="md:max-w-[75vw] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Benefits of Third-Party Manufacturing{" "}
            <span className="relative inline-block">
              <span className="relative z-10">with Suave Healthcare</span>
              <div
                className="absolute bottom-1 left-0 w-full h-3 -z-10 rounded"
                style={{ backgroundColor: "#129349", opacity: 0.2 }}
              ></div>
            </span>
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full mt-4"
            style={{ backgroundColor: "#129349" }}
          ></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out p-6 lg:p-8 border-l-4 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                borderLeftColor: "#129349",
                focusRingColor: "#129349",
              }}
              tabIndex={0}
            >
              <div className="flex items-start space-x-4">
                {/* Emoji/Icon */}
                <div className="flex-shrink-0">
                  <span className="text-3xl lg:text-4xl group-hover:animate-bounce transition-transform duration-200">
                    {benefit.emoji}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Subtle accent line */}
              <div
                className="mt-6 w-16 h-0.5 rounded-full opacity-30 group-hover:opacity-60 transition-opacity"
                style={{ backgroundColor: "#129349" }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ThirdPartyFAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const navigate = useNavigate();

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      question: "What is the minimum order quantity (MOQ)?",
      answer:
        "MOQs vary by dosage form—our team will guide you based on your needs.",
    },
    {
      question: "How long does production take?",
      answer:
        "Standard timelines are 30–45 days after order confirmation & approvals.",
    },
    {
      question: "Can I customize my products?",
      answer:
        "Yes, we offer custom formulations and packaging tailored to your brand.",
    },
    {
      question: "Do you follow government regulations?",
      answer:
        "Absolutely—our facilities are WHO-GMP certified and comply with all regulatory standards.",
    },
    {
      question: "Which product categories do you manufacture?",
      answer:
        "We cover general, gynae, derma, cardiac, diabetic, ayurvedic, pediatric, and more.",
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Third-Party Manufacturing FAQs
          </h1>
          <div
            className="w-24 h-1 mx-auto"
            style={{ backgroundColor: "#129349" }}
          ></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openItems.has(index);
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 hover:bg-[#129349]/5 transition-all duration-300"
                style={{
                  borderColor: isOpen ? "#129349" : "rgba(18, 147, 73, 0.3)",
                }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="cursor-pointer w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#129349]/20 rounded-2xl"
                >
                  <span className="text-lg font-bold text-gray-900 pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#129349] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all ease-in-out duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed mt-3">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

function SuaveHealthcareCTA() {
  const navigate = useNavigate();
  const { setIsEnquiryModalOpen } = useEnquiryStore();
  return (
    <section className="w-full py-16 px-4 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#129349]/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#129349]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#129349]/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-3xl mx-auto text-center animate-fadeInUp">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            Start Your Manufacturing Journey with{" "}
            <span className="relative inline-block">
              <span className="text-[#129349]">Suave Healthcare</span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#129349] rounded-full transform scale-x-100 transition-transform duration-500"></div>
            </span>
          </h2>
        </div>

        {/* Main subtext */}
        <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed font-medium">
          With our certified facilities, wide product portfolio, and proven
          expertise, Suave Healthcare is the partner of choice for third-party
          pharma manufacturing in India.
        </p>

        {/* Secondary line */}
        <p className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed">
          Let's build a long-term partnership that grows your brand with trust,
          quality, and success.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary Button */}
          <button
            onClick={() => setIsEnquiryModalOpen(true)}
            className="cursor-pointer w-full sm:w-auto bg-[#129349] hover:bg-green-700 active:scale-95 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-[#129349]/25 focus-visible:ring-4 focus-visible:ring-[#129349]/50"
            aria-label="Request a manufacturing quote from Suave Healthcare"
          >
            Request a Manufacturing Quote
          </button>

          {/* Secondary Button */}
          <button
            onClick={() => navigate("/contact")}
            className="cursor-pointer w-full sm:w-auto bg-transparent hover:bg-[#129349] hover:text-white active:scale-95 text-[#129349] border-2 border-[#129349] font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-[#129349]/25 focus-visible:ring-4 focus-visible:ring-[#129349]/50"
            aria-label="Contact Suave Healthcare today"
          >
            Contact Us Today
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}

export default function ThirdParty() {
  return (
    <>
      <SEO slug="third-party-manufacturing" />
      <Landing />
      <WhyUs />
      <ManufacturingCapabilities />
      <ManufacturingProcess />
      <QualityComplianceSection />
      <ManufacturingBenefits />
      <ThirdPartyFAQ />
      <SuaveHealthcareCTA />
    </>
  );
}
