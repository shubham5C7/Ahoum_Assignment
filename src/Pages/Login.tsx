import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import logo from "../assets/carrot.png";
import { useNavigate } from "react-router-dom";

const Login = (): React.JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-4">

      {/* MOBILE */}
      <div className="md:hidden w-full max-w-[420px] bg-white rounded-2xl p-8 shadow-sm">
        <div className="flex justify-center mb-10">
          <img src={logo} alt="logo" className="w-15 h-15 object-contain" />
        </div>
        <div>
          <h1 className="text-[32px] font-semibold text-gray-900">Login</h1>
          <p className="text-gray-400 text-sm mt-1">Enter your email and password</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-10 space-y-8">
          <div>
            <label className="block text-sm text-gray-500 mb-3">Email</label>
            <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
              <MdEmail className="text-gray-400 text-xl" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="imshuvo97@gmail.com"
                className="flex-1 outline-none text-gray-700 bg-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-3">Password</label>
            <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
              <RiLockPasswordLine className="text-gray-400 text-xl" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="flex-1 outline-none bg-transparent"
              />
              <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <FaRegEye className="text-gray-600" /> : <FaRegEyeSlash className="text-gray-600" />}
              </button>
            </div>
            <div className="flex justify-end mt-3">
              <button type="button" className="text-sm text-gray-600 hover:text-black">Forgot Password?</button>
            </div>
          </div>
          <button type="submit" className="w-full h-14 bg-[#53B175] hover:bg-[#4ca76b] rounded-xl text-white font-medium transition">
            Log In
          </button>
        </form>
        <p className="text-center mt-8 text-sm text-gray-700">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")} className="text-[#53B175] font-medium cursor-pointer">Signup</span>
        </p>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex w-full max-w-7xl min-h-screen">

        {/* Left - Image Side */}
        <div className="w-1/2 bg-[#53B175] relative overflow-hidden flex items-center justify-center">
          {/* Decorative circles */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10 text-center px-12">
            <img src={logo} alt="logo" className="w-24 h-24 object-contain mx-auto mb-6" />
            <h1 className="text-[48px] font-bold text-white leading-tight">
              Welcome Back!
            </h1>
            <p className="text-white text-[18px] mt-4 opacity-90">
              Log in to order fresh groceries delivered straight to your door.
            </p>

            {/* Feature pills */}
            <div className="mt-10 flex flex-col gap-3 items-center">
              {["🥦 Fresh produce daily", "🚚 Fast delivery", "💳 Secure payments"].map((f) => (
                <div key={f} className="bg-white/20 text-white px-6 py-2 rounded-full text-sm font-medium">
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Form Side */}
        <div className="w-1/2 bg-white flex items-center justify-center px-16">
          <div className="w-full max-w-[460px]">

            <div className="flex items-center gap-3 mb-10">
              <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
              <span className="text-[22px] font-bold text-[#53B175]">Nectar</span>
            </div>

            <h1 className="text-[32px] font-bold text-[#181725] mb-2">Login</h1>
            <p className="text-[#7C7C7C] text-[14px] mb-10">Enter your email and password</p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Email */}
              <div>
                <label className="block text-sm text-[#7C7C7C] mb-2">Email</label>
                <div className="flex items-center gap-3 border-2 border-[#E2E2E2] rounded-[15px] px-4 h-[60px] focus-within:border-[#53B175] transition">
                  <MdEmail className="text-[#53B175] text-xl" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="imshuvo97@gmail.com"
                    className="flex-1 outline-none text-[#181725] bg-transparent"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm text-[#7C7C7C] mb-2">Password</label>
                <div className="flex items-center gap-3 border-2 border-[#E2E2E2] rounded-[15px] px-4 h-[60px] focus-within:border-[#53B175] transition">
                  <RiLockPasswordLine className="text-[#53B175] text-xl" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="flex-1 outline-none bg-transparent"
                  />
                  <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <FaRegEye className="text-gray-400" /> : <FaRegEyeSlash className="text-gray-400" />}
                  </button>
                </div>
                <div className="flex justify-end mt-2">
                  <button type="button" className="text-sm text-[#7C7C7C] hover:text-[#181725]">Forgot Password?</button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-[60px] bg-[#53B175] hover:opacity-90 rounded-[19px] text-white font-semibold transition"
              >
                Log In
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-[1px] bg-[#E2E2E2]" />
              <span className="text-[#7C7C7C] text-sm">or continue with</span>
              <div className="flex-1 h-[1px] bg-[#E2E2E2]" />
            </div>

            {/* Social */}
            <div className="flex gap-4">
              <button className="flex-1 h-[52px] border-2 border-[#E2E2E2] rounded-[15px] flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                <span className="text-xl">🇬</span>
                <span className="text-sm font-medium text-[#181725]">Google</span>
              </button>
              <button className="flex-1 h-[52px] border-2 border-[#E2E2E2] rounded-[15px] flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                <span className="text-xl">📘</span>
                <span className="text-sm font-medium text-[#181725]">Facebook</span>
              </button>
            </div>

            <p className="text-center mt-8 text-sm text-[#7C7C7C]">
              Don't have an account?{" "}
              <span onClick={() => navigate("/signup")} className="text-[#53B175] font-semibold cursor-pointer">
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;