import {
  ChevronRight,
  Users,
  Building2,
  Package,
  ShieldCheck,
  TrendingUp,
  Megaphone,
  Zap,
  GraduationCap,
  Truck,
  Check,
  Briefcase,
  Shield,
  Phone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import MovingText from "./MovingText";
import LetsTalk from "./LetsTalk";
import Testimonials from "./Testimonials";
import Divisions from "./Divisions";
import { useEnquiry } from "../context/EnquiryContext";
import EnquiryModal from "./EnquiryModal";
import { useEnquiryStore } from "../store/enquiryStore";
import SEO from "./SEO";

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
              <span className="font-bold text-blue-800">Franchise</span>
            </nav>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#129349] via-blue-600 to-blue-800 bg-clip-text text-transparent">
                Suave Healthcare:
              </span>
              <br />
              <span className="text-gray-800">
                Your Gateway to
                <span className="text-[#129349]"> PCD Pharma</span>
                <br />
                Franchise Success
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Join India's fastest-growing pharmaceutical network and unlock
              unprecedented business opportunities. With Suave Healthcare's
              comprehensive support system, proven business model, and extensive
              product portfolio, you're not just starting a franchise – you're
              building a legacy in healthcare excellence.
            </p>

            {/* CTA Button */}
            <button
              className="cursor-pointer group relative px-8 py-4 bg-[#129349] text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              onClick={() => setIsEnquiryModalOpen(true)}
            >
              <span className="relative z-10 flex items-center">
                Send Enquiry
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Right Column */}
          <div className="relative">
            {/* Main Image Container with Pharmacy Setting */}
            <div className="relative bg-[#ddfbe9] rounded-3xl p-8 shadow-2xl overflow-hidden">
              {/* Overlay Text - Top */}
              <div className="relative z-10 mb-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 leading-tight">
                    SEIZE YOUR PCD FRANCHISE OPPORTUNITY WITH
                    <span className="text-blue-700"> SUAVE HEALTHCARE</span>
                  </h3>
                </div>
              </div>

              {/* Signboard with Key Benefits */}
              <div className="relative z-10">
                <div className="bg-[#129349] text-white rounded-2xl p-6 shadow-xl transform hover:rotate-1 transition-transform duration-300">
                  <div className="text-center">
                    <h4 className="text-lg lg:text-xl font-bold leading-tight">
                      MONOPOLY RIGHTS, HIGH PROFITS,
                      <br />
                      LOW INVESTMENT AND MORE
                      <br />
                      <span className="text-yellow-200">AWAIT YOU</span>
                    </h4>
                  </div>

                  {/* Decorative corners */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-yellow-200"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-yellow-200"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-yellow-200"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-yellow-200"></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#129349] rounded-full shadow-lg animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Statistics Strip */}
      <div className="bg-white/80 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-15 items-center justify-center">
            {/* Customers */}
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent mb-2">
                5000+
              </div>
              <div className="text-gray-600 font-medium text-lg">
                Happy Customers
              </div>
            </div>

            {/* Divisions */}
            <div className="text-center group hover:scale-105 transition-transform duration-300 md:order-3">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                11+
              </div>
              <div className="text-gray-600 font-medium text-lg">
                Business Divisions
              </div>
            </div>

            {/* Products */}
            <div className="text-center group hover:scale-105 transition-transform duration-300 md:order-4 md:col-span-1">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg">
                  <Package className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent mb-2">
                1500+
              </div>
              <div className="text-gray-600 font-medium text-lg">
                Quality Products
              </div>
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

function PCD() {
  return (
    <div className="md:max-w-[75vw] mx-auto">
      <div className="bg-white rounded-lg overflow-hidden">
        {/* Header */}
        <div className="px-8 py-6">
          <h1 className="text-4xl md:text-5xl font-bold">What is PCD?</h1>
        </div>

        {/* Main Content */}
        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column - Image */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-800 to-blue-600 rounded-xl shadow-lg p-8 text-white">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold">
                      Partnership & Collaboration
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white/10 rounded p-2">
                        Strategic Alliances
                      </div>
                      <div className="bg-white/10 rounded p-2">
                        Joint Ventures
                      </div>
                      <div className="bg-white/10 rounded p-2">
                        Market Expansion
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#129349] rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      PCD Solutions
                    </h4>
                    <p className="text-sm text-gray-600">
                      Business Development
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 leading-relaxed text-lg font-semibold">
                  Propaganda Cum Distribution (PCD) is a widely adopted business
                  model in the pharmaceutical industry that enables individuals
                  or small businesses to collaborate with established
                  pharmaceutical companies. Under the PCD model, these
                  entrepreneurs and businesses act as distributors and promoters
                  for the pharmaceutical company's products in a designated
                  area, which is granted to them as a monopoly, thereby reducing
                  competition and allowing them to focus on building their
                  business.{" "}
                </p>
                <br />
                <p className="text-gray-600 leading-relaxed text-lg font-semibold">
                  As part of a PCD Pharma Franchise, the franchise partners
                  receive comprehensive support from the pharmaceutical company.
                  This includes access to the company's diverse product
                  portfolio, as well as marketing materials, promotional aids,
                  and continuous training and guidance to stay updated with
                  industry trends and best practices. The PCD model enables
                  partners to capitalize on the growing demand for quality
                  healthcare solutions, while benefiting from the expertise and
                  resources of the parent pharmaceutical company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PharmaAdvantage() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Exclusive Monopoly Rights",
      description:
        "Secure your territory with exclusive distribution rights, ensuring no competition in your designated area and maximum market control.",
    },
    {
      icon: TrendingUp,
      title: "Low Investment, High Returns",
      description:
        "Start your pharma business with minimal capital investment while enjoying substantial profit margins and quick ROI.",
    },
    {
      icon: Megaphone,
      title: "Comprehensive Marketing Support",
      description:
        "Benefit from our complete marketing arsenal including promotional materials, digital campaigns, and brand building support.",
    },
    {
      icon: Zap,
      title: "Scalable Business Model",
      description:
        "Grow your business at your own pace with our flexible framework that adapts to your expansion goals and market demands.",
    },
    {
      icon: Package,
      title: "Access to Diverse Product Portfolio",
      description:
        "Choose from our extensive range of high-quality pharmaceutical products across multiple therapeutic segments.",
    },
    {
      icon: GraduationCap,
      title: "Ongoing Training & Guidance",
      description:
        "Receive continuous education, product training, and business guidance from our experienced industry professionals.",
    },
    {
      icon: Truck,
      title: "Streamlined Supply Chain Management",
      description:
        "Enjoy hassle-free inventory management with our efficient logistics network ensuring timely deliveries.",
    },
  ];

  return (
    <div className="md:max-w-[75vw] px-4 mx-auto bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 leading-tight">
            Experience the{" "}
            <span className="text-transparent bg-clip-text bg-[#129349]">
              PCD Pharma Advantage
            </span>
          </h1>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-green-800 to-blue-600 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-12">
            {/* Left Text Block */}
            <div className="text-white space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200">
                    YOUR GATEWAY TO PCD PHARMA SUCCESS!
                  </span>
                </h2>
                <p className="text-xl md:text-2xl font-semibold mb-4 text-pink-100">
                  Experience Unmatched Support and Profitability
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-xl flex items-center justify-center">
                  <div className="text-white text-center space-y-4">
                    <div className="text-8xl">👍</div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <p className="font-bold text-lg">SUCCESS</p>
                      <p className="text-sm">Guaranteed!</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">⭐</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-3xl">💰</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Our PCD Pharma Program?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive benefits that set us apart in the
            pharmaceutical distribution industry
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#ddfbe9] rounded-xl flex items-center justify-center shadow-md">
                      <IconComponent className="h-6 w-6 text-[#129349]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function PharmaOffering() {
  const features = [
    {
      title: "Exclusive monopoly rights",
      description: "in the designated area",
    },
    {
      title: "Access to our diverse product portfolio,",
      description: "covering various therapeutic segments",
    },
    {
      title: "Competitive pricing and marketing support",
      description: "through promotional materials",
    },
    {
      title: "Ongoing training, guidance,",
      description: "and dedicated account management",
    },
    {
      title: "Seamless order processing, dispatch, and tracking",
      description: "via advanced mobile application",
    },
  ];

  const highlights = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      percentage: "100%",
      caption: "Genuine Products",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      percentage: "Secure",
      caption: "Payments",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      percentage: "24 × 7",
      caption: "Customer Support",
    },
  ];

  return (
    <div className="md:max-w-[75vw] mx-auto px-4 py-12 space-y-16">
      {/* Section 1: Our Offering */}
      <section className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">Our Offering</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            At Suave Healthcare Pharma, we provide our partners with a
            comprehensive PCD Pharma Franchise package that includes
          </p>
        </div>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 bg-[#129349] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-800">
                  <span className="font-bold">{feature.title}</span>
                  {feature.description && (
                    <span className="ml-1">{feature.description}</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Call to Action / Highlights */}
      <section className="rounded-2xl px-8 py-12">
        <div className="text-center space-y-12">
          <h2 className="text-3xl md:text-4xl text-gray-900">
            <span className="font-bold">Leading the Way</span> in{" "}
            <span className="font-bold">Pharma Franchise</span>{" "}
            <span className="font-bold">Innovation</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 p-6 bg-[#ddfbe9] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-[#129349]">{highlight.icon}</div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {highlight.percentage}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {highlight.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Franchise() {
  return (
    <>
      <SEO slug="franchise" />
      <Landing />
      <MovingText />
      <PCD />
      <LetsTalk />
      <PharmaAdvantage />
      <PharmaOffering />
      <Testimonials />
      <Divisions />
      {/* <EnquiryModal /> */}
    </>
  );
}
