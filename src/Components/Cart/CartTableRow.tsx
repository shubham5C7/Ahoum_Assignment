import { RiDeleteBin6Line } from "react-icons/ri";

interface CartItem {
  id: string;
  name: string;
  image: string;
  quantity: string;
  price: string;
  count: number;
}

interface CartTableRowProps {
  item: CartItem;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
}

export default function CartTableRow({ item, onIncrease, onDecrease, onRemove }: CartTableRowProps) {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_auto] gap-4 items-center py-4 px-4 bg-white first:rounded-t-2xl last:rounded-b-2xl hover:bg-[#fafafa] transition">
      {/* Product */}
      <div className="flex items-center gap-4 min-w-0">
        <div className="w-[72px] h-[72px] bg-[#F2F3F2] rounded-[14px] flex items-center justify-center shrink-0">
          <img src={item.image} alt={item.name} className="w-[56px] h-[56px] object-contain" />
        </div>
        <div className="min-w-0">
          <p className="text-[15px] font-bold text-[#181725] truncate">{item.name}</p>
          <p className="text-[12px] text-[#7C7C7C] mt-0.5">{item.quantity}</p>
          <p className="text-[13px] text-[#53B175] font-semibold mt-1">
            ${parseFloat(item.price).toFixed(2)} each
          </p>
        </div>
      </div>

      {/* Qty */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => onDecrease(item.id)}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-[#181725] hover:bg-gray-100 transition text-lg leading-none"
        >
          −
        </button>
        <span className="text-[15px] font-bold text-[#181725] w-6 text-center">
          {item.count}
        </span>
        <button
          onClick={() => onIncrease(item.id)}
          className="w-8 h-8 rounded-full border border-[#53B175] flex items-center justify-center text-[#53B175] hover:bg-green-50 transition text-lg leading-none"
        >
          +
        </button>
      </div>

      {/* Price */}
      <div className="text-right">
        <span className="text-[16px] font-bold text-[#181725]">
          ${(parseFloat(item.price) * item.count).toFixed(2)}
        </span>
      </div>

      {/* Delete */}
      <button
        onClick={() => onRemove(item.id)}
        className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-red-400 transition rounded-full hover:bg-red-50"
      >
        <RiDeleteBin6Line size={18} />
      </button>
    </div>
  );
}