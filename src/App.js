import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "./view/pages/dashboard/Dashboard";
import {Product} from "./view/pages/product/Product";
import {Sidebar} from "./view/common/sidebar/Sidebar";


function App() {
  return (
    <div className="flex">

      <BrowserRouter>
          <Sidebar/>
          <Routes>
              <Route path="/" element={<Dashboard/>} ></Route>
              <Route path="/product" element={<Product/>} ></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
