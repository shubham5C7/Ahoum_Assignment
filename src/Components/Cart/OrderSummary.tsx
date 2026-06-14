interface OrderSummaryProps {
  total: number;
  itemCount: number;
  onCheckout: () => void;
  onContinueShopping: () => void;
}

export default function OrderSummary({
  total,
  itemCount,
  onCheckout,
  onContinueShopping,
}: OrderSummaryProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#E2E2E2] p-6">
      <h3 className="text-[18px] font-bold text-[#181725] mb-5">Order Summary</h3>

      <div className="flex flex-col gap-4 text-[14px]">
        <div className="flex justify-between">
          <span className="text-[#7C7C7C]">Subtotal ({itemCount} items)</span>
          <span className="font-semibold text-[#181725]">${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#7C7C7C]">Delivery Fee</span>
          <span className="font-semibold text-[#53B175]">Free</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#7C7C7C]">Discount</span>
          <span className="font-semibold text-[#181725]">—</span>
        </div>
      </div>

      <div className="border-t border-dashed border-[#E2E2E2] my-5" />

      <div className="flex justify-between text-[16px] font-bold text-[#181725] mb-5">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      {/* Promo */}
      <div className="flex gap-2 mb-5">
        <input
          type="text"
          placeholder="Promo code"
          className="flex-1 h-[42px] px-4 rounded-[12px] border border-[#E2E2E2] text-sm outline-none focus:border-[#53B175] transition placeholder:text-gray-400"
        />
        <button className="h-[42px] px-4 rounded-[12px] bg-[#53B175] text-white text-sm font-semibold hover:opacity-90 transition">
          Apply
        </button>
      </div>

      <button
        onClick={onCheckout}
        className="h-[50px] w-full rounded-[19px] bg-[#53B175] text-white font-semibold text-[15px] hover:opacity-90 transition flex items-center justify-center gap-3"
      >
        <span>Go to Checkout</span>
        <span className="bg-[#43A25F] px-3 py-0.5 rounded-lg text-sm">
          ${total.toFixed(2)}
        </span>
      </button>

      <button
        onClick={onContinueShopping}
        className="mt-3 w-full h-[42px] rounded-[19px] border border-[#E2E2E2] text-[#181725] text-sm font-semibold hover:bg-gray-50 transition"
      >
        Continue Shopping
      </button>
    </div>
  );
}