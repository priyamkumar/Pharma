import { useState } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const openSearch = () => {
    setIsVisible(true);
  };

  const closeSearch = () => {
    setIsVisible(false);
    setSearchValue('');
  };

  const clearInput = () => {
    setSearchValue('');
  };

  const executeSearch = () => {
    if (searchValue.trim()) {
      // Execute search logic here
      console.log('Searching for:', searchValue);
      // You can add your search API call or search logic here
    }
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeSearch();
    } else if (e.key === 'Enter') {
      executeSearch();
    }
  };

  return (
    <div className="relative">
      {/* Search Icon Button */}
      <button
        onClick={openSearch}
        className="cursor-pointer p-3 rounded-full bg-[#129349] text-white hover:bg-[#015c30] transition-colors duration-200 shadow-lg"
        aria-label="Open search"
      >
        <Search size={20} />
      </button>

      {/* Search Modal Overlay */}
      {isVisible && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 flex items-start justify-center pt-20 z-50"
          onClick={closeSearch}
        >
          <div className="w-full max-w-md mx-4">
            {/* Search Container */}
            <div 
              className="bg-white rounded-lg shadow-xl p-4 transform transition-all duration-200 ease-out"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex items-center">
                {/* Search Input */}
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Search here....."
                  className="w-full pl-4 pr-20 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                  autoFocus
                />
                
                {/* Go Button */}
                <button
                  onClick={executeSearch}
                  disabled={!searchValue.trim()}
                  className="cursor-pointer absolute right-10 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-150"
                >
                  Go
                </button>
                
                {/* Clear Button */}
                <button
                  onClick={clearInput}
                  className="cursor-pointer absolute right-2 p-2 rounded-full transition-colors duration-150"
                  aria-label="Clear search"
                >
                  <X size={18} className="text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}