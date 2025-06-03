import React from "react";
import {
  FaGlobe,
  FaChartLine,
  FaBullhorn,
  FaSuitcase,
  FaCubes,
  FaChalkboardTeacher,
  FaProjectDiagram,
} from "react-icons/fa";

const features = [
  {
    icon: <FaGlobe className="text-[#129349] text-2xl" />,
    title: "Monopoly Rights",
    description:
      "PCD Pharma provides exclusive monopoly rights in your chosen area, allowing more focus on business expansion by reducing competition.",
  },
  {
    icon: <FaChartLine className="text-[#129349] text-2xl" />,
    title: "Low Investment, High Returns",
    description:
      "PCD Pharma opens doors to a low-initial-investment-high-return business opportunity, appealing for ambitious entrepreneurs seeking cost-effective ventures.",
  },
  {
    icon: <FaBullhorn className="text-[#129349] text-2xl" />,
    title: "Marketing Support",
    description:
      "Avail comprehensive marketing assistance, from promotional materials to strategies, helping establish a significant local market presence.",
  },
  {
    icon: <FaSuitcase className="text-[#129349] text-2xl" />,
    title: "Scalable Business Model",
    description:
      "PCD Pharma's scalable business model empowers you to broaden operations and product offerings as the business progresses, ensuring sustained success.",
  },
  {
    icon: <FaCubes className="text-[#129349] text-2xl" />,
    title: "Diverse Product Portfolio",
    description:
      "Capitalize on our wide-ranging product portfolio, serving various therapeutic segments, and meet the increasing demand for superior healthcare solutions.",
  },
  {
    icon: <FaChalkboardTeacher className="text-[#129349] text-2xl" />,
    title: "Ongoing Training & Guidance",
    description:
      "Benefit from continued training and expert guidance, keeping you abreast with the latest pharmaceutical trends, regulations, and industry best practices.",
  },
  {
    icon: <FaProjectDiagram className="text-[#129349] text-2xl" />,
    title: "Streamlined Supply Chain Management",
    description:
      "Experience efficient supply chain management with PCD Pharma, ensuring consistent product availability, prompt delivery, and smooth order processing.",
  },
];

export default function Benefits() {
  return (
    <section className="max-w-[75vw] mx-auto py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-700">
          Unlock the Potential with PCD Pharma
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4">
            <div>{feature.icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
