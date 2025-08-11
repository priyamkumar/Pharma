import { Factory, Users, Award, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function SuaveHealthcareOverview() {
  const stats = [
    {
      number: "8",
      label: "Manufacturing Plants",
      icon: <Factory className="w-6 h-6 text-[#129349]" />,
    },
    {
      number: "750+",
      label: "Healthcare Partners",
      icon: <Users className="w-6 h-6 text-[#129349]" />,
    },
    {
      number: "25+",
      label: "Years of Excellence",
      icon: <Award className="w-6 h-6 text-[#129349]" />,
    },
    {
      number: "50+",
      label: "Countries Served",
      icon: <MapPin className="w-6 h-6 text-[#129349]" />,
    },
  ];

  return (
    <div className="max-w-[75vw] mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Best Pharma Company with 20+ Years of Excellence</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Founded in 2002, Suave Healthcare is a trusted ISO 9001:2008 &
            WHO-GMP certified pharmaceutical company. We specialize in providing
            high-quality, affordable pharma products and services through PCD
            franchise opportunities and third-party manufacturing solutions.
            Over the years, we’ve built enduring relationships with more than
            1,000 healthcare partners across India. When it comes to trusted,
            reliable, and high-quality pharmaceuticals, Suave Healthcare is the
            partner you can count on.
          </p>
          <Link
            to="/about"
            className="cursor-pointer text-[#129349] hover:text-[#015c30] font-medium"
          >
            Read More About Our Journey
          </Link>
        </div>

        {/* Right Side - Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#129349]">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
