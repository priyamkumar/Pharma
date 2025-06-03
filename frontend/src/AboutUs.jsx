import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Directors from "./Directors";

function Objective() {
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
                <span className="font-bold text-blue-800">About Us</span>
              </nav>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Suave Healthcare at a Glance
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Suave Healthcare stands as a pioneering force in the
                  pharmaceutical industry, dedicated to transforming healthcare
                  through innovative solutions and unwavering commitment to
                  quality. With over a decade of excellence, we have established
                  ourselves as a trusted partner for healthcare professionals
                  and patients alike, delivering cutting-edge pharmaceutical
                  products that meet the highest industry standards.
                </p>

                <p className="text-lg">
                  Our comprehensive approach encompasses research and
                  development, manufacturing, and distribution of premium
                  pharmaceutical formulations. We specialize in franchise
                  partnerships that empower healthcare entrepreneurs to build
                  successful businesses while maintaining our core values of
                  integrity, innovation, and patient-centric care.
                </p>

                <p className="text-lg">
                  Through strategic collaborations and continuous investment in
                  technology, Suave Healthcare continues to expand its footprint
                  across diverse therapeutic segments, ensuring accessible and
                  affordable healthcare solutions for communities worldwide. Our
                  commitment to excellence drives us to push boundaries and set
                  new benchmarks in pharmaceutical care.
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
              <div className="text-white font-bold text-lg"><img className="w-25 h-25 rounded-full" src="logoWithoutText.png"/></div>
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
                    <img className="rounded-full h-16 w-16" src="https://randomuser.me/api/portraits/men/44.jpg"/>
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
      <Directors />
      <TeamSuaveHealthcare />
    </>
  );
}
