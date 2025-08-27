import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageContactForm from "./PageContactForm";
import { Calculator, TrendingUp, Target } from "lucide-react";
import SEO from "./SEO";

function PtrPtsCalculator() {
  const [mrp, setMrp] = useState("");
  const [gst, setGst] = useState(12);
  const [retailerMargin, setRetailerMargin] = useState(20);
  const [stockistMargin, setStockistMargin] = useState(10);
  const [ptr, setPtr] = useState(0);
  const [pts, setPts] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (mrp && !isNaN(mrp) && mrp > 0) {
      // PTR = (MRP - (MRP * (Retailer Margin / 100))) / (1 + (GST / 100))
      const calculatedPtr =
        (parseFloat(mrp) - parseFloat(mrp) * (retailerMargin / 100)) /
        (1 + gst / 100);

      // PTS = PTR - (PTR * (Stockist Margin / 100))
      const calculatedPts =
        calculatedPtr - calculatedPtr * (stockistMargin / 100);

      setPtr(calculatedPtr);
      setPts(calculatedPts);
    } else {
      setPtr(0);
      setPts(0);
    }
  }, [mrp, gst, retailerMargin, stockistMargin]);
  return (
    <div className="py-8 px-4">
      <SEO slug="ptr-pts-calculator" />
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
                <span className="font-bold text-blue-800">
                  PTR & PTS Calculator
                </span>
              </nav>
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  PTR & PTS Calculator
                </h1>
                <p className="text-gray-600">
                  Calculate Price to Retailer & Price to Stockist
                </p>
              </div>

              {/* Input Section */}
              <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                {/* MRP Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    MRP (₹)
                  </label>
                  <div className="relative">
                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                      ₹
                    </span>
                    <input
                      type="number"
                      value={mrp}
                      min="0"
                      onChange={(e) => setMrp(e.target.value)}
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter MRP"
                    />
                  </div>
                </div>

                {/* GST Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    GST (%)
                  </label>
                  <div className="relative">
                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                      %
                    </span>
                    <input
                      type="number"
                      value={gst}
                      min="0"
                      onChange={(e) => setGst(parseFloat(e.target.value) || 0)}
                      className="w-full px-4 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Retailer Margin Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Retailer Margin (%)
                  </label>
                  <div className="relative">
                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                      %
                    </span>
                    <input
                      type="number"
                      value={retailerMargin}
                      min="0"
                      onChange={(e) =>
                        setRetailerMargin(parseFloat(e.target.value) || 0)
                      }
                      className="w-full px-4 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Stockist Margin Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Stockist Margin (%)
                  </label>
                  <div className="relative">
                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                      %
                    </span>
                    <input
                      type="number"
                      value={stockistMargin}
                      min="0"
                      onChange={(e) =>
                        setStockistMargin(parseFloat(e.target.value) || 0)
                      }
                      className="w-full px-4 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#129349] text-white rounded-md py-3 px-6 shadow text-center">
                  <div className="text-lg font-semibold">PTR</div>
                  <div className="text-xl font-bold">₹{ptr.toFixed(2)}</div>
                </div>
                <div className="bg-[#129349] text-white rounded-md py-3 px-6 shadow text-center">
                  <div className="text-lg font-semibold">PTS</div>
                  <div className="text-xl font-bold">₹{pts.toFixed(2)}</div>
                </div>
              </div>

              {/* Information Section */}
              <div className="bg-gray-50 p-6 rounded-xl shadow space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    What is PTR & PTS?
                  </h3>
                  <div className="text-sm leading-relaxed text-gray-700 space-y-2">
                    <p>
                      <strong>PTR (Price to Retailer)</strong> is the price at
                      which pharmaceutical companies sell their products to
                      retailers/chemists.
                    </p>
                    <p>
                      <strong>PTS (Price to Stockist)</strong> is the price at
                      which companies sell to stockists/distributors.
                    </p>
                    <div className="bg-white p-3 rounded-md mt-2">
                      <p className="font-mono text-xs">
                        PTR = (MRP - Retailer Margin) / (1 + GST%)
                      </p>
                      <p className="font-mono text-xs">
                        PTS = PTR - (PTR × Stockist Margin%)
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Importance of Retail and Stockist Margins
                  </h3>
                  <div className="text-sm leading-relaxed text-gray-700">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <strong>Retail Margin:</strong> The profit percentage
                        that retailers earn on each product sale
                      </li>
                      <li>
                        <strong>Stockist Margin:</strong> The profit percentage
                        that distributors/stockists earn for distribution
                        services
                      </li>
                      <li>
                        These margins ensure proper distribution channels and
                        incentivize sales partners
                      </li>
                    </ul>
                    <div className="bg-white p-3 rounded-md mt-2">
                      <p className="font-mono text-xs">
                        Retail Margin = ((MRP - PTR) / MRP) × 100
                      </p>
                      <p className="font-mono text-xs">
                        Stockist Margin = ((PTR - PTS) / PTR) × 100
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PCDCalculatorSection() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <Calculator className="w-12 h-12 text-[#129349] mb-4" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Why Use Our PCD Calculator?
            </h1>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Our PCD Calculator is a comprehensive tool designed to simplify
              the complex calculations involved in determining PTR, PTS, Retail
              Margin, and Stockist Margin. With just a few clicks, you can:
            </p>
          </div>

          {/* Feature List */}
          <div className="max-w-3xl mx-auto space-y-6 py-8">
            <div className="grid gap-6 md:gap-8">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Calculator className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  Accurately calculate PTR & PTS for any pharmaceutical product.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  Determine the Retail and Stockist Margins to set competitive
                  yet profitable pricing.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-purple-600" />
                  </div>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  Make informed decisions to optimize your pharma franchise or
                  distribution network.
                </p>
              </div>
            </div>
          </div>

          {/* Concluding Statement */}
          <div className="max-w-3xl mx-auto pt-6">
            <div className="bg-[#ddfbe9] rounded-2xl p-8 text-[#129349]">
              <p className="text-base sm:text-lg leading-relaxed">
                By using our PTR & PTS Calculator, you're not just crunching
                numbers; you're optimizing your business for success. Leverage
                this invaluable tool to elevate your pharmaceutical business to
                new heights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PTRPTSPage() {
  return (
    <>
      <PtrPtsCalculator />
      <PCDCalculatorSection />
      <PageContactForm />
    </>
  );
}
