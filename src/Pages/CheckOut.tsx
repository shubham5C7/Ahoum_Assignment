import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
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

export default function CheckOut(): React.JSX.Element {
  const navigate = useNavigate();
  const { totalPrice, clearCart, items } = useCartStore();

  const handlePlaceOrder = () => {
    clearCart();
    navigate("/order-accepted");
  };

  const CheckoutRows = () => (
    <>
      <div className="flex items-center justify-between py-4 border-b border-[#E2E2E2] cursor-pointer hover:bg-gray-50 transition px-1 rounded">
        <span className="text-[#181725] text-sm font-medium">Delivery</span>
        <div className="flex items-center gap-2 text-[#7C7C7C] text-sm">
          <span>Select Method</span>
          <span className="text-lg">›</span>
        </div>
      </div>
      <div className="flex items-center justify-between py-4 border-b border-[#E2E2E2] cursor-pointer hover:bg-gray-50 transition px-1 rounded">
        <span className="text-[#181725] text-sm font-medium">Payment</span>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-6 h-4 bg-[#EB001B] rounded-sm opacity-80" />
            <div className="w-6 h-4 bg-[#F79E1B] rounded-sm opacity-80 -ml-2" />
          </div>
          <span className="text-lg text-[#7C7C7C]">›</span>
        </div>
      </div>
      <div className="flex items-center justify-between py-4 border-b border-[#E2E2E2] cursor-pointer hover:bg-gray-50 transition px-1 rounded">
        <span className="text-[#181725] text-sm font-medium">Promo Code</span>
        <div className="flex items-center gap-2 text-[#7C7C7C] text-sm">
          <span>Pick discount</span>
          <span className="text-lg">›</span>
        </div>
      </div>
      <div className="flex items-center justify-between py-4 border-b border-[#E2E2E2] px-1">
        <span className="text-[#181725] text-sm font-medium">Total Cost</span>
        <div className="flex items-center gap-2 text-[#181725] font-bold text-sm">
          <span>${totalPrice().toFixed(2)}</span>
          <span className="text-lg">›</span>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#f8f8f8]">

      {/* ── MOBILE ── */}
      <div className="md:hidden h-screen overflow-hidden flex items-center justify-center px-4">
        <div className="relative w-full max-w-[400px] h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-[#f8f8f8] px-4 pt-6 pb-4">
            <div className="flex items-center justify-center relative mb-2">
              <button onClick={() => navigate(-1)} className="absolute left-0">
                <IoChevronBack size={24} className="text-[#181725]" />
              </button>
              <h2 className="text-[#181725] text-lg font-bold">My Cart</h2>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[30px] px-6 pt-6 pb-8 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[#181725] text-lg font-bold">Checkout</h2>
              <button onClick={() => navigate(-1)} className="text-gray-400">✕</button>
            </div>
            <CheckoutRows />
            <p className="text-[#7C7C7C] text-xs mt-4 mb-5">
              By placing an order you agree to our{" "}
              <span className="text-[#181725] font-semibold">Terms</span> And{" "}
              <span className="text-[#181725] font-semibold">Conditions</span>
            </p>
            <button onClick={handlePlaceOrder} className="h-[45px] w-full rounded-[19px] bg-[#53B175] text-white font-semibold hover:opacity-90 transition">
              Place Order
            </button>
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
                  <Icon active={id === "cart"} />
                  <span className={`text-[11px] font-semibold ${id === "cart" ? "text-[#53B175]" : "text-[#181725]"}`}>
                    {label}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* Two-column layout */}
        <div className="max-w-7xl mx-auto px-8 py-10 w-full">
          <div className="flex items-center gap-3 mb-8">
            <button
              onClick={() => navigate(-1)}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[#E2E2E2] bg-white hover:bg-gray-50 transition"
            >
              <IoChevronBack size={20} className="text-[#181725]" />
            </button>
            <h1 className="text-[28px] font-bold text-[#181725]">Checkout</h1>
          </div>

          <div className="grid grid-cols-[1fr_380px] gap-8 items-start">

            {/* Left — Checkout form */}
            <div className="bg-white rounded-[24px] border border-[#E2E2E2] shadow-sm px-8 py-6">
              <h2 className="text-[18px] font-bold text-[#181725] mb-4">Order Details</h2>
              <CheckoutRows />
              <p className="text-[#7C7C7C] text-xs mt-6 mb-6">
                By placing an order you agree to our{" "}
                <span className="text-[#181725] font-semibold">Terms</span> And{" "}
                <span className="text-[#181725] font-semibold">Conditions</span>
              </p>
              <button
                onClick={handlePlaceOrder}
                className="h-[52px] w-full rounded-[19px] bg-[#53B175] text-white font-semibold text-base hover:opacity-90 transition"
              >
                Place Order
              </button>
            </div>

            {/* Right — Sticky cart summary */}
            <div className="sticky top-[86px]">
              <div className="bg-white rounded-[24px] border border-[#E2E2E2] shadow-sm px-6 py-6">
                <h2 className="text-[18px] font-bold text-[#181725] mb-4">
                  Order Summary
                </h2>

                {/* Cart items */}
                <div className="flex flex-col gap-4 mb-6 max-h-[340px] overflow-y-auto">
                  {items.length === 0 ? (
                    <p className="text-[#7C7C7C] text-sm text-center py-4">
                      Your cart is empty
                    </p>
                  ) : (
                    items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <div className="w-[52px] h-[52px] bg-[#F2F3F2] rounded-[10px] flex items-center justify-center shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-[38px] h-[38px] object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-bold text-[#181725] truncate">{item.name}</p>
                          <p className="text-[12px] text-[#7C7C7C]">x{item.count}</p>
                        </div>
                        <span className="text-[14px] font-bold text-[#181725] shrink-0">
                          ${(parseFloat(item.price) * item.count).toFixed(2)}
                        </span>
                      </div>
                    ))
                  )}
                </div>

                {/* Totals */}
                <div className="border-t border-[#E2E2E2] pt-4 flex flex-col gap-2">
                  <div className="flex justify-between text-sm text-[#7C7C7C]">
                    <span>Subtotal</span>
                    <span>${totalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-[#7C7C7C]">
                    <span>Delivery</span>
                    <span className="text-[#53B175]">Free</span>
                  </div>
                  <div className="flex justify-between text-[16px] font-bold text-[#181725] mt-2 pt-2 border-t border-[#E2E2E2]">
                    <span>Total</span>
                    <span>${totalPrice().toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}