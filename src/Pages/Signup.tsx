import React, { useState } from "react";
import { FaCheck, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import logo from "../assets/carrot.png"

const Signup = (): React.JSX.Element => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    console.log({
      username,
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-4">
      <div className="w-full max-w-105 bg-white rounded-2xl p-8 shadow-sm">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 object-contain"
          />
        </div>

        {/* Heading */}
        <div>
          <h1 className="text-[32px] font-semibold text-gray-900">Sign Up</h1>

          <p className="text-gray-400 text-sm mt-1">
            Enter your credentials to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-7">
          <div>
            <label className="block text-sm text-gray-500 mb-3">
              Username
            </label>

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Afsar Hossen Shuvo"
              className="w-full border-b border-gray-200 pb-3 outline-none bg-transparent"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-3">Email</label>

            <div className="flex items-center border-b border-gray-200 pb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="imshuvo97@gmail.com"
                className="flex-1 outline-none bg-transparent"
              />

              {email && <FaCheck className="text-[#57B978] text-sm" />}
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-3">
              Password
            </label>

            <div className="flex items-center border-b border-gray-200 pb-3">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="flex-1 outline-none bg-transparent"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <FaRegEye className="text-gray-400" />
                ) : (
                  <FaRegEyeSlash className="text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <p className="text-xs leading-5 text-gray-400">
            By continuing you agree to our{" "}
            <span className="text-[#57B978] cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-[#57B978] cursor-pointer">
              Privacy Policy
            </span>
            .
          </p>

          <button
            type="submit"
            className="w-full h-14 bg-[#57B978] hover:bg-[#4ca76b] rounded-xl text-white font-medium transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-gray-700">
          Already have an account?{" "}
          <span className="text-[#57B978] font-medium cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;