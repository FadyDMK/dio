import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./components/Shop/Shop.jsx";

function App() {
  return (
    <>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Sidebar />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
            </Route>
          </Routes>
        </BrowserRouter> 
      
    </>
  );
}

export default App;
