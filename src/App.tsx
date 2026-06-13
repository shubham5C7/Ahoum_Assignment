import { BrowserRouter, Routes, Route } from "react-router-dom";
import NumberPage from "./Pages/NumberPage";
import VerificationPage from "./Pages/VerificationPage";
import SelectLoaction from "./Pages/SelectLoaction";
import HomeScreen from "./Pages/HomeScreen";
import ExploreScreen from "./Pages/ExploreScreen";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NumberPage />} />
        <Route path="/verification" element={<VerificationPage />}/>
        <Route path="/selectlocation" element={<SelectLoaction />}/>
         <Route path="/home" element={<HomeScreen />}/>
         <Route path="/explore" element={<ExploreScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;