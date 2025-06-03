import { useEnquiry } from "../context/EnquiryContext";
import DraggableCarousel from "./Carousel";

export default function HeroSection() {
  const { setIsEnquiryModalOpen } = useEnquiry();
  return (
    <section className="py-12">
      <div className="container md:max-w-[75vw] mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Shaping the Future of Pharma Franchise in India
          </h1>
          <p className="text-gray-600 mb-8">
            With Suave Healthcare, step into the world of unmatched quality,
            extensive product range, and unwavering support. We are your
            partners in paving the way to success in the pharma franchise
            landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="cursor-pointer bg-[#129349] text-white px-6 py-3 rounded-md hover:bg-[#015c30] font-medium"
              onClick={() => setIsEnquiryModalOpen(true)}
            >
              Send Enquiry
            </button>
            <button
              className="cursor-pointer border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-100 font-medium"
              onClick={() => setIsEnquiryModalOpen(true)}
            >
              Download Price list
            </button>
          </div>
        </div>
        <DraggableCarousel />
      </div>
    </section>
  );
}
