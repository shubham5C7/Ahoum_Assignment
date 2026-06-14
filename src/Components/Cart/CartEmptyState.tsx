interface CartEmptyStateProps {
  onShopNow: () => void;
}

export default function CartEmptyState({ onShopNow }: CartEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-6">
      <div className="w-24 h-24 rounded-full bg-[#F2F3F2] flex items-center justify-center mb-5">
        <span className="text-5xl">🛒</span>
      </div>
      <p className="text-[#181725] font-bold text-xl">Your cart is empty</p>
      <p className="text-[#7C7C7C] text-sm mt-2 text-center">
        Looks like you haven't added anything yet
      </p>
      <button
        onClick={onShopNow}
        className="mt-6 h-[45px] px-10 rounded-[19px] bg-[#53B175] text-white font-semibold hover:opacity-90 transition"
      >
        Shop Now
      </button>
    </div>
  );
}