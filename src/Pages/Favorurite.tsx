import React from "react";
import { useNavigate } from "react-router-dom";
import { useWishlistStore } from "../store/wishlistStore";
import { useCartStore } from "../store/cartStore";
import { RiDeleteBin6Line } from "react-icons/ri";
import BottomNav from "../Components/BottomNav";
import { IoChevronBack } from "react-icons/io5";
import carrot from "../assets/carrot.png";
import { ShopIcon, ExploreIcon, CartIcon, FavouriteIcon, AccountIcon } from "../Components/NavIcons";

type Tab = "shop" | "explore" | "cart" | "favourite" | "account";

const desktopTabs: { id: Tab; label: string; Icon: React.FC<{ active: boolean }>; route: string }[] = [
  { id: "shop",      label: "Shop",      Icon: ShopIcon,      route: "/home" },
  { id: "explore",   label: "Explore",   Icon: ExploreIcon,   route: "/explore" },
  { id: "cart",      label: "Cart",      Icon: CartIcon,      route: "/cart" },
  { id: "favourite", label: "Favourite", Icon: FavouriteIcon, route: "/favourite" },
  { id: "account",   label: "Account",   Icon: AccountIcon,   route: "/" },
];

export default function Favourite(): React.JSX.Element {
  const navigate = useNavigate();
  const { items, removeFromWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();

  const handleAddAll = () => {
    items.forEach((item) => addToCart(item));
    navigate("/cart");
  };

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center mt-20 px-6">
      <p className="text-[#7C7C7C] text-center text-base">
        No favourites yet. Tap the ♡ on any product to save it here.
      </p>
      <button
        onClick={() => navigate("/home")}
        className="mt-6 h-[45px] px-8 rounded-[19px] bg-[#53B175] text-white font-semibold hover:opacity-90 transition"
      >
        Browse Products
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
            <div className="flex items-center justify-center px-4 pt-8 relative">
              <button onClick={() => navigate(-1)} className="absolute left-4 cursor-pointer">
                <IoChevronBack size={24} className="text-[#181725]" />
              </button>
              <h2 className="text-[#181725] text-xl font-bold">Favourites</h2>
            </div>

            {items.length === 0 ? (
              <EmptyState />
            ) : (
              <>
                <div className="px-4 mt-6 flex flex-col">
                  {items.map((item, index) => (
                    <div key={item.id}>
                      <div className="flex items-center gap-4 py-4">
                        <div
                          onClick={() => navigate(`/product/${item.id}`)}
                          className="w-[60px] h-[60px] bg-[#F2F3F2] rounded-[12px] flex items-center justify-center shrink-0 cursor-pointer"
                        >
                          <img src={item.image} alt={item.name} className="w-[45px] h-[45px] object-contain" />
                        </div>
                        <div onClick={() => navigate(`/product/${item.id}`)} className="flex-1 min-w-0 cursor-pointer">
                          <p className="text-[14px] font-bold text-[#181725] truncate">{item.name}</p>
                          <p className="text-[12px] text-[#7C7C7C]">{item.quantity}</p>
                          <p className="text-[14px] font-bold text-[#181725] mt-1">${item.price}</p>
                        </div>
                        <button
                          onClick={() => removeFromWishlist(item.id)}
                          className="text-gray-300 hover:text-red-400 transition shrink-0"
                        >
                          <RiDeleteBin6Line size={18} />
                        </button>
                      </div>
                      {index < items.length - 1 && <div className="h-[1px] bg-[#E2E2E2]" />}
                    </div>
                  ))}
                </div>

                <div className="px-4 mt-4">
                  <button
                    onClick={handleAddAll}
                    className="h-[45px] w-full rounded-[19px] bg-[#53B175] text-white font-semibold hover:opacity-90 transition"
                  >
                    Add All To Cart
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <BottomNav active="favourite" />
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

            <nav className="flex items-center gap-6">
              {desktopTabs.map(({ id, label, Icon, route }) => (
                <button key={id} onClick={() => navigate(route)} className="flex flex-col items-center gap-0.5">
                  <Icon active={id === "favourite"} />
                  <span className={`text-[11px] font-semibold ${id === "favourite" ? "text-[#53B175]" : "text-[#181725]"}`}>
                    {label}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-8 py-10 w-full">
          {/* Page title */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(-1)}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[#E2E2E2] bg-white hover:bg-gray-50 transition"
              >
                <IoChevronBack size={20} className="text-[#181725]" />
              </button>
              <h1 className="text-[28px] font-bold text-[#181725]">Favourites</h1>
              {items.length > 0 && (
                <span className="px-3 py-1 bg-[#53B175]/10 text-[#53B175] text-xs font-semibold rounded-full">
                  {items.length} item{items.length !== 1 ? "s" : ""}
                </span>
              )}
            </div>

            {items.length > 0 && (
              <button
                onClick={handleAddAll}
                className="h-[45px] px-8 rounded-[19px] bg-[#53B175] text-white font-semibold hover:opacity-90 transition"
              >
                Add All To Cart
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="bg-white rounded-[20px] border border-[#E2E2E2] divide-y divide-[#E2E2E2] overflow-hidden">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-6 px-6 py-5 hover:bg-gray-50 transition">
                  {/* Image */}
                  <div
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="w-[80px] h-[80px] bg-[#F2F3F2] rounded-[14px] flex items-center justify-center shrink-0 cursor-pointer"
                  >
                    <img src={item.image} alt={item.name} className="w-[60px] h-[60px] object-contain" />
                  </div>

                  {/* Info */}
                  <div
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="flex-1 min-w-0 cursor-pointer"
                  >
                    <p className="text-[16px] font-bold text-[#181725]">{item.name}</p>
                    <p className="text-[13px] text-[#7C7C7C] mt-0.5">{item.quantity}</p>
                  </div>

                  {/* Price */}
                  <span className="text-[18px] font-bold text-[#181725] shrink-0">${item.price}</span>

                  {/* Add to cart */}
                  <button
                    onClick={() => { addToCart(item); navigate("/cart"); }}
                    className="h-[38px] px-5 rounded-[12px] bg-[#53B175] text-white text-sm font-semibold hover:opacity-90 transition shrink-0"
                  >
                    Add to Cart
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="text-gray-300 hover:text-red-400 transition shrink-0"
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}