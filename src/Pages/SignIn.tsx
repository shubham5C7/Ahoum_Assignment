import { useNavigate } from "react-router-dom";
import groceryImage from "../assets/grocery-top.jpg";

const SignIn = (): React.JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FCFCFC] flex items-center justify-center">

      {/* MOBILE */}
      <div className="w-full max-w-[375px] bg-white md:hidden rounded-[32px] shadow-xl overflow-hidden">
        <div className="relative h-[350px] overflow-hidden">
          <img src={groceryImage} alt="Groceries" className="absolute top-[-45px] left-[60px] w-[400px] max-w-none"/>
        </div>
        <div className="px-8 pb-8">
          <h1 className="text-[28px] font-semibold leading-[36px] text-[#181725]">
            Get your groceries<br />with nectar
          </h1>
          <div className="mt-8 flex items-center gap-3 border-b border-[#E2E2E2] pb-4 cursor-pointer">
            <span className="text-lg">🇮🇳</span>
            <span className="text-[18px] font-medium text-[#181725]">+91</span>
          </div>
          <p className="mt-10 text-center text-[14px] text-[#828282]">
            Or connect with social media
          </p>
          <button
            type="button"
            onClick={() => navigate("/number")}
            className="mt-8 h-[60px] w-full rounded-[19px] bg-[#5383EC] text-white font-semibold transition hover:opacity-90"
          >
            Continue with Google
          </button>
          <button
            onClick={() => navigate("/number")}
            type="button"
            className="mt-4 h-[60px] w-full rounded-[19px] bg-[#4A66AC] text-white font-semibold transition hover:opacity-90"
          >
            Continue with Facebook
          </button>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex w-full max-w-7xl min-h-screen">

        {/* Left - Image Side */}
        <div className="w-1/2 bg-[#53B175] relative overflow-hidden flex items-center justify-center">
          <img
            src={groceryImage}
            alt="Groceries"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="relative z-10 text-center px-12">
            <h1 className="text-[48px] font-bold text-white leading-tight">
              Fresh Groceries<br />Delivered Fast
            </h1>
            <p className="text-white text-[18px] mt-4 opacity-90">
              Order fresh fruits, vegetables & more — delivered to your door.
            </p>
          </div>
        </div>

        {/* Right - Form Side */}
        <div className="w-1/2 bg-white flex items-center justify-center px-16">
          <div className="w-full max-w-[460px]">

            {/* Logo */}
            <div className="mb-10">
              <h2 className="text-[32px] font-bold text-[#53B175]">  Nectar</h2>
              <p className="text-[#7C7C7C] mt-1">Your daily fresh grocery app</p>
            </div>

            <h1 className="text-[28px] font-semibold text-[#181725] mb-2">
              Get your groceries with nectar
            </h1>
            <p className="text-[#828282] text-[14px] mb-8">
              Sign in to continue shopping
            </p>

            {/* Phone Input */}
            <div className="flex items-center gap-3 border border-[#E2E2E2] rounded-[15px] px-4 h-[60px] mb-6">
              <span className="text-lg">🇮🇳</span>
              <span className="text-[18px] font-medium text-[#181725]">+91</span>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="flex-1 outline-none text-[16px] text-[#181725] placeholder:text-[#C0C0C0]"
              />
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-[1px] bg-[#E2E2E2]" />
              <p className="text-[#828282] text-[13px]">Or connect with social media</p>
              <div className="flex-1 h-[1px] bg-[#E2E2E2]" />
            </div>

            <button
              type="button"
              onClick={() => navigate("/number")}
              className="h-[60px] w-full rounded-[19px] bg-[#5383EC] text-white font-semibold transition hover:opacity-90 mb-4"
            >
              Continue with Google
            </button>
            <button
              onClick={() => navigate("/number")}
              type="button"
              className="h-[60px] w-full rounded-[19px] bg-[#4A66AC] text-white font-semibold transition hover:opacity-90"
            >
              Continue with Facebook
            </button>

            <p className="text-center text-[13px] text-[#828282] mt-6">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-[#53B175] font-semibold cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SignIn;