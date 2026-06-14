import { RiDeleteBin6Line } from "react-icons/ri";

interface CartItem {
  id: string;
  name: string;
  image: string;
  quantity: string;
  price: string;
  count: number;
}

interface CartRowProps {
  item: CartItem;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
}

export default function CartRow({ item, onIncrease, onDecrease, onRemove }: CartRowProps) {
  return (
    <div className="flex items-center gap-3 border border-[#E2E2E2] rounded-[18px] p-3 bg-white">
      <div className="w-[60px] h-[60px] bg-[#F2F3F2] rounded-[12px] flex items-center justify-center shrink-0">
        <img src={item.image} alt={item.name} className="w-[48px] h-[48px] object-contain" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[14px] font-bold text-[#181725] truncate">{item.name}</p>
        <p className="text-[12px] text-[#7C7C7C]">{item.quantity}</p>
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => onDecrease(item.id)}
            className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-[#181725] text-sm hover:bg-gray-100 transition"
          >
            −
          </button>
          <span className="text-[13px] font-semibold text-[#181725] w-4 text-center">
            {item.count}
          </span>
          <button
            onClick={() => onIncrease(item.id)}
            className="w-6 h-6 rounded-full border border-[#53B175] flex items-center justify-center text-[#53B175] text-sm hover:bg-green-50 transition"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between h-full gap-4">
        <button
          onClick={() => onRemove(item.id)}
          className="text-gray-300 hover:text-red-400 transition"
        >
          <RiDeleteBin6Line size={18} />
        </button>
        <span className="text-[15px] font-bold text-[#181725]">
          ${(parseFloat(item.price) * item.count).toFixed(2)}
        </span>
      </div>
    </div>
  );
}