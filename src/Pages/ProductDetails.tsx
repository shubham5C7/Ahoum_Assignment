import { useParams, useNavigate } from "react-router-dom";
import { useProductStore } from "../store/productStore";
import { IoChevronBack } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { useState } from "react";
import { useCartStore } from "../store/cartStore";
import { useWishlistStore } from "../store/wishlistStore";
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

const ProductDetails = (): React.JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState<number>(1);
  const [added, setAdded] = useState<boolean>(false);

  const { addToCart } = useCartStore();
  const products = useProductStore((state) => state.products);
  const product = products.find((item) => item.id === Number(id));
  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlistStore();

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Product Not Found
      </div>
    );
  }

  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const QuantitySelector = () => (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setQuantity((p) => Math.max(1, p - 1))}
        disabled={quantity === 1}
        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-[#181725] hover:bg-gray-100 transition disabled:opacity-30"
      >
        −
      </button>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 font-semibold">
        {quantity}
      </div>
      <button
        onClick={() => setQuantity((p) => p + 1)}
        className="w-8 h-8 rounded-full border border-[#53B175] flex items-center justify-center text-[#53B175] hover:bg-green-50 transition"
      >
        +
      </button>
    </div>
  );

  const AddToBasketBtn = () => (
    <button
      onClick={handleAddToCart}
      className={`h-[52px] w-full rounded-[19px] text-lg font-semibold text-white transition cursor-pointer active:scale-95 ${
        added ? "bg-[#43A25F]" : "bg-[#53B175] hover:opacity-90"
      }`}
    >
      {added ? "✓ Added to Basket" : "Add To Basket"}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#f8f8f8]">

      {/* ── MOBILE ── */}
      <div className="md:hidden h-screen overflow-hidden flex items-center justify-center px-4">
        <div className="relative w-full max-w-[400px] h-[680px] bg-white rounded-2xl shadow-xl overflow-y-auto scrollbar-hide">

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5">
            <button onClick={() => navigate(-1)} className="cursor-pointer">
              <IoChevronBack size={24} />
            </button>
            <RiShareForwardLine size={22} className="cursor-pointer" />
          </div>

          {/* Product Image */}
          <div className="bg-[#F2F3F2] flex justify-center items-center h-[220px] rounded-b-[30px]">
            <img src={product.image} alt={product.name} className="h-40 w-full max-w-[220px] object-contain" />
          </div>

          {/* Content */}
          <div className="px-6 py-5">
            <div className="flex items-start justify-between">
              <div className="min-w-0">
                <h1 className="text-[18px] font-bold text-[#181725] break-words">{product.name}</h1>
                <p className="mt-1 text-sm text-[#7C7C7C]">{product.quantity}</p>
              </div>
              <button onClick={() => wishlisted ? removeFromWishlist(product.id) : addToWishlist(product)}>
                <FiHeart
                  size={24}
                  className={`ml-4 shrink-0 cursor-pointer transition ${wishlisted ? "text-red-500 fill-red-500" : "text-[#181725]"}`}
                />
              </button>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <QuantitySelector />
              <h2 className="text-3xl font-bold text-[#181725]">
                ${(parseFloat(product.price) * quantity).toFixed(2)}
              </h2>
            </div>

            <div className="mt-6 border-t pt-4">
              <h3 className="font-semibold text-lg text-[#181725]">Product Detail</h3>
              <p className="mt-1 text-sm leading-6 text-[#7C7C7C]">{product.description}</p>
            </div>

            <div className="mt-1 border-t py-4 flex items-center justify-between">
              <h3 className="font-semibold text-lg text-[#181725]">Nutrition</h3>
              <span className="rounded-md bg-[#EBEBEB] px-3 py-1 text-xs text-[#7C7C7C]">100gr</span>
            </div>

            <div className="border-t py-4 flex items-center justify-between">
              <h3 className="font-semibold text-lg text-[#181725]">Review</h3>
              <div className="text-yellow-400 text-lg">★★★★★</div>
            </div>

            <AddToBasketBtn />
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
              {desktopTabs.map(({ id: tabId, label, Icon, route }) => (
                <button key={tabId} onClick={() => navigate(route)} className="flex flex-col items-center gap-0.5">
                  <Icon active={false} />
                  <span className="text-[11px] font-semibold text-[#181725]">{label}</span>
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-8 py-10 w-full">
          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#181725] mb-8 hover:opacity-70 transition"
          >
            <IoChevronBack size={20} />
            <span className="text-sm font-semibold">Back</span>
          </button>

          <div className="grid grid-cols-2 gap-12 items-start">

            {/* Left — Image */}
            <div className="bg-[#F2F3F2] rounded-[28px] flex items-center justify-center h-[420px]">
              <img src={product.image} alt={product.name} className="w-[280px] h-[280px] object-contain" />
            </div>

            {/* Right — Details */}
            <div className="flex flex-col">
              {/* Name + Wishlist */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-[28px] font-bold text-[#181725] leading-tight">{product.name}</h1>
                  <p className="mt-1 text-sm text-[#7C7C7C]">{product.quantity}</p>
                </div>
                <button
                  onClick={() => wishlisted ? removeFromWishlist(product.id) : addToWishlist(product)}
                  className="mt-1 shrink-0"
                >
                  <FiHeart
                    size={26}
                    className={`cursor-pointer transition ${wishlisted ? "text-red-500 fill-red-500" : "text-[#181725]"}`}
                  />
                </button>
              </div>

              {/* Quantity + Price */}
              <div className="mt-8 flex items-center justify-between">
                <QuantitySelector />
                <h2 className="text-4xl font-bold text-[#181725]">
                  ${(parseFloat(product.price) * quantity).toFixed(2)}
                </h2>
              </div>

              {/* Divider sections */}
              <div className="mt-8 border-t pt-5">
                <h3 className="font-semibold text-lg text-[#181725]">Product Detail</h3>
                <p className="mt-2 text-sm leading-7 text-[#7C7C7C]">{product.description}</p>
              </div>

              <div className="mt-2 border-t py-4 flex items-center justify-between">
                <h3 className="font-semibold text-lg text-[#181725]">Nutrition</h3>
                <span className="rounded-md bg-[#EBEBEB] px-3 py-1 text-xs text-[#7C7C7C]">100gr</span>
              </div>

              <div className="border-t py-4 flex items-center justify-between">
                <h3 className="font-semibold text-lg text-[#181725]">Review</h3>
                <div className="text-yellow-400 text-xl">★★★★★</div>
              </div>

              <div className="mt-2">
                <AddToBasketBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;