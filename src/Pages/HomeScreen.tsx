import carrot from "../assets/carrot.png";
import Search from "../Components/Search";
import leaves from "../assets/leaves.png";
import vegetables from "../assets/vegitables.png";
import lettuce from "../assets/leafvegies.png";
import vegies from "../assets/Vegies.png";
import BottomNav from "../Components/BottomNav";
import { exclusiveOffers, bestSelling, groceryCategories,groceryProducts } from "../data/products";

export default function HomeScreen() {
  return (
    <div className="h-screen overflow-hidden bg-[#f8f8f8] flex items-center justify-center px-4">
      <div className="relative w-full max-w-[400px] h-[680px] bg-white rounded-2xl shadow-xl overflow-y-auto scrollbar-hide ">
        <div className="flex flex-col items-center pt-10">
          {/* carrot*/}
          <img src={carrot} alt="carrot" className="w-8 h-8 object-contain" />
          {/*Location*/}
          <div className="flex items-center mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#393636"
              className="w-[36px] h-[20px]"
            >
              <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
            </svg>
            <p className="w-[140px] h-[22px] text-[18px] font-semibold text-[#4C4F4D] text-center">
              Dhaka, Banassre
            </p>
          </div>
        </div>
        {/* Search bar*/}
        <div className="px-4 mt-6 ">
          <div className="h-[52px] bg-[#F2F3F2] rounded-[15px] flex items-center px-4">
            <Search />
          </div>
          <div className="relative h-[102px] mt-4 overflow-hidden rounded-[18px] bg-linear-to-r from-[#F8E8E8] via-[#F8F7EE] to-[#EEF8E8] shadow-lg">
            {/* Images */}
            <img
              src={vegies}
              alt="vegies"
              className="absolute left-2 bottom-0 h-[90px] object-contain"
            />

            <img
              src={vegetables}
              alt="vegetables"
              className="absolute right-0 top-0 h-[38px] object-contain"
            />

            <img
              src={leaves}
              alt="leaves"
              className="absolute left-0 top-1 h-10 object-contain"
            />

            <img
              src={lettuce}
              alt="lettuce"
              className="absolute right-0 bottom-0 h-10 object-contain"
            />

            {/* Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pl-18">
              <h2 className="text-[22px] font-bold text-[#181725] leading-none">
                Fresh Vegetables
              </h2>

              <p className="mt-2 text-[16px] font-semibold text-[#53B175]">
                Get Up To 40% OFF
              </p>
            </div>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <div className="w-5 h-1.5 rounded-full bg-[#53B175]" />
              <div className="w-2 h-2 rounded-full bg-gray-300" />
              <div className="w-2 h-2 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>
        {/* Exclusive Offer Section */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3 px-4">
            <h2 className="text-[20px] font-bold text-[#181725] ">
              {" "}
              Exclusive Offer
            </h2>
            <span className="text-[14px] font-semibold text-[#53B175]">
              See all
            </span>
          </div>
          {/* Card Rows*/}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4">
            {exclusiveOffers.map((item) => (
              <div
                key={item.id}
                className="min-w-[170px] bg-white border border-[#E2E2E2] rounded-[18px] p-3 flex flex-col items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[80px] h-[150px] object-contain"
                />
                <p className="text-[12px] text-[#7C7C7C] mt-2 self-start">
                  {item.quantity}
                </p>
                <p className="text-[14px] font-bold text-[#181725] self-start">
                  {item.name}
                </p>
                <div className="flex items-center justify-between w-full mt-2">
                  <span className="text-[14px] font-bold text-[#181725]">
                    ${item.price}
                  </span>
                  <button className="w-[28px] h-[28px] bg-[#53B175] rounded-full flex items-center justify-center text-white text-[20px] leading-none">
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best Selling Section */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3 px-4">
            <h2 className="text-[20px] font-bold text-[#181725] ">
              {" "}
              Best Selling
            </h2>
            <span className="text-[14px] font-semibold text-[#53B175]">
              See all
            </span>
          </div>
          {/* Card Rows*/}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4">
            {bestSelling.map((item) => (
              <div
                key={item.id}
                className="min-w-[170px] bg-white border border-[#E2E2E2] rounded-[18px] p-3 flex flex-col items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[80px] h-[150px] object-contain"
                />
                <p className="text-[12px] text-[#7C7C7C] mt-2 self-start">
                  {item.quantity}
                </p>
                <p className="text-[14px] font-bold text-[#181725] self-start">
                  {item.name}
                </p>
                <div className="flex items-center justify-between w-full mt-2">
                  <span className="text-[14px] font-bold text-[#181725]">
                    ${item.price}
                  </span>
                  <button className="w-[28px] h-[28px] bg-[#53B175] rounded-full flex items-center justify-center text-white text-[20px] leading-none">
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
          {/* Groceries Section */}
        <div className="mt-6">
          <div className="flex items-center justify-between px-4 mb-3">
            <h2 className="text-[20px] font-bold text-[#181725]">Groceries</h2>
            <span className="text-[14px] font-semibold text-[#53B175]">See all</span>
          </div>
             {/* Category Pills */}
             <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 mb-3">
              {groceryCategories.map((item)=>(
                <div 
                key={item.id}
               className={`min-w-[220px] h-[100px] rounded-[18px] flex items-center justify-center gap-3 px-4 ${item.bg}`}>
                    <img 
                     src={item.image} 
                      alt={item.name}
                      className="w-[70px] h-[150px] object-contain" 
                      />
                        <span className="text-[16px] font-semibold text-[#181725]">{item.name}</span>
                </div>
              ))}

             </div>
               {/* Product Cards */}
               <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4">
                {groceryProducts.map((item)=>(
                  <div 
                  key={item.id}
                  className="min-w-[160px] bg-white border border-[#E2E2E2] rounded-[18px] p-4 flex flex-col items-center">
                      <div className="w-full h-[110px] flex items-center justify-center">
                        <img 
                        src={item.image}
                        alt={item.name} 
                        className="w-[100px] h-[100px] object-contain" />
                        </div>
                         <p className="text-[12px] text-[#7C7C7C] mt-2 self-start">{item.quantity}</p>
                      <p className="text-[15px] font-bold text-[#181725] self-start">{item.name}</p>
                      <div className="flex items-center justify-between w-full mt-3">
                        <span className="text-[16px] font-bold text-[#181725]">${item.price}</span>
                        <button className="w-[44px] h-[44px] bg-[#53B175] rounded-full flex items-center justify-center text-white text-[24px] leading-none">+</button>
                      </div>
                  </div>
                ))}
               </div>
        </div>

        <BottomNav active="shop" />
      </div>
    </div>
  );
}
