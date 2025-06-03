import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

function Divisions({
  selectedDivision,
  setSelectedDivision,
  filters,
  setFilters,
}) {
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
      id: 1,
      name: "AUSPIN",
      description: "autorised",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/1DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250524/ap-south-1/s3/aws4_request&X-Amz-Date=20250524T085312Z&X-Amz-SignedHeaders=host&X-Amz-Signature=53d909d5b74268c231a9b23ad3ba67ec7cdbdadac0a5213ce11caa6498f0b10e`,
    },
    {
      id: 2,
      name: "CURE",
      description: "CLARED TRISTO",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/2DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=9861c66409c43c1777af992570cb9264bad9e62b450353e9ac38de93804f9b14`,
    },
    {
      id: 3,
      name: "GRACE",
      description: "GENERALIZED",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/3DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=e85c65819fc0a63b1af81e8c28eb7c0054796229795d215e0ba8379dadac56bf`,
    },
    {
      id: 4,
      name: "MIND",
      description: "RADIO PRODUSTRY",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/4DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=60b51e7a84588b993de6c6bd778f59da2d46a240a8e8eed7ee904f3df91c6273`,
    },
    {
      id: 5,
      name: "PRIMA",
      description: "MENU",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/5DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=d53a6574c065399b97ab6c2eeece357b1aefa0755dc61a89903bd512c53149d8`,
    },
    {
      id: 6,
      name: "OPTHO",
      description: "ORTHONOLOGY",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/10DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=2a8f1296a1c0e08f4b30e3aefeabf019f55f8af2b45b8a305d8eae74d1c19006`,
    },
    {
      id: 7,
      name: "NURALZ",
      description: "NURALZ",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/11DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=8bf81527993ea263f0eb9d209428b239010405e9779c81799f45bc2f7c8ba3a5`,
    },
    {
      id: 8,
      name: "EVERMED",
      description: "",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/1011DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=db97028d26d8d593685e36b4a93134b336cd7538fe731ef5742c1a9f97c10428`,
    },
    {
      id: 9,
      name: "GENVIMAX",
      description: "GENVIMAX",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/1012DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=8d7f3e3c6fa78a93261f25bcd5196fcd98dc091df49ee59f5ecda3d251222083`,
    },
    {
      id: 10,
      name: "MEDANOR",
      description: "MEDANOR",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/1017DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=161617e35287e51e141f81dc615d79fb835d3e46d0c9552d63d14b1d31089661`,
    },
    {
      id: 11,
      name: "VENTILA",
      description: "VENTILA",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/1018DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250523/ap-south-1/s3/aws4_request&X-Amz-Date=20250523T135303Z&X-Amz-SignedHeaders=host&X-Amz-Signature=4cda9df1ced8ee4d2976a69455444bcba9e6c842d6f21b00ad5b7f8c1b7c3571`,
    },
  ];

  return (
    <div className="pt-8 px-4">
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
                <span className="font-bold text-blue-800">Products</span>
              </nav>
              <div className="container md:max-w-[75vw] mx-auto px-4 prevent-select">
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
                  {divisions.map((division) => (
                    <div
                      key={division.id}
                      className="cursor-pointer flex flex-col items-center justify-center mr-4"
                      onClick={() => {
                        setSelectedDivision(division);
                        setFilters({ ...filters, division: [division.name] });
                      }}
                    >
                      <div
                        className={`w-32 h-32 rounded-full border border-gray-200 flex items-center justify-center bg-white mb-4 ${
                          division.id === selectedDivision?.id
                            ? "border-4 border-green-600"
                            : ""
                        }`}
                      >
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FilterModalPanel = ({
  isOpen,
  onClose,
  onApply,
  initialFilters = {},
  setSelectedDivision,
}) => {
  // Filter state management
  const [selectedFilters, setSelectedFilters] = useState({
    form: initialFilters.form || [],
    division: initialFilters.division || [],
    therapeutic: initialFilters.therapeutic || [],
    packingType: initialFilters.packingType || [],
  });

  useEffect(() => {
    setSelectedFilters({
      form: initialFilters.form || [],
      division: initialFilters.division || [],
      therapeutic: initialFilters.therapeutic || [],
      packingType: initialFilters.packingType || [],
    });
  }, [initialFilters]);
  // Sample filter data
  const filterSections = [
    {
      id: "form",
      title: "Form",
      options: [
        { id: "Tablets", label: "Tablets", count: 245 },
        { id: "Capsules", label: "Capsules", count: 189 },
        { id: "Syrup", label: "Syrup", count: 67 },
        { id: "Injection", label: "Injection", count: 123 },
        { id: "Ointment", label: "Ointment", count: 45 },
        { id: "Drops", label: "Drops", count: 78 },
      ],
    },
    {
      id: "division",
      title: "Division",
      options: [
        { id: "AUSPIN", label: "AUSPIN", count: 156 },
        { id: "CURE", label: "CURE", count: 89 },
        { id: "GRACE", label: "GRACE", count: 134 },
        { id: "MIND", label: "MIND", count: 98 },
        { id: "PRIMA", label: "PRIMA", count: 76 },
        { id: "OPTHO", label: "OPTHO", count: 112 },
        { id: "NURALZ", label: "NURALZ", count: 112 },
        { id: "EVERMED", label: "EVERMED", count: 112 },
        { id: "GENVIMAX", label: "GENVIMAX", count: 112 },
        { id: "MEDANOR", label: "MEDANOR", count: 112 },
        { id: "VENTILA", label: "VENTILA", count: 112 },
      ],
    },
    {
      id: "therapeutic",
      title: "Therapeutic",
      options: [
        { id: "antibiotics", label: "Antibiotics", count: 203 },
        { id: "analgesics", label: "Analgesics", count: 167 },
        { id: "antacids", label: "Antacids", count: 89 },
        { id: "vitamins", label: "Vitamins", count: 145 },
        { id: "antiseptics", label: "Antiseptics", count: 67 },
        { id: "antihistamines", label: "Antihistamines", count: 91 },
      ],
    },
    {
      id: "packingType",
      title: "Packing Type",
      options: [
        { id: "Blister", label: "Blister", count: 298 },
        { id: "Bottle", label: "Bottle", count: 187 },
        { id: "Tube", label: "Tube", count: 156 },
        { id: "Vial", label: "Vial", count: 134 },
        { id: "Sachet", label: "Sachet", count: 89 },
        { id: "Strip", label: "Strip", count: 145 },
      ],
    },
  ];

  // Handle filter selection
  const handleFilterChange = (sectionId, optionId, isChecked) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [sectionId]: isChecked
        ? [...prev[sectionId], optionId]
        : prev[sectionId].filter((id) => id !== optionId),
    }));
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedDivision(null);
    setSelectedFilters({
      form: [],
      division: [],
      therapeutic: [],
      packingType: [],
    });
  };

  // Apply filters
  const handleApplyFilters = () => {
    onApply(selectedFilters);
    onClose();
  };

  // Get total selected filters count
  const getTotalSelectedCount = () => {
    return Object.values(selectedFilters).reduce(
      (total, arr) => total + arr.length,
      0
    );
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 min-h-screen bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Panel */}
      <div className="fixed mx-auto top-20 inset-x-0 h-[80vh] w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-2xl font-bold text-gray-900">Filter by</h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleClearFilters}
                  className="cursor-pointer text-[#129349] hover:text-[#015c30] font-medium underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#129349] focus:ring-offset-2 rounded px-1"
                  aria-label="Clear all filters"
                >
                  Clear Filters
                </button>
                <button
                  onClick={onClose}
                  className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  aria-label="Close filter panel"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-8">
              {filterSections.map((section) => (
                <div key={section.id} className="space-y-4">
                  {/* Section Heading */}
                  <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">
                    {section.title}
                  </h3>

                  {/* Filter Options */}
                  <div className="space-y-3">
                    {section.options.map((option) => {
                      const isSelected = selectedFilters[section.id].includes(
                        option.id
                      );
                      return (
                        <label
                          key={option.id}
                          className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
                            isSelected
                              ? "bg-gray-100 border border-gray-200"
                              : "hover:border border-transparent"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={(e) =>
                                handleFilterChange(
                                  section.id,
                                  option.id,
                                  e.target.checked
                                )
                              }
                              className="w-4 h-4 text-[#129349] bg-white border-gray-300 rounded focus:ring-[#129349] focus:ring-2 transition-colors duration-200"
                              aria-describedby={`${option.id}-count`}
                            />
                            <span
                              className={`text-sm ${
                                isSelected
                                  ? "font-medium text-gray-900"
                                  : "text-gray-700"
                              }`}
                            >
                              {option.label}
                            </span>
                          </div>
                          <span
                            id={`${option.id}-count`}
                            className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full"
                          >
                            {option.count}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <div className="p-6 border-t border-gray-200 bg-white">
            <button
              onClick={handleApplyFilters}
              className="cursor-pointer w-full bg-[#129349] hover:bg-[#015c30] text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#129349] focus:ring-offset-2 shadow-lg hover:shadow-xl"
              aria-label={`Apply ${getTotalSelectedCount()} selected filters`}
            >
              Apply Filters{" "}
              {getTotalSelectedCount() > 0 && `(${getTotalSelectedCount()})`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const products = [
  {
    id: 1,
    brand: "PRIMA",
    name: "ACRIMOL MR (BLISTER)",
    composition:
      "ACELOFENAC 100mg. IP + PARACETAMOL 325mg. IP + CHLORZOXAZONE 250mg. IP",
    packaging: "Blister | 10×10",
    mrp: "₹93.00",
    ptr: "₹66.43",
    pts: "₹59.79",
    type: "Tablets",
    image: "https://picsum.photos/80/80?random=1",
  },
  {
    id: 2,
    brand: "GENVIMAX",
    name: "PARACETAMOL TABLETS",
    composition: "PARACETAMOL 500mg. IP",
    packaging: "Alu Alu | 10×10",
    mrp: "₹45.50",
    ptr: "₹32.50",
    pts: "₹29.25",
    type: "Tablets",
    image: "https://picsum.photos/80/80?random=2",
  },
  {
    id: 3,
    brand: "MEDLINE",
    name: "AMOXICILLIN CAPSULES",
    composition: "AMOXICILLIN 250mg. IP",
    packaging: "Strip | 10×1",
    mrp: "₹78.90",
    ptr: "₹56.35",
    pts: "₹50.72",
    type: "Capsules",
    image: "https://picsum.photos/80/80?random=3",
  },
  {
    id: 4,
    brand: "HEALTHMAX",
    name: "CEFIXIME TABLETS",
    composition: "CEFIXIME 200mg. IP",
    packaging: "Blister | 6×1",
    mrp: "₹156.00",
    ptr: "₹111.45",
    pts: "₹100.31",
    type: "Tablets",
    image: "https://picsum.photos/80/80?random=4",
  },
  {
    id: 5,
    brand: "BIOCARE",
    name: "VITAMIN D3 CAPSULES",
    composition: "CHOLECALCIFEROL 60000 I.U.",
    packaging: "Strip | 4×1",
    mrp: "₹89.75",
    ptr: "₹64.12",
    pts: "₹57.71",
    type: "Capsules",
    image: "https://picsum.photos/80/80?random=5",
  },
  {
    id: 6,
    brand: "PHARMEX",
    name: "AZITHROMYCIN TABLETS",
    composition: "AZITHROMYCIN 500mg. IP",
    packaging: "Blister | 3×1",
    mrp: "₹134.25",
    ptr: "₹95.89",
    pts: "₹86.30",
    type: "Tablets",
    image: "https://picsum.photos/80/80?random=6",
  },
  {
    id: 7,
    brand: "LIFELINE",
    name: "OMEPRAZOLE CAPSULES",
    composition: "OMEPRAZOLE 20mg. IP",
    packaging: "Strip | 10×1",
    mrp: "₹67.80",
    ptr: "₹48.43",
    pts: "₹43.59",
    type: "Capsules",
    image: "https://picsum.photos/80/80?random=7",
  },
  {
    id: 8,
    brand: "MEDTECH",
    name: "METFORMIN TABLETS",
    composition: "METFORMIN HCL 500mg. IP",
    packaging: "Strip | 20×1",
    mrp: "₹52.30",
    ptr: "₹37.36",
    pts: "₹33.62",
    type: "Tablets",
    image: "https://picsum.photos/80/80?random=8",
  },
  {
    id: 9,
    brand: "ZENITH",
    name: "DICLOFENAC TABLETS",
    composition: "DICLOFENAC SODIUM 50mg. IP",
    packaging: "Blister | 10×10",
    mrp: "₹73.45",
    ptr: "₹52.47",
    pts: "₹47.22",
    type: "Tablets",
    image: "https://picsum.photos/80/80?random=9",
  },
  {
    id: 10,
    brand: "APOLLO",
    name: "CIPROFLOXACIN TABLETS",
    composition: "CIPROFLOXACIN 500mg. IP",
    packaging: "Strip | 10×1",
    mrp: "₹98.60",
    ptr: "₹70.43",
    pts: "₹63.39",
    type: "Tablets",
    image: "https://picsum.photos/80/80?random=10",
  },
  {
    id: 11,
    brand: "NOVEX",
    name: "LEVOCETIRIZINE TABLETS",
    composition: "LEVOCETIRIZINE 5mg. IP",
    packaging: "Blister | 10×10",
    mrp: "₹84.20",
    ptr: "₹60.14",
    pts: "₹54.13",
    type: "Tablets",
    image: "https://picsum.photos/80/80?random=11",
  },
  {
    id: 12,
    brand: "MEDICARE",
    name: "ATORVASTATIN TABLETS",
    composition: "ATORVASTATIN 10mg. IP",
    packaging: "Strip | 10×1",
    mrp: "₹112.85",
    ptr: "₹80.61",
    pts: "₹72.55",
    type: "Tablets",
    image: "https://picsum.photos/80/80?random=12",
  },
  {
    id: 13,
    brand: "VITACARE",
    name: "B-COMPLEX CAPSULES",
    composition: "VITAMIN B-COMPLEX",
    packaging: "Strip | 10×1",
    mrp: "₹65.40",
    ptr: "₹46.71",
    pts: "₹42.04",
    type: "Capsules",
    image: "https://picsum.photos/80/80?random=13",
  },
  {
    id: 14,
    brand: "HEALTHCO",
    name: "CALCIUM TABLETS",
    composition: "CALCIUM CARBONATE 500mg. + VITAMIN D3 250 I.U.",
    packaging: "Strip | 15×1",
    mrp: "₹76.95",
    ptr: "₹54.97",
    pts: "₹49.47",
    type: "Tablets",
    image: "https://picsum.photos/80/80?random=14",
  },
  {
    id: 15,
    brand: "PHARMAPLUS",
    name: "RANITIDINE TABLETS",
    composition: "RANITIDINE 150mg. IP",
    packaging: "Blister | 10×10",
    mrp: "₹58.75",
    ptr: "₹41.96",
    pts: "₹37.77",
    type: "Tablets",
    image: "https://picsum.photos/80/80?random=15",
  },
];

// ProductCard component
const ProductCard = ({ product }) => {
  const truncateText = (text, maxLength = 60) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 border border-gray-100">
      <div className="flex items-start gap-3 mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="text-xs text-[#129349] font-medium mb-1">
            {product.brand}
          </div>
          <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1">
            {product.name}
          </h3>
          <span
            className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
              product.type === "Tablets"
                ? "bg-blue-100 text-blue-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {product.type}
          </span>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-xs text-gray-600 mb-2" title={product.composition}>
          {truncateText(product.composition)}
        </p>
        <p className="text-xs text-gray-500">{product.packaging}</p>
      </div>

      <div className="flex justify-between space-y-1">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">MRP:</span>
          <span className="text-sm font-semibold text-gray-900">
            {product.mrp}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">PTR:</span>
          <span className="text-sm font-medium text-blue-600">
            {product.ptr}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">PTS:</span>
          <span className="text-sm font-medium text-green-600">
            {product.pts}
          </span>
        </div>
      </div>
    </div>
  );
};

// Pagination component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        Previous
      </button>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

// Main AllProducts component
const AllProducts = ({
  selectedDivision,
  setSelectedDivision,
  filters,
  setFilters,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const [isModalOpen, setModalOpen] = useState(false);
  // Handler to open/close modal
  const openFilterModal = () => setModalOpen(true);
  const closeFilterModal = () => setModalOpen(false);

  // Handler to apply filters from modal
  const applyFilters = (selectedFilters) => {
    const updatedFilters = { ...selectedFilters };
    setFilters(updatedFilters);
    if (
      !updatedFilters.division.includes(selectedDivision?.name) ||
      updatedFilters.division.length > 1
    )
      setSelectedDivision(null);
    setCurrentPage(1);
    setModalOpen(false);
  };

  // Filter products based on selected criteria
  const filteredProducts = useMemo(() => {
    if (!products || products.length === 0) return [];

    let filtered = [...products];

    if (filters.division.length > 0) {
      filtered = filtered.filter((p) => filters.division.includes(p.brand));
    }
    // Apply form filter (handles array of selected forms)
    if (filters.form.length > 0) {
      filtered = filtered.filter((p) => filters.form.includes(p.type));
    }

    // Apply therapeutic filter
    if (filters.therapeutic.length > 0) {
      filtered = filtered.filter((p) =>
        filters.therapeutic.includes(p.therapeutic)
      );
    }

    // Apply packing type filter
    if (filters.packingType.length > 0) {
      filtered = filtered.filter((p) =>
        filters.packingType.includes(p.packaging.split("|")[0].trim())
      );
    }

    return filtered;
  }, [products, filters]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Check if any filters are active
  const hasActiveFilters = Object.values(filters).some(
    (filter) => Array.isArray(filter) && filter.length > 0
  );

  const activeFilterCount = Object.values(filters).filter(
    (filter) => Array.isArray(filter) && filter.length > 0
  ).length;

  return (
    <div className="md:max-w-[75vw] mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">All Products</h1>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <button
            onClick={openFilterModal}
            className="cursor-pointer bg-[#129349] hover:bg-[#015c30] text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#129349] focus:ring-offset-2 relative"
          >
            Filter
            {activeFilterCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        <FilterModalPanel
          isOpen={isModalOpen}
          onClose={closeFilterModal}
          onApply={applyFilters}
          initialFilters={filters}
          setSelectedDivision={setSelectedDivision}
        />

        {/* Products Grid */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {currentProducts.map((product) => (
            <Link key={product.id}  to={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m0 0V9a2 2 0 012-2h2m0 0V6a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V9a2 2 0 01-2 2h-2m0 0v2a2 2 0 002 2h2a2 2 0 002-2v-2"
                />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">
              No products found for the selected filters.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Try adjusting your filters or clearing them to see more products.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}

        {/* Results Summary */}
        {filteredProducts.length > 0 && (
          <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
            <div>
              Showing {startIndex + 1}-
              {Math.min(startIndex + productsPerPage, filteredProducts.length)}{" "}
              of {filteredProducts.length} products
            </div>
            {hasActiveFilters && (
              <div>
                {activeFilterCount} filter{activeFilterCount !== 1 ? "s" : ""}{" "}
                applied
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const FeatureHighlights = () => {
  const features = [
    {
      icon: "📈",
      title: "Fueling India's Healthcare Momentum",
      description:
        "India's therapeutic demand curve is steep and unforgiving. Vibcare counters it with a 1,500-product catalogue spanning 11 divisions—each batch released under WHO-GMP protocols, backed by in-house QA and ISO-compliant supply chain controls. Result: consistent, quality-assured medicines that let hospitals, trade channels, and government tenders scale without supply-shock risk.",
    },
    {
      icon: "⏱️",
      title: "Nation-Wide Distribution Edge",
      description:
        "Market access is meaningless without bullet-proof fulfilment. Vibcare operates a digitised distribution network—real-time inventory APIs, tech-enabled cold-chain, and 72-hour dispatch to 27 Indian states. Commercial partners receive launch packs, medico-marketing assets, and regulatory dossiers that slash time-to-market and raise prescriber confidence from day one.",
    },
    {
      icon: "🔖",
      title: "Transparent Pricing & Resources",
      description:
        "Our open-book pricing policy weighs API volatility, GMP overheads, and logistics to lock in competitive landed costs—no hidden surcharges. Download the full product catalogue, stability data sheets, and briefing brochures straight from the portal, or request CTD modules for expedited tender submissions and hospital onboarding.",
    },
  ];

  return (
    <div className="py-12 px-4 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Explore 1500+ Quality-Assured Formulations
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                bg-gradient-to-br from-green-50 to-emerald-50 
                p-8 
                ${index < features.length - 1 ? "border-b md:border-b-0" : ""}
                ${index === 1 ? "lg:border-l lg:border-r border-gray-200" : ""}
                ${index === 0 ? "lg:border-r border-gray-200" : ""}
                hover:shadow-lg transition-shadow duration-300
                min-h-[400px] flex flex-col
              `}
            >
              {/* Icon Container */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Products() {
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [filters, setFilters] = useState({
    form: [],
    therapeutic: [],
    packingType: [],
    division: [],
  });

  return (
    <>
      <Divisions
        selectedDivision={selectedDivision}
        setSelectedDivision={setSelectedDivision}
        filters={filters}
        setFilters={setFilters}
      />
      <AllProducts
        selectedDivision={selectedDivision}
        setSelectedDivision={setSelectedDivision}
        filters={filters}
        setFilters={setFilters}
      />
      <FeatureHighlights />
    </>
  );
}
