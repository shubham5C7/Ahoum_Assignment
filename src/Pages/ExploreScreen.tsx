import BottomNav from "../Components/BottomNav";
import Search from "../Components/Search";
import { exploreCategories } from "../data/products";

export default function ExploreScreen() {
  return (
    <div className="h-screen overflow-hidden bg-[#f8f8f8] flex items-center justify-center px-4">
      <div className="relative w-full max-w-[400px] h-[680px] bg-white rounded-2xl shadow-xl">
        {/* Scrollable content */}
        <div className="h-full overflow-y-auto scrollbar-hide pb-[92px]">
          <div className="px-4 pt-10">
            <h2 className="text-[#181725] text-center text-2xl font-bold">
              Find Products
            </h2>
          </div>

          <div className="px-4 mt-4">
            <div className="h-[50px] bg-[#F2F3F2] rounded-[15px] flex items-center px-4">
              <Search />
            </div>
          </div>
            <div className="px-4 mt-6 grid grid-cols-2 gap-4">
            {exploreCategories.map((cat) => (
              <div
                key={cat.id}
                className={`${cat.bg} border ${cat.border} rounded-[18px] h-[130px] flex flex-col items-center justify-center gap-2 p-3`}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-[70px] h-[70px] object-contain"
                />
                <p className="text-[13px] font-semibold text-[#181725] text-center leading-tight">
                  {cat.name}
                </p>
              </div>
            ))}
          </div>

        </div>
       

        {/* Bottom Nav pinned to bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <BottomNav active="explore" />
        </div>
      </div>
    </div>
  );
}
