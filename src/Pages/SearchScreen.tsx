import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoChevronBack } from "react-icons/io5";
import { exclusiveOffers, bestSelling, groceryProducts } from "../data/products";
import BottomNav from "../Components/BottomNav";

interface Product {
  id: number;
  name: string;
  quantity: string;
  price: string;
  image: string;
  description?: string;
}

const allProducts: Product[] = [
  ...exclusiveOffers,
  ...bestSelling,
  ...groceryProducts,
];

export default function SearchScreen(): React.JSX.Element {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get("category") ?? "";

  const [query, setQuery] = useState<string>(category);

  // filter products based on search query
  const filtered = allProducts.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  // update input when category changes from URL
  useEffect(() => {
    setQuery(category);
  }, [category]);

  return (
    <div className="h-screen overflow-hidden bg-[#f8f8f8] flex items-center justify-center px-4">
      <div className="relative w-full max-w-[400px] h-[650px] bg-white rounded-2xl shadow-xl">
        <div className="h-full overflow-y-auto scrollbar-hide pb-[92px]">

          {/* Header */}
          <div className="flex items-center gap-3 px-4 pt-10">
            <button onClick={() => navigate(-1)}>
              <IoChevronBack size={24} className="text-[#181725]" />
            </button>
            <h2 className="text-[#181725] text-xl font-bold">
              {category || "Search"}
            </h2>
          </div>

          {/* Search Bar */}
          <div className="px-4 mt-4">
            <div className="h-[52px] bg-[#F2F3F2] rounded-[15px] flex items-center px-4">
              <AiOutlineSearch size={20} className="text-gray-500" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Store"
                className="ml-3 flex-1 bg-transparent outline-none text-sm"
                autoFocus
              />
              {query.length > 0 && (
                <button
                  onClick={() => setQuery("")}
                  className="text-gray-400 text-lg"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="px-4 mt-6">
            {filtered.length === 0 ? (
              <p className="text-center text-[#7C7C7C] mt-10">
                No products found for "{query}"
              </p>
            ) : (
              <div className="flex flex-col gap-3">
                {filtered.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="flex items-center gap-4 border border-[#E2E2E2] rounded-[18px] p-3 cursor-pointer hover:bg-gray-50 transition"
                  >
                    <div className="w-[70px] h-[70px] bg-[#F2F3F2] rounded-[12px] flex items-center justify-center shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[55px] h-[55px] object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[14px] font-bold text-[#181725] truncate">
                        {item.name}
                      </p>
                      <p className="text-[12px] text-[#7C7C7C]">
                        {item.quantity}
                      </p>
                    </div>
                    <span className="text-[15px] font-bold text-[#181725] shrink-0">
                      ${item.price}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <BottomNav active="explore" />
        </div>
      </div>
    </div>
  );
}