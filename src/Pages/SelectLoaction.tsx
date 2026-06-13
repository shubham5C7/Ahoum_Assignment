import { useNavigate } from "react-router-dom";
import locationIcon from "../../public/location.svg";

export default function SelectLoaction() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-4">
      <div className="w-full max-w-[400px] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-[560px]">
        <div className="bg-linear-to-bl from-purple-50 via-pink-30 to-white px-5 pt-2 pb-3 flex flex-col gap-4 flex-1">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/50 transition-colors self-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex flex-col justify-center items-center ">
            <img
              src={locationIcon}
              alt="locationIcon"
              className="w-36 h-auto"
            />

            <h2 className="text-3xl font-semibold pt-3">
              {" "}
              Select Your Location
            </h2>
            <p className="text-center text-gray-500 text-sm mt-2 max-w-[260px]">
              Switch on your location to stay in tune with what's happening in
              your area
            </p>
          </div>

          <div className="mt-12 space-y-2">
            <div>
              <label className="block text-gray-600 text-sm mb-2">
                Your Zone
              </label>
              <select className="w-full border-b border-gray-300 pb-3 outline-none bg-transparent">
                <option>Banasree</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-2">
                Your Area
              </label>

              <select className="w-full border-b border-gray-300 pb-3 outline-none bg-transparent ">
                <option>Types of your area</option>
              </select>
            </div>
          </div>

          <button
          onClick={()=> navigate("/home")}
          className="w-full h-14 bg-[#53B175] text-white rounded-xl mt-2 font-medium">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
