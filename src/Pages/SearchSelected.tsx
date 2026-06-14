import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoChevronBack } from "react-icons/io5";
import { categoryProducts } from "../data/products";
import BottomNav from "../Components/BottomNav";
import { useCartStore } from "../store/cartStore";
import FilterModal from "../Components/FilterModal";
import carrot from "../assets/carrot.png";
import { ShopIcon, ExploreIcon, CartIcon, FavouriteIcon, AccountIcon } from "../Components/NavIcons";

interface Product {
    id: string;
  name: string;
  quantity: string;
  price: string;
  image: string;
  description: string;
}

interface FilterState {
  categories: string[];
  brands: string[];
}

type Tab = "shop" | "explore" | "cart" | "favourite" | "account";

const desktopTabs: { id: Tab; label: string; Icon: React.FC<{ active: boolean }>; route: string }[] = [
  { id: "shop",      label: "Shop",      Icon: ShopIcon,      route: "/home" },
  { id: "explore",   label: "Explore",   Icon: ExploreIcon,   route: "/explore" },
  { id: "cart",      label: "Cart",      Icon: CartIcon,      route: "/cart" },
  { id: "favourite", label: "Favourite", Icon: FavouriteIcon, route: "/favourite" },
  { id: "account",   label: "Account",   Icon: AccountIcon,   route: "/" },
];

const FilterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#181725" strokeWidth="2.5" strokeLinecap="round">
    <line x1="4" y1="6" x2="20" y2="6"/>
    <line x1="8" y1="12" x2="16" y2="12"/>
    <line x1="11" y1="18" x2="13" y2="18"/>
  </svg>
);

export default function SearchSelected(): React.JSX.Element {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get("category") ?? "";
  const [query, setQuery] = useState<string>("");
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [activeFilters, setActiveFilters] = useState<FilterState>({ categories: [], brands: [] });
  const { addToCart } = useCartStore();

  const categoryList: Product[] = categoryProducts[category] ?? [];
  const filterOptions = categoryList.map((p) => p.name);

  const applyFilters = (list: Product[]) => {
    if (activeFilters.categories.length === 0) return list;
    return list.filter((p) => activeFilters.categories.includes(p.name));
  };

  const filtered = applyFilters(
    categoryList.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    )
  );

  const hasActiveFilters = activeFilters.categories.length > 0;

  // Shared search bar JSX
  const SearchInput = ({ autoFocus = false }: { autoFocus?: boolean }) => (
    <div className="h-[52px] bg-[#F2F3F2] rounded-[15px] flex items-center px-4 gap-2">
      <AiOutlineSearch size={20} className="text-gray-500 shrink-0" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={`Search in ${category}`}
        className="flex-1 bg-transparent outline-none text-sm"
        autoFocus={autoFocus}
      />
      {query.length > 0 && (
        <button onClick={() => setQuery("")} className="text-gray-400 text-lg leading-none">✕</button>
      )}
      <button
        onClick={() => setShowFilter(true)}
        className="relative shrink-0 ml-1 w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg bg-white"
      >
        <FilterIcon />
        {hasActiveFilters && (
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#53B175] rounded-full border border-white" />
        )}
      </button>
    </div>
  );

  // Shared product grid
  const ProductGrid = () => (
    <div className="grid grid-cols-2 gap-3">
      {filtered.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate(`/product/${item.id}`)}
          className="bg-white border border-[#E2E2E2] rounded-[18px] p-3 flex flex-col items-center cursor-pointer hover:shadow-md transition"
        >
          <div className="w-full h-[100px] flex items-center justify-center bg-[#F2F3F2] rounded-[12px]">
            <img src={item.image} alt={item.name} className="w-[75px] h-[75px] object-contain" />
          </div>
          <p className="text-[12px] text-[#7C7C7C] mt-2 self-start">{item.quantity}</p>
          <p className="text-[13px] font-bold text-[#181725] self-start">{item.name}</p>
          <div className="flex items-center justify-between w-full mt-2">
            <span className="text-[14px] font-bold text-[#181725]">${item.price}</span>
            <button
              onClick={(e) => { e.stopPropagation(); addToCart(item); }}
              className="w-[28px] h-[28px] bg-[#53B175] rounded-full flex items-center justify-center text-white text-[20px] leading-none"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  // Shared search results list
  const SearchResults = () => (
    <div className="flex flex-col gap-3">
      {filtered.length === 0 ? (
        <p className="text-center text-[#7C7C7C] mt-10">No products found for "{query}"</p>
      ) : (
        filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
            className="flex items-center gap-4 border border-[#E2E2E2] rounded-[18px] p-3 cursor-pointer hover:bg-gray-50 transition"
          >
            <div className="w-[70px] h-[70px] bg-[#F2F3F2] rounded-[12px] flex items-center justify-center shrink-0">
              <img src={item.image} alt={item.name} className="w-[55px] h-[55px] object-contain" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-bold text-[#181725] truncate">{item.name}</p>
              <p className="text-[12px] text-[#7C7C7C]">{item.quantity}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-[15px] font-bold text-[#181725]">${item.price}</span>
              <button
                onClick={(e) => { e.stopPropagation(); addToCart(item); }}
                className="w-[28px] h-[28px] bg-[#53B175] rounded-full flex items-center justify-center text-white text-[20px] leading-none"
              >
                +
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );

  const EmptyFiltered = () => (
    <div className="flex flex-col items-center mt-10">
      <p className="text-center text-[#7C7C7C]">No products match the filter.</p>
      <button
        onClick={() => setActiveFilters({ categories: [], brands: [] })}
        className="mt-4 text-[#53B175] text-sm font-semibold underline"
      >
        Clear Filter
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8f8f8]">

      {/* ── MOBILE ── */}
      <div className="md:hidden h-screen overflow-hidden flex items-center justify-center px-4">
        <div className="relative w-full max-w-[400px] h-[680px] bg-white rounded-2xl shadow-xl">
          <div className="h-full overflow-y-auto scrollbar-hide pb-[92px]">

            {/* Header */}
            <div className="flex items-center gap-3 px-4 pt-6">
              <button onClick={() => navigate(-1)} className="cursor-pointer">
                <IoChevronBack size={24} className="text-[#181725]" />
              </button>
              <h2 className="text-[#181725] text-xl font-bold flex-1">{category}</h2>
            </div>

            <div className="px-4 mt-4">
              <SearchInput autoFocus />
            </div>

            <div className="px-4 mt-4">
              {query.length === 0 ? (
                filtered.length === 0 ? <EmptyFiltered /> : <ProductGrid />
              ) : (
                <SearchResults />
              )}
            </div>
          </div>

          {showFilter && (
            <FilterModal
              onClose={() => setShowFilter(false)}
              onApply={(filters) => setActiveFilters(filters)}
              categoryOptions={filterOptions}
            />
          )}

          <div className="absolute bottom-0 left-0 right-0">
            <BottomNav active="explore" />
          </div>
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex flex-col min-h-screen">
        {/* Navbar */}
        <header className="sticky top-0 z-20 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-8 h-[70px] flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/home")}>
              <img src={carrot} alt="logo" className="w-8 h-8 object-contain" />
              <span className="text-[20px] font-bold text-[#53B175]">Nectar</span>
            </div>

            <div className="flex-1 mx-8 max-w-[500px]">
              <SearchInput />
            </div>

            <nav className="flex items-center gap-6">
              {desktopTabs.map(({ id, label, Icon, route }) => (
                <button key={id} onClick={() => navigate(route)} className="flex flex-col items-center gap-0.5">
                  <Icon active={id === "explore"} />
                  <span className={`text-[11px] font-semibold ${id === "explore" ? "text-[#53B175]" : "text-[#181725]"}`}>
                    {label}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-8 py-10 w-full">
          {/* Back + Title */}
          <div className="flex items-center gap-3 mb-8">
            <button
              onClick={() => navigate(-1)}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[#E2E2E2] bg-white hover:bg-gray-50 transition"
            >
              <IoChevronBack size={20} className="text-[#181725]" />
            </button>
            <h1 className="text-[28px] font-bold text-[#181725]">{category}</h1>
            {hasActiveFilters && (
              <span className="ml-2 px-3 py-1 bg-[#53B175]/10 text-[#53B175] text-xs font-semibold rounded-full">
                Filtered
              </span>
            )}
          </div>

          {/* Results count */}
          <p className="text-[#7C7C7C] text-sm mb-6">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
            {query ? ` for "${query}"` : ""}
          </p>

          {/* Grid — desktop uses 4 columns */}
          {query.length === 0 ? (
            filtered.length === 0 ? (
              <EmptyFiltered />
            ) : (
              <div className="grid grid-cols-4 gap-5">
                {filtered.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="bg-white border border-[#E2E2E2] rounded-[20px] p-4 flex flex-col items-center cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all"
                  >
                    <div className="w-full h-[130px] flex items-center justify-center bg-[#F2F3F2] rounded-[14px]">
                      <img src={item.image} alt={item.name} className="w-[95px] h-[95px] object-contain" />
                    </div>
                    <p className="text-[12px] text-[#7C7C7C] mt-3 self-start">{item.quantity}</p>
                    <p className="text-[14px] font-bold text-[#181725] self-start mt-0.5">{item.name}</p>
                    <div className="flex items-center justify-between w-full mt-3">
                      <span className="text-[15px] font-bold text-[#181725]">${item.price}</span>
                      <button
                        onClick={(e) => { e.stopPropagation(); addToCart(item); }}
                        className="w-[32px] h-[32px] bg-[#53B175] rounded-full flex items-center justify-center text-white text-[22px] leading-none hover:bg-[#3d9e5f] transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="flex flex-col gap-4 max-w-3xl">
              <SearchResults />
            </div>
          )}
        </div>

        {showFilter && (
          <FilterModal
            onClose={() => setShowFilter(false)}
            onApply={(filters) => setActiveFilters(filters)}
            categoryOptions={filterOptions}
          />
        )}
      </div>
    </div>
  );
}