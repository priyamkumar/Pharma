import React from "react";
import Marquee from "react-fast-marquee";

const MovingText = () => {
  return (
    <Marquee className="py-8 md:max-w-[75vw] mx-auto font-semibold text-xl text-[#129349]">
      {[1, 2, 3, 4].map((_, index) => (
        <span key={index} className="flex items-center">
          <span>5000+ Customers</span>
          <span className="mx-6">•</span>
          <span>1500+ Products</span>
          <span className="mx-6">•</span>
          <span>40 years of Experience</span>
          <span className="mx-6">•</span>
        </span>
      ))}
    </Marquee>
  );
};

export default MovingText;