import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Divisions() {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const container = scrollContainerRef.current;

    const onMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
      // Prevent text selection while dragging
      e.preventDefault();
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll-fastness factor
      container.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    // Add event listeners to container for mousedown
    container.addEventListener("mousedown", onMouseDown);

    // Add global event listeners for mousemove and mouseup
    // This ensures dragging continues even when mouse leaves the container
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  const divisions = [
    {
      name: "AUSPIN",
      description: "autorised",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/1DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250524/ap-south-1/s3/aws4_request&X-Amz-Date=20250524T085312Z&X-Amz-SignedHeaders=host&X-Amz-Signature=53d909d5b74268c231a9b23ad3ba67ec7cdbdadac0a5213ce11caa6498f0b10e`,
    },
    {
      name: "CURE",
      description: "CLARED TRISTO",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/2DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=9861c66409c43c1777af992570cb9264bad9e62b450353e9ac38de93804f9b14`,
    },
    {
      name: "GRACE",
      description: "GENERALIZED",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/3DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=e85c65819fc0a63b1af81e8c28eb7c0054796229795d215e0ba8379dadac56bf`,
    },
    {
      name: "MIND",
      description: "RADIO PRODUSTRY",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/4DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=60b51e7a84588b993de6c6bd778f59da2d46a240a8e8eed7ee904f3df91c6273`,
    },
    {
      name: "PRIMA",
      description: "MENU",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/5DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=d53a6574c065399b97ab6c2eeece357b1aefa0755dc61a89903bd512c53149d8`,
    },
    {
      name: "OPTHO",
      description: "ORTHONOLOGY",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/10DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=2a8f1296a1c0e08f4b30e3aefeabf019f55f8af2b45b8a305d8eae74d1c19006`,
    },
    {
      name: "NURALZ",
      description: "NURALZ",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/11DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=8bf81527993ea263f0eb9d209428b239010405e9779c81799f45bc2f7c8ba3a5`,
    },
    {
      name: "EVERMED",
      description: "",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/1011DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=db97028d26d8d593685e36b4a93134b336cd7538fe731ef5742c1a9f97c10428`,
    },
    {
      name: "GENVIMAX",
      description: "GENVIMAX",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/1012DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=8d7f3e3c6fa78a93261f25bcd5196fcd98dc091df49ee59f5ecda3d251222083`,
    },
    {
      name: "MEDANOR",
      description: "MEDANOR",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/1017DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=161617e35287e51e141f81dc615d79fb835d3e46d0c9552d63d14b1d31089661`,
    },
    {
      name: "VENTILA",
      description: "VENTILA",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/1018DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=4cda9df1ced8ee4d2976a69455444bcba9e6c842d6f21b00ad5b7f8c1b7c3571`,
    },
  ];

  return (
    <section className="py-12">
      <div className="container md:max-w-[75vw] mx-auto px-4 prevent-select">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-700">Divisions</h2>
            <p className="text-gray-600">11+ division with 1500+ products</p>
          </div>
          <Link
            to="/products"
            className="text-[#129349] font-medium text-xl hover:text-[#015c30]"
          >
            View All
          </Link>
        </div>
        <div
          ref={scrollContainerRef}
          className={`flex gap-4 overflow-x-auto custom-scrollbar pb-4 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #129349;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background-color: #f3f4f6;
          border-radius: 10px;
        }
      `}</style>
          {divisions.map((division, index) => (
            <div
              key={index}
              className="cursor-pointer flex flex-col items-center justify-center mr-4"
              onClick={() => navigate(`/products?division=${division.name}`)}
            >
              <div className="w-32 h-32 rounded-full border border-gray-200 flex items-center justify-center bg-white mb-4">
                <img
                  src={division.image}
                  alt={division.name}
                  draggable={false}
                  className="w-12 h-12 object-contain scale-250 pointer-events-none"
                />
              </div>
              <p className="text-gray-700 font-medium pointer-events-none">
                {division.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
