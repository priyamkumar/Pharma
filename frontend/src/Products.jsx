import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { X, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { ProductState } from "../context/ProductsContext";
import GradientCircularProgress from "./Loader";

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
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/1DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=afabfc067b024da999e1efe0fab49c3310d323b36ed71a489129c5cca1365af3`,
    },
    {
      id: 2,
      name: "CURE",
      description: "CLARED TRISTO",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/2DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=2dba55ec74740826a37ff23df6faa74854d9eca2cc3b8af8f58017f7d096ff5b`,
    },
    {
      id: 3,
      name: "GRACE",
      description: "GENERALIZED",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/3DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=a0f603f42233f83152f82a76c4d116aeeff0064fe49df1e5da00c16f817cf997`,
    },
    {
      id: 4,
      name: "MIND",
      description: "RADIO PRODUSTRY",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/4DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=33a76ffd107dfb960cd69b8f84b6b608167eb28491babd29e92903e4fb076837`,
    },
    {
      id: 5,
      name: "PRIMA",
      description: "MENU",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/5DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=38bdf0e036b5471d68eabbe09d03589b4318ab39869712fbf534738d3baa8f91`,
    },
    {
      id: 6,
      name: "OPTHO",
      description: "ORTHONOLOGY",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/10DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=de1e6aa6ecbe8fdc255629686cbfeedc3cd23520572b68149900996d179ac08b`,
    },
    {
      id: 7,
      name: "NURALZ",
      description: "NURALZ",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/11DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=36bef695980ebc9015c23932c6d88c5eca36a76e65f381472c7dba7ff7254c55`,
    },
    {
      id: 8,
      name: "EVERMED",
      description: "",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/1011DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=ef3d16f69a43c4d218761d4ac34ebe5f29847ab0c93017cf8e3b3165f08208d5`,
    },
    {
      id: 9,
      name: "GENVIMAX",
      description: "GENVIMAX",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/1012DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=8c0139e71bd7cf8497ac3dbb5813ebb5ed14d8d105486ec3f836353510b096cc`,
    },
    {
      id: 10,
      name: "MEDANOR",
      description: "MEDANOR",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/1017DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=9466dfc6d8cf1f6875872a016feee8570564f9f9bfe2b982dee038c91bf61e03`,
    },
    {
      id: 11,
      name: "VENTILA",
      description: "VENTILA",
      image: `https://vibcaredivisions.s3.ap-south-1.amazonaws.com/1018DivisionImage.png?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIXOEBKWXRBKCIXZQ/20250614/ap-south-1/s3/aws4_request&X-Amz-Date=20250614T061709Z&X-Amz-SignedHeaders=host&X-Amz-Signature=c9646a0b90d27f6a84f8182dbcee92d13be1e1e0dd38924d79fca4b20bc05ad2`,
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
                        setSelectedDivision(division.name);
                        setFilters({ ...filters, division: [division.name] });
                      }}
                    >
                      <div
                        className={`w-32 h-32 rounded-full border border-gray-200 flex items-center justify-center bg-white mb-4 ${
                          division.name === selectedDivision
                            ? "border-4 border-green-600"
                            : ""
                        }`}
                      >
                        <img
                          src={division.image}
                          alt={division.name}
                          draggable={false}
                          className="w-12 h-12 object-contain scale-150 pointer-events-none"
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
        { id: "TABLETS", label: "TABLETS" },
        { id: "CAPSULES", label: "CAPSULES" },
        { id: "SYRUP", label: "SYRUP" },
        { id: "INJECTION", label: "INJECTION" },
        { id: "OINTMENT", label: "OINTMENT" },
        { id: "DROPS", label: "DROPS" },
        { id: "SUSPENSION", label: "SUSPENSION" },
        { id: "CREAM", label: "CREAM" },
        { id: "GEL", label: "GEL" },
        { id: "POWDER", label: "POWDER" },
        { id: "OIL", label: "OIL" },
        { id: "LOTION", label: "LOTION" },
        { id: "INHALER", label: "INHALER" },
        { id: "NASAL SPRAY", label: "NASAL SPRAY" },
        { id: "SUPPOSITORY", label: "SUPPOSITORY" },
        { id: "INFUSION", label: "INFUSION" },
        { id: "LIQUID", label: "LIQUID" },
        { id: "SOAP", label: "SOAP" },
        { id: "FACE WASH", label: "FACE WASH" },
        { id: "SHAMPOO", label: "SHAMPOO" },
        { id: "CHURAN", label: "CHURAN" },
        { id: "RAS", label: "RAS" },
        { id: "RESPULES", label: "RESPULES" },
        { id: "PASTE", label: "PASTE" },
        { id: "SPRAY", label: "SPRAY" },
      ],
    },
    {
      id: "division",
      title: "Division",
      options: [
        { id: "AUSPIN", label: "AUSPIN" },
        { id: "CURE", label: "CURE" },
        { id: "GRACE", label: "GRACE" },
        { id: "MIND", label: "MIND" },
        { id: "PRIMA", label: "PRIMA" },
        { id: "OPTHO", label: "OPTHO" },
        { id: "NURALZ", label: "NURALZ" },
        { id: "EVERMED", label: "EVERMED" },
        { id: "GENVIMAX", label: "GENVIMAX" },
        { id: "MEDANOR", label: "MEDANOR" },
        { id: "VENTILA", label: "VENTILA" },
      ],
    },
    {
      id: "therapeutic",
      title: "Therapeutic",
      options: [
        { id: "NSAID'S", label: "NSAID'S" },
        { id: "ANTIBIOTICS", label: "ANTIBIOTICS" },
        { id: "ALKALIZER", label: "ALKALIZER" },
        { id: "ANTI-HELMINTIC", label: "ANTI-HELMINTIC" },
        { id: "ANTI-MALARIA", label: "ANTI-MALARIA" },
        { id: "ANTIALLERGIC", label: "ANTIALLERGIC" },
        { id: "ANTIFUNGAL", label: "ANTIFUNGAL" },
        { id: "ANTI-INFECTIVE", label: "ANTI-INFECTIVE" },
        { id: "ANTIVARICOSE", label: "ANTIVARICOSE" },
        { id: "ANTIVIRAL", label: "ANTIVIRAL" },
        { id: "CORTICOSTEROIDS", label: "CORTICOSTEROIDS" },
        { id: "ANTI-ULCERANTS", label: "ANTI-ULCERANTS" },
        { id: "HEPATO PROTECTIVES", label: "HEPATO PROTECTIVES" },
        { id: "GENERAL", label: "GENERAL" },
        { id: "LAXATIVES", label: "LAXATIVES" },
        { id: "NUTRITIONAL", label: "NUTRITIONAL" },
        { id: "PARENTERAL", label: "PARENTERAL" },
        { id: "RESPULES", label: "RESPULES" },
        { id: "ANTISPASMODIC", label: "ANTISPASMODIC" },
        { id: "HORMONES & RELATED DRUGS", label: "HORMONES & RELATED DRUGS" },
        { id: "WOMEN'S HEALTH GENERAL", label: "WOMEN'S HEALTH GENERAL" },
      ],
    },
    {
      id: "packingType",
      title: "Packing Type",
      options: [
        { id: "BLISTER", label: "BLISTER" },
        { id: "ALU ALU", label: "ALU ALU" },
        { id: "ALU STRIP", label: "ALU STRIP" },
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

// Main AllProducts component
const AllProducts = ({
  selectedDivision,
  setSelectedDivision,
  filters,
  setFilters,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const [isModalOpen, setModalOpen] = useState(false);
  const { productsLoading, products, fetchProducts } = ProductState();

  useEffect(() => {
    if (products.length === 0) fetchProducts();
  }, []);
  // Initialize page from URL params
  useEffect(() => {
    const pageParam = searchParams.get("page");
    if (pageParam && !isNaN(pageParam)) {
      setCurrentPage(parseInt(pageParam, 10));
    }
  }, [searchParams]);

  // Update URL when page changes
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);

      // Update URL with new page
      const newParams = new URLSearchParams(searchParams);
      if (page === 1) {
        newParams.delete("page");
      } else {
        newParams.set("page", page.toString());
      }
      setSearchParams(newParams, { replace: true });
    }
  };

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
    ) {
      setSelectedDivision(null);
    }

    setCurrentPage(1);
    setModalOpen(false);

    // Update URL params
    updateUrlParams(updatedFilters, 1);
  };

  // Clear all filters
  const clearAllFilters = () => {
    const clearedFilters = {
      form: [],
      therapeutic: [],
      packingType: [],
      division: [],
    };

    setFilters(clearedFilters);
    setSelectedDivision(null);
    setCurrentPage(1);

    // Clear URL params
    setSearchParams({}, { replace: true });
  };

  // Helper function to update URL parameters
  const updateUrlParams = (currentFilters, page = currentPage) => {
    const newParams = new URLSearchParams();

    // Add filter parameters
    Object.entries(currentFilters).forEach(([key, values]) => {
      if (Array.isArray(values) && values.length > 0) {
        values.forEach((value) => {
          newParams.append(key, value);
        });
      }
    });

    // Add page parameter (only if not page 1)
    if (page > 1) {
      newParams.set("page", page.toString());
    }

    setSearchParams(newParams, { replace: true });
  };

  // Filter products based on selected criteria
  const filteredProducts = useMemo(() => {
    if (!products || products.length === 0) return [];

    let filtered = [...products];

    if (filters.division.length > 0) {
      filtered = filtered.filter((p) =>
        filters.division.includes(p.brand.trim().toUpperCase())
      );
    }

    // Apply form filter (handles array of selected forms)
    if (filters.form.length > 0) {
      filtered = filtered.filter((p) =>
        filters.form.includes(p.category.trim())
      );
    }

    // Apply therapeutic filter
    if (filters.therapeutic.length > 0) {
      filtered = filtered.filter((p) =>
        filters.therapeutic.includes(p.therapeutic.trim().toUpperCase())
      );
    }

    // Apply packing type filter
    if (filters.packingType.length > 0) {
      filtered = filtered.filter((p) =>
        filters.packingType.includes(p.packagingType.trim().toUpperCase())
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

  // Reset to page 1 if current page exceeds total pages
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      handlePageChange(1);
    }
  }, [totalPages, currentPage]);

  // Check if any filters are active
  const hasActiveFilters = Object.values(filters).some(
    (filter) => Array.isArray(filter) && filter.length > 0
  );

  const activeFilterCount = Object.values(filters).filter(
    (filter) => Array.isArray(filter) && filter.length > 0
  ).length;

  // Get active filter labels for display
  const getActiveFilterLabels = () => {
    const labels = [];

    Object.entries(filters).forEach(([key, values]) => {
      if (Array.isArray(values) && values.length > 0) {
        values.forEach((value) => {
          labels.push({ type: key, value, label: value });
        });
      }
    });

    return labels;
  };

  // Remove individual filter
  const removeFilter = (filterType, filterValue) => {
    const updatedFilters = {
      ...filters,
      [filterType]: filters[filterType].filter((item) => item !== filterValue),
    };
    if (filterType === "division") setSelectedDivision(null);
    setFilters(updatedFilters);
    setCurrentPage(1);
    updateUrlParams(updatedFilters, 1);
  };

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

          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="cursor-pointer text-red-600 hover:text-red-800 font-medium px-3 py-2 rounded-lg hover:bg-red-50 transition-colors duration-200"
            >
              Clear All Filters
            </button>
          )}
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="mb-4 flex flex-wrap gap-2">
            {getActiveFilterLabels().map((filter, index) => (
              <span
                key={`${filter.type}-${filter.value}-${index}`}
                className="inline-flex items-center gap-2 bg-[#129349] text-white px-3 py-1 rounded-full text-sm"
              >
                <span className="capitalize">{filter.type}:</span>
                <span>{filter.label}</span>
                <button
                  onClick={() => removeFilter(filter.type, filter.value)}
                  className="cursor-pointer hover:text-black hover:bg-white hover:bg-opacity-20 rounded-full p-0.5"
                >
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </span>
            ))}
          </div>
        )}

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
            <Link key={product._id} to={`/products/${product._id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 &&
          (productsLoading ? (
            <GradientCircularProgress />
          ) : (
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
                Try adjusting your filters or clearing them to see more
                products.
              </p>
            </div>
          ))}

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
        "India's therapeutic demand curve is steep and unforgiving. Suave Healthcare counters it with a 1,500-product catalogue spanning 11 divisions—each batch released under WHO-GMP protocols, backed by in-house QA and ISO-compliant supply chain controls. Result: consistent, quality-assured medicines that let hospitals, trade channels, and government tenders scale without supply-shock risk.",
    },
    {
      icon: "⏱️",
      title: "Nation-Wide Distribution Edge",
      description:
        "Market access is meaningless without bullet-proof fulfilment. Suave Healthcare operates a digitised distribution network—real-time inventory APIs, tech-enabled cold-chain, and 72-hour dispatch to 27 Indian states. Commercial partners receive launch packs, medico-marketing assets, and regulatory dossiers that slash time-to-market and raise prescriber confidence from day one.",
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedDivision, setSelectedDivision] = useState(
    searchParams.getAll("division").length === 1
      ? searchParams.get("division")
      : null
  );
  const [filters, setFilters] = useState({
    form: [],
    therapeutic: [],
    packingType: [],
    division: [],
  });
  // Initialize filters from URL params on component mount
  useEffect(() => {
    const urlFilters = {
      form: searchParams.getAll("form"),
      therapeutic: searchParams.getAll("therapeutic"),
      packingType: searchParams.getAll("packingType"),
      division: searchParams.getAll("division"),
    };

    // Only update if there are actual params in URL
    const hasUrlParams = Object.values(urlFilters).some(
      (arr) => arr.length > 0
    );
    if (hasUrlParams) {
      setFilters(urlFilters);
    }
  }, [searchParams]);

  // Update URL when filters change
  const updateFilters = (newFilters) => {
    setFilters(newFilters);
    updateUrlParams(newFilters);
  };

  // Helper function to update URL parameters
  const updateUrlParams = (currentFilters) => {
    const newParams = new URLSearchParams();

    // Add filter parameters
    Object.entries(currentFilters).forEach(([key, values]) => {
      if (Array.isArray(values) && values.length > 0) {
        values.forEach((value) => {
          newParams.append(key, value);
        });
      }
    });

    // Update URL without triggering navigation
    setSearchParams(newParams, { replace: true });
  };

  return (
    <>
      <Divisions
        selectedDivision={selectedDivision}
        setSelectedDivision={setSelectedDivision}
        filters={filters}
        setFilters={updateFilters}
      />
      <AllProducts
        selectedDivision={selectedDivision}
        setSelectedDivision={setSelectedDivision}
        filters={filters}
        setFilters={updateFilters}
      />
      <FeatureHighlights />
    </>
  );
}
