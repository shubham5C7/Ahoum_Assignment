import { useNavigate } from "react-router-dom";
import BottomNav from "../Components/BottomNav";
import { exploreCategories } from "../data/products";
import carrot from "../assets/carrot.png";
import SearchBar from "../Components/SearchBar";
import { ShopIcon, ExploreIcon, CartIcon, FavouriteIcon, AccountIcon } from "../Components/NavIcons";

type Tab = "shop" | "explore" | "cart" | "favourite" | "account";

const desktopTabs: { id: Tab; label: string; Icon: React.FC<{ active: boolean }>; route: string }[] = [
  { id: "shop",      label: "Shop",      Icon: ShopIcon,      route: "/home" },
  { id: "explore",   label: "Explore",   Icon: ExploreIcon,   route: "/explore" },
  { id: "cart",      label: "Cart",      Icon: CartIcon,      route: "/cart" },
  { id: "favourite", label: "Favourite", Icon: FavouriteIcon, route: "/favourite" },
  { id: "account",   label: "Account",   Icon: AccountIcon,   route: "/" },
];

export default function ExploreScreen(): React.JSX.Element {
  const navigate = useNavigate();
  const active: Tab = "explore";

  return (
    <div className="min-h-screen bg-[#f8f8f8]">

      {/* ── MOBILE ── */}
      <div className="md:hidden h-screen overflow-hidden flex items-center justify-center px-4">
        <div className="relative w-full max-w-[400px] h-[680px] bg-white rounded-2xl shadow-xl">
          <div className="h-full overflow-y-auto scrollbar-hide pb-[92px]">
            <div className="px-4 pt-10">
              <h2 className="text-[#181725] text-center text-2xl font-bold">Find Products</h2>
            </div>

            {/* 🔧 FIXED: navigates to /search on Enter or icon click */}
            <div className="px-4 mt-4">
              <SearchBar navigateTo="/search" />
            </div>

            <div className="px-4 mt-6 grid grid-cols-2 gap-4">
              {exploreCategories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => navigate(`/category?category=${encodeURIComponent(cat.name)}`)}
                  className={`${cat.bg} border ${cat.border} rounded-[18px] h-[130px] flex flex-col items-center justify-center gap-2 p-3 cursor-pointer hover:opacity-80 transition`}
                >
                  <img src={cat.image} alt={cat.name} className="w-[70px] h-[70px] object-contain" />
                  <p className="text-[13px] font-semibold text-[#181725] text-center leading-tight">{cat.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <BottomNav active="explore" />
          </div>
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex flex-col min-h-screen">
        <header className="sticky top-0 z-20 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-8 h-[70px] flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/home")}>
              <img src={carrot} alt="logo" className="w-8 h-8 object-contain" />
              <span className="text-[20px] font-bold text-[#53B175]">Nectar</span>
            </div>

 
            <div className="flex-1 mx-8 max-w-[500px]">
              <SearchBar navigateTo="/search" />
            </div>

            <nav className="flex items-center gap-6">
              {desktopTabs.map(({ id, label, Icon, route }) => (
                <button key={id} onClick={() => navigate(route)} className="flex flex-col items-center gap-0.5">
                  <Icon active={active === id} />
                  <span className={`text-[11px] font-semibold ${active === id ? "text-[#53B175]" : "text-[#181725]"}`}>
                    {label}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-8 py-10 w-full">
          <div className="mb-8 text-center">
            <h2 className="text-[32px] font-bold text-[#181725]">Find Products</h2>
            <p className="text-[#7C7C7C] mt-2">Browse all categories and find what you need</p>
          </div>

          {/* 🔧 FIXED: big search navigates to /search */}
          <div className="max-w-[600px] mx-auto mb-12">
            <SearchBar
              size="lg"
              placeholder="Search for products, categories..."
              navigateTo="/search"
            />
          </div>

          <h3 className="text-[22px] font-bold text-[#181725] mb-6">All Categories</h3>
          <div className="grid grid-cols-4 gap-6">
            {exploreCategories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => navigate(`/category?category=${encodeURIComponent(cat.name)}`)}
                className={`${cat.bg} border ${cat.border} rounded-[24px] h-[180px] flex flex-col items-center justify-center gap-3 p-4 cursor-pointer hover:shadow-md hover:scale-[1.02] transition-all`}
              >
                <img src={cat.image} alt={cat.name} className="w-[90px] h-[90px] object-contain" />
                <p className="text-[15px] font-semibold text-[#181725] text-center">{cat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}