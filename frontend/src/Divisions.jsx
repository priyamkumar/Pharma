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
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/1DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=afabfc067b024da999e1efe0fab49c3310d323b36ed71a489129c5cca1365af3`,
    },
    {
      name: "CURE",
      description: "CLARED TRISTO",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/2DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=2dba55ec74740826a37ff23df6faa74854d9eca2cc3b8af8f58017f7d096ff5b`,
    },
    {
      name: "GRACE",
      description: "GENERALIZED",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/3DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=a0f603f42233f83152f82a76c4d116aeeff0064fe49df1e5da00c16f817cf997`,
    },
    {
      name: "MIND",
      description: "RADIO PRODUSTRY",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/4DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=33a76ffd107dfb960cd69b8f84b6b608167eb28491babd29e92903e4fb076837`,
    },
    {
      name: "PRIMA",
      description: "MENU",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/5DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=38bdf0e036b5471d68eabbe09d03589b4318ab39869712fbf534738d3baa8f91`,
    },
    {
      name: "OPTHO",
      description: "ORTHONOLOGY",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/10DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=de1e6aa6ecbe8fdc255629686cbfeedc3cd23520572b68149900996d179ac08b`,
    },
    {
      name: "NURALZ",
      description: "NURALZ",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/11DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=36bef695980ebc9015c23932c6d88c5eca36a76e65f381472c7dba7ff7254c55`,
    },
    {
      name: "EVERMED",
      description: "",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/1011DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=ef3d16f69a43c4d218761d4ac34ebe5f29847ab0c93017cf8e3b3165f08208d5`,
    },
    {
      name: "GENVIMAX",
      description: "GENVIMAX",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/1012DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=8c0139e71bd7cf8497ac3dbb5813ebb5ed14d8d105486ec3f836353510b096cc`,
    },
    {
      name: "MEDANOR",
      description: "MEDANOR",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/1017DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=9466dfc6d8cf1f6875872a016feee8570564f9f9bfe2b982dee038c91bf61e03`,
    },
    {
      name: "VENTILA",
      description: "VENTILA",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/1018DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=c9646a0b90d27f6a84f8182dbcee92d13be1e1e0dd38924d79fca4b20bc05ad2`,
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
