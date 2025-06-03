import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MovingText from "./MovingText";
import { useEnquiry } from "../context/EnquiryContext";
import EnquiryModal from "./EnquiryModal";

function Join() {
  const navigate = useNavigate();
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
                <span className="font-bold text-blue-800">Careers</span>
              </nav>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Join Our <br />
                <span className="text-[#129349]">Innovative</span> Team
              </h2>

              <p className="text-gray-600 text-lg mt-4 max-w-md mx-auto lg:mx-0 leading-relaxed mb-8">
                We're building the future of healthcare technology with a
                passionate team that values collaboration, innovation, and
                work-life balance. Discover a workplace where your ideas matter
                and your growth is our priority.
              </p>

              {/* Key Culture Points */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">
                    Remote-First Culture
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">
                    Continuous Learning
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium">Health & Wellness</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image Collage */}
            <div className="flex-1 max-w-lg mt-20">
              <div className="relative">
                {/* Main arrangement container */}
                <div className="flex flex-col gap-4">
                  {/* Top Row - Single image positioned right */}
                  <div className="flex justify-end">
                    <div className="rounded-xl w-56 h-36 overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                        <div className="text-center">
                          <div className="text-2xl mb-2">🏢</div>
                          <div className="text-sm font-medium">
                            Modern Office
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Row - Larger feature image */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="rounded-xl w-72 h-48 overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white">
                        <div className="text-center">
                          <div className="text-3xl mb-2">👥</div>
                          <div className="text-base font-medium">
                            Team Collaboration
                          </div>
                          <div className="text-xs opacity-90 mt-1">
                            Innovation through teamwork
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row - Single image positioned right */}
                  <div className="flex justify-end">
                    <div className="rounded-xl w-56 h-36 overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center text-white">
                        <div className="text-center">
                          <div className="text-2xl mb-2">🎯</div>
                          <div className="text-sm font-medium">
                            Growth Focus
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
                <div
                  className="absolute -bottom-6 -right-2 w-6 h-6 bg-purple-200 rounded-full opacity-60 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-1/2 -left-6 w-4 h-4 bg-green-200 rounded-full opacity-60 animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const WorkCultureSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-start md:max-w-[75vw] mx-auto my-8 px-6 py-16 bg-[#ddfbe9]">
      {/* Left Column - Image */}
      <div className="w-full lg:w-auto lg:flex-shrink-0">
        <div className="rounded-xl shadow-md w-full max-w-md mx-auto lg:mx-0 overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
          {/* Placeholder image with meaningful content */}
          <div className="w-full h-96 bg-gradient-to-br from-green-200 via-green-300 to-green-400 flex items-center justify-center relative">
            {/* Decorative elements to simulate a workplace photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="text-center text-white z-10">
              <div className="text-6xl mb-4">🏥</div>
              <div className="text-xl font-semibold mb-2">
                Healthcare Innovation
              </div>
              <div className="text-sm opacity-90">
                Where passion meets purpose
              </div>
            </div>

            {/* Decorative geometric shapes */}
            <div className="absolute top-6 left-6 w-3 h-3 bg-white/30 rounded-full"></div>
            <div className="absolute top-12 right-8 w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="absolute bottom-8 left-12 w-4 h-4 bg-white/20 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Right Column - Text Content */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          Join the Suave Healthcare Family - Our Work Culture
        </h2>

        {/* Values Section */}
        <div className="mb-8">
          <h3 className="font-semibold text-lg text-[#129349] border-b border-[#129349] pb-1 mb-3">
            Our Core Values
          </h3>
          <p className="text-gray-700 text-sm mt-2 mb-6 max-w-xl leading-relaxed">
            At Suave Healthcare, we believe in putting patients first, fostering
            innovation, and maintaining the highest standards of integrity. Our
            values guide every decision we make, from product development to
            patient care, ensuring that we remain true to our mission of
            transforming healthcare through technology and compassion.
          </p>
        </div>

        {/* Culture Section */}
        <div className="mb-8">
          <h3 className="font-semibold text-lg text-[#129349] border-b border-[#129349] pb-1 mb-3">
            Our Work Culture
          </h3>
          <p className="text-gray-700 text-sm mt-2 mb-6 max-w-xl leading-relaxed">
            We've cultivated an environment where collaboration thrives and
            innovation flourishes. Our open-door policy encourages communication
            across all levels, while our flexible work arrangements support
            work-life balance. We celebrate diversity, embrace different
            perspectives, and create an inclusive space where every team member
            feels valued and empowered to contribute their best work.
          </p>
        </div>

        {/* Rewards Section */}
        <div className="mb-8">
          <h3 className="font-semibold text-lg text-[#129349] border-b border-[#129349] pb-1 mb-3">
            Recognition & Rewards
          </h3>
          <p className="text-gray-700 text-sm mt-2 mb-6 max-w-xl leading-relaxed">
            We recognize that our success is built on the dedication and
            excellence of our team members. Our comprehensive rewards program
            includes competitive compensation, performance bonuses, equity
            opportunities, and comprehensive benefits. We also celebrate
            achievements through peer recognition programs, quarterly awards,
            and career advancement opportunities that help you grow
            professionally.
          </p>
        </div>

        {/* Learning Section */}
        <div className="mb-8">
          <h3 className="font-semibold text-lg text-[#129349] border-b border-[#129349] pb-1 mb-3">
            Continuous Learning
          </h3>
          <p className="text-gray-700 text-sm mt-2 mb-6 max-w-xl leading-relaxed">
            Learning never stops at Suave Healthcare. We provide access to
            cutting-edge training programs, industry conferences, online
            courses, and mentorship opportunities. Our learning stipend supports
            your professional development, while our internal knowledge-sharing
            sessions keep everyone updated on the latest healthcare technologies
            and best practices. We encourage experimentation and view failures
            as learning opportunities.
          </p>
        </div>

        {/* Fun Section */}
        <div className="mb-8">
          <h3 className="font-semibold text-lg text-[#129349] border-b border-[#129349] pb-1 mb-3">
            Work-Life Balance & Fun
          </h3>
          <p className="text-gray-700 text-sm mt-2 mb-6 max-w-xl leading-relaxed">
            While we're serious about our mission, we believe work should be
            enjoyable. Our office features collaborative spaces, wellness rooms,
            and recreational areas. We organize regular team-building
            activities, health and wellness programs, volunteer opportunities,
            and social events. Our flexible PTO policy and remote work options
            ensure you have time to recharge and pursue your passions outside of
            work.
          </p>
        </div>
      </div>
    </div>
  );
};

const CareerCTA = () => {
  const { setIsEnquiryModalOpen } = useEnquiry();

  return (
    <section className="py-16 px-4">
      <div className="bg-[#ddfbe9] rounded-xl px-8 py-10 max-w-md mx-auto text-center shadow-md">
        {/* Heading */}
        <h3 className="text-2xl font-bold text-gray-900">Join Our Family</h3>

        {/* Subtext */}
        <p className="text-base text-gray-700 mt-2 mb-6">
          Start your journey with us today
        </p>

        {/* Call-to-Action Button */}
        <button
          onClick={() => setIsEnquiryModalOpen(true)}
          className="cursor-pointer bg-[#129349] hover:bg-[#015c30] text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200 hover:shadow-lg transform hover:scale-105 transition-all"
        >
          Explore Opportunities
        </button>
      </div>
    </section>
  );
};

export default function Careers() {
  return (
    <>
      <Join />
      <MovingText />
      <WorkCultureSection />
      <CareerCTA />
      <EnquiryModal />
    </>
  );
}
