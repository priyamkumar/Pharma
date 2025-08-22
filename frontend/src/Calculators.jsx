import { Link } from "react-router-dom";

export default function Calculators() {
  return (
    <section className="py-12 bg-[#ddfbe9]">
      <div className="max-w-[75vw] mx-auto container px-4">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          Franchise Profit Calculator
        </h2>
        <p className="text-gray-600 mb-8">
          Want to know your earning potential? Use our simple calculator to
          estimate profit margins based on your sales.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Profit-Margin
              </h3>
              <p className="text-gray-600">Calculator</p>
              <Link
                to="/profit-margin-calculator"
                className="inline-block text-[#129349] font-medium mt-4"
              >
                Calculator <span className="ml-1">→</span>
              </Link>
            </div>
            <img src="/calculator.png" alt="Calculator" className="w-24" />
          </div>

          <div className="bg-white rounded-lg p-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">PTR/PTS</h3>
              <p className="text-gray-600">Calculator</p>
              <Link
                to="/ptr-pts-calculator"
                className="inline-block text-[#129349] font-medium mt-4"
              >
                Calculator <span className="ml-1">→</span>
              </Link>
            </div>
            <img src="/calculator.png" alt="Calculator" className="w-24" />
          </div>
        </div>
      </div>
    </section>
  );
}
