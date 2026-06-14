import React from "react";
import { useNavigate } from "react-router-dom";
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

const SuccessSVG = () => (
  <svg width="273" height="241" viewBox="0 0 273 241" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M229.055 50.1581C236.964 50.9271 253.507 48.3786 256.407 32.033C259.308 15.6875 267.063 11.1617 270.578 10.942" stroke="#F3603F" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="158.82" cy="116.831" r="79.0761" fill="#53B175"/>
    <g filter="url(#filter0_d_1_1832)">
      <circle cx="158.82" cy="116.832" r="68.1416" stroke="white" strokeOpacity="0.7" strokeWidth="2"/>
    </g>
    <path d="M193.96 99.5319C193.96 101.685 193.115 103.764 191.579 105.249L155.862 139.848C154.249 141.333 152.099 142.224 149.871 142.224C147.644 142.224 145.493 141.333 143.957 139.848L126.06 122.548C124.524 121.063 123.679 118.985 123.679 116.831C123.679 114.678 124.601 112.674 126.137 111.114C127.75 109.629 129.824 108.813 132.051 108.738C134.279 108.738 136.352 109.555 137.966 111.04L149.871 122.548L179.673 93.7406C181.286 92.2557 183.36 91.439 185.588 91.439C187.815 91.5132 189.889 92.3299 191.502 93.8891C193.038 95.374 193.96 97.3787 193.96 99.5319Z" fill="white"/>
    <path d="M218.026 195.908C225.409 198.04 239.681 206.144 237.712 221.498" stroke="#F7B23B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.50037 174.24C12.8286 178.506 37.2507 181.566 44.3126 159.675M44.3126 159.675C45.3425 153.643 44.3127 141.711 31.9546 142.241C29.6006 148.052 28.7765 159.675 44.3126 159.675ZM44.3126 159.675C49.4618 160.631 61.4375 159.719 68.1462 148.42" stroke="#6E89FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="181.271" cy="232.727" r="7.57962" fill="#637BFE"/>
    <circle cx="252.925" cy="112.7" r="7.07962" stroke="#C05EFD"/>
    <circle cx="132.607" cy="8.30033" r="8.30033" fill="#53B175"/>
    <circle cx="156.173" cy="22.3101" r="4.38348" fill="#F3603F"/>
    <circle cx="59.5592" cy="86.6854" r="7.18199" stroke="#F7B23B"/>
    <circle cx="77.2041" cy="207.816" r="7.94695" stroke="#53B175"/>
    <circle cx="4.03543" cy="4.03543" r="4.03543" transform="matrix(-1 0 0 1 161.739 220)" fill="#53B175"/>
    <defs>
      <filter id="filter0_d_1_1832" x="85.678" y="46.6899" width="146.283" height="146.283" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="3"/>
        <feGaussianBlur stdDeviation="2"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1832"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1832" result="shape"/>
      </filter>
    </defs>
  </svg>
);

export default function OrderAccepted(): React.JSX.Element {
  const navigate = useNavigate();

  const Content = () => (
    <>
      <div className="mb-6 flex justify-center">
        <SuccessSVG />
      </div>
      <h2 className="text-[#181725] text-2xl font-bold text-center mb-3">
        Your Order has been accepted
      </h2>
      <p className="text-[#7C7C7C] text-sm text-center leading-6 mb-10">
        Your items has been placed and is on it's way to being processed
      </p>
      <div className="w-full flex flex-col gap-3">
        <button
          onClick={() => navigate("/home")}
          className="h-[45px] w-full rounded-[19px] border border-[#53B175] text-[#53B175] font-semibold hover:bg-green-50 transition"
        >
          Back to home
        </button>
        <button
          onClick={() => navigate("/home")}
          className="h-[45px] w-full rounded-[19px] bg-[#53B175] text-white font-semibold hover:opacity-90 transition"
        >
          Track Order
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-white">

      {/* ── MOBILE ── */}
      <div className="md:hidden h-screen overflow-hidden flex items-center justify-center px-4">
        <div className="w-full max-w-[400px] h-[600px] bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center px-8">
          <Content />
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex flex-col min-h-screen bg-[#f8f8f8]">
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
          <div className="bg-white rounded-[24px] border border-[#E2E2E2] shadow-sm px-12 py-10 flex flex-col items-center max-w-md w-full">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}