import { useEnquiry } from "../context/EnquiryContext";

export default function LetsTalk() {
  const { setIsEnquiryModalOpen } = useEnquiry();
  return (
    <section className="py-12">
      <div className="container md:max-w-[75vw] mx-auto px-4">
        <div className="bg-[#ddfbe9] rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Take the First Step towards Success - Let's Talk
          </h2>
          <button
            className="cursor-pointer bg-[#129349] text-white px-8 py-3 rounded-md hover:bg-[#015c30] font-medium mt-6"
            onClick={() => setIsEnquiryModalOpen(true)}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
}
