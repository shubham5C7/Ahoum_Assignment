import { useNavigate } from "react-router-dom";
import { ShopIcon, ExploreIcon, CartIcon, FavouriteIcon, AccountIcon } from "./NavIcons";

type Tab = "shop" | "explore" | "cart" | "favourite" | "account";

interface BottomNavProps {
  active?: Tab;
}

const tabs: { id: Tab; label: string; Icon: React.FC<{ active: boolean }>; route: string }[] = [
  { id: "shop",      label: "Shop",      Icon: ShopIcon,      route: "/home" },
  { id: "explore",   label: "Explore",   Icon: ExploreIcon,   route: "/explore" },
  { id: "cart",      label: "Cart",      Icon: CartIcon,      route: "/cart" },
  { id: "favourite", label: "Favourite", Icon: FavouriteIcon, route: "/favourite" },
  { id: "account",   label: "Account",   Icon: AccountIcon,   route: "/account" },
];

export default function BottomNav({ active = "shop"}: BottomNavProps) {
      const navigate = useNavigate();

  return (
    <div className="sticky bottom-0 left-0 right-0 h-[92px] bg-white flex items-center justify-around px-2 z-10 shadow-[2px_-5px_15px_0px_#555E5817]">
      {tabs.map(({ id, label, Icon, route }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => navigate(route)}
            className="flex flex-col items-center gap-1 w-[72px]"
          >
            <Icon active={isActive} />
            <span className={`text-[11px] font-semibold ${isActive ? "text-[#53B175]" : "text-[#181725]"}`}>
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}