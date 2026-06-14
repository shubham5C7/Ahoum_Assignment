import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import carrot from "../../assets/carrot.png";
import {
  ShopIcon,
  ExploreIcon,
  CartIcon,
  FavouriteIcon,
  AccountIcon,
} from "../NavIcons";

type Tab = "shop" | "explore" | "cart" | "favourite" | "account";

const tabs: {
  id: Tab;
  label: string;
  Icon: React.FC<{ active: boolean }>;
  route: string;
}[] = [
  { id: "shop",      label: "Shop",      Icon: ShopIcon,      route: "/home" },
  { id: "explore",   label: "Explore",   Icon: ExploreIcon,   route: "/explore" },
  { id: "cart",      label: "Cart",      Icon: CartIcon,      route: "/cart" },
  { id: "favourite", label: "Favourite", Icon: FavouriteIcon, route: "/favourite" },
  { id: "account",   label: "Account",   Icon: AccountIcon,   route: "/" },
];

interface DesktopTopNavProps {
  active: Tab;
}

export default function DesktopTopNav({ active }: DesktopTopNavProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-20 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-8 h-[70px] flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer shrink-0"
          onClick={() => navigate("/home")}
        >
          <img src={carrot} alt="logo" className="w-8 h-8 object-contain" />
          <span className="text-[20px] font-bold text-[#53B175]">Nectar</span>
        </div>

        <div className="flex-1 mx-10 max-w-[500px] h-[44px] bg-[#F2F3F2] rounded-[15px] flex items-center px-4 gap-3">
          <AiOutlineSearch size={18} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Search Store"
            className="flex-1 bg-transparent outline-none text-sm text-[#181725] placeholder:text-gray-400"
          />
        </div>

        <nav className="flex items-center gap-6 shrink-0">
          {tabs.map(({ id, label, Icon, route }) => (
            <button
              key={id}
              onClick={() => navigate(route)}
              className="flex flex-col items-center gap-0.5"
            >
              <Icon active={active === id} />
              <span className={`text-[11px] font-semibold ${active === id ? "text-[#53B175]" : "text-[#181725]"}`}>
                {label}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}