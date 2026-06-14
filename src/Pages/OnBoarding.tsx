import React from "react";
import welcomeBg from "../assets/welcome-bg.jpg";
import { useNavigate } from "react-router-dom";
import CarrotLogo from "../Components/logos/CarrotLogo";

const OnBoarding = (): React.JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <img
        src={welcomeBg}
        alt="Welcome"
        className="absolute inset-0 h-full w-full object-cover object-[center_15%]"
      />

      <div className="relative z-10 flex min-h-screen items-end justify-center">
        <div className="w-full max-w-md px-6 pb-10 md:pb-20 flex flex-col items-center text-center text-white">
          <div className="mb-8 flex justify-center">
            <CarrotLogo />
          </div>

          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            Welcome
            <br />
            to our store
          </h1>

          <p className="mt-3 text-sm text-gray-200 md:text-base">
            Get your groceries in as fast as one hour
          </p>

          <button
            onClick={() => navigate("/signin")}
            className="mt-8 w-full rounded-2xl bg-[#53B175] py-4 text-lg font-semibold text-white transition hover:bg-[#429867] cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default OnBoarding;
