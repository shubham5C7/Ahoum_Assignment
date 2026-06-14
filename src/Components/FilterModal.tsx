import { useState } from "react";
import { IoClose } from "react-icons/io5";

export type FilterState = {
  categories: string[];
  brands: string[];
};

interface FilterModalProps {
  onClose: () => void;
  onApply: (filters: FilterState) => void;
  categoryOptions: string[];
}

export default function FilterModal({ onClose, onApply, categoryOptions }: FilterModalProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleItem = (item: string) => {
    setSelectedCategories((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleApply = () => {
    onApply({ categories: selectedCategories, brands: [] });
    onClose();
  };

  const handleReset = () => {
    setSelectedCategories([]);
    onApply({ categories: [], brands: [] });
    onClose();
  };

  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/40 rounded-2xl" onClick={onClose} />
      <div className="relative w-full bg-white rounded-t-[30px] px-6 pt-6 pb-8 z-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={onClose}>
            <IoClose size={24} className="text-[#181725]" />
          </button>
          <h2 className="text-[#181725] text-lg font-bold">Filters</h2>
          <button onClick={handleReset} className="text-sm text-[#53B175] font-semibold">
            Reset
          </button>
        </div>

        {/* Product Filter Options */}
        <div className="mb-8">
          <h3 className="text-[#181725] font-semibold text-base mb-3">Products</h3>
          <div className="flex flex-col gap-3">
            {categoryOptions.map((cat) => (
              <div
                key={cat}
                onClick={() => toggleItem(cat)}
                className="flex items-center gap-3 cursor-pointer"
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                  selectedCategories.includes(cat)
                    ? "border-[#53B175] bg-[#53B175]"
                    : "border-gray-300"
                }`}>
                  {selectedCategories.includes(cat) && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className={`text-sm ${
                  selectedCategories.includes(cat)
                    ? "text-[#53B175] font-semibold"
                    : "text-[#181725]"
                }`}>
                  {cat}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleApply}
          className="h-[45px] w-full rounded-[19px] bg-[#53B175] text-white font-semibold hover:opacity-90 transition"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
}