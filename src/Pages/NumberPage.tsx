import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const NumberPage = () => {
  const phoneNumber = useAuthStore((state) => state.phoneNumber);
  const setPhoneNumber = useAuthStore((state) => state.setPhoneNumber);
  const error = useAuthStore((state) => state.error);
  const setError = useAuthStore((state) => state.setError);
  const navigate = useNavigate();

  const handleKeyPress = (value: string) => {
    setError("");
    if (value === "⌫") { setPhoneNumber(phoneNumber.slice(0, -1)); return; }
    if (value === "+*#") return;
    if (phoneNumber.length >= 10) { setError("Mobile number cannot exceed 10 digits"); return; }
    setPhoneNumber(phoneNumber + value);
  };

  const handleContinue = () => {
    if (phoneNumber.length < 10) { setError("Mobile number must be exactly 10 digits"); return; }
    setError("");
    navigate("/verification");
  };

  const keys = [
    [{ main: "1", sub: "" }, { main: "2", sub: "ABC" }, { main: "3", sub: "DEF" }],
    [{ main: "4", sub: "GHI" }, { main: "5", sub: "JKL" }, { main: "6", sub: "MNO" }],
    [{ main: "7", sub: "PQRS" }, { main: "8", sub: "TUV" }, { main: "9", sub: "WXYZ" }],
    [{ main: "+*#", sub: "" }, { main: "0", sub: "" }, { main: "⌫", sub: "" }],
  ];

  const isReady = phoneNumber.length >= 7;

  const KeypadUI = () => (
    <div className="bg-gradient-to-t from-[#c0c0c4] to-[#d9d9df] px-2 pt-2 pb-8">
      {keys.map((row, rowIdx) => (
        <div key={rowIdx} className="grid grid-cols-3 gap-1 mb-3">
          {row.map((key) => (
            <button
              key={key.main}
              onClick={() => handleKeyPress(key.main)}
              className={
                key.main === "+*#" || key.main === "⌫"
                  ? "h-8 flex items-center justify-center bg-transparent"
                  : "h-8 rounded-sm bg-white shadow-sm flex flex-col justify-center items-center"
              }
            >
              {key.main === "⌫" ? (
                <span className="text-3xl">⌫</span>
              ) : (
                <>
                  <span className="text-[17px] font-bold text-black leading-none">{key.main}</span>
                  {key.sub && <span className="text-[7px] font-bold tracking-[4px] text-black mt-1">{key.sub}</span>}
                </>
              )}
            </button>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-4">

      {/* MOBILE */}
      <div className="md:hidden w-full max-w-[400px] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-[560px]">
        <div className="bg-gradient-to-bl from-purple-50 via-pink-30 to-white px-5 pt-5 pb-3 flex flex-col gap-4 flex-1">
          <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/50 self-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-gray-900">Enter your mobile number</h1>
          <div>
            <label className="block text-xs text-gray-400 mb-2">Mobile Number</label>
            <div className="border-b-2 border-green-500 pb-2 flex items-center gap-2">
              <span className="text-base">🇮🇳</span>
              <span className="font-semibold text-sm text-gray-900">+91</span>
              <span className="font-semibold text-sm text-gray-900 ml-1 tracking-wide">{phoneNumber}</span>
              <span className="w-0.5 h-4 bg-gray-800 animate-pulse" />
            </div>
            {error && <p className="mt-2 text-xs text-red-500 font-medium">{error}</p>}
          </div>
        </div>
        <div className="relative flex flex-col mt-auto">
          <div className="absolute right-5 top-[-54px] z-10">
            <button onClick={handleContinue} disabled={!isReady}
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors ${isReady ? "bg-green-600" : "bg-green-200 cursor-not-allowed"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <KeypadUI />
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex w-full max-w-7xl min-h-screen">

        {/* Left - Info Side */}
        <div className="w-1/2 bg-[#53B175] flex items-center justify-center px-16">
          <div className="text-center">
            <h1 className="text-[48px] font-bold text-white leading-tight">
              One Step Away!
            </h1>
            <p className="text-white text-[18px] mt-4 opacity-90">
              Enter your mobile number to verify your identity and start shopping fresh groceries.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white opacity-60" />
              <div className="w-3 h-3 rounded-full bg-white" />
              <div className="w-3 h-3 rounded-full bg-white opacity-60" />
            </div>
          </div>
        </div>

        {/* Right - Form Side */}
        <div className="w-1/2 bg-white flex items-center justify-center px-16">
          <div className="w-full max-w-[460px]">

            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#7C7C7C] mb-8 hover:text-[#181725] transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>

            <h1 className="text-[32px] font-bold text-[#181725] mb-2">Enter your mobile number</h1>
            <p className="text-[#7C7C7C] text-[14px] mb-8">We'll send you a verification code</p>

            {/* Phone Input */}
            <label className="block text-xs text-gray-400 mb-2">Mobile Number</label>
            <div className="border-2 border-[#53B175] rounded-[15px] px-4 h-[60px] flex items-center gap-3 mb-2">
              <span>🇮🇳</span>
              <span className="font-semibold text-[#181725]">+91</span>
              <span className="font-semibold text-[#181725] tracking-widest">{phoneNumber || "––––––––––"}</span>
              <span className="w-0.5 h-5 bg-gray-800 animate-pulse ml-1" />
            </div>
            {error && <p className="text-xs text-red-500 font-medium mb-4">{error}</p>}

            {/* Keypad */}
            <div className="mt-6 bg-[#f2f3f2] rounded-[20px] p-4">
              {keys.map((row, rowIdx) => (
                <div key={rowIdx} className="grid grid-cols-3 gap-3 mb-3">
                  {row.map((key) => (
                    <button
                      key={key.main}
                      onClick={() => handleKeyPress(key.main)}
                      className={
                        key.main === "+*#" || key.main === "⌫"
                          ? "h-14 flex items-center justify-center text-[#181725] text-2xl"
                          : "h-14 rounded-[12px] bg-white shadow flex flex-col justify-center items-center hover:bg-[#53B175] hover:text-white transition group"
                      }
                    >
                      {key.main === "⌫" ? (
                        <span className="text-2xl">⌫</span>
                      ) : (
                        <>
                          <span className="text-[20px] font-bold leading-none">{key.main}</span>
                          {key.sub && <span className="text-[8px] font-bold tracking-[3px] mt-1 opacity-60">{key.sub}</span>}
                        </>
                      )}
                    </button>
                  ))}
                </div>
              ))}
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              disabled={!isReady}
              className={`mt-6 h-[60px] w-full rounded-[19px] text-white font-semibold transition ${isReady ? "bg-[#53B175] hover:opacity-90" : "bg-[#53B175]/40 cursor-not-allowed"}`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default NumberPage;