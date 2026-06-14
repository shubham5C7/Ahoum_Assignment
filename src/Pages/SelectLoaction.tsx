import { useNavigate } from "react-router-dom";
import locationIcon from "../assets/location.svg";

export default function SelectLoaction() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-4">

      {/* MOBILE */}
      <div className="md:hidden w-full max-w-[400px] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-[560px]">
        <div className="bg-gradient-to-bl from-purple-50 via-pink-30 to-white px-5 pt-2 pb-3 flex flex-col gap-4 flex-1">
          <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/50 self-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex flex-col justify-center items-center">
            <img src={locationIcon} alt="locationIcon" className="w-36 h-auto" />
            <h2 className="text-3xl font-semibold pt-3">Select Your Location</h2>
            <p className="text-center text-gray-500 text-sm mt-2 max-w-[260px]">
              Switch on your location to stay in tune with what's happening in your area
            </p>
          </div>

          <div className="mt-12 space-y-2">
            <div>
              <label className="block text-gray-600 text-sm mb-2">Your Zone</label>
              <select className="w-full border-b border-gray-300 pb-3 outline-none bg-transparent">
                <option>Banasree</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2">Your Area</label>
              <select className="w-full border-b border-gray-300 pb-3 outline-none bg-transparent">
                <option>Types of your area</option>
              </select>
            </div>
          </div>

          <button onClick={() => navigate("/login")} className="w-full h-14 bg-[#53B175] text-white rounded-xl mt-2 font-medium">
            Submit
          </button>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex w-full max-w-7xl min-h-screen">

        {/* Left - Map visual */}
        <div className="w-1/2 bg-[#53B175] flex items-center justify-center px-16 relative overflow-hidden">
          {/* Background circles for map feel */}
          <div className="absolute w-[500px] h-[500px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute w-[350px] h-[350px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute w-[200px] h-[200px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10 text-center">
            <img src={locationIcon} alt="location" className="w-32 h-32 mx-auto mb-6 brightness-0 invert" />
            <h1 className="text-[48px] font-bold text-white leading-tight">Find Stores Near You</h1>
            <p className="text-white text-[18px] mt-4 opacity-90">
              Select your location to discover fresh groceries available in your area.
            </p>
          </div>
        </div>

        {/* Right - Form */}
        <div className="w-1/2 bg-white flex items-center justify-center px-16">
          <div className="w-full max-w-[460px]">

            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#7C7C7C] mb-8 hover:text-[#181725] transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>

            <h1 className="text-[32px] font-bold text-[#181725] mb-2">Select Your Location</h1>
            <p className="text-[#7C7C7C] text-[14px] mb-10">
              Switch on your location to stay in tune with what's happening in your area
            </p>

            {/* Zone Select */}
            <div className="mb-6">
              <label className="block text-[#7C7C7C] text-sm mb-2">Your Zone</label>
              <select className="w-full border-2 border-[#E2E2E2] rounded-[15px] px-4 h-[60px] outline-none bg-transparent text-[#181725] focus:border-[#53B175] transition">
                <option>Banasree</option>
                <option>Gulshan</option>
                <option>Dhanmondi</option>
                <option>Uttara</option>
                <option>Mirpur</option>
              </select>
            </div>

            {/* Area Select */}
            <div className="mb-10">
              <label className="block text-[#7C7C7C] text-sm mb-2">Your Area</label>
              <select className="w-full border-2 border-[#E2E2E2] rounded-[15px] px-4 h-[60px] outline-none bg-transparent text-[#181725] focus:border-[#53B175] transition">
                <option>Types of your area</option>
                <option>Block A</option>
                <option>Block B</option>
                <option>Block C</option>
                <option>Block D</option>
              </select>
            </div>

            {/* Current Location Button */}
            <button className="w-full h-[60px] border-2 border-[#53B175] text-[#53B175] rounded-[19px] font-semibold mb-4 flex items-center justify-center gap-2 hover:bg-green-50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
              </svg>
              Use Current Location
            </button>

            <button
              onClick={() => navigate("/login")}
              className="w-full h-[60px] bg-[#53B175] text-white rounded-[19px] font-semibold hover:opacity-90 transition"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}