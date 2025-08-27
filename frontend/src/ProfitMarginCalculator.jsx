import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContactForm from "./PageContactForm";
import SEO from "./SEO";

function ProfitMarginCalculator() {
  const [saleValue, setSaleValue] = useState("");
  const [purchaseValue, setPurchaseValue] = useState("");
  const [mrExpenses, setMrExpenses] = useState("");
  const [travelExpenses, setTravelExpenses] = useState("");
  const [marketingExpenses, setMarketingExpenses] = useState("");
  const navigate = useNavigate();

  const calculateNetProfit = () => {
    const sale = parseFloat(saleValue) || 0;
    const purchase = parseFloat(purchaseValue) || 0;
    const mr = parseFloat(mrExpenses) || 0;
    const travel = parseFloat(travelExpenses) || 0;
    const marketing = parseFloat(marketingExpenses) || 0;

    return sale - purchase - (mr + travel + marketing);
  };

  const netProfit = calculateNetProfit();

  return (
    <div className="pt-8 px-4">
      <SEO slug="profit-margin-calculator" />
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
                  Profit calculator
                </span>
              </nav>

              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  Profit Margin Calculator
                </h1>
                <p className="text-gray-600">
                  Calculate your business profitability
                </p>
              </div>

              {/* Calculator Card */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <div className="space-y-4">
                  {/* Sale Value Input */}
                  <div>
                    <label className="block text-left text-sm font-semibold text-gray-800 mb-2">
                      Sale Value (₹) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                        ₹
                      </span>
                      <input
                        type="number"
                        value={saleValue}
                        onChange={(e) => setSaleValue(e.target.value)}
                        placeholder="0"
                        min="0"
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#129349] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Purchase Value Input */}
                  <div>
                    <label className="block text-left text-sm font-semibold text-gray-800 mb-2">
                      Purchase Value (₹) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                        ₹
                      </span>
                      <input
                        type="number"
                        value={purchaseValue}
                        onChange={(e) => setPurchaseValue(e.target.value)}
                        placeholder="0"
                        min="0"
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#129349] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* MR Expenses Input */}
                  <div>
                    <label className="block text-left text-sm font-semibold text-gray-800 mb-2">
                      MR Expenses (₹)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                        ₹
                      </span>
                      <input
                        type="number"
                        value={mrExpenses}
                        onChange={(e) => setMrExpenses(e.target.value)}
                        placeholder="0"
                        min="0"
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#129349] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Travel Expenses Input */}
                  <div>
                    <label className="block text-left text-sm font-semibold text-gray-800 mb-2">
                      Travel Expenses (₹)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                        ₹
                      </span>
                      <input
                        type="number"
                        value={travelExpenses}
                        onChange={(e) => setTravelExpenses(e.target.value)}
                        placeholder="0"
                        min="0"
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#129349] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Marketing Expenses Input */}
                  <div>
                    <label className="block text-left text-sm font-semibold text-gray-800 mb-2">
                      Marketing Expenses (₹)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                        ₹
                      </span>
                      <input
                        type="number"
                        value={marketingExpenses}
                        onChange={(e) => setMarketingExpenses(e.target.value)}
                        placeholder="0"
                        min="0"
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#129349] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Net Profit Display */}
                <div className="mt-6">
                  <button
                    className={`w-full py-4 px-6 rounded-lg font-bold text-white text-lg transition-all transform hover:scale-105 hover:shadow-lg ${
                      netProfit >= 0
                        ? "bg-[#129349] hover:bg-[#015c30]"
                        : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    Net Profit: ₹{netProfit.toFixed(2)}
                  </button>
                </div>
              </div>

              {/* Information Card */}
              <div className="bg-gray-50 rounded-xl shadow p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                  Calculation Information
                </h3>

                <div className="space-y-3 text-left">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">
                      Net Profit Formula:
                    </h4>
                    <p className="text-gray-600 text-sm bg-white p-2 rounded border-l-4 border-blue-500">
                      Net Profit = Sale Value - Purchase Value - (MR + Travel +
                      Marketing)
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">
                      Scheme Calculation:
                    </h4>
                    <p className="text-gray-600 text-sm bg-white p-2 rounded border-l-4 border-green-500">
                      Purchase Value – (Purchase Value × Scheme% ÷ 100)
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">
                      Cash Discount Calculation:
                    </h4>
                    <p className="text-gray-600 text-sm bg-white p-2 rounded border-l-4 border-orange-500">
                      Sale Value – (Sale Value × Cash Discount% ÷ 100)
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center mt-6">
                <p className="text-sm text-gray-500">
                  Track your business profitability with ease
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PMCPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProfitMarginCalculator />
      <PageContactForm />
    </>
  );
}
