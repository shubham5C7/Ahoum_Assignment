import { BrowserRouter, Routes, Route } from "react-router-dom";
import NumberPage from "./Pages/NumberPage";
import VerificationPage from "./Pages/VerificationPage";
import SelectLoaction from "./Pages/SelectLoaction";
import HomeScreen from "./Pages/HomeScreen";
import ExploreScreen from "./Pages/ExploreScreen";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Splash from "./Pages/Splash";
import OnBoarding from "./Pages/OnBoarding";
import SignIn from "./Pages/SignIn";
import ProductDetails from "./Pages/ProductDetails";
import SearchScreen from "./Pages/SearchScreen";
import SearchSelected from "./Pages/SearchSelected";
import Cart from "./Pages/Cart";
import Favourite from "./Pages/Favorurite";
import CheckOut from "./Pages/CheckOut";
import OrderAccepted from "./Pages/OrderAcepted";
import Error from "./Pages/Error";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />}/>
        <Route path="/onboarding" element={<OnBoarding />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/number" element={<NumberPage />} />
        <Route path="/verification" element={<VerificationPage />}/>
        <Route path="/selectlocation" element={<SelectLoaction />}/>
         <Route path="/home" element={<HomeScreen />}/>
         <Route path="/explore" element={<ExploreScreen/>}/>
         <Route path="/search" element={<SearchScreen />} />
         <Route path="/category" element={<SearchSelected />} />
        <Route path="/product/:id" element={<ProductDetails />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/order-accepted" element={<OrderAccepted />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;