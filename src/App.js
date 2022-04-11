import { useState, useEffect } from "react";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home";
import Header from "./component/Header/Header";
import OrderNow from "./component/OrderNow/OrderNow";
import OrderPlaced from "./pages/OrderPlaced/OrderPlaced";
import DashBoard from "./pages/DashBoard/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./Data.json";
import CompleatedOrders from "./component/CompleatedOrders/CompleatedOrders";
import PendingOrders from "./component/PendingOrders/PendingOrders";

function App() {
  const [products, setProducts] = useState(data);
  const [filter, setFilter] = useState("ALL");

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home filter={filter} products={products} setFilter={setFilter} />
            }
          />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="ordernow" element={<OrderNow />} />
          <Route path="orderplaced" element={<OrderPlaced />} />
          <Route path="pendingorders" element={<PendingOrders />} />
          <Route path="compleatedorders" element={<CompleatedOrders />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
