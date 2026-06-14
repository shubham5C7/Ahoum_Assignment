import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { useCartStore } from "../store/cartStore";
import BottomNav from "../Components/BottomNav";
import DesktopTopNav from "../Components/Cart/DesktopTopNav";
import CartRow from "../Components/Cart/CartRow";
import CartTableRow from "../Components/Cart/CartTableRow";
import CartEmptyState from "../Components/Cart/CartEmptyState";
import OrderSummary from "../Components/Cart/OrderSummary";

export default function Cart(): React.JSX.Element {
  const navigate = useNavigate();
  const { items, increaseCount, decreaseCount, removeFromCart, totalPrice } =
    useCartStore();

  const total = totalPrice();
  const itemCount = items.reduce((s, i) => s + i.count, 0);

  return (
    <div className="min-h-screen bg-[#f8f8f8]">

      {/* ── MOBILE ── */}
      <div className="md:hidden h-screen overflow-hidden flex items-center justify-center px-4">
        <div className="relative w-full max-w-[400px] h-[680px] bg-white rounded-2xl shadow-xl">
          <div className="h-full overflow-y-auto scrollbar-hide pb-[92px]">

            <div className="flex items-center justify-center px-4 pt-8 relative">
              <button onClick={() => navigate(-1)} className="absolute left-4 cursor-pointer">
                <IoChevronBack size={24} className="text-[#181725]" />
              </button>
              <h2 className="text-[#181725] text-xl font-bold">My Cart</h2>
            </div>

            {items.length === 0 ? (
              <CartEmptyState onShopNow={() => navigate("/home")} />
            ) : (
              <>
                <div className="px-4 mt-6 flex flex-col gap-4">
                  {items.map((item) => (
                    <CartRow
                      key={item.id}
                      item={item}
                      onIncrease={increaseCount}
                      onDecrease={decreaseCount}
                      onRemove={removeFromCart}
                    />
                  ))}
                </div>
                <div className="px-4 mt-6 mb-2">
                  <button
                    onClick={() => navigate("/checkout")}
                    className="h-[45px] w-full rounded-[19px] bg-[#53B175] text-white font-semibold hover:opacity-90 transition flex items-center justify-center gap-3"
                  >
                    <span>Go to Checkout</span>
                    <span className="bg-[#43A25F] px-3 py-0.5 rounded-lg text-sm">
                      ${total.toFixed(2)}
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <BottomNav active="cart" />
          </div>
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex flex-col min-h-screen">
        <DesktopTopNav active="cart" />

        <main className="max-w-7xl mx-auto px-8 py-10 w-full flex-1">
          <div className="flex items-center gap-3 mb-8">
            <button
              onClick={() => navigate(-1)}
              className="w-9 h-9 rounded-full border border-[#E2E2E2] bg-white flex items-center justify-center hover:bg-gray-50 transition"
            >
              <IoChevronBack size={18} className="text-[#181725]" />
            </button>
            <h1 className="text-[28px] font-bold text-[#181725]">My Cart</h1>
            {items.length > 0 && (
              <span className="px-3 py-0.5 rounded-full bg-[#53B175] text-white text-[12px] font-semibold">
                {itemCount} items
              </span>
            )}
          </div>

          {items.length === 0 ? (
            <CartEmptyState onShopNow={() => navigate("/home")} />
          ) : (
            <div className="flex gap-8 items-start">
              <div className="flex-1 min-w-0">
                {/* Table header */}
                <div className="grid grid-cols-[2fr_1fr_1fr_auto] gap-4 px-4 pb-3 border-b border-[#E2E2E2]">
                  <span className="text-[12px] font-bold text-[#7C7C7C] uppercase tracking-wider">Product</span>
                  <span className="text-[12px] font-bold text-[#7C7C7C] uppercase tracking-wider text-center">Qty</span>
                  <span className="text-[12px] font-bold text-[#7C7C7C] uppercase tracking-wider text-right">Price</span>
                  <span className="w-8" />
                </div>

                <div className="flex flex-col divide-y divide-[#F2F3F2]">
                  {items.map((item) => (
                    <CartTableRow
                      key={item.id}
                      item={item}
                      onIncrease={increaseCount}
                      onDecrease={decreaseCount}
                      onRemove={removeFromCart}
                    />
                  ))}
                </div>

                <button
                  onClick={() => navigate("/home")}
                  className="mt-5 flex items-center gap-1.5 text-[#53B175] text-[14px] font-semibold hover:opacity-70 transition"
                >
                  <IoChevronBack size={15} />
                  Continue Shopping
                </button>
              </div>

              {/* Sticky sidebar */}
              <div className="w-[300px] xl:w-[340px] shrink-0 sticky top-[90px]">
                <OrderSummary
                  total={total}
                  itemCount={itemCount}
                  onCheckout={() => navigate("/checkout")}
                  onContinueShopping={() => navigate("/home")}
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}