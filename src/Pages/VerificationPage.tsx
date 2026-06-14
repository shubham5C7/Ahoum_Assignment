import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function VerificationPage() {
  const otp = useAuthStore((state) => state.otp);
  const setOtp = useAuthStore((state) => state.setOtp);
  const error = useAuthStore((state) => state.error);
  const setError = useAuthStore((state) => state.setError);
  const navigate = useNavigate();

  const OTP_LENGTH = 4;

const handleKeyPress = (value: string) => {
  setError("");
  
  // Get fresh otp value directly from store
  const currentOtp = useAuthStore.getState().otp;

  if (value === "⌫") { 
    setOtp(currentOtp.slice(0, -1)); 
    return; 
  }
  if (value === "+*#") return;
  if (currentOtp.length >= OTP_LENGTH) { 
    setError("Code cannot exceed 4 digits"); 
    return; 
  }
  setOtp(currentOtp + value);
};

const handleContinue = () => {
  const currentOtp = useAuthStore.getState().otp; // ← fresh value
  
  if (currentOtp.length !== OTP_LENGTH) { 
    setError(`Code must be exactly ${OTP_LENGTH} digits`); 
    return; 
  }
  if (!/^\d{4}$/.test(currentOtp)) { 
    setError("OTP must contain only numbers"); 
    return; 
  }
  setError("");
  navigate("/selectlocation");
};

  const keys = [
    [{ main: "1", sub: "" }, { main: "2", sub: "ABC" }, { main: "3", sub: "DEF" }],
    [{ main: "4", sub: "GHI" }, { main: "5", sub: "JKL" }, { main: "6", sub: "MNO" }],
    [{ main: "7", sub: "PQRS" }, { main: "8", sub: "TUV" }, { main: "9", sub: "WXYZ" }],
    [{ main: "+*#", sub: "" }, { main: "0", sub: "" }, { main: "⌫", sub: "" }],
  ];

  const isReady = otp.length === OTP_LENGTH;

  const KeypadUI = ({ large = false }: { large?: boolean }) => (
    <div className={`${large ? "bg-[#f2f3f2] rounded-[20px] p-4" : "bg-gradient-to-t from-[#c0c0c4] to-[#d9d9df] px-2 pt-2 pb-8"}`}>
      {keys.map((row, rowIdx) => (
        <div key={rowIdx} className={`grid grid-cols-3 ${large ? "gap-3 mb-3" : "gap-1 mb-3"}`}>
          {row.map((key) => (
            <button
              key={key.main}
              onClick={() => handleKeyPress(key.main)}
              className={
                key.main === "+*#" || key.main === "⌫"
                  ? `flex items-center justify-center bg-transparent ${large ? "h-14 text-2xl" : "h-8"}`
                  : `${large ? "h-14 rounded-[12px] bg-white shadow hover:bg-[#53B175] hover:text-white transition" : "h-8 rounded-sm bg-white shadow-sm"} flex flex-col justify-center items-center`
              }
            >
              {key.main === "⌫" ? (
                <span className={large ? "text-2xl" : "text-3xl"}>⌫</span>
              ) : (
                <>
                  <span className={`${large ? "text-[20px]" : "text-[17px]"} font-bold leading-none`}>{key.main}</span>
                  {key.sub && <span className={`${large ? "text-[8px] tracking-[3px]" : "text-[7px] tracking-[4px]"} font-bold mt-1 opacity-60`}>{key.sub}</span>}
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
        <div className="bg-gradient-to-bl from-purple-50 via-pink-50 to-white px-5 pt-5 pb-3 flex flex-col gap-4 flex-1">
          <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/50 self-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-gray-900">Enter your 4-digit code</h1>
          <p className="text-sm text-gray-500">Code</p>
          <div className="flex justify-start gap-3 -mt-2">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="w-8 h-10 border-b-2 border-green-500 flex items-center justify-center text-xl font-bold">
                {otp[index] || ""}
              </div>
            ))}
          </div>
          {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
        <div className="relative flex flex-col mt-auto">
          <div className="absolute right-5 top-[-54px] z-10">
            <button onClick={handleContinue} disabled={!isReady}
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${isReady ? "bg-green-600" : "bg-green-200 cursor-not-allowed"}`}>
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

        {/* Left */}
        <div className="w-1/2 bg-[#53B175] flex items-center justify-center px-16">
          <div className="text-center">
            <div className="text-[80px] mb-6">📱</div>
            <h1 className="text-[48px] font-bold text-white leading-tight">Verify Your Number</h1>
            <p className="text-white text-[18px] mt-4 opacity-90">
              We sent a 4-digit code to your mobile. Enter it to continue.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white opacity-60" />
              <div className="w-3 h-3 rounded-full bg-white opacity-60" />
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-1/2 bg-white flex items-center justify-center px-16">
          <div className="w-full max-w-[460px]">

            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#7C7C7C] mb-8 hover:text-[#181725] transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>

            <h1 className="text-[32px] font-bold text-[#181725] mb-2">Enter your 4-digit code</h1>
            <p className="text-[#7C7C7C] text-[14px] mb-8">Enter the OTP sent to your mobile number</p>

            {/* OTP Boxes */}
            <div className="flex gap-4 mb-2">
              {[0, 1, 2, 3].map((index) => (
                <div key={index}
                  className={`w-16 h-16 border-2 rounded-[15px] flex items-center justify-center text-2xl font-bold transition ${otp[index] ? "border-[#53B175] text-[#181725]" : "border-[#E2E2E2] text-transparent"}`}>
                  {otp[index] || "·"}
                </div>
              ))}
            </div>
            {error && <p className="text-xs text-red-500 mb-4">{error}</p>}

            <p className="text-[#7C7C7C] text-sm mb-6">
              Didn't receive code?{" "}
              <span className="text-[#53B175] font-semibold cursor-pointer">Resend OTP</span>
            </p>

            {/* Keypad */}
            <div className="mt-2">
              <KeypadUI large />
            </div>

            <button
              onClick={handleContinue}
              disabled={!isReady}
              className={`mt-6 h-[60px] w-full rounded-[19px] text-white font-semibold transition ${isReady ? "bg-[#53B175] hover:opacity-90" : "bg-[#53B175]/40 cursor-not-allowed"}`}
            >
              Verify & Continue
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}