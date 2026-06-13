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

  if (value === "⌫") {
    setOtp(otp.slice(0, -1));
    return;
  }

  if (value === "+*#") return;

  // prevent overflow
  if (otp.length >= OTP_LENGTH) {
    setError("Code cannot exceed 4 digits");
    return;
  }

  setOtp(otp + value);
};

  const handleContinue = () => {
     const OTP_LENGTH = 4;
  if (otp.length !== OTP_LENGTH) {
    setError(`Code must be exactly ${OTP_LENGTH} digits`);
    return;
  }
    if (!/^\d{4}$/.test(otp)) {
    setError("OTP must contain only numbers");
    return;
  }
  
  setError("");
  navigate("/selectlocation");
  };

    const keys = [
    [{ main: "1", sub: "", ghost: false }, { main: "2", sub: "ABC", ghost: false }, { main: "3", sub: "DEF", ghost: false }],
    [{ main: "4", sub: "GHI", ghost: false }, { main: "5", sub: "JKL", ghost: false }, { main: "6", sub: "MNO", ghost: false }],
    [{ main: "7", sub: "PQRS", ghost: false }, { main: "8", sub: "TUV", ghost: false }, { main: "9", sub: "WXYZ", ghost: false }],
    [{ main: "+*#", sub: "", ghost: true }, { main: "0", sub: "", ghost: false }, { main: "⌫", sub: "", ghost: true }],
  ];

const isReady = otp.length === OTP_LENGTH;


  return (
   <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-4">
  <div className="w-full max-w-[400px] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-[560px]">

        <div className="bg-linear-to-bl from-purple-50 via-pink-50 to-white px-5 pt-5 pb-3 flex flex-col gap-4 flex-1">

          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/50 transition-colors self-start"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Title */}
          <h1 className="text-xl font-bold text-gray-900">
            Enter your 4-digit code
          </h1>

          {/* Input */}
        <p className="text-sm text-gray-500">
        Code
        </p>

        {/* OTP Display */}
        <div className="flex justify-start gap-3 -mt-6">
        {[0, 1, 2, 3].map((index) => (
            <div
            key={index}
            className="w-8 h-10 border-b-2 border-green-500 flex items-center justify-center text-xl font-bold"
            >
            {otp[index] || ""}
            </div>
        ))}
        </div>

        {error && (
        <p className="mt-3 text-center text-xs text-red-500">
            {error}
        </p>
        )}
        </div>

        {/* BOTTOM SECTION — gray bg, arrow + keyboard pinned to bottom */}
        <div className="relative flex flex-col mt-auto">

          {/* Arrow button — right aligned above keyboard */}
          <div className="absolute right-5 top-[-54px] z-10">
            <button
            onClick={handleContinue}
              disabled={!isReady}
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                isReady ? "bg-green-600 hover:bg-green-600" : "bg-green-200 cursor-not-allowed"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
    <div className="mt-auto bg-linear-to-t from-[#c0c0c4] to-[#d9d9df] px-2 pt-2 pb-8">
          {keys.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="grid grid-cols-3 gap-1 mb-3"
            >
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
                      <span className="text-[17px] font-bold text-black leading-none">
                        {key.main}
                      </span>

                      {key.sub && (
                        <span className="text-[7px] font-bold tracking-[4px] text-black mt-1">
                          {key.sub}
                        </span>
                      )}
                    </>
                  )}
                </button>
              ))}
            </div>
          ))}
        </div>
        </div>

      </div>
    </div>
  )
}
