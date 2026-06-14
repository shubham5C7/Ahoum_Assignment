import { useEffect } from "react";
import CarrotLogo from "../Components/logos/CarrotLogo";
import NectarTextLogo from "../Components/logos/NectarTextLogo";
import OnlineGroceriesLogo from "../Components/logos/OnlineGroceriesLogo";
import { useNavigate } from "react-router-dom";

const Splash = (): React.JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      navigate("/onboarding");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#53B175] flex items-center justify-center">
      <div className="flex items-center gap-3">
        {/* Logo */}

        <CarrotLogo />

        {/* Brand */}
        <div>
          <NectarTextLogo />

          <div className="mt-1">
            <OnlineGroceriesLogo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
