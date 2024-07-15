import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./components/Shop/Shop.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Sidebar />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter> 
      
    </>
  );
}

export default App;
