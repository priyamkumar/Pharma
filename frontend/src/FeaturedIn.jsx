import React from "react";

const featuredData = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Medindia_Logo.png/320px-Medindia_Logo.png",
    title: "Med India",
    description:
      "Suave Healthcare Pvt. Ltd. seeks to lead the market in the development, manufacturing and marketing drugs at low costs to the market. Through a dedicated team of staff",
    link: "#",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Newswire_Logo.png",
    title: "Newswire",
    description:
      "Suave Healthcare’s status as the leading PCD Pharma Company in India is thanks to a collaborative approach, passion for growth and vast industry exposure",
    link: "#",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cision_logo.svg/320px-Cision_logo.svg.png",
    title: "Pr News Wire",
    description:
      "Suave Healthcare Explains How PCD Pharma Franchises are Changing the Face of Indian Pharmaceutical Industry",
    link: "#",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cision_logo.svg/320px-Cision_logo.svg.png",
    title: "Pr News Wire",
    description:
      "Suave Healthcare a prolific pharmaceutical company based in India, is offering fully integrated third-party contract manufacturing and development solutions at competitive prices",
    link: "#",
  },
  {
    logo: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/2019/03/5c9854d2a2baf1553584338.png",
    title: "Opportunity India",
    description:
      "Suave Healthcare Pvt. Ltd is growing and is known for its outstanding PCD model and tremendous support to the franchisees.",
    link: "#",
  },
];

const FeaturedIn = () => {
  return (
    <section className="py-12">
    <div className="bg-[#ddfbe9] py-8 px-4 md:px-8">
      <div className="md:max-w-[75vw] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured In
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm"
            >
              <img
                src={item.logo}
                alt={item.title}
                className="h-14 w-auto mb-3 object-contain"
              />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 mb-3">{item.description}</p>
              <a
                href={item.link}
                className="text-[#129349] font-semibold text-sm"
              >
                Read More &gt;&gt;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default FeaturedIn;
