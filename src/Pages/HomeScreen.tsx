import carrot from "../assets/carrot.png";
import leaves from "../assets/leaves.png";
import vegetables from "../assets/vegitables.png";
import lettuce from "../assets/leafvegies.png";
import vegies from "../assets/Vegies.png";
import BottomNav from "../Components/BottomNav";
import { AiOutlineSearch } from "react-icons/ai";
import { exclusiveOffers, bestSelling, groceryCategories, groceryProducts } from "../data/products";
import { useNavigate } from "react-router-dom";
import { ShopIcon, ExploreIcon, CartIcon, FavouriteIcon, AccountIcon } from "../Components/NavIcons";
import { useProductStore } from "../store/productStore";
import { useEffect } from "react";

type Tab = "shop" | "explore" | "cart" | "favourite" | "account";

const desktopTabs: { id: Tab; label: string; Icon: React.FC<{ active: boolean }>; route: string }[] = [
  { id: "shop",      label: "Shop",      Icon: ShopIcon,      route: "/home" },
  { id: "explore",   label: "Explore",   Icon: ExploreIcon,   route: "/explore" },
  { id: "cart",      label: "Cart",      Icon: CartIcon,      route: "/cart" },
  { id: "favourite", label: "Favourite", Icon: FavouriteIcon, route: "/favourite" },
  { id: "account",   label: "Account",   Icon: AccountIcon,   route: "/" },
];

const allProducts = [...exclusiveOffers, ...bestSelling, ...groceryProducts];

export default function HomeScreen() {
  const navigate = useNavigate();
  const active: Tab = "shop";
    const { fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="min-h-screen bg-[#f8f8f8]">

      {/* ── MOBILE ── */}
      <div className="md:hidden h-screen overflow-hidden flex items-center justify-center px-4">
        <div className="relative w-full max-w-[400px] h-[680px] bg-white rounded-2xl shadow-xl overflow-y-auto scrollbar-hide">
          <div className="flex flex-col items-center pt-10">
            <img src={carrot} alt="carrot" className="w-8 h-8 object-contain" />
            <div className="flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#393636" className="w-[36px] h-[20px]">
                <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
              </svg>
              <p className="w-[140px] h-[22px] text-[18px] font-semibold text-[#4C4F4D] text-center">Dhaka, Banasree</p>
            </div>
          </div>

          <div className="px-4 mt-6">
            <div className="h-[52px] bg-[#F2F3F2] rounded-[15px] flex items-center px-4">
              <AiOutlineSearch size={20} className="text-gray-500" />
              <input type="text" placeholder="Search Store" className="ml-3 flex-1 bg-transparent outline-none text-sm" />
            </div>
            <div className="relative h-[102px] mt-4 overflow-hidden rounded-[18px] bg-gradient-to-r from-[#F8E8E8] via-[#F8F7EE] to-[#EEF8E8] shadow-lg">
              <img src={vegies} alt="vegies" className="absolute left-2 bottom-0 h-[90px] object-contain" />
              <img src={vegetables} alt="vegetables" className="absolute right-0 top-0 h-[38px] object-contain" />
              <img src={leaves} alt="leaves" className="absolute left-0 top-1 h-10 object-contain" />
              <img src={lettuce} alt="lettuce" className="absolute right-0 bottom-0 h-10 object-contain" />
              <div className="absolute inset-0 flex flex-col items-center justify-center pl-18">
                <h2 className="text-[22px] font-bold text-[#181725] leading-none">Fresh Vegetables</h2>
                <p className="mt-2 text-[16px] font-semibold text-[#53B175]">Get Up To 40% OFF</p>
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <div className="w-5 h-1.5 rounded-full bg-[#53B175]" />
                <div className="w-2 h-2 rounded-full bg-gray-300" />
                <div className="w-2 h-2 rounded-full bg-gray-300" />
              </div>
            </div>
          </div>

          {/* Exclusive Offer */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3 px-4">
              <h2 className="text-[20px] font-bold text-[#181725]">Exclusive Offer</h2>
              <span className="text-[14px] font-semibold text-[#53B175]">See all</span>
            </div>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4">
              {exclusiveOffers.map((item) => (
                <div key={item.id} onClick={() => navigate(`/product/${item.id}`)}
                  className="min-w-[170px] bg-white border border-[#E2E2E2] rounded-[18px] p-3 flex flex-col items-center cursor-pointer">
                  <img src={item.image} alt={item.name} className="w-[80px] h-[150px] object-contain" />
                  <p className="text-[12px] text-[#7C7C7C] mt-2 self-start">{item.quantity}</p>
                  <p className="text-[14px] font-bold text-[#181725] self-start">{item.name}</p>
                  <div className="flex items-center justify-between w-full mt-2">
                    <span className="text-[14px] font-bold text-[#181725]">${item.price}</span>
                    <button className="w-[28px] h-[28px] bg-[#53B175] rounded-full flex items-center justify-center text-white text-[20px] leading-none">+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Best Selling */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3 px-4">
              <h2 className="text-[20px] font-bold text-[#181725]">Best Selling</h2>
              <span className="text-[14px] font-semibold text-[#53B175]">See all</span>
            </div>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4">
              {bestSelling.map((item) => (
                <div key={item.id} onClick={() => navigate(`/product/${item.id}`)}
                  className="min-w-[170px] bg-white border border-[#E2E2E2] rounded-[18px] p-3 flex flex-col items-center cursor-pointer">
                  <img src={item.image} alt={item.name} className="w-[80px] h-[150px] object-contain" />
                  <p className="text-[12px] text-[#7C7C7C] mt-2 self-start">{item.quantity}</p>
                  <p className="text-[14px] font-bold text-[#181725] self-start">{item.name}</p>
                  <div className="flex items-center justify-between w-full mt-2">
                    <span className="text-[14px] font-bold text-[#181725]">${item.price}</span>
                    <button className="w-[28px] h-[28px] bg-[#53B175] rounded-full flex items-center justify-center text-white text-[20px] leading-none">+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Groceries */}
          <div className="mt-6">
            <div className="flex items-center justify-between px-4 mb-3">
              <h2 className="text-[20px] font-bold text-[#181725]">Groceries</h2>
              <span className="text-[14px] font-semibold text-[#53B175]">See all</span>
            </div>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 mb-3">
              {groceryCategories.map((item) => (
                <div key={item.id} className={`min-w-[220px] h-[100px] rounded-[18px] flex items-center justify-center gap-3 px-4 ${item.bg}`}>
                  <img src={item.image} alt={item.name} className="w-[70px] h-[150px] object-contain" />
                  <span className="text-[16px] font-semibold text-[#181725]">{item.name}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4">
              {groceryProducts.map((item) => (
                <div key={item.id} onClick={() => navigate(`/product/${item.id}`)}
                  className="min-w-[160px] bg-white border border-[#E2E2E2] rounded-[18px] p-4 flex flex-col items-center cursor-pointer">
                  <div className="w-full h-[110px] flex items-center justify-center">
                    <img src={item.image} alt={item.name} className="w-[100px] h-[100px] object-contain" />
                  </div>
                  <p className="text-[12px] text-[#7C7C7C] mt-2 self-start">{item.quantity}</p>
                  <p className="text-[15px] font-bold text-[#181725] self-start">{item.name}</p>
                  <div className="flex items-center justify-between w-full mt-3">
                    <span className="text-[16px] font-bold text-[#181725]">${item.price}</span>
                    <button className="w-[44px] h-[44px] bg-[#53B175] rounded-full flex items-center justify-center text-white text-[24px] leading-none">+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <BottomNav active="shop" />
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex flex-col min-h-screen">

        {/* Top Navbar */}
        <header className="sticky top-0 z-20 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-8 h-[70px] flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={carrot} alt="logo" className="w-8 h-8 object-contain" />
              <span className="text-[20px] font-bold text-[#53B175]">Nectar</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1 text-[#4C4F4D] font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#393636" className="w-4 h-4">
                <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
              </svg>
              <span className="text-sm">Dhaka, Banasree</span>
            </div>

            {/* Search */}
            <div className="flex-1 mx-8 max-w-[400px] h-[44px] bg-[#F2F3F2] rounded-[15px] flex items-center px-4">
              <AiOutlineSearch size={18} className="text-gray-500" />
              <input type="text" placeholder="Search Store" className="ml-3 flex-1 bg-transparent outline-none text-sm" />
            </div>

            {/* Nav Icons */}
            <nav className="flex items-center gap-6">
              {desktopTabs.map(({ id, label, Icon, route }) => (
                <button key={id} onClick={() => navigate(route)}
                  className="flex flex-col items-center gap-0.5 group">
                  <Icon active={active === id} />
                  <span className={`text-[11px] font-semibold ${active === id ? "text-[#53B175]" : "text-[#181725]"}`}>
                    {label}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-8 py-8 w-full flex gap-8">

          {/* Sidebar */}
          <aside className="w-[220px] shrink-0">
            <div className="bg-white rounded-2xl shadow-sm p-5 sticky top-[86px]">
              <h3 className="text-[16px] font-bold text-[#181725] mb-4">Categories</h3>
              <div className="flex flex-col gap-1">
                {groceryCategories.map((cat) => (
                  <button key={cat.id}
                    className="flex items-center gap-3 px-3 py-2 rounded-[12px] hover:bg-[#F2F3F2] transition text-left">
                    <img src={cat.image} alt={cat.name} className="w-8 h-8 object-contain" />
                    <span className="text-[14px] font-medium text-[#181725]">{cat.name}</span>
                  </button>
                ))}
              </div>

              {/* Price Filter */}
              <h3 className="text-[16px] font-bold text-[#181725] mt-6 mb-3">Price Range</h3>
              <input type="range" min="0" max="100" className="w-full accent-[#53B175]" />
              <div className="flex justify-between text-xs text-[#7C7C7C] mt-1">
                <span>$0</span>
                <span>$100</span>
              </div>

              {/* Brand Filter */}
              <h3 className="text-[16px] font-bold text-[#181725] mt-6 mb-3">Brand</h3>
              <div className="flex flex-col gap-2">
                {["Individual Collection", "Cocola", "Ifad", "Kazi Farms"].map((brand) => (
                  <label key={brand} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-[#53B175]" />
                    <span className="text-[13px] text-[#181725]">{brand}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Content */}
          <div className="flex-1 min-w-0">

            {/* Banner */}
            <div className="relative h-[160px] overflow-hidden rounded-[24px] bg-gradient-to-r from-[#F8E8E8] via-[#F8F7EE] to-[#EEF8E8] shadow mb-8">
              <img src={vegies} alt="vegies" className="absolute left-4 bottom-0 h-[140px] object-contain" />
              <img src={vegetables} alt="vegetables" className="absolute right-4 top-0 h-[60px] object-contain" />
              <img src={leaves} alt="leaves" className="absolute left-0 top-2 h-14 object-contain" />
              <img src={lettuce} alt="lettuce" className="absolute right-0 bottom-0 h-14 object-contain" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className="text-[32px] font-bold text-[#181725]">Fresh Vegetables</h2>
                <p className="mt-2 text-[20px] font-semibold text-[#53B175]">Get Up To 40% OFF</p>
              </div>
            </div>

            {/* Exclusive Offers */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[22px] font-bold text-[#181725]">Exclusive Offer</h2>
                <span className="text-[14px] font-semibold text-[#53B175] cursor-pointer">See all</span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {exclusiveOffers.map((item) => (
                  <div key={item.id} onClick={() => navigate(`/product/${item.id}`)}
                    className="bg-white border border-[#E2E2E2] rounded-[18px] p-4 flex flex-col items-center cursor-pointer hover:shadow-md transition">
                    <img src={item.image} alt={item.name} className="w-[80px] h-[100px] object-contain" />
                    <p className="text-[12px] text-[#7C7C7C] mt-2 self-start">{item.quantity}</p>
                    <p className="text-[14px] font-bold text-[#181725] self-start">{item.name}</p>
                    <div className="flex items-center justify-between w-full mt-2">
                      <span className="text-[14px] font-bold text-[#181725]">${item.price}</span>
                      <button className="w-[28px] h-[28px] bg-[#53B175] rounded-full flex items-center justify-center text-white text-[20px] leading-none">+</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Selling */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[22px] font-bold text-[#181725]">Best Selling</h2>
                <span className="text-[14px] font-semibold text-[#53B175] cursor-pointer">See all</span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {bestSelling.map((item) => (
                  <div key={item.id} onClick={() => navigate(`/product/${item.id}`)}
                    className="bg-white border border-[#E2E2E2] rounded-[18px] p-4 flex flex-col items-center cursor-pointer hover:shadow-md transition">
                    <img src={item.image} alt={item.name} className="w-[80px] h-[100px] object-contain" />
                    <p className="text-[12px] text-[#7C7C7C] mt-2 self-start">{item.quantity}</p>
                    <p className="text-[14px] font-bold text-[#181725] self-start">{item.name}</p>
                    <div className="flex items-center justify-between w-full mt-2">
                      <span className="text-[14px] font-bold text-[#181725]">${item.price}</span>
                      <button className="w-[28px] h-[28px] bg-[#53B175] rounded-full flex items-center justify-center text-white text-[20px] leading-none">+</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Groceries Grid */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[22px] font-bold text-[#181725]">Groceries</h2>
                <span className="text-[14px] font-semibold text-[#53B175] cursor-pointer">See all</span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {allProducts.map((item) => (
                  <div key={item.id} onClick={() => navigate(`/product/${item.id}`)}
                    className="bg-white border border-[#E2E2E2] rounded-[18px] p-4 flex flex-col items-center cursor-pointer hover:shadow-md transition">
                    <img src={item.image} alt={item.name} className="w-[80px] h-[100px] object-contain" />
                    <p className="text-[12px] text-[#7C7C7C] mt-2 self-start">{item.quantity}</p>
                    <p className="text-[15px] font-bold text-[#181725] self-start">{item.name}</p>
                    <div className="flex items-center justify-between w-full mt-3">
                      <span className="text-[16px] font-bold text-[#181725]">${item.price}</span>
                      <button className="w-[36px] h-[36px] bg-[#53B175] rounded-full flex items-center justify-center text-white text-[20px] leading-none">+</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}