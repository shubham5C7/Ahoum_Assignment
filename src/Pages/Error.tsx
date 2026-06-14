import React from "react";
import { useNavigate } from "react-router-dom";
import errorImage from "../assets/Error image.png";
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

export default function Error(): React.JSX.Element {
  const navigate = useNavigate();

  const Content = () => (
    <>
      <div className="flex justify-center mb-2">
        <img src={errorImage} alt="Error" className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] object-contain" />
      </div>
      <h2 className="text-[#181725] text-xl font-bold text-center mb-2">
        Oops! Order Failed
      </h2>
      <p className="text-[#7C7C7C] text-sm text-center mb-8">
        Something went terribly wrong.
      </p>
      <div className="w-full flex flex-col gap-3">
        <button
          onClick={() => navigate("/checkout")}
          className="h-[45px] w-full rounded-[19px] bg-[#53B175] text-white font-semibold hover:opacity-90 transition"
        >
          Please Try Again
        </button>
        <button
          onClick={() => navigate("/home")}
          className="h-[45px] w-full rounded-[19px] text-[#181725] font-semibold hover:bg-gray-50 transition"
        >
          Back to home
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#f8f8f8]">

      {/* ── MOBILE ── */}
      <div className="md:hidden h-screen overflow-hidden flex items-center justify-center px-4">
        <div className="relative w-full max-w-[400px] h-[650px] bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center px-6">
          <button
            onClick={() => navigate("/home")}
            className="absolute top-5 right-5 text-gray-400 text-xl"
          >
            ✕
          </button>
          <Content />
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
                  <Icon active={false} />
                  <span className="text-[11px] font-semibold text-[#181725]">{label}</span>
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* Centred card */}
        <div className="flex-1 flex items-center justify-center px-8 py-12">
          <div className="relative bg-white rounded-[24px] border border-[#E2E2E2] shadow-sm px-12 py-10 flex flex-col items-center max-w-md w-full">
            <button
              onClick={() => navigate("/home")}
              className="absolute top-5 right-5 text-gray-400 text-xl hover:text-gray-600 transition"
            >
              ✕
            </button>
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}