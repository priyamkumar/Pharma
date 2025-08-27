import {
  Check,
  ChevronRight,
  Building2,
  MapPin,
  Users,
  FileText,
  CreditCard,
  Truck,
  Receipt,
  Factory,
  Briefcase,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Directors from "./Directors";
import SEO from "./SEO";
import ComprehensivePharmaSolutions from "./comprehensivePharmaSolutions";
import WhyUs from "./WhyUs";
import { useEnquiryStore } from "../store/enquiryStore";

function Objective() {
  const navigate = useNavigate();
  const missions = [
    {
      start: "Deliver",
      bold: "safe, effective, and affordable medicines",
      end: " to all.",
    },
    {
      start: "Build",
      bold: "long-term, transparent, and supportive partnerships",
      end: ".",
    },
    {
      start: "Empower pharma entrepreneurs with",
      bold: "marketing support, product training, and on-time supply",
      end: ".",
    },
  ];
  return (
    <div className="py-8 px-4">
      <SEO slug="about" />
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
                <span className="font-bold text-blue-800">About Us</span>
              </nav>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Who We Are
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Welcome to Suave Healthcare Private Limited, a trusted
                  pharmaceutical company based in Solan, Himachal Pradesh. Since
                  our founding in 2002, we’ve been dedicated to improving
                  healthcare access across India by providing high-quality,
                  affordable medicines through PCD Pharma Franchise and
                  Third-Party Manufacturing services.
                </p>

                <p className="text-lg">
                  Over the last 20+ years, we’ve grown into a WHO-GMP &
                  ISO-certified organization trusted by 1,000+ healthcare
                  entrepreneurs nationwide.
                </p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  We believe good health should be within everyone’s reach.
                  That’s why our mission is to:
                </p>
                <div className="space-y-6">
                  {missions.map((mission, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-[#129349] rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-lg text-gray-800">
                          {mission.start}
                          <span className="ml-1 font-bold">{mission.bold}</span>
                          {mission.end}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-lg">
                  At Suave Healthcare, we don’t just provide medicines—we
                  provide opportunities for growth, success, and lasting
                  collaborations.
                </p>
              </div>
            </div>

            {/* Right Column - Image with Overlay */}
            <div className="flex-1 min-h-96 mt-20">
              <div className="relative h-full rounded-xl shadow-lg overflow-hidden bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700">
                {/* Gradient Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-green-500/30 to-teal-600/40"></div>

                {/* Overlay Content */}
                <div className="relative h-full flex flex-col justify-center items-center text-center p-8 space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-wide">
                      SUAVE HEALTHCARE
                    </h1>

                    <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>

                    <h2 className="text-xl lg:text-2xl font-semibold text-white/95 tracking-wide">
                      WHERE INNOVATION MEETS INTEGRITY
                    </h2>
                  </div>

                  <div className="max-w-md">
                    <p className="text-lg lg:text-xl text-white/90 font-medium leading-relaxed">
                      A Leading Force in Pharma Franchise and Quality Healthcare
                      Solutions
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-8 right-8 w-16 h-16 border-2 border-white/30 rounded-full"></div>
                  <div className="absolute bottom-8 left-8 w-12 h-12 border-2 border-white/20 rounded-full"></div>
                  <div className="absolute top-1/2 left-4 w-2 h-2 bg-white/40 rounded-full"></div>
                  <div className="absolute top-1/3 right-6 w-3 h-3 bg-white/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OurValues() {
  const values = [
    {
      heading: "Quality First",
      description: "Every product undergoes strict quality checks.",
    },
    {
      heading: "On-Time Always",
      description: "Seamless logistics ensure timely delivery.",
    },
    {
      heading: "Partnership Driven",
      description: "Transparent, reliable, and growth-focused relationships.",
    },
    {
      heading: "Innovation with Care",
      description: "Expanding our portfolio to meet evolving healthcare needs.",
    },
  ];
  return (
    <section className="py-16">
      <div className="max-w-[75vw] mx-auto px-4">
        {" "}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
              Our Values
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-[#129349] rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-800">
                        <span className="ml-1 font-bold">
                          {value.heading} –{" "}
                        </span>
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const LeadershipSection = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 md:p-12 border border-slate-100">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-50 to-emerald-100 mb-6">
              <Users
                className="w-8 h-8 text-emerald-700"
                style={{ color: "#129349" }}
              />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
              Leadership
            </h2>

            <div
              className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent mx-auto rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, transparent, #129349, transparent)",
              }}
            ></div>
          </div>

          {/* Content Section */}
          <div className="max-w-3xl mx-auto">
            <div
              className="bg-gradient-to-r from-emerald-50 to-slate-50 rounded-xl p-6 md:p-8 border-l-4 border-emerald-600"
              style={{ borderLeftColor: "#129349" }}
            >
              <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-light">
                <span className="text-slate-800 font-semibold">
                  Suave Healthcare
                </span>{" "}
                is led by{" "}
                <span
                  className="font-semibold text-emerald-700"
                  style={{ color: "#129349" }}
                >
                  Mr. Krishan Kumar Doda (CEO)
                </span>
                , whose vision has shaped the company into one of India's most
                respected pharma partners. With a skilled team of{" "}
                <span className="font-semibold text-slate-800">
                  10–15 dedicated professionals
                </span>
                , we continue to grow with{" "}
                <span
                  className="font-semibold text-emerald-700"
                  style={{ color: "#129349" }}
                >
                  innovation, efficiency, and customer trust
                </span>{" "}
                at our core.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CompanyFactsheet = () => {
  const basicInfoItems = [
    {
      icon: <Briefcase className="w-5 h-5 text-emerald-600" />,
      label: "Nature of Business",
      value: "PCD Pharma & Third-Party Manufacturer",
    },
    {
      icon: <Factory className="w-5 h-5 text-emerald-600" />,
      label: "Additional Roles",
      value:
        "Manufacturer, Supplier, Wholesaler, Distributor, Trader, Service Provider",
    },
    {
      icon: <MapPin className="w-5 h-5 text-emerald-600" />,
      label: "Registered Address",
      value:
        "SCO-10, Marigold Spaces, Opp. Bollywood Heights 2, Peermuchalla, Zirakpur, Distt. SAS Nagar (PB) – 140603",
    },
    {
      icon: <Building2 className="w-5 h-5 text-emerald-600" />,
      label: "Industry Expertise",
      value:
        "Tablets, Capsules, Softgelatin, Syrups, Injectables, Ointments, Beta-lactams, Eye Drops, Ayurvedic Medicines, Eye Ointments, Ear Drops",
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-600" />,
      label: "Employees",
      value: "10–15 People",
    },
    {
      icon: <FileText className="w-5 h-5 text-emerald-600" />,
      label: "Legal Status",
      value: "Private Limited Company",
    },
  ];

  const statutoryItems = [
    {
      icon: <Receipt className="w-5 h-5 text-emerald-600" />,
      label: "GST Number",
      value: "03AAKCS7557H1Z2",
    },
    {
      icon: <CreditCard className="w-5 h-5 text-emerald-600" />,
      label: "Payment Modes",
      value: "Cash, Cheque, DD, Credit Card, Online",
    },
    {
      icon: <Truck className="w-5 h-5 text-emerald-600" />,
      label: "Shipment Modes",
      value: "By Road, Air, and Railway",
    },
  ];

  const InfoItem = ({ icon, label, value }) => (
    <div className="group p-4 rounded-xl border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-sm bg-white hover:bg-emerald-50/30">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <dt className="text-sm font-semibold text-gray-900 mb-1">{label}</dt>
          <dd className="text-sm text-gray-600 leading-relaxed">{value}</dd>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-6">
          <h1 className="text-2xl font-bold text-white flex items-center">
            <Building2 className="w-7 h-7 mr-3" />
            Company Factsheet
          </h1>
        </div>

        {/* Content Grid */}
        <div className="p-8 lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Basic Information Section */}
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <div className="w-1 h-6 bg-emerald-600 rounded-full mr-3"></div>
                Basic Information
              </h2>
            </div>

            <div className="space-y-4">
              {basicInfoItems.map((item, index) => (
                <InfoItem
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>
          </div>

          {/* Statutory Profile Section */}
          <div className="space-y-6 mt-12 lg:mt-0">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <div className="w-1 h-6 bg-emerald-600 rounded-full mr-3"></div>
                Statutory Profile
              </h2>
            </div>

            <div className="space-y-4">
              {statutoryItems.map((item, index) => (
                <InfoItem
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>

            {/* Additional spacing for visual balance */}
            <div className="hidden lg:block lg:mt-auto lg:pt-8">
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                <div className="flex items-center text-emerald-700">
                  <FileText className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">
                    Comprehensive pharmaceutical solutions provider
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Badge (Mobile) */}
        <div className="lg:hidden px-8 pb-8">
          <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 text-center">
            <div className="flex items-center justify-center text-emerald-700">
              <FileText className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">
                Comprehensive pharmaceutical solutions provider
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const JoinUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { setIsEnquiryModalOpen } = useEnquiryStore();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh] flex items-center justify-center">
        <div
          className={`
            max-w-4xl mx-auto text-center
            transform transition-all duration-1000 ease-out
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }
          `}
        >
          {/* Main Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-100">
            {/* Headline */}
            <h1
              className={`
                text-4xl sm:text-5xl lg:text-6xl font-bold mb-8
                bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent
                transform transition-all duration-1000 ease-out delay-200
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
              style={{ color: "#129349" }}
            >
              Join Us
            </h1>

            {/* Description */}
            <p
              className={`
                text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto
                transform transition-all duration-1000 ease-out delay-400
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
            >
              The name{" "}
              <span className="font-semibold text-gray-800">
                Suave Healthcare
              </span>{" "}
              stands for trust, quality, and partnership. We invite all pharma
              professionals, entrepreneurs, and distributors to collaborate with
              us and grow together in shaping a healthier tomorrow.
            </p>

            <div
              className={`
                flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center
                transform transition-all duration-1000 ease-out delay-600
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
            >
              <button
                onClick={() => navigate(`/pcd-pharma-franchise`)}
                className="
    relative group px-8 py-4 w-full sm:w-auto
    rounded-full font-semibold text-base sm:text-lg
    bg-[#129349] text-white
    cursor-pointer
    transition-all duration-300 ease-out
    hover:bg-[#0f7a3c] hover:scale-105 hover:shadow-2xl
    active:scale-95
    focus:outline-none focus:ring-4 focus:ring-green-300
  "
              >
                <span className="relative z-10">
                  Become a Franchise Partner
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={() => setIsEnquiryModalOpen(true)}
                className="
    relative group px-8 py-4 w-full sm:w-auto
    rounded-full font-semibold text-base sm:text-lg
    border-2 border-[#129349] text-[#129349]
    cursor-pointer
    transition-all duration-300 ease-out
    hover:bg-[#129349] hover:text-white hover:scale-105 hover:shadow-2xl
    active:scale-95
    focus:outline-none focus:ring-4 focus:ring-green-300
  "
              >
                <span className="relative z-10">
                  Request Manufacturing Quote
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

const TeamSuaveHealthcare = () => {
  // Sample team member data
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      color: "bg-yellow-400",
    },
    { name: "Michael Chen", role: "Lead Developer", color: "bg-blue-400" },
    { name: "Emma Rodriguez", role: "UX Designer", color: "bg-purple-400" },
    { name: "David Kim", role: "Data Scientist", color: "bg-green-400" },
    { name: "Lisa Thompson", role: "Product Manager", color: "bg-pink-400" },
    {
      name: "James Wilson",
      role: "Healthcare Consultant",
      color: "bg-indigo-400",
    },
  ];

  // Calculate positions for hexagonal layout
  const getAvatarPosition = (index, total) => {
    const angle = (index * 2 * Math.PI) / total;
    const radius = 100; // Distance from center
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  return (
    <div className="md:max-w-[75vw] mx-auto px-6 text-center">
      <div className="rounded-2xl py-10">
        {/* Header Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Team Suave Healthcare
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
          Meet our dedicated team of healthcare professionals, technologists,
          and innovators who are passionate about transforming healthcare
          through cutting-edge solutions.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
          Together, we combine decades of medical expertise with the latest
          technology to deliver personalized, accessible, and effective
          healthcare solutions.
        </p>

        {/* Team Avatars with Hexagonal Layout */}
        <div className="relative flex justify-center items-center mt-12 mb-8">
          {/* Container for the circular arrangement */}
          <div className="relative w-80 h-80 flex justify-center items-center">
            {/* Central Company Logo */}
            <div className="absolute z-10 w-25 h-25 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <div className="text-white font-bold text-lg">
                <img
                  className="w-25 h-25 rounded-full"
                  src="logoWithoutText.png"
                />
              </div>
            </div>

            {/* Team Member Avatars */}
            {teamMembers.map((member, index) => {
              const position = getAvatarPosition(index, teamMembers.length);
              return (
                <div
                  key={index}
                  className="absolute group cursor-pointer"
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                  }}
                  title={`${member.name} - ${member.role}`}
                  role="img"
                  aria-label={`${member.name}, ${member.role}`}
                >
                  <div
                    className={`
                    rounded-full h-16 w-16 ${member.color} border-4 border-white 
                    shadow-md hover:scale-110 transition-all duration-300 
                    flex items-center justify-center text-white font-semibold text-sm
                    hover:shadow-lg group-hover:border-gray-300
                  `}
                  >
                    <img
                      className="rounded-full h-16 w-16"
                      src="https://randomuser.me/api/portraits/men/44.jpg"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AboutUs() {
  return (
    <>
      <Objective />
      <ComprehensivePharmaSolutions />
      <WhyUs />
      <OurValues />
      <LeadershipSection />
      <CompanyFactsheet />
      <JoinUsSection />
      {/* <Directors /> */}
      {/* <TeamSuaveHealthcare /> */}
    </>
  );
}
